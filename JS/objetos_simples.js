const user = {
    nombre: 'Pepe',
    apellido:'Perez', 
    edad: '23'
}
//user = {} fallo

console.log(user)

const mostrar = pData1 => {
    pData1.apellido = 'jazmin'
    console.log(pData1)}

/*Clonado de objetos
Object.assign({},user)
JSON.parse(JSON.stringify(user))
*/
mostrar(Object.assign({},user))
console.log(user)
console.log(JSON.parse(JSON.stringify(user)))