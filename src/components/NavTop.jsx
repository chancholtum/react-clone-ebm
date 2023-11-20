import { useState } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  background: var(--color-bg-sub);
  width: 100%;
`;

const StyledContent = styled.div`
  max-width: 118rem;
  margin: 0 auto;
  padding: 0.7rem 0;
  display: flex;
  justify-content: space-between;
`;

const StyledUl = styled.ul`
  display: flex;
  gap: 0.5rem;
`;

const StyledLi = styled.li`
  font-size: 1.2rem;
  font-weight: 300;
  color: var(--color-text-main);

  &:hover {
    text-decoration: underline;
  }

  &:nth-child(2) {
    padding: 0 0.5rem;
    margin: 0 0.5rem;
    border-left: 1px solid black;
    border-right: 1px solid black;
  }
`;

const StyledDropDownContainer = styled.div`
  position: relative;
`;

const StyledDropDownBtn = styled.button`
  font-size: 1.2rem;
  font-weight: 300;
  color: var(--color-text-main);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  border: none;
  cursor: pointer;

  &:focus + ul {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledImg = styled.img`
  max-width: ${(props) => props.w};
`;

const StyledDropDownBox = styled.ul`
  top: calc(100% + 0.8rem);
  width: 100%;
  border-radius: 6px;
  background: #fff;
  position: absolute;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 3px;
  font-size: 1.4rem;
  opacity: 0;
  transform: translateY(-10px);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
`;

const StyledLangList = styled.li`
  font-size: 1.4rem;
  cursor: pointer;
  color: var(--color-text-main);
`;

function NavTop() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <StyledContainer>
      <StyledContent>
        <StyledUl>
          <StyledLi>
            <a href="#">หน้าแรก</a>
          </StyledLi>
          <StyledLi>
            <a href="#">E-Library</a>
          </StyledLi>
          <StyledLi>
            <a href="#">ข้อแนะนำเพื่อความปลอดภัย</a>
          </StyledLi>
        </StyledUl>
        <StyledUl>
          <StyledLi>
            <a href="#">ร่วมงานกับเรา</a>
          </StyledLi>
          <StyledLi>
            <a href="#">ติดต่อเรา</a>
          </StyledLi>
          <StyledDropDownContainer>
            <StyledDropDownBtn onClick={handleOpen}>
              <StyledImg w="1.5rem" src="Globe.png" alt="globe" />
              <span>ภาษาไทย</span>
              <StyledImg w="1rem" src="arrow-down-black.png" alt="arrow" />
            </StyledDropDownBtn>
            <StyledDropDownBox>
              <StyledLangList>TH</StyledLangList>
              <StyledLangList>EN</StyledLangList>
            </StyledDropDownBox>
          </StyledDropDownContainer>
        </StyledUl>
      </StyledContent>
    </StyledContainer>
  );
}

export default NavTop;
