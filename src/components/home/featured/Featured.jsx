import FeaturedCard from './FeaturedCard';
import ArrowLink from '../../shared/ArrowLink';

const Featured = props => {
  return (
    <section className="container mb-[8.25rem] md:grid md:grid-rows-[auto,auto] md:grid-cols-2 md:mb-[12.5rem]">
      <h2 className="heading text-black-custom mb-[2.625rem] md:mb-[5.375rem]">
        Featured
      </h2>
      <div className=" row-start-2 col-span-2">
        <FeaturedCard
          heading="Project Del Sol"
          text="1"
          image="del-sol"
        />
        <FeaturedCard heading="228B Tower" text="2" image="228b" />
        <FeaturedCard
          heading="Le Prototype"
          text="3"
          image="prototype"
        />
      </div>
      <ArrowLink
        path="portfolio"
        className="justify-center md:self-start md:justify-self-end md:pr-8 md:pl-[2.1875rem]"
      >
        Portfolio
      </ArrowLink>
    </section>
  );
};

export default Featured;
