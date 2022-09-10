import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';

export const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <img
                src="https://img.icons8.com/nolan/32/documentary.png"
                alt=""
              />
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <img
                src="https://img.icons8.com/nolan/32/search-for-love.png"
                alt=""
              />
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
