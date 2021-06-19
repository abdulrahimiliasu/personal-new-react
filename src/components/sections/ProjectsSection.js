import React from "react"
import styled from "styled-components"
import { ProjectsBackground } from "../backgrounds/ProjectsBackground"
import { H3, H2, MediumText } from "../styles/TextStyles"
import Icon from "../layout/Icon"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import RoundButton from "../buttons/RoundButton"
import { getIcon, getRepos } from "../../data/Data"

function ProjectsSection() {
  var repos = getRepos()
  return (
    <Wrapper>
      <ProjectsBackground />
      <ContentWrapper>
        <TextWrapper>
          <div>
            <Text>My projects</Text>
            <Text2>
              Check out my Software and Web projects by visiting the github
              repository link.
            </Text2>
          </div>
        </TextWrapper>
        <ProjectsWrapper>
          {repos.map(item => (
            <ProjectCard
              key={item["id"]}
              className={getIcon(item["language"]).class}
            >
              <Icon
                ficon={getIcon(item["language"]).icon}
                class="large"
                color="white"
              />
              <CardTextWrapper>
                <Text3>{item["name"]}</Text3>
                <Text2>{item["language"]}</Text2>
              </CardTextWrapper>
              <RoundButton ficon={faGithub} to={item["html_url"]} />
            </ProjectCard>
          ))}
        </ProjectsWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default ProjectsSection

const Wrapper = styled.div`
  overflow: hidden;
  background-image: linear-gradient(
    209.21deg,
    rgb(48, 173, 221) 13.57%,
    rgb(64, 26, 190) 98.38%
  );
`

const ContentWrapper = styled.div`
  max-width: 100%;
  padding: 100px 70px;

  @media (max-width: 450px) {
    grid-template-columns: auto;
    padding: 150px 20px 250px;
    gap: 60px;
  }
`
const TextWrapper = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
  justify-content: flex-start;
  padding-top: 50px;
  @media (max-width: 450px) {
    padding-top: 0px;
  }
`

const Text = styled(H2)`
  color: white;
  text-shadow: 0px 20px 40px rgba(0, 0, 0, 0.3);
`
const Text2 = styled(MediumText)`
  color: white;
  opacity: 0.8;
  padding: 20px 0px;
`
const Text3 = styled(H3)`
  color: white;
`

const ProjectsWrapper = styled.div`
  background-color: rgba(15, 14, 71, 0.3);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 30px 60px,
    rgba(255, 255, 255, 0.2) 0px 0px 0px 0.5px inset;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  padding: 20px;
  display: grid;
  grid-template-columns: auto auto auto auto;
  row-gap: 40px;
  column-gap: 40px;

  @media only screen and (max-width: 450px) {
    grid-template-columns: auto auto;
    row-gap: 10px;
    column-gap: 10px;
    padding: 10px;
  }
  @media only screen and (min-width: 450px) and (max-width: 768px) {
    grid-template-columns: auto auto auto;
    row-gap: 10px;
    column-gap: 10px;
    padding: 10px;
  }
  @media only screen and(min-width:768px) and (max-width: 1140px) {
    grid-template-columns: auto auto auto auto;
    row-gap: 5px;
    column-gap: 5px;
    padding: 5px;
  }
`
const CardTextWrapper = styled.div`
  align-content: center;
`

const ProjectCard = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto;
  min-width: 200px;
  height: 360px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  &.js {
    background-image: linear-gradient(
      209.21deg,
      rgb(62, 3, 138) 13.57%,
      rgb(99, 221, 246) 98.38%
    );
  }
  &.swift {
    background-image: linear-gradient(
      209.21deg,
      rgb(200, 11, 11) 13.57%,
      rgb(242, 165, 93) 98.38%
    );
  }
  &.html {
    background-image: linear-gradient(
      209.21deg,
      rgb(50, 14, 150) 13.57%,
      rgb(3, 97, 126) 98.38%
    );
  }
  &.css {
    background-image: linear-gradient(
      209.21deg,
      rgb(12, 16, 151) 13.57%,
      rgb(0, 133, 175) 98.38%
    );
  }
  &.java {
    background-image: linear-gradient(
      209.21deg,
      rgb(17, 39, 174) 13.57%,
      rgb(90, 113, 251) 98.38%
    );
  }
  &.python {
    background-image: linear-gradient(
      209.21deg,
      rgb(10, 57, 136) 13.57%,
      rgb(188, 168, 255) 98.38%
    );
  }
  &.default {
    background-image: linear-gradient(
      209.21deg,
      rgb(0, 6, 149) 13.57%,
      rgb(116, 69, 154) 98.38%
    );
  }

  padding: 20px;
  transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

  @media (max-width: 450px) {
    min-width: 100px;
    height: 200px;
    padding: 10px;
    ${Text3} {
      font-size: 15px;
    }
    ${Text2} {
      font-size: 13px;
    }
  }

  @media only screen and (min-width: 450px) and (max-width: 768px) {
    min-width: 100px;
    height: 200px;
    padding: 10px;
    ${Text3} {
      font-size: 15px;
    }
    ${Text2} {
      font-size: 13px;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1140px) {
    min-width: 100px;
    height: 220px;
    padding: 5px;
    ${Text3} {
      font-size: 17px;
    }
    ${Text2} {
      font-size: 15px;
    }
  }

  :hover {
    box-shadow: rgba(116, 69, 154, 0.3) 0px 20px 80px,
      rgba(0, 0, 0, 0.15) 0px 20px 40px;
    transform: scale(1.1);
    filter: hue-rotate(50deg);
  }
`
