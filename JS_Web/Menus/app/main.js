export class Main {
    constructor(){
        console.log('Main loaded')
        this.vista = {
            aBtnsMenu: document.querySelectorAll('a'),
            eArticle : document.querySelector('article')
        }
        this.vista.aBtnsMenu.forEach(element => {
            element.addEventListener('click',this.menuItems.bind(this),false)
        });
        this.vista.eArticle.innerHTML = '<h2>'+'Inicio'+'</h2>'
    }
    menuItems(oEv){
        oEv.preventDefault()
        this.vista.eArticle.innerHTML = '<h2>'+oEv.target.id    +'</h2>'
    }
}