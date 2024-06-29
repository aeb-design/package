import { buttonConfig, buttonStyle } from "./template";

export default class AebButton extends HTMLElement {
    constructor() {
        super();
        this.render();
    }
    render() {
        this.attachShadow({ mode: "open" });
        const template = document.createElement('template');
        template.innerHTML = buttonConfig;
        const styleElement = document.createElement('style');
        styleElement.textContent = buttonStyle;
        this.shadowRoot?.appendChild(template.content.cloneNode(true));
        this.shadowRoot?.appendChild(styleElement);
        console.log(this.getAttribute("type"))
    }
}

customElements.define("aeb-button", AebButton);