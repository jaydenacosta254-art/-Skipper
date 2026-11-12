// Master list of games for the website
// 1. MASTER GAMES LIST (Only add new games right here!)
//Example of what to out for a new game: { name: "Game Name", url: "https://gameurl.com", image: "https://gameimage.com" } 
const masterGamesList = [
    { name: "Chicken Royale", url: "https://jaydenacosta254-art.github.io/Skipper/classroom/index.html", image: "https://chickenroyalegame.com/images/chicken-royale-hero.webp" },
    { name: "Web Dashers", url: "https://web-dashers.github.io/", image: "https://avatars.githubusercontent.com/u/273732217?s=280&v=4" },
];

const navContainer = document.getElementById('navbar-games');

if (navContainer) {
    masterGamesList.forEach(game => {
        const navLink = document.createElement('a');
        navLink.className = 'nav-item';
        navLink.textContent = game.name;
        navLink.href = `webdashers.html?game=${encodeURIComponent(game.url)}`;
        navContainer.appendChild(navLink);
    });
}
