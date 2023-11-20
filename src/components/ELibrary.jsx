import styled from "styled-components";
import StyledTitle from "./StyledTitle";
import Card from "./Card";
import StyledArrow from "./StyledArrow";
import features from "../data/dataFeature";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const StyledBgColor = styled.section`
  background: #fad53d;
  z-index: -1;
`;

const StyledBg = styled.div`
  background-image: url("elib.png");
  width: 100%;
  height: 36.1rem;
  background-size: cover;
`;

const StyledContainer = styled.div`
  max-width: 118rem;
  margin: 2rem auto 0;
  padding: 2rem 1.5rem;
  flex-direction: column;
  align-items: center;
  display: flex;
`;

const StyledLine = styled.div`
  width: 8%;
  height: 0.4rem;
  border-radius: 50px;
  background-color: var(--color-text-main);
  margin-top: 5px;
`;

const StyledCardContainer = styled.div`
  width: 100%;
  gap: 1rem;
  margin-top: 3rem;
  position: relative;
`;

const StyledSeeMore = styled.button`
  background: transparent;
  border: none;
  color: var(--color-text-sub);
  margin-top: 4.4rem;
`;

const StyledIcon = styled.img`
  width: 0.7rem;
  height: 0.7rem;
`;

function ELibrary() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
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
    <StyledBgColor>
      <StyledBg>
        <StyledContainer>
          <StyledTitle color="#2e383c">E-Library</StyledTitle>
          <StyledLine />
          <StyledCardContainer>
            <Slider {...settings}>
              {features.map((feature) => (
                <Card feature={feature} key={feature.id} />
              ))}
            </Slider>
          </StyledCardContainer>

          <StyledSeeMore>
            ดูเพิ่มเติม <StyledIcon src="Vector.png" alt="vector" />
          </StyledSeeMore>
        </StyledContainer>
      </StyledBg>
    </StyledBgColor>
  );
}

export default ELibrary;
