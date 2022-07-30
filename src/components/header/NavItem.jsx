import { NavLink } from 'react-router-dom';

const NavItem = props => {
  return (
    <li>
      <NavLink
        to={props.path}
        className="capitalize text-grey-dark-custom font-bold text-[2rem] leading-10
        duration-[250ms] hover:text-black-custom focus:text-black-custom
        md:text-[1.125rem]"
        onClick={props.onClick}
      >
        {props.text}
      </NavLink>
    </li>
  );
};

export default NavItem;
