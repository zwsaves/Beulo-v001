import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

function App() {
  const [currentWord, setCurrentWord] = useState('satisfy you');
  const words = ['satisfy you', 'pleasure you', 'show you happiness'];
  const [wordIndex, setWordIndex] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentWord(words[wordIndex]);
  }, [wordIndex]);

  return (
    <div className={`min-h-screen p-4 transition-colors duration-300 ${isDarkTheme ? 'bg-gray-900' : 'bg-white'}`}>
      <div
        className="relative overflow-hidden"
        style={{
          backgroundImage: 'url(https://gwuoficbgouqjvqwtwtp.supabase.co/storage/v1/object/public/WEB_IMGS/LANDING%20PAGE%20IMGS/1.avif)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          borderRadius: '30px',
          height: '800px'
        }}
      >
      {/* Navbar */}
      <div className="container mx-auto px-8 pt-8 relative z-20">
        <div className="flex items-center justify-between">
          <img
            src="https://gwuoficbgouqjvqwtwtp.supabase.co/storage/v1/object/public/WEB_IMGS/LANDING%20PAGE%20IMGS/LOGO.png"
            alt="Logo"
            className="h-16 w-auto"
          />
          <button
            onClick={() => setIsDarkTheme(!isDarkTheme)}
            className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all duration-300 border border-white/30"
            aria-label="Toggle theme"
          >
            {isDarkTheme ? (
              <Sun className="w-6 h-6 text-white" />
            ) : (
              <Moon className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Sky gradient overlay at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(135, 206, 235, 0.5), transparent)',
          borderBottomLeftRadius: '30px',
          borderBottomRightRadius: '30px'
        }}
      />

      {/* Hero Section */}
      <div className="container mx-auto px-8 pt-32 pb-16 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-white text-6xl mb-4" style={{ fontFamily: 'Lexend, sans-serif', fontWeight: 400 }}>
            a place to full fill your
          </h1>
          <h2 className="text-white text-6xl italic font-light mb-8" style={{ fontFamily: 'Gwendolyn, cursive', fontWeight: 700 }}>
            Wild Fantasises
          </h2>
          <p className="text-white/90 text-xl mb-8">
            Be a Fapstar, let us{' '}
            <span
              key={wordIndex}
              className="inline-block transition-all duration-1000 ease-in-out"
            >
              {currentWord}
            </span>
          </p>
        </div>

        {/* Product Showcase */}
        <div className="mt-16 px-4">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-7xl mx-auto">
            <img
              src="https://gwuoficbgouqjvqwtwtp.supabase.co/storage/v1/object/public/WEB_IMGS/LANDING%20PAGE%20IMGS/1.avif"
              alt="WriteAway Editor Interface"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
