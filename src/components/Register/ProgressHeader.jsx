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
  margin-bottom: 50px;
  .active {
    background-color: blue;
  }
`;
const Holder = styled.div`
  width: 800px;
  height: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 5px;
`;
const Box = styled.div`
  position: relative;
  height: 4px;
  width: 33%;
  border-radius: 20px;
  background-color: grey;
`;

export default ProgressHeader;
