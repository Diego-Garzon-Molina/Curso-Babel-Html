let aDatos = new Array(12,34,56,12)
let aDatos2 = [12,'a',true]
console.log(aDatos)
console.log(aDatos2)
console.log(typeof aDatos)
console.log(typeof console.log)
aDatos[3]=3
console.log(aDatos[3])
let suma = 0
for (let i = 0; i <aDatos.length; i++){
    suma += aDatos[i]
}
console.log(suma)
suma = 0
aDatos.forEach((item) => suma+=item)
console.log(suma)
aDatos1 = aDatos.map((item) => ++item)
console.log(aDatos1)
aDatos1 = aDatos.filter(item => item > 20)
console.log(aDatos1)