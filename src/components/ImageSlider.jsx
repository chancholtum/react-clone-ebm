import Slider from "react-slick";
import styled from "styled-components";
import StyledArrow from "./StyledArrow";

const StyledContainer = styled.div`
  width: 100%;
`;

const StyledSlider = styled.div`
  height: 75rem;
  position: relative;
`;

const StyledSlide = styled.img`
  width: 100%;
`;

const StyledDotsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledDot = styled.div`
  width: 1rem;
  height: 1rem;
  background: #808080;
  border-radius: 50%;
  margin: 0 0.3rem;
  cursor: pointer;
  font-size: 2rem;
`;

function ImageSlider() {
  const slides = [
    { url: "slide01.jpg", slideIndex: "01" },
    { url: "slide02.png", slideIndex: "02" },
    { url: "slide03.png", slideIndex: "03" },
    { url: "slide04.png", slideIndex: "04" },
    { url: "slide05.jpg", slideIndex: "05" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    appendDots: (dots) => <StyledDotsContainer>{dots}</StyledDotsContainer>,
    customPaging: () => <StyledDot />,
    nextArrow: (
      <StyledArrow
        top="70%"
        transform="translate(0, -50%)"
        right="120px"
        type="right"
        src="next.png"
        alt="next-btn"
      />
    ),
    prevArrow: (
      <StyledArrow
        top="70%"
        transform="translate(0, -50%)"
        left="120px"
        type="left"
        src="prev.png"
        alt="prev-btn"
      />
    ),
  };

  return (
    <StyledContainer>
      <StyledSlider>
        <Slider {...settings}>
          {slides.map((slide) => (
            <StyledSlide src={slide.url} alt={slide.alt} />
          ))}
        </Slider>
      </StyledSlider>
    </StyledContainer>
  );
}

export default ImageSlider;
