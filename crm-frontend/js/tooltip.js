export const createTooltip = (type, value) => {
    const tooltip = document.createElement('div')
    const tooltipType = document.createElement('span')
    const tooltipValue = document.createElement('span')

    tooltip.classList.add('tooltip', 'contact-tooltip')
    tooltipType.classList.add('contact-tooltip-type')
    tooltipValue.classList.add('contact-tooltip-value')

    tooltipType.textContent = type + `: `
    tooltipValue.textContent = value

    tooltip.append(tooltipType, tooltipValue)

    return {
        tooltip,
        tooltipType,
        tooltipValue
    }
}