import styled from "styled-components";

const StyledMenu = styled.div`
  width: 100%;
  background: white;
  display: flex;
  height: 8rem;
  align-items: center;
  padding: 1rem;
  gap: 0.5rem;
  border-radius: 10px;
`;

const StyledImg = styled.img`
  width: 6rem;
  height: 6rem;
`;

const StyledText = styled.p`
  font-size: 1.4rem;
  font-weight: 300;
  color: var(--color-text-sub);
`;

function Menus({ menu }) {
  return (
    <StyledMenu key={menu.id}>
      <StyledImg src={menu.img} alt={menu.text} />
      <StyledText>{menu.text}</StyledText>
    </StyledMenu>
  );
}

export default Menus;
