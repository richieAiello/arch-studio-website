import NavItem from './NavItem';

const NavMenu = props => {
  return (
    <ul>
      <NavItem path="/" onClick={props.onClick} text="Home" />
      <NavItem
        path="/portfolio"
        onClick={props.onClick}
        text="Portfolio"
      />
      <NavItem
        path="/about"
        onClick={props.onClick}
        text="About Us"
      />
      <NavItem
        path="/contact"
        onClick={props.onClick}
        text="Contact"
      />
    </ul>
  );
};

export default NavMenu;
