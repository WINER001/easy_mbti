import React from 'react';
import { useNavigate } from 'react-router-dom';
import { personalityTypes } from '../data/personalityTypes';

const Personalities = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4 w-full">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center text-white mb-12">
          <i className="fas fa-users text-6xl mb-6 text-yellow-400"></i>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
            十六种人格类型
          </h1>
          <p className="text-xl text-gray-200">探索不同的人格类型，了解每种类型的独特特征</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {Object.entries(personalityTypes).map(([type, description]) => (
            <div 
              key={type}
              className="w-full bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
            >
              <h3 className="text-2xl font-bold text-white mb-3 text-center">{type}</h3>
              <p className="text-gray-200 text-sm leading-relaxed text-center">
                {description.length > 100 ? `${description.substring(0, 100)}...` : description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button 
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <i className="fas fa-home mr-2"></i>返回首页
          </button>
        </div>
      </div>
    </div>
  );
};

export default Personalities;
