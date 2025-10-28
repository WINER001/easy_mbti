import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { questions } from '../data/questions';
import { calculateResult } from '../utils/mbtiLogic';

const Test = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  useEffect(() => {
    // 随机打乱题目顺序
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
  }, []);

  const handleAnswer = (choiceValue) => {
    const newAnswers = [...answers, choiceValue];
    setAnswers(newAnswers);
    
    if (currentQuestion + 1 >= shuffledQuestions.length) {
      // 测试完成，计算结果
      const result = calculateResult(newAnswers);
      navigate(`/result/${result}`);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
  };

  if (shuffledQuestions.length === 0) {
    return <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
      <div className="text-white text-xl">加载中...</div>
    </div>;
  }

  const question = shuffledQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / shuffledQuestions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4 w-full">
      <div className="w-[600px] mx-auto p-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20">
        {/* 进度条 */}
        <div className="mb-8">
          <div className="flex justify-between text-white mb-2">
            <span className="text-sm">问题 {currentQuestion + 1} / {shuffledQuestions.length}</span>
            <span className="text-sm">{progress.toFixed(1)}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        
        {/* 问题内容 */}
        <div className="text-center text-white mb-8">
          <h2 className="text-2xl font-bold mb-6">{question.question}</h2>
        </div>
        
        {/* 选项按钮 */}
        <div className="w-full space-y-4">
          <button
            onClick={() => handleAnswer(question.choice_a.value)}
            className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
          >
            {question.choice_a.text}
          </button>
          
          <button
            onClick={() => handleAnswer(question.choice_b.value)}
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
          >
            {question.choice_b.text}
          </button>
        </div>
        
        {/* 返回按钮 */}
        <button
          onClick={() => navigate('/')}
          className="mt-6 w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300"
        >
          返回首页
        </button>
      </div>
    </div>
  );
};

export default Test;
