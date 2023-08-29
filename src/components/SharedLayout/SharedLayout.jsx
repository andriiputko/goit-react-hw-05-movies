import { NavLink } from "react-router-dom";
import cl from "./SharedLayout.module.css"

const SharedLayout = () => {
  return (
    <div>
      <header className={cl.header}>
        <nav className={cl.nav}>
          <NavLink to="/" className={cl.link}>Home</NavLink>
          <NavLink to="movies" className={cl.link}>Movies</NavLink>
        </nav>
      </header>
      {/* <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense> */}
    </div>
  );
};

export default SharedLayout;