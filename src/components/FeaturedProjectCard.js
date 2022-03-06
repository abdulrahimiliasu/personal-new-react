import React from "react"
import styled from "styled-components"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import { MediumText, H3 } from "./styles/TextStyles"
import RoundButton from "./buttons/RoundButton"

export default function FeaturedProjectCard(props) {
  const { title, description, url, github, logo } = props.item
  return (
    <Wrapper>
      <ContentWrapper>
        <CardTextWrapper>
          <Flex>
            <Text3>{title}</Text3>
            <img src={logo} width={40} height={40} alt="project-logo" />
          </Flex>
          <Text2>{description || "No Description"}</Text2>
        </CardTextWrapper>
        <Flex>
          {url ? <RoundButton ficon={faLink} to={url} /> : <></>}
          <RoundButton ficon={faGithub} to={github} />
        </Flex>
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    transform: scale(1.04);
    border-radius: 30px;
  }
`

const ContentWrapper = styled.div`
  max-width: 350px;
  padding: 20px;
  display: grid;
  justify-content: space-between;
  gap: 60px;
  box-shadow: rgba(39, 77, 153, 0.2) 0px 30px 60px,
    rgba(255, 255, 255, 0.3) 0px 0px 0px 0.5px inset;
  border-radius: 30px 30px 30px 30px;
  transition: 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
  backdrop-filter: blur(40px);
`

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`

const CardTextWrapper = styled.div``

const Text2 = styled(MediumText)`
  opacity: 0.8;
  padding: 20px 0px;
`
const Text3 = styled(H3)`
  font-size: 20px;
`
