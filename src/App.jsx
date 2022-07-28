import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Header from './components/header/Header';
import Home from './routes/Home';
import Portfolio from './routes/Portfolio';
import About from './routes/About';
import Contact from './routes/Contact';
import Footer from './components/footer/Footer';

const App = props => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
