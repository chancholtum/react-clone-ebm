import styled from "styled-components";

const StyledContainer = styled.div`
  background: #2e383c;
  width: 100%;
`;

const StyledContentBox = styled.div`
  max-width: 118rem;
  margin: 0 auto;
  padding: 2.6rem 1.5rem;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const StyledLeftBox = styled.div``;

const StyledTitle = styled.h3`
  color: #fff;
  font-size: 1.6rem;
  font-weight: 400;
`;

const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: 240px 120px;
  gap: 6px;
  margin-top: 10px;
`;

const StyleLi = styled.li`
  color: white;
  font-size: 14px;
  font-weight: 200;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: var(--color-bg-main);
  }
`;

const StyledRightBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  right: -3rem;
`;

const StyledAppBox = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const StyledImg = styled.img`
  max-width: ${(props) => props.w};
`;

const StyledStoreBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

function FooterApp() {
  return (
    <StyledContainer>
      <StyledContentBox>
        <StyledLeftBox>
          <StyledTitle>รถไฟฟ้ามหานคร สายสีเหลือง ลาดพร้าว - สำโรง</StyledTitle>
          <StyledUl>
            <StyleLi>เกี่ยวกับเรา</StyleLi>
            <StyleLi>รถไฟฟ้าที่เกี่ยวข้อง</StyleLi>
            <StyleLi>ข้อมูลบัตรโดยสาร</StyleLi>
            <StyleLi>โปรโมชั่น</StyleLi>
            <StyleLi>การเติมเงินบัตรแรบบิท</StyleLi>
            <StyleLi>ติดต่อเรา</StyleLi>
            <StyleLi>เส้นทางและอัตรค่าโดยสาร</StyleLi>
            <StyleLi>Sitemap</StyleLi>
          </StyledUl>
        </StyledLeftBox>
        <StyledRightBox>
          <StyledTitle>ดาวน์โหลดแอปพลิเคชั่น THE SKYTRAINs ได้ที่</StyledTitle>
          <StyledAppBox>
            <StyledImg src="app.png" alt="app" w="8.9rem" />
            <StyledImg src="qr.jpg" alt="qr" w="8.5rem" />
            <StyledStoreBox>
              <StyledImg src="appstore-icon.png" alt="app-icon" w="13rem" />
              <StyledImg
                src="googleplay-icon.png"
                alt="googleplay-icon"
                w="13rem"
              />
            </StyledStoreBox>
          </StyledAppBox>
        </StyledRightBox>
      </StyledContentBox>
    </StyledContainer>
  );
}

export default FooterApp;
