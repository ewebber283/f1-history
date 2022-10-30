const inputEl = document.querySelector('#search-term')
const winnerContainerEl = document.querySelector("#winners-container")

clickSearch = () => {
    const userInput = document.getElementById('search-term').value
    apiRequest(userInput)
}     

const searchBtn = document.querySelector('#search-form')
searchBtn.addEventListener('submit', clickSearch)

apiRequest = (year) => {
    fetch("https://ergast.com/api/f1/" + year + "/driverStandings.json").then(function(response) {
        response.json().then(function(data) {
            console.log(data)
			winnerContainerEl.innerHTML = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.givenName + " "  + data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.familyName
        });
    });

}



