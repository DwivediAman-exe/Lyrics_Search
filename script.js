const from = document.getElementById("form");
const search = document.getElementById("search");
const result = document.getElementById("result");
const more = document.getElementById("more");

const apiURL = "https://api.lyrics.ovh";

// show data

function showData(data) {
    let output = "";

    data.data.forEach(song => {
        output += `
        <li>
            <span>
            <strong>${song.artist.name}</strong> - ${song.title}
            </span>
            <button class="btn" data-artist="${song.artist.name} data-songTitle="${song.title}">Get Lyrics</button>
        </li>
        `;
    });

    result.innerHTML = `
        <ul class="songs">
            ${output}
        </ul>
    `;
}

// Seacrh function

async function searchSongs(term) {
    const res = await fetch(`${apiURL}/suggest/${term}`);
    const data = await res.json();
    console.log(data);

    showData(data);
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
