import React from 'react';
import { ReactComponent as NotFound } from '../assets/images/404.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  // height: 100%;
  display: grid;
  place-items: center;

  svg {
    height: 700px;
    width: 700px;
  }

  @media only screen and (max-width: 480px) {
    svg {
      height: 300px;
      width: 300px;
    }
  }
`

const StyledText = styled.div`
  font-size: 24px;
  margin: 0 16px;

  @media only screen and (max-width: 480px) {
    font-size: 16px;
  }
`

const PageNotFound = props => {
  return (
    <Container>
      {/* <div> */}
      <NotFound />
      {/* </div> */}
      <StyledText>
        Nothing to look here, {' '}
        <Link to="/">
          go to home page
        </Link>
        .
        </StyledText>
    </Container>
  )
}


export default PageNotFound;