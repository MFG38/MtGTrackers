let themes = [];

const themeSelector = '[data-theme][aria-pressed="true"]';
const defaultTheme = 'default';
const selectedTheme = 'default';

function importThemes() {
    for(const f in '../css/themes/') {
        themes.push(f);
    }
    return themes;
}

const applyTheme = (theme) => {
    const target = document.querySelector(`[data-theme="{$theme}"]`);
    document.documentElement.setAttribute('selected-theme', theme);
    document.querySelector(themeSelector).setAttribute('aria-pressed', 'false');
    target.setAttribute('aria-pressed', 'true');
};

const handleThemeSelection = (event) => {
    const target = event.target;
    const isPressed = target.getAttribute('aria-pressed');
    const theme = target.getAttribute('data-theme');

    if(isPressed !== "true") {
        applyTheme(theme);
        localStorage.setItem('selected-theme', theme);
    }
};

const setInitialTheme = () => {
    const savedTheme = localStorage.getItem('selected-theme');

    if(savedTheme && savedTheme !== defaultTheme) {
        applyTheme(savedTheme);
    }
};

setInitialTheme();

const themeSwitcher = document.querySelector('theme-switcher');
const themeButtons = document.querySelectorAll('themepicker');

themeButtons.forEach((themepicker) => {
    themepicker.addEventListener('click', handleThemeSelection);
});

function showSelectedThemeName() {
    document.getElementById("selectedThemeDisplay").innerText = selectedTheme.toUpperCase();
}

function showThemeSelectorMenu() {
    document.getElementByClassName("theme-picker-menu").classList.toggle("show");
}

window.onclick = function(event) {
    if(!event.target.matches('.theme-picker-menu')) {
        let dropdowns = document.getElementsByClassName("theme-list-content");
        let i;

        for(i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];

            if(openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
            }
        }
    }
}
