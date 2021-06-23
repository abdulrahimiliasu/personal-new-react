import React from "react"
import styled from "styled-components"

function ProfilePicture() {
  return (
    <Wrapper>
      <Picture />
    </Wrapper>
  )
}
export default ProfilePicture

const Wrapper = styled.div``
const Picture = styled.span`
  height: 250px;
  width: 250px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  background-image: url("/images/avatars/profilepicture.jpeg");
  background-size: cover;
  background-position: center;
  box-shadow: 0px 40px 64px #0e1f3527;

  @media only screen and (max-width: 450px) {
    height: 120px;
    width: 120px;
  }

  @media only screen and (min-width: 450px) and (max-width: 768px) {
    height: 150px;
    width: 150px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1140px) {
    height: 230px;
    width: 230px;
  }
`
