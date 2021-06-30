const form = document.querySelector("form");
const name = document.querySelector(".username");
const main = document.querySelector(".maincontainer");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = name.value;
    
    fetch(`https://api.github.com/users/${username}/repos`, {
        method: "GET",
    })
        .then(response => response.json())
        .then(result => listRepositories(main ,...result))
        .catch(e => console.warn("whops"))
})

async function listRepositories(container, ...repositories) {
    const aces = document.querySelectorAll("a");
    for (let i = 0; i < aces.length; i++) {
        aces[i].remove();
    }
    repositories.forEach(element => {
        const newDiv = document.createElement("a");
        newDiv.style.display = "block";
        newDiv.href = element.html_url;
        newDiv.innerText = element.name;
        newDiv.target = "blank";
        container.appendChild(newDiv);
    })
}