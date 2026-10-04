const frame = document.querySelector("#collection-frame");
const goTop = document.querySelector("#go-top");
const petals = document.querySelector("#petals");
const loader = document.querySelector("#site-loader");
const loaderStartedAt = Date.now();
const introStorageKey = "gs_intro_seen_2026_09";
let hasSeenIntro = false;
let loaderDismissed = false;
let loaderFinishing = false;
let lastGoTopActivation = 0;

function finishLoader() {
  if (loaderFinishing || loaderDismissed) return;
  loaderFinishing = true;
  loader.classList.add("is-finishing");
  window.setTimeout(dismissLoader, 450);
}

function dismissLoader() {
  if (loaderDismissed) return;
  loaderDismissed = true;
  frame.contentWindow?.postMessage({ type: "gs-play-hero" }, "*");
  frame.classList.add("is-ready");
  loader.classList.add("is-ready");
  try { localStorage.setItem(introStorageKey, "1"); } catch {}
}

function prepareCollection() {
  try { hasSeenIntro = localStorage.getItem(introStorageKey) === "1"; } catch {}
  try {
    const echoResetVersion = "gs_echo_reset_2026_07";
    if (frame.contentWindow.localStorage.getItem(echoResetVersion) !== "1") {
      frame.contentWindow.localStorage.removeItem("gs_likes");
      frame.contentWindow.localStorage.setItem(echoResetVersion, "1");
    }
    frame.contentWindow.localStorage.setItem("gs_loggedIn", "1");
  } catch {
    // The collection still works if the browser blocks local storage.
  }
  // Let the petals finish unfolding (SVG work) before the large collection bundle starts
  // unpacking; the half turn and falling petals run on the compositor and stay smooth.
  window.setTimeout(() => {
    frame.src = "standalone.html?v=20261004seal2";
  }, 850);
}

window.addEventListener("message", (event) => {
  if (event.source === frame.contentWindow && event.data?.type === "gs-ready") {
    const minimumIntro = hasSeenIntro ? 1600 : 1650;
    const remaining = Math.max(0, minimumIntro - (Date.now() - loaderStartedAt));
    window.setTimeout(finishLoader, remaining);
  }
});

function scrollFrameToTop() {
  const frameWindow = frame.contentWindow;
  const frameDocument = frame.contentDocument;
  frameWindow?.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  frameWindow?.postMessage({ type: "gs-go-top" }, "*");
  if (!frameDocument) return;
  [frameDocument.scrollingElement, frameDocument.documentElement, frameDocument.body]
    .filter(Boolean)
    .forEach((element) => element.scrollTo?.({ top: 0, left: 0, behavior: "smooth" }));
  window.setTimeout(() => {
    frameWindow?.scrollTo(0, 0);
    [frameDocument.scrollingElement, frameDocument.documentElement, frameDocument.body]
      .filter(Boolean)
      .forEach((element) => {
        element.scrollTop = 0;
        element.scrollLeft = 0;
      });
  }, 520);
}

function activateGoTop(event) {
  if (Date.now() - lastGoTopActivation < 500) return;
  lastGoTopActivation = Date.now();
  event?.preventDefault();
  petals.replaceChildren();
  for (let index = 0; index < 16; index += 1) {
    const petal = document.createElement("span");
    petal.className = "petal";
    petal.style.setProperty("--start", `${68 + Math.random() * 24}vw`);
    petal.style.setProperty("--drift", `${-28 + Math.random() * 34}vw`);
    petal.style.setProperty("--duration", `${2.8 + Math.random() * 1.8}s`);
    petal.style.setProperty("--delay", `${Math.random() * .45}s`);
    petals.append(petal);
  }
  scrollFrameToTop();
}

goTop.addEventListener("click", activateGoTop);
goTop.addEventListener("touchend", activateGoTop, { passive: false });

prepareCollection();
