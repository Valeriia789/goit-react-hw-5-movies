import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import {
  Header,
  HeaderList,
  ListItem,
  StyledNavLink,
} from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <div>
      <Header>
        <nav>
          <HeaderList>
            <ListItem>
              <img
                src="https://img.icons8.com/nolan/32/documentary.png"
                alt=""
              />
              <StyledNavLink to="/">HOME</StyledNavLink>
            </ListItem>
            <ListItem>
              <img
                src="https://img.icons8.com/nolan/32/search-for-love.png"
                alt=""
              />
              <StyledNavLink to="/movies">MOVIES</StyledNavLink>
            </ListItem>
          </HeaderList>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
