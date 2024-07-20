
class myElement extends HTMLElement 
{
    constructor() 
    {
        super(); 
        this.attachShadow({ mode: 'open'});
    }
    getTemplate()
    {
        const template = document.createElement('template');
        template.innerHTML = `
            <section>
                <h2 class="title">Hola Mundo!</h2>
                <div>
                    <p>Soy más texto</p>
                </div>
            </section>
            ${this.getStyles()}
        `;
        return template;
    }
    getStyles()
    {
        return `
            <style>
                h2{
                    color: navy;
                }
            </style>
        `;
    }
    render()
    {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true)); //el true hace que clone todos los elementos anidados, el shadowRoot se usa para acceder al shadowDOM
    }

    connectedCallback() // creando un nodo
    {
        this.render();
    }
}
customElements.define('my-element', myElement);