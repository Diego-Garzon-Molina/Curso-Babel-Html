function mostrar(pData)
{
    var localEdad = 23
console.log(pData)
}
var oDatos1 = new Object()
var oDatos2 = {}
var patata = 'papaaaaaaas'
var jamon = 'jamon'
/* mostrar(patata,patata)

var xDatos = new mostrar(jamon) */
var mostrar2 = function(pData1,pData2){
    console.log(pData1,pData2)
}
mostrar2(patata,jamon)


//Arrow function (ES6)
var mostrarA1 = (pData1,pData2) => {
    console.log(pData1,pData2)
}
var mostrarA2 = pData1 => console.log(pData1)

mostrarA1(patata,jamon)
mostrarA2(jamon)