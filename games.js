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



// 2. Automatically build the upgraded Top Navigation Bar on EVERY page
const navbar = document.querySelector('.arcade-navbar');
if (navbar) {
    // Keep your existing brand link ("Skipper's Arcade" or "← Back to Hub")
    const brandLink = navbar.querySelector('.nav-brand');

    // Clear the old scrolling bar to rebuild it cleanly
    navbar.innerHTML = '';

    // Left Side: Brand Heading + Suggestions Tab right next to it
    const leftGroup = document.createElement('div');
    leftGroup.className = 'nav-left-group';

    if (brandLink) {
        leftGroup.appendChild(brandLink);
    }

    const suggestLink = document.createElement('a');
    suggestLink.className = 'nav-item suggest-tab';
    suggestLink.textContent = 'Suggestions & Bugs';
    // Keep your Google Form link or 'suggestions.html' here
    suggestLink.href = 'https://forms.gle/96Vhd8dUhSae7YqaA';
    suggestLink.target = '_blank';
    leftGroup.appendChild(suggestLink);

    navbar.appendChild(leftGroup);

    // Right Side: Multi-Column "Games" Dropdown Menu
    const dropdownWrapper = document.createElement('div');
    dropdownWrapper.className = 'games-dropdown';

    const dropdownBtn = document.createElement('button');
    dropdownBtn.className = 'dropdown-trigger';
    dropdownBtn.innerHTML = 'Games ▾';

    const dropdownMenu = document.createElement('div');
    dropdownMenu.className = 'dropdown-columns';

    // Fill the dropdown menu with all games from masterGamesList
    masterGamesList.forEach(game => {
        const gameLink = document.createElement('a');
        gameLink.className = 'dropdown-game-item';
        gameLink.textContent = game.name;
        gameLink.href = `webdashers.html?game=${encodeURIComponent(game.url)}`;
        dropdownMenu.appendChild(gameLink);
    });

    // Toggle menu open/closed when clicked
    dropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownMenu.classList.toggle('show-menu');
    });

    // Close menu automatically when clicking anywhere else on the page
    document.addEventListener('click', () => {
        dropdownMenu.classList.remove('show-menu');
    });

    dropdownWrapper.appendChild(dropdownBtn);
    dropdownWrapper.appendChild(dropdownMenu);
    navbar.appendChild(dropdownWrapper);
}
