import { useState } from "react";
import styled from "styled-components";

const StyledStationLine = styled.li`
  border-bottom: 1px solid #f2f2f2;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledDropBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5.1rem;
  padding: 0.8rem 1rem;
  cursor: pointer;
`;

const StyledStationLeftBox = styled.div`
  height: 5.1rem;
  display: flex;
  align-items: center;
`;

const StyledPole = styled.div`
  background-color: ${(props) => props.bg};
  height: 70%;
  width: 3px;
  border-radius: 100px;
  margin-right: 6px;
`;

const StyledStationNameBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledText = styled.p`
  font-size: ${(props) => props.text};
`;

const StyledArrow = styled.img`
  width: 1rem;
  height: auto;
`;

const StyledStationBox = styled.ul`
  height: 20.4rem;
`;

const StyledStation = styled.li`
  display: flex;
  gap: 5px;
  font-size: 1.2rem;
  padding: 0.8rem 1rem 0.8rem 1.5rem;
  cursor: pointer;

  &:hover {
    background: #efefef;
  }
`;

const StyledCircleNumber = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 100px;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${(props) => props.color};
`;
function Station({ station }) {
  const [isShow, setIsShow] = useState(false);

  function handleShow() {
    setIsShow(!isShow);
  }

  return (
    <>
      <StyledStationLine onClick={handleShow}>
        <StyledDropBox>
          <StyledStationLeftBox>
            <StyledPole bg={station.color} />
            <StyledStationNameBox>
              <StyledText text="1.4rem">{station.lineTH}</StyledText>
              <StyledText text="1.2rem">{station.lineEN}</StyledText>
            </StyledStationNameBox>
          </StyledStationLeftBox>
          <StyledArrow
            src="arrow-down.png"
            alt="arrow-down"
            onClick={handleShow}
          />
        </StyledDropBox>
        {isShow && (
          <StyledStationBox>
            {station.station.map((stt) => (
              <StyledStation>
                <StyledCircleNumber color={station.color}>
                  {stt.number}
                </StyledCircleNumber>
                <p>{stt.name}</p>
              </StyledStation>
            ))}
          </StyledStationBox>
        )}
      </StyledStationLine>
    </>
  );
}

export default Station;
