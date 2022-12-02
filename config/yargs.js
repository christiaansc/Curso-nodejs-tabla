const argv = require("yargs")
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe:'es la base de la tabla a multiplicar'
  })
  .option('l',{
    alias:'listar',
    type: 'boolean',
    default: false,
    describe:'lista la tabla de multiplicar en consola'
  })
  .option('h',{
    alias:'hasta',
    type:'number',
    default:'false',
    describe:'Numero hasta donde quiero multiplicar'
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un número";
    }
    return true;
  })
  .argv;


  module.exports = argv;