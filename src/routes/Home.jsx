import Hero from '../components/home/hero/Hero';
import HomeContext from '../components/home/HomeContext';
import AboutUs from '../components/home/aboutUs/AboutUs';
import Featured from '../components/home/featured/Featured';

const Home = props => {
  return (
    <main>
      <Hero />
      <HomeContext />
      <AboutUs />
      <Featured />
    </main>
  );
};

export default Home;
