import styled from "styled-components";
import SocialBox from "./SocialBox";

const StyledContainer = styled.section`
  max-width: 118rem;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`;

const StyledImg = styled.img`
  width: 100%;
`;

const StyledContactBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3.4rem 0 6rem 0;
  align-items: center;
`;

const StyledContactLeft = styled.div`
  width: 46rem;
`;

const StyledTitle = styled.h1`
  font-size: 3.2rem;
  line-height: 1.3;
  font-weight: 400;
  position: relative;
`;

const StyledLine = styled.div`
  width: 45%;
  height: 0.4rem;
  border-radius: 50px;
  background-color: var(--color-bg-main);
  margin-top: 5px;
  position: absolute;
  left: 5%;
`;

const StyledLeftBelow = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const StyledSubTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
`;

const StyledText = styled.p`
  font-weight: 300;
`;

const StyledContactRight = styled.div`
  display: flex;
`;

function ContactUs() {
  const socials = [
    {
      img: "fb.jpg",
      imgHover: "fbHover.png",
      text: "รถไฟฟ้ามหานคร สายสีเหลือง",
      id: "01",
    },
    {
      img: "line.png",
      imgHover: "lineHover.jpg",
      text: "Pinkyellowline",
      id: "02",
    },
    {
      img: "yt.jpg",
      imgHover: "ytHover.png",
      text: "YellowLineoffcial",
      id: "03",
    },
    {
      img: "tw.jpg",
      imgHover: "twHover.png",
      text: "@YellowLine_ebm",
      id: "04",
    },
  ];
  return (
    <StyledContainer>
      <StyledImg src="image-footer.jpg" alt="image-footer" />
      <StyledContactBox>
        <StyledContactLeft>
          <StyledTitle>
            ติดต่อสอบถาม
            <br />
            และติดตามข่าวสาร
            <StyledLine />
          </StyledTitle>
          <StyledLeftBelow>
            <StyledSubTitle>ศูนย์ลูกค้าสัมพันธ์</StyledSubTitle>
            <StyledText>
              ติดต่อ 0 2617 6111 ทุกวันเวลา : 06.00 - 24.00 น.
            </StyledText>
          </StyledLeftBelow>
        </StyledContactLeft>
        <StyledContactRight>
          {socials.map((social) => (
            <SocialBox social={social} key={social.id} />
          ))}
        </StyledContactRight>
      </StyledContactBox>
    </StyledContainer>
  );
}

export default ContactUs;
