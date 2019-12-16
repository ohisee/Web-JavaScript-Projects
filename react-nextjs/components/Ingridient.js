/**
 * @fileoverview Ingridient component
 */
import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border-bottom: 1px solid #008cff;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`;

const Ingridient = (props) => {
  return (
    <React.Fragment>
      <StyledDiv>
        <p>{props.text}</p>
        <p>{props.name}</p>
        <input type="text" onChange={props.changed} value={props.name} />
      </StyledDiv>
    </React.Fragment>
  );
};

export default Ingridient;
