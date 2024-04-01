+++
title = 'Acerca De Nosotros'
layout = 'about'
date = 2024-03-31T17:40:06-05:00
draft = false
url = '/acerca-de-nosotros/'
summary = 'Conoce más sobre nosotros'
+++


Hola mi amorcito, en esta entrada quiero enseñarte un poco de la sintaxis que debes usar cuando vayas a crear tus propias entradas en el blog.

## Pero primero... ¿Qué es MarkDown?

Markdown es un lenguaje muy sencillo de aprender. Se basa en la sintaxis natural del lenguaje humano, por lo que no tienes que aprenderte ninguna regla complicada. Por ejemplo, para crear un título, simplemente escribes el título entre asteriscos o guiones bajos.

Markdown fue creado en 2004 por John Gruber, un desarrollador de software estadounidense. Gruber quería crear un lenguaje de marcado que fuera sencillo de aprender y usar, y que permitiera crear documentos formateados de forma rápida y fácil.

En general, es un lenguaje de texto que te permite organizar por medio de marcadores los diferentes contenidos de un documento (similar a LaTeX).

## Ahora si, empecemos

Para lograr mostrarte un poco cómo usar MarkDown, vamos a crear una entrada que hable sobre cómo funcionan las baterías. Para empezar, debes crear un archivo que termine en **.md** como **Introduccion_Baterias.md**.

Puedes abrir ese archivo con un editor de texto normal o quizá mejor sea instalarte un editor nativo de MarkDown para que veas todo con más colores y lo puedas entender más fácilmente. Una vez estés editando **Introduccion_Baterias.md** debes poner la metadata de la entrada, esto es, información que no se muestra directamente pero ayuda a nuestro blog a saber un poco sobre tu entrada.

Para editar la metadata, debes poner una delimitación para que el sitio entienda qué es metadata y qué es contenido. Esto lo haces de la siguiente forma:

```markdown
---
external: false
draft: false
title: ¿Cómo funcionan las baterías?
description: Una breve explicación sobre los diferentes tipos de baterías que hay
date: 2024-01-31
---
```

### Ahora, miremos lo que hace cada opción:
- `external`: aqui indicas que esta entrada no lleva a otras plataformas como YouTube o Instagram
- `draft`: indicas si tu entrada está lista o no para publicarse (si pones false, se publica)
- `title`: aquí pones el titulo de tu entrada
- `description`: una pequeña descripción de tu entrada
- `date`: la fecha en la que quieres publicar tu entrada, en formato aaaa-mm-dd

¡Listo! Continuemos con cómo crear contenido que si se va a ver en el blog.

## Títulos:

Esto es algo bastante fácil una vez entiendes la dinámica, mira mi amor:

Para empezar, si quieres hacer un título grande debes usar dos almohadillas así:

```markdown
## Introducción:

Las baterías son dispositivos que convierten la energía química en energía eléctrica. Están
 formadas por dos electrodos, un ánodo y un cátodo, y un electrolito que los separa.

El ánodo es el electrodo donde se produce la reacción de oxidación, que libera electrones. 
El cátodo es el electrodo donde se produce la reacción de reducción, que capta electrones. 
El electrolito es una sustancia que permite el paso de los electrones entre los dos 
electrodos.

Existen diferentes tipos de baterías, según el tipo de electrolito que utilizan. Las 
baterías más comunes son las baterías de plomo-ácido, las baterías de níquel-cadmio, las
 baterías de litio-ion y las baterías de sodio-ion.

```

Aquí puedes ver que lo que no tenga ningún marcador se entiende como un parrafo normal y que el título se identifica con un color diferente.

si quieres hacer un título más pequeño, puedes usar 3, 4, 5 o 6 almohadillas, entre más almohadillas más pequeño será el título.

## Listas:

Ahora supongamos que quieres exponer los diferentes tipos de baterías que hay, esto es muy fácil pues simplemente debes poner guiones por cada elemento, por ejemplo:

```markdown
## Tipos de baterías:

- **Baterías de plomo-ácido:** Son las baterías más comunes. Se utilizan en coches, motos, etc.
- **Baterías de níquel-cadmio:** Son más duraderas que las baterías de plomo-ácido, pero también son más caras. Se utilizan en - ordenadores portátiles, juguetes, etc.
- **Baterías de litio-ion:** Son las baterías más eficientes y ligeras. Se utilizan en teléfonos móviles, ordenadores portátiles, vehículos eléctricos, etc.
- **Baterías de sodio-ion:** Son una nueva tecnología que promete ser más eficiente y barata que las baterías de litio-ion.

```
Aquí puedes ver también que para poner **negrilla** en una oración basta con poner dos asteríscos al inicio y al final, similarmente para lograr un efecto *itálico* pones un solo asterísco a ambos lados.


### Con esto considero que ya estarías casi lista para escribir entradas básicas al blog. Sin embargo te voy a dejar otras funcionalidades que puedes usar para que las pruebes:

- **Ecuaciones**: Puedes escribir ecuaciones químicas o matemáticas por medio de `{% sub %} {% /sub %}` para subíndices y `{% sup %} {% /sup %}` para exponentes. Por ejemplo `H{% sub %}2{% /sub %}O` se va a mostrar como H{% sub %}2{% /sub %}O.
- **Resaltar y tachar**: Puedes hacerlo con los marcadores `{% mark %}resaltado{% /mark %}` y `~~tachado~~`, que resultan en texto {% mark %}resaltado{% /mark %} o ~~tachado~~.
- **Links**: Puedes poner enlaces en cualquier lado por medio de la estructura `[link](youtube.com)` donde lo que está en llaves es el texto que se muestra y lo que está entre paréntesis es el link, en este caso resultamos con este [link](youtube.com).

**Actualización:** En este nuevo blog puedes usar LaTeX para escribir fórmulas, por ejemplo ya no tienes que escribir `H{% sub %}2{% /sub %}O` sino que puedes escribir `H_2O` entre $$ y se va a mostrar como $H_2O$.

Te amo, estoy emocionado de lo que podemos hacer juntos. Si tienes alguna duda no dudes en preguntarme o revisar la [documentación oficial](https://markdoc.dev/).
