---
title: "Cómo elegir la potencia correcta de una resistencia para tu proceso industrial"
description: "Calcular la potencia de una resistencia no es estimar a ojo. Te explicamos cómo lo hacemos en TAREWA, con la fórmula básica y los factores que casi nadie tiene en cuenta."
publishDate: 2026-05-25
author: "TAREWA"
draft: false
image: "/assets/blog/como-elegir-potencia-resistencia-industrial.jpg"
---

Una de las consultas más frecuentes que recibimos en TAREWA es la misma: *"Necesito una resistencia, ¿de cuántos watts?"*. La respuesta honesta nunca es un número directo. La potencia correcta de una resistencia depende de varios factores que conviene conocer antes de hacer un pedido, porque elegir mal cuesta dinero y, sobre todo, cuesta tiempo de producción.

En esta nota te dejamos el procedimiento que usamos internamente para dimensionar resistencias industriales, con el detalle suficiente para que puedas validar (o discutir) lo que te recomienden.

## La fórmula básica que casi siempre se subestima

El cálculo de potencia parte de una ecuación física muy simple:

> **Q = m · c · ΔT**

Donde **Q** es la energía necesaria (en joules), **m** la masa a calentar (kg), **c** el calor específico del material (J/kg·°C) y **ΔT** la diferencia de temperatura que querés alcanzar.

Esa fórmula te da la **energía total** necesaria para llevar el material desde temperatura inicial hasta temperatura final. Para convertirla en **potencia eléctrica**, dividís por el tiempo en que necesitás lograr ese calentamiento:

> **P (W) = Q / t (segundos)**

Hasta acá, ningún ingeniero se sorprende. El problema empieza cuando el cálculo se hace sin tener en cuenta lo demás.

## Lo que casi nadie suma al cálculo (y es donde se rompe la cuenta)

En el mundo real, la potencia útil para calentar el producto es solo una parte del total. La potencia que tenés que **especificar** en la resistencia debe incluir:

- **Pérdidas por radiación y convección hacia el ambiente**: especialmente importantes en equipos sin aislación térmica adecuada. Pueden ser del 15% al 40% de la potencia útil.
- **Calentamiento del propio equipo**: la masa del recipiente, la cañería o el horno también absorbe energía hasta llegar a régimen. Si tenés un tanque de acero de 200 kg, esos 200 kg también se calientan.
- **Reposición continua**: si el proceso introduce producto frío constantemente (por ejemplo, agua de red entrando a un calentador), hay que sostener el ΔT contra esa entrada permanente.
- **Margen de seguridad de diseño**: en TAREWA solemos sumar entre 15% y 25% adicional para garantizar tiempos de calentamiento aceptables incluso en condiciones desfavorables (baja tensión de línea, ambiente frío, suciedad acumulada).

Cuando alguien te dice *"poné una resistencia de 3000 W y listo"* sin preguntar nada de lo anterior, es probable que la pieza funcione el primer día y empiece a quedar corta en cuanto el proceso exija más.

## Un ejemplo concreto: calentar agua

Para fijar ideas, hagamos un caso típico: necesitamos llevar **100 litros de agua** desde 15°C hasta 80°C en **una hora**.

- m = 100 kg (1 litro de agua = 1 kg)
- c = 4186 J/kg·°C (calor específico del agua)
- ΔT = 80 - 15 = 65°C
- t = 3600 segundos (1 hora)

Energía: Q = 100 · 4186 · 65 = **27.209.000 J**

Potencia útil: P = 27.209.000 / 3600 ≈ **7.560 W**

Si paramos acá pediríamos una resistencia de 7,5 kW. Pero si sumamos:

- 25% por pérdidas y calentamiento del recipiente → +1.890 W
- 15% por margen de diseño → +1.418 W

Llegamos a una potencia recomendada de aproximadamente **10.860 W**. En la práctica, especificaríamos una resistencia de **11 kW**.

La diferencia entre los 7,5 kW del cálculo crudo y los 11 kW recomendados son **casi 3,5 kW** que, mal calculados, condenan al equipo a no llegar nunca a temperatura en el tiempo que necesitás.

## Carga superficial: el factor que define la vida útil

La potencia total no es lo único que importa. Una vez que sabés cuántos watts necesitás, hay que ver **cómo se distribuyen** sobre la superficie del elemento calefactor. Esto se llama **carga superficial** y se mide en W/cm².

> Una carga superficial demasiado alta acorta dramáticamente la vida de la resistencia. Es la causa silenciosa de la mayoría de fallas prematuras.

Como referencia general:

- **Calentamiento de aire en circulación forzada**: hasta 4-6 W/cm².
- **Inmersión en agua o aceites limpios**: hasta 8-10 W/cm².
- **Inmersión en líquidos viscosos o con sedimentos**: 3-5 W/cm² para evitar puntos de sobrecalentamiento.
- **Aire estático (radiación a hornos)**: 2-3 W/cm² o menos.

Cuando en TAREWA fabricamos una resistencia, calculamos la longitud y el diámetro de la vaina para no superar el valor recomendado según la aplicación. Es lo que diferencia una pieza pensada de una pieza fabricada sin criterio.

## Tensión disponible y configuración eléctrica

El último elemento del cálculo es la **tensión disponible** y la **configuración** del circuito. La misma potencia puede repartirse de muchas maneras:

- 220 V monofásica para potencias bajas (típicamente hasta 4-5 kW).
- 380 V trifásica (3x220 V en estrella o triángulo) para potencias medias y altas.
- 24 V o 48 V de control en aplicaciones específicas.

La configuración influye en el diámetro del cable de alimentación, las protecciones eléctricas y, sobre todo, en cómo se distribuye la corriente entre fases. Una resistencia trifásica mal balanceada hace que una fase trabaje más que las otras y genera problemas tanto en la propia resistencia como en el tablero.

## Cómo lo hacemos en TAREWA

Cuando recibimos una consulta de pedido, lo primero que pedimos son cinco datos:

1. **Qué querés calentar** (agua, aceite, aire, sólido, ambiente).
2. **Cuánta cantidad** (litros, m³, kg, m² de superficie).
3. **Desde qué temperatura, hasta qué temperatura, en cuánto tiempo**.
4. **Tensión disponible** en el tablero.
5. **Tipo de equipo** (tanque, cañería, horno, calefactor de aire, etc.) y si tiene aislación térmica.

Con esos datos hacemos el cálculo completo (incluyendo pérdidas, masa del equipo y margen) y proponemos no solo la potencia, sino también la **geometría**, el **material de vaina** más adecuado y la **carga superficial** segura.

## Conclusión rápida

Elegir bien la potencia de una resistencia es lo que separa un equipo que funciona y dura, de uno que pasa a ser un dolor de cabeza permanente. Si dudás sobre el cálculo para una aplicación nueva, escribinos por WhatsApp o desde el [formulario de contacto](/#contacto). Te respondemos con un análisis técnico claro y, si es necesario, ajustamos el diseño para que la pieza dure y rinda.

<!-- TODO TAREWA: revisar datos técnicos específicos (temperaturas, potencias, cargas superficiales, calor específico del agua) y ajustar a la realidad operativa de la fábrica. -->
