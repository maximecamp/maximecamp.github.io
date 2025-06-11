import FreelanceLogo from "@/public/images/svg/freelance.svg";
import DocaposteLogo from "@/public/images/svg/laposte.svg";
import MbhLogo from "@/public/images/svg/mbh.svg";
import T4uLogo from "@/public/images/svg/t4u.svg";
import ArrowsLogo from "@/public/images/svg/arrows.svg";
import Vo2Logo from "@/public/images/svg/vo2.svg";
import ObadiaLogo from "@/public/images/svg/obadia.svg";

export const sectionTitle = "Expériences";
export const items = [
    {
      title: "Développeur fullstack",
      subtitle: "", 
      category: "FREELANCE",
      link: "",
      icon: FreelanceLogo,
      date: "septembre 2024 - Aujourd'hui",
      location: "Paris, France", 
      description: "Plusieurs projets sont en cours, je vous en parle bientôt !",
      technologies: [
        {"tag": "Web", "highlighted": true},
        {"tag": "Mobile", "highlighted": true},
        {"tag": "API", "highlighted": true},
        {"tag": "React", "highlighted": false},
        {"tag": "Next.js", "highlighted": false},
        {"tag": "Node.js", "highlighted": false},
        {"tag": "Typescript", "highlighted": false},
        {"tag": "Flutter", "highlighted": false},
        {"tag": "Tailwind CSS", "highlighted": false},
      ]
    },
    {
      title: "Docaposte La Poste",
      subtitle: "Développeur fullstack",
      category: "LOGISTIQUE & SUPPLY CHAIN",
      link: "",
      icon: DocaposteLogo,
      date: "décembre 2023 - août 2024",
      location: "Paris, France",
      description: "Développement de nombreux modules personnalisables et réutilisables pour un générateur No-Code d'applications métiers. Par exemple :\n- Module catalogue avec filtres et recherche, listant les produits en vente dans les bureaux de poste.\n- Module lecteur de code barre et de QR code.",
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
      title: "My Battery Health",
      subtitle: "Développeur fullstack",
      category: "AUTOMOBILE",
      link: "",
      icon: MbhLogo,
      date: "novembre 2022 - novembre 2023",
      location: "Paris, France",
      description: "Responsable de la création d'un tableau de bord dédié aux professionnels de l'automobile :\n- Intégration du parcours de test d'une batterie de véhicule éléctrique dans une interface web.\n- Génération dynamique de certificats personnalisables de l'état de santé de la batterie.\n- Intégration de Paypal pour des parcours d'achat direct et d'abonnement mensuel.\n- Étude et mise en place de graphiques et statistiques pour la supervision de l'état d'une flotte de véhicules.",
      technologies: [
        {"tag": "Web", "highlighted": true},
        {"tag": "API", "highlighted": true},
        {"tag": "SAAS", "highlighted": false},
        {"tag": "Paiement en ligne et abonnement", "highlighted": false},
        {"tag": "Paypal", "highlighted": false},
        {"tag": "React", "highlighted": false},
        {"tag": "Node.js", "highlighted": false},
        {"tag": "Express", "highlighted": false},
        {"tag": "PHP/MySQL", "highlighted": false},
        {"tag": "Slim Framework", "highlighted": false},
        {"tag": "SVG", "highlighted": false},
      ]
    },
    {
      title: "Tesla 4u",
      subtitle: "Lead dev backend Node.js",
      category: "AUTOMOBILE",
      link: "",
      icon: T4uLogo,
      date: "novembre 2021 - novembre 2022",
      location: "Paris, France",
      description: "Responsable d'un moteur Node.js collectant les données des voitures éléctrique de la marque Tesla en temps réel et communiquant avec une base de données.\n- Amélioration des performances et correction des bugs du projet pré-existant.\n- Réduction de la surconsommation d'énergie causée par l'utilisation de l'application dans la voiture (de 20% à 5% ou moins).\n- Partage des données pertinentes avec une startup partenaire My Battery Health.",
      technologies: [
        {"tag": "Web", "highlighted": true},
        {"tag": "API", "highlighted": true},
        {"tag": "Temps réel", "highlighted": true},
        {"tag": "Gestion de performance", "highlighted": true},
        {"tag": "Node.js", "highlighted": false},
        {"tag": "Express", "highlighted": false},
        {"tag": "MySQL", "highlighted": false},
        {"tag": "Doctrine", "highlighted": false},
      ]
    },
    {
      title: "Arrows groupe",
      subtitle: "Consultant Développeur fullstack",
      category: "AGENCE & SSII",
      link: "",
      icon: ArrowsLogo,
      date: "novembre 2021 - septembre 2024",
      location: "Paris, France",
      description: "",
      technologies: [
        {"tag": "Agile", "highlighted": true},
        {"tag": "DevOps", "highlighted": true},
        {"tag": "Gestion de projet", "highlighted": true},
        {"tag": "Git", "highlighted": false}, 
        {"tag": "Gitlab", "highlighted": false}, 
        {"tag": "CI/CD", "highlighted": false}, 
        {"tag": "Docker", "highlighted": false}, 
        {"tag": "Kubernetes", "highlighted": false}, 
        {"tag": "Jira", "highlighted": false}, 
        {"tag": "Confluence", "highlighted": false}, 
        {"tag": "Swagger", "highlighted": false}, 
        {"tag": "Postman", "highlighted": false}, 
        {"tag": "Test Driven Development", "highlighted": false},
      ]
    },
    {
      title: "VO2 Group",
      subtitle: "Consultant Développeur fullstack",
      category: "CENTRES DE RECHERCHE",
      link: "",
      icon: Vo2Logo,
      date: "mai 2021 - octobre 2021",
      location: "Paris, France",
      description: "Développement d'une API et d'une application Web et Mobile cross-plateforme iOS et Android : permettant à des chercheurs de créer des études dans le domaine de la santé, ainsi que gérer et suivre leurs sujets.",
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
      title: "VO2 Group",
      subtitle: "Consultant Développeur fullstack",
      category: "EDUCATION & E-LEARNING",
      link: "",
      icon: Vo2Logo,
      date: "mai 2021 - octobre 2021",
      location: "Paris, France",
      description: "Développement d'un éditeur de leçons et de questionnaires, à l'aide d'une API et d'une application web.",
      technologies: [
        {"tag": "Web", "highlighted": true}, 
        {"tag": "Mobile", "highlighted": true}, 
        {"tag": "API", "highlighted": true}, 
        {"tag": "Node.js", "highlighted": false}, 
        {"tag": "Typescript", "highlighted": false},
        {"tag": "React", "highlighted": false},
        {"tag": "Ionic", "highlighted": false},
        {"tag": "AWS", "highlighted": false},
        {"tag": "PostgreSQL", "highlighted": false}
      ]
    },
    {
      title: "Obadia",
      subtitle: "Fondateur & Développeur fullstack web et mobile",
      category: "CINÉMA & AUDIOVISUEL",
      link: "",
      icon: ObadiaLogo,
      date: "janvier 2019 - avril 2021",
      location: "Paris, France",
      description: "Fondateur d'Obadia, l'appli sociale dédiée à la recommandation de films.\nDéveloppement de l'application cross-platform Android et iOS en Flutter.\nDu site vitrine et de la partie API en Ruby on Rails.",
      technologies: [
        {"tag": "Web", "highlighted": true}, 
        {"tag": "Frontend", "highlighted": true}, 
        {"tag": "Backend", "highlighted": true}, 
        {"tag": "Mobile", "highlighted": true}, 
        {"tag": "API", "highlighted": true}, 
        {"tag": "Flutter", "highlighted": false}, 
        {"tag": "Ruby on Rails", "highlighted": false}, 
        {"tag": "Bootstrap", "highlighted": false}
      ]
    }
  ];