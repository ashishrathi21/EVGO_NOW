import React from 'react';
import { ArrowRight, Calendar, User } from 'lucide-react';

const Blog = () => {
  const articles = [
    {
      category: 'EV CHARGING',
      title: 'A User Guide for EV Owners: How to Locate Nearby EV Chargers',
      description: 'As electric vehicles first gain widespread understanding the charging they not need comprehensive...',
      image: 'https://images.pexels.com/photos/4022092/pexels-photo-4022092.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Admin',
      date: 'USER GUIDE'
    },
    {
      category: 'CHARGING TIPS',
      title: 'A Guide to Extending EV Battery Life: Tips and Best Practices',
      description: 'Electric vehicle (EV) batteries are at the heart of every EV and keeping one of them provides optimal...',
      image: 'https://images.pexels.com/photos/18167756/pexels-photo-18167756.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Admin',
      date: 'BATTERY LIFE'
    },
    {
      category: 'THE WORLD OF EVS',
      title: 'Choosing Between An Electric Vehicle & Gasoline Vehicle: Which Is Right For You?',
      description: 'As the automotive landscape evolves, the choice between electric vehicles and traditional ones...',
      image: 'https://images.pexels.com/photos/4022101/pexels-photo-4022101.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Admin',
      date: 'EV GUIDE'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <span className="bg-emerald-100 text-emerald-800 text-sm font-semibold px-4 py-2 rounded-full">
              OUR BLOG
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-4">
              Insights & Innovations In EV Charging
            </h2>
          </div>
          <button className="hidden md:flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 font-semibold transition-colors duration-200">
            <span>View All Blogs</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{article.date}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 group-hover:text-emerald-600 transition-colors duration-200">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 text-sm line-clamp-3">
                  {article.description}
                </p>
                
                <button className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 font-semibold text-sm transition-colors duration-200">
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;