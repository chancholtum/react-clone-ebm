import { useParams } from "react-router-dom";
import styled, { css } from "styled-components";
import events from "../data/dataEvents";

const StyledContainer = styled.div`
  width: 100%;
  margin-top: 1.5rem;
  margin-bottom: 4rem;
  background: #ffffff;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  overflow: hidden;
`;

const StyledImg = styled.img`
  width: 100%;

  ${(props) =>
    props.type === "content" &&
    css`
      width: 50%;
      margin: 0 auto;
    `}
`;

const StyledTextBox = styled.div`
  padding: 2rem 4rem 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StyledShareBox = styled.div`
  display: flex;
  gap: 5px;
  justify-content: end;
  align-items: center;
`;

const StyledIcon = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  cursor: pointer;

  ${(props) =>
    props.type === "icon" &&
    css`
      width: 3rem;
      height: 3rem;
    `}
`;

const StyledIconBox = styled.div`
  display: flex;
  gap: 5px;
`;

const StyledText = styled.p`
  font-size: 1.5rem;
  font-weight: 300;

  ${(props) =>
    props.type === "share" &&
    css`
      font-size: 1.5rem;
      font-weight: 300;
    `}

  ${(props) =>
    props.type === "date" &&
    css`
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 1.3;
    `}
  ${(props) =>
    props.type === "title" &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}
  ${(props) =>
    props.type === "text" &&
    css`
      font-size: 1.6rem;
      text-indent: 3rem;
      font-weight: 400;
    `}
`;

const StyledTitleBox = styled.div`
  display: flex;
  gap: 5rem;
`;

const StyledTitleLeftBox = styled.div``;

const StyledTitleRightBox = styled.div`
  padding-left: 20px;
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  color: #3f3f3f;
  border-left: 3px solid var(--color-bg-main);
`;

const StyledContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.1rem;
`;

const StyledImgBox = styled.div`
  display: flex;
`;

function CardEvent() {
  const { newsId } = useParams();
  const currentEvent = events.find((event) => event.id === newsId);

  return (
    <StyledContainer>
      <StyledImg src={currentEvent.img} />
      <StyledTextBox>
        <StyledShareBox>
          <StyledIcon src="share.png" width="2rem" height="2rem" alt="share" />
          <StyledText type="share">แชร์ :</StyledText>
          <StyledIconBox>
            <StyledIcon type="icon" src="fbHover.png" alt="fbHover" />
            <StyledIcon type="icon" src="twHover.png" alt="twHover" />
            <StyledIcon type="icon" src="lineHover.jpg" alt="lineHover" />
          </StyledIconBox>
        </StyledShareBox>
        <StyledTitleBox>
          <StyledTitleLeftBox>
            <StyledText type="date">
              08 สิงหาคม <br />
              2566
            </StyledText>
          </StyledTitleLeftBox>
          <StyledTitleRightBox>
            <StyledText type="title">{currentEvent.title}</StyledText>
          </StyledTitleRightBox>
        </StyledTitleBox>
        <StyledContentBox>
          <StyledText type="text">{currentEvent?.content1}</StyledText>
          <StyledImgBox>
            <StyledImg
              src={currentEvent?.imgContent1}
              type="content"
            ></StyledImg>
            <StyledImg
              src={currentEvent?.imgContent2}
              type="content"
            ></StyledImg>
          </StyledImgBox>
          <StyledText type="text">{currentEvent?.content2}</StyledText>
          <StyledImgBox>
            <StyledImg
              src={currentEvent?.imgContent3}
              type="content"
            ></StyledImg>
            <StyledImg
              src={currentEvent?.imgContent4}
              type="content"
            ></StyledImg>
          </StyledImgBox>
          <StyledText type="text">{currentEvent?.content3} </StyledText>
          <StyledImgBox>
            <StyledImg
              src={currentEvent?.imgContent5}
              type="content"
            ></StyledImg>
          </StyledImgBox>
          <StyledText type="text">{currentEvent?.content4}</StyledText>
          <StyledText type="text">{currentEvent?.content5}</StyledText>
        </StyledContentBox>
      </StyledTextBox>
    </StyledContainer>
  );
}

export default CardEvent;
