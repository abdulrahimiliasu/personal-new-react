import React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import CertificatesSection from "../components/sections/CertificatesSection"
import FeaturedProjectsSection from "../components/sections/FeaturedProjectsSection"
import HeroSection from "../components/sections/HeroSection"
import LogosSection from "../components/sections/LogosSection"
import SkillsSection from "../components/sections/SkillsSections"

function IndexPage() {
  return (
    <Layout>
      <Seo title="Home" />
      <HeroSection />
      <FeaturedProjectsSection />
      <LogosSection />
      <SkillsSection />
      <CertificatesSection />
    </Layout>
  )
}

export default IndexPage
