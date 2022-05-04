import { createContact } from "./createContact.js"
import { close, addContact } from './svg.js'

export const createModal = () => {
    const modalTitle = document.createElement('h2')
    const modalClose = document.createElement('button')
    const modalForm = document.createElement('form')
    const modalLabelName = document.createElement('label')
    const modalLabelSurname = document.createElement('label')
    const modalLabelLastname = document.createElement('label')
    const modalInputName = document.createElement('input')
    const modalInputSurname = document.createElement('input')
    const modalInputLastname = document.createElement('input')
    const modalAddContact = document.createElement('button')
    const modalAddContactSvg = document.createElement('span')
    const modalAccept = document.createElement('button')
    const modalCancel = document.createElement('button')
    const modalContactBlock = document.createElement('div')
    const nameFloat = document.createElement('div')
    const surnameFloat = document.createElement('div')
    const lastnameFloat = document.createElement('div')

    modalTitle.classList.add('modal-title')
    modalClose.classList.add('modal-close')
    modalForm.classList.add('modal-form')
    modalAddContact.classList.add('modal-add-contact')
    modalAccept.classList.add('modal-accept')
    modalCancel.classList.add('modal-cancel')
    modalInputName.classList.add('modal-input')
    modalInputSurname.classList.add('modal-input')
    modalInputLastname.classList.add('modal-input')
    modalLabelName.classList.add('modal-label')
    modalLabelSurname.classList.add('modal-label')
    modalLabelLastname.classList.add('modal-label')
    nameFloat.classList.add('modal-floating')
    surnameFloat.classList.add('modal-floating')
    lastnameFloat.classList.add('modal-floating')
    modalAddContactSvg.classList.add('modal-add-contact-svg')
    modalLabelName.for = 'inputName'
    modalLabelSurname.for = 'inputSurname'
    modalLabelLastname.for = 'inputLastname'
    modalInputName.id = 'inputName'
    modalInputSurname.id = 'inputSurname'
    modalInputLastname.id = 'inputLastname'

    modalInputName.placeholder = "Name"
    modalInputSurname.placeholder = "Surname"
    modalInputLastname.placeholder = "Lastname"
    modalTitle.textContent = "Add new user"
    modalLabelName.textContent = "Enter user name"
    modalLabelSurname.textContent = "Enter user surname"
    modalLabelLastname.textContent = "Enter user lastname"
    modalAccept.textContent = "Add user"
    modalCancel.textContent = "Cancel"
    modalClose.innerHTML = close
    modalAddContact.textContent = "Add contact"
    modalAddContactSvg.innerHTML = addContact

    modalAddContact.addEventListener('click', (e) => {
        e.preventDefault()

        const contactsItems = document.getElementsByClassName('contact')
        if(contactsItems.length < 9) {
            const contactsItem = createContact()
            modalContactBlock.prepend(contactsItem.contact)
        } else {
            const contactsItem = createContact()
            modalContactBlock.prepend(contactsItem.contact)
            modalAddContact.remove()
        }
    })

    modalAddContact.append(modalAddContactSvg)
    nameFloat.append(modalLabelName, modalInputName)
    surnameFloat.append(modalLabelSurname, modalInputSurname)
    lastnameFloat.append(modalLabelLastname, modalInputLastname)
    modalContactBlock.append(modalAddContact)
    modalForm.append(nameFloat, surnameFloat, lastnameFloat, modalContactBlock, modalAccept, modalCancel)

    return {
        modalForm,
        modalClose,
        modalTitle,
        modalCancel,
        modalInputName,
        modalInputSurname,
        modalInputLastname,
        modalLabelName,
        modalLabelSurname,
        modalLabelLastname,
        modalContactBlock,
        modalAccept
    }
}