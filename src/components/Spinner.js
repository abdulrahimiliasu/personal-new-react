import React from "react"
import { useSpring, animated } from "@react-spring/web"
import styled from "styled-components"

export default function Spinner() {
  const styles = useSpring({
    loop: true,
    from: { rotateZ: 0 },
    to: { rotateZ: 180 },
  })

  return (
    <Wrapper>
      <animated.div
        style={{
          width: 80,
          height: 80,
          backgroundColor: "#FFFFFF",
          borderRadius: 16,
          ...styles,
        }}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(62, 133, 238, 1) 1.1%,
    rgba(227, 137, 240, 1) 43.7%,
    rgba(243, 193, 124, 1) 89.7%
  );
  width: 100%;
  height: 1000px;
`
