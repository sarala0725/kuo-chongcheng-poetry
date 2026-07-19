const frame = document.querySelector("#collection-frame");
const goTop = document.querySelector("#go-top");
const petals = document.querySelector("#petals");
const loader = document.querySelector("#site-loader");
const loaderStartedAt = Date.now();
let loaderDismissed = false;

function dismissLoader() {
  if (loaderDismissed) return;
  loaderDismissed = true;
  loader.classList.add("is-ready");
}

function prepareCollection() {
  try {
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

goTop.addEventListener("click", () => {
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
  frame.contentWindow?.postMessage({ type: "gs-go-top" }, "*");
});

prepareCollection();
