/* =====================================================================
   CONTENU DU PORTFOLIO  —  c'est le SEUL fichier à modifier pour le texte.
   Chaque texte existe en deux versions : { fr: "...", en: "..." }.
   Les images sont dans le dossier /images (voir README.md).
   ===================================================================== */

const SITE = {
  name: "Armand NAVARRE",
  email: "armand.nvre@gmail.com",
  linkedin: "", // ex. "https://www.linkedin.com/in/ton-profil" (laisser vide pour masquer)
  // CV : le bouton ouvre celui de la langue affichée (laisser vide pour masquer)
  cv: { fr: "docs/CV_Armand_Navarre_FR.pdf", en: "docs/CV_Armand_Navarre_EN.pdf" },
};

const UI = {
  home:        { fr: "Accueil", en: "Home" },
  phelma:      { fr: "Ingénieur Phelma", en: "Phelma engineering" },
  but1:        { fr: "BUT 1", en: "BUT Year 1" },
  but2:        { fr: "BUT 2", en: "BUT Year 2" },
  but3:        { fr: "BUT 3", en: "BUT Year 3" },
  skills:      { fr: "Bilan de compétences", en: "Skills summary" },
  contact:     { fr: "Contact", en: "Contact" },
  seeProject:  { fr: "Voir le projet", en: "View project" },
  competences: { fr: "Compétences", en: "Skills" },
  back:        { fr: "Retour", en: "Back" },
  journey:     { fr: "Parcours", en: "Background" },
  projects:    { fr: "projets", en: "projects" },
  frOnly:      { fr: "", en: "Note: the images on this page are in French." },
  close:       { fr: "Fermer", en: "Close" },
  hello:       { fr: "Bonjour, je suis", en: "Hi, I'm" },
  seeWork:     { fr: "Voir mes projets", en: "See my projects" },
  contactMe:   { fr: "Me contacter", en: "Contact me" },
  cvBtn:       { fr: "Mon CV", en: "My CV" },
  keySkills:   { fr: "Ce que je sais faire", en: "What I can do" },
  explore:     { fr: "Projets récents à Phelma", en: "Recent projects at Phelma" },
  earlier:     { fr: "Avant Phelma : BUT Mesures Physiques", en: "Before Phelma: BUT in Physical Measurements" },
  selfTaught:  { fr: "En autodidacte", en: "Self-taught" },
  seeYear:     { fr: "Voir les projets", en: "See the projects" },
  notFound:    { fr: "Page introuvable.", en: "Page not found." },
  inBrief:     { fr: "En bref", en: "In brief" },
  seeAllSkills:{ fr: "Voir le bilan complet", en: "See the full summary" },
  provenIn:    { fr: "Mis en œuvre dans", en: "Applied in" },
  coursework:  { fr: "Enseignements SEI", en: "SEI coursework" },
};

const HOME = {
  kicker: { fr: "Élève ingénieur · Grenoble INP – Phelma, filière SEI", en: "Engineering student · Grenoble INP – Phelma, SEI track" },
  tagline: {
    fr: "Je conçois des circuits numériques, du code RTL jusqu'au layout.",
    en: "I design digital circuits, from RTL code down to layout.",
  },
  intro: {
    fr: "En 2e année à Phelma, en Systèmes Électroniques Intégrés. Avant cela : trois ans de BUT Mesures Physiques et deux stages en instrumentation, chez ArianeGroup et à l'Université d'Helsinki.",
    en: "Second-year student at Phelma, in Integrated Electronic Systems. Before that: a 3-year BUT in Physical Measurements and two instrumentation internships, at ArianeGroup and at the University of Helsinki.",
  },
  // Ce que je recherche : à mettre à jour selon la candidature
  seeking: {
    label: { fr: "Je recherche", en: "Looking for" },
    text: {
      fr: "Un stage de 2e année de 3 à 4 mois en conception numérique (ASIC ou FPGA), en laboratoire ou en entreprise, en France ou à l'étranger. Ouvert aux sujets mixtes et analogiques.",
      en: "A 3 to 4 month second-year internship in digital design (ASIC or FPGA), in a research lab or in industry, in France or abroad. Open to mixed-signal and analog topics.",
    },
  },
  photo: "images/profil.jpg",
  // Quatre preuves chiffrées, chacune renvoie vers la page qui la détaille
  proofs: [
    { big: { fr: "RTL → layout", en: "RTL → layout" }, text: { fr: "Un filtre numérique mené sur FPGA et en ASIC 0,35 µm", en: "A digital filter taken to FPGA and to a 0.35 µm ASIC" }, href: "#projet-filtre-rif" },
    { big: { fr: "14 semaines", en: "14 weeks" }, text: { fr: "chez ArianeGroup, sur un banc d'essai de moteurs fusée", en: "at ArianeGroup, on a rocket engine test bench" }, href: "#projet-stage-technicien" },
    { big: { fr: "1 publication", en: "1 publication" }, text: { fr: "Co-auteur d'un article scientifique, Université d'Helsinki", en: "Co-author of a scientific paper, University of Helsinki" }, href: "#projet-stage-ultrasons" },
    { big: { fr: "TOEIC 910", en: "TOEIC 910" }, text: { fr: "Anglais B2+, stage de recherche mené en anglais", en: "English B2+, research internship carried out in English" }, href: "#bilan" },
  ],
  // Trois blocs de compétences : des listes courtes, avec le projet qui les prouve
  strengths: [
    {
      tag:   { fr: "Spécialité SEI", en: "SEI specialisation" },
      title: { fr: "Conception numérique", en: "Digital design" },
      items: {
        fr: ["RTL en SystemVerilog : FSM, chemin de données, testbench", "Synthèse logique : Synopsys Design Compiler", "Placement-routage : Cadence Innovus", "Full-custom : Cadence Virtuoso, DRC / LVS", "FPGA : Vivado, Xilinx Spartan-7"],
        en: ["RTL in SystemVerilog: FSM, datapath, testbench", "Logic synthesis: Synopsys Design Compiler", "Place-and-route: Cadence Innovus", "Full-custom: Cadence Virtuoso, DRC / LVS", "FPGA: Vivado, Xilinx Spartan-7"],
      },
      proofs: ["filtre-rif"],
    },
    {
      tag:   { fr: "Socle BUT Mesures Physiques", en: "BUT Physical Measurements foundation" },
      title: { fr: "Instrumentation et mesure", en: "Instrumentation and measurement" },
      items: {
        fr: ["Chaînes d'instrumentation : plus de 700 voies, EtherCAT, Modbus", "Conditionnement de signal et conversion ADC / DAC", "Métrologie et calcul d'incertitudes", "Python pour l'acquisition et l'analyse de mesures"],
        en: ["Instrumentation chains: 700+ channels, EtherCAT, Modbus", "Signal conditioning and ADC / DAC conversion", "Metrology and uncertainty analysis", "Python for data acquisition and analysis"],
      },
      proofs: ["stage-technicien", "sonde-echographique"],
    },
    {
      tag:   { fr: "Atouts transverses", en: "Cross-functional strengths" },
      title: { fr: "Anglais, IA et travail en équipe", en: "English, AI and teamwork" },
      items: {
        fr: ["Anglais professionnel : TOEIC 910, recherche menée en anglais", "IA comme outil de travail : prompts, modèles en local, simulations Python", "Environnement Linux et conteneurs Docker", "Projets en équipes de 10 et 11 personnes"],
        en: ["Professional English: TOEIC 910, research carried out in English", "AI as a working tool: prompting, local models, Python simulations", "Linux environment and Docker containers", "Projects in teams of 10 and 11"],
      },
      proofs: ["energie-spatiale", "stage-ultrasons"],
    },
  ],
};

/* Années : l'ordre ici = l'ordre dans le menu et sur l'accueil (du plus récent au plus ancien) */
const YEARS = [
  {
    id: "phelma",
    title:  { fr: "Cycle ingénieur – Phelma", en: "Engineering degree – Phelma" },
    school: { fr: "Grenoble INP – Phelma — filière SEI (Systèmes Électroniques Intégrés)", en: "Grenoble INP – Phelma — SEI track (Integrated Electronic Systems)" },
    projects: ["filtre-rif", "stage-ouvrier", "energie-spatiale"],
  },
  {
    id: "but3",
    title:  { fr: "BUT 3ème année", en: "BUT – Year 3" },
    school: { fr: "IUT de Blois — BUT Mesures Physiques", en: "IUT de Blois — BUT in Physical Measurements" },
    projects: ["stage-technicien", "sonde-echographique"],
  },
  {
    id: "but2",
    title:  { fr: "BUT 2ème année", en: "BUT – Year 2" },
    school: { fr: "IUT de Blois — BUT Mesures Physiques", en: "IUT de Blois — BUT in Physical Measurements" },
    projects: ["stage-ultrasons", "nitrites"],
  },
  {
    id: "but1",
    title:  { fr: "BUT 1ère année", en: "BUT – Year 1" },
    school: { fr: "IUT de Blois — BUT Mesures Physiques", en: "IUT de Blois — BUT in Physical Measurements" },
    projects: ["chaine-mesure", "pendule"],
  },
];

/* Projets.
   Une section = { h: titre, blocks: [...], imgs: [...] }
   Un bloc = { p: texte } ou { label: titre de liste (optionnel), list: [...] } ou { note: texte } */
