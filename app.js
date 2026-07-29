const frame = document.querySelector("#collection-frame");
const goTop = document.querySelector("#go-top");
const petals = document.querySelector("#petals");
const loader = document.querySelector("#site-loader");
const loaderStartedAt = Date.now();
let loaderDismissed = false;
let lastGoTopActivation = 0;

function dismissLoader() {
  if (loaderDismissed) return;
  loaderDismissed = true;
  loader.classList.add("is-ready");
  window.setTimeout(() => {
    frame.contentWindow?.postMessage({ type: "gs-play-hero" }, "*");
  }, 1150);
}

function prepareCollection() {
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
  frame.src = "standalone.html";
}

window.addEventListener("message", (event) => {
  if (event.source === frame.contentWindow && event.data?.type === "gs-ready") {
    const remaining = Math.max(0, 7600 - (Date.now() - loaderStartedAt));
    window.setTimeout(dismissLoader, remaining);
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
