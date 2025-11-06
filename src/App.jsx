import './App.css';
import Intro from './components/Intro';
import Translator from './components/Translator';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Intro />
      <div id="translator-section">
        <Translator />
      </div>
      <Footer />
    </>
  );
}

export default App;
