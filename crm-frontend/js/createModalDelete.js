export const createModalDelete = () => {
    const deleteModal = document.createElement('div')
    const modalClose = document.createElement('button')
    const deleteModalTitle = document.createElement('h2')
    const deleteModalText = document.createElement('p')
    const deleteModalContent = document.createElement('div')
    const deleteModalAccept = document.createElement('button')
    const deleteModalCanel = document.createElement('button')

    deleteModal.classList.add('delete-modal', 'all-modal', 'modal-active')
    modalClose.classList.add('modal-close')
    deleteModalContent.classList.add('delelte-modal-content', 'all-modal-content', 'modal-active')
    deleteModalText.classList.add('delete-modal-text')
    deleteModalTitle.classList.add('modal-title', 'delete-modal-title')

    deleteModalTitle.textContent = 'Удаление пользователя'
    deleteModalText.textContent = 'Вы действительно хотите удалить этого пользователя?'
    deleteModalAccept.textContent = 'Удалить'
    deleteModalCanel.textContent = 'Отмена'
    modalClose.textContent = "X"

    deleteModalCanel.addEventListener('click', () => {
        deleteModal.remove()
    })

    modalClose.addEventListener('click', () => {
        deleteModal.remove()
    })

    document.addEventListener('click', (e) => {
        if(e.target == deleteModal) {
            deleteModal.remove()
        }
    })

    deleteModalContent.append(modalClose, deleteModalTitle, deleteModalText, deleteModalAccept, deleteModalCanel)
    deleteModal.append(deleteModalContent)

    return {
        deleteModal,
        deleteModalContent,
        deleteModalAccept
    }
}