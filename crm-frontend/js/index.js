import { createHeader } from './createHeader.js'
import { createTable } from './createTable.js'
import { getUser } from './api.js'
import { createUserTable } from './createUser.js'
import { searchUsers } from './searchUser.js'
import { sortTable } from './sortTable.js'

const createApp = async () => {
    const header = createHeader()
    const main = createTable()
    document.body.append(header, main.main)
    const tableBlock = document.querySelector('.table-block')

    try{
        const users = await getUser()
        setTimeout(() => {
            searchUsers(users)
        }, 3000)
        for(const user of users) {
            document.querySelector('.table-body').append(createUserTable(user))
        }
    } catch(error) {
        console.log(error)
    } finally {
        setTimeout(() => {
            searchUsers()
        }, 3000)
    }

}
createApp()
document.addEventListener("DOMContentLoaded", sortTable())