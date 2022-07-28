import Nav from './Nav';

const Header = props => {
  return (
    <header className="fixed z-50 h-24 w-full flex items-center bg-white">
      <Nav />
    </header>
  );
};

export default Header;
