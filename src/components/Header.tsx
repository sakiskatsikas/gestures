import React, { FC } from 'react';
import logo from '../gesturesLogo.svg';

import styled from '@emotion/styled';

const StyledHeader = styled.header`
  display: flex;
  padding: 2rem;
  justify-content: flex-start;
  align-items: center;
  font-size: 8rem;
  font-family: Phosphate, sans-serif;
  img {
    height: 10vmin;
    pointer-events: none;
  }
  span {
    color: #ff7ba4;
    margin-left: -0.8rem;
  }
`;

const Header: FC<any> = () => {
  return (
    <StyledHeader>
      <img src={logo} alt="logo" />
      <span>estures</span>
    </StyledHeader>
  );
};

export default Header;
