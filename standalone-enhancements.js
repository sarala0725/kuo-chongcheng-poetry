(() => {
  const illustrations = new Map([
    ["\u864e\u982d\u57e4\u5609\u5e74\u83ef\u6703", "assets/ink-wash/hutoupi-carnival.png"],
    ["\u58be\u4e01\u570b\u5bb6\u516c\u5712\u4e4b\u65c5", "assets/ink-wash/kenting-journey.png"],
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
    ["\u58be\u4e01\u570b\u5bb6\u516c\u5712", "assets/ink-wash/kenting-national-park.png"],
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
      header > nav button { display: none !important; }
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
          width: 20% !important;
          height: clamp(70px, 22vw, 90px) !important;
          min-width: 0 !important;
          flex: 0 1 20% !important;
        }
        #hw-hero {
          display: flex !important;
          flex-wrap: nowrap !important;
          justify-content: center !important;
          gap: 0 !important;
          width: 100% !important;
          white-space: nowrap !important;
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
      header > nav button { display: none !important; }
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
      .gs-poem-couplets {
        display: grid !important;
        gap: 1.1em;
        width: max-content;
        max-width: 100%;
        margin-right: auto;
        margin-left: auto;
        overflow-x: auto;
        padding: 4px 0 9px;
        white-space: normal !important;
        font-size: clamp(20px, 2.25vw, 25px) !important;
        line-height: 1.85 !important;
        scrollbar-width: none;
        -webkit-overflow-scrolling: touch;
      }
      .gs-poem-couplets::-webkit-scrollbar { display: none; }
      .gs-poem-couplet {
        display: grid;
        grid-template-columns: repeat(2, max-content);
        gap: clamp(24px, 4vw, 52px);
        width: max-content;
        min-width: max-content;
      }
      .gs-poem-line {
        display: block;
        flex: 0 0 auto;
        white-space: nowrap;
        letter-spacing: .035em;
      }
      .gs-poem-reader > h2 {
        text-align: center !important;
      }
      .gs-poem-suite-reader > h2 {
        font-size: clamp(32px, 5vw, 52px) !important;
        line-height: 1.25 !important;
      }
      .gs-poem-suite-intro {
        width: min(680px, 100%);
        margin: 0 auto 40px;
        padding: 0 0 23px;
        border-bottom: 1px solid rgba(69, 80, 65, .16);
        color: inherit;
        font-family: inherit;
        font-size: clamp(20px, 2.25vw, 25px);
        line-height: 1.85;
        text-align: left;
      }
      .gs-poem-suite-intro p { margin: 0 0 .8em; }
      .gs-poem-suite-intro p:last-child { margin-bottom: 0; }
      .gs-poem-suite-section {
        width: max-content;
        max-width: 100%;
        margin: 0 auto 32px;
      }
      .gs-poem-suite-title {
        margin: 0 0 34px;
        color: #342f29;
        font-family: inherit !important;
        font-size: clamp(30px, 5vw, 42px) !important;
        font-weight: 600;
        line-height: 1.3;
        letter-spacing: .06em;
        text-align: center;
      }
      .gs-poem-suite-section .gs-poem-couplets {
        width: 100%;
        max-width: 100%;
        margin-right: 0;
        margin-left: 0;
        overflow: visible;
        gap: .62em;
      }
      .gs-poem-suite-section .gs-poem-couplet {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: .62em;
        width: 100%;
        min-width: 0;
      }
      .gs-poem-suite-section .gs-poem-line {
        width: 100%;
        white-space: normal;
        overflow-wrap: anywhere;
      }
      .gs-poem-couplet.is-single { justify-content: flex-start; }
      .gs-work-guides {
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: 0;
        margin-top: 46px;
        padding-top: 24px;
        border-top: 1px solid rgba(69, 80, 65, .2);
      }
      .gs-next-work {
        appearance: none;
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        gap: 18px;
        width: 100%;
        padding: 0 0 10px;
        border: 0;
        background: transparent;
        color: #39352f;
        cursor: pointer;
        font: inherit;
        text-align: left;
      }
      .gs-next-copy { min-width: 0; }
      .gs-next-work + .gs-next-work {
        margin-top: 12px;
        padding-top: 20px;
        border-top: 1px solid rgba(69, 80, 65, .12);
      }
      .gs-previous-work { grid-template-columns: auto 1fr; }
      .gs-previous-work .gs-next-copy { text-align: left; }
      .gs-work-guides .gs-next-work:last-child:not(:first-child) .gs-next-copy { text-align: right; }
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
        font-size: clamp(17px, 2.4vw, 22px);
        line-height: 1.5;
        letter-spacing: .08em;
        overflow-wrap: anywhere;
        white-space: normal;
      }
      .gs-next-arrow {
        color: #758477;
        font-size: 26px;
        transition: transform .25s ease;
      }
      .gs-next-work:hover .gs-next-arrow { transform: translateX(5px); }
      .gs-previous-work:hover .gs-next-arrow { transform: translateX(-5px); }
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
      .gs-awards-drag-track {
        display: flex !important;
        flex-wrap: nowrap !important;
        gap: clamp(16px, 2.2vw, 28px) !important;
        width: 100% !important;
        max-width: 100% !important;
        overflow-x: auto !important;
        overflow-y: hidden !important;
        padding-bottom: 12px !important;
        cursor: grab;
        scroll-snap-type: x proximity;
        scrollbar-width: none !important;
        -ms-overflow-style: none;
        touch-action: pan-y;
        -webkit-overflow-scrolling: touch;
      }
      .gs-awards-drag-track::-webkit-scrollbar { display: none !important; }
      .gs-awards-drag-track.is-dragging {
        cursor: grabbing;
        scroll-snap-type: none;
        user-select: none;
      }
      .gs-awards-drag-track > figure {
        flex: 0 0 clamp(250px, 30vw, 330px) !important;
        width: clamp(250px, 30vw, 330px) !important;
        max-width: calc(100vw - 52px) !important;
        scroll-snap-align: start;
      }
      .gs-awards-arrows {
        position: relative;
        z-index: 4;
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 0;
        padding: 0 8px;
        pointer-events: none;
        transform: translateY(calc(var(--gs-award-arrow-y, 180px) - 21px));
      }
      .gs-awards-arrow {
        appearance: none;
        display: grid;
        width: 44px;
        height: 48px;
        place-items: center;
        border: 0;
        background: transparent;
        color: #687669;
        cursor: pointer;
        pointer-events: auto;
        touch-action: manipulation;
        -webkit-tap-highlight-color: transparent;
        transition: color .2s ease, transform .2s ease;
      }
      .gs-awards-arrow::before {
        content: "";
        display: block;
        width: 14px;
        height: 14px;
        border-top: 2px solid currentColor;
        border-right: 2px solid currentColor;
        filter: drop-shadow(0 2px 4px rgba(53, 48, 40, .13));
      }
      .gs-awards-arrow:first-child::before { transform: rotate(-135deg); }
      .gs-awards-arrow:last-child::before { transform: rotate(45deg); }
      .gs-awards-arrow:hover {
        color: #39483b;
      }
      .gs-awards-arrow:first-child:hover { transform: translateX(-3px); }
      .gs-awards-arrow:last-child:hover { transform: translateX(3px); }
      .gs-awards-arrow:disabled {
        cursor: default;
        opacity: .28;
        transform: none;
      }
      .gs-visitor-counter {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 13px;
        width: min(920px, calc(100% - 48px));
        margin: 18px auto 30px;
        padding: 24px 10px 8px;
        border-top: 1px solid rgba(82, 74, 62, .18);
        color: #756b5d;
        text-align: center;
      }
      .gs-visitor-label {
        color: #5c554c;
        font-family: serif;
        font-size: 14px;
        letter-spacing: .16em;
      }
      .gs-visitor-value {
        color: #474139;
        font-family: Georgia, serif;
        font-size: 18px;
        font-variant-numeric: tabular-nums;
        letter-spacing: .08em;
        white-space: nowrap;
      }
      .gs-visitor-value.is-preview {
        color: #8a8174;
        font-family: var(--font-ui);
        font-size: 12px;
        letter-spacing: .16em;
      }
      .gs-inner-go-top {
        appearance: none;
        position: fixed;
        z-index: 240;
        right: 24px;
        bottom: 28px;
        display: grid;
        width: 52px;
        height: 52px;
        place-items: center;
        padding: 0;
        border: 0;
        background: transparent;
        cursor: pointer;
        touch-action: manipulation;
        -webkit-tap-highlight-color: transparent;
        filter: drop-shadow(2px 4px 5px rgba(54,45,35,.2));
        transition: transform .22s ease;
      }
      .gs-inner-go-top::before,
      .gs-inner-go-top::after {
        content: "";
        position: absolute;
        inset: 8px;
        border: 1px solid rgba(139, 117, 82, .24);
        border-radius: 50%;
        opacity: 0;
        pointer-events: none;
      }
      .gs-inner-go-top svg { display: block; width: 100%; overflow: visible; pointer-events: none; }
      .gs-inner-go-petals { fill: #fffdf7; stroke: #d9d0c0; stroke-width: 1; transform-origin: 24px 24px; }
      .gs-inner-go-heart { fill: #bd9659; }
      .gs-inner-go-arrow { fill: none; stroke: #73614d; stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; }
      .gs-inner-go-top:hover { transform: translateY(-4px) rotate(-8deg); }
      .gs-inner-go-top.is-returning .gs-inner-go-petals { animation: gs-go-spin 1s cubic-bezier(.3,.62,.3,1) both; }
      .gs-inner-go-top.is-returning::before { animation: gs-go-ripple 1.55s ease-out both; }
      .gs-inner-go-top.is-returning::after { animation: gs-go-ripple 1.55s .28s ease-out both; }
      .gs-return-petal {
        position: fixed;
        z-index: 239;
        right: 31px;
        bottom: 49px;
        width: 11px;
        height: 8px;
        border: 1px solid rgba(190,179,158,.45);
        border-radius: 70% 30% 70% 30%;
        background: linear-gradient(135deg,#fff,#e8e1d3);
        opacity: 0;
        pointer-events: none;
        filter: drop-shadow(0 3px 5px rgba(74, 61, 46, .1));
        animation: gs-return-petal var(--duration) var(--delay) cubic-bezier(.18,.62,.28,1) forwards;
      }
      @keyframes gs-go-spin {
        0% { transform: rotate(0deg) scale(1); }
        50% { transform: rotate(180deg) scale(1.045); }
        100% { transform: rotate(360deg) scale(1); }
      }
      @keyframes gs-go-ripple {
        0% { opacity: 0; transform: scale(.68); }
        18% { opacity: .38; }
        100% { opacity: 0; transform: scale(2.15); }
      }
      @keyframes gs-return-petal {
        0% { opacity: 0; translate: 0 0; rotate: 0deg; scale: .72; }
        15% { opacity: .86; }
        62% {
          opacity: .68;
          translate: var(--drift-x) var(--rise-y);
          rotate: var(--mid-spin);
          scale: 1;
        }
        100% {
          opacity: 0;
          translate: var(--settle-x) var(--settle-y);
          rotate: var(--spin);
          scale: .82;
        }
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
  .gs-poem-couplets {
    gap: .9em;
    width: max-content;
    max-width: 100%;
    margin-right: auto;
    margin-left: auto;
    font-size: clamp(15px, 4.6vw, 19px) !important;
    line-height: 1.75 !important;
  }
        .gs-poem-couplet {
          display: flex;
          justify-content: flex-start;
          gap: clamp(10px, 3vw, 17px);
          width: max-content;
        }
        .gs-poem-suite-intro {
          font-size: clamp(15px, 4.6vw, 19px);
        }
        .gs-work-guides {
          margin-top: 38px;
          padding-top: 20px;
        }
        .gs-next-work { gap: 9px; }
        .gs-next-title { font-size: clamp(15px, 4vw, 18px); }
        .gs-reader-nav { margin-bottom: 14px; }
        .gs-award-modal-image {
          max-width: calc(100vw - 30px) !important;
          max-height: calc(100dvh - 190px) !important;
        }
        .gs-awards-drag-track > figure {
          flex-basis: min(78vw, 300px) !important;
          width: min(78vw, 300px) !important;
        }
        .gs-awards-arrow { width: 56px; height: 72px; }
        .gs-awards-arrows {
          padding: 0;
          transform: translateY(calc(var(--gs-award-arrow-y, 160px) - 36px));
        }
        .gs-visitor-counter {
          gap: 10px;
          width: calc(100% - 40px);
          margin-top: 12px;
          padding: 20px 5px 6px;
        }
        .gs-visitor-value {
          font-size: 17px;
        }
        .gs-inner-go-top {
          right: 12px;
          bottom: 14px;
          width: 46px;
          height: 46px;
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
    if (!panel || !currentTitle || !collection || panel.querySelector(".gs-work-guides")) return;
    let works = getReaderWorkCards().filter((card) => {
      const typeMatches = activeWorkType === "\u5168\u90e8" || card.dataset.gsWorkType === activeWorkType;
      return card.dataset.gsCollection === collection && typeMatches;
    });
    if (works.length < 2) {
      works = getReaderWorkCards().filter((card) => card.dataset.gsCollection === collection);
    }
    if (works.length < 2) return;
    const currentIndex = works.findIndex((card) => card.querySelector("h3")?.textContent.trim() === currentTitle);
    if (currentIndex < 0) return;
    const previousCard = works[(currentIndex - 1 + works.length) % works.length];
    const nextCard = works[(currentIndex + 1 + works.length) % works.length];
    const previousTitle = previousCard?.querySelector("h3")?.textContent.trim();
    const nextTitle = nextCard?.querySelector("h3")?.textContent.trim();
    if (!previousTitle || !nextTitle) return;
    const guides = document.createElement("nav");
    guides.className = "gs-work-guides";
    guides.setAttribute("aria-label", "\u7bc7\u7ae0\u5c0e\u89bd");
    const createGuide = (titleText, labelText, direction) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `gs-next-work${direction === "previous" ? " gs-previous-work" : ""}`;
      button.dataset.gsNextTitle = titleText;
      button.dataset.gsCollection = collection;
      const copy = document.createElement("span");
      copy.className = "gs-next-copy";
      const label = document.createElement("span");
      label.className = "gs-next-label";
      label.textContent = labelText;
      const title = document.createElement("span");
      title.className = "gs-next-title";
      title.textContent = titleText;
      const arrow = document.createElement("span");
      arrow.className = "gs-next-arrow";
      arrow.setAttribute("aria-hidden", "true");
      arrow.textContent = direction === "previous" ? "\u2190" : "\u2192";
      copy.append(label, title);
      if (direction === "previous") button.append(arrow, copy);
      else button.append(copy, arrow);
      return button;
    };
    guides.append(
      createGuide(previousTitle, "\u4e0a\u4e00\u7bc7", "previous"),
      createGuide(nextTitle, "\u4e0b\u4e00\u7bc7", "next")
    );
    panel.append(guides);
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

  function appendCoupletRows(container, lines) {
    for (let index = 0; index < lines.length; index += 2) {
      const couplet = document.createElement("div");
      couplet.className = "gs-poem-couplet";
      if (!lines[index + 1]) couplet.classList.add("is-single");
      [lines[index], lines[index + 1]].filter(Boolean).forEach((lineText) => {
        const line = document.createElement("span");
        line.className = "gs-poem-line";
        line.textContent = lineText;
        couplet.append(line);
      });
      container.append(couplet);
    }
  }

  function formatPoemCouplets(panel) {
    const content = Array.from(panel.querySelectorAll("div")).find((item) => {
      return item.style.whiteSpace === "pre-line" && !item.closest(".gs-next-work");
    });
    if (!content || content.classList.contains("gs-poem-couplets")) return;
    const title = panel.querySelector("h2")?.textContent.trim() || "";
    const rawContent = content.textContent.trim();
    panel.classList.add("gs-poem-reader");
    if (title === "\u58be\u4e01\u570b\u5bb6\u516c\u5712\u4e4b\u65c5") {
      const blocks = rawContent
        .replace(/\r/g, "")
        .split(/(?=[\u4e00\u4e8c\u4e09\u56db\u4e94\u516d]\u3001)/)
        .map((block) => block.trim())
        .filter(Boolean);
      content.classList.add("gs-poem-suite");
      panel.classList.add("gs-poem-suite-reader");
      content.replaceChildren();
      blocks.shift();
      const introLines = [
        "\u65bc\u6c11\u570b\u4e5d\u5341\u4e03\u5e74\u51ac\u81f3\u5f8c\u4e00\u65e5",
        "\u6960\u897f\u793e\u5340\u767c\u5c55\u5354\u6703\u7531\u738b\u7406\u4e8b\u9577\u745c\u82f1\u8001\u5e2b\u7d44\u5718\u5f80\u58be\u4e01\u4f5c\u4e8c\u65e5\u4e4b\u904a\u3002\u5433\u96d6\u975e\u6703\u54e1\uff0c\u97f3\u611f\u58be\u4e01\u53ca\u6709\u675f\u5343\u7a2e\u4e4b\u71b1\u5e36\u6797\u6728\u82b1\u8349\u65bc\u4e00\u5712\uff0c\u53ef\u8b02\u662f\u4e00\u90e8\u690d\u7269\u6d3b\u5b57\u5178\u3002\u5c71\u6d77\u76f8\u4f9d\u3001\u666f\u9ede\u76f8\u9023\u3001\u5c65\u53bb\u4e0d\u53ad\u3001\u4f9d\u7136\u53c3\u52a0\u3002\u4f5c\u8a69\u6578\u9996\uff0c\u4ee5\u8a8c\u5176\u52dd",
      ];
      if (introLines.length) {
        const intro = document.createElement("div");
        intro.className = "gs-poem-suite-intro";
        introLines.forEach((introText) => {
          const paragraph = document.createElement("p");
          paragraph.textContent = introText;
          intro.append(paragraph);
        });
        content.append(intro);
      }
      blocks.forEach((block) => {
        const blockLines = block
          .split(/[\n\u3000]+/)
          .map((line) => line.trim())
          .filter(Boolean);
        if (!blockLines.length) return;
        const section = document.createElement("section");
        section.className = "gs-poem-suite-section";
        const heading = document.createElement("h3");
        heading.className = "gs-poem-suite-title";
        heading.textContent = blockLines.shift();
        const verses = blockLines.join("\n")
          .split(/[\n\u3000]+/)
          .map((line) => line.trim())
          .filter(Boolean);
        const couplets = document.createElement("div");
        couplets.className = "gs-poem-couplets";
        appendCoupletRows(couplets, verses);
        section.append(heading, couplets);
        content.append(section);
      });
      return;
    }
    const lines = rawContent
      .split(/[\n\u3000]+/)
      .map((line) => line.trim())
      .filter(Boolean);
    if (lines.length < 2) return;
    content.classList.add("gs-poem-couplets");
    content.replaceChildren();
    appendCoupletRows(content, lines);
  }

  function mountPanelIllustration(panel, titleText) {
    const imagePath = illustrations.get(titleText);
    const title = Array.from(panel.querySelectorAll("h1,h2,h3"))
      .find((item) => item.textContent.trim() === titleText);
    if (!imagePath || !title || panel.querySelector(".gs-modal-ink")) return;
    const image = document.createElement("img");
    image.className = "gs-modal-ink";
    image.src = imagePath;
    image.alt = `\u300a${titleText}\u300b\u6c34\u58a8\u63d2\u756b`;
    image.style.cssText = "display:block;width:100%;max-height:340px;aspect-ratio:3/2;object-fit:cover;margin:0 0 22px;border:1px solid rgba(52,48,42,.12);box-shadow:0 8px 18px rgba(52,48,42,.10);";
    title.before(image);
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
    formatPoemCouplets(panelClone);
    mountPanelIllustration(panelClone, pendingReaderTitle);
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
    const suite = overlay.querySelector(".gs-poem-suite");
    const formattedPoem = suite
      ? [
          Array.from(suite.querySelectorAll(".gs-poem-suite-intro p")).map((line) => line.textContent.trim()).join("\n"),
          ...Array.from(suite.querySelectorAll(".gs-poem-suite-section")).map((section) => {
            const heading = section.querySelector(".gs-poem-suite-title")?.textContent.trim() || "";
            const verses = Array.from(section.querySelectorAll(".gs-poem-couplet"))
              .map((row) => Array.from(row.querySelectorAll(".gs-poem-line")).map((line) => line.textContent.trim()).join("\u3000"))
              .join("\n");
            return `${heading}\n${verses}`.trim();
          }),
        ].filter(Boolean).join("\n\n")
      : Array.from(overlay.querySelectorAll(".gs-poem-couplet"))
        .map((row) => Array.from(row.querySelectorAll(".gs-poem-line")).map((line) => line.textContent.trim()).join("\u3000"))
        .join("\n");
    const poemLines = formattedPoem
      ? [formattedPoem]
      : Array.from(overlay.querySelectorAll("p"))
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

  function removeAccountControls() {
    try {
      localStorage.setItem("gs_loggedIn", "1");
    } catch (_) {}
    document.querySelectorAll("header button").forEach((button) => {
      if (/(\u767b\u5165|\u767b\u51fa)/.test(button.textContent)) button.remove();
    });
  }

  function removeMastheadAuthor() {
    const masthead = document.querySelector("header > a");
    if (!masthead) return;
    masthead.querySelectorAll("*").forEach((item) => {
      if (!item.children.length && item.textContent.trim() === "\u90ed\u5d07\u57ce") item.remove();
    });
    Array.from(masthead.childNodes).forEach((node) => {
      if (node.nodeType !== Node.TEXT_NODE || !node.textContent.includes("\u90ed\u5d07\u57ce")) return;
      node.textContent = node.textContent.replace(/\u90ed\u5d07\u57ce/g, "");
    });
  }

  function setupAwardDrag() {
    const awardsSection = document.querySelector("#awards");
    awardsSection?.querySelectorAll("p").forEach((paragraph) => {
      const hint = "\u5de6\u53f3\u6ed1\u52d5\u700f\u89bd\uff0c\u8f15\u89f8\u653e\u5927";
      if (paragraph.textContent.includes(hint)) {
        paragraph.textContent = paragraph.textContent.replace(hint, "").trim();
      }
    });
    const figures = Array.from(document.querySelectorAll("#awards figure"));
    const track = figures[0]?.parentElement;
    if (!track || track.dataset.gsDragReady === "1") return;
    awardsSection?.querySelectorAll(".gs-awards-arrows").forEach((arrows) => arrows.remove());
    track.dataset.gsDragReady = "1";
    track.classList.add("gs-awards-drag-track");
    track.setAttribute("aria-label", "\u69ae\u8b7d\u734e\u72c0\uff0c\u53ef\u5de6\u53f3\u62d6\u66f3\u700f\u89bd");
    let startX = 0;
    let startScrollLeft = 0;
    let moved = false;
    let pointerActive = false;
    let activePointerId = null;
    let dragThreshold = 6;
    let suppressClickUntil = 0;
    track.addEventListener("pointerdown", (event) => {
      if (event.pointerType === "touch") return;
      if (event.pointerType === "mouse" && event.button !== 0) return;
      startX = event.clientX;
      startScrollLeft = track.scrollLeft;
      moved = false;
      pointerActive = true;
      activePointerId = event.pointerId;
      dragThreshold = event.pointerType === "touch" ? 14 : 6;
    });
    track.addEventListener("pointermove", (event) => {
      if (!pointerActive || event.pointerId !== activePointerId) return;
      const distance = event.clientX - startX;
      if (!moved && Math.abs(distance) > dragThreshold) {
        moved = true;
        track.classList.add("is-dragging");
        track.setPointerCapture?.(event.pointerId);
      }
      if (moved) {
        event.preventDefault();
        track.scrollLeft = startScrollLeft - distance;
      }
    });
    const finishDrag = (event) => {
      if (!pointerActive || event.pointerId !== activePointerId) return;
      pointerActive = false;
      activePointerId = null;
      track.classList.remove("is-dragging");
      if (track.hasPointerCapture?.(event.pointerId)) track.releasePointerCapture(event.pointerId);
      if (moved) suppressClickUntil = Date.now() + 350;
    };
    track.addEventListener("pointerup", finishDrag);
    track.addEventListener("pointercancel", finishDrag);
    let touchActive = false;
    let touchStartX = 0;
    let touchStartY = 0;
    let touchStartScrollLeft = 0;
    track.addEventListener("touchstart", (event) => {
      if (event.touches.length !== 1) return;
      const touch = event.touches[0];
      touchActive = true;
      moved = false;
      touchStartX = touch.clientX;
      touchStartY = touch.clientY;
      touchStartScrollLeft = track.scrollLeft;
    }, { passive: true });
    track.addEventListener("touchmove", (event) => {
      if (!touchActive || event.touches.length !== 1) return;
      const touch = event.touches[0];
      const distanceX = touch.clientX - touchStartX;
      const distanceY = touch.clientY - touchStartY;
      if (!moved && Math.abs(distanceX) > 10 && Math.abs(distanceX) > Math.abs(distanceY) * 1.08) {
        moved = true;
        track.classList.add("is-dragging");
      }
      if (!moved) return;
      event.preventDefault();
      track.scrollLeft = touchStartScrollLeft - distanceX;
    }, { passive: false });
    const finishTouchDrag = () => {
      if (!touchActive) return;
      touchActive = false;
      track.classList.remove("is-dragging");
      if (moved) suppressClickUntil = Date.now() + 350;
    };
    track.addEventListener("touchend", finishTouchDrag, { passive: true });
    track.addEventListener("touchcancel", finishTouchDrag, { passive: true });
    track.addEventListener("click", (event) => {
      if (Date.now() >= suppressClickUntil) return;
      event.preventDefault();
      event.stopImmediatePropagation();
    }, true);
    const arrows = document.createElement("div");
    arrows.className = "gs-awards-arrows";
    const previous = document.createElement("button");
    const next = document.createElement("button");
    previous.type = next.type = "button";
    previous.className = next.className = "gs-awards-arrow";
    previous.setAttribute("aria-label", "\u4e0a\u4e00\u5f35\u734e\u72c0");
    next.setAttribute("aria-label", "\u4e0b\u4e00\u5f35\u734e\u72c0");
    const updateArrows = () => {
      arrows.style.setProperty("--gs-award-arrow-y", `${Math.max(42, track.clientHeight / 2)}px`);
      previous.disabled = track.scrollLeft <= 2;
      next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;
    };
    previous.addEventListener("click", () => {
      track.scrollBy({ left: -Math.max(240, track.clientWidth * .78), behavior: "smooth" });
    });
    next.addEventListener("click", () => {
      track.scrollBy({ left: Math.max(240, track.clientWidth * .78), behavior: "smooth" });
    });
    track.addEventListener("scroll", updateArrows, { passive: true });
    arrows.append(previous, next);
    track.before(arrows);
    window.setTimeout(updateArrows, 0);
    if ("ResizeObserver" in window) new ResizeObserver(updateArrows).observe(track);
  }

  async function loadVisitorCount(valueElement) {
    if (valueElement.dataset.gsCountLoaded === "1") return;
    valueElement.dataset.gsCountLoaded = "1";
    if (location.protocol === "file:") {
      valueElement.textContent = "\u672c\u6a5f\u9810\u89bd";
      valueElement.classList.add("is-preview");
      valueElement.closest(".gs-visitor-counter")?.setAttribute(
        "title",
        "\u6b63\u5f0f\u7db2\u5740\u4e0a\u7dda\u5f8c\u6703\u986f\u793a\u4e26\u7d2f\u8a08\u700f\u89bd\u4eba\u6b21"
      );
      return;
    }
    const productionHost = "kuo-chongcheng-poetry.vercel.app";
    const sessionKey = "gs_visit_counted_2026";
    let shouldIncrement = false;
    try {
      shouldIncrement = location.hostname === productionHost && sessionStorage.getItem(sessionKey) !== "1";
    } catch (_) {
      shouldIncrement = location.hostname === productionHost;
    }
    const action = shouldIncrement ? "up" : "";
    const endpoint = `https://api.counterapi.dev/v1/kuo-chongcheng-poetry/visitors/${action}`;
    let timeout = 0;
    try {
      const response = await Promise.race([
        fetch(endpoint, { cache: "no-store" }),
        new Promise((_, reject) => {
          timeout = window.setTimeout(() => reject(new Error("visitor counter timed out")), 12000);
        }),
      ]);
      if (!response.ok) throw new Error("visitor counter unavailable");
      const data = await response.json();
      const count = Number(data.count ?? data.value ?? data);
      if (!Number.isFinite(count)) throw new Error("visitor count missing");
      window.clearTimeout(timeout);
      valueElement.textContent = new Intl.NumberFormat("zh-TW", {
        minimumIntegerDigits: 6,
        useGrouping: false,
      }).format(count);
      try {
        localStorage.setItem("gs_last_visit_count", String(count));
      } catch (_) {}
      if (shouldIncrement) {
        try {
          sessionStorage.setItem(sessionKey, "1");
        } catch (_) {}
      }
    } catch (_) {
      window.clearTimeout(timeout);
      let savedCount = 0;
      try {
        savedCount = Number(localStorage.getItem("gs_last_visit_count"));
      } catch (_) {}
      valueElement.textContent = Number.isFinite(savedCount) && savedCount > 0
        ? new Intl.NumberFormat("zh-TW", { minimumIntegerDigits: 6, useGrouping: false }).format(savedCount)
        : "\u2014";
      valueElement.closest(".gs-visitor-counter")?.setAttribute("title", "\u700f\u89bd\u4eba\u6578\u66ab\u6642\u7121\u6cd5\u53d6\u5f97");
    }
  }

  function mountVisitorCounter() {
    const footer = document.querySelector("footer");
    const existing = document.querySelector(".gs-visitor-counter");
    if (existing) {
      if (footer && existing.parentElement !== footer) footer.append(existing);
      return;
    }
    const counter = document.createElement("aside");
    counter.className = "gs-visitor-counter";
    counter.setAttribute("aria-label", "\u7db2\u7ad9\u700f\u89bd\u4eba\u6578");
    counter.innerHTML = `
      <span class="gs-visitor-label">\u5171\u8b80\u8a69\u6587\u4eba\u6b21</span>
      <span class="gs-visitor-value" aria-live="polite">\u2026</span>
    `;
    if (footer) footer.append(counter);
    else document.body.append(counter);
    loadVisitorCount(counter.querySelector(".gs-visitor-value"));
  }

  function releaseGoTopPetals(button) {
    document.querySelectorAll(".gs-return-petal").forEach((petal) => petal.remove());
    button.classList.remove("is-returning");
    void button.offsetWidth;
    button.classList.add("is-returning");
    for (let index = 0; index < 5; index += 1) {
      const petal = document.createElement("span");
      petal.className = "gs-return-petal";
      const driftX = -38 + Math.random() * 72;
      petal.style.setProperty("--drift-x", `${driftX}px`);
      petal.style.setProperty("--rise-y", `${-58 - Math.random() * 58}px`);
      petal.style.setProperty("--settle-x", `${driftX + (-10 + Math.random() * 20)}px`);
      petal.style.setProperty("--settle-y", `${-32 - Math.random() * 34}px`);
      petal.style.setProperty("--mid-spin", `${90 + Math.random() * 190}deg`);
      petal.style.setProperty("--spin", `${260 + Math.random() * 360}deg`);
      petal.style.setProperty("--duration", `${1.8 + Math.random() * 1.15}s`);
      petal.style.setProperty("--delay", `${Math.random() * .38}s`);
      document.body.append(petal);
      window.setTimeout(() => petal.remove(), 3600);
    }
  }

  function mountInnerGoTop() {
    if (document.querySelector(".gs-inner-go-top")) return;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "gs-inner-go-top";
    button.setAttribute("aria-label", "\u56de\u5230\u9801\u9996");
    button.setAttribute("title", "\u56de\u5230\u9801\u9996");
    button.innerHTML = `
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <g class="gs-inner-go-petals">
          <ellipse cx="24" cy="12" rx="7" ry="11"/>
          <ellipse cx="35.4" cy="20.3" rx="7" ry="11" transform="rotate(72 35.4 20.3)"/>
          <ellipse cx="31.1" cy="33.7" rx="7" ry="11" transform="rotate(144 31.1 33.7)"/>
          <ellipse cx="16.9" cy="33.7" rx="7" ry="11" transform="rotate(216 16.9 33.7)"/>
          <ellipse cx="12.6" cy="20.3" rx="7" ry="11" transform="rotate(288 12.6 20.3)"/>
        </g>
        <circle class="gs-inner-go-heart" cx="24" cy="24" r="4"/>
        <path class="gs-inner-go-arrow" d="M24 30V19M19.5 23.5 24 19l4.5 4.5"/>
      </svg>
    `;
    button.addEventListener("click", () => {
      releaseGoTopPetals(button);
      goTop();
    });
    document.body.append(button);
  }

  function goTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const scrollables = [
      document.scrollingElement,
      document.documentElement,
      document.body,
      ...Array.from(document.querySelectorAll("*")).filter((item) => (
        item.scrollTop > 0 && item.scrollHeight > item.clientHeight + 2
      )),
    ].filter(Boolean);
    scrollables.forEach((item) => item.scrollTo?.({ top: 0, left: 0, behavior: "smooth" }));
    window.setTimeout(() => {
      window.scrollTo(0, 0);
      scrollables.forEach((item) => {
        item.scrollTop = 0;
        item.scrollLeft = 0;
      });
    }, 520);
  }

  function bindParentGoTop() {
    let parentButton;
    try {
      parentButton = window.parent?.document?.querySelector("#go-top");
    } catch (_) {
      return;
    }
    if (!parentButton || parentButton.dataset.gsFrameGoTop === "1") return;
    parentButton.dataset.gsFrameGoTop = "1";
    let lastActivation = 0;
    const activate = () => {
      if (Date.now() - lastActivation < 450) return;
      lastActivation = Date.now();
      goTop();
    };
    parentButton.addEventListener("click", activate);
    parentButton.addEventListener("touchend", activate, { passive: true });
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
  window.setInterval(setupAwardDrag, 500);
  window.setInterval(mountVisitorCounter, 700);
  window.setInterval(removeAccountControls, 500);
  window.setInterval(removeMastheadAuthor, 500);
  window.setInterval(bindParentGoTop, 500);
  window.setInterval(mountInnerGoTop, 500);
})();
