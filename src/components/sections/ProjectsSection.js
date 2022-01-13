import React from "react"
import styled from "styled-components"
import { H2, MediumText } from "../styles/TextStyles"
import { useState, useEffect } from "react"
import ReactLoading from "react-loading"
import ProjectCard from "../ProjectCard"

function ProjectsSection() {
  const [repos, setRepos] = useState(null)
  useEffect(() => {
    const getRepos = async () => {
      try {
        const res = await fetch(
          "https://api.github.com/users/abdulrahimiliasu/repos"
        )
        let repo_list = await res.json()
        setRepos(repo_list)
      } catch (err) {
        console.log(err)
      }
    }
    getRepos()
  }, [])

  return repos === null ? (
    <Center>
      <ReactLoading color="white" type="bubbles" />
    </Center>
  ) : (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <div>
            <Text>My projects</Text>
            <Text2>
              Check out my Software and Web projects on my GitHub accounts.
            </Text2>
          </div>
        </TextWrapper>
        <ProjectsWrapper>
          {repos.map(item => (
            <ProjectCard key={item["id"]} item={item}></ProjectCard>
          ))}
        </ProjectsWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default ProjectsSection

const Wrapper = styled.div`
  overflow: hidden;
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(62, 133, 238, 1) 1.1%,
    rgba(227, 137, 240, 1) 43.7%,
    rgba(243, 193, 124, 1) 89.7%
  );
`

const ContentWrapper = styled.div`
  max-width: 100%;
  padding: 70px 70px;

  @media (max-width: 450px) {
    grid-template-columns: auto;
    padding: 150px 20px 250px;
    gap: 60px;
  }
`
const TextWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 50px 0px;
  @media (max-width: 450px) {
    padding-top: 0px;
  }
`

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(62, 133, 238, 1) 1.1%,
    rgba(227, 137, 240, 1) 43.7%,
    rgba(243, 193, 124, 1) 89.7%
  );
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

const ProjectsWrapper = styled.div`
  background-color: rgba(15, 14, 71, 0.3);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 30px 60px,
    rgba(255, 255, 255, 0.2) 0px 0px 0px 0.5px inset;
  border-radius: 20px 20px 20px 20px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 20px;
`
