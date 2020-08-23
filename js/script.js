const url = "https://cat-fact.herokuapp.com/facts";

const resultsContainer = document.querySelector(".results");


// fetch(url)
//     .then(response => response.json())
//     .then(data => createHTML(data))
//     .catch(error => resultsContainer.innerHTML = displayError("An error occurred when calling the API"));


function createHTML(results) {
    const facts = results.all;

    resultsContainer.innerHTML = "";

        for (let i = 0; i < facts.length; i++) {

            if (i === 10) {
                break;
            }

            resultsContainer.innerHTML += `<div class="result">${facts[i].text}</div>`;
        }
}


async function getCats() {
    try {
        const response = await fetch(url);

        const data = await response.json();

        const facts = data.all;

        createHTML(facts);

    } catch (error) {
        resultsContainer.innerHTML = displayError("An error occurred when calling the API");
    }
}

getCats();
