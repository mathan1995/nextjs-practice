import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        The puropse of this channel is to doing the main growth of all personal
        outcomers out here..
      </SectionText>
      <Button onClick={() => (window.location = "https://www.google.lk")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
