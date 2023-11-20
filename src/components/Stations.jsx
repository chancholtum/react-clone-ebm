import styled from "styled-components";

import { useState } from "react";
import InputStations from "./InputStations";

const StyledFormBox = styled.div`
  width: 53.5rem;
  background: var(--color-bg-main);
  padding: 2.4rem;
  margin: 3rem 2rem 2.8rem;
  border-radius: 10px;
`;

const StyledSubTitle = styled.div`
  font-size: 1.8rem;
`;

const StyledForm = styled.div`
  margin-top: 1rem;
  position: relative;
`;

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

const StyledButton = styled.button`
  background: #2e383c;
  padding: 4px;
  color: white;
  width: 100%;
  margin-top: 20px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

function Stations() {
  const selectStation = [
    { route: "ต้นทาง", placeholder: "เลือกสถานีต้นทาง", id: "01" },
    { route: "ปลายทาง", placeholder: "เลือกสถานีปลายทาง", id: "02" },
  ];

  return (
    <StyledFormBox>
      <StyledSubTitle>ค้นหาสถานีและสถานที่</StyledSubTitle>
      <StyledForm action="">
        {selectStation.map((select) => (
          <InputStations select={select} />
        ))}
        <StyledButton>เส้นทาง</StyledButton>
      </StyledForm>
    </StyledFormBox>
  );
}

export default Stations;
