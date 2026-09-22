const journey = document.querySelector('.memory-journey');
const room = document.querySelector('.interactive-room');
const bookEntry = document.querySelector('.manuscript-entry');
const bookDialog = document.querySelector('.book-dialog');
const legacyReader = document.querySelector('.legacy-reader');
const echoDrawer = document.querySelector('.echo-drawer');
const manuscriptLightbox = document.querySelector('.manuscript-lightbox');
const awardLightbox = document.querySelector('.award-lightbox');
const readerFrame = legacyReader.querySelector('iframe');
const awardItems = [...document.querySelectorAll('.award-frame')].map((button, index) => ({
  src: button.dataset.award,
  alt: button.querySelector('img')?.alt || `榮譽獎狀 ${index + 1}`
}));
const manuscriptItems = [...manuscriptLightbox.querySelectorAll('[data-manuscript-index]')].map((button, index) => ({
  src: button.querySelector('img')?.src || '',
  alt: `郭崇城手稿 ${index + 1}`
}));
let activeAwardIndex = 0;
let activeManuscriptIndex = 0;

let scrollFrame = 0;

function clamp(value, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function range(value, start, end) {
  return clamp((value - start) / (end - start));
}

function updateJourney() {
  scrollFrame = 0;
  const rect = journey.getBoundingClientRect();
  const distance = Math.max(1, journey.offsetHeight - window.innerHeight);
  const progress = clamp(-rect.top / distance);
  const far = 1 - range(progress, .02, .3);
  const threshold = Math.min(range(progress, .08, .28), 1 - range(progress, .34, .54));
  const desk = range(progress, .3, .68);

  document.documentElement.style.setProperty('--journey-progress', progress.toFixed(4));
  document.documentElement.style.setProperty('--far-opacity', far.toFixed(4));
  document.documentElement.style.setProperty('--threshold-opacity', threshold.toFixed(4));
  document.documentElement.style.setProperty('--desk-opacity', desk.toFixed(4));
  document.documentElement.style.setProperty('--room-opacity', range(progress, .58, .78).toFixed(4));
  room.toggleAttribute('inert', progress < .62);
}

function requestJourneyUpdate() {
  if (scrollFrame) return;
  scrollFrame = window.requestAnimationFrame(updateJourney);
}

function setDialog(dialog, open) {
  dialog.setAttribute('aria-hidden', open ? 'false' : 'true');
  document.body.classList.toggle('has-dialog', open);
  if (open) dialog.querySelector('.dialog-close, .award-close, .manuscript-close')?.focus({ preventScroll: true });
}

function showAward(index) {
  activeAwardIndex = (index + awardItems.length) % awardItems.length;
  const item = awardItems[activeAwardIndex];
  const image = awardLightbox.querySelector('.award-stage img');
  image.src = item.src;
  image.alt = item.alt;
  awardLightbox.querySelector('.award-current').textContent = String(activeAwardIndex + 1);
  awardLightbox.querySelectorAll('[data-award-index]').forEach((button, buttonIndex) => {
    if (buttonIndex === activeAwardIndex) button.setAttribute('aria-current', 'true');
    else button.removeAttribute('aria-current');
  });
}

function openAward(index) {
  showAward(index);
  setDialog(awardLightbox, true);
}

function showManuscript(index) {
  activeManuscriptIndex = (index + manuscriptItems.length) % manuscriptItems.length;
  const item = manuscriptItems[activeManuscriptIndex];
  const image = manuscriptLightbox.querySelector('.manuscript-stage img');
  image.src = item.src;
  image.alt = item.alt;
  manuscriptLightbox.querySelector('.manuscript-current').textContent = String(activeManuscriptIndex + 1);
  manuscriptLightbox.querySelectorAll('[data-manuscript-index]').forEach((button, buttonIndex) => {
    if (buttonIndex === activeManuscriptIndex) button.setAttribute('aria-current', 'true');
    else button.removeAttribute('aria-current');
  });
  const activeThumbnail = manuscriptLightbox.querySelector(`[data-manuscript-index="${activeManuscriptIndex}"]`);
  activeThumbnail?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
}

function openManuscripts(index = 0) {
  showManuscript(index);
  setDialog(manuscriptLightbox, true);
}

function openLegacyCollection(collection) {
  readerFrame.dataset.collection = collection;
  readerFrame.src = '../standalone.html#poems';
  legacyReader.querySelector('#reader-title').textContent = collection;
  setDialog(bookDialog, false);
  setDialog(legacyReader, true);
}

function openEchoes() {
  setDialog(echoDrawer, true);
}

const directInteriorEntry = new URLSearchParams(window.location.search).get('entry') === 'interior';
if (directInteriorEntry) {
  window.scrollTo(0, 0);
  room.removeAttribute('inert');
} else {
  window.addEventListener('scroll', requestJourneyUpdate, { passive: true });
  window.addEventListener('resize', requestJourneyUpdate, { passive: true });
  updateJourney();
}

bookEntry.addEventListener('click', () => openManuscripts(0));
manuscriptLightbox.querySelector('.manuscript-close').addEventListener('click', () => setDialog(manuscriptLightbox, false));
manuscriptLightbox.querySelector('.manuscript-prev').addEventListener('click', () => showManuscript(activeManuscriptIndex - 1));
manuscriptLightbox.querySelector('.manuscript-next').addEventListener('click', () => showManuscript(activeManuscriptIndex + 1));
manuscriptLightbox.querySelectorAll('[data-manuscript-index]').forEach((button) => {
  button.addEventListener('click', () => showManuscript(Number(button.dataset.manuscriptIndex)));
});
manuscriptLightbox.addEventListener('click', (event) => {
  if (event.target === manuscriptLightbox) setDialog(manuscriptLightbox, false);
});
bookDialog.querySelector('.dialog-close').addEventListener('click', () => setDialog(bookDialog, false));
bookDialog.addEventListener('click', (event) => {
  if (event.target === bookDialog) setDialog(bookDialog, false);
});
document.querySelectorAll('[data-collection]').forEach((button) => {
  button.addEventListener('click', () => openLegacyCollection(button.dataset.collection));
});

legacyReader.querySelector('.reader-close').addEventListener('click', () => setDialog(legacyReader, false));
echoDrawer.querySelector('.echo-close').addEventListener('click', () => setDialog(echoDrawer, false));

echoDrawer.querySelector('.echo-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const body = String(form.get('body') || '').trim();
  if (!body) return;
  const nickname = String(form.get('nickname') || '').trim() || '無名的讀者';
  const title = String(form.get('title') || '').trim() || '無題';
  const now = new Date();
  const article = document.createElement('article');
  article.innerHTML = `<time>${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, '0')}</time><h3></h3><p></p><footer></footer>`;
  article.querySelector('h3').textContent = title;
  article.querySelector('p').textContent = body;
  article.querySelector('footer').textContent = `—— ${nickname}`;
  echoDrawer.querySelector('.echo-list').prepend(article);
  event.currentTarget.reset();
});


document.querySelectorAll('.award-frame').forEach((button, index) => {
  button.addEventListener('click', () => openAward(index));
});
awardLightbox.querySelector('.award-prev').addEventListener('click', () => showAward(activeAwardIndex - 1));
awardLightbox.querySelector('.award-next').addEventListener('click', () => showAward(activeAwardIndex + 1));
awardLightbox.querySelectorAll('[data-award-index]').forEach((button) => {
  button.addEventListener('click', () => showAward(Number(button.dataset.awardIndex)));
});
awardLightbox.querySelector('.award-close').addEventListener('click', () => setDialog(awardLightbox, false));
awardLightbox.addEventListener('click', (event) => {
  if (event.target === awardLightbox) setDialog(awardLightbox, false);
});

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  [awardLightbox, manuscriptLightbox, bookDialog, legacyReader, echoDrawer].some((dialog) => {
    if (dialog.getAttribute('aria-hidden') !== 'false') return false;
    setDialog(dialog, false);
    return true;
  });
});
