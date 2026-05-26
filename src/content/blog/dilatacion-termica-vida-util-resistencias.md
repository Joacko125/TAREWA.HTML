---
title: "Dilatación térmica y vida útil: el diseño mecánico importa tanto como la potencia"
description: "Una resistencia que calienta bien pero está montada mal se rompe igual. Repasamos por qué la dilatación térmica define la vida útil y qué hay que tener en cuenta al diseñar el equipo."
publishDate: 2026-04-27
author: "TAREWA"
draft: false
image: "/assets/blog/dilatacion-termica-vida-util-resistencias.jpg"
---

Cuando se piensa en la vida útil de una resistencia industrial, la atención se concentra casi siempre en lo eléctrico: potencia, tensión, carga superficial, material de vaina. Todo eso es real e importante, pero hay un factor que actúa silenciosamente y que define cuánto va a durar la pieza en servicio: la **dilatación térmica**.

Una resistencia que calienta correctamente pero está mal montada mecánicamente, se rompe antes de tiempo. No por la electricidad, sino por la **fatiga mecánica acumulada en cada ciclo térmico**. En esta nota explicamos por qué, y damos los criterios que usamos en TAREWA al diseñar las piezas y al asesorar a los clientes en el montaje.

## Por qué se dilatan los materiales

Todo material sólido se dilata cuando se calienta. La cantidad que se dilata depende de su **coeficiente de dilatación lineal** (α), la **temperatura de partida** y la **temperatura final**. La fórmula básica es:

> **ΔL = L₀ · α · ΔT**

Para los materiales típicos de una resistencia, los valores aproximados son:

- **Cobre**: α ≈ 17 × 10⁻⁶ /°C
- **Acero inoxidable AISI 304/316**: α ≈ 16-17 × 10⁻⁶ /°C
- **Aceros al carbono (típicos de cuerpos de equipos)**: α ≈ 12 × 10⁻⁶ /°C
- **Cerámicos y refractarios**: α ≈ 5-9 × 10⁻⁶ /°C

Para hacerlo concreto: una **resistencia de 1 metro de largo** que pasa de 20°C a 500°C se dilata aproximadamente **8 milímetros** si es de acero inoxidable. Si está rígidamente sujeta en ambos extremos y el cuerpo del equipo se dilata menos (12 × 10⁻⁶ /°C contra 16 × 10⁻⁶ /°C), aparece una **diferencia de 2 milímetros** entre lo que se dilata la resistencia y lo que se dilata su alojamiento.

> Esos 2 milímetros parecen poco, pero generan fuerzas internas enormes. La resistencia no tiene "para dónde ir" y termina deformándose o rompiendo soldaduras.

## Qué provoca la dilatación mal absorbida

Cuando una resistencia se dilata más que su alojamiento (o al revés) y no hay forma de absorber esa diferencia, aparecen consecuencias mecánicas concretas:

- **Deformación permanente** de la vaina (pandeo, curvado).
- **Fisuras en las uniones soldadas** entre la vaina y los terminales.
- **Aflojamiento de los terminales** de conexión y, eventualmente, falla eléctrica en la unión.
- **Rotura del aislante interno** (MgO) por fatiga, con caída de la aislación a tierra.
- **Desplazamiento de los soportes cerámicos** en resistencias de hilo expuesto, con riesgo de contacto entre espiras.

Lo que ves desde afuera es una resistencia "que se rompió" sin razón aparente. Lo que pasó por dentro es fatiga mecánica acumulada en miles de ciclos térmicos.

## Cómo se absorbe la dilatación en el diseño

El criterio general es **dejar siempre un punto libre** que pueda moverse. Algunas estrategias concretas:

### 1. Punto fijo + punto libre

En resistencias largas, se fija mecánicamente solo **un extremo** (típicamente el de la conexión eléctrica) y se deja el otro **libre o con apoyo deslizante**. Así la dilatación se traduce en movimiento del extremo libre, sin generar tensiones.

### 2. Formas con curvas absorbedoras

En resistencias formadas (en U, en W, en serpentín), los **dobleces y curvas absorben la dilatación** funcionando como pequeños resortes. Por eso una resistencia recta de 2 metros es mucho más sensible a la dilatación que una resistencia en U de longitud total similar.

