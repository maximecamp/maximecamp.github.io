import ContactCard from '@/components/ContactCard'
import { data as contactCardData } from '@/data/contactpage'
import { BackToHome, GoToProjects, SectionNavigation } from '@/components/navigation'

export const metadata = {
  title: 'Contact - Maxime Camp',
  description: 'Contactez-moi sur LinkedIn, Malt, par email ou en réservant un appel via Calendly.',
}

export default function ContactPage() {
  return (
    <>
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