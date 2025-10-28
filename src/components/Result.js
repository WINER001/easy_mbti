import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { personalityTypes } from '../data/personalityTypes';

const Result = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const resultType = type?.toUpperCase();
  const description = personalityTypes[resultType] || '暂无描述';

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 flex items-center justify-center p-4 w-full">
      <div className="max-w-4xl w-full mx-auto p-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20">
        <div className="text-center text-white">
          <i className="fas fa-star text-6xl mb-6 text-yellow-400"></i>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
            {resultType}
          </h1>
          <h2 className="text-2xl font-semibold mb-8 text-gray-200">你的性格类型</h2>
          <div className="bg-white/10 rounded-xl p-6 mb-8">
            <p className="text-lg leading-relaxed text-gray-200">{description}</p>
          </div>
          <div className="flex justify-center space-x-4">
            <button 
              onClick={() => navigate('/test')}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <i className="fas fa-redo mr-2"></i>重新测试
            </button>
            <button 
              onClick={() => navigate('/personalities')}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <i className="fas fa-users mr-2"></i>查看所有类型
            </button>
            <button 
              onClick={() => navigate('/')}
              className="bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <i className="fas fa-home mr-2"></i>返回首页
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
