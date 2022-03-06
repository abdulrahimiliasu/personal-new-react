import React from "react"
import styled from "styled-components"
import { programming_logos } from "../../data/Data"

export default function LogosSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        {programming_logos.map((item, index) => (
          <ImageWrapper key={index}>
            <img src={item.src} alt={item.alt} width={54} height={54} />
          </ImageWrapper>
        ))}
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;

  margin: 0px 70px 0px 70px;
  justify-content: center;
  padding: 200px 10px;

  @media (max-width: 450px) {
    flex-wrap: wrap;
    gap: 20px;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  max-width: 1234px;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
`

const ImageWrapper = styled.div``
