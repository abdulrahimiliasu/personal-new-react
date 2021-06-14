import React from "react"
import styled, { keyframes } from "styled-components"
import { WaveBackground } from "../backgrounds/WaveBackground"
import PrimaryButton from "../buttons/PrimaryButton"
import ProfilePicture from "../layout/ProfilePicture"
import { H3, H2, MediumText } from "../styles/TextStyles"
import Socials from "../layout/Socials"

function HeroSection() {
  return (
    <Wrapper>
      <WaveBackground />
      <ContentWrapper>
        <TextWrapper>
          <Title>Hi am</Title>
          <Title>Abdulrahim Iliasu</Title>
          <SubTitle>Computer Science Student</SubTitle>
          <Description>
            I love Sofware, Artificial Intelligence and Entreprenuership
          </Description>
          <PrimaryButton />
        </TextWrapper>
        <ProfilePicture />
        <Socials />
      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroSection

const Wrapper = styled.div`
  overflow: hidden;
`
const animation = keyframes`
  from { opacity: 0; transform: translateY(-10px); filter: blur(10px); }
  to { opacity: 1; transform: translateY(0px); filter: blur(0px); }
`

const ContentWrapper = styled.div`
  max-width: 1234px;
  padding: 200px 10px;
  display: grid;
  grid-template-columns: 460px auto;
  justify-content: space-around;

  @media (max-width: 450px) {
    grid-template-columns: auto;
    padding: 150px 20px 250px;
    gap: 60px;
  }
`
const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;
  > * {
    :nth-child(1) {
      animation: ${animation} 1s 0s forwards;
    }
    :nth-child(2) {
      animation: ${animation} 1s 0.2s forwards;
    }
    :nth-child(3) {
      animation: ${animation} 1s 0.3s forwards;
    }
    :nth-child(4) {
      animation: ${animation} 1s 0.4s forwards;
    }
  }
`

const Title = styled(H2)`
  color: white;
`
const SubTitle = styled(H3)`
  color: #ffc7a8;
`
const Description = styled(MediumText)``
