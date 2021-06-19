import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import HeroSection from "../components/sections/HeroSection"
import SkillsSection from "../components/sections/SkillsSections"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection />
      <SkillsSection />
    </Layout>
  )
}

export default IndexPage
