import { ReactComponent as Logo } from '../../../public/logo.svg';
import FooterList from './FooterList';

const Footer = props => {
  return (
    <footer className="bg-silver-custom pb-12 md:pb-0 md:h-[7.5rem]">
      <div className="container relative flex justify-center md:justify-end md:items-center md:h-full">
        <div
          className="bg-black-custom flex items-center justify-center w-[7.5rem] h-[7.5rem]
          absolute mx-auto left-0 right-0 -top-[3.75rem] md:mx-0 md:top-0 "
        >
          <Logo className="logo" />
        </div>
        <FooterList />
      </div>
    </footer>
  );
};

export default Footer;
