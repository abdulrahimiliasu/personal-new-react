import React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import { certificatesData } from "../data/Data"
import CertificateCard from "../components/CertificateCard"
import styled from "styled-components"
import { H2, MediumText } from "../components/styles/TextStyles"

function Certificates() {
  return (
    <Layout>
      <Seo title="Certificates" />
      <Wrapper>
        <TextWrapper>
          <Text>Hey, These are my Certificates</Text>
          <Text2>Visit by clicking the url button.</Text2>
        </TextWrapper>
        <CertificatesWrapper>
          {certificatesData.map((item, index) => (
            <CertificateCard
              name={item.name}
              org={item.org}
              key={index}
              icon={item.icon}
              url={item.url}
              id={item.id}
            />
          ))}
        </CertificatesWrapper>
      </Wrapper>
    </Layout>
  )
}

export default Certificates

const Wrapper = styled.div`
  overflow: hidden;
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(251, 106, 12, 1) 0%,
    rgba(193, 11, 135, 1) 97.4%
  );
`

const TextWrapper = styled.div`
  max-width: 1234px;
  padding: 200px 50px 50px 50px;
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
const CertificatesWrapper = styled.div`
  display: flex;
  gap: 60px;
  flex-grow: 1;
  flex-wrap: wrap;
  padding: 20px;
  grid-template-columns: auto auto auto;
  justify-content: space-around;
`
