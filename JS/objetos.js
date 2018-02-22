
/*funciones constructoras*/
function User (nombre,apellidos,edad,genero){
    this.nombre = nombre
    this.apellidos = apellidos
    this.edad = edad
    this.genero = genero
    ++ User.prototype.numUser
}

User.prototype.numUser = 0
User.prototype.saludar = function(){
    console.log(`Hola marinero, ya somos: ${this.numUser}`)
}
var mostrarA1 = pData1 => console.log(pData1)

/*mecanismos invocación de funciones
mostrar()
console.log()
new User()
call/apply
*/

user = new User ('Juan','Lopez','23','H')
oUser = new User ('Juan','Lopez','23','H')
mostrarA1(oUser)
console.log(oUser)
oUser.saludar()
var aAlumnos = new Array(new User('Juan','Lopez','23','H'),new User('Juan','Lopez','23','H'),new User('Juan','Lopez','23','H'))
console.log(aAlumnos)
console.log(user.numUser)