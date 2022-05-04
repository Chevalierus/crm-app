import { createModal } from "./createModal.js"
import { createModalDelete } from "./createModalDelete.js"
import { createContact } from "./createContact.js"
import { sendUser } from "./api.js"

export const createModalEdit = (data) => {
    const editModal = document.createElement('div')
    const editModalContent = document.createElement('div')
    const createForm = createModal()

    editModal.classList.add('edit-modal', 'all-modal', 'modal-active')
    editModalContent.classList.add('edit-modal-content', 'all-modal-content', 'modal-active')

    createForm.modalTitle.textContent = 'Изменить данные пользователя'
    createForm.modalAccept.textContent = 'Изменить'
    createForm.modalCancel.textContent = 'Удалить'

    createForm.modalInputName.value = data.name
    createForm.modalInputSurname.value = data.surname
    createForm.modalInputLastname.value = data.lastName

    for (const contact of data.contacts) {
        const createContactEdit = createContact();

        createContactEdit.contactTypeBtn.textContent = contact.type
        createContactEdit.contactInput.value = contact.value

        createForm.modalContactBlock.prepend(createContactEdit.contact)
    }

    document.addEventListener('click', (e) => {
        if(e.target == editModal) {
            editModal.remove()
        }
    })

    createForm.modalClose.addEventListener('click', () => {
        editModal.remove()
    })

    createForm.modalCancel.addEventListener('click', (e) => {
        e.preventDefault()

        const deleteModal = createModalDelete()
        document.body.append(deleteModal.deleteModal)

        import('./api.js').then(({ deleteUser }) => {
            deleteModal.deleteModalAccept.addEventListener('click', () => {
                deleteUser(data.id)
                document.getElementById(data.id).remove()
            })
        })
    })

    createForm.modalForm.addEventListener('submit', (e) => {
        e.preventDefault()

        const contactTypes = document.querySelectorAll('.contact-type-btn')
        const contactValues = document.querySelectorAll('.contact-input')

        let contacts = []
        let users = {}

        for (let i = 0; i < contactTypes.length; i++) {
            contacts.push({
                type: contactTypes[i].innerHTML,
                value: contactValues[i].value
            })
        }

        users.name = createForm.modalInputName.value
        users.surname = createForm.modalInputSurname.value
        users.lastname = createForm.modalInputLastname.value
        users.contacts = contacts;

        sendUser(users, 'PATCH', data.id)
    })

    editModalContent.append(createForm.modalClose, createForm.modalTitle, createForm.modalForm)
    editModal.append(editModalContent)

    return {
        editModal,
        editModalContent
    }
}