import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `navbar-item ${isActive ? 'has-background-grey-lighter' : ''}`;

  return (
    <nav
      data-cy="nav"
      className="navbar is-fixed-top has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className={getNavLinkClass}>
            Home
          </NavLink>
          <NavLink to="/people" className={getNavLinkClass}>
            People
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
