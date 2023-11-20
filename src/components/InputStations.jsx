import styled from "styled-components";
import stations from "../data/dataStation";
import Station from "./Station";
import { useState } from "react";

const StyledLabel = styled.label`
  color: #4e4e4e;
  font-weight: 300;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 37px;
  border-radius: 4px;
  outline: none;
  border: 1px solid #e0e0e0;
  font-size: 14px;
  padding: 8px 10px;
  transition: 0.2s ease;
`;

const StyledStationLists = styled.ul`
  position: absolute;
  margin-top: 5px;
  background-color: #fff;
  width: 100%;
  box-shadow: 0px 1px 12px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  transition: height 1s ease;
  height: 25.5rem;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

function InputStations({ select }) {
  const [isShow, setIsShow] = useState(false);
  function handleShow() {
    setIsShow(!isShow);
  }
  return (
    <div key={select.id}>
      <StyledLabel htmlFor="">{select.route}</StyledLabel>
      <div>
        <StyledInput
          type="text"
          placeholder={select.placeholder}
          onClick={handleShow}
        />
        {isShow && (
          <StyledStationLists>
            {stations.map((station) => (
              <Station station={station} key={station.lineEN} />
            ))}
          </StyledStationLists>
        )}
      </div>
    </div>
  );
}

export default InputStations;
