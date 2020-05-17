// requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

    console.log('=================='.red);
    console.log(`Tabla de ${ base }`.red);
    console.log('=================='.red);

    for (let i = 1; i <= limite; i++) {
        let producto = base * i;
        console.log(`${ base } * ${ i } = ${ producto }`);
    }

}


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        let data = ' ';

        if (!Number(base)) {
            reject(`El dato ingresado ${ base } no es un número`);
            return;
        }

        for (let i = 1; i <= limite; i++) {

            let producto = base * i;
            data += (`${ base } * ${ i } = ${ producto }\n`);

        }


        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`.green);

        });

    })


}

module.exports = {
    crearArchivo,
    listarTabla
}