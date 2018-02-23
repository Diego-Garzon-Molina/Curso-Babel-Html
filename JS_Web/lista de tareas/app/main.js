class Main{
    constructor(){
         this.modelo = {
           botonRegistrar: document.getElementById('btnRegistrar'),
           botonAñadir: document.getElementById('btnAñadir'),
           inputNombre: document.getElementById('nombre'),
           inputTarea: document.getElementById('tarea'),
           resultado: document.getElementById('resultado'),
           arrayTareas: new Array()
       }
       this.modelo.botonRegistrar.addEventListener('click',this.btnEventRegistrar.bind(this),false)
       this.modelo.botonAñadir.addEventListener('click',this.btnEventAñadir.bind(this),false)
      
    }

     btnEventRegistrar(){
        
       // user = window.prompt('Dime tu nombre','Pepe')   
        var nombre = this.modelo.inputNombre.value
        var tarea = this.modelo.inputTarea.value
        this.modelo.resultado.innerHTML='<p id="parrafoRespuesta" ><strong>'+nombre+', la respuesta es 42 con tareas:</strong></p><ul id="lista"></ul>'
        this.modelo.resultado.classList.toggle('verde')
   //  document.getElementById('parrafoRespuesta').className+=' verde'
    }
    btnEventAñadir(){
        var tarea = this.modelo.inputTarea.value
        this.modelo.arrayTareas.push(tarea)
        document.getElementById('lista').innerHTML+='<li>'+tarea+'</li>'
    }
   
}


(function () {
    document.addEventListener('DOMContentLoaded', ()=>new Main(), false)
      
})();
