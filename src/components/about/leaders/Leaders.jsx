import LeadersGrid from './LeadersGrid';
const Leaders = props => {
  return (
    <section className="container mb-[10.6875rem]">
      <h2 className="heading text-black-custom capitalize max-w-[8ch] mb-[3.4375rem]">
        The Leaders
      </h2>
      <LeadersGrid />
    </section>
  );
};

export default Leaders;
