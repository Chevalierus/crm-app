import { svgPhone, svgVk, svgFb, svgMail, svgOther } from "./svg.js"
import { createTooltip } from "./tooltip.js"

export const formatDate = (data) => {
    const newDate = new Date(data);

    const countDate = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    }

    const fullDate = newDate.toLocaleString('ru', countDate)
    return fullDate
}

export const formatTime = (data) => {
    const newTime = new Date(data);

    const countTime = {
        hour: 'numeric',
        minute: 'numeric',
    }

    const fullTime = newTime.toLocaleString('ru', countTime)
    return fullTime
}

export const contactLinks = (type, value, element, svg, item) => {
    const tooltipActive = createTooltip(type, value)
    element = document.createElement('a')
    element.classList.add('contact-link')
    element.innerHTML = svg
    
    if (type === 'Email') {
        element.href = `mailto:${value.trim()}`;
    } else if (type === 'Телефон') {
        element.href = `tel:${value.trim()}`;
    } else {
        element.href = value.trim();
    }

    element.append(tooltipActive.tooltip)
    item.append(element)
}

export const createContact = (type, value, item) => {
    switch (type) {
        case "Телефон":
            let phone;
            contactLinks(type, value, phone, svgPhone, item);
            break;
        case "VK":
            let vk;
            contactLinks(type, value, vk, svgVk, item);
            break;
        case "Facebook":
            let fb;
            contactLinks(type, value, fb, svgFb, item);
            break;
        case "Email":
            let email;
            contactLinks(type, value, email, svgMail, item);
            break;
        case "Другое":
            let other;
            contactLinks(type, value, other, svgOther, item);
            break;

    default:
            break;
    }
}