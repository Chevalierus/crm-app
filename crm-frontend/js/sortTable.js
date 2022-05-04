// import { getUser } from "./api.js"
// import { createUserTable } from "./createUser.js"

export const sortTable = () => {
    const table = document.querySelector('table')
    const headerTable = table.querySelectorAll('th');
    const tbody = table.querySelector('tbody');

    const sortIn = Array.from(headerTable).map(() => '')
    console.log(sortIn)

    const transform = (type, content) => {
        switch (type) {
            case 'id':
                return parseFloat(content)
            case 'create':
            case 'update':
                return content.split('.').reverse().join(' - ')
            case 'name':
        default:
            return content
        }
    }

    const sortColumn = (index) => {
        const type = headerTable[index].getAttribute('data-type')
        const rows = tbody.querySelectorAll('tr')
        const direction = sortIn[index] || 'sortUp'
        const changeDirection = direction === 'sortUp' ? 1 : -1
        const newRows = Array.from(rows)

        newRows.sort((row1, row2) => {
            const cellA = row1.querySelectorAll('td')[index].textContent
            const cellB = row2.querySelectorAll('td')[index].textContent

            const a = transform(type, cellA)
            const b = transform(type, cellB)
            console.log(a, b)
            switch (true) {
                case a > b: 
                    return 1 * changeDirection
                case a < b:
                return -1 * changeDirection
            
                default:
                    break;
                case a === b:
                return 0;
            }
        });

        [].forEach.call(rows, (row) => {
            tbody.removeChild(row)
        });

        sortIn[index] = direction === 'sortUp' ? 'sortDown' : 'sortUp';

        newRows.forEach(newRow =>  {
            tbody.appendChild(newRow)
        })
    }

    [].forEach.call(headerTable, (header, index) => {
        header.addEventListener('click', () => {
            sortColumn(index)
        })
    });
}

// function resetTable() {
//     const resetTable = document.getElementsByTagName('tbody')
//     console.log(resetTable)
//     while(resetTable.firstChild) {
//       resetTable.removeChild(resetTable.firstChild)
//     }
// }

// export const sortTable = async () => {
//     resetTable()
//     const users = await getUser()
//         function sortById() {
//                 users.sort(function(a, b) {
//                 const aId = a.id
//                 const bId = b.id

//                 if(aId < bId) {
//                     return 1
//                 }
//                 if(aId > bId) {
//                     return -1
//                 }
//                 return 0
//             })
//         users.forEach(user => createUserTable(user))
//         }

//     let sortID = document.querySelector('.sort-by-id')
//     console.log(sortID)
//     sortID.addEventListener('click', sortById)
        
//     function sortByName() {
//                 users.sort(function(a, b) {
//                 const aName = a.surname.toLowerCase()
//                 const bName = b.surname.toLowerCase()

//                 if(aName < bName) {
//                     return 1
//                 }
//                 if(aName > bName) {
//                     return -1
//                 }
//                 return 0
//             })
//         users.forEach(user => createUserTable(user))
//         }
//     let sortName = document.querySelector('.sort-by-name')
//     sortName.addEventListener('click', sortByName())

//         function sortByCreateDate() {
//                 users.sort(function(a, b) {
//                 new Date(b.create) - new Date (a.create)
//             })
//         users.forEach(user => createUserTable(user))
//         }
//     document.querySelector('.sort-by-create').addEventListener('click', sortByCreateDate())

//         function sortByUpDate() {
//                 users.sort(function(a, b) {
//                 new Date (b.create) - new Date (a.create)
//             })
//         users.forEach(user => createUserTable(user))
//         }
//     document.querySelector('.sort-by-update').addEventListener('click', sortByUpDate())
// }