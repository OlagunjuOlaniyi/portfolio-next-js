import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Emotionally intelligent and computer-savvy Public Administrator and Web Developer with a demonstrated history of working in the Information Technology and Services industry, Administrative and Human Resources Organisation. With solid ability to lead and train cross-functional teams In Information Technology, Human Resource Management, Negotiation, Research, Digital Marketing, Digital Transformation. 

      </SectionText>
      <Button onClick={() => window.location = 'https://linkedin.com/in/olagunju-salahudeen-olaniyi-644036197'}>Download CV</Button>
    </LeftSection>
  </Section>
);

export default Hero;