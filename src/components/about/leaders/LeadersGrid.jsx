import LeadersCard from './LeadersCard';

const LeadersGrid = props => {
  return (
    <div
      className="grid gap-y-20 mx-auto max-w-max md:grid-cols-[1fr,1fr] md:gap-x-[0.6875rem]
      md:gap-y-[6.4375rem] lg:gap-y-16 lg:gap-x-[1.875rem] lg:mx-0 lg:justify-self-end"
    >
      <LeadersCard
        image="jake"
        heading="Jake Richards"
        text="Chief Architect"
      />
      <LeadersCard
        image="thompson"
        heading="Thompson Smith"
        text="Head of Finance"
      />
      <LeadersCard
        image="jackson"
        heading="Jackson Rourke"
        text="Lead Designer"
      />
      <LeadersCard
        image="maria"
        heading="Maria Simpson"
        text="Senior Architect"
      />
    </div>
  );
};

export default LeadersGrid;
