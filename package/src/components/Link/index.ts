import {linkConfig,linkStyle} from './template';

export default class AebLink extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
        this.attachShadow({ mode: "open" });
        const template = document.createElement('template');
        template.innerHTML = linkConfig;
        const styleElement = document.createElement('style');
        styleElement.textContent = linkStyle;
        this.shadowRoot?.appendChild(template.content.cloneNode(true));
        this.shadowRoot?.appendChild(styleElement);
    }
}

customElements?.define('aeb-link', AebLink);