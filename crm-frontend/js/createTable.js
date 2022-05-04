import { addUser } from "./addUser.js"
import { createUserImg} from './svg.js'

export const createTable = () => {
    const main = document.createElement('main')
    const section = document.createElement('section')
    const container = document.createElement('div')
    const tableH1 = document.createElement('h1')
    const tableBlock = document.createElement('div')
    const tableHeadTr = document.createElement('tr')
    const table = document.createElement('table')
    const tableHead = document.createElement('thead')
    const tableHeadId = document.createElement('th')
    const tableHeadName = document.createElement('th')
    const tableHeadCreate = document.createElement('th')
    const tableHeadChange = document.createElement('th')
    const tableHeadContacts = document.createElement('th')
    const tableHeadActions = document.createElement('th')
    const tableBody = document.createElement('tbody')
    const createUser = document.createElement('button')
    const createUserSvg = document.createElement('span')


    tableHeadId.setAttribute('data-type', 'id')
    tableHeadName.setAttribute('data-type', 'name')
    tableHeadCreate.setAttribute('data-type', 'create')
    tableHeadChange.setAttribute('data-type', 'update')
    container.classList.add('container')
    table.classList.add('table')
    tableHead.classList.add('table-head')
    tableHeadTr.classList.add('table-head-tr')
    tableHeadId.classList.add('table-head-item', 'sort-by-id')
    tableHeadName.classList.add('table-head-item', 'sort-by-name')
    tableHeadCreate.classList.add('table-head-item', 'sort-by-create')
    tableHeadChange.classList.add('table-head-item', 'sort-by-update')
    tableHeadContacts.classList.add('table-head-item')
    tableHeadActions.classList.add('table-head-item')
    tableBody.classList.add('table-body')
    createUser.classList.add('create-user')
    tableBlock.classList.add('table-block')
    createUserSvg.classList.add('create-user-svg')
    createUserSvg.innerHTML = createUserImg

    createUser.addEventListener('click', () => {
        document.body.append(addUser())
    })

    tableHeadId.textContent = "ID"
    tableHeadName.textContent = "Surname, Name, Lastname"
    tableHeadCreate.textContent = "Creation Date"
    tableHeadChange.textContent = "Last Change"
    tableHeadContacts.textContent = "Contacts"
    tableHeadActions.textContent = "Actions"
    createUser.textContent = "Create User"
    tableH1.textContent = 'Пользователи:'

    createUser.append(createUserSvg)
    tableHeadTr.append(tableHeadId, tableHeadName, tableHeadCreate, tableHeadChange, tableHeadContacts, tableHeadActions)
    tableHead.append(tableHeadTr)
    table.append(tableHead, tableBody)
    tableBlock.append(tableH1, table)
    container.append(tableBlock, createUser)
    section.append(container)
    main.append(section)

    return {
        main,
        table,
        tableBody
    }   

}