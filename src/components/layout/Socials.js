import React from "react"
import styled from "styled-components"
import Icon from "./Icon"
import { social_links } from "../../data/Data"

function Socials() {
  return (
    <Wrapper count={social_links.lenght}>
      <ContentWrapper>
        {social_links.map((item, index) => (
          <SocialLink href={item.url} color={item.color} key={index}>
            <Icon ficon={item.image} class="normal" />
          </SocialLink>
        ))}
      </ContentWrapper>
    </Wrapper>
  )
}

export default Socials

const Wrapper = styled.div`
  display: grid;
  justify-content: start;
  align-content: center;
  padding-top: 50px;
  column-span: all;
`
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, auto);
  gap: 20px;
  @media only screen and (max-width: 450px) {
    gap: 5px;
  }

  @media only screen and (min-width: 450px) and (max-width: 768px) {
    gap: 10px;
  }
`
const SocialLink = styled.a`
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: grid;
  justify-content: center;
  align-content: center;
  transition: 0.3s ease-in-out;
  color: black;
  :hover {
    transform: scale(1.2);
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 30px 60px rgba(23, 0, 102, 0.5),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    transform: translateY(-3px);
    color: ${props => props.color};
  }
`
