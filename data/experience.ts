import FreelanceLogo from "@/public/images/svg/freelance.svg";
import DocaposteLogo from "@/public/images/svg/laposte.svg";
import MbhLogo from "@/public/images/svg/mbh.svg";
import T4uLogo from "@/public/images/svg/t4u.svg";
import ArrowsLogo from "@/public/images/svg/arrows.svg";
import Vo2Logo from "@/public/images/svg/vo2.svg";
import ObadiaLogo from "@/public/images/svg/obadia.svg";
import CygneLogo from "@/public/images/svg/cygne.svg";
import HealthcareLogo from "@/public/images/svg/healthcare.svg";
import EpitechLogo from "@/public/images/svg/epitech-eu.svg";

export const sectionTitle = "";
export const items = [
    {
        block_type: "category",
        title: "Freelance",
        date: "1 an et 3 mois",
    },
    {
        block_type: "item",
        title: "Projet sous NDA",
        subtitle: "Développeur fullstack",
        duration: "9 mois",
        category: "R&D SANTE",
        links: [
            { link: "/blog/securite-donnees-de-sante", text: "Lire l'article", type: "secondary" as const },
        ],
        icon: HealthcareLogo,
        date: "février 2025 - octobre 2025",
        location: "Paris, France",
        technologies: [
            {"tag": "Web", "highlighted": true},
            {"tag": "Mobile", "highlighted": true},
            {"tag": "API", "highlighted": true},
            {"tag": "Node.js", "highlighted": false},
            {"tag": "Typescript", "highlighted": false},
            {"tag": "React", "highlighted": false},
            {"tag": "React Native", "highlighted": false},
        ]
    },
    {
        block_type: "item",
        title: "Cygne",
        subtitle: "Développeur mobile",
        duration: "2 mois",
        category: "CINÉMA & AUDIOVISUEL",
        links: [
            { link: "/projects/cygne", text: "Voir le projet", type: "primary" as const },
        ],
        icon: CygneLogo,
        date: "novembre 2024 - décembre 2024",
        location: "Paris, France",
        technologies: [
            {"tag": "Mobile", "highlighted": true},
            {"tag": "Flutter", "highlighted": false},
        ]
    },
    {
        block_type: "category",
        title: "Consultant",
        date: "3 ans et 3 mois",
    },
    {
        block_type: "item",
        title: "Docaposte - La Poste",
        subtitle: "Développeur fullstack",
        category: "LOGISTIQUE & SUPPLY CHAIN",
        links: [
            { link: "/blog/strategie-lowcode-docaposte", text: "Lire l'étude de cas", type: "secondary" as const },
            { link: "/projects/docaposte", text: "Voir le projet", type: "primary" as const },
        ],
        icon: DocaposteLogo,
        date: "décembre 2023 - août 2024",
        location: "Paris, France",
        technologies: [
            {"tag": "Web", "highlighted": true},
            {"tag": "API", "highlighted": true},
            {"tag": "JavaScript", "highlighted": false},
            {"tag": "Blockly", "highlighted": false},
            {"tag": "Gulp.js", "highlighted": false},
            {"tag": "Backbone.js", "highlighted": false},
            {"tag": "Node.js", "highlighted": false},
        ]
    },
    {
        block_type: "item",
        title: "My Battery Health",
        subtitle: "Développeur fullstack",
        category: "AUTOMOBILE",
        links: [
            { link: "/blog/my-battery-health", text: "Lire l'étude de cas", type: "secondary" as const },
            { link: "/projects/mybatteryhealth-mobile", text: "Voir le projet mobile", type: "secondary" as const },
            { link: "/projects/mybatteryhealth-saas", text: "Voir le projet SaaS", type: "primary" as const },
        ],
        icon: MbhLogo,
        date: "novembre 2022 - novembre 2023",
        location: "Paris, France",
        technologies: [
            {"tag": "Web", "highlighted": true},
            {"tag": "API", "highlighted": true},
            {"tag": "Mobile", "highlighted": true},
            {"tag": "SAAS", "highlighted": false},
            {"tag": "Paiement en ligne et abonnement", "highlighted": false},
            {"tag": "Paypal", "highlighted": false},
            {"tag": "React", "highlighted": false},
            {"tag": "Node.js", "highlighted": false},
            {"tag": "Express", "highlighted": false},
            {"tag": "PHP/MySQL", "highlighted": false},
            {"tag": "Slim Framework", "highlighted": false},
            {"tag": "Flutter", "highlighted": false},
        ]
    },
    {
        block_type: "item",
        title: "Tesla 4u",
        subtitle: "Lead développeur Backend",
        category: "AUTOMOBILE",
        links: [
            { link: "/blog/j-ai-vide-la-batterie-d-une-tesla", text: "Lire l'étude de cas", type: "secondary" as const },
            { link: "/projects/tesla-4u", text: "Voir le projet", type: "primary" as const },
        ],
        icon: T4uLogo,
        date: "novembre 2021 - novembre 2022",
        location: "Paris, France",
        technologies: [
            {"tag": "Web", "highlighted": true},
            {"tag": "API", "highlighted": true},
            {"tag": "Temps réel", "highlighted": true},
            {"tag": "Gestion de performance", "highlighted": true},
            {"tag": "Node.js", "highlighted": false},
            {"tag": "Express", "highlighted": false},
            {"tag": "Typescript", "highlighted": false},
            {"tag": "MySQL", "highlighted": false},
            {"tag": "Doctrine", "highlighted": false},
        ]
    },
    {
        block_type: "item",
        title: "VO2 Group",
        subtitle: "Développeur fullstack",
        category: "CENTRES DE RECHERCHE",
        links: [
            { link: "/blog/securite-donnees-de-sante", text: "Lire l'étude de cas", type: "secondary" as const },
            { link: "/projects/vo2group-1", text: "Voir le projet", type: "primary" as const },
        ],
        icon: Vo2Logo,
        date: "mai 2021 - octobre 2021",
        location: "Paris, France",
        technologies: [
            {"tag": "Web", "highlighted": true}, 
            {"tag": "Mobile", "highlighted": true}, 
            {"tag": "API", "highlighted": true}, 
            {"tag": "Node.js", "highlighted": false}, 
            {"tag": "Typescript", "highlighted": false},
            {"tag": "Ionic", "highlighted": false},
            {"tag": "React", "highlighted": false},
            {"tag": "PostgreSQL", "highlighted": false},
            {"tag": "AWS", "highlighted": false}
        ]
    },
    {
        block_type: "item",
        title: "VO2 Group",
        subtitle: "Développeur fullstack",
        category: "EDUCATION & E-LEARNING",
        links: [
            { link: "/projects/vo2group-2", text: "Voir le projet", type: "primary" as const },
        ],
        icon: Vo2Logo,
        date: "mai 2021 - octobre 2021",
        location: "Paris, France",
        technologies: [
            {"tag": "Web", "highlighted": true}, 
            {"tag": "API", "highlighted": true}, 
            {"tag": "Node.js", "highlighted": false}, 
            {"tag": "Typescript", "highlighted": false},
            {"tag": "React", "highlighted": false},
            {"tag": "AWS", "highlighted": false},
            {"tag": "PostgreSQL", "highlighted": false}
        ]
    },
    {
        block_type: "category",
        title: "Fondateur",
        date: "2 ans et 4 mois",
    },
    {
        block_type: "item",
        title: "Obadia",
        subtitle: "Fondateur & Développeur fullstack",
        category: "CINÉMA & AUDIOVISUEL",
        links: [
            { link: "/blog/fondateur-a-freelance", text: "Lire l'étude de cas", type: "secondary" as const },
            { link: "/projects/obadia", text: "Voir le projet", type: "primary" as const },
        ],
        icon: ObadiaLogo,
        date: "janvier 2019 - avril 2021",
        location: "Paris, France",
        technologies: [
            {"tag": "IA", "highlighted": true},
            {"tag": "Web", "highlighted": true}, 
            {"tag": "Mobile", "highlighted": true}, 
            {"tag": "API", "highlighted": true}, 
            {"tag": "Frontend", "highlighted": true}, 
            {"tag": "Backend", "highlighted": true}, 
            {"tag": "Flutter", "highlighted": false}, 
            {"tag": "Ruby on Rails", "highlighted": false}, 
            {"tag": "Bootstrap", "highlighted": false}
        ]
    },
    {
        block_type: "category",
        title: "Formation",
        date: "5 ans",
    },
    {
        block_type: "item",
        title: "EPITECH",
        subtitle: "Expert en technologie de l'information", 
        category: "MASTER 2",
        links: [
            { link: "/blog/tu-connais-cette-techno", text: "Lire l'article", type: "secondary" as const },
        ],
        icon: EpitechLogo,
        date: "Diplomé en 2021",
        location: "Paris, France et Hof, Allemagne",
    },
  ];