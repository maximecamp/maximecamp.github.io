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
      tags: ["Mobile", "React Native", "Web", "Javascript", "Extension Chrome", "Typescript"],
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
      slug: "docaposte",
      title: "Docaposte - La Poste",
      tags: ["Web", "API",],
      description: "Intervention sur un projet stratégique de générateur No-Code d'applications métier, destiné à accélérer la digitalisation des processus internes.",
      technologies: [
        { "what": "Frontend", "using": ["JavaScript", "Gulp.js", "Backbone.js"]},
        { "what": "No-Code", "using": ["Blockly"]},
        { "what": "API", "using": ["Node.js", "Typescript"]},
        { "what": "CI/CD", "using": ["Gitlab", "Docker", "Jenkins"]},
        { "what": "Gestion de projet", "using": ["Agile", "Sprint Planning", "Daily Standup", "Jira"]},
        { "what": "Documentation", "using": ["Confluence"]},
      ],
      link: "",
      logo: "/images/svg/laposte.svg",
      paragraphs: [
        {
          title: "Le défi",
          text: "L'objectif était d'accélérer la digitalisation des processus internes à La Poste et de permettre aux autres équipes (non-techniques) de construire leurs propres applications.",
          images: [],
        },
        {
          title: "Développement de modules No-Code",
          text: "J'ai développé une gamme de modules personnalisables et réutilisables (JavaScript, Gulp.js, Backbone.js, Blockly) pour ajouter des fonctionnalités métiers au générateur Blockly.",
          images: [],
          list: [ { title: "J'ai livré un nombre conséquent de modules complexes et critiques, notamment :", items: [
              "Un catalogue de produits complet (avec filtres avancés et recherche).",
              "Un lecteur de codes-barres et de QR codes optimisé pour les terminaux mobiles.",
            ], style: "dotted" as const}
          ]
        },
        {
          title: "Intervention annexe",
          text: "Grace à ma capacité de développement fullstack, j'ai pu apporter ma contribution sur l'ensemble de la stack technique, de l'interface utilisateur à la logique métier et aux API côté serveur, assurant la cohérence et la performance de la solution.",
          images: [],
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
      slug: "vo2group-2",
      title: "VO2 Group - E-learning & LMS",
      tags: ["Web", "React", "Node.js", "Typescript", "PostgreSQL"],
      description: "Développement d'un LMS (Learning Management System) interne. Mon intervention s'est concentrée sur l'architecture des outils d'édition (Authoring Tools) et la modélisation complexe des données d'évaluation.",
      technologies: [
        { "what": "Frontend", "using": ["React", "Typescript", "State Management"]},
        { "what": "Backend", "using": ["Node.js", "Express", "Typescript"]},
        { "what": "Data", "using": ["PostgreSQL"]},
        { "what": "Infrastructure", "using": ["AWS"]},
      ],
      link: "",
      logo: "/images/svg/vo2.svg",
      paragraphs: [
        {
          title: "Contexte de la mission",
          text: "",
          images: [],
          list: [ { title: "", items: [
              "L'objectif était de créer une application web interne permettant la formation continue et l'évaluation des compétences des collaborateurs. ",
              "Ce projet a été mené en parallèle de ma mission principale (Recherche Santé). Cette contrainte de temps m'a imposé une rigueur extrême dans l'organisation.",
              "J'ai rejoint l'équipe de développement en renfort pour accélérer la livraison de cet outil interne critique. Ma mission consistait à traduire les spécifications fonctionnelles en fonctionnalités opérationnelles, en travaillant sur les deux volets de l'application (Front et Back)."
            ], style: "none" as const}
          ]
        },
        {
          title: "Fonctionnalités développées",
          text: "J'ai travaillé sur la partie administrative et créative de la plateforme, permettant aux formateurs de construire les parcours pédagogiques.",
          images: [],
          list: [ { title: "Modules créés :", items: [
              "Développement d'un éditeur de leçons complet (WYSIWYG) pour la création de cours.",
              "Création d'un éditeur de questionnaires interactifs (QCM) pour valider l'apprentissage.",
              "Gestion de l'affichage des cours et du suivi de la progression.",
            ], style: "checkmark" as const}
          ]
        },
        {
          title: "Le défi technique",
          text: "La complexité majeure ne résidait pas dans l'interface de l'employé, mais dans celle du formateur. Construire un éditeur de leçons et de questionnaires (WYSIWYG) demande une gestion d'état frontend (State Management) irréprochable.",
          images: [],
          list: [ { title: "", items: [
              "Priorité à l'UX : J'ai investi du temps pour rendre la création de cours intuitive, car un outil RH complexe est un outil qui ne sera pas utilisé.",
              "Réutilisabilité des composants : J'ai architecturé les composants React pour qu'ils soient partagés entre le mode Édition (Formateur) et le mode Lecture (Employé), réduisant ainsi la dette technique et les incohérences visuelles.",
            ], style: "checkmark" as const}
          ]
        },
        {
          title: "Développement des éditeurs (Frontend)",
          text: "J'ai pris en charge le développement des interfaces Formateur, permettant aux administrateurs de créer le contenu pédagogique. Le défi technique résidait dans la gestion des formulaires complexes et dynamiques.",
          images: [],
          list: [ { title: "Réalisations :", items: [
              "Intégration de l'éditeur de leçons (création, édition, mise en forme).",
              "Développement du constructeur de quiz (gestion des types de questions, réponses multiples).",
              "Assurance de la conformité des interfaces avec les maquettes fournies.",
            ], style: "checkmark" as const}
          ]
        },
        {
          title: "Implémentation API (Backend)",
          text: "Côté serveur, j'ai assuré le développement des routes API nécessaires au fonctionnement des interfaces que j'intégrais, garantissant une autonomie complète sur mes tickets.",
          images: [],
           list: [ { title: "Travaux effectués :", items: [
              "Création des endpoints REST pour le CRUD (Create, Read, Update, Delete) des cours et questionnaires.",
              "Requêtage de la base de données PostgreSQL pour stocker et récupérer les structures de données relationnelles.",
              "Application des bonnes pratiques de code définies par l'équipe (typage Typescript, structure du projet).",
            ], style: "dotted" as const}
          ]
        }
      ]
    },
    {
      "slug": "tesla-4u",
      "title": "Tesla 4u - IoT & Data",
      "tags": [
        "IoT",
        "API",
        "Node.js",
        "Typescript",
      ],
      "description": "Lead Backend sur un moteur IoT critique connectant les véhicules Tesla en temps réel. Optimisation massive des performances, réduction drastique de la consommation fantôme (vampire drain) et refonte de l'architecture pour assurer la scalabilité du traitement des données.",
      "technologies": [
        {
          "what": "Backend & IoT",
          "using": ["Node.js", "Express", "Typescript"]
        },
        {
          "what": "Data & ORM",
          "using": ["MySQL", "Doctrine"]
        },
        {
          "what": "Performance",
          "using": ["Optimisation Algorithmique", "Gestion Temps Réel", "Grands volumes de données"]
        },
        {
          "what": "Intégration",
          "using": ["Tesla API", "API Partenaires"]
        }
      ],
      "link": "",
      "logo": "/images/svg/t4u.svg",
      "paragraphs": [
        {
          "title": "Le défi : IoT et Temps Réel",
          "text": "Prendre le lead sur un moteur backend critique servant de passerelle entre les véhicules connectés Tesla et l'application utilisateur. Le défi majeur résidait dans la gestion d'un flux constant de données IoT en temps réel, tout en garantissant la fiabilité des commandes à distance (verrouillage, climatisation, recharge) et la précision des remontées d'informations.",
          "images": [],
          "list": [
            {
              "title": "Enjeux techniques :",
              "items": [
                "Gérer la collecte massive de données télémétriques (vitesse, batterie, localisation) en temps réel.",
                "Assurer la stabilité d'un projet existant nécessitant une refonte architecturale.",
                "Répondre à une problématique critique de surconsommation batterie signalée par les utilisateurs.",
                "Permettre une scalabilité rapide pour accueillir de nouveaux utilisateurs."
              ],
              "style": "decimal"
            }
          ]
        },
        {
          "title": "Performance : La chasse au \"Vampire Drain\"",
          "text": "Ma réussite la plus significative a été la résolution du problème de surconsommation d'énergie qu'entrainait l'utilisation de l'application dans la voiture. L'application sollicitait excessivement les véhicules, empêchant leur mise en veille et drainant la batterie inutilement. J'ai repensé la stratégie de récupération des données et d'interaction avec l'API Tesla.",
          "images": [],
          "list": [
            {
              "title": "Résultats obtenus :",
              "items": [
                "Réduction drastique de la surconsommation énergétique de 20% à moins de 5%.",
                "Optimisation des algorithmes de collecte pour ne réveiller le véhicule qu'aux moments opportuns.",
                "Amélioration significative de la satisfaction utilisateur grâce à une application plus respectueuse de l'autonomie du véhicule.",
                "Fiabilisation globale du moteur Node.js (réduction de la dette technique)."
              ],
              "style": "checkmark"
            }
          ]
        },
        {
          "title": "Architecture Backend Scalable",
          "text": "Pour soutenir la croissance de l'application et faciliter la maintenance, j'ai piloté la migration et l'évolution de l'architecture backend. Le passage à un environnement typé et structuré a permis de sécuriser la logique métier complexe.",
          "images": [],
          "list": [
            {
              "title": "Stack technique :",
              "items": [
                "Adoption de TypeScript pour une meilleure robustesse du code et une maintenance facilitée.",
                "Utilisation de l'ORM Doctrine couplé à MySQL pour une gestion structurée des données utilisateurs et véhicules.",
                "Mise en place d'une architecture modulaire avec Node.js et Express capable d'absorber les pics de charge.",
                "Développement d'API RESTful performantes pour l'application mobile."
              ],
              "style": "dotted"
            }
          ]
        },
        {
          "title": "Écosystème et Valorisation de la donnée",
          "text": "Au-delà de l'application grand public, j'ai œuvré à l'ouverture de la plateforme vers des partenaires B2B, transformant Tesla 4u en un fournisseur de données fiable.",
          "images": [],
          "list": [
            {
              "title": "Interconnectivité :",
              "items": [
                "Conception et développement d'endpoints API sécurisés pour le partage de données.",
                "Intégration clé avec la startup My Battery Health : transmission des données de télémétrie pour permettre l'analyse et la certification des batteries à distance.",
                "Garantie de la confidentialité et de l'intégrité des données partagées."
              ],
              "style": "checkmark"
            }
          ]
        }
      ]
    },
    {
      "slug": "mybatteryhealth-saas",
      "title": "My Battery Health - SaaS",
      "tags": ["Web", "API", "Paiement", "React", "Node.js", "Typescript",],
      "description": "Création du dashboard SaaS pour les professionnels de l'automobile. La plateforme transforme les données brutes des API constructeurs (Tesla, Stellantis, etc.) en un certificat de santé de la batterie. J'ai développé l'intégralité du saas incluant le parcours de test de batterie, le générateur de certificats, les graphiques d'analyse et j'ai intégré les paiements via Paypal.",
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
          "text": "Prendre la responsabilité technique de la conception et du développement d'une plateforme SaaS B2B. L'enjeu principal était de transformer les données brutes issues des API constructeurs (Tesla, Stellantis, etc.) en un service à forte valeur ajoutée pour les professionnels : revendeurs de véhicules d'occasion, garagistes et gestionnaires de flottes.",
          "images": [],
          "list": [ { "title": "Objectifs principaux :", "items": [
              "Les professionnels de l'automobile manquaient d'un outil simple pour certifier la santé des batteries de véhicules électriques.",
              "Les données des API constructeurs étaient brutes, complexes et inutilisables sans traitement.",
              "Intégrer le parcours de test (auparavant uniquement mobile) dans l'application web.",
              "Permettre aux clients de tester un grand nombre de véhicules rapidement et facilement grace à une offre d'abonnement mensuel."
            ], "style": "decimal"}
          ]
        },
        {
          "title": "La solution",
          "text": "J'ai développé un dashboard SaaS B2B intuitif en React permettant de gérer et d'analyser une flotte de véhicules électriques.",
          "images": [],
          "list": [ { "title": "Fonctionnalités du dashboard :", "items": [
              "Visualiser l'état d'une flotte de véhicules, grace à des statistiques et des graphiques comparatifs.",
              "Conception d'un pipeline de données pour collecter, analyser et transformer les données API constructeurs en un score d'état de santé.",
              "Intégration complète du système de paiement et d'abonnement via l'API Paypal (Abonnements B2B et ventes uniques B2C).",
              "Développement d'un générateur de certificats de santé (SOH) qui soit non seulement fiable et vérifiable, mais aussi un outil d'analyse comparative et prédictive.",
              "Génération de certificats personnalisables.",
            ], "style": "checkmark"}
          ]
        },
        {
          "title": "Conception d'un outil d'analyse prédictive",
          "text": "Ma contribution majeure a été la conception et l'intégration d'un graphique d'analyse prédictive directement sur le certificat. J'ai conçu la solution permettant de transformer un simple certificat en un puissant outil d'aide à la décision, développé en React et SVG pour une génération performante côté client (téléchargeable en PDF).",
          "images": [],
          "list": [ { "title": "Fonctionnalités de l'analyse :", "items": [
              "Analyse comparative : Le graphique positionne le véhicule testé au sein d'un nuage de points (affiché comme une zone) représentant l'ensemble des données de la flotte, permettant une comparaison visuelle immédiate.",
              "Analyse prédictive : Une courbe prévisionnelle est générée pour estimer la dégradation future de la batterie.",
              "Personnalisation (marque blanche) des certificats par les clients SaaS.",
              "Verification d'authenticité des certificats via un QR code et un code de sécurité unique."
            ], "style": "checkmark"}
          ]
        },
        {
          "title": "Backend & API (Node.js, Typescript)",
          "text": "Le service repose sur une API centrale robuste développée en Node.js et Typescript (avec Express). Elle gère toute la logique métier, la communication sécurisée avec les API constructeurs et la base de données.",
          "images": [],
          "list": [ { "title": "Logiques implémentées :", "items": [
              "API RESTful sécurisée pour alimenter le dashboard React.",
              "Traitement et transformation des données brutes de l'ensemble de la flotte pour alimenter le modèle d'analyse comparative et prédictive du certificat.",
              "Intégration backend de l'API Paypal, gérant à la fois les abonnements B2B et les paiements uniques B2C."
            ], "style": "dotted"}
          ]
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