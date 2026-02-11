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

        <div className="space-y-8 mb-16">
          {/* Texto Introdutório */}
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              Olá! Sou uma pré-adolescente com muitas paixões e sonhos. Adoro passar tempo com pessoas de que gosto e aproveitar ao máximo cada momento que tenho.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              A <span className="font-semibold text-rose-600">Coders</span> é muito importante para mim porque aprendo muitas coisas novas, e sinto que o futuro vai ser muito baseado na programação.
            </p>
          </div>

          {/* Cartões: Sonho, Medo e Conselho */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-2xl border-2 border-rose-200 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="p-3 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full">
                  <Sparkles className="w-8 h-8 text-rose-500" />
                </div>
                <h3 className="font-bold text-xl text-gray-800">O Meu Maior Sonho</h3>
                <p className="text-gray-700 leading-relaxed">
                  Ter um futuro brilhante, repleto de alegria, amor e paz.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-2xl border-2 border-pink-200 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="p-3 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full">
                  <Heart className="w-8 h-8 text-pink-500" />
                </div>
                <h3 className="font-bold text-xl text-gray-800">O Meu Maior Medo</h3>
                <p className="text-gray-700 leading-relaxed">
                  O futuro… Tenho medo de não ser um exemplo para alguém, não orgulhar as pessoas que mais amo e não aproveitar a vida ao máximo.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-2xl border-2 border-rose-200 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="p-3 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full">
                  <Users className="w-8 h-8 text-rose-500" />
                </div>
                <h3 className="font-bold text-xl text-gray-800">O Meu Conselho</h3>
                <p className="text-gray-700 italic leading-relaxed">
                  "Aproveita o tempo que tens e com quem tens, pois nunca se sabe quando será a última vez."
                </p>
              </div>
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