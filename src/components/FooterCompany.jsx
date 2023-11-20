import styled from "styled-components";

const StyledContainer = styled.div`
  background: #fad53d;
  width: 100%;
`;

const StyledContentBox = styled.div`
  max-width: 118rem;
  margin: 0 auto;
  padding: 1.8rem 1.5rem;
`;

const StyledTopBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 2rem 2rem;
  border-bottom: 1px solid #e0bf34;
`;

const StyledLeftBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const StyledText = styled.p`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
`;

const StyledRightBox = styled.div`
  text-align: end;
`;
const StyledBelowBox = styled.div`
  text-align: center;
  padding: 2rem 0 0 0;
`;

function FooterCompany() {
  return (
    <StyledContainer>
      <StyledContentBox>
        <StyledTopBox>
          <StyledLeftBox>
            <StyledText size="1.6rem">
              บริษัท อีสเทิร์น บางกอกโมโนเรล จำกัด
            </StyledText>
            <StyledText size="1.4rem" weight="200">
              เลขที่21 ซอยเฉยพ่วง ถนนวิภาวดี-รังสิต แขวงจอมพล เขตจตุจักร
              กรุงเทพมหานคร 10900 ประเทศไทย
            </StyledText>
            <StyledText size="1.4rem" weight="200">
              เบอร์ติดต่อ: 0 2617 6111
            </StyledText>
          </StyledLeftBox>
          <StyledRightBox>
            <StyledText size="1.4rem" weight="400">
              เว็บไซต์นี้แสดงผลได้ดีใน Chrome(43) : Safari(9) : Firefox(16)
            </StyledText>
            <StyledText size="1.4rem" weight="400">
              รองรับระบบสำหรับผู้พิการทางสายตา
            </StyledText>
          </StyledRightBox>
        </StyledTopBox>
        <StyledBelowBox>
          <StyledText size="1.4rem" weight="200">
            ขอสงวนสิทธิ์ 2566 บริษัท อีสเทิร์น บางกอกโมโนเรล จำกัด
          </StyledText>
        </StyledBelowBox>
      </StyledContentBox>
    </StyledContainer>
  );
}

export default FooterCompany;
