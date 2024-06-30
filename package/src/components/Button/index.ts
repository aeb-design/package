import { buttonConfig } from "./template";
import { getButtonStyle } from "./style";
import { ButtonCurvature, ButtonSizes, ButtonTypes } from "./type";

export default class AebButton extends HTMLElement {
    constructor() {
        super();
        this.init();
        this.render();
    }
    template = document.createElement('template');
    styleElement = document.createElement('style');
    render() {
        this.shadowRoot?.appendChild(this.template.content.cloneNode(true));
        this.shadowRoot?.appendChild(this.styleElement);
    }
    init() {
        const type = (this.getAttribute("type") ?? 'default') as ButtonTypes;
        const size = (this.getAttribute("size") ?? 'medium') as ButtonSizes;
        const curved = (this.getAttribute("curved") ?? "Microcurvature") as ButtonCurvature;
        const disabled = this.getAttribute("disabled");
        this.attachShadow({ mode: "open" });
        this.template.innerHTML = buttonConfig;
        this.styleElement.textContent = getButtonStyle(type,size,curved);
        this.template?.content.querySelector("button")?.classList.add(`aeb-button__${type}--${size}`);
        this.template?.content.querySelector("button")?.classList.add(`aeb-button__${curved}`);
        if (disabled) {
            this.template?.content.querySelector("button")?.setAttribute('disabled', 'true');
        }
    }
}

customElements.define("aeb-button", AebButton);