import React from "react"
import styled from "styled-components"
import { WaveBackground2 } from "../backgrounds/WaveBackground2"
import SecondaryButton from "../buttons/SecondaryButton"
import { H2, MediumText } from "../styles/TextStyles"
// import { data } from "../../data/Data"
import CertificateCard from "../CertificateCard"

function CertificatesSection() {
  return (
    <Wrapper>
      <WaveBackground2 />
      <ContentWrapper>
        <CardWrapper>
          {/* <CustomCertCard className="card1" />
          <CustomCertCard className="card2" />
          <CustomCertCard className="card3" /> */}
        </CardWrapper>
        <TextWrapper>
          <Text>Certificates</Text>
          <Text2>See my certificates.</Text2>
          <SecondaryButton title="See Certificates" to="/certificates/" />
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
  padding: 100px 0px;
  display: grid;
  grid-template-columns: 260px auto;
  justify-content: space-around;

  @media only screen and (max-width: 450px) {
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
const CustomCertCard = styled(CertificateCard)`
  position: absolute;
  & .card1 {
    top: 0px;
    left: 0px;
    background-color: red;
  }
  &.card2 {
    top: 0px;
    left: 0px;
  }
  &.card3 {
    top: 0px;
    left: 0px;
  }
  :hover {
  }
`
const CardWrapper = styled.div`
  position: relative;
  max-width: 335px;
`
const Text = styled(H2)``
const Text2 = styled(MediumText)`
  padding: 20px 0px;
`
