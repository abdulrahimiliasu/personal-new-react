import React from "react"
import { Caption2, SmallText } from "../styles/TextStyles"
import styled from "styled-components"
import { Link } from "gatsby"

function PrimaryButton(props) {
  return (
    <Link to="mailto:abduliliasu69@gmail.com">
      <Wrapper>
        <IconWrapper>
          <Icon src="/images/icons/email.svg" />
          <Ring src="/images/icons/icon-ring.svg" />
        </IconWrapper>
        <TextWrapper>
          <Title>{props.title || "Contact"}</Title>
          <Subtitle>{props.subtitle || "Email"}</Subtitle>
        </TextWrapper>
      </Wrapper>
    </Link>
  )
}
export default PrimaryButton

const Wrapper = styled.div`
  max-width: 280px;
  height: 77px;
  padding: 12px;
  background: linear-gradient(180deg, #ffffff 0%, #d9dfff 100%);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.2),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  border: 0px;
  display: grid;
  grid-template-columns: 53px auto;
  justify-content: start;
  align-items: center;
  gap: 20px;
  *,
  & {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  @media only screen and (max-width: 450px) {
    max-width: 200px;
    heigth: 30px;
    gap: 10px;
  }

  :hover {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 30px 60px rgba(23, 0, 102, 0.5),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    transform: translateY(-3px);
  }
`

const TextWrapper = styled.div`
  display: grid;
  gap: 4px;
`
const Ring = styled.img`
  position: absolute;
  top: -15px;
  left: -16px;
  ${Wrapper}:hover & {
    transform: rotate(30deg) scale(1.2) translate(1px, 1px);
  }
  @media only screen and (max-width: 450px) {
    display: none;
  }
`

const Title = styled(Caption2)`
  color: black;
`
const Subtitle = styled(SmallText)`
  color: black;
  opacity: 0.7;
`

const IconWrapper = styled.div`
  width: 45px;
  height: 45px;
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
  border-radius: 50%;
  display: grid;
  justify-content: center;
  align-content: center;
  position: relative;
  ${Wrapper}:hover & {
    filter: hue-rotate(10deg);
  }
  @media only screen and (max-width: 450px) {
    width: 25px;
    height: 25px;
  }
`
const Icon = styled.img`
  width: 29px;
  height: 29px;

  @media only screen and (max-width: 450px) {
    height: 20px;
    width: 20px;
  }
`
