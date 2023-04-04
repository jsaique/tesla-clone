import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Section = ({
  title,
  description,
  backgroundImg,
  backgroundImgLg,
  leftBtnText,
  rightBtnText,
}) => {
  return (
    <Wrap bgImage={backgroundImg} bgImageLg={backgroundImgLg}>
      <Fade big>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade big>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
};

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between; // vertical
  align-items: center; // horizontal
  line-height: 1.5;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  @media (min-width: 37.5em) {
    background-image: ${(props) => `url("/images/${props.bgImageLg}")`};
  }
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  letter-spacing: 1px;
`;

const Buttons = styled.div`
  margin-big: 10px;
  @media (max-width: 37.5em) {
    margin-big: 30px;
  } ;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-big: 15px;
  gap: 20px;
  @media (min-width: 37.5em) {
    flex-direction: row;
    gap: 25px;
  }
`;

const LeftButton = styled.div`
  letter-spacing: 1px;
  background-color: #1a1b1d;
  height: 45px;
  width: 90vw;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  opacity: 0.85;
  font-size: 1rem;
  cursor: pointer;
  @media (min-width: 37.5em) {
    width: 300px;
  }
`;

const RightButton = styled(LeftButton)`
  background-color: #fff;
  opacity: 0.65;
  color: #1a1b1d;
`;

const DownArrow = styled.img`
  margin-top: 5px;
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
  @media (min-width: 37.5em) {
    margin-top: 20px;
  }
`;