### 3. Holguras en los pasamuros

Cuando una resistencia atraviesa una pared de tanque o de horno, el agujero por donde pasa debe tener una **holgura suficiente** para permitir el movimiento radial y axial. Una resistencia ajustada al diámetro exterior del pasamuro se traba al dilatarse.

### 4. Soportes cerámicos con movimiento

En resistencias suspendidas de hornos de alta temperatura, los soportes cerámicos no deben estar rígidamente fijos en posiciones fijas. Tienen que tener **algún juego controlado** para que las espirales del hilo se acomoden con los ciclos térmicos.

## Casos típicos donde se subestima la dilatación

A lo largo de los años hemos visto muchos casos de fallas atribuidas a "mala calidad" que en realidad eran problemas de montaje. Algunos típicos:

### Resistencia tubular dentro de un canal mecanizado

Una resistencia tubular de 50 cm se monta dentro de un canal mecanizado en el cuerpo de una matriz a 250°C. Si el canal tiene exactamente la longitud de la vaina a temperatura ambiente, al calentar la resistencia se dilata y queda **comprimida axialmente**. Resultado: pandeo y rotura por fatiga.

> La solución es dejar entre 1-2 mm de juego longitudinal por cada 100 mm de longitud, dependiendo de la temperatura de trabajo.

### Resistencia blindada de inmersión con bridado rígido

Una resistencia de inmersión de 1,5 metros se brida rígidamente al tanque por la conexión, y el otro extremo se apoya en un soporte fijo soldado al fondo. Al pasar de fría a temperatura de trabajo, la resistencia "empuja" el soporte y termina rompiendo la soldadura o curvándose.

> Lo correcto es dejar el extremo opuesto a la conexión **simplemente apoyado**, no soldado. Si por seguridad mecánica se quiere un guiado, se usa una **guía deslizante**, no un fijado rígido.

### Resistencia tipo abrazadera con terminal salido

Las abrazaderas se ajustan al cilindro a temperatura ambiente. Cuando el cilindro se calienta y se dilata, la abrazadera tiende a aflojarse o a moverse. Si la salida del terminal eléctrico está rígidamente sujeta a una estructura fija, el movimiento de la abrazadera **tira del terminal** y termina rompiéndolo.

> Los terminales de abrazaderas deben quedar con **un loop de cable suficiente** para absorber el movimiento de la pieza al dilatarse.

## La regla práctica: pensar el equipo "caliente"

El error más común al diseñar un equipo es **diseñarlo en frío** y suponer que en caliente va a funcionar igual. No funciona así. Las dimensiones, los apoyos, los huelgos y las conexiones tienen que pensarse para la **temperatura de operación**, no para la temperatura de montaje.

Antes de poner en servicio un equipo con resistencias industriales, conviene preguntarse:

- ¿Hay al menos un extremo libre que pueda moverse?
- ¿Las dimensiones de los pasamuros y alojamientos tienen holgura?
- ¿Los terminales tienen cable suficiente para absorber el movimiento?
- ¿Los soportes intermedios son deslizantes o fijos? (Lo correcto es deslizantes.)
- ¿La forma de la resistencia tiene curvas que ayuden a absorber la dilatación?

Una respuesta negativa a varias de esas preguntas indica que el equipo va a tener problemas tarde o temprano.

## Conclusión

La potencia eléctrica define cuánto calor entrega una resistencia, pero la **dilatación térmica define cuánto dura instalada**. En TAREWA, cuando nos consultan por una resistencia para un equipo nuevo, pedimos siempre el plano del alojamiento para revisar que el diseño mecánico esté pensado para los ciclos térmicos. Si tu equipo viene fallando por roturas mecánicas recurrentes, mandanos fotos y plano por WhatsApp o desde el [formulario de contacto](/#contacto). Muchas veces el problema se resuelve con un ajuste de montaje sin necesidad de cambiar la pieza.

<!-- TODO TAREWA: revisar datos técnicos específicos (coeficientes de dilatación, ejemplos numéricos, holguras recomendadas) y ajustar a la realidad operativa de la fábrica. -->
