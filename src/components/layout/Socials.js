import React from "react"
import styled from "styled-components"

function Socials() {
  const social_links = [
    {
      color: "black",
      image: "/images/socials/github.svg",
      url: "https://www.github.com/abdulrahimiliasu",
    },
    {
      color: "yellow",
      image: "/images/socials/linkedin.svg",
      url: "https://www.linkedin.com/in/abdulrahimiliasu",
    },
    {
      color: "blue",
      image: "/images/socials/facebook.svg",
      url: "https://www.facebook.com/in/abdulrahimiliasu",
    },
    {
      color: "blue",
      image: "/images/socials/instagram.svg",
      url: "https://www.instagram.com/in/abdulrahimiliasu",
    },
    {
      color: "blue",
      image: "/images/socials/twitter.svg",
      url: "https://www.twitter.com/in/illo_abdulrahim",
    },
    {
      color: "blue",
      image: "/images/socials/snapchat.svg",
      url: "https://www.snapchat.com/add/illo_abdool",
    },
  ]
  return (
    <Wrapper count={social_links.lenght}>
      <ContentWrapper>
        {social_links.map(item => (
          <SocialLink href={item.url} color={item.color}>
            <Image src={item.image}></Image>
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
  :hover {
    transform: scale(1.2);
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 30px 60px rgba(23, 0, 102, 0.5),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    transform: translateY(-3px);
  }
  /* background-color: ${props => props.color}; */
`

const Image = styled.img`
  width: 25px;
  height: 25px;
`
