const FlavorText = props => {
  return (
    <span
      aria-hidden
      className={`heading--flavor ${props.className}`}
    >
      {props.text}
    </span>
  );
};

export default FlavorText;
