<?php
/*
 * Formulario de contacto de tarewa.com (sección #contacto del index).
 * Valida el POST y envía la consulta a ventas@tarewa.com con mail() del hosting.
 *
 * - Con JS (fetch con "Accept: application/json"): responde {"ok": bool, "error": "..."}
 *   y el navegador lleva a /gracias/.
 * - Sin JS (POST normal): redirige a /gracias/ o muestra un aviso de error.
 *
 * Antispam: campo trampa "sitio_web" (invisible; si llega completo se descarta
 * en silencio) y rechazo de mensajes con muchos links.
 * Compatible con PHP 7.0+.
 */

const DESTINO     = 'ventas@tarewa.com';
const REMITENTE   = 'web@tarewa.com';   // From del mail; el Reply-To es el email del cliente
const URL_GRACIAS = '/gracias/';
const MAX_LINKS   = 3;

date_default_timezone_set('America/Argentina/Buenos_Aires');

$quiereJson = stripos(isset($_SERVER['HTTP_ACCEPT']) ? $_SERVER['HTTP_ACCEPT'] : '', 'application/json') !== false;

function responder($ok, $error = '', $status = 200)
{
    global $quiereJson;
    if ($quiereJson) {
        http_response_code($status);
        header('Content-Type: application/json; charset=utf-8');
        header('Cache-Control: no-store');
        echo json_encode(array('ok' => $ok, 'error' => $error), JSON_UNESCAPED_UNICODE);
        exit;
    }
    if ($ok) {
        header('Location: ' . URL_GRACIAS, true, 303);
        exit;
    }
    http_response_code($status);
    header('Content-Type: text/html; charset=utf-8');
    $msg = htmlspecialchars($error, ENT_QUOTES, 'UTF-8');
    echo "<!doctype html><html lang=\"es-AR\"><meta charset=\"utf-8\"><meta name=\"robots\" content=\"noindex\">"
       . "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><title>No se pudo enviar | TAREWA</title>"
       . "<p>{$msg}</p><p><a href=\"/#contacto\">Volver al formulario</a> · "
       . "<a href=\"mailto:" . DESTINO . "\">" . DESTINO . "</a></p></html>";
    exit;
}

// Campo de texto del POST, recortado. Si es de una línea, sin saltos (evita
// inyección de cabeceras en Subject/Reply-To).
function campo($nombre, $unaLinea = true)
{
    $v = isset($_POST[$nombre]) && is_string($_POST[$nombre]) ? trim($_POST[$nombre]) : '';
    if ($unaLinea) {
        $v = trim(preg_replace('/[\r\n\t]+/', ' ', $v));
    }
    return $v;
}

// Cabecera con texto UTF-8 (tildes, ñ) codificada según RFC 2047.
function cabeceraUtf8($texto)
{
    return '=?UTF-8?B?' . base64_encode($texto) . '?=';
}

if (!isset($_SERVER['REQUEST_METHOD']) || $_SERVER['REQUEST_METHOD'] !== 'POST') {
    if ($quiereJson) {
        responder(false, 'Método no permitido.', 405);
    }
    header('Location: /#contacto', true, 303);
    exit;
}

$errorGenerico = 'No pudimos enviar tu consulta. Probá de nuevo o escribinos a ' . DESTINO . '.';

// Trampa para bots: se finge éxito y no se envía nada.
if (campo('sitio_web') !== '') {
    responder(true);
}

$nombre   = campo('nombre');
$empresa  = campo('empresa');
$telefono = campo('telefono');
$email    = campo('email');
$producto = campo('producto');
$mensaje  = campo('mensaje', false);

if ($nombre === '' || $email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    responder(false, 'Completá tu nombre y un email válido.', 422);
}
// Límites en bytes (holgados para UTF-8); coinciden con los maxlength del form.
if (strlen($nombre) > 400 || strlen($empresa) > 600 || strlen($telefono) > 200
    || strlen($email) > 254 || strlen($producto) > 400 || strlen($mensaje) > 20000) {
    responder(false, 'Algún campo es demasiado largo. Acortalo y volvé a enviar.', 422);
}
if (preg_match_all('~https?://|www\.~i', $mensaje) > MAX_LINKS) {
    responder(false, 'El mensaje tiene demasiados links. Sacalos o escribinos a ' . DESTINO . '.', 422);
}

$asunto = 'Consulta web: ' . ($producto !== '' ? $producto : 'General') . ' — ' . $nombre;

$cuerpo = "Nueva consulta desde el formulario de tarewa.com\n\n"
        . "Nombre:   {$nombre}\n"
        . 'Empresa:  ' . ($empresa !== '' ? $empresa : '-') . "\n"
        . 'Teléfono: ' . ($telefono !== '' ? $telefono : '-') . "\n"
        . "Email:    {$email}\n"
        . 'Producto: ' . ($producto !== '' ? $producto : '-') . "\n\n"
        . "Mensaje:\n" . ($mensaje !== '' ? $mensaje : '-') . "\n\n"
        . "--\n"
        . 'Enviado el ' . date('d/m/Y H:i') . ' desde la IP ' . (isset($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : '?') . "\n"
        . "Para responder, contestá este mail (va directo al cliente).\n";

$cabeceras = implode("\r\n", array(
    'From: ' . cabeceraUtf8('Web TAREWA') . ' <' . REMITENTE . '>',
    'Reply-To: ' . cabeceraUtf8($nombre) . ' <' . $email . '>',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
    'X-Mailer: tarewa.com',
));

if (!mail(DESTINO, cabeceraUtf8($asunto), $cuerpo, $cabeceras)) {
    responder(false, $errorGenerico, 500);
}

responder(true);
