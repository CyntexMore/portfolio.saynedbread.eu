import './App.css';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import TopBar from './components/TopBar/TopBar';
import Tools from './components/Tools/Tools';
import Footer from './components/Footer/Footer';
import System from './components/System/System';

function App() {
  return (
    <div className="relative min-h-screen">
      <TopBar />
      <main className="relative z-10 pt-24">
        <Hero />
        <Projects />
        <Tools />
        <System />
      </main>
      <Footer />
    </div>
  );
}

export default App;