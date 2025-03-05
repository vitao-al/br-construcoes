import Header from './components/header';
import Products from './components/products';
import Services from './components/services';
import Projects from './components/projects';
import Diferenciais from './components/diferenciais';
import Depoimentos from './components/depoimentos';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Header/>
      {/* Produtos Section */}
      <Products/>

      {/* Serviços Section */}
      <Services/>

      {/* Projetos Section */}
      <Projects/>

      {/* Diferenciais Section */}
      <Diferenciais/>

      {/* Depoimentos Section */}
      <Depoimentos/>

      {/* Contato Section */}
      <Contact/>

      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default App;