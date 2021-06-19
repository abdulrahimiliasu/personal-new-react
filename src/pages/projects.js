import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import ProjectsSection from "../components/sections/ProjectsSection"

function Projects() {
  return (
    <Layout>
      <SEO title="Projects" />
      <ProjectsSection />
    </Layout>
  )
}

export default Projects
