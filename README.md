# MtGTrackers

Web-based, single-page sets of trackers for **Magic: The Gathering**. Comes in two versions:
- **index.html**: Has trackers for life, commander damage and commander tax. Use for Commander.
- **index_noncom.html**: Has a tracker for life only. Use for non-Commander formats.

## Installation and usage

Download or clone the repository, then just open `index.html` in your web browser.

## Themes

MtGTrackers ships with about a dozen different themes. The theme can be changed by editing the \<html\> header in either HTML file and changing `data-selected-theme` to the name of the desired theme.

List of themes:

* chocolate
* default
* default-inv
* forest
* inferno
* mtg-black
* mtg-blue
* mtg-green
* mtg-red
* mtg-white
* neon
* pink
* retro-pastel

You can also make your own theme by making a copy of `theme-template.css` and modifying it as per the instructions therein, then importing the custom theme into `css/themelist.css`.