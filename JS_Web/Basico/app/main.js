//Crear una funcion vacia para evitar las variables globales. 
//Una funcion anonima vacia que se llama a si misma => Clousure !!Investigar!!
(function () {
 /**Eventos de carga de pagina */
    /**DOcument => DOMCOntentLoaded */
    //document.addEventListener("DOMContentLoaded", inicioScript,false);
    /**window => load */
    //window-addEventListener("Load",main.false);
    document.addEventListener('DOMContentLoaded', main, false)

// 
})();
function main(){
    document.getElementById('btnSaludar').addEventListener('click',btnEventClick,false)
    document.getElementById('btnRegistrar').addEventListener('click',btnEventClick2,false)
    document.getElementById('btnGoogle').addEventListener('click',btnEventGoogle)
    
    function btnEventClick(){

        alert('Hola a todos')    
    }
    function btnEventClick2(){
        let user
        user = window.prompt('Dime tu nombre',)
        /* console.dir(document.getElementById('btn_2'))
        */
    }
    function btnEventGoogle(){
        window.location.href='https://google.es/'
    }
}