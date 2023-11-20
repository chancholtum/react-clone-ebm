import styled from "styled-components";
import ImageSlider from "./ImageSlider";

const StyledContainer = styled.header`
  margin-top: 9rem;
  width: 100%;
`;

function Header() {
  return (
    <StyledContainer>
      <ImageSlider />
    </StyledContainer>
  );
}

export default Header;
