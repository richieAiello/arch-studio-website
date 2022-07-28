import NavItem from './NavItem';

const NavMenu = props => {
  return (
    <ul
      className={`
        w-screen absolute top-24 left-0 bg-silver-custom py-10 pl-8
        gap-y-4 z-10
        ${props.className}
        md:grid md:h-max md:w-max md:static
      `}
    >
      <NavItem path="/" onClick={props.onClick} text="Home" />
      <NavItem
        path="portfolio"
        onClick={props.onClick}
        text="Portfolio"
      />
      <NavItem path="about" onClick={props.onClick} text="About Us" />
      <NavItem
        path="contact"
        onClick={props.onClick}
        text="Contact"
      />
    </ul>
  );
};

export default NavMenu;
