import styled from "styled-components";
import bg from "../images/bg.webp";

const LayoutAppComponent = styled.div`
  background-image: url(${bg});
  background-size: cover;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

export default LayoutAppComponent;
