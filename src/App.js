import './App.css';
import AnimeDatabase from './components/AnimeDatabase';
import Footer from './components/Footer';
import Header from './components/Header';
import NavFilter from './components/NavFilter';
import { AnimeProvider } from './hooks/AnimeContext';

function App() {
  return (
    <div>
      <AnimeProvider>
      <Header />
        <NavFilter />
      <AnimeDatabase />
      <Footer />
      </AnimeProvider>
    </div>
  );
}

export default App;
