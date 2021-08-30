import React from "react";
import styled from "styled-components";

const LoaderContainer = styled.div`
  height: 100%;
  display: flex;

  > svg {
    margin: auto;
  }
`;

function Loader() {
  return (
    <LoaderContainer>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 100 100">
        <circle fill="rgb(255, 99, 132)" stroke="none" cx="30" cy="50" r="6">
          <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite"
            begin="0.1"
          />
        </circle>
        <circle fill="rgb(255, 99, 132)" stroke="none" cx="50" cy="50" r="6">
          <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite"
            begin="0.2"
          />
        </circle>
        <circle fill="rgb(255, 99, 132)" stroke="none" cx="70" cy="50" r="6">
          <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite"
            begin="0.3"
          />
        </circle>
      </svg>
    </LoaderContainer>
  );
}

export default Loader;
