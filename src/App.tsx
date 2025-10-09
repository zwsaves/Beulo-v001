import { PenLine } from 'lucide-react';
import { useState, useEffect } from 'react';

function App() {
  const [currentWord, setCurrentWord] = useState('satisfy you');
  const words = ['satisfy you', 'pleasure you', 'show you happiness'];
  const [wordIndex, setWordIndex] = useState(0);

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
    <div className="min-h-screen bg-white p-4">
      <div
        className="h-full min-h-[calc(100vh-2rem)] relative overflow-hidden"
        style={{
          backgroundImage: 'url(https://gwuoficbgouqjvqwtwtp.supabase.co/storage/v1/object/public/WEB_IMGS/LANDING%20PAGE%20IMGS/1.avif)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          borderRadius: '30px'
        }}
      >
      {/* Hero Section */}
      <div className="container mx-auto px-8 pt-32 pb-16">
        <div className="text-center mb-12">
          <h1 className="text-white text-6xl font-bold mb-4" style={{ fontFamily: 'Lexend, sans-serif' }}>
            a place to full fill your
          </h1>
          <h2 className="text-white text-6xl italic font-light mb-8" style={{ fontFamily: 'Gwendolyn, cursive', fontWeight: 700 }}>
            Wild Fantasises
          </h2>
          <p className="text-white/90 text-xl mb-8">
            Be a Fapstar, let us{' '}
            <span
              key={wordIndex}
              className="inline-block transition-all duration-500 ease-in-out animate-fade"
              style={{
                animation: 'fadeInOut 2s ease-in-out infinite'
              }}
            >
              {currentWord}
            </span>
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2 mx-auto shadow-lg">
            <PenLine className="w-5 h-5" />
            Start Writing
          </button>
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
