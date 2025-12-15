'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-deep-surface/80 backdrop-blur-xl border-b border-white/5' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-prism-yellow to-ai-cyan rounded-lg" />
            <span className="text-2xl font-bold tracking-tight">Prism</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="text-zinc-400 hover:text-white transition">Features</a>
            <a href="#tech" className="text-zinc-400 hover:text-white transition">Technology</a>
            <a href="#privacy" className="text-zinc-400 hover:text-white transition">Privacy</a>
          </div>
          <button className="bg-prism-yellow text-void-black px-6 py-2.5 rounded-full font-semibold text-sm hover:glow-yellow transition-all">
            Join Waitlist
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ai-cyan/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 text-sm text-zinc-400">
            <span className="w-2 h-2 bg-ai-cyan rounded-full animate-pulse" />
            Now processing with Neural Vision AI
          </div>

          <h1 className="text-7xl md:text-8xl font-bold tracking-tighter mb-6 leading-none">
            Your moments,
            <br />
            <span className="bg-gradient-to-r from-prism-yellow via-ai-cyan to-neon-pink bg-clip-text text-transparent">
              elevated by intelligence
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Prism uses advanced AI to organize, enhance, and share your photos with unprecedented intelligence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="bg-prism-yellow text-void-black px-8 py-4 rounded-full font-bold text-lg hover:glow-yellow transition-all flex items-center gap-2 group">
              Get Early Access
              <svg className="w-5 h-5 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button className="glass-card px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/5 transition-all flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch Demo
            </button>
          </div>

          {/* Hero Visual: Mock Phone Interface */}
          <div className="relative max-w-sm mx-auto">
            <div className="glass-card rounded-3xl p-4 glow-cyan">
              <div className="bg-deep-surface rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-left">
                    <div className="text-xs text-zinc-500">Today</div>
                    <div className="text-sm font-semibold">124 photos analyzed</div>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-br from-neon-pink to-ai-cyan rounded-full" />
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                      key={i}
                      className="aspect-square bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-lg relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      {i === 1 && (
                        <div className="absolute top-1 right-1 w-2 h-2 bg-ai-cyan rounded-full glow-cyan" />
                      )}
                    </div>
                  ))}
                </div>

                <div className="glass-card rounded-xl p-3 flex items-center gap-3">
                  <div className="w-8 h-8 bg-prism-yellow/20 rounded-full flex items-center justify-center text-xs">
                    AI
                  </div>
                  <div className="flex-1 text-left text-xs text-zinc-400">
                    <span className="text-white">Smart Album created:</span> Beach Sunset 2024
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Intelligence meets
              <br />
              <span className="text-prism-yellow">simplicity</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Powerful AI capabilities that work invisibly in the background
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="glass-card rounded-2xl p-8 hover:bg-white/5 transition-all group">
              <div className="w-12 h-12 bg-ai-cyan/20 rounded-full flex items-center justify-center mb-6 group-hover:glow-cyan transition">
                <svg className="w-6 h-6 text-ai-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Neural Vision</h3>
              <p className="text-zinc-400 leading-relaxed">
                Advanced scene recognition, object detection, and context-aware organization powered by on-device ML.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="glass-card rounded-2xl p-8 hover:bg-white/5 transition-all group">
              <div className="w-12 h-12 bg-neon-pink/20 rounded-full flex items-center justify-center mb-6 group-hover:glow-pink transition">
                <svg className="w-6 h-6 text-neon-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Face ID Clustering</h3>
              <p className="text-zinc-400 leading-relaxed">
                Automatically groups photos by people. Private, secure, and never leaves your device.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="glass-card rounded-2xl p-8 hover:bg-white/5 transition-all group">
              <div className="w-12 h-12 bg-prism-yellow/20 rounded-full flex items-center justify-center mb-6 group-hover:glow-yellow transition">
                <svg className="w-6 h-6 text-prism-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Instant Enhancement</h3>
              <p className="text-zinc-400 leading-relaxed">
                One-tap AI enhancement for lighting, color, and composition. Professional results instantly.
              </p>
            </div>
          </div>

          {/* Interactive Feature Demo */}
          <div className="mt-20 glass-card rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-4xl font-bold mb-6">Smart Albums</h3>
                <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                  Prism automatically creates albums based on events, locations, people, and themes. Your memories, perfectly organized.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: '🏖️', title: 'Beach Trip 2024', count: '47 photos' },
                    { icon: '🎂', title: 'Birthday Party', count: '89 photos' },
                    { icon: '🌆', title: 'City Nights', count: '124 photos' },
                  ].map((album, i) => (
                    <div
                      key={i}
                      className={`glass-card rounded-xl p-4 flex items-center gap-4 cursor-pointer transition-all ${
                        activeFeature === i ? 'bg-white/10 border-prism-yellow/50' : 'hover:bg-white/5'
                      }`}
                      onClick={() => setActiveFeature(i)}
                    >
                      <div className="text-3xl">{album.icon}</div>
                      <div className="flex-1">
                        <div className="font-semibold">{album.title}</div>
                        <div className="text-sm text-zinc-500">{album.count}</div>
                      </div>
                      {activeFeature === i && (
                        <div className="w-2 h-2 bg-prism-yellow rounded-full" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-zinc-900 to-deep-surface rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-ai-cyan/20 via-transparent to-neon-pink/20" />
                  <div className="relative z-10 text-6xl">📸</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="tech" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-prism-yellow/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 text-sm text-zinc-400">
              <span className="w-2 h-2 bg-prism-yellow rounded-full animate-pulse" />
              Powered by Neural Networks
            </div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Built on cutting-edge
              <br />
              <span className="text-ai-cyan">AI technology</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card rounded-2xl p-8">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-4">On-Device Processing</h3>
              <p className="text-zinc-400 leading-relaxed">
                All AI operations happen locally on your device using Apple Neural Engine and Core ML. Zero cloud dependency for analysis.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold mb-4">Privacy First</h3>
              <p className="text-zinc-400 leading-relaxed">
                Your photos never leave your device for AI processing. End-to-end encryption for sharing. No data mining.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4">Lightning Fast</h3>
              <p className="text-zinc-400 leading-relaxed">
                Process thousands of photos in seconds. Real-time object detection. Instant search results.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold mb-4">Creative Tools</h3>
              <p className="text-zinc-400 leading-relaxed">
                AI-powered filters, smart cropping, style transfer, and generative fill. Professional editing made simple.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass-card rounded-3xl p-12 md:p-20">
            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="text-6xl font-bold text-prism-yellow mb-4">10M+</div>
                <div className="text-xl text-zinc-400">Photos Analyzed</div>
              </div>
              <div>
                <div className="text-6xl font-bold text-ai-cyan mb-4">99.8%</div>
                <div className="text-xl text-zinc-400">Recognition Accuracy</div>
              </div>
              <div>
                <div className="text-6xl font-bold text-neon-pink mb-4">&lt;1s</div>
                <div className="text-xl text-zinc-400">Processing Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section id="privacy" className="py-32 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-neon-pink/20 rounded-full mb-8 glow-pink">
            <svg className="w-10 h-10 text-neon-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Your privacy is
            <br />
            <span className="text-neon-pink">non-negotiable</span>
          </h2>
          <p className="text-xl text-zinc-400 leading-relaxed mb-12">
            All AI processing happens on your device. Your photos are encrypted end-to-end. We never sell your data. Ever.
          </p>
          <button className="glass-card px-8 py-4 rounded-full font-semibold hover:bg-white/5 transition-all">
            Read Privacy Policy
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-prism-yellow/10 via-ai-cyan/10 to-neon-pink/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-6xl md:text-7xl font-bold tracking-tight mb-8">
            Ready to elevate
            <br />
            your memories?
          </h2>
          <p className="text-2xl text-zinc-400 mb-12">
            Join the waitlist for early access
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-6 py-4 rounded-full bg-deep-surface border border-white/10 focus:border-prism-yellow/50 outline-none transition"
            />
            <button className="w-full sm:w-auto bg-prism-yellow text-void-black px-8 py-4 rounded-full font-bold whitespace-nowrap hover:glow-yellow transition-all">
              Join Waitlist
            </button>
          </div>

          <p className="text-sm text-zinc-500 mt-6">
            No spam. Unsubscribe anytime. Launching Q1 2025.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-prism-yellow to-ai-cyan rounded-lg" />
              <span className="text-xl font-bold tracking-tight">Prism</span>
            </div>

            <div className="flex items-center gap-8 text-sm text-zinc-400">
              <a href="#" className="hover:text-white transition">Twitter</a>
              <a href="#" className="hover:text-white transition">Instagram</a>
              <a href="#" className="hover:text-white transition">Discord</a>
              <a href="#" className="hover:text-white transition">Contact</a>
            </div>

            <div className="text-sm text-zinc-500">
              © 2025 Prism. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
