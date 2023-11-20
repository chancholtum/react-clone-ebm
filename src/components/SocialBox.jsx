import styled from "styled-components";

const StyledSocialBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.6rem;
  width: 19rem;
  position: relative;
`;

const StyledSocialImg = styled.img`
  max-width: 6rem;
  cursor: pointer;
  z-index: 99;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0;
  }
`;
const StyledSocialImgColor = styled.img`
  max-width: 6rem;
  cursor: pointer;
  position: absolute;
`;

const StyledSocialText = styled.p`
  color: var(--color-text-sub);
`;

function SocialBox({ social }) {
  return (
    <StyledSocialBox>
      <StyledSocialImg src={social.img}></StyledSocialImg>
      <StyledSocialImgColor src={social.imgHover}></StyledSocialImgColor>
      <StyledSocialText>{social.text}</StyledSocialText>
    </StyledSocialBox>
  );
}

export default SocialBox;
