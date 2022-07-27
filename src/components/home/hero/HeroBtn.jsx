import clsx from 'clsx';

const HeroBtn = props => {
  return (
    <button
      type="button"
      aria-label={props.label}
      className={`
        flex items-center justify-center w-14 h-14 bg-white text-grey-custom duration-[400ms]
        font-bold hover:bg-silver-custom focus:bg-silver-custom
        lg:h-20 lg:w-20 ${props.className}  
      `}
      onClick={props.onClick}
      data-id={props.id}
    >
      {props.children}
    </button>
  );
};

export default HeroBtn;
