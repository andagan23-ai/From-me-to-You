# From Me To You 💐

A pixel-art New Year card, played like a little game: loading screen, PRESS START, the bouquet, the story, the letter, an "our year" photo page, a memory-match game, a little pixel cat, a sky that moves from morning to night, drifting petals with tilt parallax, a daisy-catching mini-game, four verses, a candle to light, a contract to sign, a wish for 2027, fireworks under a night sky, and a few hidden surprises. Achievements pop up along the way.

Plain HTML, CSS and JavaScript. No build step, no dependencies.

## Files
- `index.html` – page structure (the dialog, characters, buttons)
- `style.css` – all styling and animations
- `script.js` – the story flow, 3D bouquet, fireworks and music logic
- `images/` – pixel characters, background, wall scene, and the three `memory*.jpg` photos
- `music.mp3` – background music (set by `MUSIC_SRC` near the top of `script.js`)
- `music-original.mp3` – an original track you can swap in by changing `MUSIC_SRC`

## Run locally
Serve the folder (opening `index.html` directly also works in most browsers):

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Where to edit
- Messages: the `LETTER`, `PAGES`, `VERSES`, `PRAYER`, `NEWYEAR` and `QUESTION` constants in `script.js`
- Colours and fonts: the `:root` variables at the top of `style.css`

## Photos
`images/memory1.jpg` to `memory3.jpg` are personal photos of real people. If the repository is public, anyone can see them, so keep the repo private or remove them first.
