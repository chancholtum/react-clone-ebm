import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledCard = styled.div`
  width: 27.8rem;
  background: #fff;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  padding-bottom: 1rem;
  overflow: hidden;
`;

const StyledImg = styled.img`
  width: 100%;
  background-size: cover;
  height: 18rem;
`;

const StyledTextBox = styled.div`
  margin: 1rem 2rem;
`;

const StyledDate = styled.p`
  color: #9f9f9f;
  font-size: 1.4rem;
`;

const StyledContent = styled.p`
  line-height: 22px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
`;

const StyledBtnContainer = styled.div`
  display: flex;
  justify-content: end;
  padding: 0.5rem 1.4rem;
`;

const StyledReadMore = styled(Link)`
  padding: 1rem 2.5rem 1rem 1.5rem;
  background: transparent;
  border: 1px solid #f2f2f2;
  font-size: 1.4rem;
  color: var(--color-text-main);
  border-radius: 50px;
`;

function Events({ event }) {
  return (
    <>
      <StyledCard key={event.date}>
        <StyledImg src={event.img} alt={event.title} />
        <StyledTextBox>
          <StyledDate>{event.date}</StyledDate>
          <StyledContent>{event.title}</StyledContent>
        </StyledTextBox>
        <StyledBtnContainer>
          <StyledReadMore to={`/${event.id}`}>อ่านเพิ่มเติม</StyledReadMore>
        </StyledBtnContainer>
      </StyledCard>
    </>
  );
}

export default Events;
