import React from "react";
import styled from "styled-components";

const Section = () => {
  return (
    <Wrap>
      <ItemText>
        <h1>Model 3</h1>
        <p>Leasing starting at $349/mo</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>View Inventory</LeftButton>
          <RightButton>Custom Order</RightButton>
        </ButtonGroup>
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
  background-image: url("/images/model-3.jpg");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  line-height: 1.5;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const Buttons = styled.div`
  margin-bottom: 10px;
  @media (max-width: 37.5em) {
    margin-bottom: 30px;
  } ;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
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
    width: 250px;
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
