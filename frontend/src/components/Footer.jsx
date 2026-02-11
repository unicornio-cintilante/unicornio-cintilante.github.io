import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-rose-500 to-pink-500 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-6 h-6" />
            <h3 className="text-2xl font-bold font-['Fredoka']">Unicornio._.cintilante</h3>
            <Sparkles className="w-6 h-6" />
          </div>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-lg italic opacity-90">
              "Aproveita o tempo que tens e com quem tens, pois nunca se sabe quando será a última vez."
            </p>
          </div>

          <div className="pt-6 border-t border-white/20">
            <p className="flex items-center justify-center gap-2 text-sm opacity-80">
              Feito com <Heart className="w-4 h-4 fill-current" /> em {currentYear}
            </p>
            <p className="text-xs opacity-60 mt-2">
              Um futuro brilhante começa hoje
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;