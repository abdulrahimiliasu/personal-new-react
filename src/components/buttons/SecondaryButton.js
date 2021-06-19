import React from "react"
import { MediumText } from "../styles/TextStyles"
import styled from "styled-components"
import { Link } from "gatsby"

function SecondaryButton(props) {
  return (
    <Link to={props.to || "/"}>
      <Wrapper>
        <Icon src={props.image || "/images/icons/tutorials.svg"}></Icon>
        <Subtitle>{props.title || "See Projects"}</Subtitle>
      </Wrapper>
    </Link>
  )
}

export default SecondaryButton

const Wrapper = styled.div`
  background: linear-gradient(
    180deg,
    rgba(24, 32, 79, 0.4) 0%,
    rgba(24, 32, 79, 0.25) 100%
  );
  border: 0.5px solid rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 30px;
  width: 165px;
  height: 44px;
  transition: 0.2s ease-in-out;
  display: grid;
  grid-template-columns: 35px auto;
  align-items: center;
  justify-items: center;

  :hover {
    transform: translateY(-2px);
    box-shadow: rgba(0, 0, 0, 0.15) 0px 20px 40px,
      rgba(0, 0, 0, 0.3) 0px 0px 0px 0.5px inset,
      rgba(0, 0, 0, 0.3) 0px 10px 40px inset;
  }
`

const Icon = styled.img`
  width: 29px;
  height: 29px;
`
const Subtitle = styled(MediumText)`
  color: white;
  font: large;
`
