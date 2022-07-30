import Nav from './Nav';

const Header = props => {
  return (
    <header
      className="container--header fixed left-0 right-0 z-50 h-24 flex items-center bg-white
      md:relative md:h-[9.5rem]"
    >
      <Nav />
    </header>
  );
};

export default Header;
