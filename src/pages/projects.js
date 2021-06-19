import React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import ProjectsSection from "../components/sections/ProjectsSection"

function Projects() {
  return (
    <Layout>
      <Seo title="Projects" />
      <ProjectsSection />
    </Layout>
  )
}

export default Projects
