import React, { useState } from 'react';
import { Code, Calculator, PenTool, Volleyball, Plane, Award, ExternalLink, Sparkles } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { mockProjects } from '../data/mockData';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'Todos', icon: Sparkles },
    { id: 'coding', label: 'Programação', icon: Code },
    { id: 'math', label: 'Matemática', icon: Calculator },
    { id: 'writing', label: 'Escrita', icon: PenTool },
    { id: 'sports', label: 'Desporto', icon: Volleyball },
  ];

  const filteredProjects = filter === 'all' 
    ? mockProjects 
    : mockProjects.filter(project => project.category === filter);

  const getCategoryIcon = (category) => {
    const iconMap = {
      coding: Code,
      math: Calculator,
      writing: PenTool,
      sports: Volleyball,
      travel: Plane,
      achievement: Award,
    };
    return iconMap[category] || Sparkles;
  };

  return (
    <section id="portfolio" className="py-20 px-4 bg-gradient-to-b from-white to-rose-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-100 rounded-full text-rose-600 font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 font-['Fredoka'] mb-6">
            Os Meus Projetos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Uma coleção dos meus trabalhos e conquistas em diferentes áreas
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                variant={filter === cat.id ? 'default' : 'outline'}
                className={`rounded-full px-6 py-2 transition-all duration-300 ${
                  filter === cat.id
                    ? 'bg-rose-500 text-white hover:bg-rose-600 shadow-lg scale-105'
                    : 'border-2 border-rose-200 text-gray-700 hover:bg-rose-50 hover:border-rose-300'
                }`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {cat.label}
              </Button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const Icon = getCategoryIcon(project.category);
            return (
              <Card
                key={project.id}
                className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-rose-200 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 bg-gradient-to-br from-rose-100 to-pink-100 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="w-20 h-20 text-rose-300 group-hover:scale-125 transition-transform duration-500" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white text-rose-600 border-rose-200">
                      {project.date}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-xl text-gray-800 group-hover:text-rose-600 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="bg-rose-100 text-rose-700 hover:bg-rose-200">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button
                    variant="ghost"
                    className="w-full text-rose-500 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                  >
                    Ver Detalhes
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-rose-100 rounded-full mb-4">
              <Sparkles className="w-10 h-10 text-rose-400" />
            </div>
            <p className="text-gray-600 text-lg">Nenhum projeto encontrado nesta categoria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;