import React from "react"
import styled from "styled-components"

export function ProjectsBackground() {
  return (
    <Wrapper>
      <Background />
      <Wave src="/images/waves/courses-wave1.svg" style={{ top: "100px" }} />
      <Wave src="/images/waves/courses-wave2.svg" style={{ top: "350px" }} />
      <Wave src="/images/waves/courses-wave2.svg" style={{ top: "350px" }} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
`

const Wave = styled.img`
  position: absolute;
  z-index: -1;
  @media (min-width: 1440px) {
    width: 100%;
  }
`

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #4382ff 0%, #9076e7 100%);
  z-index: -1;
`
