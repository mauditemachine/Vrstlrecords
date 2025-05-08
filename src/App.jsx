import './App.css';
import Header from './components/Header';
import Logo from './components/Logo';
import Footer from './components/Footer';

function App() {
  return (
    <div className="page-layout">
      <Header />
      <main className="main-center">
        <Logo />
        <p className="cta">
          Website under construction, for demos please send it at{' '}
          <a href="mailto:booking@vrstlrecords.com" className="mail">
            booking@vrstlrecords.com
          </a>
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
