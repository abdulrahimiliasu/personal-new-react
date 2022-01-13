import React from "react"
import styled from "styled-components"
import { featured_projects } from "../../data/Data"
import FeaturedProjectCard from "../FeaturedProjectCard"
import { H2 } from "../styles/TextStyles"

export default function FeaturedProjectsSection() {
  return (
    <Wrapper>
      <H2>Featured Projects</H2>
      <ContentWrapper>
        {featured_projects.map((item, index) => (
          <FeaturedProjectCard key={index} item={item} />
        ))}
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;

  margin: 0px 70px 0px 70px;
  justify-content: center;
  padding: 100px 10px;
  gap: 20px;

  @media (max-width: 450px) {
    flex-wrap: wrap;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  max-width: 1234px;
  gap: 40px;
  justify-content: space-around;
  flex-wrap: wrap;
`
