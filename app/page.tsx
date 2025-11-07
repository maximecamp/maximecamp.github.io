import Presentation from "@/components/Presentation";
import ContactCard from "@/components/ContactCard";
import Experience from "@/components/Experience";
import SideProjects from "@/components/SideProjects";
import LatestArticles from "@/components/Articles/Latest";
import { sectionTitle as experienceSectionTitle, items as experienceItems } from "@/data/experience";
import { sectionTitle as formationSectionTitle, items as formationItems } from "@/data/formation";
import { sectionTitle as sideProjectsSectionTitle, items as sideProjectsItems } from "@/data/sideproject";
import { data as presentationData } from "@/data/presentation";
import { data as contactCardData } from "@/data/contactcard";
import { data as footerContactData } from "@/data/footercontact";
import { GoToProjects } from "@/components/navigation";

/*import { sectionTitle as experienceV2SectionTitle, items as experienceV2Items } from "@/data/experiencev2";
import ExperienceV2 from "@/components/ExperienceV2";*/

export const metadata = {
  title: "Maxime Camp - FullStack Developer",
  description: "Freelance disponible pour vos projets web et mobile - React, Next.js, TypeScript, Node.js",
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
      {/* <ExperienceV2 sectionTitle={experienceV2SectionTitle} items={experienceV2Items} /> */}  
      <Experience sectionTitle={formationSectionTitle} items={formationItems} />
      <SideProjects sectionTitle={sideProjectsSectionTitle} items={sideProjectsItems} />
      <LatestArticles />
      <ContactCard data={footerContactData} />
      {/* <Recommendations /> */}
      {/* <ContactForm /> */}
    </>
  );
}
