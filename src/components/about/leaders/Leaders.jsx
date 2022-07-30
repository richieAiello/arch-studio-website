import LeadersGrid from './LeadersGrid';

const Leaders = props => {
  return (
    <section className="container--leaders mb-[10.6875rem] md:mb-[14.9375rem]">
      <h2 className="heading text-black-custom capitalize max-w-[8ch] mb-[3.4375rem] md:mb-[3.0625rem]">
        The Leaders
      </h2>
      <LeadersGrid />
    </section>
  );
};

export default Leaders;
