const inputEl = document.querySelector('#search-term')
const standingsContainerEl = document.querySelector("#standings-container")
const standingsSearchTerm = document.querySelector("#standings-search-term")

clickSearch = () => {
    const userInput = document.getElementById('search-term').value
    apiRequest(userInput)
}     

const searchBtn = document.querySelector('#search-form')
searchBtn.addEventListener('submit', clickSearch)



apiRequest = (userInput) => {
    fetch("https://ergast.com/api/f1/" + userInput + "/driverStandings.json").then(function(response) {
        response.json().then(function(data) {
            displayStandings(data)
        });
    });
}

displayStandings = (year) => {
    console.log(year)
    standingsContainerEl.textContent = "";
    standingsSearchTerm.textContent = year;
}

