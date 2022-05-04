import { searchUser } from './api.js'
import { createUserTable } from './createUser.js';

export const searchUsers = (users) => {
    const searchList = document.querySelector('.header-search-list')
    const input = document.querySelector('.header-input')

    users.forEach(user => {
        const searchItem = document.createElement('li')
        const searchLink = document.createElement('a')

        searchItem.classList.add('header-search-item')
        searchLink.classList.add('header-search-link')

        searchLink.textContent = `${user.surname} ${user.name} ${user.lastName}`
        searchLink.href = "#"

        searchItem.append(searchLink)
        searchList.append(searchItem)
    });

    const resetTable = async(str) => {
        const tbody = document.querySelector('.table-body')
        const response = await searchUser(str)
        tbody.innerHTML = ''

        for (const user of response) {
            tbody.append(createUserTable(user))
        }
    }

   input.addEventListener('input', async() => {
        const value = input.value.trim()
        const foundItems = document.querySelectorAll('.header-search-link')

        if(value !== '') {
            resetTable(value)

            foundItems.forEach(link => {
                if (link.innerText.search(value) == -1) {
                    link.classList.add('hide')
                    link.innerHTML = link.innerText
                } else {
                    link.classList.remove('hide')
                    searchList.classList.remove('hide')
                }
            })
        } else {
            resetTable(value)
            searchList.classList.add('hide')
        }
    })
}