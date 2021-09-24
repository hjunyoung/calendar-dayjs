import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  border-bottom: 1px solid #35353555;
`;

const Logo = styled.h1`
  font-size: 28px;
  font-weight: 700;
`;

const Navigation = styled.nav``;

const Header = () => {
  return (
    <Container>
      <Logo>Daily Color</Logo>
      <Navigation>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </Navigation>
    </Container>
  );
};

export default Header;
