
const fileSystem = require('fs') 


const crearArchivoTabla = async(base=5,listar=false,hasta=10)=>{


try {
  
    let salida = '';
    for (let i=1;i<hasta;i++){
        salida += (`${base}*${i} = ${base*i }`)
    }
    if(listar){
        console.log('==================');
        console.log(` TABLA DEL : ${base}`)
        console.log('===================')
        console.log(salida)
    }
   
    fileSystem.writeFileSync(`./salida/tabla-${base}.txt'`,salida)
    return (`tabla -${base}.txt creada `)

} catch (err) {
    throw(err)
}
    
}

module.exports = {
  crearArchivoTabla
}