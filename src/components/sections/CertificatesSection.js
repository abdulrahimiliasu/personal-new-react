import React from "react"
import styled from "styled-components"
import { WaveBackground2 } from "../backgrounds/WaveBackground2"
import SecondaryButton from "../buttons/SecondaryButton"
import CertificateSectionCards from "../CertificateSectionCards"
import { H2, MediumText } from "../styles/TextStyles"
// import { data } from "../../data/Data"

function CertificatesSection() {
  return (
    <Wrapper>
      <WaveBackground2 />
      <ContentWrapper>
        <CertificateSectionCards />
        <TextWrapper>
          <Text>Certificates</Text>
          <Text2>See all my certificates.</Text2>
          <SecondaryButton title="Certificates" to="/certificates/" />
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default CertificatesSection

const Wrapper = styled.div`
  overflow: hidden;
`
const ContentWrapper = styled.div`
  max-width: 100%;
  height: 700px;
  padding: 100px 0px;
  display: grid;
  grid-template-columns: 650px auto;
  justify-content: space-around;

  @media only screen and (max-width: 650px) {
    grid-template-columns: auto;
  }
  @media only screen and (min-width: 650px) and (max-width: 768px) {
    grid-template-columns: auto;
  }
  @media only screen and (min-width: 768px) and (max-width: 1140px) {
    grid-template-columns: auto;
    gap: 60px;
  }
`
const TextWrapper = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
  padding-inline: 50px;
`
const Text = styled(H2)``
const Text2 = styled(MediumText)`
  padding: 20px 0px;
`