const PROJECTS = {

  /* ------------------------------------------------------------- PHELMA 2A */
  "filtre-rif": {
    kicker: { fr: "Projet VLSI · 2e année, filière SEI", en: "VLSI project · 2nd year, SEI track" },
    title:  { fr: "Filtre RIF passe-bas : du SystemVerilog au layout", en: "Low-pass FIR filter: from SystemVerilog to layout" },
    card:   { fr: "Filtre numérique 32 coefficients, porté sur FPGA et en ASIC AMS 0,35 µm", en: "32-tap digital filter, taken to FPGA and to an AMS 0.35 µm ASIC" },
    cardSkills: {
      fr: ["RTL et vérification en SystemVerilog", "Synthèse Synopsys, placement-routage Cadence Innovus", "Cellule standard full-custom (Virtuoso, DRC/LVS)"],
      en: ["RTL and verification in SystemVerilog", "Synopsys synthesis, Cadence Innovus place-and-route", "Full-custom standard cell (Virtuoso, DRC/LVS)"],
    },
    thumb: "images/phelma/rif-hero.svg",
    hero: "images/phelma/rif-hero.svg",
    facts: [
      { k: { fr: "Équipe", en: "Team" }, v: { fr: "Binôme", en: "Pair" } },
      { k: { fr: "Période", en: "When" }, v: { fr: "2026", en: "2026" } },
      { k: { fr: "Cadre", en: "Context" }, v: { fr: "TP de conception VLSI, Phelma", en: "VLSI design lab, Phelma" } },
      { k: { fr: "Cibles", en: "Targets" }, v: { fr: "FPGA Spartan-7 · ASIC AMS 0,35 µm", en: "Spartan-7 FPGA · AMS 0.35 µm ASIC" } },
    ],
    brief: {
      text: { fr: "Un filtre numérique passe-bas à 32 coefficients, conçu en binôme et mené du code RTL jusqu'à deux implémentations physiques : une carte FPGA et un layout ASIC.", en: "A 32-tap low-pass digital filter, designed in a pair and taken from RTL code to two physical implementations: an FPGA board and an ASIC layout." },
      points: {
        fr: ["Flot numérique complet : RTL, vérification, synthèse, placement-routage", "Deux cibles comparées : FPGA Xilinx Spartan-7 et ASIC AMS 0,35 µm", "Une cellule standard dessinée au niveau transistor"],
        en: ["Complete digital flow: RTL, verification, synthesis, place-and-route", "Two targets compared: Xilinx Spartan-7 FPGA and AMS 0.35 µm ASIC", "One standard cell drawn at transistor level"],
      },
    },
    sections: [
      {
        h: { fr: "Vue d'ensemble du flot", en: "Flow overview" },
        blocks: [{ list: {
          fr: ["Un même code RTL, deux implémentations", "Branche FPGA : Precision puis Vivado", "Branche ASIC : Design Compiler puis Innovus", "Comparaison finale : surface, timing, consommation"],
          en: ["One RTL code base, two implementations", "FPGA branch: Precision, then Vivado", "ASIC branch: Design Compiler, then Innovus", "Final comparison: area, timing, power"],
        } }],
        imgs: [{ fr: "images/phelma/rif-flot-fr.svg", en: "images/phelma/rif-flot-en.svg" }],
      },
      {
        n: 1, h: { fr: "Architecture du filtre", en: "Filter architecture" },
        blocks: [{ list: {
          fr: ["32 coefficients symétriques sur 8 bits, issus d'une étude Matlab", "Architecture séquentielle MAC : 1 multiplieur au lieu de 32", "Ligne à retard (registres à décalage) + ROM de coefficients", "32 cycles d'horloge par échantillon de sortie", "FSM de contrôle interfacée avec les FSM de l'ADC et du DAC"],
          en: ["32 symmetric 8-bit coefficients from a Matlab study", "Sequential MAC architecture: 1 multiplier instead of 32", "Delay line (shift registers) + coefficient ROM", "32 clock cycles per output sample", "Control FSM interfaced with the ADC and DAC FSMs"],
        } }],
        imgs: [{ fr: "images/phelma/rif-archi-fr.svg", en: "images/phelma/rif-archi-en.svg" }],
      },
      {
        n: 2, h: { fr: "RTL et vérification", en: "RTL and verification" },
        blocks: [{ list: {
          fr: ["Blocs delay line, MAC, ROM et buffer codés en SystemVerilog", "FSM synthétisable, chronogrammes sous WaveDrom", "Testbench : Dirac, échelon, sinus à fréquence variable", "Lint du code avec SpyGlass"],
          en: ["Delay line, MAC, ROM and buffer blocks coded in SystemVerilog", "Synthesisable FSM, timing diagrams in WaveDrom", "Testbench: Dirac, step, variable-frequency sine", "Code linting with SpyGlass"],
        } }],
      },
      {
        n: 3, h: { fr: "Prototypage FPGA", en: "FPGA prototyping" },
        blocks: [{ list: {
          fr: ["Synthèse sous Precision (Mentor Graphics)", "Placement-routage sous Vivado", "Xilinx Spartan-7, carte Arty S7-50, horloge 12 MHz", "Relevé du taux d'occupation et du timing"],
          en: ["Synthesis in Precision (Mentor Graphics)", "Place-and-route in Vivado", "Xilinx Spartan-7, Arty S7-50 board, 12 MHz clock", "Utilisation and timing reports"],
        } }],
      },
      {
        n: 4, h: { fr: "Synthèse logique ASIC", en: "ASIC logic synthesis" },
        blocks: [{ list: {
          fr: ["Synopsys Design Compiler, cellules standard AMS 0,35 µm", "Contrainte d'horloge 20 ns, plusieurs contraintes de surface", "Chemin critique, slacks, consommation statique et dynamique", "Simulation post-synthèse sur le même testbench"],
          en: ["Synopsys Design Compiler, AMS 0.35 µm standard cells", "20 ns clock constraint, several area constraints", "Critical path, slacks, static and dynamic power", "Post-synthesis simulation on the same testbench"],
        } }],
      },
      {
        n: 5, h: { fr: "Placement-routage", en: "Place-and-route" },
        blocks: [{ list: {
          fr: ["Cadence Innovus, à partir de la netlist synthétisée", "Couronne de plots et floorplan", "Anneaux et bandes d'alimentation VDD / GND", "Arbre d'horloge (CCOpt), routage NanoRoute", "Fillers, vérifications de connectivité et DRC", "Simulation post-placement-routage"],
          en: ["Cadence Innovus, from the synthesised netlist", "Pad ring and floorplan", "VDD / GND power rings and stripes", "Clock tree (CCOpt), NanoRoute routing", "Fillers, connectivity and DRC checks", "Post-place-and-route simulation"],
        } }],
        imgs: [{ fr: "images/phelma/rif-floorplan-fr.svg", en: "images/phelma/rif-floorplan-en.svg" }],
      },
      {
        n: 6, h: { fr: "Cellule standard full-custom", en: "Full-custom standard cell" },
        blocks: [{ list: {
          fr: ["Inverseur CMOS sous Cadence Virtuoso, technologie AMS 0,35 µm", "Dimensionnement W/L : temps de propagation de 340 à 350 ps sur 0,1 pF", "Layout au gabarit des cellules standard, aboutable à gauche et à droite", "DRC et LVS sous Calibre, simulation post-extraction (Spectre)"],
          en: ["CMOS inverter in Cadence Virtuoso, AMS 0.35 µm technology", "W/L sizing: 340 to 350 ps propagation delay on 0.1 pF", "Layout on the standard-cell template, abuttable left and right", "Calibre DRC and LVS, post-extraction simulation (Spectre)"],
        } }],
        imgs: [{ fr: "images/phelma/rif-inverseur-fr.svg", en: "images/phelma/rif-inverseur-en.svg" }],
      },
      {
        h: { fr: "Ce que j'en retiens", en: "Takeaways" },
        blocks: [{ list: {
          fr: ["Une vision complète du flot, du RTL au masque", "Les compromis surface / vitesse / consommation entre FPGA et ASIC", "L'importance de l'analyse statique de timing avant le layout"],
          en: ["An end-to-end view of the flow, from RTL to mask", "Area / speed / power trade-offs between FPGA and ASIC", "Why static timing analysis matters before layout"],
        } }],
      },
      {
        h: { fr: "Outils", en: "Tools" },
        blocks: [{ list: {
          fr: ["SystemVerilog, SpyGlass, WaveDrom", "Precision, Vivado", "Synopsys Design Compiler", "Cadence Innovus, Virtuoso, Spectre", "Calibre (DRC / LVS)"],
          en: ["SystemVerilog, SpyGlass, WaveDrom", "Precision, Vivado", "Synopsys Design Compiler", "Cadence Innovus, Virtuoso, Spectre", "Calibre (DRC / LVS)"],
        } }],
      },
    ],
  },

  "stage-ouvrier": {
    kicker: { fr: "Stage ouvrier · 1re année", en: "Shop-floor internship · 1st year" },
    title:  { fr: "Compagnon d'atelier sur pièces de précision", en: "Workshop operator on precision parts" },
    card:   { fr: "LAMRE, PME du secteur aéronautique, Orléans · 6 semaines", en: "LAMRE, aerospace SME, Orléans (France) · 6 weeks" },
    cardSkills: {
      fr: ["Blocage de pièces de précision au vernis", "Contrôle qualité selon procédures", "Travail en atelier et en équipe"],
      en: ["Locking varnish on precision parts", "Quality control following procedures", "Shop-floor teamwork"],
    },
    thumb: { fr: "images/phelma/ouvrier-processus-fr.svg", en: "images/phelma/ouvrier-processus-en.svg" },
    facts: [
      { k: { fr: "Entreprise", en: "Company" }, v: { fr: "LAMRE, PME aéronautique", en: "LAMRE, aerospace SME" } },
      { k: { fr: "Lieu", en: "Location" }, v: { fr: "Orléans (Loiret)", en: "Orléans, France" } },
      { k: { fr: "Durée", en: "Duration" }, v: { fr: "6 semaines, CDD", en: "6 weeks, fixed-term contract" } },
      { k: { fr: "Poste", en: "Position" }, v: { fr: "Compagnon d'atelier", en: "Workshop operator" } },
    ],
    brief: {
      text: { fr: "Six semaines en atelier de production, au blocage et au contrôle de pièces techniques de précision pour l'aéronautique.", en: "Six weeks on a production shop floor, locking and inspecting precision technical parts for the aerospace industry." },
      points: {
        fr: ["Un procédé en trois étapes, de l'application au contrôle final", "Des procédures qualité strictes à respecter", "La découverte du travail en atelier, côté opérateur"],
        en: ["A three-step process, from application to final inspection", "Strict quality procedures to follow", "First-hand experience of shop-floor work as an operator"],
      },
    },
    sections: [
      {
        h: { fr: "Le procédé", en: "The process" },
        blocks: [{ list: {
          fr: ["Application : vernis de blocage déposé à la seringue pneumatique, remplissage complet des logements", "Retouche après 48 h de séchage : reprise des bulles d'air et des manques", "Contrôle final : blocage complet et sans fragilité, selon le manuel des défauts"],
          en: ["Application: locking varnish dispensed with a pneumatic syringe, cavities completely filled", "Touch-up after 48 h of drying: reworking air bubbles and gaps", "Final inspection: complete, robust locking, checked against the defect manual"],
        } }],
        imgs: [{ fr: "images/phelma/ouvrier-processus-fr.svg", en: "images/phelma/ouvrier-processus-en.svg" }],
      },
      {
        h: { fr: "Contexte", en: "Context" },
        blocks: [{ list: {
          fr: ["PME familiale : instruments de mesure électromécaniques, faisceaux, cartes électroniques", "Clients du secteur aéronautique, forte exigence qualité", "Travail en équipe d'atelier"],
          en: ["Family-run SME: electromechanical measuring instruments, harnesses, circuit boards", "Aerospace customers, high quality requirements", "Working within a shop-floor team"],
        } }],
      },
      {
        h: { fr: "Ce que j'en retiens", en: "Takeaways" },
        blocks: [{ list: {
          fr: ["Rigueur : un geste répété, une qualité constante", "Respect des procédures et traçabilité", "Esprit d'équipe et réalité du terrain, utiles à un futur ingénieur", "Une motivation renforcée pour la conception"],
          en: ["Rigour: a repeated gesture, consistent quality", "Following procedures and traceability", "Team spirit and shop-floor reality, valuable for a future engineer", "A stronger motivation for design work"],
        } }],
      },
    ],
  },

  "energie-spatiale": {
    kicker: { fr: "Projet de fin d'année · 1re année", en: "End-of-year project · 1st year" },
    title:  { fr: "Autonomie énergétique d'un système embarqué spatial", en: "Energy autonomy for a space embedded system" },
    card:   { fr: "Équipe de 10 · état de l'art, prototype de gestion d'énergie, soutenance", en: "Team of 10 · state of the art, energy-management prototype, defence" },
    cardSkills: {
      fr: ["Récupération et stockage d'énergie", "Système embarqué à cadence adaptative", "Gestion de projet à 10"],
      en: ["Energy harvesting and storage", "Adaptive-rate embedded system", "Project management in a team of 10"],
    },
    thumb: { fr: "images/phelma/energie-hero-fr.svg", en: "images/phelma/energie-hero-en.svg" },
    hero: { fr: "images/phelma/energie-hero-fr.svg", en: "images/phelma/energie-hero-en.svg" },
    facts: [
      { k: { fr: "Équipe", en: "Team" }, v: { fr: "10 étudiants", en: "10 students" } },
      { k: { fr: "Période", en: "When" }, v: { fr: "1re année, 2025-2026", en: "1st year, 2025-2026" } },
      { k: { fr: "Mon rôle", en: "My role" }, v: { fr: "Récupération photovoltaïque · référent usage de l'IA", en: "Photovoltaic harvesting · AI-usage lead" } },
      { k: { fr: "Livrables", en: "Deliverables" }, v: { fr: "Infographies · prototype · soutenance", en: "Infographics · prototype · defence" } },
    ],
    brief: {
      text: { fr: "Comment alimenter une plateforme de mesure de nanosatellite (CubeSat) avec la seule énergie récupérée en orbite, y compris pendant les éclipses ?", en: "How can a nanosatellite (CubeSat) measurement platform run solely on energy harvested in orbit, including during eclipses?" },
      points: {
        fr: ["État de l'art des technologies de récupération d'énergie", "Prototype de gestion d'énergie à double condensateur", "Démonstration et soutenance devant un jury"],
        en: ["State of the art of energy-harvesting technologies", "Dual-capacitor energy-management prototype", "Demonstration and defence before a jury"],
      },
    },
    sections: [
      {
        h: { fr: "Mon rôle", en: "My role" },
        blocks: [
          { label: { fr: "Récupération photovoltaïque, en binôme", en: "Photovoltaic harvesting, with one teammate" }, list: {
            fr: ["Optimisation de la récupération d'énergie du panneau solaire", "Source principale du système : rendement limité, mais la plus abondante en orbite"],
            en: ["Optimising energy harvesting from the solar panel", "The system's main source: limited efficiency, but the most abundant in orbit"],
          } },
          { label: { fr: "Référent usage de l'IA dans l'équipe", en: "AI-usage lead for the team" }, list: {
            fr: ["Registre des usages (Google Form) : outil utilisé, adéquation à la tâche, qualité du prompt, pertinence de la réponse", "Objectif : l'IA comme outil vérifié, pas comme réponse acceptée d'office", "Bilan présenté lors de la soutenance"],
            en: ["Usage log (Google Form): tool used, fit for the task, prompt quality, relevance of the answer", "Goal: AI as a verified tool, not an answer accepted by default", "Review presented at the defence"],
          } },
        ],
      },
      {
        n: 1, h: { fr: "État de l'art", en: "State of the art" },
        blocks: [{ list: {
          fr: ["Infographies sur les technologies existantes et émergentes", "Critères : rendement, ordres de grandeur de puissance", "Masse et encombrement, déterminants pour le coût de lancement", "Complexité de mise en œuvre, autonomie, durabilité"],
          en: ["Infographics on existing and emerging technologies", "Criteria: efficiency, power orders of magnitude", "Mass and volume, the drivers of launch cost", "Implementation complexity, autonomy, durability"],
        } }],
      },
      {
        n: 2, h: { fr: "Stockage à double condensateur", en: "Dual-capacitor storage" },
        blocks: [{ list: {
          fr: ["Architecture tirée d'articles scientifiques", "Petit condensateur : charge rapide, absorbe les micro-coupures", "Grand condensateur : réserve pour traverser l'éclipse", "Bascule pilotée par le microcontrôleur selon l'énergie disponible", "Tension de stockage mesurée par un ADC"],
          en: ["Architecture taken from scientific papers", "Small capacitor: fast charge, rides through micro-outages", "Large capacitor: reserve to get through the eclipse", "Switching driven by the microcontroller according to available energy", "Storage voltage measured through an ADC"],
        } }],
        imgs: [{ fr: "images/phelma/energie-stockage-fr.svg", en: "images/phelma/energie-stockage-en.svg" }],
      },
      {
        n: 3, h: { fr: "Cadence adaptative", en: "Adaptive rate" },
        blocks: [{ list: {
          fr: ["Beaucoup d'énergie : mesures et émissions fréquentes", "Peu d'énergie : cadence réduite pour consommer moins", "Éclipse : mise en veille du système", "Retour du soleil : redémarrage automatique"],
          en: ["Plenty of energy: frequent measurements and transmissions", "Little energy: reduced rate to save power", "Eclipse: system goes to sleep", "Sun returns: automatic restart"],
        } }],
        imgs: [{ fr: "images/phelma/energie-cadence-fr.svg", en: "images/phelma/energie-cadence-en.svg" }],
      },
      {
        n: 4, h: { fr: "Validation", en: "Validation" },
        blocks: [{ list: {
          fr: ["Prototype : cartes électroniques, ADC, alimentation", "Simulations Python des cycles de charge et de décharge (avec Claude Code)", "Points de fonctionnement du mode veille selon l'énergie reçue", "Démonstration, puis soutenance devant un jury"],
          en: ["Prototype: circuit boards, ADC, power supply", "Python simulations of charge and discharge cycles (with Claude Code)", "Sleep-mode operating points according to the received energy", "Demonstration, then defence before a jury"],
        } }],
      },
      {
        h: { fr: "Organisation à 10", en: "Working as a team of 10" },
        blocks: [{ list: {
          fr: ["Planning en diagramme de Gantt, établi en amont", "Répartition des tâches par sous-groupes", "Plateforme d'échange et Drive partagé", "Réunions intermédiaires et jalons d'avancement"],
          en: ["Gantt chart schedule, planned up front", "Tasks split between sub-groups", "Messaging platform and shared Drive", "Interim meetings and progress milestones"],
        } }],
      },
      {
        h: { fr: "Ce que j'en retiens", en: "Takeaways" },
        blocks: [{ list: {
          fr: ["Concevoir un système embarqué sous contrainte d'énergie", "S'appuyer sur la littérature scientifique pour choisir une architecture", "Utiliser l'IA de façon encadrée et critique dans un projet technique", "Coordonner une équipe nombreuse sans laisser personne de côté", "Un travail salué par l'équipe enseignante"],
          en: ["Designing an embedded system under an energy constraint", "Using the scientific literature to choose an architecture", "Using AI in a supervised, critical way in a technical project", "Coordinating a large team without leaving anyone behind", "Work praised by the teaching staff"],
        } }],
      },
    ],
  },

  /* ------------------------------------------------------------------ BUT 1 */
  "pendule": {
    kicker: { fr: "Traitement de données", en: "Data processing" },
    title:  { fr: "Oscillation d'un pendule", en: "Pendulum oscillation" },
    card:   { fr: "Sujet : oscillation d'un pendule", en: "Topic: pendulum oscillation" },
    cardSkills: {
      fr: ["Smartphone utilisé comme capteur de trajectoire (Phyphox)", "Création d'un poster scientifique", "Analyse métrologique"],
      en: ["Smartphone used as a trajectory sensor (Phyphox)", "Designing a scientific poster", "Metrological analysis"],
    },
    thumb: "images/vignettes/pendule.jpg",
    facts: [
      { k: { fr: "Équipe", en: "Team" }, v: { fr: "Binôme", en: "Pair" } },
      { k: { fr: "Cadre", en: "Context" }, v: { fr: "Projet de BUT 1, IUT de Blois", en: "BUT year-1 project, IUT de Blois" } },
      { k: { fr: "Outils", en: "Tools" }, v: { fr: "Phyphox · Excel · Python", en: "Phyphox · Excel · Python" } },
      { k: { fr: "Résultat", en: "Outcome" }, v: { fr: "Poster scientifique · 17/20", en: "Scientific poster · 17/20" } },
    ],
    sections: [
      {
        blocks: [{ p: {
          fr: "L'objectif de ce projet est de s'initier au traitement de données. En binôme, on crée un système de balancier qui utilise notre smartphone comme pendule. Ce dernier possède l'application « Phyphox », qui permet de récupérer en temps réel les données de trajectoire du téléphone après le déclenchement du balancier. Ces données brutes sont ensuite importées dans Excel pour être traitées (filtres, valeurs aberrantes…).",
          en: "The goal of this project was to get started with data processing. Working in pairs, we built a swinging system that uses our smartphone as the pendulum bob. The phone runs the Phyphox app, which records its trajectory data in real time once the pendulum is released. The raw data is then imported into Excel for processing (filtering, outliers…).",
        } }],
        imgs: ["images/pendule/01.jpg"],
      },
      {
        h: { fr: "Objectifs / Compétences", en: "Objectives / Skills" },
        blocks: [
          { list: {
            fr: ["Initiation à la gestion de projet", "Pratique de l'anglais formel", "Création d'un pendule avec smartphone", "Traitement de données", "Réalisation d'un poster scientifique"],
            en: ["Introduction to project management", "Practising formal English", "Building a smartphone pendulum", "Data processing", "Producing a scientific poster"],
          } },
          { label: { fr: "Contraintes", en: "Constraints" }, list: {
            fr: ["Faible durée", "Autonomie"],
            en: ["Short timeframe", "Autonomy"],
          } },
        ],
      },
      {
        h: { fr: "Création du pendule", en: "Building the pendulum" },
        imgs: ["images/pendule/02.jpg", "images/pendule/03.jpg", "images/pendule/04.jpg"],
      },
      {
        h: { fr: "Traitement des données", en: "Data processing" },
        blocks: [{ list: {
          fr: ["Utilisation des données de trajectoire pour observer l'amortissement de l'oscillation", "Détermination du modèle d'équation de la trajectoire avec Python", "Analyse de l'exactitude des mesures grâce à la métrologie"],
          en: ["Trajectory data used to observe the damping of the oscillation", "Trajectory equation model fitted with Python", "Measurement accuracy assessed using metrology"],
        } }],
      },
      {
        h: { fr: "Modélisation mathématique", en: "Mathematical modelling" },
        blocks: [{ list: {
          fr: ["Le défi est d'obtenir ce diagramme à partir de relations mathématiques", "Démonstration de la formule dite « de Borda »"],
          en: ["The challenge is to derive this diagram from mathematical relations", "Proof of the so-called Borda formula"],
        } }],
      },
      {
        h: { fr: "Rendu final", en: "Final deliverable" },
        blocks: [{ note: { fr: "Note de projet : 17/20", en: "Project grade: 17/20" } }],
        imgs: ["images/pendule/05.jpg"],
      },
      {
        h: { fr: "Contraintes / améliorations", en: "Constraints / improvements" },
        blocks: [
          { label: { fr: "Critères", en: "Criteria" }, list: {
            fr: ["Temps → gestion de projet irrégulière 🟠", "Qualité → bonne exactitude des mesures 🟢", "Contenu → tâches réalisées avec succès 🟢"],
            en: ["Time → irregular project management 🟠", "Quality → good measurement accuracy 🟢", "Content → tasks successfully completed 🟢"],
          } },
          { label: { fr: "Améliorations", en: "Improvements" }, list: {
            fr: ["Prendre de l'avance dans son projet", "Communiquer plus fréquemment avec son ou ses binômes", "Consulter le référent de projet pour éviter les faux pas"],
            en: ["Get ahead on the project schedule", "Communicate more often with teammates", "Check in with the project supervisor to avoid missteps"],
          } },
        ],
      },
    ],
  },

  "chaine-mesure": {
    kicker: { fr: "Acquisition de données", en: "Data acquisition" },
    title:  { fr: "Chaîne de mesure via Raspberry Pi", en: "Measurement chain with a Raspberry Pi" },
    card:   { fr: "Sujet : chaîne de mesure de distances et de températures", en: "Topic: distance and temperature measurement chain" },
    cardSkills: {
      fr: ["Programmation de capteurs en langage Arduino", "Développement de circuits électroniques", "Architecture d'un réseau et d'un site web"],
      en: ["Programming sensors in the Arduino language", "Developing electronic circuits", "Network and website architecture"],
    },
    thumb: "images/vignettes/chaine-mesure.jpg",
    facts: [
      { k: { fr: "Équipe", en: "Team" }, v: { fr: "Binôme", en: "Pair" } },
      { k: { fr: "Cadre", en: "Context" }, v: { fr: "Projet de BUT 1, IUT de Blois", en: "BUT year-1 project, IUT de Blois" } },
      { k: { fr: "Matériel", en: "Hardware" }, v: { fr: "ESP32 · LM35 · Raspberry Pi", en: "ESP32 · LM35 · Raspberry Pi" } },
      { k: { fr: "Livrables", en: "Deliverables" }, v: { fr: "Rapport et soutenance en anglais", en: "Report and defence in English" } },
    ],
    sections: [
      {
        blocks: [{ p: {
          fr: "L'objectif du projet est de créer une chaîne de mesure entre des capteurs et un microcontrôleur, puis d'envoyer ces données vers un Raspberry Pi pour les afficher en ligne. Pour ce faire, on utilise un langage de programmation pour paramétrer la prise des mesures de nos capteurs de température et de distance, ainsi que des notions d'architecture réseau et web pour téléverser les données sur le Raspberry Pi.",
          en: "The aim was to build a measurement chain linking sensors to a microcontroller, then send the data to a Raspberry Pi to display it online. We used a programming language to configure the readings from our temperature and distance sensors, along with network and web architecture to upload the data to the Raspberry Pi.",
        } }],
        imgs: ["images/chaine-mesure/01.jpg"],
      },
      {
        h: { fr: "Objectifs / Compétences", en: "Objectives / Skills" },
        blocks: [
          { list: {
            fr: ["Gestion de projet en binôme, en autonomie", "Pratique de l'anglais formel (rapport, soutenance…)", "Création d'une chaîne de mesure", "AOT (programmation de micro-composants)", "Réalisation d'un rapport de projet"],
            en: ["Autonomous project management in pairs", "Formal English practice (report, oral defence…)", "Building a measurement chain", "Microcontroller programming (AOT)", "Writing a project report"],
          } },
          { label: { fr: "Contraintes", en: "Constraints" }, list: {
            fr: ["Objectifs pluridisciplinaires, compétences transversales", "Recherche de documentation en anglais", "Création de rendus en anglais"],
            en: ["Multidisciplinary goals, cross-functional skills", "Researching documentation in English", "Producing deliverables in English"],
          } },
        ],
      },
      {
        h: { fr: "Chaîne de mesure AOT", en: "Microcontroller measurement chain" },
        blocks: [{ list: {
          fr: ["Microcontrôleur ESP32", "Capteur de température LM35", "Capteur de distance à ultrasons VMA5"],
          en: ["ESP32 microcontroller", "LM35 temperature sensor", "VMA5 ultrasonic distance sensor"],
        } }],
        imgs: ["images/chaine-mesure/02.jpg"],
      },
      {
        h: { fr: "Base de données : Raspberry Pi", en: "Database: Raspberry Pi" },
        blocks: [{ p: {
          fr: "Création d'une base de données chiffrée sur un réseau local protégé.",
          en: "Built an encrypted database on a protected local network.",
        } }],
        imgs: ["images/chaine-mesure/03.jpg"],
      },
      {
        h: { fr: "Visualisation sur PC", en: "Visualisation on a PC" },
        blocks: [{ p: {
          fr: "Création d'une page web et d'un serveur de base de données qui récupère les données à chaque rafraîchissement de la page.",
          en: "Built a web page and database server that fetches the data every time the page is refreshed.",
        } }],
      },
      {
        h: { fr: "Pilotage et instrumentation", en: "Control and instrumentation" },
        blocks: [{ list: {
          fr: ["Chaîne de mesure (ESP32, LM35, VMA5)", "Acquisition Bluetooth via microcontrôleur", "Affichage web local et sécurisé"],
          en: ["Measurement chain (ESP32, LM35, VMA5)", "Bluetooth acquisition via the microcontroller", "Secure local web display"],
        } }],
      },
      {
        h: { fr: "Hard skills mobilisés", en: "Hard skills" },
        blocks: [{ list: {
          fr: ["Langages web HTML et CSS", "Acquisition de données en Bluetooth", "Connexion d'un serveur MQTT (architecture réseau)"],
          en: ["HTML and CSS web languages", "Bluetooth data acquisition", "Connecting an MQTT server (network architecture)"],
        } }],
      },
      {
        h: { fr: "Pistes d'amélioration", en: "Areas for improvement" },
        blocks: [{ list: {
          fr: ["Planification plus poussée des étapes du projet", "Communication fréquente avec l'enseignant référent", "Méthodologie de travail"],
          en: ["More detailed planning of project stages", "Frequent communication with the supervising teacher", "Working methodology"],
        } }],
      },
      {
        h: { fr: "Retours d'expérience", en: "Takeaways" },
        blocks: [{ list: {
          fr: ["Compétences en AOT renforcées", "Projet passionnant", "Niveau d'anglais écrit amélioré"],
          en: ["Stronger microcontroller programming skills", "A fascinating project", "Improved written English"],
        } }],
      },
    ],
  },

  /* ------------------------------------------------------------------ BUT 2 */
  "nitrites": {
    kicker: { fr: "Spectromètre à nitrites", en: "Nitrite spectrometer" },
    title:  { fr: "Dosage des ions nitrites de la Loire", en: "Measuring nitrite ions in the Loire river" },
    card:   { fr: "Dosage des nitrites de la Loire", en: "Nitrite assay of Loire river water" },
    cardSkills: {
      fr: ["Chaîne de mesure analogique contrôlée par Arduino", "Création d'un poster scientifique", "Analyse métrologique"],
      en: ["Arduino-controlled analogue measurement chain", "Designing a scientific poster", "Metrological analysis"],
    },
    thumb: "images/vignettes/nitrites.jpg",
    facts: [
      { k: { fr: "Équipe", en: "Team" }, v: { fr: "3 étudiants", en: "3 students" } },
      { k: { fr: "Cadre", en: "Context" }, v: { fr: "Projet de BUT 2, IUT de Blois", en: "BUT year-2 project, IUT de Blois" } },
      { k: { fr: "Méthode", en: "Method" }, v: { fr: "Absorbance à 530 nm, loi de Beer-Lambert", en: "Absorbance at 530 nm, Beer-Lambert law" } },
      { k: { fr: "Outils", en: "Tools" }, v: { fr: "Arduino · CAO de PCB · découpe laser", en: "Arduino · PCB CAD · laser cutting" } },
    ],
    sections: [
      {
        blocks: [{ p: {
          fr: "L'objectif de ce projet est de doser les ions nitrites de la Loire par méthode optique. Pour ce faire, on construit un spectromètre composé d'une chambre noire optique dans laquelle on installe un émetteur et un récepteur de lumière alignés. L'émetteur est une diode laser qui émet un faisceau vert de 530 nm, longueur d'onde adaptée à la détection des ions nitrites par absorbance dans le visible. Le récepteur est une photodiode qui mesure les variations d'intensité lumineuse. Enfin, selon sa concentration en nitrites, l'échantillon voit sa teinte s'assombrir ou s'éclaircir : on peut alors relier concentration et absorbance grâce à la loi de Beer-Lambert.",
          en: "The goal of this project was to measure nitrite ion levels in the Loire using an optical method. We built a spectrometer made of a dark optical chamber housing an aligned light emitter and receiver. The emitter is a laser diode producing a 530 nm green beam, a wavelength suited to detecting nitrite ions by visible absorbance. The receiver is a photodiode that measures changes in light intensity. Depending on its nitrite concentration, the sample turns darker or lighter, so concentration can be related to absorbance using the Beer-Lambert law.",
        } }],
        imgs: ["images/nitrites/01.jpg", "images/nitrites/02.jpg"],
      },
      {
        h: { fr: "Objectifs – Compétences", en: "Objectives – Skills" },
        blocks: [{ list: {
          fr: ["Gestion de projet à trois (GANTT)", "Création d'un circuit imprimé (CAO)", "Conception 3D du support mécanique (DAO)", "Création d'un site web"],
          en: ["Project management in a team of three (Gantt chart)", "PCB design (CAD)", "3D design of the mechanical housing (CAD)", "Building a website"],
        } }],
        imgs: ["images/nitrites/03.jpg"],
      },
      {
        h: { fr: "Solutions étalons", en: "Calibration standards" },
        blocks: [{ list: {
          fr: ["5 solutions nitrites + eau + réactif de Griess", "De 0,005 mg/L à 0,02 mg/L de nitrites", "Solution de référence sans nitrites", "Échantillon inconnu d'eau de la Loire"],
          en: ["5 nitrite solutions + water + Griess reagent", "0.005 to 0.02 mg/L nitrite", "Nitrite-free reference solution", "Unknown Loire water sample"],
        } }],
        imgs: ["images/nitrites/04.jpg"],
      },
      {
        h: { fr: "Conception mécanique", en: "Mechanical design" },
        blocks: [{ list: {
          fr: ["Modélisation 3D", "Découpe laser", "Affichage numérique", "Bouton de contrôle"],
          en: ["3D modelling", "Laser cutting", "Digital display", "Control button"],
        } }],
        imgs: ["images/nitrites/05.jpg", "images/nitrites/06.jpg"],
      },
      {
        h: { fr: "Chambre optique", en: "Optical chamber" },
        imgs: ["images/nitrites/07.jpg", "images/nitrites/08.jpg", "images/nitrites/09.jpg"],
      },
      {
        h: { fr: "Système électronique", en: "Electronic system" },
        blocks: [{ list: {
          fr: ["Mesure d'un signal analogique", "Amplification par AO différentiel", "Acquisition et gestion par Arduino"],
          en: ["Analogue signal measurement", "Amplification with a differential op-amp", "Acquisition and control via Arduino"],
        } }],
        imgs: ["images/nitrites/10.jpg", "images/nitrites/11.jpg"],
      },
      {
        h: { fr: "Création d'un site web", en: "Building a website" },
        blocks: [{ list: {
          fr: ["Guide d'utilisation + méthode d'étalonnage", "Affichage de la concentration en nitrites de la Loire", "Critères métrologiques, incertitudes de mesure"],
          en: ["User guide + calibration method", "Display of the Loire's nitrite concentration", "Metrological criteria, measurement uncertainties"],
        } }],
        imgs: ["images/nitrites/12.jpg"],
      },
      {
        h: { fr: "Performances métrologiques", en: "Metrological performance" },
        blocks: [{ list: {
          fr: ["Cahier des charges", "Qualité des mesures"],
          en: ["Specifications", "Measurement quality"],
        } }],
        imgs: ["images/nitrites/13.jpg", "images/nitrites/14.jpg"],
      },
    ],
  },

  "stage-ultrasons": {
    kicker: { fr: "Stage à l'international — Helsinki", en: "International internship — Helsinki" },
    title:  { fr: "Stage dans l'acoustique des ultrasons", en: "Internship in ultrasonic acoustics" },
    card:   { fr: "Analyse microstructurelle", en: "Microstructural analysis" },
    cardSkills: {
      fr: ["Acoustique des ultrasons (célérité, atténuation)", "Analyses microstructurelles (porosité, cellules)", "Programmation (Fiji, R)"],
      en: ["Ultrasonic acoustics (sound speed, attenuation)", "Microstructural analysis (porosity, cells)", "Programming (Fiji, R)"],
    },
    thumb: "images/vignettes/stage-ultrasons.jpg",
    hero: "images/stage-ultrasons/01.jpg",
    facts: [
      { k: { fr: "Laboratoire", en: "Lab" }, v: { fr: "ETLA, Université d'Helsinki", en: "ETLA, University of Helsinki" } },
      { k: { fr: "Lieu", en: "Location" }, v: { fr: "Helsinki, Finlande", en: "Helsinki, Finland" } },
      { k: { fr: "Durée", en: "Duration" }, v: { fr: "11 semaines, avril à juin 2024", en: "11 weeks, April to June 2024" } },
      { k: { fr: "Outils", en: "Tools" }, v: { fr: "Fiji / ImageJ · R", en: "Fiji / ImageJ · R" } },
    ],
    sections: [
      {
        h: { fr: "Stage à l'international", en: "International internship" },
        blocks: [{ list: {
          fr: ["Stage de recherche dans les ultrasons", "Electronical Research Laboratory (ETLA)", "Helsinki, Finlande, du 2 avril au 14 juin 2024 (11 semaines)"],
          en: ["Research internship in ultrasonics", "Electronical Research Laboratory (ETLA)", "Helsinki, Finland, 2 April – 14 June 2024 (11 weeks)"],
        } }],
        imgs: ["images/stage-ultrasons/02.jpg"],
      },
      {
        h: { fr: "Polymère mélangé à de l'eau", en: "Polymer mixed with water" },
        blocks: [{ list: {
          fr: ["Vitesse de propagation des ondes longitudinales et transversales", "Viscosité : analyse du comportement en écoulement, notamment pour les polymères liquides"],
          en: ["Propagation speed of longitudinal and shear waves", "Viscosity: flow behaviour analysis, particularly for liquid polymers"],
        } }],
      },
      {
        h: { fr: "Étude acoustique d'un polymère", en: "Acoustic study of a polymer" },
        blocks: [{ list: {
          fr: ["Atténuation acoustique : étude de la diminution d'intensité des ondes sonores dans le polymère", "Impédance acoustique : évaluation de l'adaptation aux milieux acoustiques"],
          en: ["Acoustic attenuation: how sound wave intensity decreases in the polymer", "Acoustic impedance: assessing matching with acoustic media"],
        } }],
        imgs: ["images/stage-ultrasons/03.jpg"],
      },
      {
        h: { fr: "Analyse microstructurelle", en: "Microstructural analysis" },
        blocks: [{ list: {
          fr: ["Comportement thermique local : analyse des dilatations ou contractions thermiques à l'échelle microscopique", "Taille des grains : influence sur les propriétés mécaniques et thermiques", "Porosité : quantification et visualisation des vides ou inclusions"],
          en: ["Local thermal behaviour: thermal expansion or contraction at the microscopic scale", "Grain size: effect on mechanical and thermal properties", "Porosity: quantifying and visualising voids or inclusions"],
        } }],
        imgs: ["images/stage-ultrasons/04.jpg"],
      },
      {
        h: { fr: "Création d'algorithmes sur ImageJ", en: "Building algorithms in ImageJ" },
        blocks: [{ p: {
          fr: "Automatisation du traitement par lots : macro qui applique automatiquement des étapes répétitives (filtrage, segmentation, mesure) à une série d'images, ce qui accélère l'analyse et limite les erreurs.",
          en: "Batch-processing automation: a macro that automatically applies repetitive steps (filtering, segmentation, measurement) to a series of images, speeding up analysis and reducing errors.",
        } }],
        imgs: ["images/stage-ultrasons/05.jpg"],
      },
      {
        h: { fr: "Analyse big data sous RStudio", en: "Big-data analysis in RStudio" },
        blocks: [{ p: {
          fr: "Relation microstructure-propriétés : influence sur la dureté, la ténacité et la résistance thermique.",
          en: "Microstructure–property relationship: effect on hardness, toughness and thermal resistance.",
        } }],
      },
      {
        h: { fr: "Tendance de solidification", en: "Solidification trends" },
        blocks: [{ list: {
          fr: ["Tendance de solidification : analyse des motifs de solidification pour évaluer les variations de structure selon les conditions thermiques", "Aspect fusionné et poudreux : observation comparative des surfaces pour distinguer les zones entièrement fusionnées des zones poudreuses ou mal traitées", "Comparaison avec des échantillons de référence : évaluation des caractéristiques microstructurelles et physiques par rapport à des standards de qualité"],
          en: ["Solidification trends: analysing solidification patterns to assess structural variation under different thermal conditions", "Fused vs powdery appearance: comparative surface observation to tell fully fused regions from powdery or poorly processed ones", "Comparison with reference samples: assessing microstructural and physical characteristics against quality standards"],
        } }],
        imgs: ["images/stage-ultrasons/06.jpg"],
      },
      {
        h: { fr: "Rapport de stage", en: "Internship report" },
        blocks: [{ list: {
          fr: ["Rédaction scientifique claire, structurée et précise", "Analyse et présentation de données : graphiques et interprétations", "Synthèse des observations : conclusions et recommandations"],
          en: ["Clear, structured and precise scientific writing", "Data analysis and presentation: charts and interpretation", "Summary of observations: conclusions and recommendations"],
        } }],
        imgs: ["images/stage-ultrasons/07.jpg"],
      },
      {
        h: { fr: "Compétences personnelles & professionnelles", en: "Personal & professional skills" },
        blocks: [{ list: {
          fr: ["Communication scientifique bilingue", "Gestion et organisation", "Recherche dynamique et proactive", "Analyse de microstructure assistée", "Évaluation acoustique des matériaux", "Programmation scientifique"],
          en: ["Bilingual scientific communication", "Management and organisation", "Dynamic, proactive research", "Computer-assisted microstructure analysis", "Acoustic evaluation of materials", "Scientific programming"],
        } }],
      },
      {
        h: { fr: "Retour d'expérience", en: "Takeaways" },
        blocks: [{ list: {
          fr: ["Meilleur niveau d'anglais", "Introduction au monde de la recherche", "Ouverture d'esprit sur une nouvelle culture"],
          en: ["Improved English", "Introduction to the research world", "Discovering a new culture"],
        } }],
      },
    ],
  },

  /* ------------------------------------------------------------------ BUT 3 */
  "sonde-echographique": {
    kicker: { fr: "Projet tuteuré", en: "Supervised team project" },
    title:  { fr: "Sonde échographique — transducteur à ultrasons", en: "Ultrasound probe — ultrasonic transducer" },
    card:   { fr: "Création d'un transducteur", en: "Designing a transducer" },
    cardSkills: {
      fr: ["Conditionnement de signaux acoustiques", "Pilotage et conditionnement électronique", "Respect d'un cahier des charges"],
      en: ["Acoustic signal conditioning", "Electronic control and conditioning", "Meeting a specification"],
    },
    thumb: "images/vignettes/sonde-echographique.jpg",
    hero: "images/sonde-echographique/01.jpg",
    facts: [
      { k: { fr: "Équipe", en: "Team" }, v: { fr: "11 étudiants", en: "11 students" } },
      { k: { fr: "Partenaire", en: "Partner" }, v: { fr: "Entreprise VERNON", en: "VERNON (company)" } },
      { k: { fr: "Cadre", en: "Context" }, v: { fr: "Projet tuteuré de BUT 3", en: "BUT year-3 supervised project" } },
      { k: { fr: "Outils", en: "Tools" }, v: { fr: "Python (Tkinter) · oscilloscope LAN", en: "Python (Tkinter) · LAN oscilloscope" } },
    ],
    sections: [
      {
        h: { fr: "Contexte et objectifs", en: "Context and objectives" },
        blocks: [{ list: {
          fr: ["Projet universitaire tuteuré en collaboration avec l'entreprise VERNON", "Travail en équipe de 11", "Conception et fabrication de transducteurs (CAO, DAO)", "Pilotage et automatisation des instruments de mesure (Python)", "Développement de solutions d'échographie mobile"],
          en: ["Supervised university project in partnership with the company VERNON", "Team of 11", "Design and fabrication of transducers (CAD)", "Control and automation of measurement instruments (Python)", "Developing mobile ultrasound solutions"],
        } }],
        imgs: ["images/sonde-echographique/02.jpg"],
      },
      {
        h: { fr: "Réalisation d'un transducteur", en: "Building a transducer" },
        blocks: [{ list: {
          fr: ["Pastille piézocéramique", "Backing à 80 % de tungstène", "Lame d'adaptation d'impédance"],
          en: ["Piezoceramic disc", "80% tungsten backing", "Impedance-matching layer"],
        } }],
        imgs: ["images/sonde-echographique/03.jpg"],
      },
      {
        h: { fr: "Pilotage d'un oscilloscope", en: "Oscilloscope control" },
        blocks: [{ list: {
          fr: ["Conditionnement du transducteur", "Acquisition de données en LAN", "Affichage web, design UI/UX"],
          en: ["Transducer conditioning", "Data acquisition over LAN", "Web display, UI/UX design"],
        } }],
        imgs: ["images/sonde-echographique/04.jpg"],
      },
      {
        h: { fr: "Sonde échographique mobile", en: "Mobile ultrasound probe" },
        blocks: [{ list: {
          fr: ["Détection automatique d'écho", "Conception mécanique (transducteur, PCB)", "Génération d'ultrasons"],
          en: ["Automatic echo detection", "Mechanical design (transducer, PCB)", "Ultrasound generation"],
        } }],
        imgs: ["images/sonde-echographique/05.jpg"],
      },
      {
        h: { fr: "Chaîne d'acquisition", en: "Acquisition chain" },
        blocks: [{ list: {
          fr: ["Émission (générateur d'ultrasons)", "Capteur ultrasonore (transducteur)", "Instrument de mesure (oscilloscope)"],
          en: ["Emission (ultrasound generator)", "Ultrasonic sensor (transducer)", "Measuring instrument (oscilloscope)"],
        } }],
        imgs: ["images/sonde-echographique/06.jpg"],
      },
      {
        h: { fr: "Communication avec l'oscilloscope en Ethernet", en: "Ethernet communication with the oscilloscope" },
        imgs: ["images/sonde-echographique/07.jpg"],
      },
      {
        h: { fr: "Visualisation dans le domaine temporel", en: "Time-domain view" },
        blocks: [{ list: { fr: ["Délimitation d'un écho"], en: ["Isolating an echo"] } }],
        imgs: ["images/sonde-echographique/08.jpg"],
      },
      {
        h: { fr: "Visualisation dans le domaine fréquentiel", en: "Frequency-domain view" },
        blocks: [{ list: {
          fr: ["Échelle logarithmique (dB)", "Lobe de bande passante à −6 dB", "Fréquence de résonance à 2,5 MHz"],
          en: ["Logarithmic scale (dB)", "−6 dB bandwidth lobe", "Resonant frequency at 2.5 MHz"],
        } }],
        imgs: ["images/sonde-echographique/09.jpg"],
      },
      {
        h: { fr: "Exécutable local", en: "Standalone executable" },
        blocks: [{ list: {
          fr: ["Architecture en Python (bibliothèque Tkinter)", "Export des données en CSV", "Aide UI/UX intégrée et fiche de vie"],
          en: ["Python architecture (Tkinter library)", "Data export to CSV", "Built-in UI/UX help and equipment log sheet"],
        } }],
        imgs: ["images/sonde-echographique/10.jpg"],
      },
      {
        h: { fr: "Compétences mobilisées", en: "Skills applied" },
        blocks: [
          { label: { fr: "Savoir-faire", en: "Technical skills" }, list: {
            fr: ["Conception et fabrication d'un transducteur ultrasonore avec des matériaux et techniques avancés (piézocéramique, tungstène)", "Programmation et pilotage d'un oscilloscope pour l'acquisition de données via une liaison LAN", "Développement et optimisation d'une sonde échographique mobile intégrant des solutions mécaniques et électroniques innovantes"],
            en: ["Designing and building an ultrasonic transducer using advanced materials and techniques (piezoceramic, tungsten)", "Programming and controlling an oscilloscope for data acquisition over a LAN link", "Developing and optimising a mobile ultrasound probe combining innovative mechanical and electronic solutions"],
          } },
          { label: { fr: "Savoir-être", en: "Soft skills" }, list: {
            fr: ["Collaboration efficace au sein d'une équipe pluridisciplinaire de 11 membres, avec une répartition claire des rôles et responsabilités (gestion de projet)", "Adaptabilité face aux défis techniques et organisationnels", "Communication régulière et proactive avec l'entreprise partenaire pour aligner les attentes et respecter le cahier des charges"],
            en: ["Effective collaboration in a multidisciplinary team of 11, with clearly assigned roles and responsibilities (project management)", "Adaptability to technical and organisational challenges", "Regular, proactive communication with the partner company to align expectations and meet the specification"],
          } },
        ],
      },
    ],
  },

  "stage-technicien": {
    kicker: { fr: "Stage de 3e année — BUT Mesures Physiques", en: "Final-year internship — BUT Physical Measurements" },
    title:  { fr: "Technicien analyste — banc d'essai moteur fusée", en: "Test analyst technician — rocket engine test bench" },
    card:   { fr: "Adéquation des voies de mesure d'un banc d'essai moteur fusée", en: "Measurement-channel validation on a rocket engine test bench" },
    cardSkills: {
      fr: ["Chaîne d'instrumentation", "Investigation d'anomalies capteurs", "Programmation Python"],
      en: ["Instrumentation chain", "Sensor anomaly investigation", "Python programming"],
    },
    thumb: "images/vignettes/stage-technicien.jpg",
    hero: "images/stage-technicien/01.jpg",
    facts: [
      { k: { fr: "Entreprise", en: "Company" }, v: { fr: "ArianeGroup", en: "ArianeGroup" } },
      { k: { fr: "Lieu", en: "Location" }, v: { fr: "Vernon (Eure)", en: "Vernon, France" } },
      { k: { fr: "Durée", en: "Duration" }, v: { fr: "14 semaines, 2025", en: "14 weeks, 2025" } },
      { k: { fr: "Outils", en: "Tools" }, v: { fr: "Python · EtherCAT · Modbus", en: "Python · EtherCAT · Modbus" } },
    ],
    sections: [
      {
        h: { fr: "Technicien analyste banc d'essai moteur fusée", en: "Test analyst, rocket engine test bench" },
        blocks: [{ p: {
          fr: "Stage de 14 semaines — zone d'essais de Vernon (Eure, 27).",
          en: "14-week internship — test site in Vernon (Eure, France).",
        } }],
        imgs: ["images/stage-technicien/02.jpg"],
      },
      {
        h: { fr: "Mission de stage", en: "Internship assignment" },
        blocks: [{ list: {
          fr: ["Investigation des anomalies capteurs", "Création d'un outil d'adéquation des voies de mesure"],
          en: ["Investigating sensor anomalies", "Building a measurement-channel validation tool"],
        } }],
        imgs: ["images/stage-technicien/03.jpg", "images/stage-technicien/04.jpg", "images/stage-technicien/13.jpg"],
      },
      {
        h: { fr: "Chaîne d'instrumentation du moteur Prometheus", en: "Prometheus engine instrumentation chain" },
        blocks: [{ list: {
          fr: ["Plus de 700 voies de mesure (températures, pressions, vibrations)", "Acquisition des mesures par protocoles EtherCAT et Modbus", "Paramètres de filtrage (type, ordre, fréquence de coupure)"],
          en: ["700+ measurement channels (temperature, pressure, vibration)", "Data acquisition over EtherCAT and Modbus", "Filter settings (type, order, cut-off frequency)"],
        } }],
        imgs: ["images/stage-technicien/05.jpg", "images/stage-technicien/06.jpg", "images/stage-technicien/07.jpg", "images/stage-technicien/08.jpg", "images/stage-technicien/12.jpg"],
      },
      {
        h: { fr: "Outil d'adéquation des voies de mesure", en: "Measurement-channel validation tool" },
        blocks: [{ list: {
          fr: ["Codé en Python (interface utilisateur, algorithme de recherche et de comparaison avec une base de données)", "Cahier des charges officiel, commandé par l'entreprise"],
          en: ["Written in Python (user interface, database search and comparison algorithm)", "Official specification commissioned by the company"],
        } }],
        imgs: ["images/stage-technicien/09.jpg", "images/stage-technicien/10.jpg", "images/stage-technicien/11.jpg"],
      },
      {
        h: { fr: "Essais moteurs", en: "Engine tests" },
        blocks: [{ list: {
          fr: ["Prométhée mk1.3", "Vulcain 2.1", "Vinci"],
          en: ["Prometheus mk1.3", "Vulcain 2.1", "Vinci"],
        } }],
        imgs: ["images/stage-technicien/14.jpg", "images/stage-technicien/15.jpg"],
      },
      {
        h: { fr: "Compétences mobilisées", en: "Skills applied" },
        blocks: [
          { label: { fr: "Savoir-faire", en: "Technical skills" }, list: {
            fr: ["Mettre en œuvre une chaîne d'instrumentation", "Investigation d'anomalies capteurs", "Programmation en Python, création d'application"],
            en: ["Implementing an instrumentation chain", "Sensor anomaly investigation", "Python programming, application development"],
          } },
          { label: { fr: "Savoir-être", en: "Soft skills" }, list: {
            fr: ["Travail en équipe", "Rigueur et autonomie", "Dynamisme et gestion de tâches en parallèle"],
            en: ["Teamwork", "Rigour and autonomy", "Energy and multitasking"],
          } },
        ],
      },
    ],
  },
};

