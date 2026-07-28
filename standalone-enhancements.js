(() => {
  const illustrations = new Map([
    ["\u864e\u982d\u57e4\u5609\u5e74\u83ef\u6703", "assets/ink-wash/hutoupi-carnival.png"],
    ["\u588a\u4e01\u570b\u5bb6\u516c\u5712\u4e4b\u65c5", "assets/ink-wash/kenting-journey.png"],
    ["\u8cde\u84ee", "assets/ink-wash/lotus-appreciation.png"],
    ["\u5357\u7e23\u862d\u82d1", "assets/ink-wash/nankun-orchid-garden.png"],
    ["\u570b\u969b\u7cd6\u679c\u6587\u5316\u7bc0\u8a8c\u76db", "assets/ink-wash/candy-festival.png"],
    ["\u6885", "assets/ink-wash/plum.png"],
    ["\u862d", "assets/ink-wash/orchid.png"],
    ["\u7af9", "assets/ink-wash/bamboo.png"],
    ["\u5357\u4e9e\u5927\u5730\u9707", "assets/ink-wash/south-asia-earthquake.png"],
    ["\u79cb\u61f7", "assets/ink-wash/autumn-reflections.png"],
    ["\u53f0\u7063\u8fb2\u6751\u60b2\u6b4c", "assets/ink-wash/taiwan-rural-lament.png"],
    ["\u9ad8\u901f\u9435\u8def", "assets/ink-wash/high-speed-rail.png"],
    ["\u5851\u81a0\u82b1", "assets/ink-wash/plastic-flower.png"],
    ["\u53f0\u5357\u5ef6\u5e73\u90e1\u738b\u7960", "assets/ink-wash/yanping-shrine.png"],
    ["\u5c4f\u6771\u6d77\u6d0b\u751f\u7269\u535a\u7269\u9928", "assets/ink-wash/pingtung-marine-museum.png"],
    ["\u588a\u4e01\u570b\u5bb6\u516c\u5712", "assets/ink-wash/kenting-national-park.png"],
    ["\u6771\u53f0\u884c", "assets/ink-wash/eastern-taiwan-journey.png"],
    ["\u5357\u6a6b\u9053\u4e2d", "assets/ink-wash/southern-cross-island-road.png"],
    ["\u4eac\u676d\u904b\u6cb3", "assets/ink-wash/grand-canal.png"],
    ["\u897f\u5b89\u5e02", "assets/ink-wash/xian-city.png"],
    ["\u8001\u677e", "assets/ink-wash/old-pine.png"],
    ["\u611f\u61f7", "assets/ink-wash/reflections.png"],
    ["\u7389\u8774\u8776\uff08\u81ea\u6cc1\uff09", "assets/ink-wash/jade-butterfly.png"],
    ["\u6842\u6797\u5947\u6d1e", "assets/ink-wash/guilin-cave.png"],
    ["\u65b0\u52a0\u5761", "assets/ink-wash/singapore.png"],
    ["\u83f1\u89d2\u9ce5", "assets/ink-wash/water-chestnut-bird.png"],
    ["\u9802\u6d32\u9d3f\u5be8", "assets/ink-wash/dingzhou-pigeon-village.png"],
    ["\u53f0\u7063\u4e09\u6708\u4e0b\u96ea", "assets/ink-wash/taiwan-march-snow.png"],
    ["\u5357\u79d1\u9812", "assets/ink-wash/nanke-ode.png"],
    ["\u7acb\u51ac\u8a2a\u9be4\u701b\u656c\u548c", "assets/ink-wash/winter-beginning-kunying.png"],
    ["\u5584\u5433\u4e2d\u793e\u9577\u69ae\u6176", "assets/ink-wash/wu-community-chair-celebration.png"],
    ["\u570b\u969b\u91d1\u878d\u6d77\u562f", "assets/ink-wash/global-financial-crisis.png"],
    ["\u6559\u80b2\u6642\u5c1a", "assets/ink-wash/education-fashion.png"],
    ["\u7389\u5c71\u56db\u6708\u4e0b\u96ea", "assets/ink-wash/yushan-april-snow.png"],
    ["\u967d\u6625\u611f\u61f7", "assets/ink-wash/spring-reflections.png"],
    ["\u65b0\u6d41\u611f", "assets/ink-wash/new-influenza.png"],
    ["\u666f\u6c23\u6f38\u56de", "assets/ink-wash/economy-recovery.png"],
    ["\u71d5\u5b50\u56de\u4f86\u4e86", "assets/ink-wash/swallows-return.png"],
    ["\u6960\u897f\u9999\u8549\u5c71\u6885\u9999\u4e8c\u6a4b\u843d\u6210", "assets/ink-wash/nanxi-bridge-opening.png"],
    ["\u5584\u5316\u98a8\u5149\uff08\u4e00\uff09", "assets/ink-wash/shanhua-scenery-one.png"],
    ["\u5584\u5316\u98a8\u5149\uff08\u4e8c\uff09", "assets/ink-wash/shanhua-scenery-two.png"],
    ["\u5357\u9be4\u9bd3\u5edf\u5e73\u5b89\u9e7d\u796d\uff08\u4e00\uff09", "assets/ink-wash/nankunshen-salt-festival-one.png"],
    ["\u5357\u9be4\u9bd3\u5edf\u5e73\u5b89\u9e7d\u796d\uff08\u4e8c\uff09", "assets/ink-wash/nankunshen-salt-festival-two.png"],
    ["\u81fa\u5357\u7e23\u5e02\u5408\u4f75\u4e4b\u5c55\u829d", "assets/ink-wash/tainan-merger.png"],
    ["\u79cb\u671b\u66f8\u61f7", "assets/ink-wash/autumn-view-reflections.png"],
    ["\u807d\u87ec\u6709\u611f", "assets/ink-wash/cicada-reflections.png"],
    ["\u4e59\u9149\u4e2d\u79cb", "assets/ink-wash/mid-autumn-2005.png"],
    ["\u53f0\u5357\u90ed\u7d9c\u5408\u91ab\u9662\u9867\u554f\u5433\u632f\u798f\u4f86\u8a2a\u5bc4\u61f7\u90ed\u7e3d\u88c1\u570b\u9265", "assets/ink-wash/guo-hospital-visitor.png"],
    ["\u6885\u679c", "assets/ink-wash/plum-fruit.png"],
    ["\u6885\u6027", "assets/ink-wash/plum-nature.png"],
    ["\u6885\u8cea", "assets/ink-wash/plum-character.png"],
    ["\u8d8a\u5357\u6e44\u516c\u6cb3\uff08\u4e00\uff09", "assets/ink-wash/mekong-one.png"],
    ["\u8d8a\u5357\u6e44\u516c\u6cb3\uff08\u4e8c\uff09", "assets/ink-wash/mekong-two.png"],
    ["\u9577\u6c5f\u9812", "assets/ink-wash/yangtze-ode.png"],
    ["\u8b80\u9673\u4e4b\u85e9\u5927\u4f5c\u8b1d\u5929\u3001\u79d1\u5b78\u5bb6\u7684\u82e6\u60b6\u611f\u8ce6", "assets/ink-wash/chen-zhifan-reflections.png"],
  ]);
  let activeTitle = "";
  let activeCollection = "\u8015\u820d\u96c6";
  let activeWorkType = "\u5168\u90e8";
  let libraryView = "home";
  let pendingReaderTitle = "";
  let pendingReaderCollection = "";
  let activeReaderModal = null;
  const collectionOrder = [
    "\u8015\u820d\u96c6",
    "\u7389\u5dba\u96c6",
    "\u7389\u7a4e\u96c6",
    "\u6182\u6642\u541f",
  ];

  function styleMasthead() {
    if (document.getElementById("gs-calligraphy-style")) return;
    const candidate = Array.from(document.querySelectorAll("body *")).find((item) => {
      const rect = item.getBoundingClientRect();
      return item.children.length === 0 && item.textContent.trim() === "耕舍詩文集" && rect.top < 100 && rect.left < 280;
    });
    if (!candidate) return;
    candidate.classList.add("gs-calligraphy-brand");
    candidate.style.setProperty("font-family", '"GS HanWang ShinSu", cursive', "important");
    const style = document.createElement("style");
    style.id = "gs-calligraphy-style";
    style.textContent = `
      @font-face {
        font-family: "GS HanWang ShinSu";
        src: url("assets/fonts/HanWangShinSuMedium.ttf") format("truetype");
        font-display: swap;
        font-style: normal;
        font-weight: 400;
      }
      .gs-calligraphy-brand {
        position: relative !important;
        display: inline-block !important;
        color: #2f2922 !important;
        font-family: "GS HanWang ShinSu", "STXingkai", "STKaiti", cursive !important;
        font-size: clamp(29px, 2.3vw, 38px) !important;
        font-weight: 400 !important;
        letter-spacing: .075em !important;
        line-height: 1 !important;
        text-shadow: .7px 1px 0 rgba(97, 74, 46, .18) !important;
        transform: skewX(-2deg) scaleX(1.06);
        transform-origin: left center;
      }
      .gs-calligraphy-hero {
        font-family: "GS HanWang ShinSu", "STXingkai", "STKaiti", cursive !important;
        font-size: clamp(54px, 8.5vw, 132px) !important;
        font-weight: 400 !important;
        letter-spacing: .035em !important;
        line-height: 1 !important;
        color: #3a342d !important;
        background: none !important;
        -webkit-text-fill-color: currentColor !important;
      }
      .gs-calligraphy-hero,
      .gs-calligraphy-hero *,
      .gs-calligraphy-hero-glyph {
        font-family: "GS HanWang ShinSu", "STXingkai", "STKaiti", cursive !important;
        color: inherit !important;
        -webkit-text-fill-color: currentColor !important;
      }
      .gs-calligraphy-hero .gs-hero-vector-slot {
        width: clamp(62px, 13vw, 148px) !important;
        height: clamp(82px, 15vw, 168px) !important;
        flex: 0 1 auto;
      }
      .gs-hero-svg {
        display: block;
        width: 100%;
        height: 100%;
        overflow: visible;
        filter: drop-shadow(.8px 1.2px 0 rgba(92, 70, 44, .14));
      }
      .gs-hero-stroke-reveal {
        fill: none;
        stroke: #3a342d;
        stroke-width: 118;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-dasharray: 1;
        stroke-dashoffset: 1;
        opacity: .94;
        animation: gs-stroke-write var(--stroke-duration) cubic-bezier(.35,.04,.18,1) forwards;
        animation-delay: var(--stroke-delay);
      }
      .gs-hero-fill {
        fill: #3a342d;
        opacity: 0;
        animation:
          gs-vector-fill .58s ease-out var(--fill-delay) forwards,
          gs-fill-breathe var(--settle-duration) ease-in-out var(--settle-delay) infinite alternate;
      }
      .gs-hero-waiting .gs-hero-stroke-reveal,
      .gs-hero-waiting .gs-hero-fill {
        animation-play-state: paused;
      }
      @keyframes gs-stroke-write {
        0% { opacity: 0; stroke-dashoffset: 1; filter: blur(2px); }
        14% { opacity: .9; }
        100% { opacity: .96; stroke-dashoffset: 0; filter: blur(0); }
      }
      @keyframes gs-vector-fill {
        0% { opacity: 0; filter: blur(2px); }
        55% { opacity: .78; }
        100% { opacity: 1; filter: blur(0); }
      }
      @keyframes gs-fill-breathe {
        0%, 16% { fill: #3a342d; }
        43% { fill: #514333; }
        68% { fill: #332f2a; }
        100% { fill: #463a2e; }
      }
      .gs-calligraphy-hero .gs-hero-char {
        position: relative;
        display: inline-block;
        opacity: 0;
        filter: blur(5px);
        clip-path: inset(0 100% 0 0);
        transform: translateY(12px) scale(1.08, .94);
        transform-origin: center bottom;
        animation: gs-hero-ink 1.15s cubic-bezier(.16,.74,.2,1) forwards;
        animation-delay: calc(.38s + var(--char-order) * .3s);
      }
      .gs-calligraphy-hero .gs-hero-char::after {
        content: "";
        position: absolute;
        inset: 12% 5%;
        background: radial-gradient(ellipse at 45% 55%, rgba(65, 53, 40, .18), transparent 66%);
        opacity: 0;
        pointer-events: none;
        animation: gs-ink-breathe .72s ease-out forwards;
        animation-delay: calc(.56s + var(--char-order) * .3s);
      }
      @keyframes gs-hero-ink {
        0% { opacity: 0; filter: blur(5px); clip-path: inset(0 100% 0 0); transform: translateY(12px) scale(1.08, .94); }
        42% { opacity: .68; filter: blur(1.8px); }
        100% { opacity: 1; filter: blur(0); clip-path: inset(0 0 0 0); transform: translateY(0) scale(1); }
      }
      @keyframes gs-ink-breathe {
        0% { opacity: 0; transform: scale(.7); }
        35% { opacity: .7; }
        100% { opacity: 0; transform: scale(1.18); }
      }
      @keyframes gs-mobile-char-write {
        0% {
          opacity: 0;
          clip-path: inset(0 100% 0 0);
          filter: blur(1.5px);
        }
        38% { opacity: .72; }
        100% {
          opacity: 1;
          clip-path: inset(0 0 0 0);
          filter: blur(0);
        }
      }
      @media (max-width: 700px) {
        html,
        body {
          max-width: 100% !important;
          overflow-x: hidden !important;
        }
        header {
          box-sizing: border-box !important;
          height: auto !important;
          min-height: 96px !important;
          padding: 8px 16px 7px !important;
          align-content: center !important;
          align-items: center !important;
          flex-wrap: wrap !important;
          gap: 6px !important;
        }
        header > a {
          box-sizing: border-box !important;
          width: 100% !important;
          min-width: 0 !important;
          justify-content: space-between !important;
          align-items: center !important;
        }
        header > nav {
          box-sizing: border-box !important;
          width: 100% !important;
          min-width: 0 !important;
          gap: 18px !important;
          overflow-x: auto !important;
          overflow-y: hidden !important;
          padding: 2px 0 3px !important;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
        }
        header > nav::-webkit-scrollbar { display: none; }
        header > nav a {
          flex: 0 0 auto !important;
          white-space: nowrap !important;
          font-size: 12px !important;
          letter-spacing: .1em !important;
        }
        header > nav button { display: none !important; }
        .gs-calligraphy-brand {
          white-space: nowrap !important;
          font-size: 27px !important;
          letter-spacing: .075em !important;
        }
        #about {
          padding: 64px 24px 76px !important;
        }
        #about > div {
          grid-template-columns: minmax(0, 1fr) !important;
          gap: 38px !important;
        }
        #about h2 {
          max-width: 100% !important;
          margin: 14px 0 24px !important;
          font-size: clamp(27px, 7.2vw, 30px) !important;
          line-height: 1.45 !important;
          word-break: keep-all !important;
          overflow-wrap: anywhere !important;
        }
        .gs-calligraphy-hero .gs-hero-vector-slot {
          width: 19.5% !important;
          height: clamp(70px, 22vw, 90px) !important;
        }
        .gs-hero-svg {
          filter: none !important;
          overflow: hidden !important;
        }
        .gs-hero-stroke-reveal {
          display: none !important;
        }
        .gs-hero-fill {
          will-change: clip-path, opacity;
          animation:
            gs-mobile-char-write .7s cubic-bezier(.22,.72,.2,1)
              calc(.12s + var(--char-order) * .48s) both,
            gs-fill-breathe var(--settle-duration) ease-in-out
              calc(3.2s + var(--char-order) * .18s) infinite alternate !important;
        }
      }
      @media (prefers-reduced-motion: reduce) {
        .gs-calligraphy-hero .gs-hero-char,
        .gs-calligraphy-hero .gs-hero-char::after,
        .gs-hero-stroke-reveal,
        .gs-hero-fill {
          animation-duration: .01ms !important;
          animation-delay: 0s !important;
        }
      }
    `;
    document.head.append(style);
  }

  function styleHeroTitle() {
    if (document.documentElement.dataset.gsHeroReady === "1" && !document.querySelector("#hw-hero svg:not(.gs-hero-svg)")) return;
    const expectedCharacters = Array.from("耕舍詩文集");
    const hanziHero = document.querySelector("#hw-hero");
    const hanziSlots = Array.from(document.querySelectorAll("#hw-hero [data-hz]"));
    if (hanziHero && hanziSlots.length === expectedCharacters.length) {
      hanziHero.classList.add("gs-calligraphy-hero", "gs-hero-waiting");
      hanziHero.setAttribute("aria-label", "耕舍詩文集");
      const totalStrokeCount = hanziSlots.reduce((sum, slot, index) => {
        const character = slot.getAttribute("data-hz") || expectedCharacters[index];
        return sum + (window.GS_HERO_CALLIGRAPHY?.[character]?.medians?.length || 0);
      }, 0);
      const settledAt = 1.43 + totalStrokeCount * .145;
      let strokeCursor = 0;
      hanziSlots.forEach((slot, index) => {
        const character = slot.getAttribute("data-hz") || expectedCharacters[index];
        const vector = window.GS_HERO_CALLIGRAPHY?.[character];
        if (vector) {
          const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
          const clip = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
          const clipGlyph = document.createElementNS("http://www.w3.org/2000/svg", "path");
          const revealGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
          const fill = document.createElementNS("http://www.w3.org/2000/svg", "path");
          const clipId = `gs-hero-clip-${index}`;
          svg.classList.add("gs-hero-svg");
          svg.setAttribute("viewBox", vector.viewBox);
          svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
          svg.setAttribute("aria-hidden", "true");
          svg.style.setProperty("--char-order", index);
          svg.style.setProperty("--settle-delay", `${(settledAt + index * .24).toFixed(2)}s`);
          svg.style.setProperty("--settle-duration", `${(7.8 + index * 1.03).toFixed(2)}s`);
          clip.setAttribute("id", clipId);
          clipGlyph.setAttribute("d", vector.path);
          clip.append(clipGlyph);
          defs.append(clip);
          revealGroup.setAttribute("clip-path", `url(#${clipId})`);
          vector.medians.forEach((median) => {
            const stroke = document.createElementNS("http://www.w3.org/2000/svg", "path");
            const medianPath = median.map(([x, y], pointIndex) => {
              return `${pointIndex === 0 ? "M" : "L"}${x} ${900 - y}`;
            }).join(" ");
            const duration = Math.min(.38, Math.max(.2, median.length * .03));
            stroke.classList.add("gs-hero-stroke-reveal");
            stroke.setAttribute("d", medianPath);
            stroke.setAttribute("pathLength", "1");
            stroke.style.setProperty("--stroke-delay", `${(.15 + strokeCursor * .145).toFixed(2)}s`);
            stroke.style.setProperty("--stroke-duration", `${duration.toFixed(2)}s`);
            revealGroup.append(stroke);
            strokeCursor += 1;
          });
          fill.classList.add("gs-hero-fill");
          fill.setAttribute("d", vector.path);
          fill.style.setProperty("--fill-delay", `${(.5 + strokeCursor * .145).toFixed(2)}s`);
          svg.append(defs, revealGroup, fill);
          slot.replaceChildren(svg);
        } else {
          const span = document.createElement("span");
          span.className = "gs-hero-char gs-calligraphy-hero-glyph";
          span.style.setProperty("--char-order", index);
          span.setAttribute("aria-hidden", "true");
          span.textContent = character;
          slot.replaceChildren(span);
        }
        slot.classList.add("gs-hero-vector-slot");
        slot.style.setProperty("display", "inline-flex", "important");
        slot.style.setProperty("align-items", "center", "important");
        slot.style.setProperty("justify-content", "center", "important");
        slot.style.setProperty("overflow", "visible", "important");
        slot.style.setProperty("font-family", '"GS HanWang ShinSu", cursive', "important");
      });
      window.setTimeout(() => {
        hanziHero.classList.remove("gs-hero-waiting");
      }, 12000);
      document.documentElement.dataset.gsHeroReady = "1";
      return;
    }
    const glyphCandidates = Array.from(document.querySelectorAll("body *")).filter((item) => {
      const text = item.textContent.replace(/\s+/g, "");
      const rect = item.getBoundingClientRect();
      return expectedCharacters.includes(text) &&
        rect.top > 90 &&
        rect.width > 24 &&
        rect.height > 48;
    });
    const foundCharacters = new Set(glyphCandidates.map((item) => item.textContent.replace(/\s+/g, "")));
    if (expectedCharacters.every((character) => foundCharacters.has(character))) {
      glyphCandidates.forEach((glyph) => {
        const character = glyph.textContent.replace(/\s+/g, "");
        const index = expectedCharacters.indexOf(character);
        const layers = [glyph, ...glyph.querySelectorAll("*")];
        layers.forEach((layer) => {
          layer.classList.add("gs-calligraphy-hero-glyph");
          layer.style.setProperty("font-family", '"GS HanWang ShinSu", cursive', "important");
          layer.style.setProperty("font-weight", "400", "important");
          layer.style.setProperty("color", "#3a342d", "important");
          layer.style.setProperty("-webkit-text-fill-color", "#3a342d", "important");
          layer.style.setProperty("background-image", "none", "important");
        });
        if (glyph.children.length === 0) {
          glyph.classList.add("gs-hero-char");
          glyph.style.setProperty("--char-order", index);
        }
      });
      document.documentElement.dataset.gsHeroReady = "1";
      return;
    }
    const candidates = Array.from(document.querySelectorAll("body *")).filter((item) => {
      const rect = item.getBoundingClientRect();
      return item.textContent.replace(/\s+/g, "") === "耕舍詩文集" && rect.top > 90 && rect.width > 180 && rect.height > 48;
    });
    const title = candidates.sort((left, right) => {
      return right.getBoundingClientRect().height - left.getBoundingClientRect().height;
    })[0];
    if (!title) return;
    title.classList.add("gs-calligraphy-hero");
    title.setAttribute("aria-label", "耕舍詩文集");
    title.textContent = "";
    Array.from("耕舍詩文集").forEach((character, index) => {
      const span = document.createElement("span");
      span.className = "gs-hero-char";
      span.style.setProperty("--char-order", index);
      span.setAttribute("aria-hidden", "true");
      span.textContent = character;
      title.append(span);
    });
    document.documentElement.dataset.gsHeroReady = "1";
  }

  function mountModalIllustration() {
    const title = Array.from(document.querySelectorAll("h1,h2,h3")).filter((item) => !item.closest("#poems article") && item.getClientRects().length > 0 && illustrations.has(item.textContent.trim())).at(-1);
    if (!title) return;
    const imagePath = illustrations.get(title.textContent.trim());
    if (title.parentElement?.querySelector(".gs-modal-ink")) return;
    const image = document.createElement("img");
    image.className = "gs-modal-ink";
    image.src = imagePath;
    image.alt = "";
    image.style.cssText = "display:block;width:100%;max-height:340px;aspect-ratio:3/2;object-fit:cover;margin:0 0 22px;border:1px solid rgba(52,48,42,.12);box-shadow:0 8px 18px rgba(52,48,42,.10);";
    title.before(image);
  }

  function ensureLibraryStyle() {
    if (document.getElementById("gs-library-style")) return;
    const style = document.createElement("style");
    style.id = "gs-library-style";
    style.textContent = `
      .gs-library-browser {
        grid-column: 1 / -1;
        margin: 30px 0 34px;
      }
      .gs-library-kicker {
        margin: 0 0 6px;
        color: #806a4e;
        font-size: 12px;
        letter-spacing: .22em;
      }
      .gs-library-heading {
        margin: 0 0 24px;
        color: #342f29;
        font-family: serif;
        font-size: clamp(19px, 2.2vw, 25px);
        font-weight: 400;
        letter-spacing: .08em;
      }
      .gs-collection-entrances {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 14px;
      }
      .gs-collection-entrance {
        appearance: none;
        position: relative;
        min-height: 126px;
        padding: 24px 56px 22px 24px;
        overflow: hidden;
        border: 1px solid rgba(69, 80, 65, .17);
        border-radius: 2px;
        background: rgba(247, 243, 231, .52);
        color: #39352f;
        cursor: pointer;
        font: inherit;
        text-align: left;
        transition: border-color .25s ease, background .25s ease, transform .25s ease;
      }
      .gs-collection-entrance::after {
        content: "\u2192";
        position: absolute;
        right: 22px;
        top: 50%;
        color: #829083;
        font-size: 22px;
        transform: translateY(-50%);
        transition: transform .25s ease;
      }
      .gs-collection-entrance:hover {
        border-color: rgba(80, 100, 80, .45);
        background: rgba(249, 246, 237, .88);
        transform: translateY(-2px);
      }
      .gs-collection-entrance:hover::after { transform: translate(4px, -50%); }
      .gs-collection-name {
        display: block;
        margin-bottom: 12px;
        font-family: serif;
        font-size: clamp(22px, 2.6vw, 29px);
        letter-spacing: .1em;
      }
      .gs-collection-meta,
      .gs-collection-note {
        display: block;
        color: #81786b;
        font-size: 12px;
        letter-spacing: .09em;
        line-height: 1.7;
      }
      .gs-collection-note { margin-top: 3px; color: #9a9184; }
      .gs-collection-preview {
        padding: 27px 0 31px;
        border-top: 1px solid rgba(69, 80, 65, .16);
      }
      .gs-collection-preview:last-child {
        border-bottom: 1px solid rgba(69, 80, 65, .16);
      }
      .gs-collection-preview-head {
        display: flex;
        align-items: end;
        justify-content: space-between;
        gap: 20px;
        margin-bottom: 17px;
      }
      .gs-collection-preview-title {
        margin: 0;
        color: #39352f;
        font-family: serif;
        font-size: clamp(23px, 3vw, 31px);
        font-weight: 400;
        letter-spacing: .1em;
      }
      .gs-collection-preview-count {
        margin-left: 9px;
        color: #968c7e;
        font-family: sans-serif;
        font-size: 12px;
        letter-spacing: .08em;
      }
      .gs-view-all {
        appearance: none;
        flex: 0 0 auto;
        padding: 8px 0;
        border: 0;
        border-bottom: 1px solid rgba(77, 99, 79, .4);
        background: transparent;
        color: #667768;
        cursor: pointer;
        font: inherit;
        font-size: 12px;
        letter-spacing: .12em;
      }
      .gs-view-all:hover { color: #354637; border-color: #354637; }
      .gs-collection-preview-list {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 16px;
      }
      .gs-collection-preview-list article {
        min-width: 0;
        cursor: pointer;
      }
      .gs-collection-preview-list article button { display: none !important; }
      .gs-collection-toolbar {
        padding: 4px 0 22px;
        border-bottom: 1px solid rgba(69, 80, 65, .16);
      }
      .gs-collection-back,
      .gs-reader-back {
        appearance: none;
        padding: 0;
        border: 0;
        background: transparent;
        color: #748176;
        cursor: pointer;
        font: inherit;
        font-size: 13px;
        letter-spacing: .12em;
      }
      .gs-collection-back:hover,
      .gs-reader-back:hover { color: #39483b; }
      .gs-collection-title {
        margin: 18px 0 3px;
        color: #342f29;
        font-family: serif;
        font-size: clamp(27px, 4vw, 40px);
        font-weight: 400;
        letter-spacing: .1em;
      }
      .gs-collection-summary {
        margin: 0 0 17px;
        color: #8a8275;
        font-size: 12px;
        letter-spacing: .12em;
      }
      .gs-library-filter-row {
        display: flex;
        align-items: center;
        gap: 9px;
        margin-top: 12px;
      }
      .gs-library-filter-label {
        flex: 0 0 52px;
        color: #777166;
        font-size: 12px;
        letter-spacing: .16em;
      }
      .gs-library-filter-options {
        display: flex;
        gap: 8px;
        min-width: 0;
        overflow-x: auto;
        padding: 2px 1px 4px;
        scrollbar-width: none;
        -webkit-overflow-scrolling: touch;
      }
      .gs-library-filter-options::-webkit-scrollbar { display: none; }
      .gs-library-filter {
        appearance: none;
        flex: 0 0 auto;
        min-height: 35px;
        padding: 7px 14px;
        border: 1px solid rgba(69, 80, 65, .22);
        border-radius: 999px;
        background: transparent;
        color: #5f5b53;
        cursor: pointer;
        font: inherit;
        font-size: 13px;
        letter-spacing: .08em;
        transition: background .2s ease, color .2s ease, border-color .2s ease;
      }
      .gs-library-filter:hover,
      .gs-library-filter[aria-pressed="true"] {
        border-color: #6c806d;
        background: #6c806d;
        color: #fffdf6;
      }
      .gs-library-result {
        margin: 13px 0 0;
        color: #8a8275;
        font-size: 12px;
        letter-spacing: .12em;
      }
      .gs-library-prose-grid {
        grid-column: 1 / -1;
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 22px;
        margin-top: 22px;
      }
      .gs-library-empty {
        grid-column: 1 / -1;
        display: none;
        margin: 28px 0 0;
        padding: 40px 24px;
        border: 1px dashed rgba(69, 80, 65, .24);
        color: #81796d;
        text-align: center;
        letter-spacing: .12em;
      }
      .gs-inline-reader-shell {
        grid-column: 1 / -1;
        width: 100%;
        margin-top: 16px;
      }
      .gs-reader-nav {
        width: min(820px, 100%);
        margin: 0 auto 22px;
        padding-bottom: 16px;
        border-bottom: 1px solid rgba(69, 80, 65, .18);
      }
      .gs-reader-breadcrumb {
        margin-left: 13px;
        color: #9a9184;
        font-size: 12px;
        letter-spacing: .1em;
      }
      #poems.gs-reader-mode .gs-library-browser,
      #poems.gs-reader-mode article[data-gs-work-type],
      #poems.gs-reader-mode .gs-library-prose-grid,
      #poems.gs-reader-mode .gs-library-empty {
        display: none !important;
      }
      .gs-original-reader-modal {
        display: none !important;
      }
      html.gs-reader-opening div[style*="position: fixed"][style*="z-index: 80"] {
        visibility: hidden !important;
        opacity: 0 !important;
        pointer-events: none !important;
      }
      .gs-inline-reader-root {
        position: relative !important;
        inset: auto !important;
        z-index: 1 !important;
        display: block !important;
        width: 100% !important;
        padding: 0 !important;
        overflow: visible !important;
        background: transparent !important;
        -webkit-backdrop-filter: none !important;
        backdrop-filter: none !important;
        animation: none !important;
        transition: opacity .26s ease, transform .26s ease, filter .26s ease;
      }
      .gs-inline-reader-shell.is-switching .gs-inline-reader-root {
        opacity: .32;
        filter: blur(1px);
        transform: translateY(-5px);
        pointer-events: none;
      }
      .gs-inline-reader-shell.is-switching .gs-reader-nav {
        opacity: .55;
      }
      .gs-inline-reader-panel {
        width: min(820px, 100%) !important;
        max-width: 820px !important;
        margin: 0 auto !important;
        padding: clamp(28px, 4vw, 48px) clamp(4px, 5vw, 54px) 64px !important;
        border: 0 !important;
        border-radius: 0 !important;
        background: transparent !important;
        background-color: transparent !important;
        background-image: none !important;
        box-shadow: none !important;
        animation: gs-reader-enter .45s ease both !important;
      }
      .gs-inline-reader-panel > button[title="\u95dc\u9589"] { display: none !important; }
      .gs-next-work {
        appearance: none;
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        gap: 18px;
        width: 100%;
        margin-top: 46px;
        padding: 24px 0 10px;
        border: 0;
        border-top: 1px solid rgba(69, 80, 65, .2);
        background: transparent;
        color: #39352f;
        cursor: pointer;
        font: inherit;
        text-align: left;
      }
      .gs-next-label {
        display: block;
        margin-bottom: 8px;
        color: #8b826f;
        font-size: 11px;
        letter-spacing: .18em;
      }
      .gs-next-title {
        display: block;
        font-family: serif;
        font-size: clamp(20px, 3vw, 27px);
        letter-spacing: .08em;
      }
      .gs-next-arrow {
        color: #758477;
        font-size: 26px;
        transition: transform .25s ease;
      }
      .gs-next-work:hover .gs-next-arrow { transform: translateX(5px); }
      @keyframes gs-reader-enter {
        from { opacity: 0; transform: translateY(12px); }
        to { opacity: 1; transform: translateY(0); }
      }
      #essays.gs-essays-integrated { display: none !important; }
      .gs-share-toast {
        position: fixed;
        z-index: 160;
        right: 22px;
        bottom: 24px;
        max-width: min(330px, calc(100vw - 44px));
        padding: 12px 17px;
        border: 1px solid rgba(255,255,255,.35);
        border-radius: 4px;
        background: rgba(53, 57, 49, .94);
        color: #fffdf6;
        box-shadow: 0 10px 28px rgba(25,24,20,.2);
        font-size: 13px;
        letter-spacing: .06em;
        opacity: 0;
        transform: translateY(8px);
        transition: opacity .2s ease, transform .2s ease;
      }
      .gs-share-toast.is-visible { opacity: 1; transform: translateY(0); }
      .gs-award-modal-image {
        display: block !important;
        flex: 0 1 auto !important;
        width: auto !important;
        height: auto !important;
        max-width: min(92vw, 1000px) !important;
        max-height: calc(100dvh - 180px) !important;
        margin: auto auto 0 !important;
        object-fit: contain !important;
        opacity: 1 !important;
        visibility: visible !important;
      }
      @media (max-width: 700px) {
        .gs-library-browser {
          margin: 26px 0 26px;
        }
        .gs-collection-entrances { grid-template-columns: minmax(0, 1fr); }
        .gs-collection-entrance { min-height: 112px; padding: 20px 50px 18px 20px; }
        .gs-collection-preview { padding: 24px 0 27px; }
        .gs-collection-preview-list {
          display: flex;
          gap: 13px;
          overflow-x: auto;
          padding: 0 1px 10px;
          scrollbar-width: none;
          scroll-snap-type: x proximity;
          -webkit-overflow-scrolling: touch;
        }
        .gs-collection-preview-list::-webkit-scrollbar { display: none; }
        .gs-collection-preview-list article {
          flex: 0 0 min(82vw, 310px);
          scroll-snap-align: start;
        }
        .gs-library-filter-row {
          display: block;
          margin-top: 15px;
        }
        .gs-library-filter-label {
          display: block;
          margin-bottom: 7px;
        }
        .gs-library-prose-grid {
          grid-template-columns: minmax(0, 1fr);
          gap: 16px;
        }
        .gs-inline-reader-panel {
          padding: 24px 2px 48px !important;
        }
        .gs-reader-nav { margin-bottom: 14px; }
        .gs-award-modal-image {
          max-width: calc(100vw - 30px) !important;
          max-height: calc(100dvh - 190px) !important;
        }
      }
    `;
    document.head.append(style);
  }

  function getCardCollection(card) {
    return card?.querySelector("span")?.textContent.trim() || "";
  }

  function buildFilterRow(label, values, kind) {
    const row = document.createElement("div");
    row.className = "gs-library-filter-row";
    const heading = document.createElement("span");
    heading.className = "gs-library-filter-label";
    heading.textContent = label;
    const options = document.createElement("div");
    options.className = "gs-library-filter-options";
    values.forEach((value) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "gs-library-filter";
      button.dataset.gsFilterKind = kind;
      button.dataset.gsFilterValue = value;
      button.textContent = value;
      button.addEventListener("click", () => {
        if (kind === "collection") activeCollection = value;
        else activeWorkType = value;
        applyLibraryFilters();
      });
      options.append(button);
    });
    row.append(heading, options);
    return row;
  }

  function getReaderWorkCards() {
    const poemCards = Array.from(document.querySelectorAll("#poems article[data-gs-work-type]"))
      .filter((card) => !card.closest(".gs-collection-home") && !card.closest(".gs-library-prose-grid"));
    const proseCards = Array.from(document.querySelectorAll(".gs-library-prose-grid article"));
    return [...poemCards, ...proseCards];
  }

  function refreshCollectionPreviews(browser) {
    const previews = browser.querySelector(".gs-collection-previews");
    if (!previews) return;
    const works = getReaderWorkCards();
    const signature = works.map((card) => card.querySelector("h3")?.textContent.trim()).join("|");
    if (!signature || previews.dataset.gsSourceSignature === signature) return;
    previews.replaceChildren();
    collectionOrder.forEach((collection) => {
      const collectionWorks = works.filter((card) => card.dataset.gsCollection === collection);
      const section = document.createElement("section");
      section.className = "gs-collection-preview";
      section.dataset.gsCollection = collection;
      const head = document.createElement("div");
      head.className = "gs-collection-preview-head";
      const title = document.createElement("h4");
      title.className = "gs-collection-preview-title";
      title.innerHTML = `${collection}<span class="gs-collection-preview-count">${collectionWorks.length} \u7bc7</span>`;
      const viewAll = document.createElement("button");
      viewAll.type = "button";
      viewAll.className = "gs-view-all";
      viewAll.dataset.gsCollection = collection;
      viewAll.textContent = "\u67e5\u770b\u5168\u90e8 \u2192";
      head.append(title, viewAll);
      const list = document.createElement("div");
      list.className = "gs-collection-preview-list";
      collectionWorks.slice(0, 3).forEach((sourceCard) => {
        const clone = sourceCard.cloneNode(true);
        clone.dataset.gsHomePreview = "1";
        clone.dataset.gsCollection = collection;
        clone.dataset.gsWorkType = sourceCard.dataset.gsWorkType;
        clone.hidden = false;
        clone.style.removeProperty("display");
        clone.querySelectorAll("button").forEach((button) => button.remove());
        clone.addEventListener("click", (clickEvent) => {
          clickEvent.preventDefault();
          pendingReaderTitle = clone.querySelector("h3")?.textContent.trim() || "";
          pendingReaderCollection = collection;
          activeCollection = collection;
          sourceCard.click();
        });
        list.append(clone);
      });
      section.append(head, list);
      previews.append(section);
    });
    previews.dataset.gsSourceSignature = signature;
  }

  function applyLibraryFilters() {
    const browser = document.querySelector(".gs-library-browser");
    if (!browser) return;
    const onCollectionPage = libraryView === "collection";
    const sectionHint = Array.from(document.querySelectorAll("#poems p"))
      .find((item) => item.textContent.includes("\u8f15\u89f8\u8a69\u5361") || item.dataset.gsLibraryHint === "1");
    if (sectionHint) {
      sectionHint.dataset.gsLibraryHint = "1";
      sectionHint.textContent = libraryView === "home"
        ? "\u9078\u64c7\u8a69\u96c6\uff0c\u5c55\u958b\u4f5c\u54c1\u76ee\u9304"
        : libraryView === "collection"
          ? "\u9078\u64c7\u4f5c\u54c1\uff0c\u9032\u5165\u5b8c\u6574\u95b1\u8b80"
          : "\u6c89\u6f5b\u65bc\u4e00\u9996\u8a69\u3001\u4e00\u6bb5\u6642\u5149";
    }
    browser.dataset.gsView = libraryView;
    const home = browser.querySelector(".gs-collection-home");
    const toolbar = browser.querySelector(".gs-collection-toolbar");
    if (home) home.hidden = onCollectionPage;
    if (toolbar) toolbar.hidden = !onCollectionPage;
    let visibleCount = 0;
    getReaderWorkCards().forEach((card) => {
      const matchesCollection = card.dataset.gsCollection === activeCollection;
      const matchesType = activeWorkType === "\u5168\u90e8" || card.dataset.gsWorkType === activeWorkType;
      const visible = onCollectionPage && matchesCollection && matchesType;
      card.hidden = !visible;
      card.style.setProperty("display", visible ? "" : "none", "important");
      if (visible) visibleCount += 1;
    });
    browser.querySelectorAll("[data-gs-filter-kind]").forEach((button) => {
      const selected = button.dataset.gsFilterKind === "collection"
        ? button.dataset.gsFilterValue === activeCollection
        : button.dataset.gsFilterValue === activeWorkType;
      button.setAttribute("aria-pressed", selected ? "true" : "false");
    });
    const result = browser.querySelector(".gs-library-result");
    if (result) result.textContent = `${activeCollection} \u00b7 ${activeWorkType} \u00b7 ${visibleCount} \u7bc7`;
    const collectionTitle = browser.querySelector(".gs-collection-title");
    if (collectionTitle) collectionTitle.textContent = activeCollection;
    const collectionSummary = browser.querySelector(".gs-collection-summary");
    if (collectionSummary) {
      const total = getReaderWorkCards().filter((card) => card.dataset.gsCollection === activeCollection).length;
      collectionSummary.textContent = `\u6536\u9304 ${total} \u7bc7\u4f5c\u54c1`;
    }
    const empty = document.querySelector(".gs-library-empty");
    if (empty) empty.style.display = onCollectionPage && !visibleCount ? "block" : "none";
    const proseGrid = document.querySelector(".gs-library-prose-grid");
    if (proseGrid) {
      const hasVisibleProse = Array.from(proseGrid.querySelectorAll("article"))
        .some((card) => getComputedStyle(card).display !== "none");
      proseGrid.style.display = hasVisibleProse ? "grid" : "none";
    }
  }

  function mountLibraryBrowser() {
    ensureLibraryStyle();
    const poemSection = document.querySelector("#poems");
    const poemCards = Array.from(poemSection?.querySelectorAll("article") || [])
      .filter((card) => !card.closest(".gs-library-prose-grid") && !card.closest(".gs-collection-home"));
    const poemGrid = poemCards[0]?.parentElement;
    if (!poemSection || !poemGrid || !poemCards.length) return;

    poemCards.forEach((card) => {
      card.dataset.gsWorkType = "\u8a69\u8a5e";
      card.dataset.gsCollection = getCardCollection(card);
    });

    let browser = poemSection.querySelector(".gs-library-browser");
    if (!browser) {
      browser = document.createElement("div");
      browser.className = "gs-library-browser";
      const home = document.createElement("div");
      home.className = "gs-collection-home";
      const kicker = document.createElement("p");
      kicker.className = "gs-library-kicker";
      kicker.textContent = "\u8a69\u6587\u5178\u85cf";
      const heading = document.createElement("h3");
      heading.className = "gs-library-heading";
      heading.textContent = "\u9078\u4e00\u90e8\u8a69\u96c6\uff0c\u6162\u6162\u8b80";
      const previews = document.createElement("div");
      previews.className = "gs-collection-previews";
      home.append(kicker, heading, previews);
      const toolbar = document.createElement("div");
      toolbar.className = "gs-collection-toolbar";
      const back = document.createElement("button");
      back.type = "button";
      back.className = "gs-collection-back";
      back.textContent = "\u2190 \u8fd4\u56de\u8a69\u96c6\u5206\u985e";
      const collectionTitle = document.createElement("h3");
      collectionTitle.className = "gs-collection-title";
      const collectionSummary = document.createElement("p");
      collectionSummary.className = "gs-collection-summary";
      toolbar.append(
        back,
        collectionTitle,
        collectionSummary,
        buildFilterRow("\u6587\u9ad4", ["\u5168\u90e8", "\u8a69\u8a5e", "\u6563\u6587"], "type"),
      );
      const result = document.createElement("p");
      result.className = "gs-library-result";
      toolbar.append(result);
      browser.append(home, toolbar);
      poemGrid.before(browser);
    }

    const essaySection = document.querySelector("#essays");
    const sourceEssays = Array.from(essaySection?.querySelectorAll("article") || []);
    if (essaySection) essaySection.classList.add("gs-essays-integrated");
    let proseGrid = poemSection.querySelector(".gs-library-prose-grid");
    if (!proseGrid) {
      proseGrid = document.createElement("div");
      proseGrid.className = "gs-library-prose-grid";
      poemGrid.after(proseGrid);
    }
    const sourceSignature = sourceEssays.map((card) => card.querySelector("h3")?.textContent.trim()).join("|");
    if (proseGrid.dataset.gsSourceSignature !== sourceSignature) {
      proseGrid.replaceChildren();
      sourceEssays.forEach((sourceCard) => {
        const clone = sourceCard.cloneNode(true);
        clone.dataset.gsWorkType = "\u6563\u6587";
        clone.dataset.gsCollection = getCardCollection(sourceCard);
        clone.addEventListener("click", (event) => {
          event.preventDefault();
          pendingReaderTitle = clone.querySelector("h3")?.textContent.trim() || "";
          pendingReaderCollection = clone.dataset.gsCollection || activeCollection;
          sourceCard.click();
        });
        proseGrid.append(clone);
      });
      proseGrid.dataset.gsSourceSignature = sourceSignature;
    }
    let empty = poemSection.querySelector(".gs-library-empty");
    if (!empty) {
      empty = document.createElement("p");
      empty.className = "gs-library-empty";
      empty.textContent = "\u9019\u500b\u5206\u985e\u76ee\u524d\u9084\u6c92\u6709\u6536\u9304\u4f5c\u54c1\u3002";
      proseGrid.after(empty);
    }
    refreshCollectionPreviews(browser);
    applyLibraryFilters();
  }

  function beginInlineReader(card, clickTarget) {
    const title = card?.querySelector("h3")?.textContent.trim();
    if (!title || clickTarget?.closest?.("button")) return;
    pendingReaderTitle = title;
    pendingReaderCollection = card.dataset.gsCollection || getCardCollection(card) || activeCollection;
    activeCollection = pendingReaderCollection;
    document.documentElement.classList.add("gs-reader-opening");
    window.clearTimeout(beginInlineReader.safetyTimer);
    beginInlineReader.safetyTimer = window.setTimeout(() => {
      document.documentElement.classList.remove("gs-reader-opening");
    }, 2600);
  }

  function ensureNextWorkGuide(shell) {
    const panel = shell?.querySelector(".gs-inline-reader-panel");
    const currentTitle = shell?.dataset.gsReaderTitle;
    const collection = shell?.dataset.gsReaderCollection;
    if (!panel || !currentTitle || !collection || panel.querySelector(".gs-next-work")) return;
    let works = getReaderWorkCards().filter((card) => {
      const typeMatches = activeWorkType === "\u5168\u90e8" || card.dataset.gsWorkType === activeWorkType;
      return card.dataset.gsCollection === collection && typeMatches;
    });
    if (works.length < 2) {
      works = getReaderWorkCards().filter((card) => card.dataset.gsCollection === collection);
    }
    if (works.length < 2) return;
    const currentIndex = works.findIndex((card) => card.querySelector("h3")?.textContent.trim() === currentTitle);
    const nextCard = works[(currentIndex + 1 + works.length) % works.length];
    const nextTitle = nextCard?.querySelector("h3")?.textContent.trim();
    if (!nextTitle || nextTitle === currentTitle) return;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "gs-next-work";
    button.dataset.gsNextTitle = nextTitle;
    button.dataset.gsCollection = collection;
    const copy = document.createElement("span");
    const label = document.createElement("span");
    label.className = "gs-next-label";
    label.textContent = "\u4e0b\u4e00\u7bc7";
    const title = document.createElement("span");
    title.className = "gs-next-title";
    title.textContent = nextTitle;
    const arrow = document.createElement("span");
    arrow.className = "gs-next-arrow";
    arrow.setAttribute("aria-hidden", "true");
    arrow.textContent = "\u2192";
    copy.append(label, title);
    button.append(copy, arrow);
    panel.append(button);
  }

  function openNextWork(button) {
    const nextTitle = button.dataset.gsNextTitle;
    const collection = button.dataset.gsCollection;
    const nextCard = getReaderWorkCards()
      .find((card) => card.dataset.gsCollection === collection && card.querySelector("h3")?.textContent.trim() === nextTitle);
    if (!nextCard) return;
    const section = document.querySelector("#poems");
    const shell = section?.querySelector(".gs-inline-reader-shell");
    const originalClose = activeReaderModal?.querySelector('button[title="\u95dc\u9589"]');
    pendingReaderTitle = nextTitle;
    pendingReaderCollection = collection;
    activeCollection = collection;
    document.documentElement.classList.add("gs-reader-opening");
    window.clearTimeout(beginInlineReader.safetyTimer);
    beginInlineReader.safetyTimer = window.setTimeout(() => {
      document.documentElement.classList.remove("gs-reader-opening");
    }, 2600);
    shell?.classList.add("is-switching");
    button.disabled = true;
    if (originalClose) originalClose.click();
    activeReaderModal = null;
    window.setTimeout(() => nextCard.click(), 70);
  }

  function closeInlineReader() {
    pendingReaderTitle = "";
    const section = document.querySelector("#poems");
    const shell = section?.querySelector(".gs-inline-reader-shell");
    const originalClose = activeReaderModal?.querySelector('button[title="\u95dc\u9589"]');
    if (originalClose) originalClose.click();
    activeReaderModal = null;
    document.documentElement.classList.remove("gs-reader-opening");
    window.setTimeout(() => shell?.remove(), 30);
    section?.classList.remove("gs-reader-mode");
    libraryView = "collection";
    applyLibraryFilters();
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function mountInlineReader() {
    const poemSection = document.querySelector("#poems");
    if (!poemSection) return;
    const existingShell = poemSection.querySelector(".gs-inline-reader-shell");
    const isSwitching = existingShell?.classList.contains("is-switching");
    if (existingShell?.querySelector(".gs-inline-reader-root") && !isSwitching) {
      ensureNextWorkGuide(existingShell);
      const originalLike = Array.from(activeReaderModal?.querySelectorAll("button") || [])
        .find((button) => !button.title && !button.textContent.includes("\u5206\u4eab"));
      const inlineLike = Array.from(existingShell.querySelectorAll(".gs-inline-reader-panel button"))
        .find((button) => !button.classList.contains("gs-next-work") && !button.textContent.includes("\u5206\u4eab"));
      if (originalLike && inlineLike && originalLike.textContent !== inlineLike.textContent) {
        inlineLike.innerHTML = originalLike.innerHTML;
      }
      return;
    }
    if (!pendingReaderTitle) return;
    const overlays = Array.from(document.querySelectorAll("body div")).filter((item) => {
      const style = getComputedStyle(item);
      if (style.position !== "fixed" || item.getClientRects().length === 0) return false;
      const heading = Array.from(item.querySelectorAll("h1,h2,h3"))
        .find((candidate) => candidate.textContent.trim() === pendingReaderTitle);
      return Boolean(heading);
    });
    const overlay = overlays.sort((left, right) => {
      return Number(getComputedStyle(right).zIndex || 0) - Number(getComputedStyle(left).zIndex || 0);
    })[0];
    if (!overlay) return;
    const panel = Array.from(overlay.children).find((child) => child.querySelector?.("h2,h3")) || overlay.firstElementChild;
    if (!panel) return;
    const shell = existingShell || document.createElement("div");
    if (!existingShell) shell.className = "gs-inline-reader-shell";
    shell.replaceChildren();
    shell.dataset.gsReaderTitle = pendingReaderTitle;
    shell.dataset.gsReaderCollection = pendingReaderCollection;
    const nav = document.createElement("div");
    nav.className = "gs-reader-nav";
    const back = document.createElement("button");
    back.type = "button";
    back.className = "gs-reader-back";
    back.textContent = `\u2190 \u8fd4\u56de${pendingReaderCollection}`;
    const breadcrumb = document.createElement("span");
    breadcrumb.className = "gs-reader-breadcrumb";
    breadcrumb.textContent = `\u8a69\u6587 \u00b7 ${pendingReaderTitle}`;
    nav.append(back, breadcrumb);
    shell.append(nav);
    const libraryBrowser = poemSection.querySelector(".gs-library-browser");
    const host = libraryBrowser?.parentElement || poemSection;
    if (!shell.isConnected) host.append(shell);
    const readerRoot = document.createElement("div");
    readerRoot.className = "gs-inline-reader-root";
    const panelClone = panel.cloneNode(true);
    panelClone.classList.add("gs-inline-reader-panel");
    panelClone.querySelector('button[title="\u95dc\u9589"]')?.remove();
    const originalActionButtons = Array.from(panel.querySelectorAll("button"))
      .filter((button) => !button.title);
    Array.from(panelClone.querySelectorAll("button")).forEach((cloneButton) => {
      if (cloneButton.textContent.includes("\u5206\u4eab")) return;
      const originalButton = originalActionButtons.find((button) => {
        const originalLabel = button.textContent.split("\u00b7")[0].trim();
        const cloneLabel = cloneButton.textContent.split("\u00b7")[0].trim();
        return originalLabel === cloneLabel;
      }) || originalActionButtons[0];
      cloneButton.addEventListener("click", (clickEvent) => {
        clickEvent.preventDefault();
        clickEvent.stopPropagation();
        originalButton?.click();
      });
    });
    readerRoot.append(panelClone);
    shell.append(readerRoot);
    activeReaderModal = overlay;
    overlay.classList.add("gs-original-reader-modal");
    poemSection.classList.add("gs-reader-mode");
    libraryView = "reader";
    activeTitle = illustrations.has(pendingReaderTitle) ? pendingReaderTitle : activeTitle;
    pendingReaderTitle = "";
    mountModalIllustration();
    ensureNextWorkGuide(shell);
    window.clearTimeout(beginInlineReader.safetyTimer);
    document.documentElement.classList.remove("gs-reader-opening");
    requestAnimationFrame(() => shell.classList.remove("is-switching"));
    (isSwitching ? shell : poemSection).scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function visiblePoemTitle(root = document) {
    return Array.from(root.querySelectorAll("h1,h2,h3"))
      .filter((item) => item.getClientRects().length > 0 && illustrations.has(item.textContent.trim()))
      .at(-1);
  }

  function closestFixedOverlay(element) {
    const inlineReader = element.closest?.(".gs-inline-reader-root");
    if (inlineReader) return inlineReader;
    let current = element;
    while (current && current !== document.body) {
      if (getComputedStyle(current).position === "fixed") return current;
      current = current.parentElement;
    }
    return element.closest?.('[role="dialog"]') || document.body;
  }

  function showShareToast(message) {
    let toast = document.querySelector(".gs-share-toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.className = "gs-share-toast";
      toast.setAttribute("role", "status");
      document.body.append(toast);
    }
    toast.textContent = message;
    requestAnimationFrame(() => toast.classList.add("is-visible"));
    window.clearTimeout(showShareToast.timer);
    showShareToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
  }

  async function sharePoemWithIllustration(button) {
    const overlay = closestFixedOverlay(button);
    const titleElement = visiblePoemTitle(overlay);
    const title = titleElement?.textContent.trim() || activeTitle;
    const imagePath = illustrations.get(title);
    if (!title || !imagePath) return;
    const poemLines = Array.from(overlay.querySelectorAll("p"))
      .filter((item) => item.getClientRects().length > 0)
      .map((item) => item.textContent.trim())
      .filter((text) => text && !text.includes("\u7559\u4e0b\u56de\u8072") && !text.startsWith("\u2014\u2014"));
    const text = `\u300a${title}\u300b \u90ed\u5d07\u57ce\n\n${poemLines.join("\n\n")}`;
    let shareUrl = window.location.href;
    try {
      shareUrl = `${window.parent.location.origin}/#collection`;
    } catch (_) {}
    const absoluteImageUrl = new URL(imagePath, window.location.href).href;
    try {
      const response = await fetch(absoluteImageUrl);
      if (!response.ok) throw new Error("image unavailable");
      const blob = await response.blob();
      const extension = blob.type.includes("jpeg") ? "jpg" : "png";
      const safeTitle = title.replace(/[\\/:*?"<>|]/g, "-");
      const file = new File([blob], `${safeTitle}-\u6c34\u58a8\u756b.${extension}`, { type: blob.type || "image/png" });
      if (navigator.share && navigator.canShare?.({ files: [file] })) {
        await navigator.share({ title: `\u300a${title}\u300b`, text, files: [file] });
        return;
      }
      if (navigator.share) {
        await navigator.share({
          title: `\u300a${title}\u300b`,
          text: `${text}\n\n\u6c34\u58a8\u756b\uff1a${absoluteImageUrl}`,
          url: shareUrl,
        });
        return;
      }
      await navigator.clipboard.writeText(`${text}\n\n${absoluteImageUrl}\n${shareUrl}`);
      showShareToast("\u8a69\u6587\u3001\u6c34\u58a8\u756b\u9023\u7d50\u8207\u7db2\u7ad9\u5df2\u8907\u88fd");
    } catch (error) {
      if (error?.name === "AbortError") return;
      try {
        await navigator.clipboard.writeText(`${text}\n\n${absoluteImageUrl}\n${shareUrl}`);
        showShareToast("\u8a69\u6587\u3001\u6c34\u58a8\u756b\u9023\u7d50\u8207\u7db2\u7ad9\u5df2\u8907\u88fd");
      } catch (_) {
        showShareToast("\u76ee\u524d\u7121\u6cd5\u958b\u555f\u5206\u4eab\uff0c\u8acb\u7a0d\u5f8c\u518d\u8a66");
      }
    } finally {
      button.disabled = false;
    }
  }

  function fixAwardModal() {
    const figures = Array.from(document.querySelectorAll("#awards figure"));
    if (!figures.length) return;
    const records = figures.map((figure) => ({
      title: figure.querySelector("p")?.textContent.trim() || figure.textContent.trim(),
      src: figure.querySelector("img")?.src || "",
    })).filter((record) => record.title && record.src);
    const overlays = Array.from(document.querySelectorAll("body div")).filter((item) => {
      const style = getComputedStyle(item);
      return style.position === "fixed" && item.getClientRects().length > 0 && Number(style.zIndex || 0) >= 80;
    });
    overlays.forEach((overlay) => {
      const record = records.find((item) => overlay.textContent.includes(item.title));
      if (!record) return;
      overlay.style.setProperty("overflow-y", "auto", "important");
      overlay.style.setProperty("padding-top", "58px", "important");
      let image = overlay.querySelector("img");
      if (!image) {
        image = document.createElement("img");
        const caption = Array.from(overlay.querySelectorAll("p")).find((item) => item.textContent.includes(record.title));
        if (caption) caption.before(image);
        else overlay.prepend(image);
      }
      image.classList.add("gs-award-modal-image");
      image.alt ||= record.title;
      const useFallback = () => {
        if (image.src !== record.src) image.src = record.src;
      };
      if (!image.dataset.gsAwardFallback) {
        image.dataset.gsAwardFallback = "1";
        image.addEventListener("error", useFallback);
        window.setTimeout(() => {
          if (!image.complete || image.naturalWidth === 0) useFallback();
        }, 900);
      }
      if (!image.getAttribute("src")) useFallback();
    });
  }

  function goTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.scrollingElement?.scrollTo({ top: 0, behavior: "smooth" });
  }

  window.addEventListener("message", (event) => {
    if (event.data?.type === "gs-go-top") goTop();
    if (event.data?.type === "gs-play-hero") {
      document.querySelector("#hw-hero")?.classList.remove("gs-hero-waiting");
    }
  });

  document.addEventListener("click", (event) => {
    const nextWork = event.target.closest?.(".gs-next-work");
    if (nextWork) {
      event.preventDefault();
      event.stopImmediatePropagation();
      openNextWork(nextWork);
      return;
    }
    const collectionEntrance = event.target.closest?.(".gs-collection-entrance, .gs-view-all");
    if (collectionEntrance) {
      event.preventDefault();
      event.stopImmediatePropagation();
      activeCollection = collectionEntrance.dataset.gsCollection;
      activeWorkType = "\u5168\u90e8";
      libraryView = "collection";
      applyLibraryFilters();
      document.querySelector("#poems")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    if (event.target.closest?.(".gs-collection-back")) {
      event.preventDefault();
      event.stopImmediatePropagation();
      libraryView = "home";
      activeWorkType = "\u5168\u90e8";
      applyLibraryFilters();
      document.querySelector("#poems")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    if (event.target.closest?.(".gs-reader-back")) {
      event.preventDefault();
      event.stopImmediatePropagation();
      closeInlineReader();
      return;
    }
    const filterButton = event.target.closest?.(".gs-library-filter");
    if (filterButton) {
      event.preventDefault();
      event.stopImmediatePropagation();
      if (filterButton.dataset.gsFilterKind === "collection") {
        activeCollection = filterButton.dataset.gsFilterValue;
      } else {
        activeWorkType = filterButton.dataset.gsFilterValue;
      }
      applyLibraryFilters();
      return;
    }
    const shareButton = event.target.closest?.("button");
    if (shareButton && shareButton.textContent.includes("\u5206\u4eab\u9019\u9996\u8a69")) {
      const title = visiblePoemTitle(closestFixedOverlay(shareButton))?.textContent.trim() || activeTitle;
      if (illustrations.has(title)) {
        event.preventDefault();
        event.stopImmediatePropagation();
        shareButton.disabled = true;
        sharePoemWithIllustration(shareButton);
        return;
      }
    }
    const essayNav = event.target.closest?.('a[href="#essays"]');
    if (essayNav) {
      event.preventDefault();
      activeCollection = "\u8015\u820d\u96c6";
      activeWorkType = "\u6563\u6587";
      libraryView = "collection";
      mountLibraryBrowser();
      document.querySelector("#poems")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    const poemsNav = event.target.closest?.('a[href="#poems"]');
    if (poemsNav) {
      if (document.querySelector(".gs-inline-reader-root")) closeInlineReader();
      libraryView = "home";
      activeWorkType = "\u5168\u90e8";
      mountLibraryBrowser();
      return;
    }
    const card = event.target.closest?.("#poems article");
    const title = card?.querySelector("h3")?.textContent.trim();
    if (!title || event.target.closest?.("button")) return;
    beginInlineReader(card, event.target);
    if (illustrations.has(title)) {
      activeTitle = title;
      let imageAttempts = 0;
      const imageTimer = window.setInterval(() => {
        imageAttempts += 1;
        mountModalIllustration();
        if (document.querySelector(".gs-modal-ink") || imageAttempts > 24) window.clearInterval(imageTimer);
      }, 180);
    }
  }, true);

  let attempts = 0;
  let announced = false;
  const timer = window.setInterval(() => {
    attempts += 1;
    if (!announced && document.querySelector("#poems h3")) {
      announced = true;
      window.parent?.postMessage({ type: "gs-ready" }, "*");
    }
    if (attempts > 180) {
      window.clearInterval(timer);
      if (!announced) window.parent?.postMessage({ type: "gs-ready" }, "*");
    }
  }, 250);

  window.setInterval(mountModalIllustration, 250);
  window.setInterval(styleMasthead, 250);
  window.setInterval(styleHeroTitle, 250);
  window.setInterval(mountLibraryBrowser, 400);
  window.setInterval(mountInlineReader, 120);
  window.setInterval(fixAwardModal, 300);
})();
