import React, { useState } from 'react'
import styled from 'styled-components';

import { generateText } from '../api';
import { Button, Input, Select } from '../components';

import NirvanaLogo from '../assets/images/NirvanaLogo.svg';
import Copy from '../assets/images/Copy.svg';

import copy from 'copy-to-clipboard';

const Container = styled.div`
  box-sizing: border-box;
  background: black;
  height: 100%;
  width: 100%;
  border: 8px solid yellow;
`
const Content = styled.div`
  max-width: 600px;
  color: yellow;
  margin: 0 auto;

  @media only screen and (max-width: 650px) {
    padding: 0 16px;
  }
`
const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px 0 8px 0;
  font-family: 'Oswald';

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`
const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  *:not(:first-child) {
    margin-left: 8px;
    margin-top: 8px;
  }

  @media only screen and (max-width: 480px) {
    flex-direction: column;

    #copy {
      margin-top: 8px;
      margin-left: auto;
      margin-right: 6px;
    }
  }
`
const Result = styled.div`
  max-height: 70vh;
  overflow-y: auto;
  align-items: center;
  max-width: 600px;
  margin: 24px auto;
  font-family: 'Oswald';
  font-size: 20px;

  p:first-of-type {
    margin-top: 0;
  }
  
  ::-webkit-scrollbar {
    width: 3px;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
  }
   
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: yellow; 
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: yellow; 
  }

  @media only screen and (max-width: 480px) {
    max-height: 39vh;
  }
`


const Nirvana = props => {

  const [count, setCount] = useState(1);
  const [ipsumType, setIpsumType] = useState('paragraphs');
  const [result, setResult] = useState(null);


  const generate = () => {
    if (count < 999) {
      const result = generateText(ipsumType, count);
      setResult(result);
    } else {
      setCount(999);
      const result = generateText(ipsumType, count);
      setResult(result);
    }
  }


  const handleCopy = () => {
    if (result) {
      copy(result);
    }
  }


  return (
    <Container>

      <Content>

        <Header>
          <img src={NirvanaLogo} alt="Nirvana" />
          <h1>Ipsum</h1>
        </Header>
        <Controls>
          <div>
            <Input type="number" min="1" id="count" name="count" value={count} onChange={e => setCount(e.target.value)} />
            <Select id="ipsumType" name="ipsumType" onChange={e => setIpsumType(e.target.value)}>
              <option value="paragraphs">Paragraphs</option>
              <option value="sentences">Sentences</option>
              <option value="words">Words</option>
            </Select>
            <Button id="generate" onClick={e => generate()}>Generate</Button>
          </div>
          <Button id="copy" onClick={e => handleCopy()}>
            Copy
            <img src={Copy} alt="Copy" />
          </Button>
        </Controls>

        {result &&
          <Result>
            {
              result.split('\n').map((item, index) => <p key={index}>{item}</p>)
            }
          </Result>
        }
      </Content>


    </Container>
  )



}


export default Nirvana;