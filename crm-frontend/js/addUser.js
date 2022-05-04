import { createModal } from "./createModal.js"
import { sendUser } from './api.js'

export const addUser = () => {
    const createForm = createModal();
    const modal = document.createElement('div');
    const modalContent = document.createElement('div')
    
    modal.classList.add('modal', 'all-modal', 'modal-active')
    modalContent.classList.add('modal-content', 'all-modal-content', 'modal-active')
    createForm.modalForm.classList.add('add-user')

    modal.append(modalContent)
    modalContent.append(createForm.modalClose, createForm.modalTitle, createForm.modalForm)

    createForm.modalForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const typeContact = document.querySelectorAll('.contact-type-btn')
        const valueContact = document.querySelectorAll('.contact-input')

        let contacts = []
        let userObj = {}

        for (let i = 0; i < typeContact.length; i++) {
            contacts.push({
                type: typeContact[i].innerHTML  ,
                value: valueContact[i].value
            })
        }

        userObj.name = createForm.modalInputName.value
        userObj.surname = createForm.modalInputSurname.value
        userObj.lastName = createForm.modalInputLastname.value
        userObj.contacts = contacts
        console.log(userObj)

        await sendUser(userObj, "POST")
    })

    createForm.modalClose.addEventListener('click', () => {
        modal.remove()
    })

    createForm.modalCancel.addEventListener('click', (e) => {
        modal.remove()
    })

    document.addEventListener('click', (e) => {
        if(e.target == modal) {
            modal.remove()
        }
    })

    return modal
}