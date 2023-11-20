import styled from "styled-components";
import StyledTitle from "./StyledTitle";

const StyledContainer = styled.section`
  width: 118rem;
  margin: 6rem auto 0;
  padding: 0 1.5rem;
  display: flex;
`;

const StyledTextContainer = styled.div`
  width: 50%;
`;

const StyledVisionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledVisionBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 3rem;
`;

const StyledTitileContainer = styled.div`
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

const StyledSubTitle = styled.h2`
  font-size: 1.8rem;
  line-height: 25px;
  color: var(--color-text-main);
  font-weight: 600;
`;

const StyledText = styled.p`
  font-size: 1.6rem;
  line-height: 23px;
  font-weight: 300;
`;

const StyledImg = styled.img`
  width: 49rem;
  margin: 0 3.8rem;
`;

function VisionEBM() {
  return (
    <StyledContainer>
      <StyledTextContainer>
        <StyledTitileContainer>
          <StyledTitle>รถไฟฟ้ามหานคร สายสีเหลือง</StyledTitle>
          <StyledLine></StyledLine>
        </StyledTitileContainer>

        <StyledVisionBox>
          <StyledVisionContainer>
            <StyledSubTitle>วิสัยทัศน์</StyledSubTitle>
            <StyledText>
              เป็นผู้นำในการให้บริการระบบรถไฟฟ้าขนส่งมวลชนที่ดีที่สุด
            </StyledText>
          </StyledVisionContainer>
          <StyledVisionContainer>
            <StyledSubTitle>ภารกิจ</StyledSubTitle>
            <StyledText>
              มุ่งพัฒนาระบบ การดำเนินการ และบุคลากร ตลอดจนการบริหาร
              ทรัพยากรอย่างมีประสิทธิภาพ
              เพื่อให้บริการระบบรถไฟฟ้าขนส่งมวลชนเป็นระบบที่ทันสมัย รวดเร็ว
              ปลอดภัย มีประสิทธิภาพ และเชื่อถือได้
              โดยให้ผลตอบแทนที่เหมาะสมแก่ผู้ที่เกี่ยวข้องและสังคม
            </StyledText>
          </StyledVisionContainer>
          <StyledVisionContainer>
            <StyledSubTitle>ค่านิยมร่วม</StyledSubTitle>
            <StyledText>
              ยึดมั่นในบรรษัทภิบาล เชื่อมั่นในบุคลากร
              มุ่งมั่นสู่ความเป็นเลิศในการให้บริการ
              สร้างความพึงพอใจสูงสุดแก่ผู้โดยสาร
            </StyledText>
          </StyledVisionContainer>
        </StyledVisionBox>
      </StyledTextContainer>
      <StyledImg src="caryl.png" alt="EBM" />
    </StyledContainer>
  );
}

export default VisionEBM;
