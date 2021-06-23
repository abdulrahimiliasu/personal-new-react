import React from "react"
import styled from "styled-components"
import Icon from "../components/Icon"
import {
  faCode,
  faServer,
  faDraftingCompass,
} from "@fortawesome/free-solid-svg-icons"
import { SmallText, Caption2 } from "../components/styles/TextStyles"

function CertificateSectionCards() {
  return (
    <Wrapper>
      <CardWrapper>
        <div className="wrap">
          <Card className="card1">
            <TextWrapper>
              <CaptionText>Certified with</CaptionText>
              <Text>Programming</Text>
              <Text>Datasbase</Text>
              <Text>Networking</Text>
              <Text>Design</Text>
            </TextWrapper>
            <IconWrapper>
              <Icon ficon={faCode} class="normal" />
            </IconWrapper>
          </Card>
          <Card className="card2">
            <TextWrapper>
              <Text>Datasbase</Text>
              <Text>Networking</Text>
            </TextWrapper>
            <IconWrapper>
              <Icon ficon={faServer} class="normal" />
            </IconWrapper>
          </Card>
          <Card className="card3">
            <TextWrapper>
              <Text>Design</Text>
            </TextWrapper>
            <IconWrapper>
              <Icon ficon={faDraftingCompass} class="normal" />
            </IconWrapper>
          </Card>
        </div>
      </CardWrapper>
    </Wrapper>
  )
}

export default CertificateSectionCards

const Wrapper = styled.div``
const TextWrapper = styled.div``
const CaptionText = styled(Caption2)`
  color: white;
  @media only screen and (max-width: 650px) {
    font-size: 10px;
  }
`
const Text = styled(SmallText)`
  color: white;
  opacity: 0.8;

  @media only screen and (max-width: 650px) {
    font-size: 8px;
  }
`
const IconWrapper = styled.div`
  color: white;
`
const CardWrapper = styled.div`
  position: relative;
  & .wrap {
    width: 100%;
    height: 100%;
    transition: 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  :hover {
    & .wrap {
      transform: translate(-100px, -20px) skewX(-5deg) rotateZ(-5deg)
        scaleX(0.9);
      @media only screen and (max-width: 650px) {
        transform: translate(-30px, -10px) skewX(-5deg) rotateZ(-5deg)
          scaleX(0.9);
      }
      @media only screen and (min-width: 650px) and (max-width: 768px) {
        transform: translate(-50px, -15px) skewX(-5deg) rotateZ(-5deg)
          scaleX(0.9);
      }
      @media only screen and (min-width: 768px) and (max-width: 1140px) {
        transform: translate(-70px, -20px) skewX(-5deg) rotateZ(-5deg)
          scaleX(0.9);
      }
    }
  }
`
const Card = styled.div`
  width: 350px;
  height: 220px;
  padding: 20px;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  gap: 60px;
  position: absolute;
  box-shadow: rgba(39, 77, 153, 0.2) 0px 30px 60px,
    rgba(255, 255, 255, 0.3) 0px 0px 0px 0.5px inset;
  border-radius: 30px 30px 30px 30px;
  transition: 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
  backdrop-filter: blur(40px);
  @media only screen and (max-width: 650px) {
    width: 200px;
    height: 120px;
    padding: 15px;
  }
  @media only screen and (min-width: 650px) and (max-width: 768px) {
    width: 230px;
    height: 150px;
    padding: 20px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1140px) {
    width: 250px;
    height: 170px;
    padding: 20px;
  }

  &.card1 {
    top: 0px;
    left: 0px;
    z-index: 3;
    background-image: radial-gradient(
      218.51% 281.09% at 100% 100%,
      rgba(253, 63, 51, 0.6) 0%,
      rgba(76, 0, 200, 0.6) 45.83%,
      rgba(76, 0, 200, 0.6) 100%
    );
  }
  &.card2 {
    top: 20px;
    left: 200px;
    @media only screen and (max-width: 650px) {
      top: 10px;
      left: 50px;
    }
    @media only screen and (min-width: 650px) and (max-width: 768px) {
      top: 15px;
      left: 100px;
    }
    @media only screen and (min-width: 768px) and (max-width: 1140px) {
      top: 17px;
      left: 130px;
    }
    z-index: 2;
    background-image: radial-gradient(
      100% 128.38% at 100% 100%,
      rgba(51, 168, 253, 0.2) 0%,
      rgba(76, 0, 200, 0.2) 100%
    );
  }
  &.card3 {
    top: 40px;
    left: 280px;
    @media only screen and (max-width: 650px) {
      top: 20px;
      left: 70px;
    }
    @media only screen and (min-width: 650px) and (max-width: 768px) {
      top: 30px;
      left: 150px;
    }
    @media only screen and (min-width: 768px) and (max-width: 1140px) {
      top: 40px;
      left: 200px;
    }
    z-index: 1;
    left: 280px;
    background-image: linear-gradient(
      rgb(117, 224, 230) 0%,
      rgb(57, 19, 184) 100%
    );
  }

  :hover {
    transform: translateY(20px);
  }
`
