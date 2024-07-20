
class myElement extends HTMLElement 
{
    constructor() 
    {
        super(); 
        this.attachShadow({ mode: 'open'});

    }
    static get observedAttributes()
    {
        return ['title', 'parrafo','img'];
    }
    attributeChangedCallback(attr,oldVal,newVal)
    {
        if (oldVal !== newVal) {
            this[attr] = newVal
        }
    }
    getTemplate()
    {
        const template = document.createElement('template');
        template.innerHTML = `
            <section>
                <h2>
                    ${this.title}
                </h2>
                <div>
                    <p>
                        ${this.parrafo}
                    </p>
                    <img src=${this.img}/>
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