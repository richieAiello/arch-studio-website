import { NavLink } from 'react-router-dom';

const FooterItem = props => {
  return (
    <li>
      <NavLink
        to={props.path}
        className="font-bold text-grey-custom duration-[250ms] hover:text-black-custom focus:text-black-custom"
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default FooterItem;
