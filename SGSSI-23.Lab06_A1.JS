const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

if (process.argv.length !== 4) {
  console.log('Uso: node SGSSI-23.Lab06_A1.JS <nombre_del_archivo_entrada>  <directorio_de_archivos>');
  process.exit(1);
}

const archivo1 = process.argv[2];
const directorio = process.argv[3];

// Leer el contenido del primer archivo
fs.readFile(archivo1, 'utf8', (err, contenido1) => {
  if (err) {
    console.error('Error al leer el primer archivo:', err);
    return;
  }

  // Leer los archivos en el directorio
fs.readdir(directorio, (err, archivos) => {
    if (err) {
      console.error('Error al leer el directorio de archivos:', err);
      return;
    }

    let archivosCumplenCondiciones = [];
    let archivoConSecuenciaMasLarga = null;
    let hashGanador = null;
    let secuenciaMasLarga = 0;

    archivos.forEach((nombreArchivo) => {
      const rutaArchivo = path.join(directorio, nombreArchivo);
      const contenidoArchivo = fs.readFileSync(rutaArchivo, 'utf8');
      console.log(`Examinado a '${nombreArchivo}'.`);
      let texto
      const lineas = contenidoArchivo.split('\n');
      const lineas2 = contenido1.split('\n');
      const ultimaLinea = lineas[lineas.length - 1].trim();
      // Crear una expresión regular para verificar el formato
      const regex = new RegExp(`[0-9a-f]{8}\t[0-9a-f]{2}\t100`);
      let numR = 0;
      // Comprobar si el contenido del segundo archivo comienza con el contenido del primer archivo
      if (contenidoArchivo.startsWith(contenido1) && lineas.length==lineas2.length) {
          // Calcular el resumen SHA-256 del primer archivo
          const hash = crypto.createHash('sha256');
          hash.update(contenidoArchivo);
          const resumenSHA256 = hash.digest('hex');

          // Comprobar si el resumen SHA-256 está presente en el segundo archivo
          if (resumenSHA256.startsWith('00')) {
              numR= numR+1;
          } else { 
              console.log('El hash del segundo archivo no empieza por una secuencia 0s');
          }
          if (regex.test(ultimaLinea)) {
              numR= numR+1;
          } else {
              console.log('La última línea del archivo NO contiene la secuencia.');
          }
          if(numR==2){
              console.log('Cumple con todos los requisitos');
              // Encontrar la longitud de la secuencia de ceros iniciales
              const longitudSecuenciaCeros = resumenSHA256.match(/^0*/)[0].length;

              archivosCumplenCondiciones.push({ nombreArchivo, longitudSecuenciaCeros });

              // Actualizar el archivo con la secuencia de ceros más larga
              if (longitudSecuenciaCeros > secuenciaMasLarga) {
                secuenciaMasLarga = longitudSecuenciaCeros;
                archivoConSecuenciaMasLarga = nombreArchivo;
                hashGanador=resumenSHA256;
              }
          }
      } else {
        console.log(`El archivo no coincide con '${archivo1}'.Posibles problemas: Modificacion de dato o una de linea adicional`);
      }
      console.log('--------------------------------------------------------------');      
    });
    console.log(`Se ha escogido '${archivoConSecuenciaMasLarga}'.Como el archivo con la secuencia más larga de 0s`);
    console.log(`Con el resumen hash:'${hashGanador}'`);
  });
});
