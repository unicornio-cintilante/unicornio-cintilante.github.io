import React from 'react';
import { Book, Plane, Calculator, Volleyball, Sparkles, PenTool, Users, Heart } from 'lucide-react';
import { Card } from './ui/card';

const About = () => {
  const interests = [
    { icon: Calculator, title: 'Matemática', description: 'Adoro resolver problemas e descobrir padrões' },
    { icon: Plane, title: 'Viajar', description: 'Explorar novos lugares e culturas' },
    { icon: Volleyball, title: 'Voleibol', description: 'Trabalho em equipa e diversão' },
    { icon: Book, title: 'Ler Livros', description: 'Mergulhar em histórias incríveis' },
    { icon: Sparkles, title: 'Aprender', description: 'Coisas novas todos os dias' },
    { icon: PenTool, title: 'Escrever', description: 'Quando estou inspirada' },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-100 rounded-full text-rose-600 font-medium mb-4">
            <Heart className="w-4 h-4" />
            <span>Sobre Mim</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 font-['Fredoka'] mb-6">
            A Minha História
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Olá! Sou uma pré-adolescente com muitas paixões e sonhos. Adoro passar tempo com pessoas de que gosto e aproveitar ao máximo cada momento que tenho.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              A <span className="font-semibold text-rose-600">Coders</span> é muito importante para mim porque aprendo muitas coisas novas, e sinto que o futuro vai ser muito baseado na programação.
            </p>
            <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-6 rounded-2xl border-l-4 border-rose-500">
              <div className="flex items-start gap-3">
                <Sparkles className="w-6 h-6 text-rose-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800 mb-2">O Meu Maior Sonho</p>
                  <p className="text-gray-700">Ter um futuro brilhante, repleto de alegria, amor e paz.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-rose-100 to-pink-100 p-8 rounded-3xl">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="font-bold text-xl text-gray-800 mb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-rose-500" />
                O Meu Conselho
              </h3>
              <p className="text-gray-700 italic leading-relaxed">
                "Aproveita o tempo que tens e com quem tens, pois nunca se sabe quando será a última vez."
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-10 font-['Fredoka']">
            As Minhas Paixões
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest, index) => {
              const Icon = interest.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-rose-200 bg-gradient-to-br from-white to-rose-50 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="p-4 bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-rose-500" />
                    </div>
                    <h4 className="font-bold text-lg text-gray-800">{interest.title}</h4>
                    <p className="text-gray-600 text-sm">{interest.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;