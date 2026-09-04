import { SONGS } from "./songs.js";

const songKey = document.body.dataset.song;
const song = SONGS[songKey];

if (!song) {
  window.location.replace(new URL("../../", import.meta.url));
  throw new Error(`Unknown mystery pull: ${songKey}`);
}

document.body.innerHTML = `
  <div class="ambient" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>

  <section class="loading-screen" data-loading aria-live="polite" aria-label="Preparing your mystery pull">
    <p class="tour-mark" aria-label="XX:COSMOS">XX:<span>COSMOS</span></p>
    <div class="orbit-loader" aria-hidden="true">
      <span class="orbit-core"></span>
      <span class="orbit-star">✦</span>
    </div>
    <div class="loading-copy">
      <p class="loading-kicker">Mystery Pull</p>
      <p class="loading-status">Finding your mystery track…</p>
    </div>
    <p class="loading-foot">Aligning the stars for you</p>
  </section>

  <main class="reveal-shell" data-reveal hidden>
    <header class="reveal-header">
      <p class="tour-mark" aria-label="XX:COSMOS">XX:<span>COSMOS</span></p>
    </header>

    <article class="reveal-card" aria-live="polite">
      <div class="intro-block">
        <p class="pulled-label">You pulled…</p>
        <div><span class="rarity-badge" data-rarity-badge></span></div>
        <h1 class="song-title" data-song-title></h1>
        <p class="artist">BIGBANG</p>
      </div>

      <div class="artwork-wrap">
        <div class="burst" aria-hidden="true"><span>✦</span><span>✧</span><span>✦</span><span>✧</span><span>✦</span><span>✧</span></div>
        <div class="artwork-frame"><img data-artwork width="1200" height="1200" alt=""></div>
      </div>

      <div class="button-stack" aria-label="Listen to this song">
        <a class="button button-spotify" data-spotify target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="currentColor" opacity=".18"/><path d="M6.4 9.2c3.8-1 7.8-.7 11.2.9M7.1 12.3c3.2-.8 6.8-.5 9.7.8M7.8 15.2c2.7-.6 5.5-.4 8 .7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
          Play on Spotify
        </a>
        <a class="button button-youtube" data-youtube target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="4" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="m10 9 5 3-5 3z" fill="currentColor"/></svg>
          Watch on YouTube
        </a>
      </div>

      <section class="keepsake" aria-labelledby="keepsake-title">
        <p class="section-kicker">XX:COSMOS TOUR</p>
        <h2 id="keepsake-title">Oakland Coliseum</h2>
        <p class="event-date">September 5, 2026</p>
        <p class="thank-you">Thanks for being part of my concert experience! I hope this mystery pull gives you something fun to remember the amazing night by.</p>
      </section>

      <section class="replay-card" aria-labelledby="replay-title">
        <p class="section-kicker">Same song. Same fate.</p>
        <h2 id="replay-title">Want to see your pull again?</h2>
        <p>Replay the stars without changing your track.</p>
        <button class="button button-replay" type="button" data-replay>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 8V4m0 0h-4m4 0-3.2 3.2A7 7 0 1 0 19 14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
          Replay Pull
        </button>
      </section>

      <section class="social-card" aria-labelledby="social-title">
        <p class="section-kicker">Keep the night going</p>
        <h2 id="social-title">LET'S BE FRIENDS ♡</h2>
        <div class="social-actions">
          <a class="button button-instagram" href="https://www.instagram.com/howtosoju" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
            Instagram
          </a>
          <a class="button button-discord" href="https://discord.gg/TTBfCCkQaA" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.1 7.2A11.8 11.8 0 0 1 12 6.1c1.8 0 3.4.4 4.9 1.1 1.1 1.6 1.8 3.5 2 5.6a9.7 9.7 0 0 1-3.2 2.3l-.8-1.1c.5-.2 1-.5 1.4-.8-2.7 1.3-5.9 1.3-8.6 0 .4.3.9.6 1.4.8l-.8 1.1a9.7 9.7 0 0 1-3.2-2.3c.2-2.1.9-4 2-5.6Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="9.2" cy="11.4" r="1" fill="currentColor"/><circle cx="14.8" cy="11.4" r="1" fill="currentColor"/></svg>
            Discord
          </a>
          <button class="button button-share" type="button" data-share>
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="18" cy="5" r="2.4" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="6" cy="12" r="2.4" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="18" cy="19" r="2.4" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="m8.2 10.9 7.6-4.7M8.2 13.1l7.6 4.7" fill="none" stroke="currentColor" stroke-width="1.7"/></svg>
            Share Your Pull
          </button>
        </div>
        <p class="share-status" data-share-status role="status"></p>
      </section>

      <p class="footer-note">Made with love for Oakland VIPs · 09.05.26</p>
    </article>
  </main>
`;

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const loadingHoldDuration = 3500;
const loadingFadeDuration = reduceMotion ? 0 : 700;

