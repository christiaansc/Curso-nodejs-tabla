const fs = require("fs");


const crearArchivo = async(base = 5 , listar , hasta = 10) => {
    try {
        let salida = "";
        for (let i = 0; i <= hasta; i++) {
          salida += `${base} x ${i} = ${base * i}\n`;
        }
        
        if(listar){
          console.log('=========');
          console.log('tabla del'.green , base);
          console.log('=========');

          console.log(salida);
        }
      
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `Tabla-${base}.txt`;

    } catch (error) {
        throw error
    }
};

module.exports = {
  crearArchivo,
};
