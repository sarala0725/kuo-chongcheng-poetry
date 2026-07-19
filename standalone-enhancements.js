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
})();
