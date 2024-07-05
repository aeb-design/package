import { errorColor_6, infoColor_6, primaryColor_6, successColor_6, warningColor_6 } from "../PublicStyle";
import { ButtonCurvature, ButtonSizes, ButtonTypes } from "./type";

export const getButtonStyle = (type: ButtonTypes, size: ButtonSizes,curved: ButtonCurvature,disabled: string) => {
    let backgroundInformation = '';
    let sizeInformation = '';
    let curvatureInformation = '';
    switch (size) {
        case "small":
            sizeInformation = `
                padding: 0.2rem 0.1rem;
            `;
            break;
        case 'medium':
            sizeInformation = `
                padding: 0.4rem 1rem;
            `;
            break;
        case "large":
            sizeInformation = `
                padding: 0.6rem 2rem;
            `;
            break;
        default:
            break;
    }

    switch (type) {
        case "default":
            backgroundInformation = `
                background-color: white;
                color: black;
            `;
            break;
        case 'primary':
            backgroundInformation = `
                background-color: ${primaryColor_6};
                color: white;
            `;
            break;
        case 'danger':
            backgroundInformation = `
                background-color: ${errorColor_6};
                color: white;
            `;
            break;
        case 'warning':
            backgroundInformation = `
                background-color: ${warningColor_6};
                color: white;
            `;
            break;
        case 'success':
            backgroundInformation = `
                background-color: ${successColor_6};
                color: white;
            `;
            break;
        case 'Info':
            backgroundInformation = `
                background-color: ${infoColor_6};
                color: white;
            `;
            break;
        default: 
            break;
    }

    switch (curved) {
        case "curved":
            curvatureInformation = `border-radius: 10px;`;
            break;
        case "Microcurvature":
            curvatureInformation = `border-radius: 5px;`;
            break;
        default:
            break;
    }
    return `
        button {
            background-color: inherit;
            display: inline-flex;
            justify-content: center;
            align-items: center;
        }
        .aeb-button__${type}--${size} {
            ${backgroundInformation}
            ${sizeInformation}
        }
        .aeb-button__${curved} {
            ${curvatureInformation}
        }
        .aeb-button--${disabled} {
            ${disabled === "true" ? 
                "opacity: 0.5;" : ""
            }
        }
        .aeb-button--${disabled} :hover {
            ${
                disabled === "true" ?
                    "cursor: not-allowed" :
                     "cursor: pointer"
            }
        }
    `;
}