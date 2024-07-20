
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
                <h2>
                    <slot name='title'></slot>
                </h2>
                <div>
                    <p>
                        <slot name='parrafo'></slot>
                    </p>
                </div>
            </section>
            ${this.getStyles()}
        `;
        return template;
    }
    // el slotted se usa solo en el shadowDOM
    getStyles()
    {
        return `
            <style>
                ::slotted(span){
                    fontsize: 30px;
                    color: blue;
                }
                ::slotted(.text) {
                    color: red;
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