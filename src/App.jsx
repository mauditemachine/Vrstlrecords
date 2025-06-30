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
          Please send your demos here:{' '}
          <a href="https://www.labelradar.com/labels/VRSTLRecords/portal" className="mail" target="_blank" rel="noopener noreferrer">
            @https://www.labelradar.com/labels/VRSTLRecords/portal
          </a>
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
