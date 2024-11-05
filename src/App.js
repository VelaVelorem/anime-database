import './App.css';
import AnimeDatabase from './components/AnimeDatabase';
import Footer from './components/Footer';
import Header from './components/Header';
import NavFilter from './components/NavFilter';

function App() {
  return (
    <div>
      <Header />
      <NavFilter/>
      <AnimeDatabase/>
      <Footer />
    </div>
  );
}

export default App;
