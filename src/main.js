class App{
    constructor(){
        this.repositories = [];
        this.formEL = document.getElementById('repo-form');

        this.registerHandlers();
    }

    registerHandlers(){
        this.formEL.onsubmit = event => this.addRepository(event);
    }

    addRepository(event){
        event.preventDefault();
        
        this.repositories.push();
    }
}