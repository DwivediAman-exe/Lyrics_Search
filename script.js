const from = document.getElementById("form");
const search = document.getElementById("search");
const result = document.getElementById("result");
const more = document.getElementById("more");

const apiURL = "https://api.lyrics.ovh";

// Seacrh function

function searchSongs(term) {
    fetch(`${apiURL}/suggest/${term}`)
    .then(res => res.json())
    .then(data => console.log(data));
}

// Event Listner

from.addEventListener("submit", e=> {
    e.preventDefault();
    const searchTerm = search.value.trim();
    
    if(!searchTerm) {
        alert("Please enter valid search term")
    }
    else {
        searchSongs(searchTerm);
    }
});