/* Bilan de compétences.
   Chaque compétence : name, desc, et proofs = identifiants des projets où elle a été mise en œuvre. */
const SKILLS_PAGE = {
  title: { fr: "Bilan de compétences", en: "Skills summary" },
  intro: {
    fr: "Ce bilan rassemble ce que je sais faire aujourd'hui. La spécialité SEI de Phelma forme le cœur de mon profil ; le BUT Mesures Physiques m'a apporté un socle en instrumentation et en métrologie que je mobilise dans mes projets d'électronique. Chaque compétence renvoie aux projets où je l'ai mise en œuvre.",
    en: "This summary gathers what I can do today. The SEI specialisation at Phelma is the core of my profile; the BUT in Physical Measurements gave me a foundation in instrumentation and metrology that I use in my electronics projects. Each skill links to the projects where I applied it.",
  },
  groups: [
    {
      featured: true,
      tag:   { fr: "Spécialité · Grenoble INP – Phelma, SEI", en: "Specialisation · Grenoble INP – Phelma, SEI" },
      title: { fr: "Conception de circuits intégrés", en: "Integrated circuit design" },
      items: [
        { name: { fr: "Conception numérique RTL", en: "Digital RTL design" },
          desc: { fr: "SystemVerilog : FSM synthétisables, chemins de données, interfaces ADC/DAC.", en: "SystemVerilog: synthesisable FSMs, datapaths, ADC/DAC interfaces." },
          proofs: ["filtre-rif"] },
        { name: { fr: "Vérification", en: "Verification" },
          desc: { fr: "Bancs de test, Lint SpyGlass, simulations post-synthèse et post-placement-routage.", en: "Testbenches, SpyGlass Lint, post-synthesis and post-place-and-route simulation." },
          proofs: ["filtre-rif"] },
        { name: { fr: "Synthèse logique ASIC", en: "ASIC logic synthesis" },
          desc: { fr: "Synopsys Design Compiler sur cellules AMS 0,35 µm : contraintes, chemin critique, slacks, consommation.", en: "Synopsys Design Compiler on AMS 0.35 µm cells: constraints, critical path, slacks, power." },
          proofs: ["filtre-rif"] },
        { name: { fr: "Placement-routage", en: "Place-and-route" },
          desc: { fr: "Cadence Innovus : floorplan, alimentation, arbre d'horloge, routage, DRC.", en: "Cadence Innovus: floorplan, power grid, clock tree, routing, DRC." },
          proofs: ["filtre-rif"] },
        { name: { fr: "Cellules standard full-custom", en: "Full-custom standard cells" },
          desc: { fr: "Dimensionnement et layout CMOS sous Cadence Virtuoso, DRC/LVS Calibre, simulation post-extraction.", en: "CMOS sizing and layout in Cadence Virtuoso, Calibre DRC/LVS, post-extraction simulation." },
          proofs: ["filtre-rif"] },
        { name: { fr: "Prototypage FPGA", en: "FPGA prototyping" },
          desc: { fr: "Synthèse et implémentation sur Xilinx Spartan-7 (Precision, Vivado), comparaison avec l'ASIC.", en: "Synthesis and implementation on Xilinx Spartan-7 (Precision, Vivado), compared with the ASIC." },
          proofs: ["filtre-rif"] },
        { name: { fr: "Traitement numérique du signal", en: "Digital signal processing" },
          desc: { fr: "Filtrage RIF, architecture multiplieur-accumulateur, réponses impulsionnelle et indicielle.", en: "FIR filtering, multiply-accumulate architecture, impulse and step responses." },
          proofs: ["filtre-rif"] },
        { name: { fr: "Analogique, mixte et RF", en: "Analog, mixed-signal and RF" },
          desc: { fr: "Technologie CMOS, blocs analogiques, bases des chaînes RF (Cadence Virtuoso, LTspice).", en: "CMOS technology, analog blocks, RF chain fundamentals (Cadence Virtuoso, LTspice)." },
          proofs: [] },
        { name: { fr: "Systèmes embarqués autonomes", en: "Autonomous embedded systems" },
          desc: { fr: "Microcontrôleurs en C, interfaces capteurs, gestion d'énergie et modes veille.", en: "Microcontrollers in C, sensor interfaces, energy management and sleep modes." },
          proofs: ["energie-spatiale", "chaine-mesure"] },
      ],
    },
    {
      tag:   { fr: "Socle · BUT Mesures Physiques", en: "Foundation · BUT Physical Measurements" },
      title: { fr: "Instrumentation et mesure", en: "Instrumentation and measurement" },
      items: [
        { name: { fr: "Conception de chaînes de mesure", en: "Measurement chain design" },
          desc: { fr: "Du capteur à l'acquisition et à l'affichage des données.", en: "From sensor to data acquisition and display." },
          proofs: ["sonde-echographique", "nitrites", "chaine-mesure"] },
        { name: { fr: "Chaînes d'instrumentation", en: "Instrumentation chains" },
          desc: { fr: "Banc de plus de 700 voies, acquisition EtherCAT et Modbus, paramètres de filtrage.", en: "700+ channel test bench, EtherCAT and Modbus acquisition, filter settings." },
          proofs: ["stage-technicien"] },
        { name: { fr: "Conditionnement de signal", en: "Signal conditioning" },
          desc: { fr: "Amplification, filtrage et adaptation d'impédance entre capteur et acquisition.", en: "Amplification, filtering and impedance matching between sensor and acquisition." },
          proofs: ["sonde-echographique", "nitrites"] },
        { name: { fr: "Métrologie et incertitudes", en: "Metrology and uncertainty" },
          desc: { fr: "Étalonnage, calcul d'incertitudes, respect d'un cahier des charges métrologique.", en: "Calibration, uncertainty analysis, meeting a metrological specification." },
          proofs: ["nitrites", "pendule"] },
        { name: { fr: "Analyse de mesures et d'anomalies", en: "Measurement and anomaly analysis" },
          desc: { fr: "Investigation des anomalies capteurs, exploitation et interprétation de résultats.", en: "Sensor anomaly investigation, processing and interpreting results." },
          proofs: ["stage-technicien", "stage-ultrasons"] },
      ],
    },
  ],
  tools: {
    title: { fr: "Logiciels et langages", en: "Software and languages" },
    rows: [
      { label: { fr: "Conception de circuits", en: "Circuit design" }, items: ["Cadence Virtuoso", "Cadence Innovus", "Synopsys Design Compiler", "Calibre (DRC/LVS)", "SpyGlass", "LTspice"] },
      { label: { fr: "FPGA", en: "FPGA" }, items: ["Xilinx Vivado", "Precision"] },
      { label: { fr: "Cartes et mécanique", en: "Boards and mechanics" }, items: ["KiCad (PCB)", "Fusion 360 (DAO)"] },
      { label: { fr: "Langages", en: "Languages" }, items: ["SystemVerilog", "C", "Python"] },
      { label: { fr: "Environnement", en: "Environment" }, items: ["Linux", "Docker"] },
    ],
  },
  languages: {
    title: { fr: "Langues", en: "Languages" },
    items: [
      { name: { fr: "Français", en: "French" }, level: { fr: "Langue maternelle", en: "Native" } },
      { name: { fr: "Anglais", en: "English" }, level: { fr: "TOEIC 910 (B2+), 2025 · Cambridge B2, 2022", en: "TOEIC 910 (B2+), 2025 · Cambridge B2, 2022" },
        note: { fr: "Stage de recherche de 11 semaines en anglais et co-auteur d'un article scientifique publié en anglais.", en: "11-week research internship in English and co-author of a scientific paper published in English." } },
    ],
  },
  extra: {
    tag:   { fr: "En autodidacte", en: "Self-taught" },
    title: { fr: "IA et outils informatiques", en: "AI and computing tools" },
    intro: { fr: "Un centre d'intérêt personnel devenu un outil de travail, au service de mes projets d'électronique.", en: "A personal interest that became a working tool, in support of my electronics projects." },
    items: [
      { name: { fr: "Usage encadré de l'IA", en: "Supervised use of AI" },
        desc: { fr: "Référent IA d'une équipe de 10 : registre des usages, choix de l'outil adapté, vérification des réponses.", en: "AI lead for a team of 10: usage log, choosing the right tool, checking the answers." },
        proofs: ["energie-spatiale"] },
      { name: { fr: "Prompts et assistants de code", en: "Prompting and coding assistants" },
        desc: { fr: "Rédaction de prompts précis ; simulations Python générées avec Claude Code, puis vérifiées.", en: "Writing precise prompts; Python simulations generated with Claude Code, then verified." },
        proofs: ["energie-spatiale"] },
      { name: { fr: "IA en local", en: "Local AI" },
        desc: { fr: "Installation et utilisation de modèles sur ma propre machine ; veille sur les nouveautés.", en: "Installing and running models on my own machine; keeping up with new releases." } },
      { name: { fr: "Linux et Docker", en: "Linux and Docker" },
        desc: { fr: "Environnements de travail sous Linux, services déployés en conteneurs.", en: "Linux working environments, services deployed in containers." } },
    ],
  },
  soft: {
    title: { fr: "Savoir-être", en: "Soft skills" },
    items: [
      { name: { fr: "Travail en équipe", en: "Teamwork" },
        desc: { fr: "Projets à 10 et 11 personnes : planning Gantt, outils partagés, jalons d'avancement.", en: "Projects with teams of 10 and 11: Gantt planning, shared tools, progress milestones." },
        proofs: ["energie-spatiale", "sonde-echographique"] },
      { name: { fr: "Rigueur", en: "Rigour" },
        desc: { fr: "Vérification de plus de 700 voies de mesure sur un banc d'essai moteur ; contrôle qualité de pièces de précision en atelier.", en: "Checking 700+ measurement channels on an engine test bench; quality control of precision parts in a workshop." },
        proofs: ["stage-technicien", "stage-ouvrier"] },
      { name: { fr: "Autonomie", en: "Autonomy" },
        desc: { fr: "Stage de recherche à l'étranger, en anglais, sur un sujet nouveau.", en: "Research internship abroad, in English, on a new subject." },
        proofs: ["stage-ultrasons"] },
      { name: { fr: "Adaptabilité", en: "Adaptability" },
        desc: { fr: "Passage de la mesure physique à la conception de circuits intégrés.", en: "Moving from physical measurement to integrated circuit design." },
        proofs: ["filtre-rif"] },
    ],
  },
};
