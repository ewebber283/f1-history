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
    const userInput = document.getElementById('search-term').value
    apiRequest()
} 

apiRequest = () => {
    fetch("https://ergast.com/api/f1/2008/driverStandings.json").then(function(response) {
        response.json().then(function(data) {
            console.log(data)
        });
    });

}

apiRequest();



