import React from 'react';
import styled from 'styled-components';

import { ReactComponent as TwitterLogo } from '../assets/images/twitter.svg';
import { ReactComponent as GithubLogo } from '../assets/images/github.svg';
import { ReactComponent as LinkedInLogo } from '../assets/images/linkedin.svg';



const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 8px 0;
  color: black;
  background: yellow;
  font-size: 18px;

  .inner-div {
    display: flex;
    align-items: center;
    width: 300px;

    // a {
      
    // }

    // #ghProfile {
    //   margin-right: 18px;
    // }
  }
`

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  width: fit-content;
  margin: 0 18px;
  svg {
    height: 18px;
    width: 18px;
  }
`


const Footer = props => {
  return (
    <StyledFooter>
      <div className="inner-div">
        <StyledLink id="ghProfile" href="https://github.com/shubh0107" target="_blank" title="Github">
          shubh0107
        </StyledLink>
        {"|"}
        <StyledLink href="https://twitter.com/shoe_bam" target="_blank" title="Twitter">
          <TwitterLogo />
        </StyledLink>
        {"|"}
        <StyledLink href="https://www.linkedin.com/in/shubhsingh01" target="_blank" title="Linked In">
          <LinkedInLogo />
        </StyledLink>
        {"|"}
        <StyledLink href="https://github.com/shubh0107/nirvana-ipsum" target="_blank" title="Source Code">
          <GithubLogo />
        </StyledLink>
      </div>
    </StyledFooter>
  )
}


export default Footer;