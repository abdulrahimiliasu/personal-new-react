import React from "react"
import styled from "styled-components"
import { WaveBackground2 } from "../backgrounds/WaveBackground2"
import SecondaryButton from "../buttons/SecondaryButton"
import { H3, H2, MediumText } from "../styles/TextStyles"
import { data } from "../../data/Data"

function SkillsSection() {
  return (
    <Wrapper>
      <WaveBackground2 />
      <ContentWrapper>
        <TextWrapper>
          <Text>Skills</Text>
          <Text2>
            I am passionate about software development, machine learning, neural
            netowrks, web development and design.
          </Text2>
          <SecondaryButton />
        </TextWrapper>
        <CardWrapper>
          <Card className="card1" key="0">
            <div className="top-card">
              <div className="top-content">
                <Text3>Software</Text3>
              </div>
              {data["program_langs"].map((item, index) => (
                <CardText key={index}>
                  <MediumText2>{item}</MediumText2>
                </CardText>
              ))}
            </div>
            <div className="bottom-card b1"></div>
          </Card>
          <Card className="card2" key="1">
            <div className="top-card">
              <div className="top-content">
                <Text3>Web</Text3>
              </div>
              {data["web_langs"].map((item, index) => (
                <CardText key={index}>
                  <MediumText2>{item}</MediumText2>
                </CardText>
              ))}
            </div>
            <div className="bottom-card b2"></div>
          </Card>
          <Card className="card2">
            <div className="top-card">
              <div className="top-content">
                <Text3>Design</Text3>
              </div>
              {data["design"].map((item, index) => (
                <CardText key={index}>
                  <MediumText2>{item}</MediumText2>
                </CardText>
              ))}
            </div>
            <div className="bottom-card b3"></div>
          </Card>
        </CardWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default SkillsSection

const Wrapper = styled.div`
  overflow: hidden;
`

const ContentWrapper = styled.div`
  max-width: 100%;
  padding: 100px 0px;
  display: grid;
  grid-template-columns: 260px auto;
  justify-content: space-around;

  @media (max-width: 450px) {
    grid-template-columns: auto;
    padding: 150px 20px 250px;
    gap: 60px;
  }
`
const TextWrapper = styled.div``
const CardWrapper = styled.div`
  display: flex;
  grid-template-columns: 1fr 1fr 1fr;
  flex-wrap: wrap;
  row-gap: 60px;
  column-gap: 60px;
`
const Text = styled(H2)``
const Text2 = styled(MediumText)`
  padding: 20px 0px;
`
const MediumText2 = styled(MediumText)`
  color: white;
`
const Text3 = styled(H3)`
  padding-bottom: 10px;
  color: white;
  text-shadow: 0px 20px 40px rgba(0, 0, 0, 0.3);
`
const CardText = styled.div`
  display: flex;
  justify-content: space-between;
  opacity: 0.8;
`

const Card = styled.div`
  position: relative;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);

  & .top-card {
    padding: 20px;
    /* background-color: rgba(255, 255, 255, 0.3);
    border: 0.5px solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(40px); */
    background: rgba(255, 255, 255, 0.3);
    border: 0.5px solid rgba(255, 255, 255, 0.5);
    box-sizing: border-box;
    box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(40px);
    border-top-left-radius: 0px;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 40px;
    border-bottom-left-radius: 40px;
    width: 240px;
    height: 280px;
    padding-top: 20px;
  }
  .b1 {
    background-image: linear-gradient(
      rgb(40, 11, 152) 0%,
      rgb(59, 150, 215) 100%
    );
  }
  .b2 {
    background-image: linear-gradient(
      rgb(192, 52, 149) 0%,
      rgb(76, 36, 214) 100%
    );
  }
  .b3 {
    background-image: linear-gradient(
      rgb(18, 61, 173) 0%,
      rgb(193, 87, 183) 100%
    );
  }
  & .bottom-card {
    position: absolute;
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    border: 0.5px solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(40px);
    width: 220px;
    height: 280px;

    transform: skewY(5deg);
    transform-origin: top left;
    top: 0px;
    border-top-left-radius: 0px;
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
    border-bottom-left-radius: 40px;
    z-index: -1;
  }

  :hover {
    transform: translateY(-3px);
    & .bottom-card {
      box-shadow: rgba(24, 32, 79, 0.25) 0px 100px 100px,
        rgba(255, 255, 255, 0.5) 0px 0px 0px 0.5px inset;

      transform: skewY(15deg);
      width: 200px;
    }
  }
`
