const inputEl = document.querySelector('#search-term')

const modalEl = document.querySelector('.modal')
const modalClose = document.querySelector('.modal-close')
    modalClose.onClick = () => {
        modalEl.style.display = 'none'
    }
    window.onclick = (event)  => {
        if(event.target.className === 'modal-background') {
            modalEl.style.display = 'none'
        }
    }

const searchBtn = document.querySelector('#search-form')
searchBtn.addEventListener('submit', clickSearch)

clickSearch = () => {
    const userInput = capFirst(document.getElementById('search-term').value)
    apiRequest(userInput)
}