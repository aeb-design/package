import {
	primaryColor_6,
	errorColor_6,
	warningColor_6,
	successColor_6,
	infoColor_6
} from '../PublicStyle'
import { LinkDecoration, LinkDisabled, LinkSize, LinkType } from './type'

export const getLinkStyle = (type: LinkType, size: LinkSize, disabled: LinkDisabled, decoration: LinkDecoration) => {
	let colorInformation = '';
	let sizeInformation = '';
	let disabledStyle = '';
	let decorationStyle = '';
	switch (disabled) {
		case 'true':
			disabledStyle = `
                cursor: not-allowed;
				opacity: 0.3;
            `
			break;
		case 'false':
			disabledStyle = `
				cursor: pointer;
				opacity: 0.8;
			`
			break;
		default:
			break;
	}
	switch (decoration) {
		case "none":
			decorationStyle = `
                text-decoration: none;
            `
			break
		case "underline":
			decorationStyle = `
				text-decoration: underline;
			`
			break
		default:
			break
	}
	switch (type) {
		case 'default':
			colorInformation = `
                color: black;
            `
			break
		case 'primary':
			colorInformation = `
                color: ${primaryColor_6};
            `
			break
		case 'danger':
			colorInformation = `
                color: ${errorColor_6};
            `
			break
		case 'warning':
			colorInformation = `
                color: ${warningColor_6};
            `
			break
		case 'success':
			colorInformation = `
                color: ${successColor_6};
            `
			break
		case 'Info':
			colorInformation = `
                color: ${infoColor_6};
            `
			break
		default:
			break
	}
	switch (size) {
		case 'small':
			sizeInformation = `
                font-size: 12px;
            `
			break
		case 'medium':
            sizeInformation = `
                font-size: 16px;
            `
			break
		case 'large':
            sizeInformation = `
                font-size: 18px;
            `
			break
	}
    return `
        a {
            text-decoration: none;
        }
        .aeb-link__${type}--${size} {
            ${colorInformation}
            ${sizeInformation}
        }
		.aeb-link__${type}--${size}:hover {
			${disabledStyle}
			${decorationStyle}
		}
		.aeb-link--${disabled}__${decoration} {
			${disabledStyle}
		}
    `;
}
