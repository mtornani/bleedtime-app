'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [cost, setCost] = useState(847);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCost(c => c + Math.floor(Math.random() * 3) + 1);
    }, 1000);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden relative">
      {/* Graffiti Background Effect */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='%23000'/%3E%3Cpath d='M0 0l50 50-50 50M50 0l50 50-50 50' stroke='%23f00' stroke-width='0.5' fill='none' opacity='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      {/* Paint Drips */}
      <div className="fixed top-0 left-0 w-full h-32 pointer-events-none">
        <svg width="100%" height="100%" className="opacity-20">
          <path d="M0,0 Q50,80 100,0 T200,0 T300,0 T400,0 T500,0 T600,0 T700,0 T800,0 T900,0 T1000,0 T1100,0 T1200,0 T1300,0 T1400,0 T1500,0 L1500,100 L0,100 Z" 
                fill="#DC143C" />
        </svg>
      </div>

      {/* Stencil Style Header */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-sm bg-black/50 border-b border-red-900/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              {/* Logo as Stencil */}
              <div className="relative">
                <div className="absolute inset-0 bg-red-600 blur-xl opacity-50"></div>
                <svg className="w-10 h-10 relative" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="#DC143C" strokeWidth="2" strokeDasharray="2 2"/>
                  <path d="M12 7v5l3 3" stroke="#DC143C" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="12" cy="17" r="1" fill="#DC143C" className="animate-pulse"/>
                </svg>
              </div>
              <span className="text-2xl font-black tracking-wider" style={{
                textShadow: '2px 2px 0 #DC143C, -2px -2px 0 #DC143C, 2px -2px 0 #DC143C, -2px 2px 0 #DC143C',
                fontFamily: 'Impact, sans-serif'
              }}>
                BLEEDTIME
              </span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#truth" className="hover:text-red-500 transition font-bold tracking-wide">THE TRUTH</a>
              <a href="#damage" className="hover:text-red-500 transition font-bold tracking-wide">THE DAMAGE</a>
              <a href="#revolution" className="hover:text-red-500 transition font-bold tracking-wide">JOIN THE REVOLUTION</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section - Banksy Style */}
      <section className="pt-32 pb-20 px-6 relative">
        {/* Spray Paint Effect */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-red-600 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-900 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>

        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center">
            {/* Stencil Typography */}
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight tracking-tight"
                style={{
                  fontFamily: 'Impact, sans-serif',
                  textTransform: 'uppercase',
                  letterSpacing: '-0.05em',
                  transform: 'skewY(-2deg)',
                  filter: 'url(#roughPaper)'
                }}>
              <span className="block text-gray-300">YOUR MEETINGS</span>
              <span className="block text-red-600" style={{
                textShadow: '4px 4px 0 #000, -4px -4px 0 #000, 4px -4px 0 #000, -4px 4px 0 #000'
              }}>
                ARE KILLING YOU
              </span>
            </h1>
            
            <p className="text-2xl text-gray-400 mb-12 font-bold tracking-wide uppercase">
              Watch Your Life Drain Away • One Meeting at a Time
            </p>

            {/* Counter as Street Art */}
            <div className="relative inline-block mb-12">
              {/* Spray paint background */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-900 to-black rounded-2xl transform rotate-1 scale-105"></div>
              
              {/* Main counter */}
              <div className="relative bg-black rounded-2xl p-8 border-4 border-red-600 transform -rotate-1 hover:rotate-0 transition-transform duration-300"
                   style={{
                     boxShadow: '10px 10px 0 rgba(220, 20, 60, 0.3)',
                     background: 'repeating-linear-gradient(45deg, #000, #000 10px, #111 10px, #111 20px)'
                   }}>
                <p className="text-sm text-gray-500 mb-2 uppercase tracking-widest font-bold">Time is Money</p>
                <div className="text-7xl md:text-9xl font-black text-red-600 mb-4"
                     style={{
                       fontFamily: 'Impact, sans-serif',
                       textShadow: '3px 3px 0 #fff, -3px -3px 0 #fff, 3px -3px 0 #fff, -3px 3px 0 #fff',
                       animation: 'flicker 2s infinite'
                     }}>
                  €{cost.toLocaleString()}
                </div>
                <div className="text-gray-400 font-bold uppercase tracking-wide">
                  <span className="text-red-500">8 SLAVES</span> • 
                  <span className="text-red-500"> 47 MINUTES</span> • 
                  <span className="text-red-500"> €150/HOUR</span>
                </div>
                
                {/* Progress bar as graffiti */}
                <div className="mt-6 h-4 bg-gray-900 rounded-full overflow-hidden relative">
                  <div className="absolute inset-0 bg-repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)"></div>
                  <div 
                    className="h-full bg-gradient-to-r from-red-600 to-red-900 transition-all duration-1000"
                    style={{ 
                      width: `${Math.min((cost / 2000) * 100, 100)}%`,
                      boxShadow: '0 0 20px rgba(220, 20, 60, 0.8)'
                    }}
                  />
                </div>
              </div>
            </div>

            {/* CTA Buttons as Graffiti Tags */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group relative px-10 py-5 bg-red-600 text-white font-black text-xl uppercase tracking-wider transform -skew-x-12 hover:skew-x-0 transition-all duration-300"
                      style={{
                        boxShadow: '5px 5px 0 #000',
                        border: '3px solid #000'
                      }}>
                <span className="block transform skew-x-12 group-hover:skew-x-0 transition-all duration-300">
                  WAKE UP NOW
                </span>
              </button>
              
              <button className="px-10 py-5 bg-transparent text-red-600 font-black text-xl uppercase tracking-wider border-4 border-red-600 transform skew-x-12 hover:skew-x-0 hover:bg-red-600 hover:text-white transition-all duration-300"
                      style={{
                        boxShadow: '5px 5px 0 rgba(220, 20, 60, 0.5)'
                      }}>
                <span className="block transform -skew-x-12 group-hover:skew-x-0 transition-all duration-300">
                  SEE THE TRUTH
                </span>
              </button>
            </div>

            {/* Graffiti Tag */}
            <p className="text-gray-500 mt-12 font-bold uppercase tracking-widest text-sm"
               style={{
                 transform: 'rotate(-5deg)',
                 display: 'inline-block'
               }}>
              500+ COMPANIES ALREADY WOKE • €10,000+ SAVED MONTHLY
            </p>
          </div>
        </div>
      </section>

      {/* Features Section - Stencil Art Style */}
      <section id="truth" className="py-20 px-6 bg-black relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)'
          }}></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-16 uppercase"
              style={{
                fontFamily: 'Impact, sans-serif',
                transform: 'skewY(-2deg)',
                textShadow: '3px 3px 0 #DC143C'
              }}>
            THE SYSTEM IS <span className="text-red-600">BROKEN</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature cards as street art posters */}
            <div className="relative group">
              <div className="absolute inset-0 bg-red-600 transform rotate-2 group-hover:rotate-0 transition-transform"></div>
              <div className="relative bg-black p-8 border-4 border-white transform -rotate-2 group-hover:rotate-0 transition-transform">
                <div className="text-6xl mb-4">📅</div>
                <h3 className="text-2xl font-black mb-2 uppercase">Track Everything</h3>
                <p className="text-gray-400 font-bold">Every meeting. Every minute. Every euro wasted.</p>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-red-600 transform -rotate-2 group-hover:rotate-0 transition-transform"></div>
              <div className="relative bg-black p-8 border-4 border-white transform rotate-2 group-hover:rotate-0 transition-transform">
                <div className="text-6xl mb-4">⏱️</div>
                <h3 className="text-2xl font-black mb-2 uppercase">See The Truth</h3>
                <p className="text-gray-400 font-bold">Real-time cost counter. Make it hurt.</p>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-red-600 transform rotate-2 group-hover:rotate-0 transition-transform"></div>
              <div className="relative bg-black p-8 border-4 border-white transform -rotate-2 group-hover:rotate-0 transition-transform">
                <div className="text-6xl mb-4">📊</div>
                <h3 className="text-2xl font-black mb-2 uppercase">Name & Shame</h3>
                <p className="text-gray-400 font-bold">Weekly reports. Department rankings. No mercy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SVG Filters for Graffiti Effect */}
      <svg width="0" height="0">
        <filter id="roughPaper" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence baseFrequency="0.02" result="noise" numOctaves="5" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
        </filter>
      </svg>

      {/* Keyframes */}
      <style jsx>{`
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}
```

## 🎨 ELEMENTI BANKSY:

1. **Stencil Typography** - Font Impact, skewed, con ombre multiple
2. **Spray Paint Effects** - Blur e gradient per effetto aerosol
3. **Rotated Elements** - Tutto leggermente storto, come street art
4. **High Contrast** - Nero/Rosso/Bianco only
5. **Political Message** - "THE SYSTEM IS BROKEN", "SLAVES", etc.
6. **Rough Textures** - SVG filters per effetto carta ruvida
7. **Graffiti Tags** - Elementi che sembrano scritti con spray

**Committa e vedrai BleedTime trasformato in un'opera d'arte urbana!** 🎭