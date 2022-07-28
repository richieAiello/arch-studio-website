import FeaturedCard from './FeaturedCard';
import ArrowLink from '../../shared/ArrowLink';

const Featured = props => {
  return (
    <section className="container mb-[8.25rem]">
      <h2 className="heading text-black-custom mb-[2.625rem]">
        Featured
      </h2>
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
      <ArrowLink path="portfolio" className="justify-center">
        Portfolio
      </ArrowLink>
    </section>
  );
};

export default Featured;
