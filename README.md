# BIGBANG Mystery Pulls

A mobile-first GitHub Pages experience for NFC mystery song keychains shared at BIGBANG's XX:COSMOS Tour in Oakland on September 5, 2026.

## Preview locally

Serve the repository root with any static file server, then open one of the song folders. For example:

```powershell
node tests/serve.mjs
```

Then visit `http://localhost:4173/still-life/`.

## Artwork

The six final artwork files live in `assets/artwork/`:

- `haru-haru.jpg`
- `lies.jpg`
- `still-life.jpg`
- `biiig.jpg`
- `bang-bang-bang.jpg`
- `fantastic-baby.jpg`

Per-song image paths and crop positions are configured in `assets/js/songs.js`.

## GitHub Pages

The project uses relative URLs so every route works when published at:

`https://anneotherbite.github.io/Bigbang-mystery-pulls/`

In GitHub, choose **Settings → Pages → Deploy from a branch**, then select the `main` branch and `/ (root)` folder.
