import { linkConfig } from './template'
import { getLinkStyle } from './style'
import { LinkDecoration, LinkDisabled, LinkSize, LinkType } from './type'

export default class AebLink extends HTMLElement {
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

	private handleLinkClick = (event: Event) => {
        event.preventDefault(); // 可能需要阻止默认行为，取决于您的需求
        const target = this.getAttribute('target') ?? '_self';
        const href = this.getAttribute('href');
        if (target === '_blank') {
            window.open(href ?? '', '_blank');
        } else {
            window.location.href = href ?? '';
        }
    };

	addAction() {
		const linkElement = this.shadowRoot?.querySelector('a');
        if (linkElement) {
            linkElement.addEventListener('click', this.handleLinkClick);
        }
	}

	removeAction() {
		const linkElement = this.shadowRoot?.querySelector('a');
        if (linkElement) {
            linkElement.removeEventListener('click', this.handleLinkClick);
        }
	}

	init() {
		this.attachShadow({ mode: 'open' });
		this.template.innerHTML = linkConfig;
		const type = (this.getAttribute('type') ?? 'default') as LinkType;
		const size = (this.getAttribute('size') ?? 'medium') as LinkSize;
		const disabled = (this.getAttribute('disabled') ?? 'false') as LinkDisabled;
		const decoration = (this.getAttribute('decoration') ?? 'underline') as LinkDecoration;
		this.styleElement.textContent = getLinkStyle(type, size, disabled, decoration);
        const linkElement = this.shadowRoot?.querySelector('a');
		const alt = this.getAttribute('alt') ?? 'link';
        if (linkElement) {
            linkElement.classList.add(`aeb-link__${type}--${size}`);
			linkElement.classList.add(`aeb-link--${disabled}__${decoration}`);
			linkElement.setAttribute('alt', alt);
			if (disabled === "true") {
				this.removeAction();
			} else {
				this.addAction();
			}
        }
	}

	static get observedAttributes() {
		return ['type', 'size', 'href', 'target', 'alt', 'disabled'];
	}

	render() {
		const link = this.shadowRoot?.querySelector('a');
		if (link) {
			const type = (this.getAttribute('type') ?? 'default') as LinkType;
			const size = (this.getAttribute('size') ?? 'medium') as LinkSize;
			const disabled = (this.getAttribute('disabled') ?? 'false') as LinkDisabled;
			const decoration = (this.getAttribute('decoration') ?? 'underline') as LinkDecoration;
            link.classList.add(`aeb-link__${type}--${size}`);
			link.classList.add(`aeb-link--${disabled}__${decoration}`);
            this.styleElement.textContent = getLinkStyle(type, size, disabled, decoration);
			const alt = this.getAttribute('alt') ?? 'link';
			link.setAttribute('alt', alt);
			if (disabled === "true") {
				this.removeAction();
			} else {
				this.addAction();
			}
		}
	}

	attributeChangedCallback(name: string) {
		if (!name || !['type', 'size','alt','target','disabled'].includes(name)) return;
		this.render();
		const disabled = (this.getAttribute('disabled') ?? 'false') as LinkDisabled;
		if (disabled === "true") {
			this.removeAction();
		} else {
			this.addAction();
		}
	}
}

customElements?.define('aeb-link', AebLink);
