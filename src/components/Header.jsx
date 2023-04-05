import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
// import { selectCars } from "../features/car/carSlice";
// import { useSelector } from "react-redux";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  // const cars = useSelector(selectCars);
  // console.log(cars);

  return (
    <Container>
      <a href="">
        <img src="/images/logo.svg" alt="Tesla logo" />
      </a>
      <LeftMenu>
        <a href="">Model 3</a>
        <a href="">Model Y</a>
        <a href="">Model S</a>
        <a href="">Model X</a>
        <a href="">Solar Panels</a>
        <a href="">Solar Roof</a>
        <a href="">Powerwall</a>
      </LeftMenu>
      <RightMenu>
        <a href="">Shop</a>
        <a href="">Account</a>
        <a href="">Menu</a>
      </RightMenu>
      <MenuButton onClick={() => setIsOpen(true)}>Menu</MenuButton>
      <NavMenu show={isOpen}>
        <CloseWrapper>
          <CloseBtn onClick={() => setIsOpen(false)}></CloseBtn>
        </CloseWrapper>
        <li>
          <a href="">Model S</a>
        </li>
        <li>
          <a href="">Model 3</a>
        </li>
        <li>
          <a href="">Model X</a>
        </li>
        <li>
          <a href="">Model Y</a>
        </li>
        <li>
          <a href="">Solar Roof</a>
        </li>
        <li>
          <a href="">Solar Panels</a>
        </li>
        <li>
          <a href="">Powerwall</a>
        </li>
        <li>
          <a href="">Existing Inventory</a>
        </li>
        <li>
          <a href="">Used Inventory</a>
        </li>
        <li>
          <a href="">Trade In</a>
        </li>
        <li>
          <a href="">Demo Drive</a>
        </li>
        <li>
          <a href="">Insurance</a>
        </li>
        <li>
          <a href="">Commercial Energy</a>
        </li>
        <li>
          <a href="">Utilities</a>
        </li>
        <li>
          <a href="">Charging</a>
        </li>
        <li>
          <a href="">Find Us</a>
        </li>
        <li>
          <a href="">Support</a>
        </li>
        <li>
          <a href="">Investor Relations</a>
        </li>
        <li>
          <a href="">Shop</a>
        </li>
        <li>
          <a href="">Account</a>
        </li>
        <li>
          <a href="">More</a>
        </li>
      </NavMenu>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 45px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const LeftMenu = styled.div`
  display: none;
  @media (min-width: 83.5em) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a {
      font-weight: 600;
      letter-spacing: 1px;
      padding: 0 15px;
      flex-wrap: nowrap;
    }
  }
`;

const RightMenu = styled.div`
  display: none;
  @media (min-width: 83.5em) {
    display: flex;
    a {
      font-weight: 600;
      letter-spacing: 1px;
      padding: 0 15px;
      flex-wrap: nowrap;
    }
  }
`;

const MenuButton = styled.div`
  font-weight: 600;
  display; flex;
  background-color: rgba(255, 255,255, 0.1);
  backdrop-filter: blur(10px)
  color: #1a1b1d;
  padding: 6px 12px;
  border-radius: 5px;
  cursor: pointer;
  @media (min-width: 83.5em) {
    display: none;
}
`;

const NavMenu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: #fff;
  width: 325px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s ease-in-out;
  li {
    padding: 15px;
    a {
      font-weight: 600;
    }
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CloseBtn = styled(AiOutlineClose)`
  cursor: pointer;
`;
