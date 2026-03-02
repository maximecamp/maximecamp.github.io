/**
 * Fonctions utilitaires pour générer les données structurées JSON-LD
 */

export const SITE_URL = 'https://maximecamp.github.com' // À adapter selon votre domaine

export interface PersonSchema {
  '@context': string
  '@type': string
  name: string
  jobTitle: string
  url: string
  sameAs: string[]
  email: string
  address: {
    '@type': string
    addressLocality: string
    addressCountry: string
  }
  description: string
}

export interface WebSiteSchema {
  '@context': string
  '@type': string
  name: string
  url: string
  description: string
  author: {
    '@type': string
    name: string
  }
  potentialAction: {
    '@type': string
    target: {
      '@type': string
      urlTemplate: string
    }
    'query-input': string
  }
}

export interface BlogPostingSchema {
  '@context': string
  '@type': string
  headline: string
  description: string
  image?: string
  datePublished: string
  dateModified: string
  author: {
    '@type': string
    name: string
    url: string
  }
  publisher: {
    '@type': string
    name: string
    url: string
  }
  mainEntityOfPage: {
    '@type': string
    '@id': string
  }
  timeRequired?: string
}

export interface CollectionPageSchema {
  '@context': string
  '@type': string
  name: string
  description: string
  url: string
  mainEntity: {
    '@type': string
    numberOfItems: number
    itemListElement: Array<{
      '@type': string
      position: number
      item: {
        '@type': string
        '@id': string
        name: string
      }
    }>
  }
}

export interface ItemListSchema {
  '@context': string
  '@type': string
  name: string
  description: string
  url: string
  numberOfItems: number
  itemListElement: Array<{
    '@type': string
    position: number
    item: {
      '@type': string
      name: string
      description: string
      url: string
    }
  }>
}

export interface WebPageSchema {
  '@context': string
  '@type': string
  name: string
  description: string
  url: string
  author: {
    '@type': string
    name: string
  }
}

/**
 * Génère le schéma Person pour représenter Maxime Camp
 */
export function generatePersonSchema(): PersonSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Maxime Camp',
    jobTitle: 'Développeur freelance',
    url: SITE_URL,
    sameAs: [
      'https://www.linkedin.com/in/maxime-camp',
      'https://www.malt.fr/profile/maximecamp',
    ],
    email: 'maximecamp.pro@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Paris',
      addressCountry: 'FR',
    },
    description: 'Développeur freelance spécialisé en React, TypeScript, Node.js, React Native et Flutter à Paris',
  }
}

/**
 * Génère le schéma WebSite pour le site global
 */
export function generateWebSiteSchema(): WebSiteSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Maxime Camp - Développeur freelance',
    url: SITE_URL,
    description: 'Portfolio de Maxime Camp, développeur freelance spécialisé en développement web et mobile',
    author: {
      '@type': 'Person',
      name: 'Maxime Camp',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

/**
 * Génère le schéma BlogPosting pour un article de blog
 */
export function generateBlogPostingSchema({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  readingTime,
}: {
  title: string
  description?: string
  url: string
  image?: string
  datePublished: string
  dateModified?: string
  readingTime?: number
}): BlogPostingSchema {
  const schema: BlogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description || title,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: 'Maxime Camp',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Person',
      name: 'Maxime Camp',
      url: SITE_URL,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  }

  if (image) {
    schema.image = image.startsWith('http') ? image : `${SITE_URL}${image}`
  }

  if (readingTime) {
    schema.timeRequired = `PT${readingTime}M`
  }

  return schema
}

/**
 * Génère le schéma CollectionPage pour la liste des articles de blog
 */
export function generateCollectionPageSchema({
  name,
  description,
  url,
  items,
}: {
  name: string
  description: string
  url: string
  items: Array<{ name: string; url: string }>
}): CollectionPageSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    description,
    url,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: items.length,
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'BlogPosting',
          '@id': item.url,
          name: item.name,
        },
      })),
    },
  }
}

/**
 * Génère le schéma ItemList pour la liste des projets
 */
export function generateItemListSchema({
  name,
  description,
  url,
  items,
}: {
  name: string
  description: string
  url: string
  items: Array<{ name: string; description: string; url: string }>
}): ItemListSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    description,
    url,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'CreativeWork',
        name: item.name,
        description: item.description,
        url: item.url,
      },
    })),
  }
}

/**
 * Génère le schéma WebPage pour une page de projet
 */
export function generateWebPageSchema({
  name,
  description,
  url,
}: {
  name: string
  description: string
  url: string
}): WebPageSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url,
    author: {
      '@type': 'Person',
      name: 'Maxime Camp',
    },
  }
}

