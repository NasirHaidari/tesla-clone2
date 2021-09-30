import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
function Section({
  title,
  description,
  backgroundImg,
  lefBtnText,
  rightBtnText,
  // txt,
}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{lefBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
            {/* {txt && <h5>{txt}</h5>} */}
          </ButtonGroup>

          <DownArrow src='/images/down-arrow.svg' />
        </Fade>
      </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
`

const ItemText = styled.div`
  padding-top: 15vh;
  letter-spacing: 1px;
  word-spacing: 1.9px;

  h1 {
  }
  p {
    text-decoration: underline;
    cursor: pointer;
  }
`
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 760px) {
    flex-direction: column;
  }
`

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 260px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;

  text-transform: uppercase;
  font-size: 15px;
  margin-bottom: 30px;
  cursor: pointer;
  margin: 10px;
`

const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.8;
  color: black;
`

const DownArrow = styled.img`
  margin-bottom: 20px;
  overflow-x: hidden;
  height: 40px;
  animation: animateDown infinite 1.5s;
`

const Buttons = styled.div``
