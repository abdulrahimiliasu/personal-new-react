import React from "react"
import styled from "styled-components"
import Icon from "../Icon"
function RoundButton(props) {
  return (
    <Wrapper>
      <a href={props.to || "/"} target="_blank" rel="noreferrer">
        <Icon ficon={props.ficon} class="normal" color="white" />
      </a>
    </Wrapper>
  )
}

export default RoundButton

const Wrapper = styled.div`
  width: 40px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  display: grid;
  align-content: center;
  justify-content: center;
  transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    transform: scale(1.2);
    background-color: rgba(0, 0, 0, 0.3);
  }
`
