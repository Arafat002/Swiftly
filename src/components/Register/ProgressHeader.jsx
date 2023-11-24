import React from "react";
import styled from "styled-components";

function ProgressHeader({ currentLocation }) {
  return (
    <Root>
      <Holder>
        <Box className={currentLocation >= 1 ? "active" : null}></Box>
        <Box className={currentLocation >= 2 ? "active" : null}></Box>
        <Box className={currentLocation >= 3 ? "active" : null}></Box>
      </Holder>
    </Root>
  );
}
const Root = styled.div`
  position: relative;
  width: 100&;
  height: 50px;
  display: grid;
  place-content: center;
  margin: 20px 0px 60px 0px;
  .active {
    background-color: #330ba6;
  }
`;
const Holder = styled.div`
  width: 600px;
  height: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 5px;
`;
const Box = styled.div`
  position: relative;
  height: 5px;
  width: 33%;
  background-color: #ececec;
`;

export default ProgressHeader;
