import styled from "styled-components";

const StyledContainer = styled.div`
  background: #444b4e;
  width: 100%;
`;

const StyledContentBox = styled.div`
  max-width: 118rem;
  margin: 0 auto;
  padding: 1.2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLeftBox = styled.div`
  display: flex;
  gap: 5px;
`;

const StyledImg = styled.img`
  width: 2rem;
  height: 2rem;
`;

const StyledText = styled.p`
  font-size: ${(props) => props.size};
  color: #fff;
  font-weight: ${(props) => props.weight};
`;

const StyledRightBox = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const StyledSelect = styled.select`
  cursor: pointer;
  width: 250px;
  height: 35px;
  background-color: #ffffff;
  border-radius: 4px;
  border: 1px solid white;
  padding: 0 6px;
  outline: none;
  font-size: 14px;
  font-weight: 200;
  color: #666666;
`;

const StyledOption = styled.option``;

function FooterStatic() {
  return (
    <StyledContainer>
      <StyledContentBox>
        <StyledLeftBox>
          <StyledImg src="passendger-char.png" alt="passedger-stat"></StyledImg>
          <StyledText size="1.5rem" weight="400">
            รายงานสถิติผู้โดยสารตั้งแต่ 03/06/2023 - 15/11/2023 จำนวน 7,122,556
            เที่ยวคน
          </StyledText>
        </StyledLeftBox>
        <StyledRightBox>
          <StyledText size="1.4rem" weight="200">
            ค้นหาเมนูเว็บไซต์
          </StyledText>
          <StyledSelect>
            <StyledOption disabled>เลือกเมนู</StyledOption>
            <optgroup label="เกี่ยวกับเรา">
              <StyledOption>ประวัตความเป็นมา</StyledOption>
              <StyledOption>วิสัยทัศน์ ภารกิจ และค่านิยม</StyledOption>
              <StyledOption>คณะกรรมการบริษัท</StyledOption>
              <StyledOption>ความรับผิดชอบต่อสังคม</StyledOption>
            </optgroup>
            <optgroup label="ข้อมูลบัตรโดยสาร">
              <StyledOption>บัตรโดยสารเที่ยวเดียว</StyledOption>
              <StyledOption>เส้นทางและอัตราค่าโดยสาร</StyledOption>
            </optgroup>
            <optgroup label="บัตรแรบบิท">
              <StyledOption>บัตรแรบบิท</StyledOption>
              <StyledOption>ข้อมูลการซื้อบัตรโดยสาร/การเติมเที่ยว</StyledOption>
              <StyledOption>วิธีใช้บัตรผ่านประตูอัตโนมัติ</StyledOption>
            </optgroup>
            <optgroup label="บัตร EMV Contactless">
              <StyledOption>การใช้บัตร EMV</StyledOption>
              <StyledOption>ประกาศเงื่อนไขการใช้ EMV</StyledOption>
            </optgroup>
            <optgroup label="เงื่อนไขการออกบัตร">
              <StyledOption>ประกาศเงื่อนไขการใช้ EMV</StyledOption>
              <StyledOption>
                ประกาศเงื่อนไขการใช้สิทธิ์สวัสดิการแห่งรัฐ
              </StyledOption>
            </optgroup>
            <optgroup label="ข้อมูลการใข้บริการ">
              <StyledOption>เส้นทางและอัตราค่าโดยสาร</StyledOption>
              <StyledOption>แผนที่บริเวณสถานี</StyledOption>
              <StyledOption>เวลาและความถี่การเดินรถ</StyledOption>
              <StyledOption>ที่จอดรถ</StyledOption>
              <StyledOption>
                วิธีการแจ้งทรัพย์สินสูญหาย พบทรัพย์สิน หรือรับคืนทรัพย์สิน
              </StyledOption>
              <StyledOption>
                ประกาศและระเบียบข้อบังคับในการใช้บริการ
              </StyledOption>
            </optgroup>
            <optgroup label="ธุรกิจและพาณิชย์">
              <StyledOption>ข้อมูล/ติดต่อสอบถาม</StyledOption>
              <StyledOption>บัตรแรบบิทประเภทต่างๆ</StyledOption>
              <StyledOption>โปรโมชั่นบัตรแรบบิท</StyledOption>
              <StyledOption>
                ร้านค้า/บริการ ที่สามารถใช้แรบบิทและจุดเติมเงิน
              </StyledOption>
              <StyledOption>My Rabbit</StyledOption>
            </optgroup>
            <optgroup label="E-Library">
              <StyledOption>ระบบโครงสร้างและสถานี</StyledOption>
              <StyledOption>ระบบรถไฟฟ้า</StyledOption>
              <StyledOption>ระบบอาณัติสัญญาณ</StyledOption>
              <StyledOption>ระบบซ่อมบำรุง</StyledOption>
              <StyledOption>ระบบบัตรโดยสาร</StyledOption>
              <StyledOption>ระบบความปลอดภัย</StyledOption>
              <StyledOption>ระบบรักษาความปลอดภัย</StyledOption>
              <StyledOption>รายงานประจำปี</StyledOption>
            </optgroup>
            <optgroup label="ข้อแนะนำเพื่อความปลอดภัย">
              <StyledOption>ข้อแนะนำในการใช้ประตูอัตโนมัติ</StyledOption>
              <StyledOption>
                ข้อแนะนำในการใช้บันได บันไดเลื่อและลิฟต์
              </StyledOption>
              <StyledOption>
                ข้อแนะนำในการนำจักรยานเข้าระบบรถไฟฟ้ามหานคร สายสีเหลือง/ชมพู
              </StyledOption>
              <StyledOption>
                ข้อแนะนำและข้อห้ามเมื่ออยู่ในระบบรถไฟฟ้ามหานคร สายสีเหลือง/ชมพู
              </StyledOption>
              <StyledOption>
                ข้อแนะนำเมื่อเกิดเพลิงไหม้ หรือเหตุฉุกเฉิน
              </StyledOption>
            </optgroup>
            <optgroup label="นโยบายการคุ้มครองข้อมูลส่วนบุคคล">
              <StyledOption>สำหรับลูกค้า</StyledOption>
              <StyledOption>สำหรับการใช้คุ๊กกี้</StyledOption>
              <StyledOption>สำหรับลานจอดรถยนต์</StyledOption>
            </optgroup>
            <optgroup label="อื่นๆ">
              <StyledOption>ข่าวสารและกิจกกรรม</StyledOption>
              <StyledOption>โปรโมชั่น</StyledOption>
              <StyledOption>คำถามที่พบบ่อย</StyledOption>
              <StyledOption>ติดต่อเรา</StyledOption>
              <StyledOption>ร่วมงานกับเรา</StyledOption>
            </optgroup>
          </StyledSelect>
        </StyledRightBox>
      </StyledContentBox>
    </StyledContainer>
  );
}

export default FooterStatic;
