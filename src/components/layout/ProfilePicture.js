import React from "react"
import styled from "styled-components"

function ProfilePicture() {
  return (
    <Wrapper>
      <Picture />
      {/* <Ring src="/images/icons/icon-ring.svg" /> */}
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
`

// const Ring = styled.img`
//   position: relative;
//   top: -105px;
//   left: -16px;
//   ${Wrapper}:hover & {
//     transform: rotate(30deg) scale(1.2) translate(1px, 1px);
//   }
// `
