export const createHeader = () => {
    const header = document.createElement('header')
    const container = document.createElement('div')
    const headerBlock = document.createElement('div')
    const headerLogo = document.createElement('div')
    const headerLogoText = document.createElement('p')
    const headerInput = document.createElement('input')
    const headerSearchList = document.createElement('ul')

    header.classList.add('header')
    container.classList.add('container')
    headerBlock.classList.add('header-block')
    headerLogo.classList.add('header-logo')
    headerLogoText.classList.add('header-logo-text')
    headerInput.classList.add('header-input')
    headerSearchList.classList.add('header-search-list', 'hide')

    headerInput.placeholder = "Search"
    headerLogoText.textContent = 'skb.'

    headerLogo.append(headerLogoText)
    headerBlock.append(headerLogo, headerInput, headerSearchList)
    container.append(headerBlock)
    header.append(container)

    return header
}