import { NavLink } from 'react-router-dom';

const NavItem = props => {
  return (
    <li>
      <NavLink
        to={props.path}
        className=""
        onClick={props.onClick}
        target="_blank"
      >
        {props.text}
      </NavLink>
    </li>
  );
};

export default NavItem;
