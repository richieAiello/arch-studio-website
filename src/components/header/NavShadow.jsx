const NavShadow = props => {
  return (
    <div
      className={`
        bg-[rgba(0,0,0,.5)] w-screen h-[calc(100vh-6rem)]
        absolute top-24 left-0
        ${props.className}
        md:hidden
      `}
      onClick={props.onClick}
    />
  );
};

export default NavShadow;
