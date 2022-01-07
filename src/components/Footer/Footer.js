import React from 'react';
import { AiFillGithub, AiOutlineWhatsApp, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+2348168901273">(234) 816 890 1273</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:contact@olagunjuolaniyi512@gmail.com">olagunjuolaniyi512@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialIcons>
          <SocialIcons href="https://github.com/OlagunjuOlaniyi">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://linkedin.com/in/olagunju-salahudeen-olaniyi-644036197">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://wa.me/8168901273">
            <AiOutlineWhatsApp size="3rem" />
          </SocialIcons>
        </SocialIcons>
      </SocialIconsContainer>
      
    </FooterWrapper>
  );
};

export default Footer;
