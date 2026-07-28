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
        margin: 34px 0 32px;
        padding: 24px 26px 22px;
        border: 1px solid rgba(69, 80, 65, .18);
        background:
          radial-gradient(circle at 92% 12%, rgba(255,255,255,.72), transparent 28%),
          rgba(247, 243, 231, .72);
        box-shadow: 0 12px 34px rgba(54, 48, 40, .045);
      }
      .gs-library-kicker {
        margin: 0 0 6px;
        color: #806a4e;
        font-size: 12px;
        letter-spacing: .22em;
      }
      .gs-library-heading {
        margin: 0 0 20px;
        color: #342f29;
        font-family: serif;
        font-size: clamp(19px, 2.2vw, 25px);
        font-weight: 400;
        letter-spacing: .08em;
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
        margin: 16px 0 0;
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
          padding: 21px 17px 18px;
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

  function applyLibraryFilters() {
    const browser = document.querySelector(".gs-library-browser");
    if (!browser) return;
    let visibleCount = 0;
    document.querySelectorAll("#poems article[data-gs-work-type], .gs-library-prose-grid article").forEach((card) => {
      const matchesCollection = activeCollection === "\u5168\u90e8\u8a69\u96c6" || card.dataset.gsCollection === activeCollection;
      const matchesType = activeWorkType === "\u5168\u90e8" || card.dataset.gsWorkType === activeWorkType;
      const visible = matchesCollection && matchesType;
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
    const empty = document.querySelector(".gs-library-empty");
    if (empty) empty.style.display = visibleCount ? "none" : "block";
  }

  function mountLibraryBrowser() {
    ensureLibraryStyle();
    const poemSection = document.querySelector("#poems");
    const poemCards = Array.from(poemSection?.querySelectorAll("article") || [])
      .filter((card) => !card.closest(".gs-library-prose-grid"));
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
      const kicker = document.createElement("p");
      kicker.className = "gs-library-kicker";
      kicker.textContent = "\u5206\u96c6\u95b1\u8b80";
      const heading = document.createElement("h3");
      heading.className = "gs-library-heading";
      heading.textContent = "\u5148\u9078\u8a69\u96c6\uff0c\u518d\u9078\u6587\u9ad4";
      browser.append(
        kicker,
        heading,
        buildFilterRow("\u8a69\u96c6", [...collectionOrder, "\u5168\u90e8\u8a69\u96c6"], "collection"),
        buildFilterRow("\u6587\u9ad4", ["\u5168\u90e8", "\u8a69\u8a5e", "\u6563\u6587"], "type"),
      );
      const result = document.createElement("p");
      result.className = "gs-library-result";
      browser.append(result);
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
    applyLibraryFilters();
  }

  function visiblePoemTitle(root = document) {
    return Array.from(root.querySelectorAll("h1,h2,h3"))
      .filter((item) => item.getClientRects().length > 0 && illustrations.has(item.textContent.trim()))
      .at(-1);
  }

  function closestFixedOverlay(element) {
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
      mountLibraryBrowser();
      document.querySelector("#poems")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    const card = event.target.closest?.("#poems article");
    const title = card?.querySelector("h3")?.textContent.trim();
    if (!title || !illustrations.has(title)) return;
    activeTitle = title;
    let attempts = 0;
    const timer = window.setInterval(() => {
      attempts += 1;
      mountModalIllustration();
      if (document.querySelector(".gs-modal-ink") || attempts > 24) window.clearInterval(timer);
    }, 180);
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
  window.setInterval(fixAwardModal, 300);
})();
