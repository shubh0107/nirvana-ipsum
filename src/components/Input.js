import styled from 'styled-components';


const Input = styled.input`
  -moz-appearance: textfield; 
  // border: 2px solid black;
  border: none;
  outline: none;
  height: 40px;
  font-size: 16px;
  text-align: center;
  padding: 0 8px;
  height: 40px;
  width: 50px;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
export default Input;