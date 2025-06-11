import Presentation from "@/components/Presentation";
import ContactCard from "@/components/ContactCard";
import Experience from "@/components/Experience";
import SideProjects from "@/components/SideProjects";
import { sectionTitle as experienceSectionTitle, items as experienceItems } from "@/data/experience";
import { sectionTitle as formationSectionTitle, items as formationItems } from "@/data/formation";
import { sectionTitle as sideProjectsSectionTitle, items as sideProjectsItems } from "@/data/sideproject";
import { data as presentationData } from "@/data/presentation";
import { data as contactCardData } from "@/data/contactcard";
import { data as footerContactData } from "@/data/footercontact";

export const metadata = {
  title: "Maxime Camp - Full Stack Developer",
  description: "Freelance disponible pour vos projets web et mobile",
};

export default async function Home() {
  return (
    <>
      <Presentation data={presentationData} />
      <ContactCard data={contactCardData} />
      <Experience sectionTitle={experienceSectionTitle} items={experienceItems} />
      <Experience sectionTitle={formationSectionTitle} items={formationItems} />
      <SideProjects sectionTitle={sideProjectsSectionTitle} items={sideProjectsItems} />
      <ContactCard data={footerContactData} />
      {/* <Articles /> */}
      {/* <Recommendations /> */}
      {/* <ContactForm /> */}
    </>
  );
}
