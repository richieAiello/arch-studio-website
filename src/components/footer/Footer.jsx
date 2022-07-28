import { ReactComponent as Logo } from '../../../public/logo.svg';
import FooterList from './FooterList';

const Footer = props => {
  return (
    <footer className="bg-silver-custom pb-12">
      <div className="container relative  flex justify-center">
        <div
          className="bg-black-custom flex items-center justify-center w-[7.5rem] h-[7.5rem]
          absolute mx-auto left-0 right-0 -top-[3.75rem] "
        >
          <Logo className="logo" />
        </div>
        <FooterList />
      </div>
    </footer>
  );
};

export default Footer;
