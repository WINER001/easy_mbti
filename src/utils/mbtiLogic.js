// MBTI测试结果计算逻辑
export const calculateResult = (answers) => {
  const types = [['E', 'I'], ['S', 'N'], ['T', 'F'], ['J', 'P']];
  
  // 统计每个维度的选择次数
  const counts = answers.reduce((acc, answer) => {
    acc[answer] = (acc[answer] || 0) + 1;
    return acc;
  }, {});
  
  // 对每个维度，选择次数更多的类型
  const result = types.map(([type1, type2]) => {
    const count1 = counts[type1] || 0;
    const count2 = counts[type2] || 0;
    return count1 > count2 ? type1 : type2;
  }).join('');
  
  return result;
};
