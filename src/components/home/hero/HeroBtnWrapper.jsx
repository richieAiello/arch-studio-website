import HeroBtn from './HeroBtn';
import { forwardRef } from 'react';

const HeroBtnWrapper = (props, ref) => {
  return (
    <div
      className="flex absolute -bottom-7 left-0 w-max h-max lg:-left-20"
      ref={ref}
    >
      <HeroBtn
        label="Project Paramour preview"
        id={0}
        onClick={props.onClick}
        className="current-btn"
      >
        01
      </HeroBtn>
      <HeroBtn
        label="Seraph Station preview"
        id={1}
        onClick={props.onClick}
      >
        02
      </HeroBtn>
      <HeroBtn
        label="Federal II Tower preview"
        id={2}
        onClick={props.onClick}
      >
        03
      </HeroBtn>
      <HeroBtn
        label="Trinity Bank Tower preview"
        id={3}
        onClick={props.onClick}
      >
        04
      </HeroBtn>
    </div>
  );
};

export default forwardRef(HeroBtnWrapper);
