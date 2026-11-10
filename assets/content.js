/* =====================================================================
   CONTENU DU PORTFOLIO  —  c'est le SEUL fichier à modifier pour le texte.
   Chaque texte existe en deux versions : { fr: "...", en: "..." }.
   Les images sont dans le dossier /images (voir README.md).
   ===================================================================== */

const SITE = {
  name: "Armand NAVARRE",
  email: "armand.nvre@gmail.com",
  linkedin: "", // ex. "https://www.linkedin.com/in/ton-profil" (laisser vide pour masquer)
  // CV téléchargeables (un bouton par langue ; laisser vide pour masquer)
  cv: { fr: "docs/CV_Armand_Navarre_FR.pdf", en: "docs/CV_Armand_Navarre_EN.pdf" },
};

const UI = {
  home:        { fr: "Accueil", en: "Home" },
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
  cvFr:        { fr: "CV en français", en: "CV in French" },
  cvEn:        { fr: "CV en anglais", en: "CV in English" },
  keySkills:   { fr: "Compétences clés", en: "Key skills" },
  explore:     { fr: "Explorer mes projets", en: "Explore my projects" },
  seeYear:     { fr: "Voir les projets", en: "See the projects" },
  notFound:    { fr: "Page introuvable.", en: "Page not found." },
};

const HOME = {
  title:   { fr: "Mon portfolio", en: "My portfolio" },
  tagline: {
    fr: "Élève ingénieur en électronique à Grenoble INP – Phelma, filière SEI (Systèmes Électroniques Intégrés).",
    en: "Electronics engineering student at Grenoble INP – Phelma, SEI track (Integrated Electronic Systems).",
  },
  intro: {
    fr: "Avant l'école d'ingénieurs, j'ai suivi un BUT Mesures Physiques en 3 ans à l'IUT de Blois, avec deux stages : un stage de recherche en acoustique ultrasonore à Helsinki et un stage de technicien analyste sur un banc d'essai de moteurs fusée. Ce portfolio présente mes projets et mes expériences.",
    en: "Before engineering school, I completed a 3-year BUT (Bachelor of Technology) in Physical Measurements at IUT de Blois, including two internships: a research internship in ultrasonic acoustics in Helsinki and a test analyst internship on a rocket engine test bench. This portfolio presents my projects and experience.",
  },
  photo: "images/profil.jpg",
  // Compétences clés affichées sur l'accueil (ajoute/retire librement des badges)
  skills: [
    {
      title: { fr: "Électronique & instrumentation", en: "Electronics & instrumentation" },
      items: {
        fr: ["Chaînes d'instrumentation", "Métrologie & incertitudes", "Conditionnement de signal", "Acquisition EtherCAT / Modbus", "Ultrasons & transducteurs"],
        en: ["Instrumentation chains", "Metrology & uncertainty", "Signal conditioning", "EtherCAT / Modbus acquisition", "Ultrasound & transducers"],
      },
    },
    {
      title: { fr: "Programmation", en: "Programming" },
      items: {
        fr: ["Python (Tkinter, analyse de données)", "Arduino / ESP32", "Raspberry Pi", "R / RStudio", "HTML / CSS"],
        en: ["Python (Tkinter, data analysis)", "Arduino / ESP32", "Raspberry Pi", "R / RStudio", "HTML / CSS"],
      },
    },
    {
      title: { fr: "Outils", en: "Tools" },
      items: {
        fr: ["KiCad (circuits imprimés)", "Modélisation 3D (CAO / DAO)", "Oscilloscope & pilotage LAN", "Dewesoft", "ImageJ / Fiji", "Excel"],
        en: ["KiCad (PCB design)", "3D modelling (CAD)", "Oscilloscope & LAN control", "Dewesoft", "ImageJ / Fiji", "Excel"],
      },
    },
    {
      title: { fr: "Langues & savoir-être", en: "Languages & soft skills" },
      items: {
        fr: ["Français (langue maternelle)", "Anglais B2 (Cambridge)", "Travail en équipe", "Rigueur & autonomie"],
        en: ["French (native)", "English B2 (Cambridge)", "Teamwork", "Rigour & autonomy"],
      },
    },
  ],
};

/* Années : l'ordre ici = l'ordre dans le menu et sur l'accueil */
const YEARS = [
  {
    id: "but1",
    title:  { fr: "BUT 1ère année", en: "BUT – Year 1" },
    school: { fr: "IUT de Blois — BUT Mesures Physiques", en: "IUT de Blois — BUT in Physical Measurements" },
    projects: ["pendule", "chaine-mesure"],
  },
  {
    id: "but2",
    title:  { fr: "BUT 2ème année", en: "BUT – Year 2" },
    school: { fr: "IUT de Blois — BUT Mesures Physiques", en: "IUT de Blois — BUT in Physical Measurements" },
    projects: ["nitrites", "stage-ultrasons"],
  },
  {
    id: "but3",
    title:  { fr: "BUT 3ème année", en: "BUT – Year 3" },
    school: { fr: "IUT de Blois — BUT Mesures Physiques", en: "IUT de Blois — BUT in Physical Measurements" },
    projects: ["sonde-echographique", "stage-technicien"],
  },
];

/* Projets.
   Une section = { h: titre, blocks: [...], imgs: [...] }
   Un bloc = { p: texte } ou { label: titre de liste (optionnel), list: [...] } ou { note: texte } */
const PROJECTS = {

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
    sections: [
      {
        h: { fr: "Technicien analyste banc d'essai moteur fusée", en: "Test analyst, rocket engine test bench" },
        blocks: [{ p: {
          fr: "Stage de 13 semaines — zone d'essais de Vernon (Eure, 27).",
          en: "13-week internship — test site in Vernon (Eure, France).",
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

const SKILLS_PAGE = {
  title: { fr: "Bilan de compétences", en: "Skills summary" },
  images: ["images/bilan/01.jpg"],
};
