import ContactCard from '@/components/ContactCard'
import { data as contactCardData } from '@/data/contactpage'
import { BackToHome, GoToProjects, SectionNavigation } from '@/components/navigation'
import JsonLd from '@/components/ui/json-ld'
import { generateWebPageSchema, SITE_URL } from '@/lib/structured-data'

export const metadata = {
  title: 'Contact - Maxime Camp Développeur freelance react, node.js, react native, flutter à Paris',
  description: 'Contactez-moi sur Malt, LinkedIn, par email ou en réservant un appel via Google Calendar.',
  keywords: ["Maxime Camp", "Développeur freelance", "React", "TypeScript", "Node.js", "React Native", "Flutter", "Paris", "Contact"],
  authors: [{ name: "Maxime Camp" }],
  creator: "Maxime Camp",
  publisher: "Maxime Camp",
  openGraph: {
    title: "Contact - Maxime Camp Développeur freelance react, node.js, react native, flutter à Paris",
    description: "Contactez-moi sur Malt, LinkedIn, par email ou en réservant un appel via Google Calendar.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ContactPage() {
  const webPageSchema = generateWebPageSchema({
    name: 'Contact - Maxime Camp',
    description: 'Contactez-moi sur Malt, LinkedIn, par email ou en réservant un appel via Google Calendar.',
    url: `${SITE_URL}/contact`,
  })

  return (
    <>
      <JsonLd data={webPageSchema} id="json-ld-contact" />
      <ContactCard data={contactCardData} />
      
      {/* Navigation */}
      <SectionNavigation 
        left={<BackToHome />}
        right={<GoToProjects />}
        className="mt-8"
      />
    </>
  )
} 