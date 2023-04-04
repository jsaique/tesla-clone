import React from "react";
import styled from "styled-components";
import Section from "./Section";

const Home = () => {
  return (
    <Container>
      <Section
        title="Model 3"
        description="Leasing starting at $349/mo"
        backgroundImg="model-3.jpg"
        leftBtnText="View Inventory"
        rightBtnText="Custom Order"
      />
      <Section
        title="Model Y"
        description="Schedule a Demo Drive"
        backgroundImg="model-y.jpg"
        leftBtnText="View Inventory"
        rightBtnText="Custom Order"
      />
      <Section
        title="Model S"
        description="Schedule a Demo Drive"
        backgroundImg="model-s.jpg"
        leftBtnText="View Inventory"
        rightBtnText="Custom Order"
      />
      <Section
        title="Model X"
        description="Schedule a Demo Drive"
        backgroundImg="model-x.jpg"
        leftBtnText="View Inventory"
        rightBtnText="Custom Order"
      />
      <Section
        title="Solar Panels"
        description="Lower Cost Solar Panels in America"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        backgroundImg="solar-roof.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Accessories"
        backgroundImg="accessories.jpg"
        leftBtnText="Shop Now"
      />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
`;
