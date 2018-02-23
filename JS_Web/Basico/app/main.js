class Main{
    constructor(){
        document.addEventListener('DOMContentLoaded', this.definir.bind(this), false)
       
    }

     definir(){
        document.getElementById('btnSaludar').addEventListener('click',this.btnEventClick,false)
        document.getElementById('btnRegistrar').addEventListener('click',this.btnEventClick2,false)
        document.getElementById('btnGoogle').addEventListener('click',this.btnEventGoogle,false)
        console.dir(this)
     }
     btnEventClick(){
        alert('Hola a todos')    
    }
     btnEventClick2(){
        let user
        user = window.prompt('Dime tu nombre','Pepe')    
    }
     btnEventGoogle(){
        window.location.href='https://google.es/'
    }
}


(function () {
    new Main()  
})();
