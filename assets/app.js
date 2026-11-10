/* Moteur du site : aucune dépendance externe, aucun outil de build.
   Le contenu est dans content.js — ce fichier n'a normalement pas besoin d'être modifié. */
(function () {
  "use strict";

  const LANGS = ["fr", "en"];
  const app = document.getElementById("app");
  const nav = document.getElementById("nav");
  let lang = detectLang();

  /* ---------- Langue ---------- */
  function detectLang() {
    const q = new URLSearchParams(location.search).get("lang");
    if (LANGS.includes(q)) return q;
    try {
      const saved = localStorage.getItem("lang");
      if (LANGS.includes(saved)) return saved;
    } catch (e) { /* stockage indisponible : on ignore */ }
    return (navigator.language || "fr").toLowerCase().startsWith("fr") ? "fr" : "en";
  }

  function setLang(l) {
    lang = l;
    try { localStorage.setItem("lang", l); } catch (e) {}
    render();
  }

  const t = (obj) => (obj == null ? "" : typeof obj === "string" ? obj : (obj[lang] ?? obj.fr ?? ""));

  /* ---------- Petits utilitaires DOM ---------- */
  function el(tag, attrs, ...children) {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (v == null || v === false) continue;
      if (k === "class") n.className = v;
      else if (k.startsWith("on")) n.addEventListener(k.slice(2), v);
      else n.setAttribute(k, v);
    }
    for (const c of children.flat(Infinity)) {
      if (c == null || c === false) continue;
      n.append(c.nodeType ? c : document.createTextNode(String(c)));
    }
    return n;
  }

  function figure(src, alt) {
    const img = el("img", { src, alt: alt || "", loading: "lazy", decoding: "async" });
    const fig = el("figure", { class: "fig" }, img);
    img.addEventListener("error", () => fig.remove());
    img.addEventListener("click", () => openLightbox(src, alt));
    return fig;
  }

  function gallery(srcs, alt) {
    if (!srcs || !srcs.length) return null;
    return el("div", { class: "gallery gallery-" + Math.min(srcs.length, 3) }, srcs.map((s) => figure(s, alt)));
  }

  function list(items) {
    return el("ul", { class: "list" }, items.map((i) => el("li", null, i)));
  }

  /* ---------- Lightbox ---------- */
  const lb = document.getElementById("lightbox");
  const lbImg = lb.querySelector("img");
  function openLightbox(src, alt) {
    lbImg.src = src; lbImg.alt = alt || "";
    lb.hidden = false;
    document.body.classList.add("noscroll");
    lb.querySelector("button").focus();
  }
  function closeLightbox() {
    lb.hidden = true; lbImg.src = "";
    document.body.classList.remove("noscroll");
  }
  lb.addEventListener("click", (e) => { if (e.target !== lbImg) closeLightbox(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !lb.hidden) closeLightbox(); });

  /* ---------- Navigation ---------- */
  // Adresses simples (#but1, #projet-pendule, #bilan) ; les anciennes (#/but1, #/projet/pendule) restent acceptées
  function route() {
    const h = decodeURIComponent(location.hash.replace(/^#\/?/, ""));
    if (!h) return { page: "home" };
    const m = h.match(/^projet[-\/](.+)$/);
    if (m && PROJECTS[m[1]]) return { page: "project", id: m[1] };
    if (h === "bilan" || h === "competences") return { page: "skills" };
    const year = YEARS.find((y) => y.id === h);
    if (year) return { page: "year", year };
    return { page: "404" };
  }

  function yearOf(projectId) {
    return YEARS.find((y) => y.projects.includes(projectId));
  }

  function renderNav(r) {
    const active = r.page === "year" ? r.year.id
      : r.page === "project" ? (yearOf(r.id) || {}).id
      : r.page;
    const links = [
      ["home", "#", UI.home],
      ...YEARS.map((y) => [y.id, "#" + y.id, UI[y.id] || y.title]),
      ["skills", "#bilan", UI.skills],
    ];
    nav.replaceChildren(
      ...links.map(([id, href, label]) =>
        el("a", { href, class: id === active ? "active" : null, "aria-current": id === active ? "page" : null }, t(label)))
    );
    document.querySelectorAll(".lang button").forEach((b) => {
      const on = b.dataset.lang === lang;
      b.classList.toggle("on", on);
      b.setAttribute("aria-pressed", on);
    });
  }

  /* ---------- Pages ---------- */
  function projectCard(id) {
    const p = PROJECTS[id];
    const img = el("img", { src: p.thumb, alt: "", loading: "lazy" });
    const media = el("div", { class: "card-media" }, img);
    img.addEventListener("error", () => media.classList.add("empty"));
    return el("a", { class: "card panel", href: "#projet-" + id },
      media,
      el("div", { class: "card-body" },
        el("p", { class: "kicker" }, t(p.kicker)),
        el("h3", null, t(p.title)),
        el("p", { class: "card-desc" }, t(p.card)),
        el("p", { class: "card-label" }, t(UI.competences)),
        list(t(p.cardSkills)),
        el("span", { class: "card-cta" }, t(UI.seeProject), " →")
      )
    );
  }

  function pageHome() {
    const [first, ...rest] = SITE.name.split(" ");
    const cv = SITE.cv || {};
    const avatarImg = el("img", { class: "avatar", src: HOME.photo, alt: SITE.name });
    const avatar = el("div", { class: "avatar-wrap" }, avatarImg);
    avatarImg.addEventListener("error", () => avatar.remove());
    const projectsSection = el("section", { class: "section", id: "projets" },
      el("div", { class: "section-head" }, el("h2", null, t(UI.explore))),
      el("div", { class: "timeline" },
        YEARS.map((y) => el("a", { class: "tl-item panel", href: "#" + y.id },
          el("span", { class: "kicker" }, t(y.school).split(" — ")[0]),
          el("span", { class: "tl-title" }, t(y.title)),
          el("span", { class: "tl-sub" }, y.projects.map((id) => t(PROJECTS[id].title)).join(" · ")),
          el("span", { class: "tl-cta" }, t(UI.seeYear), " →")
        ))
      )
    );
    return [
      el("section", { class: "hero" },
        el("div", null,
          el("p", { class: "kicker" }, t(UI.hello)),
          el("h1", null, first, " ", el("span", null, rest.join(" "))),
          el("p", { class: "lead" }, t(HOME.tagline)),
          el("p", { class: "intro" }, t(HOME.intro)),
          el("div", { class: "btn-row" },
            el("button", { class: "btn", type: "button", onclick: () => projectsSection.scrollIntoView({ behavior: "smooth" }) }, t(UI.seeWork), " ↓"),
            el("a", { class: "btn ghost", href: "mailto:" + SITE.email }, t(UI.contactMe)),
            cv.fr ? el("a", { class: "btn ghost", href: cv.fr, target: "_blank", rel: "noopener" }, "⤓ ", t(UI.cvFr)) : null,
            cv.en ? el("a", { class: "btn ghost", href: cv.en, target: "_blank", rel: "noopener" }, "⤓ ", t(UI.cvEn)) : null,
            SITE.linkedin ? el("a", { class: "btn ghost", href: SITE.linkedin, target: "_blank", rel: "noopener" }, "LinkedIn") : null
          )
        ),
        avatar
      ),
      el("section", { class: "section" },
        el("div", { class: "section-head" }, el("h2", null, t(UI.keySkills))),
        el("div", { class: "skills" },
          (HOME.skills || []).map((g) => el("div", { class: "skill-group panel" },
            el("h3", null, el("span", { class: "dot" }), t(g.title)),
            el("div", { class: "badges" }, t(g.items).map((s) => el("span", { class: "badge" }, s)))
          ))
        )
      ),
      projectsSection,
    ];
  }

  function pageYear(y) {
    return [
      el("header", { class: "page-head" },
        el("p", { class: "kicker" }, t(y.school)),
        el("h1", null, t(y.title))
      ),
      el("div", { class: "cards" }, y.projects.map(projectCard)),
    ];
  }

  function renderSection(s) {
    const body = el("div", { class: "sec-body" },
      s.h ? el("h2", null, t(s.h)) : null,
      (s.blocks || []).map((b) => {
        if (b.p) return el("p", null, t(b.p));
        if (b.note) return el("p", { class: "note" }, t(b.note));
        if (b.list) return [b.label ? el("p", { class: "list-label" }, t(b.label)) : null, list(t(b.list))];
        return null;
      })
    );
    return el("section", { class: "sec panel" + (s.imgs && s.imgs.length ? "" : " sec-text") }, body, gallery(s.imgs, s.h ? t(s.h) : ""));
  }

  function pageProject(id) {
    const p = PROJECTS[id];
    const y = yearOf(id);
    const flat = YEARS.flatMap((yy) => yy.projects);
    const i = flat.indexOf(id);
    const prev = flat[i - 1], next = flat[i + 1];

    // Les sections sans image consécutives sont regroupées en grille
    const out = [];
    let grid = null;
    for (const s of p.sections) {
      const node = renderSection(s);
      if (!s.imgs || !s.imgs.length) {
        if (!grid) { grid = el("div", { class: "text-grid" }); out.push(grid); }
        grid.append(node);
      } else { grid = null; out.push(node); }
    }

    return [
      el("a", { class: "back", href: "#" + (y ? y.id : "") }, "← ", y ? t(y.title) : t(UI.back)),
      el("header", { class: "page-head" },
        el("p", { class: "kicker" }, t(p.kicker)),
        el("h1", null, t(p.title)),
        lang === "en" ? el("p", { class: "muted small" }, t(UI.frOnly)) : null
      ),
      p.hero ? gallery([p.hero], t(p.title)) : null,
      out,
      el("nav", { class: "pager" },
        prev ? el("a", { href: "#projet-" + prev }, "← ", t(PROJECTS[prev].title)) : el("span"),
        next ? el("a", { href: "#projet-" + next, class: "right" }, t(PROJECTS[next].title), " →") : el("span")
      ),
    ];
  }

  function pageSkills() {
    return [
      el("header", { class: "page-head" },
        el("h1", null, t(SKILLS_PAGE.title)),
        lang === "en" ? el("p", { class: "muted small" }, t(UI.frOnly)) : null
      ),
      gallery(SKILLS_PAGE.images, t(SKILLS_PAGE.title)),
    ];
  }

  /* ---------- Rendu ---------- */
  function render() {
    document.documentElement.lang = lang;
    const r = route();
    renderNav(r);
    let content, title = SITE.name;
    if (r.page === "home") content = pageHome();
    else if (r.page === "year") { content = pageYear(r.year); title = t(r.year.title) + " — " + SITE.name; }
    else if (r.page === "project") { content = pageProject(r.id); title = t(PROJECTS[r.id].title) + " — " + SITE.name; }
    else if (r.page === "skills") { content = pageSkills(); title = t(SKILLS_PAGE.title) + " — " + SITE.name; }
    else content = [el("p", null, t(UI.notFound), " ", el("a", { href: "#" }, t(UI.home)))];
    document.title = title;
    app.replaceChildren(...[content].flat(Infinity).filter(Boolean));
    document.getElementById("foot-mail").textContent = SITE.email;
    document.getElementById("foot-mail").href = "mailto:" + SITE.email;
    document.getElementById("foot-contact").textContent = t(UI.contact) + " :";
    lb.querySelector("button").setAttribute("aria-label", t(UI.close));
  }

  document.querySelectorAll(".lang button").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));
  window.addEventListener("hashchange", () => { render(); window.scrollTo(0, 0); });
  render();
})();
