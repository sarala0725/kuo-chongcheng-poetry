(() => {
  const editorialStyle = document.createElement('link');
  editorialStyle.rel = 'stylesheet';
  editorialStyle.href = 'editorial.css?v=20260925e';
  editorialStyle.dataset.gsEditorial = '1';
  document.head.append(editorialStyle);
  const paperTextureStyle = document.createElement("style");
  paperTextureStyle.id = "gs-paper-texture-style";
  paperTextureStyle.textContent = `
    html,
    body {
      background-color: #ebe3d2 !important;
      background-image: url("assets/clean-gray-paper.png") !important;
      background-repeat: repeat !important;
    }
    body > div[style*="background-color: var(--paper-bg"] {
      background-color: #ebe3d2 !important;
      background-image: url("assets/clean-gray-paper.png") !important;
      background-repeat: repeat !important;
      background-attachment: local !important;
    }
  `;
  document.head.appendChild(paperTextureStyle);

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
  let manuscriptIndex = 0;
  let manuscriptTransitioning = false;
  let manuscriptAutoplayTimer = 0;
  let manuscriptAutoplayPaused = false;
  let manuscriptInView = false;
  const manuscriptScrollBoundSections = new WeakSet();
  const manuscriptPages = [
    { file: "LINE_ALBUM_2026730_260730_1.jpg", kind: "詩稿", title: "楠西江家古厝・楠西春望", note: "兩首詩並列於一紙，保留最初落筆的呼吸。" },
    { file: "LINE_ALBUM_2026730_260730_17.jpg", kind: "吟會稿紙", title: "詩社吟稿", note: "紅框稿紙與端整墨跡，留下昔日詩會的正式氣息。" },
    { file: "LINE_ALBUM_2026730_260730_6.jpg", kind: "文稿", title: "自述長稿", note: "格紙上的長篇手書，字裡行間可見反覆斟酌。" },
    { file: "LINE_ALBUM_2026730_260730_14.jpg", kind: "詩稿", title: "壬申中秋", note: "舊紙與摺線相疊，像一枚被保存下來的月色。" },
    { file: "LINE_ALBUM_2026730_260730_5.jpg", kind: "剪報", title: "詩集獲獎剪報", note: "兩則報導拼成一頁，記錄詩集走入眾人目光的時刻。" },
    { file: "LINE_ALBUM_2026730_260730_2.jpg", kind: "詩稿", title: "龜丹溫泉・曾文水庫", note: "山水入詩，工整的直書排列留住旅途見聞。" },
    { file: "LINE_ALBUM_2026730_260730_18.jpg", kind: "詩稿合頁", title: "苦熱・鄉土記事", note: "兩張手稿同框，像翻開書桌上尚未收起的一疊詩頁。" },
    { file: "LINE_ALBUM_2026730_260730_3.jpg", kind: "詩稿", title: "丙戌新春感懷・凌寒梅", note: "新歲與寒梅相映，是一頁清勁的節令詩稿。" },
    { file: "LINE_ALBUM_2026730_260730_15.jpg", kind: "田園詩稿", title: "楠西鄉村曲", note: "較自在的筆勢，寫下村路、果園與日常景色。" },
    { file: "LINE_ALBUM_2026730_260730_7.jpg", kind: "編輯手跡", title: "玉山頌・詩集編輯說明", note: "詩作與編輯文字並置，看見一部詩集成形前的思路。" },
    { file: "LINE_ALBUM_2026730_260730_4.jpg", kind: "手稿合頁", title: "耕舍手稿一隅", note: "以兩頁並陳作結，像離開書桌前最後回望一次。" },
  ];
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
        position: relative;
        isolation: isolate;
        font-family: "GS HanWang ShinSu", "STXingkai", "STKaiti", cursive !important;
        font-size: clamp(54px, 8.5vw, 132px) !important;
        font-weight: 400 !important;
        letter-spacing: .035em !important;
        line-height: 1 !important;
        color: #3a342d !important;
        background: none !important;
        -webkit-text-fill-color: currentColor !important;
      }
      .gs-calligraphy-hero::before {
        content: none;
        display: none;
      }
      @keyframes gs-ink-wash {
        0% { opacity:.1; transform:scale(.96, .9); }
        48% { opacity:.24; transform:scale(1.025, 1.04); }
        100% { opacity:.16; transform:scale(1.05, .98); }
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
      /* A varied running-script composition, shared by outlines and ink paths. */
      .gs-hero-vector-slot:nth-child(1) .gs-hero-svg { transform: translateY(-5%) rotate(-3deg) scale(1.08,1.14); }
      .gs-hero-vector-slot:nth-child(2) .gs-hero-svg { transform: translateY(4%) rotate(2deg) scale(.98,1.03); }
      .gs-hero-vector-slot:nth-child(3) .gs-hero-svg { transform: translateY(-1%) rotate(-2deg) scale(1.05,1.09); }
      .gs-hero-vector-slot:nth-child(4) .gs-hero-svg { transform: translateY(6%) rotate(2deg) scale(.96,1.02); }
      .gs-hero-vector-slot:nth-child(5) .gs-hero-svg { transform: translateY(-5%) rotate(-2deg) scale(1.05,1.16); }
      .gs-hero-stroke-reveal {
        fill: none;
        stroke: #302d28;
        stroke-width: 126;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-dasharray: 1;
        stroke-dashoffset: 1;
        opacity: .94;
        animation: gs-stroke-write var(--stroke-duration) cubic-bezier(.35,.04,.18,1) forwards;
        animation-delay: var(--stroke-delay);
      }
      .gs-hero-fill {
        fill: #302d28;
        opacity: 0;
        animation:
          gs-vector-fill .68s ease-out var(--fill-delay) forwards,
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
    if (document.documentElement.dataset.gsHeroReady === "1" && !document.querySelector("#hw-hero svg:not(.gs-hero-svg)")) {
      if (document.documentElement.dataset.gsHeroPlayRequested === "1") {
        document.querySelector("#hw-hero")?.classList.remove("gs-hero-waiting");
      }
      return;
    }
    const expectedCharacters = Array.from("耕舍詩文集");
    const hanziHero = document.querySelector("#hw-hero");
    const hanziSlots = Array.from(document.querySelectorAll("#hw-hero [data-hz]"));
    if (hanziHero && hanziSlots.length === expectedCharacters.length) {
      hanziHero.classList.add("gs-calligraphy-hero");
      if (document.documentElement.dataset.gsHeroPlayRequested !== "1") {
        hanziHero.classList.add("gs-hero-waiting");
      } else {
        hanziHero.classList.remove("gs-hero-waiting");
      }
      hanziHero.setAttribute("aria-label", "耕舍詩文集");
      const totalStrokeCount = hanziSlots.reduce((sum, slot, index) => {
        const character = slot.getAttribute("data-hz") || expectedCharacters[index];
        return sum + (window.GS_HERO_CALLIGRAPHY?.[character]?.medians?.length || 0);
      }, 0);
      const settledAt = 1 + totalStrokeCount * .105;
      let strokeCursor = 0;
      let inkTime = .15;
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
            const length = median.reduce((sum, point, i) => i ? sum + Math.hypot(point[0] - median[i - 1][0], point[1] - median[i - 1][1]) : 0, 0);
            const duration = Math.min(.46, Math.max(.16, length / 1900)) * .43;
            stroke.classList.add("gs-hero-stroke-reveal");
            stroke.setAttribute("d", medianPath);
            stroke.setAttribute("pathLength", "1");
            stroke.style.setProperty("--stroke-delay", `${inkTime.toFixed(2)}s`);
            stroke.style.setProperty("--stroke-duration", `${duration.toFixed(2)}s`);
            revealGroup.append(stroke);
            strokeCursor += 1;
            inkTime += duration * .86 + .008;
          });
          fill.classList.add("gs-hero-fill");
          fill.setAttribute("d", vector.path);
          fill.style.setProperty("--fill-delay", `${(inkTime + .08).toFixed(2)}s`);
          inkTime += .06;
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
      hanziHero.style.setProperty("--gs-seal-delay", `${(inkTime + .34).toFixed(2)}s`);
      // Reveal all five glyphs atomically. Until this point the critical
      // stylesheet keeps HanziWriter's pale outlines and partial strokes hidden.
      hanziHero.classList.add("gs-hero-rendered");
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
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: clamp(24px, 6vw, 72px);
        margin-top: 46px;
        padding-top: 24px;
        border-top: 1px solid rgba(69, 80, 65, .2);
      }
      .gs-next-work {
        appearance: none;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
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
        align-items: flex-end;
        text-align: right;
      }
      .gs-previous-work .gs-next-copy { text-align: left; }
      .gs-work-guides .gs-next-work:last-child:not(:first-child) .gs-next-copy { text-align: right; }
      .gs-next-label { display: none; }
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
        display: block;
        color: #758477;
        font-size: 26px;
        line-height: 1;
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
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          gap: 16px;
          overflow: visible;
          padding: 0;
        }
        .gs-collection-preview-list article {
          width: 100%;
          min-width: 0;
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
          gap: 18px;
          margin-top: 38px;
          padding-top: 20px;
        }
        .gs-next-work { gap: 7px; }
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
    const sectionTitle = Array.from(poemSection?.querySelectorAll("h2") || [])
      .find((item) => item.textContent.trim() === "\u4ed6\u7559\u4e0b\u7684\u5b57");
    if (sectionTitle) sectionTitle.textContent = "\u9078\u4e00\u90e8\u8a69\u96c6\uff0c\u6162\u6162\u8b80";
    Array.from(poemSection?.querySelectorAll("span, p") || []).forEach((item) => {
      const label = item.textContent.trim();
      if (label === "\u8a69\u6587\u5c55\u793a" || label.includes("\u8f15\u89f8\u8a69\u5361") || label.includes("\u9078\u64c7\u8a69\u96c6\uff0c\u5c55\u958b\u4f5c\u54c1\u76ee\u9304")) {
        item.remove();
      }
    });
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
      const previews = document.createElement("div");
      previews.className = "gs-collection-previews";
      home.append(previews);
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
      button.append(arrow, copy);
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

  function normalizeReaderEchoYears() {
    const yearMap = new Map([
      ["2024.04", "2026.04"],
      ["2024.05", "2026.05"],
      ["2024.06", "2026.06"],
    ]);
    document.querySelectorAll("#echoes *").forEach((element) => {
      if (element.children.length) return;
      const replacement = yearMap.get(element.textContent.trim());
      if (replacement) element.textContent = replacement;
    });
    try {
      const stored = JSON.parse(localStorage.getItem("gs_readerPoems") || "[]");
      let changed = false;
      const updated = stored.map((entry) => {
        if (!["r0a", "r0b", "r0c"].includes(entry.id)) return entry;
        const nextDate = yearMap.get(entry.date);
        if (!nextDate) return entry;
        changed = true;
        return { ...entry, date: nextDate };
      });
      if (changed) localStorage.setItem("gs_readerPoems", JSON.stringify(updated));
    } catch (_) {}
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
    const fallbackCount = 10;
    valueElement.textContent = new Intl.NumberFormat("zh-TW", {
      minimumIntegerDigits: 6,
      useGrouping: false,
    }).format(fallbackCount);
    try {
      const response = await fetch(endpoint, { cache: "no-store" });
      if (!response.ok) throw new Error("visitor counter unavailable");
      const data = await response.json();
      const count = Number(data.count ?? data.value ?? data);
      if (!Number.isFinite(count)) throw new Error("visitor count missing");
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
      let savedCount = 0;
      try {
        savedCount = Number(localStorage.getItem("gs_last_visit_count"));
      } catch (_) {}
      valueElement.textContent = Number.isFinite(savedCount) && savedCount > 0
        ? new Intl.NumberFormat("zh-TW", { minimumIntegerDigits: 6, useGrouping: false }).format(savedCount)
        : new Intl.NumberFormat("zh-TW", { minimumIntegerDigits: 6, useGrouping: false }).format(fallbackCount);
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
      <span class="gs-visitor-value" aria-live="polite">000010</span>
    `;
    if (footer) footer.append(counter);
    else document.body.append(counter);
    loadVisitorCount(counter.querySelector(".gs-visitor-value"));
  }

  function ensureManuscriptStyle() {
    if (document.getElementById("gs-manuscript-style")) return;
    const style = document.createElement("style");
    style.id = "gs-manuscript-style";
    style.textContent = `
      .gs-manuscripts {
        position: relative;
        padding: clamp(50px, 6vw, 78px) clamp(24px, 7vw, 92px);
        overflow: hidden;
        border-top: 1px solid rgba(72, 66, 56, .12);
        background:
          radial-gradient(circle at 16% 24%, rgba(120, 133, 112, .07), transparent 27%),
          linear-gradient(180deg, rgba(250, 247, 237, .25), rgba(222, 213, 193, .12));
        color: #37322c;
      }
      .gs-manuscript-inner {
        position: relative;
        z-index: 1;
        width: min(860px, 100%);
        margin: 0 auto;
      }
      .gs-manuscript-heading {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(260px, 420px);
        align-items: end;
        gap: clamp(28px, 5vw, 66px);
        margin-bottom: clamp(32px, 5vw, 50px);
      }
      .gs-manuscript-kicker {
        display: block;
        margin-bottom: 13px;
        color: #7d6a50;
        font-size: 12px;
        letter-spacing: .28em;
      }
      .gs-manuscript-heading h2 {
        margin: 0;
        font-family: var(--font-poetic, "Noto Serif TC", "Songti TC", serif) !important;
        font-size: clamp(30px, 3.6vw, 42px) !important;
        font-weight: 400;
        letter-spacing: .08em;
        line-height: 1.35;
      }
      .gs-manuscript-heading p {
        margin: 0;
        color: #766e62;
        font-size: 15px;
        letter-spacing: .06em;
        line-height: 2;
      }
      .gs-manuscript-stage {
        position: relative;
        width: min(510px, 100%);
        margin: 0 auto;
        perspective: 1600px;
      }
      .gs-manuscript-stage::before,
      .gs-manuscript-stage::after {
        content: "";
        position: absolute;
        inset: 12px 17px -12px;
        border: 1px solid rgba(77, 68, 56, .1);
        background: rgba(232, 224, 207, .68);
        box-shadow: 0 14px 34px rgba(69, 58, 43, .1);
      }
      .gs-manuscript-stage::before { transform: translate(-8px, 5px) rotate(-.55deg); }
      .gs-manuscript-stage::after { transform: translate(7px, 3px) rotate(.42deg); }
      .gs-manuscript-sheet {
        position: relative;
        z-index: 2;
        margin: 0;
        padding: clamp(18px, 3vw, 28px) clamp(18px, 3vw, 28px) 20px;
        border: 1px solid rgba(75, 66, 54, .14);
        background: rgba(246, 241, 226, .94);
        box-shadow: 0 24px 60px rgba(68, 56, 40, .16);
        transform-origin: 50% 50%;
        transition: transform .58s ease, opacity .54s ease;
        will-change: transform, opacity;
      }
      .gs-manuscript-sheet.is-slide-next {
        opacity: 0;
        transform: scale(.992);
      }
      .gs-manuscript-sheet.is-slide-prev {
        opacity: 0;
        transform: scale(.992);
      }
      .gs-manuscript-pen {
        position: absolute;
        z-index: 3;
        right: clamp(-250px, -18vw, -196px);
        bottom: 4px;
        width: clamp(205px, 21vw, 282px);
        height: auto;
        opacity: .88;
        filter:
          saturate(.7)
          sepia(.09)
          drop-shadow(2px 3px 1px rgba(54, 44, 34, .25))
          drop-shadow(6px 8px 5px rgba(54, 44, 34, .08));
        pointer-events: none;
        transform: rotate(5deg) scaleY(.965);
        transform-origin: center;
      }
      .gs-manuscript-image-button {
        appearance: none;
        display: block;
        width: 100%;
        padding: 0;
        overflow: hidden;
        border: 0;
        background: #e7dfcc;
        cursor: zoom-in;
      }
      .gs-manuscript-image {
        display: block;
        width: 100%;
        height: min(52vh, 450px);
        min-height: 295px;
        object-fit: contain;
        background: #e7dfcc;
        filter: saturate(.88) contrast(.98);
      }
      .gs-manuscript-sheet.is-settled .gs-manuscript-image {
        animation: gs-manuscript-drift 7s cubic-bezier(.2,.55,.35,1) both;
      }
      @keyframes gs-manuscript-drift {
        from { transform: scale(1); }
        to { transform: scale(1.018); }
      }
      .gs-manuscript-caption {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 18px;
        padding: 23px 2px 12px;
        text-align: left;
      }
      .gs-manuscript-kind {
        align-self: start;
        padding: 5px 8px;
        border: 1px solid rgba(91, 111, 87, .3);
        color: #657666;
        font-size: 11px;
        letter-spacing: .14em;
        white-space: nowrap;
      }
      .gs-manuscript-title {
        display: block;
        margin-bottom: 7px;
        font-family: serif;
        font-size: clamp(20px, 2.8vw, 28px);
        letter-spacing: .08em;
      }
      .gs-manuscript-note {
        display: block;
        color: #837a6e;
        font-size: 13px;
        letter-spacing: .04em;
        line-height: 1.7;
      }
      .gs-manuscript-controls {
        position: relative;
        z-index: 4;
        display: grid;
        grid-template-columns: 52px 1fr 52px;
        align-items: center;
        width: min(510px, 100%);
        margin: 24px auto 0;
      }
      .gs-manuscript-arrow {
        appearance: none;
        display: grid;
        width: 48px;
        height: 48px;
        place-items: center;
        border: 1px solid rgba(76, 88, 73, .24);
        border-radius: 50%;
        background: rgba(247, 243, 232, .54);
        color: #687969;
        cursor: pointer;
        font: 300 25px/1 serif;
        transition: transform .2s ease, background .2s ease;
      }
      .gs-manuscript-arrow:hover {
        background: rgba(247, 243, 232, .9);
        transform: translateX(var(--arrow-shift));
      }
      .gs-manuscript-prev { --arrow-shift: -3px; }
      .gs-manuscript-next { --arrow-shift: 3px; justify-self: end; }
      .gs-manuscript-count {
        display: block;
        color: #786f63;
        font-size: 12px;
        letter-spacing: .18em;
        text-align: center;
      }
      .gs-manuscript-status {
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        gap: 13px;
        padding: 0 12px;
      }
      .gs-manuscript-progress {
        position: relative;
        display: block;
        height: 1px;
        margin-top: 8px;
        overflow: hidden;
        background: rgba(83, 94, 79, .19);
      }
      .gs-manuscript-progress::after {
        content: "";
        position: absolute;
        inset: 0;
        background: #788878;
        transform: scaleX(0);
        transform-origin: left center;
      }
      .gs-manuscript-status.is-playing .gs-manuscript-progress::after {
        animation: gs-manuscript-progress 7s linear forwards;
      }
      @keyframes gs-manuscript-progress {
        to { transform: scaleX(1); }
      }
      .gs-manuscript-play {
        appearance: none;
        display: grid;
        width: 28px;
        height: 28px;
        place-items: center;
        padding: 0;
        border: 0;
        background: transparent;
        color: #6c796c;
        cursor: pointer;
        font: 14px/1 sans-serif;
      }
      .gs-manuscript-lightbox {
        position: fixed;
        inset: 0;
        z-index: 260;
        display: grid;
        grid-template-rows: 1fr auto;
        padding: clamp(52px, 7vw, 80px) clamp(14px, 4vw, 48px) 22px;
        background: rgba(30, 28, 24, .94);
        opacity: 0;
        visibility: hidden;
        transition: opacity .25s ease, visibility .25s ease;
      }
      .gs-manuscript-lightbox.is-open { opacity: 1; visibility: visible; }
      .gs-manuscript-lightbox img {
        align-self: center;
        justify-self: center;
        max-width: 100%;
        max-height: calc(100dvh - 126px);
        object-fit: contain;
        user-select: none;
      }
      .gs-manuscript-lightbox-close {
        appearance: none;
        position: absolute;
        top: 16px;
        right: 18px;
        width: 42px;
        height: 42px;
        border: 1px solid rgba(255,255,255,.28);
        border-radius: 50%;
        background: transparent;
        color: #fff;
        cursor: pointer;
        font: 300 27px/1 sans-serif;
      }
      .gs-manuscript-lightbox-caption {
        color: rgba(255,255,255,.76);
        font-size: 13px;
        letter-spacing: .12em;
        text-align: center;
      }
      .gs-manuscripts {
        --scene-one-opacity: 1;
        --scene-two-opacity: 0;
        --scene-three-opacity: 0;
        --scene-four-opacity: 0;
        --scene-paper-opacity: 0;
        --scene-one-scale: 1;
        --scene-two-scale: 1.02;
        --scene-three-scale: 1.02;
        --scene-four-scale: 1.02;
        --scene-paper-scale: 1;
        --scene-two-x: 0px;
        --scene-three-x: 0px;
        --scene-four-enter-x: 0px;
        --scene-turn-x: 0px;
        --scene-turn-y: 0px;
        --scene-turn-rotate: 0deg;
        --scene-y: 0px;
        --scene-focus: 0;
        --scene-brightness: .8;
        --shade-opacity: .42;
        --atmosphere-opacity: 0;
        --stage-reveal: 0;
        --stage-y: 70px;
        --stage-scale: .92;
        --reader-left: 112px;
        --reader-width: 390px;
        --reader-image-height: 320px;
        --reader-bottom: 108px;
        --reader-rotate: -.35deg;
        --reader-tilt: 56deg;
        --reader-z-rotate: -5deg;
        --reader-lift-scale: .78;
        --reader-controls-opacity: 0;
        --reader-controls-y: 12px;
        --reader-caption-opacity: 0;
        --intro-opacity: 1;
        --intro-y: 0px;
        min-height: 455svh;
        padding: 0;
        overflow: visible;
        border-top: 0;
        background: #292820;
        color: #f5edda;
      }
      .gs-manuscript-sticky {
        position: sticky;
        top: 0;
        height: 100svh;
        min-height: 620px;
        overflow: hidden;
        isolation: isolate;
        background: #27271f;
      }
      .gs-manuscript-backdrop {
        position: absolute;
        inset: -5%;
        z-index: -4;
        filter: saturate(.78) sepia(.08) brightness(var(--scene-brightness));
        transform-origin: 47% 48%;
        will-change: transform, filter, opacity;
      }
      .gs-manuscript-scene-far {
        background: url("assets/manuscript-pharmacy-scene.png?v=20260802b") center center / cover no-repeat;
        opacity: var(--scene-one-opacity);
        transform: translate3d(0, var(--scene-y), 0) scale(var(--scene-one-scale));
      }
      .gs-manuscript-scene-threshold {
        background: url("assets/manuscript-pharmacy-threshold.png?v=20260802a") center center / cover no-repeat;
        opacity: var(--scene-two-opacity);
        transform: translate3d(var(--scene-two-x), var(--scene-y), 0) scale(var(--scene-two-scale));
      }
      .gs-manuscript-scene-interior {
        background: url("assets/manuscript-pharmacy-interior.png?v=20260802a") center center / cover no-repeat;
        opacity: var(--scene-three-opacity);
        transform: translate3d(var(--scene-three-x), var(--scene-y), 0) scale(var(--scene-three-scale));
        transform-origin: 24% 68%;
      }
      .gs-manuscript-scene-desk {
        background: url("assets/manuscript-pharmacy-desk-turn.png?v=20260802b") center center / cover no-repeat;
        opacity: var(--scene-four-opacity);
        transform:
          translate3d(calc(var(--scene-four-enter-x) + var(--scene-turn-x)), calc(var(--scene-y) + var(--scene-turn-y)), 0)
          scale(var(--scene-four-scale))
          rotate(var(--scene-turn-rotate));
        transform-origin: 50% 70%;
      }
      .gs-manuscript-scene-paper {
        background: url("assets/manuscript-paper-closeup.png?v=20260802a") center center / cover no-repeat;
        opacity: var(--scene-paper-opacity);
        transform: translate3d(0, var(--scene-y), 0) scale(var(--scene-paper-scale));
        transform-origin: 50% 50%;
      }
      .gs-manuscript-shade {
        position: absolute;
        inset: 0;
        z-index: -3;
        background:
          linear-gradient(90deg,
            rgba(25, 24, 19, .08) 0%,
            rgba(25, 24, 19, .02) 46%,
            rgba(25, 24, 19, .34) 76%,
            rgba(20, 20, 16, .5) 100%),
          linear-gradient(180deg, rgba(18, 18, 14, .1), transparent 42%, rgba(18, 18, 14, .16));
        opacity: var(--shade-opacity);
        pointer-events: none;
      }
      .gs-manuscript-atmosphere {
        position: absolute;
        inset: 0;
        z-index: -2;
        pointer-events: none;
        background:
          radial-gradient(ellipse at 22% 72%, rgba(241, 216, 160, .12), transparent 32%),
          linear-gradient(112deg, transparent 18%, rgba(246, 227, 180, .08) 36%, transparent 54%);
        opacity: var(--atmosphere-opacity);
        mix-blend-mode: screen;
      }
      .gs-manuscript-intro {
        position: absolute;
        left: clamp(28px, 7vw, 112px);
        bottom: clamp(52px, 9vh, 96px);
        z-index: 2;
        max-width: 520px;
        opacity: var(--intro-opacity);
        transform: translateY(var(--intro-y));
        transition: opacity .12s linear;
        text-shadow: 0 2px 18px rgba(0, 0, 0, .72);
        pointer-events: none;
      }
      .gs-manuscript-kicker {
        color: rgba(247, 232, 198, .78);
      }
      .gs-manuscript-intro h2 {
        margin: 0;
        color: #fbf3df;
        font-family: var(--font-poetic, "Noto Serif TC", "Songti TC", serif) !important;
        font-size: clamp(32px, 4vw, 54px) !important;
        font-weight: 400;
        letter-spacing: .08em;
        line-height: 1.35;
      }
      .gs-manuscript-intro p {
        max-width: 36em;
        margin: 20px 0 0;
        color: rgba(250, 242, 222, .78);
        font-size: 14px;
        letter-spacing: .08em;
        line-height: 1.9;
      }
      .gs-manuscript-enter-cue {
        display: inline-flex;
        align-items: center;
        gap: 12px;
        margin-top: 22px;
        color: rgba(250, 242, 222, .62);
        font-size: 11px;
        letter-spacing: .2em;
      }
      .gs-manuscript-enter-cue::before {
        content: "";
        width: 34px;
        height: 1px;
        background: currentColor;
      }
      .gs-manuscript-inner {
        position: absolute;
        inset: 0;
        z-index: 2;
        width: 100%;
        margin: 0;
        opacity: var(--stage-reveal);
        transform: translate3d(0, var(--stage-y), 0) scale(var(--stage-scale));
        transform-origin: 25% 78%;
        pointer-events: none;
        will-change: transform, opacity;
      }
      @keyframes gs-manuscript-scene-far {
        0%, 18% { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
        38%, 100% { opacity: 0; transform: translate3d(0, -8px, 0) scale(1.07); }
      }
      @keyframes gs-manuscript-scene-threshold {
        0%, 17% { opacity: 0; transform: translate3d(0, 5px, 0) scale(1.02); }
        34%, 52% { opacity: 1; transform: translate3d(0, -3px, 0) scale(1.06); }
        72%, 100% { opacity: 0; transform: translate3d(0, -10px, 0) scale(1.11); }
      }
      @keyframes gs-manuscript-scene-interior {
        0%, 56% { opacity: 0; transform: translate3d(0, 8px, 0) scale(1.01); }
        78%, 100% { opacity: 1; transform: translate3d(0, 0, 0) scale(1.035); }
      }
      @keyframes gs-manuscript-shade {
        0%, 24% { opacity: .34; }
        78%, 100% { opacity: .72; }
      }
      @keyframes gs-manuscript-light-in {
        0%, 31% { opacity: 0; }
        74%, 100% { opacity: 1; }
      }
      @keyframes gs-manuscript-intro-away {
        0%, 18% { opacity: 1; transform: translateY(0); }
        32%, 100% { opacity: 0; transform: translateY(-18px); }
      }
      @keyframes gs-manuscript-stage-in {
        0%, 66% { opacity: 0; transform: translate3d(0, 58px, 0) scale(.94); }
        84%, 100% { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
      }
      .gs-manuscript-stage {
        position: absolute;
        left: var(--reader-left);
        bottom: var(--reader-bottom);
        width: var(--reader-width);
        margin: 0;
        perspective: 1600px;
        pointer-events: auto;
        transform:
          perspective(1500px)
          rotateX(var(--reader-tilt))
          rotateZ(var(--reader-z-rotate))
          scale(var(--reader-lift-scale));
        transform-origin: 50% 82%;
        will-change: left, width, bottom, transform;
      }
      .gs-manuscript-stage::before,
      .gs-manuscript-stage::after {
        opacity: .68;
      }
      .gs-manuscript-sheet {
        padding: clamp(12px, 1.5vw, 18px) clamp(12px, 1.5vw, 18px) 14px;
        border-color: rgba(83, 65, 41, .28);
        background: rgba(241, 232, 207, .96);
        box-shadow:
          0 3px 1px rgba(69, 46, 25, .16),
          0 22px 48px rgba(28, 23, 17, .38);
        transform: rotate(var(--reader-rotate)) perspective(1200px) rotateX(1.5deg);
      }
      .gs-manuscript-image {
        height: var(--reader-image-height);
        min-height: 220px;
      }
      .gs-manuscript-caption {
        max-height: calc(120px * var(--reader-caption-opacity));
        padding: calc(16px * var(--reader-caption-opacity)) 2px calc(6px * var(--reader-caption-opacity));
        overflow: hidden;
        opacity: var(--reader-caption-opacity);
        transform: translateY(calc(10px * (1 - var(--reader-caption-opacity))));
      }
      .gs-manuscript-title {
        color: #3d352c;
        font-size: clamp(18px, 2vw, 24px);
      }
      .gs-manuscript-note { color: #756b5f; }
      .gs-manuscript-pen {
        right: clamp(-190px, -14vw, -148px);
        bottom: -10px;
        width: clamp(190px, 18vw, 250px);
        opacity: 0;
        transform: rotate(7deg) scaleY(.965);
      }
      .gs-manuscript-controls {
        position: absolute;
        left: var(--reader-left);
        bottom: clamp(24px, 4vh, 44px);
        width: var(--reader-width);
        margin: 0;
        color: #eee4cd;
        pointer-events: auto;
        opacity: var(--reader-controls-opacity);
        transform: translateY(var(--reader-controls-y));
        transition: opacity .12s linear;
      }
      .gs-manuscript-arrow {
        border-color: rgba(246, 236, 214, .34);
        background: rgba(35, 31, 24, .48);
        color: #f2e7cf;
        backdrop-filter: blur(8px);
      }
      .gs-manuscript-arrow:hover { background: rgba(48, 43, 33, .72); }
      .gs-manuscript-count { color: rgba(245, 235, 213, .82); }
      .gs-manuscript-progress { background: rgba(245, 235, 213, .24); }
      .gs-manuscript-progress::after { background: #d7c5a2; }
      .gs-manuscript-play { color: #eee3ca; }
      body.gs-manuscript-modal-open { overflow: hidden !important; }
      .gs-site-masthead {
        transition: background-color .45s ease, box-shadow .45s ease, border-color .45s ease;
      }
      body.gs-manuscript-nav-active .gs-site-masthead {
        position: sticky !important;
        top: 0 !important;
        z-index: 240 !important;
        isolation: isolate;
        border-bottom-color: rgba(37, 56, 45, calc(.34 * var(--nav-canvas-opacity, 0))) !important;
        background: transparent !important;
        box-shadow: 0 6px 24px rgba(24, 35, 28, calc(.18 * var(--nav-canvas-opacity, 0))) !important;
      }
      body.gs-manuscript-nav-active .gs-site-masthead::before {
        content: "";
        position: absolute;
        inset: 0;
        z-index: -1;
        pointer-events: none;
        background:
          linear-gradient(180deg, rgba(255,255,255,.025), rgba(24,48,35,.12)),
          url("assets/manuscript-nav-awning.png?v=20260802a") center center / cover no-repeat;
        opacity: var(--nav-canvas-opacity, 0);
        transition: opacity .18s linear;
      }
      body.gs-manuscript-nav-active .gs-site-masthead a,
      body.gs-manuscript-nav-active .gs-site-masthead button,
      body.gs-manuscript-nav-active .gs-site-masthead .gs-calligraphy-brand {
        color: rgba(241, 235, 211, .88) !important;
        -webkit-text-fill-color: currentColor !important;
        text-shadow:
          0 1px 0 rgba(31, 50, 39, .34),
          0 0 1px rgba(239, 233, 207, .42) !important;
        opacity: var(--nav-ink-opacity, 0) !important;
        transition: opacity .22s ease !important;
      }
      body.gs-manuscript-nav-active .gs-site-masthead a {
        letter-spacing: .08em;
      }
      @media (max-width: 700px) {
        .gs-manuscripts { min-height: 420svh; }
        .gs-manuscript-sticky { min-height: 560px; }
        .gs-manuscript-backdrop {
          inset: -4%;
          transform-origin: 51% 51%;
        }
        .gs-manuscript-scene-far { background-position: 53% center; }
        .gs-manuscript-scene-threshold { background-position: 55% center; }
        .gs-manuscript-scene-interior { background-position: 29% center; }
        .gs-manuscript-scene-desk { background-position: 50% center; }
        .gs-manuscript-scene-paper { background-position: 50% center; }
        .gs-manuscript-shade {
          background:
            linear-gradient(180deg, rgba(20, 19, 15, .18), transparent 34%, rgba(20, 19, 15, .5) 100%),
            linear-gradient(90deg, transparent 38%, rgba(20, 19, 15, .4) 100%);
        }
        .gs-manuscript-intro {
          left: 22px;
          right: 22px;
          bottom: 62px;
          text-align: left;
        }
        .gs-manuscript-intro h2 {
          font-size: clamp(28px, 8vw, 34px) !important;
          white-space: nowrap;
        }
        .gs-manuscript-intro p { font-size: 13px; }
        .gs-manuscript-stage {
          bottom: 104px;
        }
        .gs-manuscript-sheet { padding: 13px 13px 16px; }
        .gs-manuscript-image {
          height: var(--reader-image-height);
          min-height: 230px;
        }
        .gs-manuscript-pen {
          right: -54px;
          bottom: -50px;
          width: 138px;
          opacity: 0;
          transform: rotate(8deg) scaleY(.965);
        }
        .gs-manuscript-caption {
          display: block;
          padding: 18px 4px 10px;
        }
        .gs-manuscript-kind {
          display: inline-block;
          margin-bottom: 12px;
        }
        .gs-manuscript-title { font-size: 22px; }
        .gs-manuscript-note { display: none; }
        .gs-manuscript-controls {
          bottom: 28px;
        }
      }
      @media (prefers-reduced-motion: reduce) {
        .gs-manuscript-sheet,
        .gs-manuscript-lightbox { transition-duration: .01ms !important; }
        .gs-manuscript-sheet.is-settled .gs-manuscript-image,
        .gs-manuscript-status.is-playing .gs-manuscript-progress::after {
          animation: none !important;
        }
        .gs-manuscripts {
          --scene-one-opacity: 0 !important;
          --scene-two-opacity: 0 !important;
          --scene-three-opacity: 0 !important;
          --scene-four-opacity: 1 !important;
          --scene-paper-opacity: 0 !important;
          --scene-one-scale: 1 !important;
          --scene-two-scale: 1 !important;
          --scene-three-scale: 1.02 !important;
          --scene-four-scale: 1.02 !important;
          --scene-paper-scale: 1 !important;
          --scene-two-x: 0px !important;
          --scene-three-x: 0px !important;
          --scene-four-enter-x: 0px !important;
          --scene-turn-x: 0px !important;
          --scene-turn-y: 0px !important;
          --scene-turn-rotate: 0deg !important;
          --reader-tilt: 0deg !important;
          --reader-z-rotate: 0deg !important;
          --reader-lift-scale: 1 !important;
          --reader-controls-opacity: 1 !important;
          --reader-controls-y: 0px !important;
          --reader-caption-opacity: 1 !important;
          --scene-y: 0px !important;
          --scene-focus: 1 !important;
          --scene-brightness: .88 !important;
          --shade-opacity: 1 !important;
          --atmosphere-opacity: 1 !important;
          --stage-reveal: 1 !important;
          --stage-y: 0px !important;
          --stage-scale: 1 !important;
          --intro-opacity: 0 !important;
          --intro-y: -18px !important;
        }
        .gs-manuscript-backdrop,
        .gs-manuscript-shade,
        .gs-manuscript-atmosphere,
        .gs-manuscript-intro,
        .gs-manuscript-inner {
          animation: none !important;
        }
      }
    `;
    document.head.append(style);
  }

  function manuscriptImagePath(page) {
    return `assets/manuscripts/${page.file}`;
  }

  function preloadManuscripts() {
    [-1, 1].forEach((offset) => {
      const page = manuscriptPages[(manuscriptIndex + offset + manuscriptPages.length) % manuscriptPages.length];
      const image = new Image();
      image.src = manuscriptImagePath(page);
    });
  }

  function renderManuscriptPage(section) {
    const page = manuscriptPages[manuscriptIndex];
    const image = section.querySelector(".gs-manuscript-image");
    image.src = manuscriptImagePath(page);
    image.alt = `${page.title}手稿`;
    section.querySelector(".gs-manuscript-kind").textContent = page.kind;
    section.querySelector(".gs-manuscript-title").textContent = page.title;
    section.querySelector(".gs-manuscript-note").textContent = page.note;
    section.querySelector(".gs-manuscript-count").textContent = `其 ${manuscriptIndex + 1}　／　共 ${manuscriptPages.length} 頁`;
    section.querySelector(".gs-manuscript-image-button").setAttribute("aria-label", `放大查看${page.title}`);
    const sheet = section.querySelector(".gs-manuscript-sheet");
    sheet.classList.remove("is-settled");
    void sheet.offsetWidth;
    sheet.classList.add("is-settled");
    preloadManuscripts();
  }

  function scheduleManuscriptAutoplay(section) {
    window.clearTimeout(manuscriptAutoplayTimer);
    const status = section.querySelector(".gs-manuscript-status");
    const playButton = section.querySelector(".gs-manuscript-play");
    const lightboxOpen = section.querySelector(".gs-manuscript-lightbox")?.classList.contains("is-open");
    status.classList.toggle("is-playing", !manuscriptAutoplayPaused);
    playButton.textContent = manuscriptAutoplayPaused ? "▶" : "Ⅱ";
    playButton.setAttribute("aria-label", manuscriptAutoplayPaused ? "播放手稿幻燈片" : "暫停手稿幻燈片");
    if (manuscriptAutoplayPaused || lightboxOpen || !manuscriptInView) {
      status.classList.remove("is-playing");
      return;
    }
    status.classList.remove("is-playing");
    void status.offsetWidth;
    status.classList.add("is-playing");
    manuscriptAutoplayTimer = window.setTimeout(() => changeManuscript(section, 1), 7000);
  }

  function changeManuscript(section, direction) {
    if (manuscriptTransitioning) return;
    manuscriptTransitioning = true;
    window.clearTimeout(manuscriptAutoplayTimer);
    const sheet = section.querySelector(".gs-manuscript-sheet");
    sheet.classList.remove("is-settled");
    sheet.classList.add(direction > 0 ? "is-slide-next" : "is-slide-prev");
    window.setTimeout(() => {
      manuscriptIndex = (manuscriptIndex + direction + manuscriptPages.length) % manuscriptPages.length;
      renderManuscriptPage(section);
      sheet.classList.remove("is-slide-next", "is-slide-prev");
      sheet.style.opacity = "0";
      sheet.style.transform = "scale(1.006)";
      requestAnimationFrame(() => requestAnimationFrame(() => {
        sheet.style.opacity = "";
        sheet.style.transform = "";
        window.setTimeout(() => {
          manuscriptTransitioning = false;
          scheduleManuscriptAutoplay(section);
        }, 580);
      }));
    }, 540);
  }

  function openManuscriptLightbox(section) {
    window.clearTimeout(manuscriptAutoplayTimer);
    section.querySelector(".gs-manuscript-status")?.classList.remove("is-playing");
    const page = manuscriptPages[manuscriptIndex];
    const lightbox = section.querySelector(".gs-manuscript-lightbox");
    const image = lightbox.querySelector("img");
    image.src = manuscriptImagePath(page);
    image.alt = `${page.title}手稿放大圖`;
    lightbox.querySelector(".gs-manuscript-lightbox-caption").textContent = `${page.kind}・${page.title}`;
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("gs-manuscript-modal-open");
    lightbox.querySelector(".gs-manuscript-lightbox-close").focus();
  }

  function closeManuscriptLightbox(section) {
    const lightbox = section.querySelector(".gs-manuscript-lightbox");
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("gs-manuscript-modal-open");
    scheduleManuscriptAutoplay(section);
  }

  function setupManuscriptInteractions(section) {
    if (section.dataset.gsBound === "1") return;
    section.dataset.gsBound = "1";
    section.querySelector(".gs-manuscript-prev").addEventListener("click", () => changeManuscript(section, -1));
    section.querySelector(".gs-manuscript-next").addEventListener("click", () => changeManuscript(section, 1));
    section.querySelector(".gs-manuscript-image-button").addEventListener("click", () => openManuscriptLightbox(section));
    section.querySelector(".gs-manuscript-play").addEventListener("click", () => {
      manuscriptAutoplayPaused = !manuscriptAutoplayPaused;
      scheduleManuscriptAutoplay(section);
    });
    const lightbox = section.querySelector(".gs-manuscript-lightbox");
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox || event.target.closest(".gs-manuscript-lightbox-close")) {
        closeManuscriptLightbox(section);
      }
    });

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries) => {
        manuscriptInView = entries.some((entry) => entry.isIntersecting && entry.intersectionRatio >= .2);
        if (manuscriptInView) {
          scheduleManuscriptAutoplay(section);
        } else {
          window.clearTimeout(manuscriptAutoplayTimer);
          section.querySelector(".gs-manuscript-status")?.classList.remove("is-playing");
        }
      }, { threshold: [0, .2, .45] });
      observer.observe(section.querySelector(".gs-manuscript-stage"));
    } else {
      manuscriptInView = true;
      scheduleManuscriptAutoplay(section);
    }

    document.addEventListener("keydown", (event) => {
      if (!document.body.contains(section)) return;
      const isOpen = lightbox.classList.contains("is-open");
      if (event.key === "Escape" && isOpen) closeManuscriptLightbox(section);
      if (!isOpen) return;
      if (event.key === "ArrowLeft") changeManuscript(section, -1);
      if (event.key === "ArrowRight") changeManuscript(section, 1);
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        window.setTimeout(() => openManuscriptLightbox(section), 580);
      }
    });
  }

  function setupManuscriptScroll(section) {
    if (manuscriptScrollBoundSections.has(section)) return;
    manuscriptScrollBoundSections.add(section);
    section.dataset.gsScrollBound = "1";
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const clamp = (value, minimum = 0, maximum = 1) => Math.min(maximum, Math.max(minimum, value));
    const smoothstep = (value) => {
      const x = clamp(value);
      return x * x * (3 - (2 * x));
    };
    const render = () => {
      if (!section.isConnected) return;
      const rect = section.getBoundingClientRect();
      const navActive = rect.top <= 70 && rect.bottom > 70;
      document.body.classList.toggle("gs-manuscript-nav-active", navActive);
      const distance = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = clamp(-rect.top / distance);
      const masthead = document.querySelector(".gs-site-masthead");
      const navCanvasOpacity = navActive ? (prefersReducedMotion.matches ? 1 : smoothstep(progress / .16)) : 0;
      const navInkOpacity = navActive ? (prefersReducedMotion.matches ? 1 : smoothstep((progress - .08) / .16)) : 0;
      masthead?.style.setProperty("--nav-canvas-opacity", navCanvasOpacity.toFixed(4));
      masthead?.style.setProperty("--nav-ink-opacity", navInkOpacity.toFixed(4));
      if (prefersReducedMotion.matches) return;
      const focus = smoothstep((progress - .12) / .7);
      const reveal = smoothstep((progress - .955) / .035);
      const introOpacity = 1 - smoothstep(progress / .28);
      const sceneOneOpacity = 1 - smoothstep((progress - .18) / .2);
      const sceneTwoOpacity = smoothstep((progress - .16) / .18) * (1 - smoothstep((progress - .48) / .13));
      const sceneThreeOpacity = smoothstep((progress - .48) / .13) * (1 - smoothstep((progress - .67) / .11));
      const sceneFourOpacity = smoothstep((progress - .68) / .11) * (1 - smoothstep((progress - .82) / .09));
      const scenePaperOpacity = smoothstep((progress - .82) / .08) * (1 - smoothstep((progress - .94) / .025));
      const sceneTurnTransition = smoothstep((progress - .64) / .16);
      const cameraTurn = smoothstep((progress - .78) / .08);
      const readerFocus = smoothstep((progress - .958) / .04);
      const captionFocus = smoothstep((progress - .982) / .015);
      const controlsFocus = smoothstep((progress - .986) / .012);
      const sceneOneScale = 1 + (.07 * smoothstep(progress / .4));
      const sceneTwoScale = 1.02 + (.09 * smoothstep((progress - .16) / .56));
      const sceneThreeScale = 1.01 + (.055 * smoothstep((progress - .48) / .3));
      const sceneFourScale = 1.01 + (.025 * smoothstep((progress - .68) / .32)) + (.1 * cameraTurn);
      const scenePaperScale = 1 + (.045 * smoothstep((progress - .84) / .1));
      const sceneTwoX = window.innerWidth * -.018 * smoothstep((progress - .46) / .16);
      const sceneThreeX = window.innerWidth * -.035 * sceneTurnTransition;
      const sceneFourEnterX = window.innerWidth * .045 * (1 - sceneTurnTransition);
      const sceneTurnX = window.innerWidth * .018 * cameraTurn;
      const sceneTurnY = window.innerHeight * -.035 * cameraTurn;
      const sceneTurnRotate = -.32 * cameraTurn;
      const verticalShift = -10 * focus;
      const brightness = .8 + (.08 * focus);
      const shadeOpacity = .42 + (.58 * focus);
      const stageY = 24 * (1 - reveal);
      const stageScale = .97 + (.03 * reveal);
      const introY = -18 * (1 - introOpacity);
      const viewportWidth = window.innerWidth;
      const startWidth = viewportWidth <= 700 ? Math.min(viewportWidth * .9, 460) : Math.min(650, viewportWidth * .5);
      const finalWidth = Math.min(viewportWidth <= 700 ? 510 : 720, viewportWidth - (viewportWidth <= 700 ? 28 : 64));
      const startLeft = (viewportWidth - startWidth) / 2;
      const finalLeft = (viewportWidth - finalWidth) / 2;
      const readerLeft = startLeft + ((finalLeft - startLeft) * readerFocus);
      const readerWidth = startWidth + ((finalWidth - startWidth) * readerFocus);
      const startImageHeight = Math.min(window.innerHeight * (viewportWidth <= 700 ? .54 : .66), viewportWidth <= 700 ? 440 : 610);
      const finalImageHeight = Math.min(window.innerHeight * (viewportWidth <= 700 ? .5 : .54), viewportWidth <= 700 ? 420 : 500);
      const readerImageHeight = startImageHeight + ((finalImageHeight - startImageHeight) * readerFocus);
      const startBottom = viewportWidth <= 700 ? 90 : 82;
      const finalBottom = viewportWidth <= 700 ? 96 : 96;
      const readerBottom = startBottom + ((finalBottom - startBottom) * readerFocus);
      section.style.setProperty("--scene-one-opacity", sceneOneOpacity.toFixed(4));
      section.style.setProperty("--scene-two-opacity", sceneTwoOpacity.toFixed(4));
      section.style.setProperty("--scene-three-opacity", sceneThreeOpacity.toFixed(4));
      section.style.setProperty("--scene-four-opacity", sceneFourOpacity.toFixed(4));
      section.style.setProperty("--scene-paper-opacity", scenePaperOpacity.toFixed(4));
      section.style.setProperty("--scene-one-scale", sceneOneScale.toFixed(4));
      section.style.setProperty("--scene-two-scale", sceneTwoScale.toFixed(4));
      section.style.setProperty("--scene-three-scale", sceneThreeScale.toFixed(4));
      section.style.setProperty("--scene-four-scale", sceneFourScale.toFixed(4));
      section.style.setProperty("--scene-paper-scale", scenePaperScale.toFixed(4));
      section.style.setProperty("--scene-two-x", `${sceneTwoX.toFixed(2)}px`);
      section.style.setProperty("--scene-three-x", `${sceneThreeX.toFixed(2)}px`);
      section.style.setProperty("--scene-four-enter-x", `${sceneFourEnterX.toFixed(2)}px`);
      section.style.setProperty("--scene-turn-x", `${sceneTurnX.toFixed(2)}px`);
      section.style.setProperty("--scene-turn-y", `${sceneTurnY.toFixed(2)}px`);
      section.style.setProperty("--scene-turn-rotate", `${sceneTurnRotate.toFixed(3)}deg`);
      section.style.setProperty("--reader-left", `${readerLeft.toFixed(2)}px`);
      section.style.setProperty("--reader-width", `${readerWidth.toFixed(2)}px`);
      section.style.setProperty("--reader-image-height", `${readerImageHeight.toFixed(2)}px`);
      section.style.setProperty("--reader-bottom", `${readerBottom.toFixed(2)}px`);
      section.style.setProperty("--reader-rotate", `${(-.18 * (1 - readerFocus)).toFixed(3)}deg`);
      section.style.setProperty("--reader-tilt", `${(7 * (1 - readerFocus)).toFixed(2)}deg`);
      section.style.setProperty("--reader-z-rotate", `${(-.8 * (1 - readerFocus)).toFixed(2)}deg`);
      section.style.setProperty("--reader-lift-scale", `${(.96 + (.04 * readerFocus)).toFixed(4)}`);
      section.style.setProperty("--reader-caption-opacity", captionFocus.toFixed(4));
      section.style.setProperty("--reader-controls-opacity", controlsFocus.toFixed(4));
      section.style.setProperty("--reader-controls-y", `${(12 * (1 - controlsFocus)).toFixed(2)}px`);
      section.style.setProperty("--scene-y", `${verticalShift.toFixed(2)}px`);
      section.style.setProperty("--scene-focus", focus.toFixed(4));
      section.style.setProperty("--scene-brightness", brightness.toFixed(4));
      section.style.setProperty("--shade-opacity", shadeOpacity.toFixed(4));
      section.style.setProperty("--atmosphere-opacity", focus.toFixed(4));
      section.style.setProperty("--stage-reveal", reveal.toFixed(4));
      section.style.setProperty("--stage-y", `${stageY.toFixed(2)}px`);
      section.style.setProperty("--stage-scale", stageScale.toFixed(4));
      section.style.setProperty("--intro-opacity", introOpacity.toFixed(4));
      section.style.setProperty("--intro-y", `${introY.toFixed(2)}px`);
    };
    const requestRender = render;
    window.addEventListener("scroll", requestRender, { passive: true });
    document.addEventListener("scroll", requestRender, { passive: true, capture: true });
    document.scrollingElement?.addEventListener("scroll", requestRender, { passive: true });
    window.addEventListener("resize", requestRender, { passive: true });
    prefersReducedMotion.addEventListener?.("change", requestRender);
    const scrollSafetyTimer = window.setInterval(() => {
      if (!section.isConnected) {
        document.body.classList.remove("gs-manuscript-nav-active");
        window.clearInterval(scrollSafetyTimer);
        return;
      }
      const rect = section.getBoundingClientRect();
      if (rect.bottom > -window.innerHeight && rect.top < window.innerHeight * 1.5) render();
    }, 50);
    render();
  }

  function ensureManuscriptNav() {
    const awardLink = document.querySelector('header nav a[href="#awards"], nav a[href="#awards"]');
    awardLink?.closest("header")?.classList.add("gs-site-masthead");
    if (!awardLink || document.querySelector('a[href="#manuscripts"]')) return;
    const link = awardLink.cloneNode(false);
    link.href = "#manuscripts";
    link.textContent = "手稿";
    awardLink.before(link);
  }

  function mountPharmacyPortal() {
    const awards = document.querySelector("#awards");
    if (!awards || document.querySelector("#pharmacy-memory")) return;

    if (!document.querySelector("#gs-pharmacy-portal-style")) {
      const style = document.createElement("style");
      style.id = "gs-pharmacy-portal-style";
      style.textContent = `
        .gs-pharmacy-portal { position:relative; min-height:min(100svh,56.25vw); overflow:hidden; display:grid; place-items:center; isolation:isolate; background:#24271f; color:#f2e9d2; }
        .gs-pharmacy-portal::before { content:""; position:absolute; inset:0; z-index:-2; background:url("pharmacy/assets/pharmacy-exterior.png?v=20260919d") center/114% auto no-repeat; filter:saturate(.82) brightness(.9); transform:scale(1.004); transition:transform 1.4s cubic-bezier(.2,.8,.2,1),filter .8s; }
        .gs-pharmacy-portal::after { content:""; position:absolute; inset:0; z-index:-1; background:linear-gradient(90deg,rgba(18,20,16,.42),rgba(18,20,16,.08) 58%,rgba(18,20,16,.22)),linear-gradient(0deg,rgba(16,18,14,.3),transparent 58%); }
        .gs-pharmacy-portal:hover::before { transform:scale(1.014); filter:saturate(.86) brightness(.94); }
        .gs-pharmacy-portal-inner { width:min(1120px,88vw); padding:clamp(54px,9vw,110px) 0; }
        .gs-pharmacy-portal-kicker { display:block; margin-bottom:18px; color:#d8c69d; font-size:12px; letter-spacing:.3em; }
        .gs-pharmacy-portal h2 { max-width:620px; margin:0 0 18px; color:#f3ead5; font:400 clamp(38px,6vw,76px)/1.24 var(--font-poetic,"DFKai-SB",serif); letter-spacing:.08em; }
        .gs-pharmacy-portal p { max-width:880px; margin:0 0 30px; color:rgba(242,233,211,.86); font-size:clamp(34px,3.6vw,52px); line-height:1.6; letter-spacing:.055em; }
        .gs-pharmacy-portal-link { display:inline-flex; align-items:center; gap:16px; padding:13px 0; border-bottom:1px solid rgba(235,218,178,.65); color:#f3e7cb; text-decoration:none; font-size:14px; letter-spacing:.18em; transition:gap .3s,color .3s; }
        .gs-pharmacy-portal-link::after { content:"→"; font-size:22px; font-weight:300; }
        .gs-pharmacy-portal-link:hover,.gs-pharmacy-portal-link:focus-visible { gap:24px; color:#fff7e4; }
        @media(max-width:680px){ .gs-pharmacy-portal{min-height:520px;place-items:end center}.gs-pharmacy-portal::before{background-size:auto 100%;background-position:54% center}.gs-pharmacy-portal-inner{padding:70px 0}.gs-pharmacy-portal p{font-size:32px;line-height:1.6} }
      `;
      document.head.append(style);
    }

    const section = document.createElement("section");
    section.id = "pharmacy-memory";
    section.className = "gs-pharmacy-portal";
    section.innerHTML = `
      <div class="gs-pharmacy-portal-inner">
        <p>一冊詩集、幾張獎狀與留在抽屜裡的回聲，都藏在昔日藥房的光影之中。</p>
        <a class="gs-pharmacy-portal-link" href="pharmacy/index.html?entry=interior" target="_top">進入宗泰藥房</a>
      </div>`;
    awards.before(section);

    const awardLink = document.querySelector('header nav a[href="#awards"], nav a[href="#awards"]');
    if (awardLink && !document.querySelector('a[href="#pharmacy-memory"]')) {
      const link = awardLink.cloneNode(false);
      link.href = "#pharmacy-memory";
      link.textContent = "藥房";
      awardLink.before(link);
    }
  }

  function ensureMemoryExperienceStyle() {
    if (document.querySelector("#gs-memory-experience-style")) return;
    const style = document.createElement("style");
    style.id = "gs-memory-experience-style";
    style.textContent = `
      .gs-ink-hero-stage { position:relative !important; isolation:isolate; overflow:hidden !important; }
      .gs-ink-hero-stage::before,
      .gs-ink-hero-stage::after { content:""; position:absolute; inset:-14%; pointer-events:none; }
      .gs-ink-hero-stage::before {
        z-index:0;
        background:
          radial-gradient(ellipse 43% 27% at 6% 30%, rgba(86,104,101,.23) 0 24%, rgba(108,123,117,.12) 43%, transparent 72%),
          radial-gradient(ellipse 52% 28% at 91% 25%, rgba(78,99,97,.21) 0 20%, rgba(111,128,122,.1) 45%, transparent 74%),
          radial-gradient(ellipse 62% 27% at 48% 88%, rgba(93,112,106,.17) 0 17%, rgba(117,132,124,.08) 43%, transparent 75%);
        mix-blend-mode:normal;
        filter:blur(22px) saturate(.7);
        opacity:.78;
        transform:scale(1.03);
        animation:gs-ink-breathe 13s ease-in-out infinite alternate;
      }
      .gs-ink-hero-stage::after {
        z-index:1;
        background:
          radial-gradient(ellipse at 50% 48%, rgba(249,245,233,.24) 0 26%, transparent 58%),
          linear-gradient(105deg, rgba(255,251,239,.3), transparent 36% 68%, rgba(255,250,236,.24));
        mix-blend-mode:screen;
        animation:gs-paper-light 10s ease-in-out infinite alternate;
      }
      .gs-ink-hero-stage > * { position:relative; z-index:2; }
      .gs-ink-hero-stage #hw-hero { z-index:3; filter:drop-shadow(0 14px 18px rgba(47,40,30,.12)); transform:translateZ(0); }
      .gs-ink-hero-stage .gs-calligraphy-hero::before { display:none !important; }
      .gs-plum-ink-flow { position:absolute; inset:0; width:100%; height:100%; z-index:1; pointer-events:none; overflow:hidden; opacity:.78; mix-blend-mode:multiply; }
      .gs-plum-ink-flow .gs-ink-blossom { --gs-plum-delay:0s; color:rgba(61,71,62,.22); opacity:1; transform-box:fill-box; transform-origin:center; animation:gs-plum-drift 12.8s ease-in-out var(--gs-plum-delay) infinite; }
      .gs-plum-ink-flow .gs-plum-one { --gs-plum-delay:-1s; }
      .gs-plum-ink-flow .gs-plum-two { --gs-plum-delay:-9.2s; }
      .gs-plum-ink-flow .gs-plum-three { --gs-plum-delay:-4.6s; }
      .gs-plum-ink-flow .gs-plum-four { --gs-plum-delay:-11.1s; }
      .gs-plum-ink-flow .gs-plum-five { --gs-plum-delay:-7s; }
      .gs-plum-ink-flow .gs-plum-six { --gs-plum-delay:-2.8s; }
      .gs-plum-ink-flow .gs-plum-seven { --gs-plum-delay:-10.1s; }
      .gs-plum-ink-flow .gs-ink-blossom ellipse { fill:currentColor; opacity:0; rx:2px; ry:2px; filter:url(#gs-plum-bloom-soft); animation:gs-plum-petal-spread 12.8s cubic-bezier(.2,.72,.25,1) var(--gs-plum-delay) infinite; }
      .gs-plum-ink-flow .gs-ink-blossom circle { fill:rgba(41,52,43,.38); r:1px; opacity:0; filter:url(#gs-plum-bloom-soft); animation:gs-plum-drop-spread 12.8s ease-out var(--gs-plum-delay) infinite; }
      @keyframes gs-ink-breathe { from{transform:translate3d(-1%,.35%,0) scale(1.02);filter:blur(20px) saturate(.68)} to{transform:translate3d(1.2%,-.55%,0) scale(1.065);filter:blur(25px) saturate(.78)} }
      @keyframes gs-paper-light { from{opacity:.68;transform:translateX(-1%)} to{opacity:1;transform:translateX(1%)} }
      @keyframes gs-plum-drift { 0%,100%{transform:translate3d(-7px,10px,0) rotate(-3deg) scale(.94)} 50%{transform:translate3d(7px,-8px,0) rotate(2deg) scale(1.02)} }
      @keyframes gs-plum-drop-spread { 0%,3%{opacity:0;r:1px;filter:blur(0)} 7%{opacity:.78;r:7px;filter:blur(.2px)} 13%{opacity:.68;r:10px;filter:blur(2px)} 24%{opacity:.38;r:8px;filter:blur(1px)} 67%{opacity:.28;r:8px} 86%,100%{opacity:0;r:6px;filter:blur(4px)} }
      @keyframes gs-plum-petal-spread { 0%,9%{opacity:0;rx:2px;ry:2px;filter:blur(5px)} 15%{opacity:.2;rx:7px;ry:9px;filter:blur(4px)} 29%{opacity:.62;rx:17px;ry:27px;filter:blur(2px)} 42%,67%{opacity:.78;rx:19px;ry:31px;filter:blur(.3px)} 86%,100%{opacity:0;rx:22px;ry:34px;filter:blur(5px)} }

      .gs-plum-memory { display:none !important; }
      .gs-plum-memory::before { content:""; position:absolute; left:10%; top:50%; width:24%; height:1px; background:linear-gradient(90deg,rgba(111,98,73,.22),transparent); }
      .gs-plum-memory-kicker { position:absolute; left:10%; top:calc(50% - 42px); margin:0; color:#8b7c63; font-size:11px; letter-spacing:.28em; opacity:calc(.28 + var(--gs-plum-photo) * .72); }
      .gs-plum-branch { position:absolute; inset:0 0 0 auto; width:min(78vw,1080px); height:100%; overflow:visible; }
      .gs-plum-lineart { position:absolute; inset:0; width:100%; height:100%; opacity:var(--gs-plum-line); transition:opacity .12s linear; }
      .gs-plum-lineart path { fill:none; stroke:#756d61; stroke-width:3.2; stroke-linecap:round; stroke-linejoin:round; }
      .gs-plum-lineart .gs-plum-twig { stroke-width:1.45; opacity:.72; }
      .gs-plum-lineart .gs-plum-blossom ellipse { fill:#eee7d7; stroke:#8f8779; stroke-width:1.3; }
      .gs-plum-lineart .gs-plum-blossom circle { fill:#b3a88f; stroke:none; }
      .gs-plum-photo-bloom { position:absolute; width:clamp(104px,11.5vw,156px); aspect-ratio:1; opacity:var(--gs-plum-photo); background:url("assets/plum-blossom-closeup.jpg?v=20260809a") 58% 48%/cover no-repeat; transform:scale(calc(.84 + var(--gs-plum-photo) * .16)) rotate(calc((1 - var(--gs-plum-photo)) * -5deg)); will-change:opacity,transform; -webkit-mask-image:radial-gradient(ellipse 31% 42% at 50% 25%,#000 0 74%,rgba(0,0,0,.65) 79%,transparent 86%),radial-gradient(ellipse 31% 42% at 74% 43%,#000 0 74%,rgba(0,0,0,.65) 79%,transparent 86%),radial-gradient(ellipse 31% 42% at 65% 72%,#000 0 74%,rgba(0,0,0,.65) 79%,transparent 86%),radial-gradient(ellipse 31% 42% at 35% 72%,#000 0 74%,rgba(0,0,0,.65) 79%,transparent 86%),radial-gradient(ellipse 31% 42% at 26% 43%,#000 0 74%,rgba(0,0,0,.65) 79%,transparent 86%); mask-image:radial-gradient(ellipse 31% 42% at 50% 25%,#000 0 74%,rgba(0,0,0,.65) 79%,transparent 86%),radial-gradient(ellipse 31% 42% at 74% 43%,#000 0 74%,rgba(0,0,0,.65) 79%,transparent 86%),radial-gradient(ellipse 31% 42% at 65% 72%,#000 0 74%,rgba(0,0,0,.65) 79%,transparent 86%),radial-gradient(ellipse 31% 42% at 35% 72%,#000 0 74%,rgba(0,0,0,.65) 79%,transparent 86%),radial-gradient(ellipse 31% 42% at 26% 43%,#000 0 74%,rgba(0,0,0,.65) 79%,transparent 86%); filter:drop-shadow(0 7px 10px rgba(45,52,39,.13)) saturate(.76) contrast(.94) brightness(1.08); }
      .gs-plum-photo-bloom-one { left:64%; top:16%; }

      #about.gs-author-story { position:relative; isolation:isolate; overflow:hidden; padding-block:clamp(84px,10vw,150px) !important; }
      #about.gs-author-story::before { content:""; position:absolute; width:42vw; height:42vw; max-width:620px; max-height:620px; right:-10%; top:8%; border-radius:50%; background:radial-gradient(circle,rgba(111,125,101,.13),transparent 68%); z-index:-1; }
      #about .gs-author-layout { position:relative; display:grid !important; grid-template-columns:minmax(340px,.82fr) minmax(0,1.18fr) !important; align-items:center !important; gap:clamp(52px,8vw,128px) !important; width:min(1180px,91vw); margin-inline:auto; }
      #about .gs-author-media { width:100% !important; margin:0 !important; transform:rotate(-.7deg); filter:drop-shadow(0 25px 28px rgba(45,39,29,.23)); }
      #about .gs-author-image-frame { position:relative; overflow:hidden; aspect-ratio:.78; clip-path:none; border-radius:18% 9% 16% 11% / 11% 17% 9% 15%; background:#ddd3bd; }
      #about .gs-author-image-frame::before { content:""; position:absolute; inset:0; z-index:2; pointer-events:none; background:linear-gradient(112deg,rgba(244,237,219,.16),transparent 28% 72%,rgba(83,75,60,.12)),radial-gradient(ellipse at 8% 48%,rgba(237,228,207,.2),transparent 20%),radial-gradient(ellipse at 93% 22%,rgba(237,228,207,.18),transparent 19%); mix-blend-mode:soft-light; }
      #about .gs-author-image-frame::after { content:"沿著光影，走回詩的來處"; position:absolute; right:18px; bottom:15px; padding:7px 11px; background:rgba(237,229,210,.76); color:#665b49; font-size:11px; letter-spacing:.18em; backdrop-filter:blur(4px); }
      #about img.gs-author-photo { width:100% !important; height:100% !important; object-fit:cover !important; object-position:52% 52%; filter:saturate(.72) sepia(.08) contrast(.95); transform:scale(1.015); }
      #about .gs-author-layout > :not(.gs-author-media) { position:relative; z-index:2; }

      body.gs-pharmacy-nav-active .gs-site-masthead {
        position:sticky !important; top:0 !important; z-index:240 !important; isolation:isolate;
        background:transparent !important;
        border-bottom-color:transparent !important; box-shadow:none !important;
        backdrop-filter:none !important;
      }
      body.gs-pharmacy-nav-active .gs-site-masthead > a,
      body.gs-pharmacy-nav-active .gs-site-masthead > nav {
        transform:translateY(clamp(8px,.9vw,16px));
        transition:transform .32s ease,opacity .28s linear !important;
      }
      body.gs-pharmacy-nav-active .gs-site-masthead::before {
        content:none !important;
        display:none !important;
      }
      body.gs-pharmacy-nav-active .gs-site-masthead a,
      body.gs-pharmacy-nav-active .gs-site-masthead button,
      body.gs-pharmacy-nav-active .gs-site-masthead .gs-calligraphy-brand { color:rgba(250,244,225,.98) !important; -webkit-text-fill-color:currentColor !important; text-shadow:0 1px 2px rgba(23,35,28,.72),0 0 8px rgba(250,244,225,.16) !important; opacity:var(--gs-pharmacy-nav-ink,1) !important; transition:opacity .28s linear !important; }
      @media(max-width:700px){
        .gs-plum-memory { min-height:390px; }
        .gs-plum-memory::before { left:7%; width:19%; }
        .gs-plum-memory-kicker { left:7%; top:47%; writing-mode:vertical-rl; }
        .gs-plum-branch { width:92vw; right:-18vw; }
        #about .gs-author-layout { display:block !important; }
        #about .gs-author-media { width:100% !important; margin-bottom:42px !important; transform:none; }
        #about .gs-author-image-frame { aspect-ratio:.82; }
        #about .gs-author-image-frame::after { right:10px; bottom:10px; }
        .gs-ink-hero-stage::before { opacity:.68; filter:blur(18px) saturate(.7); }
        .gs-plum-ink-flow { inset:0; width:100%; opacity:.68; }
      }
      @media(prefers-reduced-motion:reduce){ .gs-ink-hero-stage::before,.gs-ink-hero-stage::after,.gs-plum-ink-flow *{animation:none !important;stroke-dashoffset:0 !important;opacity:1 !important} }
    `;
    document.head.append(style);
  }

  const editorialRevealBound = new WeakSet();
  let editorialRevealObserver = null;

  function setupEditorialScrollAnimations() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.gs-scroll-reveal').forEach((item) => item.classList.add('is-visible'));
      return;
    }
    if (!editorialRevealObserver) {
      editorialRevealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          editorialRevealObserver.unobserve(entry.target);
        });
      }, { threshold: .12, rootMargin: '0px 0px -9% 0px' });
    }

    const groups = [
      '#about .gs-author-media, #about .gs-author-layout > div:last-child > span, #about h2, #about .gs-author-layout > div:last-child > div',
      '#poems .gs-library-kicker, #poems .gs-library-heading, #poems .gs-collection-preview, #poems article',
      '.gs-pharmacy-portal .gs-pharmacy-portal-kicker, .gs-pharmacy-portal h2, .gs-pharmacy-portal p, .gs-pharmacy-portal-link',
      '#echoes > *, footer > *',
    ];
    groups.forEach((selector) => {
      document.querySelectorAll(selector).forEach((item, index) => {
        if (editorialRevealBound.has(item)) return;
        editorialRevealBound.add(item);
        item.classList.add('gs-scroll-reveal');
        item.style.setProperty('--gs-reveal-delay', `${Math.min(index % 4, 3) * 95}ms`);
        editorialRevealObserver.observe(item);
      });
    });
  }

  function enhanceMemoryExperience() {
    ensureMemoryExperienceStyle();
    if (!document.querySelector('link[data-gs-editorial]')) {
      const sheet = document.createElement('link');
      sheet.rel = 'stylesheet';
      sheet.href = 'editorial.css?v=20260925e';
      sheet.dataset.gsEditorial = '1';
      document.head.append(sheet);
    }
    const editorialHero = document.querySelector('#top');
    editorialHero?.classList.add('gs-editorial-hero');
    if (editorialHero && !editorialHero.querySelector('.gs-hero-intro')) {
      const intro = document.createElement('aside');
      intro.className = 'gs-hero-intro';
      intro.setAttribute('aria-label', '詩集引言');
      intro.innerHTML = `
        <div class="gs-hero-intro-zh">
          <p>他把一生種進了田裡，也種進了字裡</p>
          <p>如今我們來，讀他留下的光</p>
        </div>
        <span class="gs-hero-intro-en">Kuo Chong Cheng Poetry</span>
      `;
      editorialHero.append(intro);
    }
    if (editorialHero && !editorialHero.querySelector('.gs-hero-scroll-cue')) {
      const cue = document.createElement('a');
      cue.className = 'gs-hero-scroll-cue';
      cue.href = '#about';
      cue.setAttribute('aria-label', '向下瀏覽作者介紹');
      cue.innerHTML = '<span>Scroll Down</span><i></i>';
      editorialHero.append(cue);
    }
    editorialHero?.querySelectorAll(':scope > a:not(.gs-hero-scroll-cue)').forEach((link) => link.classList.add('gs-legacy-hero-link'));
    const heroTitle = document.querySelector('#hw-hero');
    if (heroTitle && !heroTitle.querySelector('.gs-guo-seal')) {
      const seal = document.createElement('img');
      seal.className = 'gs-guo-seal';
      seal.src = 'assets/guo-seal.png';
      seal.alt = '郭';
      heroTitle.append(seal);
    }
    document.querySelectorAll('#poems article').forEach((card) => {
      const title = card.querySelector('h3')?.textContent.trim();
      const source = illustrations.get(title);
      if (!source || card.querySelector('.gs-poem-cover')) return;
      const cover = document.createElement('img');
      cover.className = 'gs-poem-cover';
      cover.src = source;
      cover.alt = '';
      cover.loading = 'lazy';
      cover.decoding = 'async';
      card.prepend(cover);
      card.classList.add('gs-illustrated-card');
    });
    const hero = document.querySelector("#hw-hero");
    const heroStage = hero?.closest("section") || hero?.parentElement;
    heroStage?.classList.remove("gs-ink-hero-stage");
    heroStage?.querySelectorAll(".gs-plum-ink-flow").forEach((ink) => ink.remove());

    const about = document.querySelector("#about");
    about?.querySelectorAll('span').forEach((label) => {
      if (label.textContent.trim() === '關於詩人') label.remove();
    });
    const photo = about?.querySelector('img.gs-author-photo, img[alt*="詩人"], img');
    if (about && photo) {
      about.classList.add("gs-author-story");
      photo.src = "assets/author-back-view.jpg?v=20260809a";
      photo.classList.add("gs-author-photo");
      const frame = photo.parentElement;
      const media = frame?.parentElement;
      const layout = media?.parentElement;
      frame?.classList.add("gs-author-image-frame");
      media?.classList.add("gs-author-media");
      layout?.classList.add("gs-author-layout");
      if (media && !media.querySelector('.gs-author-writing')) {
        const writing = document.createElement('img');
        writing.src = 'assets/author-writing.jpg';
        writing.alt = '郭崇城在桌前專注寫作';
        writing.className = 'gs-author-writing';
        writing.loading = 'lazy';
        media.append(writing);
      }
    }

    const mountDecoration = (host, className, source) => {
      if (!host || host.querySelector(`.${className}`)) return;
      const decoration = document.createElement('img');
      decoration.className = `gs-plum-decor ${className}`;
      decoration.src = source;
      decoration.alt = '';
      decoration.setAttribute('aria-hidden', 'true');
      decoration.draggable = false;
      host.append(decoration);
    };
    const poemsSection = document.querySelector('#poems');
    mountDecoration(editorialHero, 'gs-plum-decor-hero-left', 'assets/plum-decoration-04.svg');
    mountDecoration(editorialHero, 'gs-plum-decor-hero-corner', 'assets/plum-decoration-03.svg');
    mountDecoration(about, 'gs-plum-decor-about-left', 'assets/plum-decoration-05.svg');
    mountDecoration(poemsSection, 'gs-plum-decor-poems-right-top', 'assets/plum-decoration-04.svg');
    mountDecoration(poemsSection, 'gs-plum-decor-poems-right-mid', 'assets/plum-decoration-05.svg');
    mountDecoration(poemsSection, 'gs-plum-decor-poems-left-lower', 'assets/plum-decoration-03.svg');

    if (!document.documentElement.dataset.gsPlumMotionBound) {
      document.documentElement.dataset.gsPlumMotionBound = '1';
      const awakenPlums = (section) => {
        const branches = Array.from(section.querySelectorAll('.gs-plum-decor'));
        branches.forEach((branch, index) => {
          window.setTimeout(() => branch.classList.add('is-plum-awake'), index * 110);
        });
        branches.slice(0, 2).forEach((branch, branchIndex) => {
          const branchRect = branch.getBoundingClientRect();
          const sectionRect = section.getBoundingClientRect();
          [0, 1, 2].forEach((petalIndex) => {
            const petal = document.createElement('i');
            petal.className = 'gs-falling-petal';
            petal.setAttribute('aria-hidden', 'true');
            petal.style.left = `${branchRect.left - sectionRect.left + branchRect.width * (.45 + petalIndex * .16)}px`;
            petal.style.top = `${branchRect.top - sectionRect.top + branchRect.height * (.34 + petalIndex * .09)}px`;
            petal.style.setProperty('--petal-delay', `${(branchIndex * .18 + petalIndex * .22).toFixed(2)}s`);
            petal.style.setProperty('--petal-x', `${petalIndex % 2 ? -22 : 20 + petalIndex * 5}px`);
            petal.style.setProperty('--petal-rot', `${130 + petalIndex * 72}deg`);
            section.append(petal);
            window.setTimeout(() => petal.remove(), 4200);
          });
        });
      };
      const plumSections = [editorialHero, about, poemsSection].filter(Boolean);
      if ('IntersectionObserver' in window) {
        const plumObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            awakenPlums(entry.target);
            plumObserver.unobserve(entry.target);
          });
        }, { threshold: .18, rootMargin: '0px 0px -12% 0px' });
        plumSections.forEach((section) => plumObserver.observe(section));
      } else {
        plumSections.forEach(awakenPlums);
      }
    }

    setupEditorialScrollAnimations();

    document.querySelector("#plum-memory")?.remove();
    if (false && about && !document.querySelector("#plum-memory")) {
      const memory = document.createElement("section");
      memory.id = "plum-memory";
      memory.className = "gs-plum-memory";
      memory.setAttribute("aria-label", "梅園記憶");
      memory.innerHTML = `
        <p class="gs-plum-memory-kicker">梅開時，詩也醒來</p>
        <div class="gs-plum-branch" role="img" aria-label="線稿白梅逐漸轉為真實梅花">
          <svg class="gs-plum-lineart" viewBox="0 0 1000 520" aria-hidden="true">
            <path d="M1035 52 C866 91 752 145 648 213 C541 283 418 319 214 382 C143 404 82 432 24 478"/>
            <path class="gs-plum-twig" d="M760 149 C706 106 667 73 628 30 M642 217 C618 164 592 125 548 88 M509 283 C468 235 433 210 384 187 M390 326 C347 279 318 249 280 210 M261 370 C215 346 174 337 130 339"/>
            <g class="gs-plum-blossom" transform="translate(729 132)"><ellipse cy="-13" rx="8" ry="14"/><ellipse cy="-13" rx="8" ry="14" transform="rotate(72)"/><ellipse cy="-13" rx="8" ry="14" transform="rotate(144)"/><ellipse cy="-13" rx="8" ry="14" transform="rotate(216)"/><ellipse cy="-13" rx="8" ry="14" transform="rotate(288)"/><circle r="3.5"/></g>
            <g class="gs-plum-blossom" transform="translate(621 202) scale(.82)"><ellipse cy="-13" rx="8" ry="14"/><ellipse cy="-13" rx="8" ry="14" transform="rotate(72)"/><ellipse cy="-13" rx="8" ry="14" transform="rotate(144)"/><ellipse cy="-13" rx="8" ry="14" transform="rotate(216)"/><ellipse cy="-13" rx="8" ry="14" transform="rotate(288)"/><circle r="3.5"/></g>
            <g class="gs-plum-blossom" transform="translate(526 270) scale(.68)"><ellipse cy="-13" rx="8" ry="14"/><ellipse cy="-13" rx="8" ry="14" transform="rotate(72)"/><ellipse cy="-13" rx="8" ry="14" transform="rotate(144)"/><ellipse cy="-13" rx="8" ry="14" transform="rotate(216)"/><ellipse cy="-13" rx="8" ry="14" transform="rotate(288)"/><circle r="3.5"/></g>
            <g class="gs-plum-blossom" transform="translate(345 343) scale(.76)"><ellipse cy="-13" rx="8" ry="14"/><ellipse cy="-13" rx="8" ry="14" transform="rotate(72)"/><ellipse cy="-13" rx="8" ry="14" transform="rotate(144)"/><ellipse cy="-13" rx="8" ry="14" transform="rotate(216)"/><ellipse cy="-13" rx="8" ry="14" transform="rotate(288)"/><circle r="3.5"/></g>
          </svg>
          <div class="gs-plum-photo-bloom gs-plum-photo-bloom-one" aria-hidden="true"></div>
        </div>`;
      about.before(memory);
    }
  }

  function syncPlumMemoryDepth() {
    const memory = document.querySelector("#plum-memory");
    if (!memory) return;
    const rect = memory.getBoundingClientRect();
    const raw = (window.innerHeight * .82 - rect.top) / (window.innerHeight + rect.height * .35);
    const progress = Math.max(0, Math.min(1, raw));
    const eased = progress * progress * (3 - 2 * progress);
    memory.style.setProperty("--gs-plum-photo", eased.toFixed(3));
    memory.style.setProperty("--gs-plum-line", Math.max(.32, 1 - eased * .76).toFixed(3));
  }

  function syncPharmacyNav() {
    const section = document.querySelector("#pharmacy-memory");
    const masthead = document.querySelector(".gs-site-masthead") || document.querySelector("header");
    if (!section || !masthead) return;
    masthead.classList.add("gs-site-masthead");
    const rect = section.getBoundingClientRect();
    const mastheadHeight = masthead.getBoundingClientRect().height || 72;
    const isInsidePharmacy = rect.top <= mastheadHeight && rect.bottom > mastheadHeight;
    const fadeDelay = Math.max(84, window.innerHeight * .1);
    const fadeDistance = Math.max(150, window.innerHeight * .22);
    const fadeProgress = Math.max(0, Math.min(1, (mastheadHeight - rect.top - fadeDelay) / fadeDistance));
    masthead.style.setProperty("--gs-pharmacy-nav-ink", (1 - fadeProgress).toFixed(3));
    document.body.classList.toggle("gs-pharmacy-nav-active", isInsidePharmacy);
  }

  function removeLegacyManuscripts() {
    document.querySelector("#manuscripts")?.remove();
    document.querySelectorAll('a[href="#manuscripts"]').forEach((link) => link.remove());
    document.body.classList.remove("gs-manuscript-nav-active");
  }

function removeLegacyHonors() {
  const awards = document.querySelector("#awards");
  if (awards) awards.hidden = true;
  document.querySelectorAll("header nav a, nav a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === "#awards" || link.textContent.trim() === "榮譽") link.remove();
  });
}

  function mountManuscriptSection() {
    ensureManuscriptStyle();
    ensureManuscriptNav();
    const awards = document.querySelector("#awards");
    let section = document.querySelector("#manuscripts");
    if (!awards) return;
    if (!section) {
      section = document.createElement("section");
      section.id = "manuscripts";
      section.className = "gs-manuscripts";
      section.innerHTML = `
        <div class="gs-manuscript-sticky">
          <div class="gs-manuscript-backdrop gs-manuscript-scene-far" aria-hidden="true"></div>
          <div class="gs-manuscript-backdrop gs-manuscript-scene-threshold" aria-hidden="true"></div>
          <div class="gs-manuscript-backdrop gs-manuscript-scene-interior" aria-hidden="true"></div>
          <div class="gs-manuscript-backdrop gs-manuscript-scene-desk" aria-hidden="true"></div>
          <div class="gs-manuscript-backdrop gs-manuscript-scene-paper" aria-hidden="true"></div>
          <div class="gs-manuscript-shade" aria-hidden="true"></div>
          <div class="gs-manuscript-atmosphere" aria-hidden="true"></div>
          <header class="gs-manuscript-intro">
            <span class="gs-manuscript-kicker">手稿珍藏・宗泰藥房</span>
            <h2>紙上仍有他的手溫</h2>
            <p>從騎樓望進舊藥房，沿著光線慢慢走近。那張桌、那支筆，仍替一頁頁詩稿留著位置。</p>
            <span class="gs-manuscript-enter-cue">往下走進時光</span>
          </header>
          <div class="gs-manuscript-inner">
            <div class="gs-manuscript-stage">
              <figure class="gs-manuscript-sheet">
                <button type="button" class="gs-manuscript-image-button">
                  <img class="gs-manuscript-image" loading="eager" decoding="async" alt="">
                </button>
                <figcaption class="gs-manuscript-caption">
                  <span class="gs-manuscript-kind"></span>
                  <span>
                    <strong class="gs-manuscript-title"></strong>
                    <span class="gs-manuscript-note"></span>
                  </span>
                </figcaption>
              </figure>
              <img class="gs-manuscript-pen" src="assets/manuscript-pen.png?v=20260730k" alt="" aria-hidden="true">
            </div>
            <nav class="gs-manuscript-controls" aria-label="手稿翻頁">
              <button type="button" class="gs-manuscript-arrow gs-manuscript-prev" aria-label="上一頁手稿">‹</button>
              <span class="gs-manuscript-status">
                <span>
                  <span class="gs-manuscript-count" aria-live="polite"></span>
                  <span class="gs-manuscript-progress" aria-hidden="true"></span>
                </span>
                <button type="button" class="gs-manuscript-play" aria-label="暫停手稿幻燈片">Ⅱ</button>
              </span>
              <button type="button" class="gs-manuscript-arrow gs-manuscript-next" aria-label="下一頁手稿">›</button>
            </nav>
          </div>
        </div>
        <div class="gs-manuscript-lightbox" role="dialog" aria-modal="true" aria-label="手稿放大閱讀" aria-hidden="true">
          <button type="button" class="gs-manuscript-lightbox-close" aria-label="關閉手稿">×</button>
          <img alt="">
          <div class="gs-manuscript-lightbox-caption"></div>
        </div>
      `;
      awards.before(section);
      renderManuscriptPage(section);
    }
    setupManuscriptInteractions(section);
    setupManuscriptScroll(section);
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
      document.documentElement.dataset.gsHeroPlayRequested = "1";
      document.querySelector("#hw-hero")?.classList.remove("gs-hero-waiting");
    }
  });

  document.addEventListener("click", (event) => {
    const manuscriptControl = event.target.closest?.(".gs-manuscript-prev, .gs-manuscript-next");
    if (manuscriptControl) {
      event.preventDefault();
      event.stopImmediatePropagation();
      const manuscriptSection = manuscriptControl.closest("#manuscripts");
      if (!manuscriptSection) return;
      changeManuscript(
        manuscriptSection,
        manuscriptControl.classList.contains("gs-manuscript-prev") ? -1 : 1
      );
      return;
    }
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
    // The parent loader must not fade until the legacy HanziWriter nodes have
    // been replaced as one complete hero. Calling this here also removes the
    // old interval-order race where gs-ready could fire one tick too early.
    styleHeroTitle();
    const heroRendered = document.querySelector("#hw-hero.gs-hero-rendered");
    if (!announced && heroRendered && document.querySelector("#poems h3")) {
      announced = true;
      window.parent?.postMessage({ type: "gs-ready" }, "*");
    }
    if (attempts > 1200) {
      window.clearInterval(timer);
      if (!announced && heroRendered) window.parent?.postMessage({ type: "gs-ready" }, "*");
    }
  }, 250);

  window.setInterval(mountModalIllustration, 250);
  window.setInterval(styleMasthead, 250);
  window.setInterval(styleHeroTitle, 250);
  window.setInterval(enhanceMemoryExperience, 350);
  window.setInterval(mountLibraryBrowser, 400);
  window.setInterval(mountInlineReader, 120);
  window.setInterval(fixAwardModal, 300);
  window.setInterval(setupAwardDrag, 500);
  // 手稿改由藥房場景承接，V1 不再重複建立長篇手稿區。
  document.querySelector("#manuscripts")?.remove();
  document.querySelectorAll('a[href="#manuscripts"]').forEach((link) => link.remove());
  window.setInterval(mountPharmacyPortal, 500);
  window.setInterval(removeLegacyManuscripts, 350);
  window.setInterval(removeLegacyHonors, 350);
  window.addEventListener("scroll", syncPharmacyNav, { passive: true });
  window.setInterval(syncPharmacyNav, 300);
  window.setInterval(mountVisitorCounter, 700);
  window.setInterval(removeAccountControls, 500);
  window.setInterval(removeMastheadAuthor, 500);
  window.setInterval(normalizeReaderEchoYears, 500);
  window.setInterval(bindParentGoTop, 500);
  window.setInterval(mountInnerGoTop, 500);
})();
