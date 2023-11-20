import styled from "styled-components";
import NavTop from "./NavTop";
import NavBelow from "./NavBelow";

const StyedNavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.32);
`;

function NavBar() {
  return (
    <StyedNavContainer>
      <NavTop />
      <NavBelow />
    </StyedNavContainer>
  );
}

export default NavBar;
