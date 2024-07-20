const template = document.createElement('div');
template.innerHTML = `
    <style>
        p {
            color: navy;
        }
    </style>
    <p>Ohayou Sekai</p>
    <p>Senku Ishigami</p>
    `
;

class myElement extends HTMLElement 
{
    constructor() 
    {
        super();
        this.p = document.createElement('p');
    }
    connectedCallback() // creando un nodo
    {
        this.p.textContent ='Hola Mundo!';
        this.appendChild(this.p);

        this.appendChild(template); 
    }
}
customElements.define('my-element', myElement);