import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Icon(props) {
  return (
    <Wrapper>
      <IconSVG
        icon={props.ficon}
        className={props.class}
        color={props.color}
      ></IconSVG>
    </Wrapper>
  )
}

export default Icon

const Wrapper = styled.div``

const IconSVG = styled(FontAwesomeIcon)`
  &.normal {
    width: 25px;
    height: 25px;

    @media (max-width: 450px) {
      width: 15px;
      height: 15px;
    }
    @media (max-width: 768px) {
      width: 20px;
      height: 20px;
    }
    @media (max-width: 1140px) {
      width: 25px;
      height: 20px;
    }
  }
  &.large {
    width: 70px;
    height: 70px;

    @media only screen and (max-width: 450px) {
      width: 50px;
      height: 50px;
    }
    @media only screen and (min-width: 450px) and (max-width: 768px) {
      width: 60px;
      height: 60px;
    }
    @media only screen and (min-width: 768px) and(max-width: 1140px) {
      width: 30px;
      height: 30px;
    }
  }

  color: ${props => props.color};
`
