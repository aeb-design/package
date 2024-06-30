import { errorColor_6, primaryColor_6, successColor_6, warningColor_6 } from "../../contants/publicStyleValue";
import { ButtonCurvature, ButtonSizes, ButtonTypes } from "./type";

export const getButtonStyle = (type: ButtonTypes, size: ButtonSizes,curved: ButtonCurvature) => {
    let backgroundInformation = '';
    let sizeInformation = '';
    let curvatureInformation = '';
    switch (size) {
        case "small":
            sizeInformation = `
                padding: 5px 10px;
            `;
            break;
        case 'medium':
            sizeInformation = `
                padding: 10px 20px;
            `;
            break;
        case "large":
            sizeInformation = `
                padding: 15px 30px;
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
        }
        button:hover {
            cursor: pointer;
        }
        .aeb-button__${type}--${size} {
            ${backgroundInformation}
            ${sizeInformation}
        }
        .aeb-button__${curved} {
            ${curvatureInformation}
        }
    `;
}