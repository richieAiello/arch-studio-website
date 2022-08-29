import { NavLink } from 'react-router-dom';

const FormValidated = ({ setState }) => {
  return (
    <div
      className="w-screen h-screen fixed top-0 left-0 z-50 bg-[rgba(0,0,0,60%)]
      flex items-center justify-center text-black-custom px-4"
    >
      <div
        className="bg-silver-custom h-1/2 w-[min(100%,375px)] rounded-lg flex flex-col items-center justify-center text-center p-12
        md:w-[573px]"
      >
        <p className="text-2xl mb-6 font-bold">
          Your message has been sent!
        </p>
        <p className="text-xl mb-10 max-w-[32ch]">
          We will contact you with more information as soon as
          possible.
        </p>
        <ul className="grid grid-flow-col gap-x-6 text-xl">
          <li>
            <NavLink
              to="/"
              className="font-bold  duration-300 hover:text-grey-custom focus:text-grey-custom"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className="font-bold  duration-300 hover:text-grey-custom focus:text-grey-custom"
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="font-bold  duration-300 hover:text-grey-custom focus:text-grey-custom"
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={() => setState(true)}
              className="font-bold  duration-300 hover:text-grey-custom focus:text-grey-custom"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FormValidated;
