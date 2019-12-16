/**
 * @fileoverview Index page
 */
import React, { useState } from "react";
import Link from "next/link";
import Router from "next/router";
import Ingridient from "../components/Ingridient";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${props => props.diffColor ? 'red' : 'green'};
  padding: 8px;
  font-family: inherit;
  color: white;

  &:hover {
    background-color: lightgreen;
  }
`;

const IndexPage = (props) => {

  const [name, setName] = useState('');
  const [title, setTitle] = useState('');

  const nameChangedHandler = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  let altColor = false;

  return (
    <div>
      <h3>Index Main Page of {props.appName}</h3>
      <p>Go to <Link href="/auth"><a>Auth</a></Link></p>
      <button onClick={() => Router.push("/auth")}>Go to Auth</button>
      <Ingridient
        text="Hello world inside styled component"
        name={name}
        changed={nameChangedHandler}>
      </Ingridient>
      <StyledButton diffColor={altColor}>Hello</StyledButton>
      <p>{title}</p>
      <input value={title} onChange={(event) => setTitle(event.target.value)} />
    </div>
  )
};

IndexPage.getInitialProps = async (context) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ appName: 'Main Nextjs App' });
    }, 1000);
  });
  return await promise;
};

export default IndexPage;
