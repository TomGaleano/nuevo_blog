+++
title = 'Minecraft'
date = 2024-06-27T14:38:36-05:00
draft = false
bookcase_cover_src = 'covers/minecraft.png'
bookcase_cover_src_dark = 'covers/minecraft-b.png'
tags = ['juegos', 'minecraft']
+++

# Guía rápida para empezar a jugar en el servidor

-----
## Instalación de Java SE
Es el lenguaje de programación detrás de Minecraft, por lo que es necesario tenerlo instalado en tu computadora. Particularmente, dado que la versión de Minecraft que usamos en el servidor es la más actualizada, necesitarás la versión más actualizada de Java SE. Puedes descargarla [aquí](https://www.oracle.com/co/java/technologies/downloads/).

Verás versiones disponibles para Windows, Mac y Linux. Descarga la que corresponda a tu sistema operativo y apenas termine de descargar, haz doble clic en el archivo para instalarlo. Sigue las instrucciones del instalador y listo.

-----
## Minecraft (oficial y pirata)
Ahora que tienes Java instalado, es momento de descargar Minecraft. Si lo tienes comprado puedes descargarlo desde la [página oficial](https://www.minecraft.net/es-es/download/). Sin embargo para este tutorial recomiendo usar **MultiMC** que es un lanzador de Minecraft que permite instalar los mods que usamos más fácilmente. Puedes descargarlo [aquí](https://multimc.org/#Download). Si no tienes el juego comprado puedes instalar la versión pirata de MultiMC llamada **UltimMC**, puedes descargarla [aquí](https://nightly.link/UltimMC/Launcher/workflows/main/develop) fijándote en la terminación de los nombres de los archivos (lin64, osx64 y win32) para obtener la versión para tu computadora.

### Instalación:
1. Descarga el archivo correspondiente a tu sistema operativo.
2. Haz clic derecho y extrae el archivo ```.zip``` a algún lugar de fácil acceso.
3. Abre la carpeta extraída y haz doble clic en el archivo ejecutable ```MultiMC.exe``` (```UltimMC.exe``` si usas el lanzador pirata).
4. Allí se abrirá el instalador, en general es bastante intuitivo, tienes que elegir la versión de Java que instalaste previamente y seguir las instrucciones.

Al terminar la instalación verás que se abre el lanzador y muestra algo como esto:
![minecraft-image-1.png](https://raw.githubusercontent.com/TomGaleano/nuevo_blog/main/public/minecraft-image-1.png)
Así, tienes que añadir una nueva instancia, para ello haz clic en el botón ```Add Instance``` y elige la versión ```1.21```. Luego, volverás a la pantalla anterior y tendrás que hacer doble clic sobre la versión que acabas de instalar.

Un nuevo aviso surgirá para informarte que debes iniciar sesión.

![minecraft-image-1.png](https://raw.githubusercontent.com/TomGaleano/nuevo_blog/main/public/minecraft-image-2.png)

Dale clic a ```Yes```, entonces verás una pantalla así:

![minecraft-image-1.png](https://raw.githubusercontent.com/TomGaleano/nuevo_blog/main/public/minecraft-image-3.png)

Selecciona ```Add Microsoft``` en caso de tener el juego comprado y asociado a tu cuenta de Microsoft. En caso que no tengas el juego comprado, verás la opción de ```Add Locale``` y tendrás que hacer clic en ella para elegir un nombre temporal con el cual jugar.

Hecho esto, verás que puedes abrir el juego y jugarlo sin problemas.

-----

## Mods de optimización (recomendado pero opcional)

Si no tienes una computadora muy potente, notarás que el juego no anda tan fluido como quisieras. Para solucionar esto, vuelve al lanzador y haz un solo click en la versión que instalaste y dale al botón de ```Edit Instance```.

![minecraft-image-1.png](https://raw.githubusercontent.com/TomGaleano/nuevo_blog/main/public/minecraft-image-4.png)

Donde verás que se abre una ventana con varias opciones:

![minecraft-image-1.png](https://raw.githubusercontent.com/TomGaleano/nuevo_blog/main/public/minecraft-image-5.png)

Allí, da clic a ```Install Fabric```, este es la base de muchos otros mods, verás una nueva ventana que te pregunta qué versión instalar, debes elegir la versión más reciente y darle a ```Ok```.

Ahora, sin cerrar el lanzador descarga los mods [sodium](https://www.curseforge.com/minecraft/mc-mods/sodium) y [lithium](https://www.curseforge.com/minecraft/mc-mods/lithium), ten presente al descargar especificar la versión del juego así como que el mod loader es Fabric, así:

![minecraft-image-1.png](https://raw.githubusercontent.com/TomGaleano/nuevo_blog/main/public/minecraft-image-6.png)

Una vez descargados ambos archivos ```.jar```, vuelve al lanzador y da clic en ```Loader mods```,

![minecraft-image-1.png](https://raw.githubusercontent.com/TomGaleano/nuevo_blog/main/public/minecraft-image-7.png)

Aquí, da clic en ```Add``` y selecciona los archivos que descargaste previamente.

![minecraft-image-1.png](https://raw.githubusercontent.com/TomGaleano/nuevo_blog/main/public/minecraft-image-8.png)

Hecho esto, cierra la ventana y da clic en ```Launch```.

Ahora puedes ir a la configuración del juego y a la sección de gráficos, allí podrás modificar las opciones para que el juego corra más fluido.

-----

## Conexión al servidor

Una vez dentro del juego, ve a la sección de multijugador y da clic en ```Add Server```, allí debes poner la dirección del servidor ```149.130.170.21``` y darle un nombre.

### Reglas del servidor
1. No hacer trampas.
2. Ser respetuoso con los demás jugadores.
3. No destruir construcciones ajenas.
4. No hacer spam.
5. No usar mods que den ventaja sobre los demás jugadores.
6. No abusar de bugs o herramientas para localizar estructuras con la semilla del mundo.
7. No vivir en Tenjo.

## Actualización del server 3.14
El número es arbitrario, por algo debía empezar...

En esta versión integramos 11 datapacks para ampliar la experiencia de los jugadores en el servidor, estos son:
- [Dynamic torches](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqa2FfemdsdkJIRkkxRzlnejh5Y1RmOWxNRGJpQXxBQ3Jtc0ttc1dyT3g0YVhpQm1GN2RXQmgxWXltSXNkZTRlU2FEVzBpQW1jelNRNE9jemhzWDlUWVE3M1dNRUdvRERNelFoYnh6T2ZGWVJvMDVDV1NVeHhzQ0NrUlFHY3UyU1QyazdFT3JxNEE1NkIyb0tDZkdWaw&q=https%3A%2F%2Fmodrinth.com%2Fdatapack%2Fdynamic-torches&v=ZwmogE_9xmQ): Hace que las antorchas emitan su luz incluso cuando no están colocadas en el mundo, es decir que iluminan cuando están en tu mano o cuando las botas en una cueva.
- [Explorify*](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbW5YUTlJT2FSMy1PZFRsMzRFemllWURCeW16UXxBQ3Jtc0tsNzJxX3VYRmdhcjVzdmRXT0JOWm1qcEx6N3FLNjVYYlJaUVUyakZ3amdQMnRIb1ZlY3h1d1c3M1ZjQU91UEpMUTIxYVpFZThkbDViUlNjYV9NZ3kyc2dGb3ozSmlfRUhhcFVMbndFYkl6U3I3aEh0aw&q=https%3A%2F%2Fmodrinth.com%2Fdatapack%2Fexplorify&v=ZwmogE_9xmQ): Añade decenas de nuevas estructuras al juego que pueden encontrar en todos los biomas, entre ellos están la casa del aldeano solitario, bastiones renovados en el Nether e incluso barcos hundidos en el End.
- [Hallucinate](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbGwyNFN2QUJfaWF5NE8yc1lFYlZWMWdLT0Nhd3xBQ3Jtc0tuOFZ3dkIydHlTYTZad2llX0c2dklkVWRFX01lMllqWUZRT3ZiM3N4cVZmdS1xQnZTRjVlT3ktME0tdUhNSGFZVmxqR2x5WTVpZXRpVFFwTks0dEczT0pDZmpncU9WbVBTUDQwM3lsVjJqRUdDTEsxNA&q=https%3A%2F%2Fmodrinth.com%2Fdatapack%2Fkyb-hallucinate&v=ZwmogE_9xmQ): La guarida del Warden es muuuucho más complicada, vas a empezar a alucinar cuando estés en esa zona y haces ruido.
- [Hearts*](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbi1xcHJvNU5VWFBfbHBlWDNxRzFnN1FrRFNWZ3xBQ3Jtc0ttczRhd21VeG90MWI2QmFWX0IyTmlIRExSTnR6a3V4REozUnc3WDhjeFBYUkNGcWdvdDZNQjZBWG1pbU0xeEl3Z2lmNDdDamJKRkdhdW5ESG12d2VLejFQVWFlX3R3cG1EWGpYUVFSUXpaQmc5NkZ1OA&q=https%3A%2F%2Fmodrinth.com%2Fdatapack%2Fhearths&v=ZwmogE_9xmQ): Nuevas estructuras al Nether para que el ambiente no sea tan repetitivo.
- [Villager Hero+](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbDVWVlhrSDRsOXRwTmFzWG15Z1Z5WkNkbTdoQXxBQ3Jtc0trd2YtbzlmR1ZjcFBqREFRR3NMaWswTmJ4S25zTmNScXFROHdGdDk1blM4TG9Sa09KOGNxSmxmYzhTV3ptTlUzM0w5LVN1Z2ZPS0ZfQUkySXRxdzBSRk53VVZFMXFqLW40TlM2ZGhKcTJBVzdxY3V5bw&q=https%3A%2F%2Fmodrinth.com%2Fdatapack%2Fvillage-hero-plus&v=ZwmogE_9xmQ): Mejoras a las Raids y al defender a los aldeanos.
- [Nice Mobs Remastered Friends & Foes*](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbWJubF85eXlhanVhdkhZc1pTdzVVSy04cEFzQXxBQ3Jtc0tsTEpBQXZ4eEYtUHpMVzc1SW8yS2kxalpGQ1Y3VklibTVSSW5MYTlWamlnZVlwTFJ5RE1xNmI3d0o0T1BOUm1HWnlXYlBPeHZyOGpQSDVEZzgwaDV2Si1WMEluSy1rM3c2aFJzbzRIUFNxZWJYelVHRQ&q=https%3A%2F%2Fmodrinth.com%2Fdatapack%2Fnice-mobs-remastered&v=ZwmogE_9xmQ): ¡Más estructuras! Entre ellas están la burbuja de bruja, Coliseos con su propio jefe final y una nueva dimensión más hostil.
- [Master cutter](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbUhCTEJXUjA4MnljRkppNUUxMTlJc3hlV1Zrd3xBQ3Jtc0tsUnhZeFVTODZlVlczNVd4bXBYdXBVVEpxc2xnQzc1bzFidXptTHMtNVNhSW02bXZrSkFJNHZaeHkwbWlGUVk5RXBWMy12enlOLVp0QVdHYm12TXAwUEZoNURFR1RtdnRjOXU3bkxyalItMHE2REh6WQ&q=https%3A%2F%2Fmodrinth.com%2Fdatapack%2Fmastercutter&v=ZwmogE_9xmQ): La cortadora de piedra tiene muchos más usos con otros bloques del nether y con madera.
- [Vanilla refresh](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbVIyNHNhdGFwSkxYNFBsVXM2V1h4aXUyUXBnZ3xBQ3Jtc0tuSDhHdFhhVGJ3ZVl6QlBMbUZxNjVHZ3hlVXV1S0hnYzRpRWR1VjZGc3VBcXB5LUcyWnJ1SnhjU3JzQWVLUjJYWDJ3STB5XzhWNmRoR1NoV1RrVlBsdnNPOHlITkU1a1o2VExxS3RHYlpEcm9YSGpiVQ&q=https%3A%2F%2Fmodrinth.com%2Fdatapack%2Fvanilla-refresh&v=ZwmogE_9xmQ): Cosas sutiles que se integran muy bien con el juego como poses para armaduras, la xp te persigue a donde sea que estés, mensajes apenas llegas a un nuevo bioma, bloques para teletransportarte y mucho más.
- [True Ending Ender Dragon Overhaul](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbmhLNmtHWjYzcXBfM3NQeGFFVjVlMjJkUm5kQXxBQ3Jtc0ttS1lGeFJLQlF1OGFJQzZESWdkam9HTFhjaHdQclRJZ2g0UWJfQXhxSVRudXNWM0ZUODlxUC1jaWlacDBuR2NvSDMzN1BDZUNuUmdRZTFDMXpMQ0JGN1ZPNlZJOUlyaFloVWZzcFJWNk85MVdkOUdraw&q=https%3A%2F%2Fmodrinth.com%2Fdatapack%2Ftrue-ending&v=ZwmogE_9xmQ): Una mejor y más difícil batalla con el dragón del End.
- [Villager transportation](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbE1kZnZZaVk2MmFYbENkcDZMSzFnbnpiUERwUXxBQ3Jtc0tsdVU2dDdCNXU3Zll6VGs0R21JREdadHJ1NFh6dmxhN2lhQzluSU9WM3gyVGNBZnM4TFF2aGk0QXdncmZJM2N6ZThlZlptcXRoRjRnbGNtWVNFNTVHUWhvcTR5bHBjcE0wbl9FSVRyUGxPbWgxYkRSZw&q=https%3A%2F%2Fmodrinth.com%2Fdatapack%2Fvillager-transportation&v=ZwmogE_9xmQ): Ahora puedes llevar aldeanos en burros, camellos y otros animales, haciendo más fácil el transporte hasta centros de comercio.
- [Tectonic*](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbngxVmg4dEpFT3hWQlNpVzVSQzJ6ckhsRkFyUXxBQ3Jtc0ttNG0xRWJhSlJvMzBDUjlrOVhDaFd6YTBoUzk1bVIxMWd1dnR6eThkNTRmR0V1QmhqNGF5R04yMWEzdFZKcXJ6Y3BOeDdES1MtM0xiOFJsOGxkMlkwQjcySm1GeGZTb1RTOGpvd2VjUVM5Vnl4TFpxdw&q=https%3A%2F%2Fmodrinth.com%2Fdatapack%2Ftectonic&v=ZwmogE_9xmQ): Mejor generación de montañas y otros biomas rocosos.


> *Estos datapacks no afectan chunks ya generados, por lo que tendrás que explorar las lejanías para encontrar estas nuevas estructuras.

