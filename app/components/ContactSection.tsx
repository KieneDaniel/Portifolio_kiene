import type { FC } from "react";
import SectionContainer from "./SectionContainer";
import SectionHeading from "./SectionHeading";
import ContactCard from "./ContactCard";

const ContactSection: FC = () => (
  <SectionContainer id="contacto">
    <div className="max-w-7xl mx-auto px-6 md:px-16">
      <SectionHeading
        eyebrow="Contacto"
        title="Vamos conversar"
        desc="Estou disponível para oportunidades, colaborações ou apenas para trocar uma ideia sobre tecnologia."
      />
      <ContactCard />
    </div>
  </SectionContainer>
);

export default ContactSection;
