import Hero from '../components/home/hero/Hero';
import HomeContext from '../components/home/HomeContext';
import AboutUs from '../components/home/AboutUs';

const Home = props => {
  return (
    <main>
      <Hero />
      <HomeContext />
      <AboutUs />
    </main>
  );
};

export default Home;
