import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ContactSection from './components/ContactSection';
import ProductDetail from './components/ProductDetail';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<><Hero /><ContactSection /></>} />
          <Route path="/product" element={<ProductDetail />} />
      
      
      
            </Routes>
      <Footer />
    </Router>
  );
}

export default App;
