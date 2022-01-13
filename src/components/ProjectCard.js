import React from "react"
import styled from "styled-components"
import { getIcon } from "../data/Data"
import Icon from "./Icon"
import RoundButton from "./buttons/RoundButton"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { MediumText, H3 } from "./styles/TextStyles"

export default function ProjectCard(props) {
  const { item } = props
  return (
    <Wrapper>
      <ContentWrapper className={getIcon(item.language).class}>
        <div className="icon">
          <Icon
            ficon={getIcon(item["language"]).icon}
            class="large"
            color="white"
          />
        </div>
        <CardTextWrapper>
          <Text3>{item["name"]}</Text3>
          <Text2>{item["language"]}</Text2>
        </CardTextWrapper>
        <div className="desc">
          <Text2>{item["description"] || "No Description"}</Text2>
        </div>
        <RoundButton ficon={faGithub} to={item["html_url"]} />
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div``

const CardTextWrapper = styled.div``

const Text2 = styled(MediumText)`
  color: white;
  opacity: 0.8;
  padding: 20px 0px;
`
const Text3 = styled(H3)`
  color: white;
  font-size: 20px;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  width: 350px;
  height: 240px;
  border-radius: 20px 20px 20px 20px;
  gap: 5px;

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

  .desc {
    display: none;
  }
  padding: 20px;
  transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

  @media (max-width: 450px) {
    height: 270px;
    width: 300px;
    padding: 10px;
  }

  @media only screen and (min-width: 450px) and (max-width: 768px) {
    height: 270px;
    padding: 10px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1140px) {
    height: 270px;
    padding: 10px;
  }

  :hover {
    box-shadow: rgba(116, 69, 154, 0.3) 0px 20px 80px,
      rgba(0, 0, 0, 0.15) 0px 20px 40px;
    transform: scale(1.05);
    @media (max-width: 450px) {
      transform: scale(1.01);
    }
    filter: hue-rotate(50deg);
    gap: 0px;
    ${CardTextWrapper}, .icon {
      display: none;
    }
    .desc {
      display: block;
    }
  }
`
