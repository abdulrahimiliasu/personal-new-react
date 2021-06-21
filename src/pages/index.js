import React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import CertificatesSection from "../components/sections/CertificatesSection"
import HeroSection from "../components/sections/HeroSection"
import SkillsSection from "../components/sections/SkillsSections"

function IndexPage() {
  return (
    <Layout>
      <Seo title="Home" />
      <HeroSection />
      <SkillsSection />
      <CertificatesSection />
    </Layout>
  )
}

export default IndexPage
