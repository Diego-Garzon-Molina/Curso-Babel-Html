// SOLO en ES6
// Esto es de "mentirijillas" jijijiji soy un hada del bosque ¬¬


class User{
   constructor (nombre,apellidos,edad,genero){
        this.nombre = nombre
        this.apellidos = apellidos
        this.edad = edad
        this.genero = genero
        ++ User.prototype.numUser
   }
        saludar(){
            console.log(`Hola marinero, ya somos: ${this.numUser}`)
        }
    
}

User.prototype.numUser = 0
class Alumno extends User{
    constructor (nombre,apellidos,edad,genero,curso){
       super(nombre,apellidos,edad,genero)
       this.curso = curso
      
    }
    saludar(){
        console.log("Hola estudiante, ya somos: " + this.numUser)
    }
}
oAlumno = new Alumno ('Juan','Lopez','23','H','Angular')

/*User.prototype.saludar = function(){
    console.log(`Hola marinero, ya somos: ${this.numUser}`)
}*/

user = new User ('Juan','Lopez','23','H')
console.log(user)
user.saludar()
oAlumno.saludar()
console.log(oAlumno)

//console.log(user.prototype.numUser)