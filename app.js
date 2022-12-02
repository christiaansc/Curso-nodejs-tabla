const { crearArchivo } = require("./helpers/Multiplicar");
const argv = require('./config/yargs');
var colors = require('colors');




console.clear();

console.log(argv.b);



crearArchivo(argv.b , argv.l , argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.bgCyan , 'creado'))
    .catch( err => console.log(err));
