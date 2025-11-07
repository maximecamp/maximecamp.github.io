/**
 * Configuration des projets
 * 
 * Pour ajouter un nouveau projet :
 * 1. Ajoutez un objet avec les propriétés suivantes :
 *    - slug: string (URL-friendly, ex: "mon-projet")
 *    - title: string (Titre affiché)
 *    - tags: string[] (Technologies utilisées)
 *    - description: string (Description courte)
 *    - link: string (URL externe, optionnel)
 *    - logo: string (Chemin vers l'image du logo)
 *    - paragraphs: Array<{...}> (Contenu détaillé)
 * 
 * 2. Pour les listes dans les paragraphes, utilisez :
 *    - style: "checkmark" | "dotted" | "decimal" | "none" (optionnel, défaut: "dotted")
 *    - "checkmark" : Liste avec icônes de validation SVG (✓)
 *    - "dotted" : Liste avec des points (•) - couleur du texte
 *    - "decimal" : Liste numérotée (1., 2., 3.)
 *    - "none" : Liste sans puce ni numérotation
 * 
 * 3. Pour les images, utilisez :
 *    - src: string (Chemin vers l'image)
 *    - alt: string (Texte alternatif)
 *    - position: "center" | "left" | "right" (Position de l'image)
 *    - legend: string (Légende sous l'image, optionnel)
 */

