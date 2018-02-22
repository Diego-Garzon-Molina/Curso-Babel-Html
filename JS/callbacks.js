function main(mostrar){
    const user = {
        nombre: 'Pepe',
        apellido: 'Perez',
        edad: 23
    }
  
    // Salida usando template string
    mostrar(`   El usuario es
    ${user.nombre}, ${user.apellido}`)
    mostrar()
}

function enMayusculas(pDato = "No se encuentra el nombre"){
   // typeof pDato === string ? pDato : "No se encuentra el nombre"
    console.log(pDato.toUpperCase())
}
function enMinisculas(pDato = "No se encuentra el nombre"){
    console.log(pDato.toLowerCase())
}

main(enMayusculas)
