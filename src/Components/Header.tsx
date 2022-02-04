import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px calc((100vw - 1000px) / 2);
  border-bottom: 1px solid #35353555;
  z-index: 10;
`;

const Logo = styled.h1`
  font-size: 28px;
  font-weight: 700;
`;

const WriteDiary = styled.div``;

const Navigation = styled.nav``;

const UserIcon = styled.section<{ userMenu: boolean }>`
  cursor: pointer;
`;

const UserMenu = styled.section`
  position: absolute;
  background-color: hotpink;
  padding: 5px;
`;

const Header = () => {
  return (
    <Container>
      <Link to="/">
        <Logo>Daily Color</Logo>
      </Link>
      <WriteDiary>
        <Link to="/new">
          <p>Paint your day</p>
        </Link>
      </WriteDiary>
      <Navigation>
        <UserIcon userMenu={false}>User Icon</UserIcon>
        <UserMenu>
          <div>Profile</div>
          <div>Settings</div>
          <div>Sign Out</div>
        </UserMenu>
      </Navigation>
    </Container>
  );
};

export default Header;