export const data = {
  header: {
    title: "Projets",
  },
  projects: [
    {
      slug: "obadia",
      title: "Obadia",
      tags: ["Mobile", "Web", "API", "Flutter"],
      description: "Obadia est une application sociale dédiée à la recommandation de films, boostée à l'IA (4 ans avant ChatGPT). Je suis son fondateur et j'ai travaillé sur l'application cross-platform Android et iOS en Flutter, la création du site vitrine et de l'API.",
      link: "",
      logo: "/images/projects/obadia/logo-nobackground.png",
      paragraphs: [
        {
          title: "",
          text: "",
          images: [
            { src: "/images/projects/obadia/obadia_cover.jpg", alt: "cover", position: "center", legend: "" },
          ] 
        },
        {
          title: "Le défi",
          text: "L'objectif était de résoudre le problème de la fatigue décisionnelle en matière de films. Nous voulions créer un système qui ne se base pas uniquement sur des algorithmes froids, mais qui intègre la pertinence des recommandations sociales.",
          images: []
        },
        {
          title: "La solution",
          text: "Nous avons développé notre propre IA et repoussé les limites de l'ergonomie afin d'offrir à nos utilisateurs les meilleurs recommandations de films possibles. Obadia est la première application à combiner la puissance de l'IA avec les recommandations de vos amis, pour une pertinence maximale. ", 
          images: [
            { src: "/images/projects/obadia/ads.png", alt: "Ads", position: "center", legend: "" },
            { src: "/images/projects/obadia/ad2.png", alt: "Ad2", position: "center", legend: "" },
            { src: "/images/projects/obadia/ad3.png", alt: "Ad3", position: "center", legend: "" },
          ] 
        },
        { 
          title: "L'application",
          text: "", 
          images: [
            { src: "/images/projects/obadia/homepage.jpg", alt: "Homepage", position: "center", legend: "Films sous forme de cartes à swipper" },
            { src: "/images/projects/obadia/moviedetail.jpg", alt: "Movie Detail", position: "center", legend: "Détails d'un film" },
            { src: "/images/projects/obadia/reco.jpg", alt: "Movie Recomendation", position: "center", legend: "Films recommandés par l'IA" },
            { src: "/images/projects/obadia/watchlist.jpg", alt: "Watchlist", position: "center", legend: "Liste de films à voir" },
            { src: "/images/projects/obadia/review.png", alt: "Movie Review", position: "center", legend: "Avis et notes" },
            { src: "/images/projects/obadia/casting.png", alt: "Casting", position: "center", legend: "Equipe du film" },
            { src: "/images/projects/obadia/actor.jpg", alt: "Actor", position: "center", legend: "Détails d'un acteur" },
            { src: "/images/projects/obadia/actorbio.jpg", alt: "Biography", position: "center", legend: "Biographie d'un acteur"},
          ]
        },        
        { 
          title: "Architecture technique",
          text: "L'architecture technique du backend repose sur une stack à haute performance en matière d'intelligence artificielle avec l'utilisation d'une base de données en graph (Neo4j), Python et Ruby on rails pour les APIs, et PostgreSQL pour la persistance des données. Le déploiement est effectué via Docker et Kubernetes sur AWS, avec un pipeline CI/CD automatisé via GitLab.", 
          images: [
            { src: "/images/projects/obadia/architecture.png", alt: "Architecture", position: "center", legend: "Architecture" },
            { src: "/images/projects/obadia/services.png", alt: "Microservices", position: "center", legend: "Microservices" },
          ]
        }
      ]
    },
    {
      slug: "cygne",
      title: "Cygne",
      tags: ["Mobile", "Flutter"],
      description: "Développement d'une application de rencontre, conçue avec Flutter. Cygne se distingue en mettant en relation des utilisateurs sur la base de leurs affinités cinématographiques, leur permettant de trouver des personnes partageant les mêmes goûts en matière de films.",
      link: "",
      logo: "/images/svg/cygne.svg",
      paragraphs: [
        {
          title: "Connecter les passionnés de cinéma",
          text: "Le concept est de connecter les gens grâce à leur passion commune pour le cinéma. Plutôt que de se baser uniquement sur les profils traditionnels, l'application permet aux utilisateurs de découvrir des personnes ayant des goûts similaires aux leurs en matière de films.",
          images: [
            { src: "/images/projects/cygne/homepageall.png", alt: "homepage", position: "right", legend: "" },
          ] 
        },
        { 
          title: "Mes contributions",
          text: "En tant que développeur sur ce projet, j'ai fait le choix de la technologie Flutter. Ceci a permis de créer une expérience utilisateur fluide pour les plateformes iOS et Android à partir d'une seule base de code, et d'accélérer le développement.",
          images: [
            { src: "/images/projects/cygne/login.jpg", alt: "login", position: "center", legend: "Connexion et inscription" },
            { src: "/images/projects/cygne/movies.jpg", alt: "movies", position: "center", legend: "Accueil avec la liste des films" },
            { src: "/images/projects/cygne/abo.jpg", alt: "subscribe", position: "center", legend: "Page d'abonnement" },
          ],
          list: [
            { title: "Fonctionnalités développées :", items: [
              "Système d'authentification des utilisateurs.",
              "Interface de sélection et de notation de films.",
              "Système de mise en relation basé sur les préférences de films.",
              "Gestion des abonnements et des profils."
            ], style: "checkmark" as const
            }
          ]
        }
      ]
    },
    {
      slug: "mybatteryhealth-mobile",
      title: "My Battery Health - Mobile",
      tags: ["Mobile", "Flutter"],
      description: "J'ai développé un module Flutter pour permettre la communication avec l'API Nissan Connect pour l'analyse des batteries des voitures électriques.",
      link: "https://www.mybatteryhealth.com/en/home-old/",
      logo: "/images/projects/mybatteryhealth/logo.png",
      paragraphs: [
        { 
          title: "Analyse de l'état de santé des batteries de voitures électriques",
          text: "MyBatteryHealth est une application mobile native développée en Kotlin et Swift qui permet aux utilisateurs de surveiller l'état de santé de la batterie de leur voiture électrique. L'application utilise des algorithmes d'analyse prédictive pour évaluer la dégradation des batteries et propose des stratégies d'optimisation personnalisées. L'interface utilisateur intuitive et les graphiques interactifs facilitent la compréhension des données techniques.", 
          images: [] 
        },
        { 
          title: "Mes contributions",
          text: "", 
          images: [], 
          list: [ { title: "", items: [
              "J'ai développé un module Flutter autonome pour l'intégration d'une API tierce (Nissan Connect) au sein d'une application native existante.",
              "J'ai travaillé sur la base de code native Android (Kotlin) pour identifier et corriger des bugs, améliorant ainsi la stabilité et la performance de l'application.",
              "J'ai pris en charge l'intégralité du processus de publication de l'application sur le Play Store (Android) et l'App Store (iOS), incluant la configuration, la soumission et la gestion des mises à jour."
            ], style: "checkmark" as const
            }
          ]
        }
      ]
    },
    {
      slug: "mirage",
      title: "Mirage",
      tags: ["Mobile", "React Native", "Web", "Javascript", "Extension Chrome"],
      description: "Mirage est une application mobile et une extension Chrome développée dans le but de contourner les restrictions d'accès à des contenus, en fonction des règles définies par l'utilisateur.",
      link: "",
      logo: "/images/svg/mirage.svg",
      paragraphs: [
        { 
          title: "Une solution multi-plateformes pour contourner les restrictions d'accès",
          text: "L'objectif de Mirage était de développer un outil permettant aux utilisateurs de naviguer sur le web selon leurs propres règles, en contournant les restrictions d'accès au contenu. Pour couvrir les cas d'usage mobiles et de bureau, j'ai développé ce projet sur deux plateformes distinctes. Une application mobile (React Native) et une extension Chrome (JavaScript). Ce projet démontre ma capacité à concevoir des outils complexes fonctionnant sur différentes plateformes, en utilisant des technologies adaptées à chaque environnement.", 
          images: [] 
        },
        { 
          title: "Application mobile (iOS & Android)",
          text: "", 
          images: [], 
          list: [ { title: "", items: [
              "J'ai utilisé React Native avec TypeScript pour le développement cross-platform, permettant de partager une base de code majeure entre iOS et Android.",
              "Pour les fonctionnalités spécifiques de navigation et filtrage, j'ai intégré des modules natifs personnalisés en Kotlin (Android) et Swift (iOS) afin de piloter finement la webview et les requêtes HTTP.",
            ], style: "none" as const}
          ]
        },
        { 
          title: "Extension Chrome (Navigateur de bureau)",
          text: "", 
          images: [], 
          list: [ { title: "", items: [
              "Pour une intégration légère et très performante sur le navigateur, j'ai développé l'extension en JavaScript pur.",
              "L'utilisation de l'API Chrome a permis une mise en œuvre efficace et directe des fonctionnalités de filtrage, adaptées à la simplicité requise par ce cas d'usage."
            ], style: "none" as const}
          ]
        },
        { 
          title: "",
          text: "Ce projet met en avant mon expertise en développement React Native, ma capacité à intégrer du code natif (Kotlin/Swift) pour des besoins spécifiques complexes, ainsi que ma maîtrise du JavaScript et des API de navigateur.", 
          images: []
        }
      ]
    },
    {
      slug: "samplerecorder",
      title: "Sample Recorder",
      tags: ["Web", "Javascript", "Extension Chrome"],
      description: "Une extension Chrome légère conçue pour les créateurs de musique. Sample Recorder permet aux musiciens et producteurs d'enregistrer n'importe quel extrait audio directement depuis leur navigateur, simplifiant ainsi le processus de sampling et de création musicale..",
      link: "",
      logo: "/images/svg/samplerecorder.svg",
      paragraphs: [
        {
          title: "Capturez l'inspiration instantanément",
          text: "Pour les producteurs, les DJ et les musiciens, l'inspiration peut venir de n'importe où sur le web. SampleRecorder est une extension Chrome que j'ai développée pour éliminer toute friction dans le processus créatif. Elle permet l'enregistrement direct d'extraits audio lus dans le navigateur. D'un simple clic, capturez ce hook parfait, cette ligne de dialogue ou cette texture sonore unique pour l'intégrer instantanément à vos productions.",
          images: []
        },
        {
          title: "La solution",
          text: "Un outil instantané, fiable et intégré au navigateur qui utilise l'API Web Audio pour capturer proprement le son de n'importe quel onglet.",
          images: [],
          list: [ { title: "Fonctionnalités principales :", items: [
              "Lancez et arrêtez l'enregistrement en un clic.",
              "Haute Qualité : Capture le son sans perte de qualité, tel qu'il est diffusé.",
              "Téléchargement immédiat des extraits enregistrés au format wav.",
              "Non intrusive et un impact minimal sur les performances du navigateur.",
            ], style: "checkmark" as const}
          ]
        },
        {
          title: "Défis techniques",
          text: "Le principal défi a été de capturer le flux audio de manière fiable et avec une qualité optimale. La manipulation précise avec la Web Audio API a été cruciale pour garantir une capture propre et sans latence.",
          images: [],
        }
      ]
    },
    {
      slug: "docaposte",
      title: "Docaposte - La Poste",
      tags: ["Web", "API",],
      description: "Intervention sur un projet stratégique de générateur No-Code d'applications métier, destiné à accélérer la digitalisation des processus internes.",
      link: "",
      logo: "/images/svg/laposte.svg",
      paragraphs: [
        {
          title: "Développement de modules No-Code",
          text: "J'ai développé une gamme de modules personnalisables et réutilisables (JavaScript, Blockly, Backbone.js) pour ce générateur. L'objectif était de permettre aux autres équipes de La Poste (non-techniques) de construire leurs propres applications.",
          images: []
        },
        {
          title: "Fonctionnalités logistiques",
          text: "J'ai notamment livré des modules complexes et critiques, incluant un catalogue de produits complet (avec filtres avancés et recherche) et un module de lecture de codes-barres et QR codes optimisé pour les terminaux mobiles.",
          images: []
        },
        {
          title: "Intervention Fullstack",
          text: "J'ai travaillé sur l'ensemble de la stack technique, de l'interface utilisateur (JavaScript, Gulp.js) à la logique métier et aux API côté serveur (Node.js), assurant la cohérence et la performance de la solution.",
          images: [],
          list: [ { title: "Technologies utilisées :", items: [
              "JavaScript et Gulp.js pour l'interface utilisateur",
              "Node.js pour les API côté serveur",
              "Blockly pour la logique No-Code",
              "Backbone.js pour l'architecture frontend"
            ], style: "dotted" as const}
          ]
        }
      ]
    },
    {
      slug: "vo2group-1",
      title: "VO2 Group - Recherche Santé",
      tags: ["Web", "API", "Mobile", "Ionic", "React", "Node.js", "Typescript"],
      description: "En tant que consultant, j'ai développé une plateforme complète (API, application web et application mobile cross-plateforme iOS/Android) destinée à la recherche dans le domaine de la santé.",
      technologies: [
        { "what": "API", "using": ["Node.js", "Typescript"]},
        { "what": "Dashboard", "using": ["React", "Typescript"]},
        { "what": "Application mobile", "using": ["Ionic", "React", "Typescript"]},
        { "what": "Base de données", "using": ["PostgreSQL"]},
        { "what": "Infrastructure", "using": ["AWS"]},
        { "what": "CI/CD", "using": ["Gitlab"]},
        { "what": "DevOps", "using": ["Docker", "Kubernetes"]},
        { "what": "Gestion de projet", "using": ["Agile", "Jira", "Test Driven Development"]},
        { "what": "Documentation", "using": ["Confluence"]},
        { "what": "Tests", "using": ["Jest", "Postman"]},
      ],
      link: "",
      logo: "/images/svg/vo2.svg",
      paragraphs: [
        {
          title: "Le défi",
          text: "Concevoir et développer une plateforme numérique de recherche santé complète, accessible, sécurisée et conforme.",
          images: [],
          list: [ { title: "Objectifs :", items: [
              "Offrir aux chercheurs un outil puissant de gestion d'études.",
              "Garantir aux sujets (patients) une application mobile souveraine, confidentielle et surtout hautement accessible (gestion de l'illettrisme, barrières de la langue, UI/UX simplifiée).",
              "Sécuriser les données des chercheurs et des sujets.",
            ], style: "decimal" as const}
          ]
        },
        {
          title: "API (Node.js, Typescript)",
          text: "Une architecture s'appuyant sur une API centrale hébergée sur AWS a été mise en œuvre. Cette API permet de gérer les études, les sujets et les données des chercheurs.",
          images: [],
          list: [ { title: "Cette API dessert deux interfaces distinctes :", items: [
              "Un dashboard web pour l'administration des études par les chercheurs.",
              "Une application mobile cross-plateforme dédiée aux sujets pour leur participation.",
            ], style: "dotted" as const}
          ]
        },
        {
          title: "Dashboard web (React, Typescript)",
          text: "Conception et développement d'une application web complexe permettant aux administrateurs et chercheurs de créer, configurer et administrer l'intégralité des études cliniques, de gérer les cohortes et de visualiser les données collectées.",
          images: [],
          list: [ { title: "Fonctionnalités développées :", items: [
              "Création et configuration complète des études cliniques.",
              "Gestion des sujets pour leur participation aux études.",
              "Visualisation des données collectées par les chercheurs.",
            ], style: "checkmark" as const}
          ]
        },
        {
          title: "Application mobile (Ionic/React, Typescript)",
          text: "Développement d'une application mobile (iOS/Android) sécurisée. Une attention particulière a été portée à l'accessibilité (UX/UI, traductions, text-to-speech, facilité d'usage pour non-technophiles) et à la confidentialité des données de santé des participants.",
          images: [],
          list: [ { title: "Fonctionnalités développées :", items: [
            "Parcours sécurisé pour les sujets leur permettant de s'enrôler et de participer aux protocoles d'étude.",
            "Conception et intégration de l'interface des questionnaires en prenant en compte l'accessibilité.",
          ], style: "checkmark" as const}
          ]
        },
        {
          title: "Architecture technique",
          text: "",
          images: [
            { src: "/images/projects/vo2/architecture.svg", alt: "Architecture technique", position: "center", legend: "" },
          ],
        }
      ]
    },
    {
      "slug": "spotify-youtube-music",
      "title": "Spotify likes to Youtube Music",
      "tags": ["Scripting", "Python"],
      "description": "Un script Python simple et efficace pour migrer automatiquement toute votre bibliothèque de musiques de Spotify vers Youtube Music. Ne perdez plus jamais vos favoris !",
      "technologies": [
        { "what": "Scripting", "using": ["Python"]},
        { "what": "API", "using": ["Spotify API", "Youtube Music API"]},
      ],
      "link": "",
      "logo": "/images/projects/spotifyyoutubemusic/logo.svg",
      "paragraphs": [
        {
          "title": "Le défi : Changer de service sans tout perdre",
          "text": "Le passage d'un service de streaming musical à un autre est souvent fastidieux. La plus grande frustration ? Perdre des années de musiques likées et devoir reconstituer manuellement sa bibliothèque. Ce projet personnel vise à résoudre ce problème de manière simple et automatisée.",
          "images": [],
          "list": [ { "title": "Objectifs :", "items": [
              "Automatiser la migration de toutes les musiques likées par un utilisateur sur Spotify.",
              "Offrir un script ne nécessitant aucune intervention manuelle après la configuration initiale."
            ], "style": "decimal"}
          ]
        },
        {
          "title": "La solution",
          "text": "J'ai développé un script en Python qui orchestre l'ensemble du processus. Il utilise les API des deux plateformes pour lire la bibliothèque source et la recréer sur la plateforme cible, en gérant les correspondances entre les morceaux.",
          "images": [],
          "list": [ { "title": "Étapes du processus :", "items": [
              "Connexion grâce aux tokens de l'utilisateur à l'API de Spotify pour récupérer la liste complète des titres favoris et des playlists.",
              "Utilisation de l'API officielle de Youtube Music pour s'authentifier.",
              "Pour chaque titre Spotify, recherche du morceau correspondant sur Youtube Music.",
              "Ajout automatique des titres trouvés au compte de l'utilisateur."
            ], "style": "dotted"}
          ]
        },
        {
          "title": "Fonctionnalités clés et valeur ajoutée",
          "text": "Plus qu'une simple copie, le script est conçu pour être efficace et transparent pour l'utilisateur. C'est une solution concrète à un problème utilisateur courant, démontrant ma capacité à interagir avec des API tierces pour créer des outils d'automatisation pratiques.",
          "images": [],
          "list": [ { "title": "Points forts :", "items": [
              "Migration complète : Transfère l'intégralité des titres, quelle que soit la taille de la bibliothèque.",
              "Efficacité : Utilise les fonctions de recherche avancées des API officielles pour trouver les correspondances les plus précises.",
              "Autonomie : Une fois lancé, le script s'exécute jusqu'à la fin de la migration sans supervision.",
              "Praticité : Résout un problème réel que rencontrent de nombreux utilisateurs lors de la transition entre services."
            ], "style": "checkmark"}
          ]
        }
      ]
    },
    {
      "slug": "my-battery-health",
      "title": "My Battery Health - SaaS",
      "tags": ["Web", "API", "SaaS", "Paiement", "Automobile", "React", "Node.js", "Typescript", "SVG", "Analyse prédictive", "Data Visualisation"],
      "description": "Prise en charge du dashboard SaaS B2B (React/Node.js) pour les professionnels de l'automobile. La plateforme transforme les données brutes des API constructeurs (Tesla, Stellantis, etc.) en un service monétisable. J'ai développé le parcours de test, le générateur de certificats sécurisés (React/SVG) et intégré les paiements Paypal (Abonnements B2B & Paiements uniques B2C).",
      "technologies": [
        { "what": "API", "using": ["Node.js", "Express", "Typescript"] },
        { "what": "Dashboard & Analyse", "using": ["React", "Typescript", "SVG"] },
        { "what": "Paiement", "using": ["Paypal API"] },
        { "what": "CI/CD", "using": ["Gitlab", "Docker"] },
        { "what": "Gestion de projet", "using": ["Agile", "Jira"] },
        { "what": "Tests", "using": ["Postman"]}
      ],
      "link": "",
      "logo": "/images/projects/mybatteryhealth/logo.png",
      "paragraphs": [
        {
          "title": "Le défi",
          "text": "Prendre la responsabilité technique de la conception et du développement d'une plateforme SaaS B2B. L'enjeu principal était de transformer les données brutes issues des API constructeurs (Tesla, Stellantis, etc.) en un service monétisable et à forte valeur ajoutée pour les professionnels : revendeurs de véhicules d'occasion, garagistes et gestionnaires de flottes.",
          "images": [],
          "list": [ { "title": "Objectifs principaux :", "items": [
              "Créer un dashboard B2B intuitif pour le suivi de flottes.",
              "Développer un générateur de certificats de santé (SOH) qui soit non seulement fiable et vérifiable, mais aussi un outil d'analyse comparative et prédictive.",
              "Intégrer le parcours de test (auparavant uniquement mobile) dans l'application web SaaS.",
              "Gérer les flux de paiement complexes (Abonnements B2B et ventes uniques B2C)."
            ], "style": "decimal"}
          ]
        },
        {
          "title": "Conception d'un outil d'analyse prédictive (React/SVG)",
          "text": "Ma contribution majeure a été la conception et l'intégration d'un graphique d'analyse prédictive directement sur le certificat. J'ai conçu le concept mathématique permettant de transformer le certificat en un puissant outil d'aide à la décision, développé en React et SVG pour une génération performante côté client (téléchargeable en PDF).",
          "images": [],
          "list": [ { "title": "Fonctionnalités de l'analyse :", "items": [
              "Analyse comparative : Le graphique positionne le véhicule testé au sein d'un nuage de points (affiché comme une zone) représentant l'ensemble des données de la flotte, permettant une comparaison visuelle immédiate.",
              "Analyse prédictive : Une courbe prévisionnelle est générée pour estimer la dégradation future de la batterie.",
              "Intégration du parcours de test web (auparavant mobile-only).",
              "Personnalisation (marque blanche) des certificats par les clients SaaS.",
              "Authentification des certificats via un QR code et un code de sécurité unique."
            ], "style": "checkmark"}
          ]
        },
        {
          "title": "Backend & API (Node.js, Typescript)",
          "text": "Le service repose sur une API centrale robuste développée en Node.js et Typescript (avec Express). Elle gère toute la logique métier, la communication sécurisée avec les API constructeurs, et la base de données.",
          "images": [],
          "list": [ { "title": "Logiques implémentées :", "items": [
              "API RESTful sécurisée pour alimenter le dashboard React.",
              "Traitement et transformation des données brutes de l'ensemble de la flotte pour alimenter le modèle d'analyse comparative et prédictive du certificat.",
              "Intégration de l'API Paypal, gérant à la fois les abonnements B2B (professionnels) et les paiements uniques B2C (particuliers)."
            ], "style": "dotted"}
          ]
        }
      ]
    }
  ],
};

/* {
      title: "IseeStudio",
      tags: ["Web", "Flutter"],
      description: "Studio créatif en ligne pour la création d'applications mobiles directement dans le navigateur.",
      link: "",
      logo: "/images/svg/arrows.svg",
      paragraphs: [
        { 
          text: "ISeeStudio est une plateforme web innovante qui permet aux porteurs de projet de concevoir des applications mobiles directement dans leur navigateur. L'outil combine la puissance de Flutter et une interface utilisateur intuitive pour démocratiser la création d'applications.", 
          images: [
          ] 
        }
      ]
    }
 */