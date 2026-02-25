import React from 'react';
import { Sparkles, Heart } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left side - Text content */}
          <div className="flex-1 text-center md:text-left space-y-6 animate-fadeInUp">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-100 rounded-full text-rose-600 font-medium">
              <Sparkles className="w-4 h-4" />
              <span>Bem-vinda ao meu espaço</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-800 font-['Fredoka'] leading-tight break-words max-w-full">
              Olá! Sou a<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600">
                Unicornio._.cintilante
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              Uma pré-adolescente apaixonada por matemática, voleibol, livros e descobrir coisas novas todos os dias!
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={scrollToPortfolio}
                className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Ver Portfolio
                <Sparkles className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                className="border-2 border-rose-500 text-rose-500 hover:bg-rose-50 px-8 py-6 text-lg rounded-full transition-all duration-300"
              >
                Conhece-me
              </Button>
            </div>
          </div>

          {/* Right side - Avatar */}
          <div className="flex-1 flex justify-center animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-400 rounded-3xl blur-3xl opacity-30 animate-pulse-slow"></div>
              <div className="relative bg-gradient-to-br from-rose-100 to-pink-100 p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="https://customer-assets.emergentagent.com/job_coders-unicorn/artifacts/wd9qpdfw_pixil-frame-0%20%2823%29.png"
                  alt="Unicornio Cintilante Avatar"
                  className="w-64 h-64 md:w-80 md:h-80 object-contain animate-float"
                />
                <div className="absolute -top-4 -right-4 bg-rose-500 text-white p-3 rounded-full shadow-lg animate-bounce">
                  <Heart className="w-6 h-6 fill-current" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;