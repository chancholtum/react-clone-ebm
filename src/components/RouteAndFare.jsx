import styled from "styled-components";
import StyledTitle from "./StyledTitle";
import Menus from "./Menus";
import Stations from "./Stations";

const StyledBackground = styled.section`
  background-image: url(routemap.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const StyledContainer = styled.section`
  width: 118rem;
  margin: 6rem auto 0;
  padding: 0 1.5rem;
  display: flex;
`;

const StyledLeftBox = styled.div`
  margin: 4rem 0;
`;

const StyledTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const StyledLine = styled.div`
  width: 40%;
  height: 0.4rem;
  border-radius: 50px;
  background-color: var(--color-bg-main);
`;

const StyledRightBox = styled.div`
  width: 100%;
  height: 8rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  gap: 1.6rem;
  margin-top: 10rem;
  padding: 2rem;
`;

function RouteAndFare() {
  const menus = [
    { img: "bt1.png", text: "เส้นทางและอัตราค่าโดยสาร", id: "01" },
    { img: "bt2.png", text: "แผนที่บริเวณสถานี", id: "02" },
    { img: "bt3.png", text: "เวลาและความถี่การเดินทาง", id: "03" },
    { img: "bt4.png", text: "ทรัพย์สินสุญหาย", id: "04" },
    { img: "bt5.png", text: "ที่จอดรถ", id: "05" },
  ];
  return (
    <StyledBackground>
      <StyledContainer>
        <StyledLeftBox>
          <StyledTitleBox>
            <StyledTitle color="white">เส้นทางและอัตราค่าโดยสาร</StyledTitle>
            <StyledLine />
          </StyledTitleBox>
          <Stations />
        </StyledLeftBox>
        <StyledRightBox>
          {menus.map((menu) => (
            <Menus menu={menu} key={menu.id} />
          ))}
        </StyledRightBox>
      </StyledContainer>
    </StyledBackground>
  );
}

export default RouteAndFare;
