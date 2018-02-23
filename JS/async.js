

//JavaScript no es multihilo* (puede serlo, pero no es el procedimiento general), pero si asíncrono
//Asincronía
//Eventos de usuario
//LLamadas a servidor
//Temporización

//funciones de temporización
var contador = 0
function hazEsto(){
    console.log(contador)
    ++contador
}
setTimeout(hazEsto,1000)
/*
setInterval(()=>{console.log(contador)
    ++contador
},1000)*/


//En ES6

const consulta = function(){
    return new Promise ( (resolve,reject) => {
    setTimeout(()=>{
       resolve('Todo ok')
        },1000)
})
}
let resultados = 
consulta ().then((res)=>{console.log(res)})