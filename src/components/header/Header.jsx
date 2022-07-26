import Nav from './Nav';

const Header = props => {
  return (
    <header className="fixed h-24 w-full bg-blue-300 flex items-center">
      <Nav />
    </header>
  );
};

export default Header;
