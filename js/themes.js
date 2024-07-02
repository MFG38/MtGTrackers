let themes = [];

function importThemes() {
    for(const f in '../css/themes/') {
        themes.push(f);
    }
}
