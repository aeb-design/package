import { buttonConfig } from "./template";
import { getButtonStyle } from "./style";
import { ButtonCurvature, ButtonSizes, ButtonTypes } from "./type";

export default class AebButton extends HTMLElement {
    constructor() {
        super();
        this.init();
        this.create();
    }
    template = document.createElement('template');
    styleElement = document.createElement('style');
    create() {
        this.shadowRoot?.appendChild(this.template.content.cloneNode(true));
        this.shadowRoot?.appendChild(this.styleElement);
    }
    render() {
        const button = this.shadowRoot?.querySelector('button');
        if (button) {
            const type = (this.getAttribute('type') ?? 'default') as ButtonTypes;
            const size = (this.getAttribute('size') ?? 'medium') as ButtonSizes;
            const curved = (this.getAttribute('curved') ?? 'Microcurvature') as ButtonCurvature;
            const disabled = (this.getAttribute('disabled') ?? 'false');
            button.classList.add(`aeb-button__${type}--${size}`);
            button.classList.add(`aeb-button__${curved}`);
            button.classList.add(`aeb-button--${disabled}`);
            this.styleElement.textContent = getButtonStyle(type, size, curved, disabled);
        }
    }
    init() {
        this.attachShadow({ mode: "open" });
        this.template.innerHTML = buttonConfig;
        const type = (this.getAttribute("type") ?? 'default') as ButtonTypes;
        const size = (this.getAttribute("size") ?? 'medium') as ButtonSizes;
        const curved = (this.getAttribute("curved") ?? "Microcurvature") as ButtonCurvature;
        const disabled = (this.getAttribute("disabled") ?? 'false');
        this.styleElement.textContent = getButtonStyle(type,size,curved,disabled);
        this.template?.content.querySelector("button")?.classList.add(`aeb-button__${type}--${size}`);
        this.template?.content.querySelector("button")?.classList.add(`aeb-button__${curved}`);
        this.template?.content.querySelector("button")?.classList.add(`aeb-button--${disabled}`);
        if (disabled === 'true') {
            this.template?.content.querySelector("button")?.setAttribute('disabled', 'true');
        }
    }
    static get observedAttributes() {
        return ["type", "size","curved","disabled"];
    }

    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
        if (!['type', 'size', 'curved', 'disabled'].includes(name)) {
            return;
        }
        const button = this.shadowRoot?.querySelector('button');
        if (button) {
            this.render();
        }
    }
}

customElements.define("aeb-button", AebButton);