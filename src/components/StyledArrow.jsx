import styled, { css } from "styled-components";

const StyledArrow = styled.img`
  width: 5rem;
  height: 5rem;
  position: absolute;
  top: ${(props) => props.top};
  transform: ${(props) => props.transform};
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;

  ${(props) =>
    props.type === "left" &&
    css`
      left: ${(props) => props.left};
    `}
  ${(props) =>
    props.type === "right" &&
    css`
      right: ${(props) => props.right};
    `}
`;

export default StyledArrow;
