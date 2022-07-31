const LeadersCard = props => {
  return (
    <div className="text-black-custom">
      <img
        src={`./about/desktop/avatar-${props.image}.jpg`}
        alt=""
        className="h-[284px] w-[min(100%,311px)] object-cover mb-[0.9375rem] md:h-[256px] lg:h-[400px] lg:w-[350px]"
      />
      <h3 className="heading--sub capitalize">{props.heading}</h3>
      <p className="opacity-75">{props.text}</p>
    </div>
  );
};

export default LeadersCard;
