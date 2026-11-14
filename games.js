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

        // Middle: Pill Search Bar with Floating 3-Column Game Grid Dropdown
    const searchWrapper = document.createElement('div');
    searchWrapper.className = 'nav-search-wrapper';
    searchWrapper.innerHTML = `
        <div class="nav-search-pill">
            <img src="https://www.canva.com/design/DAHa7A015ew/Ytys4iStphSb0boZip1fTQ/view" alt="Search" class="search-icon-img">
            <input type="text" id="arcade-live-search" placeholder="Search games..." autocomplete="off">
        </div>
        <div class="search-results-popup" id="search-results-popup">
            <div class="search-grid" id="search-popup-grid"></div>
            <div class="search-see-all" id="search-see-all">See all results →</div>
        </div>
    `;
    navbar.appendChild(searchWrapper);

    const searchInput = document.getElementById('arcade-live-search');
    const searchPopup = document.getElementById('search-results-popup');
    const searchGrid = document.getElementById('search-popup-grid');
    const seeAllBtn = document.getElementById('search-see-all');

    let showAllMatches = false;

    function renderSearchResults(queryText) {
        const q = queryText.trim().toLowerCase();
        if (!q) {
            searchPopup.classList.remove('active');
            showAllMatches = false;
            return;
        }

        const matches = masterGamesList.filter(g => g.name.toLowerCase().includes(q));
        searchGrid.innerHTML = '';

        if (matches.length === 0) {
            searchGrid.innerHTML = `<div class="no-search-hits">No games found for "${queryText}"</div>`;
            seeAllBtn.style.display = 'none';
        } else {
            // Shows up to 6 cards (2 rows of 3) unless "See all results" is clicked
            const visibleGames = showAllMatches ? matches : matches.slice(0, 6);

            visibleGames.forEach(game => {
                const item = document.createElement('a');
                item.className = 'popup-game-card';
                item.href = `webdashers.html?game=${encodeURIComponent(game.url)}`;
                item.innerHTML = `
                    <img src="${game.image}" alt="${game.name}" class="popup-thumb">
                    <span class="popup-title">${game.name}</span>
                `;
                searchGrid.appendChild(item);
            });

            if (matches.length > 6 && !showAllMatches) {
                seeAllBtn.style.display = 'block';
                seeAllBtn.textContent = `See all results (${matches.length}) →`;
            } else {
                seeAllBtn.style.display = 'none';
            }
        }

        searchPopup.classList.add('active');
    }

    searchInput.addEventListener('input', (e) => {
        showAllMatches = false;
        renderSearchResults(e.target.value);
    });

    searchInput.addEventListener('focus', (e) => {
        if (e.target.value.trim()) {
            searchPopup.classList.add('active');
        }
    });

    seeAllBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showAllMatches = true;
        renderSearchResults(searchInput.value);
    });

    // Prevents closing when clicking inside the search box or popup
    searchWrapper.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Closes the popup when clicking anywhere else on the page
    document.addEventListener('click', () => {
        searchPopup.classList.remove('active');
    });


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

// 3. EASY UPDATES BAR LIST (Add new updates right at the top!)
// Example on how to add new updates to the siteUpdates array
// Simply add this, "Example update message" to the siteUpdates array
const siteUpdates = [
    "Nov 14: Added new games and upgraded the top Games dropdown menu.",
    "Nov 13: Fixed Fullscreen and Theater Mode scaling on smaller screens.",
];

// Automatically creates and displays the Updates Bar below the navbar
const headerEl = document.querySelector('header');
if (headerEl && siteUpdates.length > 0) {
    const updateBar = document.createElement('div');
    updateBar.className = 'updates-bar';

    let currentIndex = 0;

    updateBar.innerHTML = `
        <span class="update-badge">UPDATES</span>
        <span class="update-text" id="update-display">${siteUpdates[0]}</span>
        <button class="update-next-btn" id="next-update-btn" title="Next update">Next ▸</button>
    `;

    // Inserts the bar directly underneath your top navigation bar
    headerEl.insertAdjacentElement('afterend', updateBar);

    const updateTextEl = document.getElementById('update-display');
    const nextBtn = document.getElementById('next-update-btn');

    function showNextUpdate() {
        currentIndex = (currentIndex + 1) % siteUpdates.length;
        updateTextEl.textContent = siteUpdates[currentIndex];
    }

    // Lets visitors click "Next ▸" to cycle through updates manually
    nextBtn.addEventListener('click', showNextUpdate);

    // Automatically cycles to the next update every 6 seconds
    setInterval(showNextUpdate, 6000);
}
