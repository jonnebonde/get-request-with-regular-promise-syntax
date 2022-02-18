//const url = "https://noroff.herokuapp.com/v1/cat-facts/facts";
const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=f6dd075d81db416fbb289fc9d3726038";

const resultsContainer = document.querySelector(".results");


// arrow functions


fetch(url)
    .then(response => response.json())     
    .then(data => createHTML(data))    
    .catch(error => resultsContainer.innerHTML = displayError("An error occurred when calling the API"));
           
        
//  normal functions

fetch(url)
    .then(function(response) {
        console.log(response);
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        createHTML(data);
    })
    .catch(function(error) {
        console.log(error);
        resultsContainer.innerHTML = displayError("An error occurred when calling the API");
    })



function createHTML(results) {
    const facts = results.results;

    resultsContainer.innerHTML = "";

        for (let i = 0; i < facts.length; i++) {

            if (i === 10) {
                break;
            }

            resultsContainer.innerHTML += `<div class="result">${facts[i].name}</div>`;
        }
}


// Prefer the async function method, easy to read.

 async function getCats() {
    try {
        const response = await fetch(url);

        const data = await response.json();

        const facts = data.results;

        

    } catch (error) {
        resultsContainer.innerHTML = displayError("An error occurred when calling the API");
    }
}

//getCats();

