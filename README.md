# BIGBANG Mystery Pulls

A mobile-first GitHub Pages experience for NFC mystery song keychains shared at BIGBANG's XX COSMO Tour in Oakland on September 5, 2026.

## Preview locally

Serve the repository root with any static file server, then open one of the song folders. For example:

```powershell
node tests/serve.mjs
```

Then visit `http://localhost:4173/still-life/`.

## Replace the placeholder artwork

The six artwork files live in `assets/artwork/`:

- `haru-haru-placeholder.svg`
- `lies-placeholder.svg`
- `still-life-placeholder.svg`
- `biiig-placeholder.svg`
- `bang-bang-bang-placeholder.svg`
- `fantastic-baby-placeholder.svg`

The easiest update is to add the final square images to that folder and change only the matching `image` line in `assets/js/songs.js`. Keep images square and optimized for the web (WebP or JPEG at roughly 1200 × 1200 is plenty).

## GitHub Pages

The project uses relative URLs so every route works when published at:

`https://anneotherbite.github.io/Bigbang-mystery-pulls/`

In GitHub, choose **Settings → Pages → Deploy from a branch**, then select the `main` branch and `/ (root)` folder.
