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
        this._rellenarNombre()
        this._rellenarTareas()
        this.modelo.botonRegistrar.addEventListener('click',this.btnEventRegistrar.bind(this),false)
        this.modelo.botonAñadir.addEventListener('click',this.btnEventAñadir.bind(this),false)
      
    }
    _rellenarNombre(){
        var nombre = localStorage.getItem('nombre')
        if (nombre) this.modelo.resultado.innerHTML='<p id="parrafoRespuesta"><strong>'+nombre+', la respuesta es 42 con tareas:</strong><ul id="lista"></ul></p>'
        this.modelo.resultado.classList.add('verde')
    }
    _rellenarTareas(){
        this.modelo.arrayTareas = JSON.parse(localStorage.getItem('tareas')) ? JSON.parse(localStorage.getItem('tareas')) : []
        this.modelo.arrayTareas.forEach(element => {
            document.getElementById('lista').innerHTML+='<li>'+element+'</li>'
        });
    }

     btnEventRegistrar(){
        
       // user = window.prompt('Dime tu nombre','Pepe')   
        var nombre = this.modelo.inputNombre.value
        var tarea = this.modelo.inputTarea.value
        localStorage.setItem('nombre',nombre)
        this.modelo.resultado.innerHTML='<p id="parrafoRespuesta" ><strong>'+nombre+', la respuesta es 42 con tareas:</strong><ul id="lista"></ul></p>'
        this.modelo.resultado.classList.add('verde')
   //  document.getElementById('parrafoRespuesta').className+=' verde'
    }
    btnEventAñadir(){
        var tarea = this.modelo.inputTarea.value
        this.modelo.arrayTareas.push(tarea)
        document.getElementById('lista').innerHTML+='<li>'+tarea+'</li>'
        localStorage.setItem('tareas',JSON.stringify(this.modelo.arrayTareas))
    }
   
}


(function () {
    document.addEventListener('DOMContentLoaded', ()=>new Main(), false)
      
})();
