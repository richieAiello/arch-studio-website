import { Link } from 'react-router-dom';
import arrow from '../../assets/arrow.svg';

const ArrowLink = props => {
  return (
    <Link
      to={props.path}
      className={`
        bg-black-custom text-white flex items-center min-w-max  pt-[1.5625rem] pb-[1.375rem]
        duration-[400ms] hover:bg-grey-dark-custom focus:bg-grey-dark-custom
        ${props.className}
      `}
      aria-label={props.label}
    >
      {props.children}
      <img src={arrow} alt="" className="inline ml-6" />
    </Link>
  );
};

export default ArrowLink;
