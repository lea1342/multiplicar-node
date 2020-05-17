const argv = require('./config/yargs').argv;
const colors = require('colors');

/*se puede poner una constante por cada funcion para importar, pero se puede poner varias funciones en la misma const
 */
// const { crearArchivo } = require('./multiplicar/multiplicar.js');
// const { listarTabla } = require('./multiplicar/multiplicar');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');



let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo }`))
            .catch(e => console.log(e));
        console.log('Crear');
        break;
    default:
        console.log('Comando no reconocido');
}


// console.log('Limite', argv.limite);

// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1]

// console.log(base);