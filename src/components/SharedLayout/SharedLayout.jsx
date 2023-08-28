import { NavLink } from "react-router-dom";

const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="movies">Movies</NavLink>
        </nav>
      </header>
      {/* <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense> */}
    </div>
  );
};

export default SharedLayout;