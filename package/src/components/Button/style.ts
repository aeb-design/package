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
                background-color: #007bff;
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