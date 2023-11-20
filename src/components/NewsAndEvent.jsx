import styled from "styled-components";
import StyledTitle from "./StyledTitle";
import StyledArrow from "./StyledArrow";
import Events from "./Events";
import Slider from "react-slick";
import events from "../data/dataEvents";

const StyledContainer = styled.section`
  width: 118rem;
  margin: 4.5rem auto 0;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLine = styled.div`
  width: 15%;
  height: 0.4rem;
  border-radius: 50px;
  background-color: var(--color-bg-main);
  margin-top: 5px;
`;

const StyledCardContainer = styled.div`
  width: 100%;
  margin-top: 4rem;
  gap: 1.1rem;
  position: relative;
`;

const StyledSeeMore = styled.button`
  background: transparent;
  border: none;
  color: var(--color-text-sub);
  margin-top: 3.4rem;
`;

const StyledIcon = styled.img`
  width: 0.7rem;
  height: 0.7rem;
`;

function NewsAndEvent() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: (
      <StyledArrow
        top="50%"
        transform="translate(0, -50%)"
        right="-35px"
        type="right"
        src="next.png"
        alt="next-btn"
      />
    ),
    prevArrow: (
      <StyledArrow
        top="50%"
        transform="translate(0, -50%)"
        left="-35px"
        type="left"
        src="prev.png"
        alt="prev-btn"
      />
    ),
  };

  return (
    <StyledContainer>
      <StyledTitle>ข่าวสารและกิจกรรม</StyledTitle>
      <StyledLine />
      <StyledCardContainer>
        <Slider {...settings}>
          {events.map((event) => (
            <Events event={event} key={event.id} />
          ))}
        </Slider>
      </StyledCardContainer>
      <StyledSeeMore>
        ดูเพิ่มเติม <StyledIcon src="Vector.png" alt="vector" />
      </StyledSeeMore>
    </StyledContainer>
  );
}

export default NewsAndEvent;
