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
  }
  &.large {
    width: 70px;
    height: 70px;
  }
  color: ${props => props.color};
`
