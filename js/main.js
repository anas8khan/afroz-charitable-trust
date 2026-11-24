(() => {
  const burger = document.getElementById("burger");
  const nav = document.getElementById("nav");
  burger.addEventListener("click", () => nav.classList.toggle("open"));
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => nav.classList.remove("open")));

  const toggle = document.getElementById("layoutToggle");
  toggle.addEventListener("click", () => {
    const on = document.body.classList.toggle("show-layout");
    toggle.textContent = on ? "Hide layout labels" : "Show layout labels";
  });

  const animate = (el) => {
    const target = Number(el.dataset.count);
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / 1500, 1);
      el.textContent = Math.floor(target * (1 - Math.pow(1 - p, 3))).toLocaleString("en-IN");
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { animate(e.target); io.unobserve(e.target); }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll("[data-count]").forEach((el) => io.observe(el));

  const links = [...nav.querySelectorAll("a")];
  const sections = links.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach((s) => spy.observe(s));

  document.getElementById("csrForm").addEventListener("submit", (e) => {
    e.preventDefault();
    e.target.querySelector(".form__ok").hidden = false;
  });
})();
