import PortfolioGrid from '../components/portfolio/PortfolioGrid';

const Portfolio = props => {
  return (
    <main>
      <section className="container">
        <h1 className="ninja">Arch Studio's Portfolio</h1>
        <PortfolioGrid />
      </section>
    </main>
  );
};

export default Portfolio;
