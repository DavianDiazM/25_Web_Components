class MyCustomElement extends HTMLElement {
    constructor()
    {
        super();
        console.log('Hola desde el constructor');
    }
    connectedCallback()
    {
        console.log("Hola desde el DOM")       
    }
    disconnectedCallback()
    {
        console.log('Adios del DOM')
    }
}

customElements.define('my-custom-element', MyCustomElement);
document.querySelector('my-custom-element').remove();