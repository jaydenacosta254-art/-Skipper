// Master list of games for the website
// 1. MASTER GAMES LIST (Only add new games right here!)
//Example of what to put for a new game: { name: "Game Name", url: "https://gameurl.com", image: "https://gameimage.com" },
const masterGamesList = [
    { name: "Chicken Royale", url: "https://jaydenacosta254-art.github.io/Skipper/classroom/index.html", image: "https://chickenroyalegame.com/images/chicken-royale-hero.webp" },
    { name: "Web Dashers", url: "https://web-dashers.github.io/", image: "https://avatars.githubusercontent.com/u/273732217?s=280&v=4" },
    { name: "Poly Track", url: "https://cdn.thepolytrack.com/polytrack/0.6.3/index.html", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyUCHrTAEhtvClfUb-sQGWBLGmdcQTCbFKKjdz56lwjlkNJkw9iJbi6MA&s=10" },
    { name: "Poxel.io", url: "https://poxel.io/", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7t-bY0rEjLCBY3byctgK4VoYOx-TrhJD6W45p99mBYw&s=10" },
    { name: "Retro Bowl", url: "https://retro-bowl-six.vercel.app", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3RmSjzJOn5RlRpnrh7Iq0sUZsMCLrCj2kCheq1ZVdww&s" },
    { name: "Wacky Flip", url: "https://game.azgame.io/wacky-flip/", image: "https://wacky-flip.io/data/image/wacky-flip.png" },
    { name: "Shell Shockers", url: "https://mathlete.pages.dev", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyK8_Jlb56iBIOCcZ0hgtyzz3JncKjsfZNQM68GR3ND6Dg1N3ce1Jv4rQI4T2v8SsEYEEnBlcO-uUGGaB52Q5hisiJTzS_nlH9USIE9g&s=10" },
    { name: "Escape Road", url: "https://d1wnrmoe2jrw0g.cloudfront.net/html/escape_car/index.html", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSySzgjwAIlHNzeP5IWzOF3FDr6KdN1C57q9ZcKTCB9zg&s" },
    { name: "FNAF 1", url: "https://ubgwtf.gitlab.io/fnaf/", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwc6M1823U4lr1QhLL5ANLPZGByxrnOLM1cFtlBQI9LJ4d5j1m3InWX5GiCddzyKDIj7_3e3_wox5IdsdWXq14zI_rsS9mGkdaSuPrEXkuGjUoqTs&s=10&ec=122259001" },
    { name: "Eaglercraft 1.5.2", url: "https://gnhustgames.org/eaglercraft-source/", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGoaDk2SSBvjkwZErZeLoL3nub24VJWT9hrmrMRIEo4A&s=10" },
    { name: "Doom", url: "https://dosdeck.com/game/doom", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqO_MS3eZB1W2YWSqLN7lewya9rCK23uwLqgc9MeN8_I8NNSzoeCvzEQxORemhFXS7zhJVngcmeQqCIfgWne82Y-h-gzrGnQxUnm9ChqKWfMIEcfo&s&ec=122259001" },
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


       // Adds the Suggestions & Bug Fixes tab to the navigation bar
    const suggestLink = document.createElement('a');
    suggestLink.className = 'nav-item suggest-tab';
    suggestLink.textContent = 'Suggestions & Bugs'; //Name of the tab for suggestions and bug fixes
    
    // Paste your Google Form link inside the quotes below
    suggestLink.href = 'https://forms.gle/96Vhd8dUhSae7YqaA';
    suggestLink.target = '_blank'; // Opens the form in a new tab so players don't lose their game
    
    navContainer.appendChild(suggestLink);

}
