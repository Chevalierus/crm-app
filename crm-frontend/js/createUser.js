import { createModalDelete } from "./createModalDelete.js"
import { createModalEdit } from "./createModalEdit.js"
import { formatDate, formatTime, createContact} from './scripts.js'
import { editUser, deleteUser } from './svg.js'

export const createUserTable = (data) => {
    const userTr = document.createElement('tr')
    const userId = document.createElement('td')
    const userFullname = document.createElement('td')
    const userName = document.createElement('span')
    const userSurname = document.createElement('span')
    const userLastname = document.createElement('span')
    const userCreate = document.createElement('td')
    const userCreateData = document.createElement('span')
    const userCreateTime = document.createElement('span')
    const userChange = document.createElement('td')
    const userChangeData = document.createElement('span')
    const userChangeTime = document.createElement('span')
    const userContacts = document.createElement('td')
    const userActions = document.createElement('td')
    const userActionsEdit = document.createElement('button')
    const userActionsEditSvg = document.createElement('span')
    const userActionsDelete = document.createElement('button')
    const userActionsDeleteSvg = document.createElement('span')
    const deleteUserItem = createModalDelete();
    const editUserItem = createModalEdit(data)
    
    userTr.classList.add('table-tr-body')
    userName.classList.add('table-user-info')
    userSurname.classList.add('table-user-info')
    userLastname.classList.add('table-user-info')
    userId.classList.add('table-body-item', 'table-body-id')
    userFullname.classList.add('table-body-item')
    userCreate.classList.add('table-body-item')
    userCreateData.classList.add('table-body-data')
    userCreateTime.classList.add('table-body-time')
    userChange.classList.add('table-body-item')
    userChangeData.classList.add('table-body-data')
    userChangeTime.classList.add('table-body-time')
    userContacts.classList.add('table-body-item')
    userActions.classList.add('table-body-item')
    userActionsEdit.classList.add('table-item-btn')
    userActionsDelete.classList.add('table-item-btn')
    userActionsEditSvg.classList.add('edit-user-svg')
    userActionsDeleteSvg.classList.add('delete-user-svg')


    for(const contact of data.contacts) {
        createContact(contact.type, contact.value, userContacts)
    }

    const deleteUserApi = () => {
        import('./api.js').then(({ deleteUser }) => {
            deleteUserItem.deleteModalAccept.addEventListener('click', () => {
                deleteUser(data.id)
                document.getElementById(data.id).remove()
            })
        })
    }

    userActionsDelete.addEventListener('click', () => {
        deleteUserApi()
        document.body.append(deleteUserItem.deleteModal)
    })

    userActionsEdit.addEventListener('click', () => {
        document.body.append(editUserItem.editModal);
    }) 

    userId.textContent = data.id
    userName.textContent = data.name 
    userSurname.textContent = data.surname 
    userLastname.textContent = data.lastName
    userActionsEdit.textContent = 'Edit'
    userActionsDelete.textContent = 'Delete'
    userCreateData.textContent = formatDate(data.createdAt)
    userCreateTime.textContent = formatTime(data.createdAt)
    userChangeData.textContent = formatDate(data.updatedAt)
    userChangeTime.textContent = formatTime(data.updatedAt)
    userActionsEditSvg.innerHTML = editUser
    userActionsDeleteSvg.innerHTML = deleteUser

    userActionsEdit.append(userActionsEditSvg)
    userActionsDelete.append(userActionsDeleteSvg)
    userFullname.append(userSurname, userName, userLastname)
    userActions.append(userActionsEdit, userActionsDelete)
    userCreate.append(userCreateData, userCreateTime)
    userChange.append(userChangeData, userChangeTime)
    userTr.append(
        userId,
        userFullname,
        userCreate,
        userChange,
        userContacts,
        userActions
    )

    return userTr
}