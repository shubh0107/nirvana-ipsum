import React, { useState } from 'react'
import styled from 'styled-components';
import copy from 'copy-to-clipboard';

import NirvanaLogo from '../assets/images/NirvanaLogo.svg';
import Copy from '../assets/images/Copy.svg';
import { generateText } from '../api';
import { Button, Input, Select } from '../components';
import { track } from '../utils';

const Container = styled.div`
  box-sizing: border-box;
  background: black;
  height: 98%;
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

    h1 {
      margin: 12px 0;
    }
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

  #left-controls {
    display: flex;
    justify-content: space-between; 
  }

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    align-items: unset;

    #left-controls {
      display: flex;
      justify-content: space-between; 
      width: 100%;
      input, select {
        margin-right: auto;
      }

      #generate {
        margin-left: auto;
      }
    }

    #copy {
      margin-top: 8px;
      margin-right: 0;
      margin-left: auto;
      padding: 0 19px;
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
    track("Generate text", {
      value: {
        type: ipsumType,
        count
      }
    });
    if (count < 999) {
      const result = generateText(ipsumType, count);
      setResult(result);
    } else {
      setCount(999);
      const result = generateText(ipsumType, count);
      setResult(result);
    }
  }

  const handleTypeChange = type => {
    track("Change type", { value: type });
    setIpsumType(type);
  }

  const handleCopy = () => {
    if (result) {
      copy(result);
      track("Copy to clipboard", { value: result });
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
          <div id="left-controls">
            <div>
              <Input type="number" min="1" id="count" name="count" value={count} onChange={e => setCount(e.target.value)} />
              <Select id="ipsumType" name="ipsumType" onChange={e => handleTypeChange(e.target.value)}>
                <option value="paragraphs">{count > 1 ? 'Paragraphs' : 'Paragraph'}</option>
                <option value="sentences">{count > 1 ? 'Sentences' : 'Sentence'}</option>
                <option value="words">{count > 1 ? 'Words' : 'Word'}</option>
              </Select>
            </div>
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