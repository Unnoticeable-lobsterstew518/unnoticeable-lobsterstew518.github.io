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

  function figure(srcIn, alt) {
    const src = t(srcIn);
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
      ["skills", "#bilan", UI.skills],
      ...YEARS.map((y) => [y.id, "#" + y.id, UI[y.id] || y.title]),
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
    const img = el("img", { src: t(p.thumb), alt: "", loading: "lazy" });
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

  function proofLinks(ids) {
    const ok = (ids || []).filter((id) => PROJECTS[id]);
    if (!ok.length) return el("p", { class: "proofs muted" }, t(UI.coursework));
    return el("p", { class: "proofs" }, el("span", { class: "muted" }, t(UI.provenIn), " : "),
      ok.map((id, i) => [i ? " · " : "", el("a", { href: "#projet-" + id }, t(PROJECTS[id].title))]));
  }

  function pageHome() {
    const [first, ...rest] = SITE.name.split(" ");
    const cv = SITE.cv || {};
    const avatarImg = el("img", { class: "avatar", src: HOME.photo, alt: SITE.name });
    const avatar = el("div", { class: "avatar-wrap" }, avatarImg);
    avatarImg.addEventListener("error", () => avatar.remove());
    const recent = YEARS[0], earlier = YEARS.slice(1);
    const projectsSection = el("section", { class: "section", id: "projets" },
      el("div", { class: "section-head" }, el("h2", null, t(UI.explore))),
      el("div", { class: "cards cards-3" }, recent.projects.map(projectCard))
    );
    return [
      el("section", { class: "hero" },
        el("div", null,
          el("p", { class: "kicker" }, t(HOME.kicker)),
          el("h1", null, first, " ", el("span", null, rest.join(" "))),
          el("p", { class: "lead" }, t(HOME.tagline)),
          el("p", { class: "intro" }, t(HOME.intro)),
          el("p", { class: "seeking" }, el("strong", null, t(HOME.seeking.label), " : "), t(HOME.seeking.text)),
          el("div", { class: "btn-row" },
            el("button", { class: "btn", type: "button", onclick: () => projectsSection.scrollIntoView({ behavior: "smooth" }) }, t(UI.seeWork), " ↓"),
            t(cv) ? el("a", { class: "btn ghost", href: t(cv), target: "_blank", rel: "noopener" }, "⤓ ", t(UI.cvBtn)) : null,
            el("a", { class: "btn ghost", href: "mailto:" + SITE.email }, t(UI.contactMe)),
            SITE.linkedin ? el("a", { class: "btn ghost", href: SITE.linkedin, target: "_blank", rel: "noopener" }, "LinkedIn") : null
          )
        ),
        avatar
      ),
      el("div", { class: "proof-strip panel" }, HOME.proofs.map((p) => el("a", { href: p.href },
        el("span", { class: "big" }, t(p.big)), el("span", { class: "txt" }, t(p.text))))),
      el("section", { class: "section" },
        el("div", { class: "section-head" }, el("h2", null, t(UI.keySkills)), el("a", { class: "more", href: "#bilan" }, t(UI.seeAllSkills), " →")),
        el("div", { class: "strengths" }, HOME.strengths.map((g, i) => el("div", { class: "strength panel" + (i === 0 ? " main" : "") },
          el("p", { class: "kicker" }, t(g.tag)),
          el("h3", null, t(g.title)),
          list(t(g.items)),
          proofLinks(g.proofs)
        )))
      ),
      projectsSection,
      el("section", { class: "section" },
        el("div", { class: "section-head" }, el("h2", null, t(UI.earlier))),
        el("div", { class: "timeline" }, earlier.map((y) => el("a", { class: "tl-item panel", href: "#" + y.id },
          el("span", { class: "tl-title" }, t(y.title)),
          el("span", { class: "tl-sub" }, y.projects.map((id) => t(PROJECTS[id].title)).join(" · ")),
          el("span", { class: "tl-cta" }, t(UI.seeYear), " →")
        )))
      ),
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

  function renderSection(s, flip) {
    const body = el("div", { class: "sec-body" },
      s.h ? el("h2", null, s.n ? el("span", { class: "step-n" }, String(s.n)) : null, t(s.h)) : null,
      (s.blocks || []).map((b) => {
        if (b.p) return el("p", null, t(b.p));
        if (b.note) return el("p", { class: "note" }, t(b.note));
        if (b.list) return [b.label ? el("p", { class: "list-label" }, t(b.label)) : null, list(t(b.list))];
        return null;
      })
    );
    return el("section", { class: "sec panel" + (s.imgs && s.imgs.length ? (flip ? " flip" : "") : " sec-text") }, body, gallery(s.imgs, s.h ? t(s.h) : ""));
  }

  function pageProject(id) {
    const p = PROJECTS[id];
    const y = yearOf(id);
    const flat = YEARS.flatMap((yy) => yy.projects);
    const i = flat.indexOf(id);
    const prev = flat[i - 1], next = flat[i + 1];

    // Les sections sans image consécutives sont regroupées en grille
    const out = [];
    let grid = null, nImg = 0;
    for (const s of p.sections) {
      const hasImg = s.imgs && s.imgs.length;
      const node = renderSection(s, hasImg && nImg++ % 2 === 1);
      if (!hasImg) {
        if (!grid) { grid = el("div", { class: "text-grid" }); out.push(grid); }
        grid.append(node);
      } else { grid = null; out.push(node); }
    }

    return [
      el("a", { class: "back", href: "#" + (y ? y.id : "") }, "← ", y ? t(y.title) : t(UI.back)),
      el("header", { class: "page-head" },
        el("p", { class: "kicker" }, t(p.kicker)),
        el("h1", null, t(p.title)),
        lang === "en" && !p.brief ? el("p", { class: "muted small" }, t(UI.frOnly)) : null
      ),
      p.facts ? el("dl", { class: "facts panel" }, p.facts.map((f) => el("div", null, el("dt", null, t(f.k)), el("dd", null, t(f.v))))) : null,
      p.brief ? el("section", { class: "brief panel" },
        el("div", null, el("p", { class: "kicker" }, t(UI.inBrief)), el("p", { class: "lead" }, t(p.brief.text))),
        list(t(p.brief.points))) : null,
      p.hero ? gallery([p.hero], t(p.title)) : null,
      out,
      el("nav", { class: "pager" },
        prev ? el("a", { href: "#projet-" + prev }, "← ", t(PROJECTS[prev].title)) : el("span"),
        next ? el("a", { href: "#projet-" + next, class: "right" }, t(PROJECTS[next].title), " →") : el("span")
      ),
    ];
  }

  function skillItem(it) {
    return el("li", { class: "sk" },
      el("h4", null, t(it.name)),
      it.desc ? el("p", null, t(it.desc)) : null,
      it.proofs ? proofLinks(it.proofs) : null);
  }

  function pageSkills() {
    const S = SKILLS_PAGE;
    return [
      el("header", { class: "page-head" },
        el("h1", null, t(S.title)),
        el("p", { class: "intro lead-sm" }, t(S.intro))
      ),
      S.groups.map((g) => el("section", { class: "sk-group panel" + (g.featured ? " featured" : "") },
        el("p", { class: "kicker" }, t(g.tag)),
        el("h2", null, t(g.title)),
        el("ul", { class: "sk-list" }, g.items.map(skillItem))
      )),
      el("div", { class: "sk-row" },
        el("section", { class: "sk-group panel" },
          el("h2", null, t(S.tools.title)),
          el("dl", { class: "tools" }, S.tools.rows.map((r) => [
            el("dt", null, t(r.label)),
            el("dd", null, el("div", { class: "badges" }, r.items.map((x) => el("span", { class: "badge" }, t(x)))))
          ]))
        ),
        el("section", { class: "sk-group panel" },
          el("h2", null, t(S.languages.title)),
          el("ul", { class: "sk-list one" }, S.languages.items.map((l) => el("li", { class: "sk" },
            el("h4", null, t(l.name), el("span", { class: "lvl" }, t(l.level))),
            l.note ? el("p", null, t(l.note)) : null)))
        )
      ),
      S.extra ? el("section", { class: "sk-group panel" },
        el("p", { class: "kicker" }, t(S.extra.tag)),
        el("h2", null, t(S.extra.title)),
        el("p", { class: "sk-intro" }, t(S.extra.intro)),
        el("ul", { class: "sk-list four" }, S.extra.items.map(skillItem))
      ) : null,
      el("section", { class: "sk-group panel" },
        el("h2", null, t(S.soft.title)),
        el("ul", { class: "sk-list four" }, S.soft.items.map(skillItem))
      ),
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
