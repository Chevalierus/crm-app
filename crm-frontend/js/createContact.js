import { deleteUser } from "./svg.js"

export const createContact = () => {
    const contact = document.createElement('div')
    const contactType = document.createElement('div')
    const contactTypeBtn = document.createElement('button')
    const contactList = document.createElement('ul')
    const contactTel = document.createElement('li')
    const contactVk = document.createElement('li')
    const contactFb = document.createElement('li')
    const contactEmail = document.createElement('li')
    const contactOther = document.createElement('li')
    const contactInput = document.createElement('input')
    const contactDelete = document.createElement('button')
    const contactDeleteTooltip = document.createElement('span')

    contact.classList.add('contact')
    contactDeleteTooltip.classList.add('contact-tooltip', 'tooltip')
    contactType.classList.add('contact-type')
    contactTypeBtn.classList.add('contact-type-btn')
    contactList.classList.add('contact-list')
    contactTel.classList.add('contact-item')
    contactVk.classList.add('contact-item')
    contactFb.classList.add('contact-item')
    contactEmail.classList.add('contact-item')
    contactOther.classList.add('contact-item')
    contactInput.classList.add('contact-input')
    contactDelete.classList.add('contact-delete')

    contactTypeBtn.textContent = 'Телефон'
    contactDeleteTooltip.textContent = 'Удалить контакт'
    contactTel.textContent = "Телефон"
    contactVk.textContent = "VK"
    contactFb.textContent = "Facebook"
    contactEmail.textContent = "Email"
    contactOther.textContent = "Другое"
    contactInput.placeholder = "Введите контакт"
    contactDelete.innerHTML = deleteUser
    contactInput.type = 'text'

    contactDelete.addEventListener('click', (e) => {
        e.preventDefault()
        contact.remove()

        document.querySelector('.modal-add-contact').classList.add()
    })

    contactTypeBtn.addEventListener('click', (e) => {
        e.preventDefault()
        contactType.classList.toggle('contact-list-active')
        contactList.classList.toggle('contact-list-active')
    })

    const setType = (type) => {
        type.addEventListener('click', () => {
            contactTypeBtn.textContent = type.textContent
            contactList.classList.remove('contact-list-active')
        })
    }

    const typeArray = [contactTel, contactVk, contactFb, contactEmail, contactOther]

    for(const type of typeArray) {
        setType(type)
    }

    contactDelete.append(contactDeleteTooltip)
    contactType.append(contactTypeBtn, contactList)
    contactList.append(contactTel, contactVk, contactFb, contactEmail, contactOther)
    contact.append(contactType, contactInput, contactDelete)

    return {
        contact,
        contactTypeBtn,
        contactInput,
        contactDelete
    }
}