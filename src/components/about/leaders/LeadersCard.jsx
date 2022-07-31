import { ReactComponent as LinkedIn } from '../../../assets/linkedin.svg';
import { ReactComponent as Twitter } from '../../../assets/twitter.svg';

const LeadersCard = props => {
  return (
    <div className="text-black-custom">
      <img
        src={`./about/desktop/avatar-${props.image}.jpg`}
        alt=""
        className="h-[284px] w-[min(100%,311px)] object-cover mb-[0.9375rem] md:h-[256px] lg:h-[400px] lg:w-[350px]"
      />
      <div className="">
        <h3 className="heading--sub capitalize">{props.heading}</h3>
        <p className="opacity-75">{props.text}</p>
        <div className="flex items-center justify-start mt-2">
          <a
            href="#"
            aria-label="Visit Arch Studio's LinkedIn."
            className="mr-4"
          >
            <LinkedIn viewBox="0 0 40 40" className="icon linkedin" />
          </a>
          <a href="#" aria-label="Visit Arch Studio's Twitter.">
            <Twitter viewBox="0 0 40 33" className="icon twitter " />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeadersCard;
