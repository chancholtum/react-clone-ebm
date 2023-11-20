import { useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledContainer = styled.div``;

const StyledNavContainer = styled.div`
  background: var(--color-bg-main);
  width: 100%;
`;

const StyledContent = styled.div`
  max-width: 118rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  position: relative;
`;

const StyledUl = styled.ul`
  display: flex;
  padding: 2.1rem 0;
  gap: 2.4rem;
  justify-content: center;
`;

const StyledLi = styled.li`
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--color-text-main);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

const StyledImg = styled.img`
  position: absolute;
  left: 0;
  width: auto;
  height: 6rem;
  cursor: pointer;
`;

const StyledArrow = styled.img`
  width: 1rem;
`;

function NavBelow() {
  return (
    <StyledContainer>
      <StyledNavContainer>
        <StyledContent>
          <Link to="home">
            <StyledImg src="BEM.png" alt="BEM Logo" />
          </Link>
          <StyledUl>
            <StyledLi>
              <span>เกี่ยวกับเรา</span>
              <StyledArrow src="arrow-down-black.png" alt="arrow-down-black" />
            </StyledLi>
            <StyledLi>
              <span>ข้อมูลบัตรโดยสาร</span>
              <StyledArrow src="arrow-down-black.png" alt="arrow-down-black" />
            </StyledLi>
            <StyledLi>
              <span>ข้อมูลการใช้บริการ</span>
              <StyledArrow src="arrow-down-black.png" alt="arrow-down-black" />
            </StyledLi>
            <StyledLi>
              <span>ธุรกิจและบริการ</span>
              <StyledArrow src="arrow-down-black.png" alt="arrow-down-black" />
            </StyledLi>
            <StyledLi>
              <a href="#">ข่าวสารและกิจกรรม</a>
            </StyledLi>
            <StyledLi>
              <a href="#">โปรโมชั่น</a>
            </StyledLi>
            <StyledLi>
              <a href="#">ตำถามที่พบบ่อย</a>
            </StyledLi>
          </StyledUl>
        </StyledContent>
      </StyledNavContainer>
    </StyledContainer>
  );
}

export default NavBelow;
