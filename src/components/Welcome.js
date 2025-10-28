import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4 w-full">
      <div className="w-[900px] mx-auto p-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20">
        <div className="text-center text-white">
          <div className="flex items-center justify-center gap-6 mb-8">
            <i className="fas fa-brain text-7xl text-yellow-400"></i>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
              MBTI 性格测试
            </h1>
          </div>
          <p className="text-xl mb-3 text-gray-200">
            探索你的内心世界，发现真实的自己
          </p>
          <p className="text-lg mb-10 text-gray-300">
            通过72道精心设计的问题，深入了解你的性格类型
          </p>
          <div className="flex justify-center space-x-6">
            <button 
              onClick={() => navigate('/test')}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <i className="fas fa-play mr-2"></i>开始测试
            </button>
            <button 
              onClick={() => navigate('/personalities')}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <i className="fas fa-users mr-2"></i>查看类型
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
