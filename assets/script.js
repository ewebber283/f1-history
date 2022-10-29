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
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'faf1df0ca0msh076ac77b5167b92p1214afjsn25e99da003c3',
		'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com'
	}
};

fetch('https://api-formula-1.p.rapidapi.com/rankings/drivers?season=' + userInput, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

	standingsContainerEl.textContent = "";
	standingsSearchTerm.textContent = userInput;

	for (let i = 0; i < response.length; i++) {
		
		const yearName = response[i].season;
	  
		
		const standingsEl = document.createElement("div");
		standingsEl.classList = "list-item flex-row justify-space-between align-center";
	  
	
		const titleEl = document.createElement("span");
		titleEl.textContent = yearName;
	  
		
		standingsEl.appendChild(titleEl);
	  
		
		standingsContainerEl.appendChild(standingsEl);
	  }

}
