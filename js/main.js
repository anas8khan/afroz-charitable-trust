(() => {
  const header = document.querySelector(".header");
  const burger = document.getElementById("burger");
  const nav = document.getElementById("nav");
  const progress = document.getElementById("progress");
  const floatCta = document.querySelector(".float-cta");

  // Mobile menu
  burger.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    burger.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      nav.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    })
  );

  // Header shadow, scroll progress, floating CTA
  const csr = document.getElementById("csr");
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle("is-scrolled", y > 10);
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    if (floatCta) {
      const csrTop = csr.offsetTop - window.innerHeight;
      const csrBottom = csr.offsetTop + csr.offsetHeight;
      floatCta.classList.toggle("show", y > 600 && !(y > csrTop && y < csrBottom));
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Reveal on scroll with automatic stagger inside grids
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach((el) => {
    const siblings = [...el.parentElement.children].filter((c) => c.classList.contains("reveal"));
    if (siblings.length > 1) el.style.setProperty("--d", `${(siblings.indexOf(el) % 6) * 0.08}s`);
  });
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-visible"));
  }

  // Animated counters (values already in the HTML, so no-JS / crawlers still see real numbers)
  const fmt = (n) => n.toLocaleString("en-IN");
  const animate = (el) => {
    const target = Number(el.dataset.count);
    const start = performance.now();
    const dur = 1800;
    const step = (now) => {
      const p = Math.min((now - start) / dur, 1);
      el.textContent = fmt(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const counterIO = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          animate(e.target);
          counterIO.unobserve(e.target);
        }
      }),
    { threshold: 0.6 }
  );
  document.querySelectorAll("[data-count]").forEach((el) => counterIO.observe(el));

  // Active section in nav
  const links = [...nav.querySelectorAll('a[href^="#"]:not(.btn)')];
  const targets = links.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);
  const spy = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${e.target.id}`));
      }),
    { rootMargin: "-45% 0px -50% 0px" }
  );
  targets.forEach((t) => spy.observe(t));

  // Seamless gallery loop: duplicate the row once
  const row = document.querySelector(".field__row");
  if (row) row.innerHTML += row.innerHTML.replace(/<img /g, '<img aria-hidden="true" ');

  // Enquiry form → pre-filled email (works without a backend)
  const form = document.getElementById("csrForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(form));
    const subject = `CSR enquiry – ${d.org || d.name}`;
    const body = [
      `Name: ${d.name}`,
      `Organisation: ${d.org}`,
      `Email: ${d.email}`,
      `Phone: ${d.phone || "-"}`,
      `Programme: ${d.programme}`,
      `Indicative budget: ${d.budget}`,
      "",
      d.message || "",
    ].join("\n");
    window.location.href = `mailto:imranchouparan@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
})();
