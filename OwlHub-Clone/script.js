const viewButton = document.getElementById("btn-view");
const discordButton = document.getElementById("btn-discord");

viewButton.addEventListener("click", () => {
    window.open("https://crishoux.github.io/OwlHub/games");
});

discordButton.addEventListener("click", () => {
    window.open("https://discord.gg/FJmaX4X");
});

const scriptButton = document.getElementById("btn-script");
const copyPopup = document.getElementById("copyPopup");

scriptButton.addEventListener("click", () => {
    const scriptBox = document.createElement("textarea");
    scriptBox.value = 'loadstring(game:HttpGet("https://raw.githubusercontent.com/CriShoux/OwlHub/master/OwlHub.txt"))();';
    document.body.appendChild(scriptBox);
    scriptBox.select();
    document.execCommand("copy");
    document.body.removeChild(scriptBox);
    copyPopup.style.display = "block";
    setTimeout(() => {copyPopup.style.display = "none";}, 1000);
});