
import React from 'react';
import { Clock, Lightbulb, Bot } from 'lucide-react';

const problems = [
  {
    icon: <Clock className="w-12 h-12 text-[#00FFFF]" />,
    title: "Mệt mỏi vì công việc lặp lại",
    description: "Mất hàng giờ cho những việc mà AI có thể làm trong vài phút."
  },
  {
    icon: <Lightbulb className="w-12 h-12 text-[#00FFFF]" />,
    title: "Cạn kiệt ý tưởng sáng tạo",
    description: "Loay hoay, bế tắc khi cần viết lách, lên kế hoạch hay trình bày ý tưởng mới."
  },
  {
    icon: <Bot className="w-12 h-12 text-[#00FFFF]" />,
    title: "Thử dùng AI nhưng không hiệu quả",
    description: "Câu trả lời từ ChatGPT luôn chung chung và không áp dụng được vào công việc thực tế."
  }
];

const ProblemSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Bạn có đang lo sợ bị bỏ lại phía sau?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-[#1e293b] p-8 rounded-lg border border-gray-700/50 shadow-lg">
              <div className="flex justify-center mb-4">{problem.icon}</div>
              <h3 className="text-xl font-bold mb-2">{problem.title}</h3>
              <p className="text-gray-400">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;