const elements = {
  loading: document.querySelector("[data-loading]"),
  reveal: document.querySelector("[data-reveal]"),
  title: document.querySelector("[data-song-title]"),
  badge: document.querySelector("[data-rarity-badge]"),
  artwork: document.querySelector("[data-artwork]"),
  spotify: document.querySelector("[data-spotify]"),
  youtube: document.querySelector("[data-youtube]"),
  replay: document.querySelector("[data-replay]"),
  share: document.querySelector("[data-share]"),
  shareStatus: document.querySelector("[data-share-status]")
};

const rarityLabels = {
  common: "COMMON",
  rare: "RARE",
  legendary: "LEGENDARY"
};

function populateSong() {
  document.body.dataset.rarity = song.rarity;
  document.documentElement.style.setProperty("--song-accent", song.accent);
  document.title = `${song.title} · BIGBANG Mystery Pull`;
  elements.title.textContent = song.title;
  elements.badge.textContent = rarityLabels[song.rarity];
  elements.badge.setAttribute("aria-label", song.rarity);
  elements.artwork.src = new URL(song.image, import.meta.url).href;
  elements.artwork.alt = `BIGBANG group photo for ${song.title}.`;
  elements.artwork.style.objectPosition = song.position || "center";
  elements.spotify.href = song.spotify;
  elements.youtube.href = song.youtube;
}

function showReveal() {
  elements.loading.classList.add("is-leaving");
  window.setTimeout(() => {
    elements.loading.hidden = true;
    elements.reveal.hidden = false;
    elements.reveal.classList.remove("is-revealing");
    void elements.reveal.offsetWidth;
    elements.reveal.classList.add("is-revealing");
    window.scrollTo({ top: 0, behavior: "auto" });
  }, loadingFadeDuration);
}

function playReveal() {
  elements.reveal.hidden = true;
  elements.reveal.classList.remove("is-revealing");
  elements.loading.hidden = false;
  elements.loading.classList.remove("is-leaving");
  window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  window.setTimeout(showReveal, loadingHoldDuration);
}

async function sharePull() {
  const shareData = {
    title: `${song.title} · BIGBANG Mystery Pull`,
    text: `I pulled ${song.title} (${song.rarity.toUpperCase()}) at BIGBANG's XX:COSMOS Tour in Oakland!`,
    url: window.location.href
  };

  elements.shareStatus.textContent = "";

  if (navigator.share) {
    try {
      await navigator.share(shareData);
      elements.shareStatus.textContent = "Pull shared ♡";
      return;
    } catch (error) {
      if (error.name === "AbortError") return;
    }
  }

  try {
    await navigator.clipboard.writeText(window.location.href);
    elements.shareStatus.textContent = "Link copied — ready to share!";
  } catch {
    const fallback = document.createElement("textarea");
    fallback.value = window.location.href;
    fallback.setAttribute("readonly", "");
    fallback.style.position = "fixed";
    fallback.style.opacity = "0";
    document.body.appendChild(fallback);
    fallback.select();
    const copied = document.execCommand("copy");
    fallback.remove();
    elements.shareStatus.textContent = copied ? "Link copied — ready to share!" : "Copy the page address to share your pull.";
  }
}

populateSong();
elements.replay.addEventListener("click", playReveal);
elements.share.addEventListener("click", sharePull);
window.setTimeout(showReveal, loadingHoldDuration);
