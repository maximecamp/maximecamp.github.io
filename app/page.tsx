import Presentation from "@/components/Presentation";
import ContactCard from "@/components/ContactCard";
import LatestArticles from "@/components/Articles/Latest";
import Experience from "@/components/Experience";
import { sectionTitle as experienceSectionTitle, items as experienceItems } from "@/data/experience";
import { data as presentationData } from "@/data/presentation";
import { data as contactCardData } from "@/data/contactcard";
import { data as footerContactData } from "@/data/footercontact";
import { GoToProjects } from "@/components/navigation";

export const metadata = {
  title: "Maxime Camp - Développeur freelance react, node.js, react native, flutter à Paris",
  description: "Freelance disponible pour vos projets web et mobile - React, TypeScript, Node.js, React Native, Flutter",
  keywords: ["Maxime Camp", "Développeur freelance", "React", "TypeScript", "Node.js", "React Native", "Flutter", "Paris"],
  authors: [{ name: "Maxime Camp" }],
  creator: "Maxime Camp",
  publisher: "Maxime Camp",
  openGraph: {
    title: "Maxime Camp - Développeur freelance react, node.js, react native, flutter à Paris",
    description: "Freelance disponible pour vos projets web et mobile - React, TypeScript, Node.js, React Native, Flutter",
  },
};

export default async function Home() {
  return (
    <>
      <Presentation data={presentationData} />
      
      {/* Section Link to Projets */}
      <section>
          <div className="flex flex-col items-center text-center">
            <GoToProjects size="md" variant="primary" />
          </div>
      </section>
      
      <ContactCard data={contactCardData} />
      <Experience sectionTitle={experienceSectionTitle} items={experienceItems} /> 
      {/* <SideProjects sectionTitle={sideProjectsSectionTitle} items={sideProjectsItems} /> */}
      <LatestArticles />
      <ContactCard data={footerContactData} />
      {/* <Recommendations />
      {/* <ContactForm /> */}
    </>
  );
}
