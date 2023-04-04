import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <a href="">
        <img src="/images/logo.svg" alt="logo" />
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
      <MenuButton>Menu</MenuButton>
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
  font-size: 13px;
  display; flex;
  background-color: #c0c2c7;
  opacity: 0.85;
  color: #1a1b1d;
  padding: 6px 12px;
  border-radius: 5px;
  @media (min-width: 83.5em) {
    display: none;
}
`;
