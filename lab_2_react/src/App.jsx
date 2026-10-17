import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-green-50 font-serif text-slate-800 md:grid md:grid-cols-[300px_1fr]">
      <Header />
      <div className="flex flex-col">
        <main className="flex flex-1 flex-col gap-5 p-5 md:max-w-3xl md:p-10">
          <About />
          <Education />
          <Skills />
          <Experience />
          <Contacts />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;