**SGSSI-23Lab06_A1.js**
Este es un programa Node.js que compara un archivo de entrada con archivos en un directorio y busca aquellos archivos que cumplan con ciertas condiciones:
 - Los archivos de los direcotorios tienen de texto exactamente por los mismos contenidos que el archivo entrada.
 - Los archivos de los direcotorios tienen una línea adicional con una secuencia de 8 caracteres en hexadecimal (se utilizará la representación en minúsculas de las letras a-f), seguida de un separador, seguida del identificador público del estudiante (los dos caracteres hexadecimales en minúscula) seguidos de la secuencia 100 (ejemplo).
 - El resumen SHA-256 del archivo comienza por el carácter hexadecimal “0”, como minimo dos seguidas.
Entre los ficheros que cumple dichas condiciones, se escoge el primero que tenga las secuencia de 0's más largo.

**Requisitos**
Asegúrate de tener Node.js instalado en tu sistema antes de ejecutar este programa.

**Uso**
Para ejecutar el programa, utiliza el siguiente comando en la línea de comandos:
  bash
  Copy code
  node SGSSI-23.Lab06_A1.JS <nombre_del_archivo_entrada>  <directorio_de_archivos>
  <nombre_del_archivo_entrada>: Ruta al archivo de entrada que se utilizará para las comparaciones.
  <directorio_de_archivos>: Ruta al directorio que contiene los archivos con los que se comparará el archivo de entrada.
  Si no proporcionas los argumentos necesarios, el programa mostrará un mensaje de uso.

**Funcionamiento**
- El programa sigue estos pasos:
- Lee el contenido del primer archivo especificado como <nombre_del_archivo_entrada>.
- Lee los archivos en el directorio especificado como <directorio_de_archivos>.
- Realiza comparaciones entre el contenido del primer archivo y los archivos en el directorio.
- Verifica si los archivos en el directorio cumplen con las condicione.
- Encuentra el primer archivo con la secuencia más larga de ceros en su hash y muestra su nombre y el resumen hash correspondiente.

**Resultados**
El programa mostrará información sobre los archivos que cumplan o no con las condiciones especificadas, así como el archivo con la secuencia más larga de ceros en su hash.

**Notas**
Si un archivo en el directorio no coincide con el archivo de entrada, se mostrará un mensaje indicando posibles problemas.
Si el resumen SHA-256 de un archivo no comienza con la secuencia '00' o la última línea del archivo no contiene la secuencia, se mostrarán mensajes de advertencia.
El programa utiliza el módulo crypto y el módulo fs de Node.js para realizar cálculos y operaciones de lectura de archivos.
