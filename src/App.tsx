import { useState, useEffect } from 'react';

function App() {
  const [currentWord, setCurrentWord] = useState('satisfy you');
  const words = ['satisfy you', 'pleasure you', 'show you happiness'];
  const [wordIndex, setWordIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState('');
  const [timezone, setTimezone] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentWord(words[wordIndex]);
  }, [wordIndex]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}:${seconds}`);

      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const cityMap: { [key: string]: string } = {
        'America/New_York': 'NYC',
        'America/Los_Angeles': 'LAX',
        'America/Chicago': 'CHI',
        'Asia/Kolkata': 'DEL',
        'Europe/London': 'LON',
        'Europe/Paris': 'PAR',
        'Asia/Tokyo': 'TYO',
        'Asia/Dubai': 'DXB',
        'Australia/Sydney': 'SYD',
        'Asia/Singapore': 'SIN',
        'Asia/Hong_Kong': 'HKG',
        'America/Toronto': 'TOR',
        'Europe/Berlin': 'BER',
        'Asia/Shanghai': 'SHA',
        'Europe/Moscow': 'MOW'
      };

      setTimezone(cityMap[tz] || tz.split('/').pop()?.substring(0, 3).toUpperCase() || 'UTC');
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen p-4 bg-white">
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
          <div className="flex items-center gap-2">
            <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" strokeWidth="2"/>
              <path strokeWidth="2" strokeLinecap="round" d="M12 6v6l4 2"/>
            </svg>
            <span className="text-white" style={{ fontFamily: 'monospace', letterSpacing: '0.05em', fontSize: '14px' }}>
              {currentTime}
            </span>
            <span className="text-white uppercase" style={{ fontFamily: 'Lexend, sans-serif', fontWeight: 400, fontSize: '14px' }}>
              {timezone}
            </span>
          </div>
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

      {/* Gradient Box */}
      <div className="mt-8 mx-auto" style={{ width: '400px', height: '400px' }}>
        <div
          className="w-full h-full rounded-3xl"
          style={{
            background: 'linear-gradient(180deg, #4BA3C3 0%, #2B7A9B 25%, #1E5F7E 50%, #164A61 75%, #0D3647 100%)',
          }}
        />
      </div>
    </div>
  );
}

export default App;
