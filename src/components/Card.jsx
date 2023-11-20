import styled from "styled-components";

const StyledCard = styled.div`
  width: 37.4rem;
  height: 16.2rem;
  border-radius: 1rem;
  overflow: hidden;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.92) 0%,
      rgba(0, 0, 0, 0.47) 80.33%
    ),
    url(${(props) => props.url}) center center / cover no-repeat;
`;

const StyledTextContainer = styled.div`
  padding: 2rem 2rem 0 2rem;
`;

const StyledTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: 200;
  color: var(--color-bg-main);
`;

const StyledText = styled.p`
  font-weight: 200;
  color: #ffffff;
  margin-top: -6px;
`;
const StyledBtn = styled.button`
  color: var(--color-text-main);
  background: #fff;
  font-weight: 200;
  font-size: 1.4rem;
  padding: 5px 10px;
  border-radius: 6px;
  margin-left: 2rem;
  margin-top: 3.5rem;
  border: none;
`;

function Card({ feature }) {
  return (
    <StyledCard url={feature.img}>
      <StyledTextContainer>
        <StyledTitle>{feature.title}</StyledTitle>
        <StyledText>{feature.eng}</StyledText>
      </StyledTextContainer>
      <StyledBtn>เพิ่มเติม</StyledBtn>
    </StyledCard>
  );
}

export default Card;
