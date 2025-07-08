import Calendly from '@/components/Calendly'

export const metadata = {
  title: 'Contact - Maxime Camp',
  description: 'Prenez rendez-vous avec moi via Calendly.',
}

export default function ContactPage() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto">
        <div>
          <Calendly />
        </div>
      </div>
    </section>
  )
} 