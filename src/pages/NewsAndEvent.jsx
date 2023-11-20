import styled from "styled-components";
import StyleTitle from "../components/StyledTitle";
import CardEvent from "../components/CardEvent";

const StyledContainer = styled.main`
  width: 118rem;
  margin: 12rem auto 0;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const StyledTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const StyledLine = styled.div`
  width: 45%;
  height: 0.4rem;
  border-radius: 50px;
  background-color: var(--color-bg-main);
`;

function NewsAndEvent() {
  return (
    <StyledContainer>
      <StyledTitleBox>
        <StyleTitle>ข่าวสารและกิจกรรม</StyleTitle>
        <StyledLine />
      </StyledTitleBox>
      <CardEvent />
    </StyledContainer>
  );
}

export default NewsAndEvent;
