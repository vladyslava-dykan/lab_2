import { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Reviews from './components/Reviews';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

function App() {
  const [theme, setTheme] = useState('light');

  // Автоматичний вибір теми за часом при завантаженні
  useEffect(() => {
    const hours = new Date().getHours();

    if (hours >= 7 && hours < 21) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);

  // Ручне перемикання
  function toggleTheme() {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
    <div className={`min-h-screen bg-green-50 font-serif text-slate-800 md:grid md:grid-cols-[300px_1fr] ${theme === 'dark' ? 'dark-mode' : ''}`}>
      <Header toggleTheme={toggleTheme} />
      <div className="flex flex-col">
        <main className="flex flex-1 flex-col gap-5 p-5 md:max-w-3xl md:p-10">
          <About />
          <Education />
          <Skills />
          <Experience />
          <Reviews />
          <Contacts />
        </main>
        <Footer />
        <ContactForm />
      </div>
    </div>
  );
}

export default App;