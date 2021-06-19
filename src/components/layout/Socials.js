import React from "react"
import styled from "styled-components"
import {
  faSnapchatGhost,
  faGithub,
  faLinkedinIn,
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import Icon from "./Icon"

function Socials() {
  const social_links = [
    {
      color: "grey",
      image: faGithub,
      url: "https://www.github.com/abdulrahimiliasu",
    },
    {
      color: "#0a66c2",
      image: faLinkedinIn,
      url: "https://www.linkedin.com/in/abdulrahimiliasu",
    },
    {
      color: "#3b5998",
      image: faFacebookF,
      url: "https://www.facebook.com/in/abdulrahimiliasu",
    },
    {
      color: "#c32aa3",
      image: faInstagram,
      url: "https://www.instagram.com/in/abdulrahimiliasu",
    },
    {
      color: "#1da1f2",
      image: faTwitter,
      url: "https://www.twitter.com/in/illo_abdulrahim",
    },
    {
      color: "#fffc00",
      image: faSnapchatGhost,
      url: "https://www.snapchat.com/add/illo_abdool",
    },
  ]
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
