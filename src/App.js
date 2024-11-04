import './App.css';
import AnimeDatabase from './components/AnimeDatabase';
import Footer from './components/Footer';
import Header from './components/Header';
import NavFilter from './components/NavFilter';

function App() {
  return (
    <div>
      <AnimeDatabase />
      <Footer />
      <Header />
      <NavFilter />
    </div>
  );
}

export default App;
