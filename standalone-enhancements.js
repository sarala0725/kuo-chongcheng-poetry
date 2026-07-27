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
      @media (max-width: 700px) {
        .gs-calligraphy-brand { font-size: 24px !important; letter-spacing: .075em !important; }
        .gs-calligraphy-hero .gs-hero-vector-slot {
          width: clamp(48px, 17vw, 92px) !important;
          height: clamp(68px, 20vw, 110px) !important;
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
})();
