import PortfolioCard from './PortfolioCard';

const PortfolioGrid = props => {
  return (
    <div
      className="grid gap-y-6 mt-[9.5rem] mb-[8.25rem] md:mt-0 md:mb-[12.5rem]
      lg:grid-cols-[1fr,1fr,1fr] lg:gap-y-8 lg:gap-x-[1.875rem] lg:mb-[10rem]"
    >
      <PortfolioCard
        heading="Seraph Station"
        text="September 2019"
        link="https://unsplash.com/s/photos/tower"
        image="seraph"
      />
      <PortfolioCard
        heading="Eebox Building"
        text="August 2017"
        link="https://unsplash.com/s/photos/building"
        image="eebox"
      />
      <PortfolioCard
        heading="Federal II Tower"
        text="March 2017"
        link="https://unsplash.com/s/photos/skyscraper"
        image="federal"
      />
      <PortfolioCard
        heading="Project Del Sol"
        text="January 2016"
        link="https://unsplash.com/s/photos/resort"
        image="del-sol"
      />
      <PortfolioCard
        heading="Le Prototype"
        text="October 2015"
        link="https://unsplash.com/s/photos/prototype"
        image="prototype"
      />
      <PortfolioCard
        heading="228B Tower"
        text="April 2015"
        link="https://unsplash.com/s/photos/modern-tower"
        image="228b"
      />
      <PortfolioCard
        heading="Grand Edelweiss Hotel"
        text="December 2013"
        link="https://unsplash.com/s/photos/grand-hotel"
        image="edelweiss"
      />
      <PortfolioCard
        heading="Netcry Tower"
        text="August 2012"
        link="https://unsplash.com/s/photos/old-tower"
        image="netcry"
      />
      <PortfolioCard
        heading="Hypers"
        text="January 2012"
        link="https://unsplash.com/s/photos/hyper"
        image="hypers"
      />
      <PortfolioCard
        heading="SXIV Tower"
        text="March 2011"
        link="https://unsplash.com/s/photos/fantasy-tower"
        image="sxiv"
      />
      <PortfolioCard
        heading="Trinity Bank Tower"
        text="September 2010"
        link="https://unsplash.com/s/photos/bank"
        image="trinity"
      />
      <PortfolioCard
        heading="Project Paramour"
        text="February 2008"
        link="https://unsplash.com/s/photos/question"
        image="paramour"
      />
    </div>
  );
};

export default PortfolioGrid;
