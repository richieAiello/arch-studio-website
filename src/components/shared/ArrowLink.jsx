import { Link } from 'react-router-dom';
import arrow from '../../assets/arrow.svg';

const ArrowLink = props => {
  return (
    <Link
      to={props.path}
      className="bg-black-custom text-white flex items-center pl-9 pr-8 pt-6 pb-5 
      w-max duration-[400ms] hover:bg-grey-dark-custom focus:bg-grey-dark-custom"
      aria-label={props.label}
    >
      {props.children}
      <img src={arrow} alt="" className="inline ml-6" />
    </Link>
  );
};

export default ArrowLink;
