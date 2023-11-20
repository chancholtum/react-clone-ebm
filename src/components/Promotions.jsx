import styled from "styled-components";
import StyledTitle from "./StyledTitle";

const StyledContainer = styled.section`
  width: 118rem;
  margin: 6rem auto 0;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const StyledTitleBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const StyledLine = styled.div`
  width: 7%;
  height: 0.4rem;
  border-radius: 50px;
  background-color: var(--color-bg-main);
`;

const StyledButton = styled.button`
  background: none;
  border: none;
  color: var(--color-text-sub);
`;

const StyledIcon = styled.img`
  width: 0.7rem;
  height: 0.7rem;
`;

function Promotions() {
  return (
    <StyledContainer>
      <StyledTitleBox>
        <StyledTitle color="#2e383c">โปรโมชั่น</StyledTitle>
        <StyledLine />
      </StyledTitleBox>
      <p>ติดตามโปรโมชั่นได้ในเร็วๆ นี้</p>
      <StyledButton>
        ดูเพิ่มเติม <StyledIcon src="Vector.png" alt="vector" />
      </StyledButton>
    </StyledContainer>
  );
}

export default Promotions;
