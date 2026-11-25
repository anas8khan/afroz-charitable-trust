// EN / हिंदी switcher. Translates every visible text fragment (and alt/placeholder/aria-label/title)
// by looking it up in window.HI_DICT (js/hi.js). English text in the HTML is the key, so the page
// always falls back to English for anything not yet translated.
(() => {
  const STORAGE_KEY = "act-lang";
  const DICT = window.HI_DICT || {};
  const META = {
    en: { title: document.title, description: document.querySelector('meta[name="description"]')?.content || "" },
    hi: {
      title: "अफ़रोज चैरिटेबल ट्रस्ट | 2013 से ग्रामीण झारखंड में रोशनी और सम्मान लौटाते हुए",
      description:
        "अफ़रोज चैरिटेबल ट्रस्ट (पंजीकरण सं. 10949/1310) हज़ारीबाग, चतरा और कोडरमा में मुफ़्त मोतियाबिंद ऑपरेशन, स्कूल नेत्र जाँच, घर-द्वार नेत्र शिविर, पौधारोपण और सर्दी राहत चलाता है। CSR के तहत हमसे जुड़ें।",
    },
  };

  const norm = (s) => s.replace(/\s+/g, " ").trim();
  const ATTRS = ["alt", "placeholder", "aria-label", "title"];
  const textNodes = new Map();
  const attrNodes = [];

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode: (n) =>
      n.parentElement.closest("script, style, .lang, [data-no-i18n]") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT,
  });
  for (let n = walker.nextNode(); n; n = walker.nextNode()) {
    const key = norm(n.nodeValue);
    if (key && DICT[key] !== undefined) textNodes.set(n, n.nodeValue);
  }
  document.querySelectorAll(ATTRS.map((a) => `[${a}]`).join(",")).forEach((el) => {
    ATTRS.forEach((a) => {
      const v = el.getAttribute(a);
      if (v && DICT[norm(v)] !== undefined) attrNodes.push({ el, a, original: v });
    });
  });

  const descMeta = document.querySelector('meta[name="description"]');
  const buttons = document.querySelectorAll(".lang [data-lang]");

  function setLang(lang) {
    const hi = lang === "hi";
    textNodes.forEach((original, node) => {
      if (!hi) {
        node.nodeValue = original;
        return;
      }
      const lead = original.match(/^\s*/)[0];
      const trail = original.match(/\s*$/)[0];
      node.nodeValue = lead + DICT[norm(original)] + trail;
    });
    attrNodes.forEach(({ el, a, original }) => el.setAttribute(a, hi ? DICT[norm(original)] : original));

    document.documentElement.lang = hi ? "hi" : "en";
    document.title = META[hi ? "hi" : "en"].title;
    if (descMeta) descMeta.content = META[hi ? "hi" : "en"].description;
    buttons.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === (hi ? "hi" : "en"))));
    try {
      localStorage.setItem(STORAGE_KEY, hi ? "hi" : "en");
    } catch (e) {
      /* storage blocked */
    }
    document.dispatchEvent(new CustomEvent("langchange", { detail: { lang: hi ? "hi" : "en" } }));
  }

  buttons.forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));

  let initial = new URLSearchParams(location.search).get("lang");
  if (!initial) {
    try {
      initial = localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      /* storage blocked */
    }
  }
  if (initial === "hi") setLang("hi");
})();
