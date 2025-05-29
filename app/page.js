'use client';
import { useState, useEffect } from 'react';
import './globals.css';

export default function Home() {
  const [cost, setCost] = useState(847);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCost(c => c + Math.floor(Math.random() * 3) + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
<header className="fixed top-0 w-full bg-black/90 backdrop-blur z-50 border-b border-gray-900">
  <div className="container mx-auto px-6 py-4">
    <div className="flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <svg className="w-8 h-8 text-red-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
        </svg>
        <span className="text-xl font-bold">BleedTime</span>
      </div>
      
      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center space-x-8">
        <a href="#features" className="text-gray-300 hover:text-white transition">Features</a>
        <a href="#pricing" className="text-gray-300 hover:text-white transition">Pricing</a>
        <a href="/dashboard" className="bg-red-600 px-6 py-2 rounded-lg hover:bg-red-700 transition font-semibold">
          Start Free Trial
        </a>
      </nav>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  {isMenuOpen && (
    <div className="md:hidden bg-black border-t border-gray-800">
      <a href="#features" className="block px-6 py-3 text-gray-300 hover:bg-gray-900">Features</a>
      <a href="#pricing" className="block px-6 py-3 text-gray-300 hover:bg-gray-900">Pricing</a>
      <a href="/dashboard" className="block px-6 py-3 bg-red-600 hover:bg-red-700 font-semibold">
        Start Free Trial
      </a>
    </div>
  )}
</header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Your Meetings Are<br />
              <span className="text-red-600">Bleeding Money</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
              See the real-time cost of every meeting. Watch profits drain. Make it stop.
            </p>

            {/* Live Counter */}
            <div className="bg-gray-900 rounded-2xl p-8 max-w-2xl mx-auto mb-12 border border-gray-800">
              <p className="text-sm text-gray-500 mb-2 uppercase tracking-wide">Current Meeting Cost</p>
              <div className="text-6xl md:text-8xl font-black text-red-600 mb-4">
                €{cost.toLocaleString()}
              </div>
              <p className="text-gray-400">
                8 people • 47 minutes • €150/hour average
              </p>
              <div className="mt-6 h-2 bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-red-600 transition-all duration-1000"
                  style={{ width: `${Math.min((cost / 2000) * 100, 100)}%` }}
                />
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/dashboard" 
                className="bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition transform hover:scale-105"
              >
                Start Free Trial - No Card Required
              </a>
              <button className="border-2 border-red-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-900/20 transition">
                Watch Demo
              </button>
            </div>

            <p className="text-gray-500 mt-8">
              Join 500+ companies saving €10,000+ monthly
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
            Stop the <span className="text-red-600">Bleeding</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-red-900/50 transition">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
                  <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Calendar Integration</h3>
              <p className="text-gray-400">Connect Google Calendar or Outlook. Automatic tracking. Zero setup.</p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-red-900/50 transition">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Real-Time Counter</h3>
              <p className="text-gray-400">Watch costs climb during meetings. Share screen. Make it hurt.</p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-red-900/50 transition">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-5h2v5zm4 0h-2v-3h2v3zm0-5h-2v-2h2v2zm4 5h-2V7h2v10z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Shocking Reports</h3>
              <p className="text-gray-400">Weekly waste reports. Department rankings. Name and shame mode.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
            Stop Bleeding. Start Saving.
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <div className="text-3xl font-black text-red-600 mb-6">
                €19<span className="text-lg text-gray-400">/mo</span>
              </div>
              <ul className="space-y-3 text-gray-400">
                <li>✓ Up to 50 employees</li>
                <li>✓ Unlimited meetings</li>
                <li>✓ Basic reports</li>
              </ul>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-2xl border-2 border-red-900 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-600 px-4 py-1 rounded-full text-sm font-bold">
                POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-2">Growth</h3>
              <div className="text-3xl font-black text-red-600 mb-6">
                €49<span className="text-lg text-gray-400">/mo</span>
              </div>
              <ul className="space-y-3 text-gray-400">
                <li>✓ Up to 200 employees</li>
                <li>✓ Advanced analytics</li>
                <li>✓ API access</li>
                <li>✓ Priority support</li>
              </ul>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <div className="text-3xl font-black text-red-600 mb-6">
                €99<span className="text-lg text-gray-400">/mo</span>
              </div>
              <ul className="space-y-3 text-gray-400">
                <li>✓ Unlimited employees</li>
                <li>✓ White label</li>
                <li>✓ Custom integrations</li>
                <li>✓ Dedicated support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

{/* Email Capture Section */}
<section className="py-20 px-6 bg-gray-900">
  <div className="container mx-auto max-w-2xl text-center">
    <h2 className="text-3xl md:text-4xl font-black mb-6">
      Get Early Access
    </h2>
    <p className="text-gray-400 mb-8">
      Be the first to know when we launch. No spam, just savings.
    </p>
    <form 
      className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
      onSubmit={(e) => {
        e.preventDefault();
        alert('Thanks! We\'ll be in touch soon.');
      }}
    >
      <input 
        type="email" 
        placeholder="your@email.com"
        required
        className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-600"
      />
      <button 
        type="submit"
        className="bg-red-600 px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition"
      >
        Get Access
      </button>
    </form>
  </div>
</section>

      {/* Footer */}
      <footer className="border-t border-gray-900 py-12 px-6">
        <div className="container mx-auto max-w-6xl text-center text-gray-500">
          <p>© 2024 BleedTime. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
