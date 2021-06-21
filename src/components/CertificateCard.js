import React from "react"
import styled from "styled-components"
import RoundButton from "./buttons/RoundButton"
import Icon from "./Icon"
import { Caption2, SmallText } from "./styles/TextStyles"
import { faLink } from "@fortawesome/free-solid-svg-icons"

function CertificateCard(props) {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <CaptionText>{props.name}</CaptionText>
          <Text>{props.org}</Text>
        </TextWrapper>
        <IconWrapper>
          <Icon ficon={props.icon} class="normal" />
        </IconWrapper>
        <RoundButton to={props.url} ficon={faLink} />
      </ContentWrapper>
      <Text>{props.id}</Text>
    </Wrapper>
  )
}

export default CertificateCard

const Wrapper = styled.div`
  width: 350px;
  height: 220px;
  padding: 20px;
  display: grid;
  gap: 60px;
  background-image: radial-gradient(
    218.51% 281.09% at 100% 100%,
    rgba(253, 63, 51, 0.6) 0%,
    rgba(76, 0, 200, 0.6) 45.83%,
    rgba(76, 0, 200, 0.6) 100%
  );
  box-shadow: rgba(39, 77, 153, 0.2) 0px 30px 60px,
    rgba(255, 255, 255, 0.3) 0px 0px 0px 0.5px inset;
  border-radius: 30px 30px 30px 30px;
  transition: 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    background-image: radial-gradient(
      120% 154.37% at 100% 100%,
      rgba(51, 253, 241, 0.1) 0%,
      rgba(200, 96, 0, 0.1) 100%
    );
    transform: scale(1.1);
  }
`
const ContentWrapper = styled.div`
  display: grid;

  grid-template-columns: auto auto;

  justify-content: space-between;
`

const TextWrapper = styled.div``
const IconWrapper = styled.div`
  color: white;
  column-span: all;
`

const CaptionText = styled(Caption2)`
  color: white;
`

const Text = styled(SmallText)`
  color: white;
  opacity: 0.8;
`
