
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqData = [
    {
        question: "Tôi hoàn toàn mới, không rành công nghệ có học được không?",
        answer: "Chắc chắn được! Khóa học được thiết kế từ cơ bản đến nâng cao, dành cho cả những người lần đầu tiếp xúc với AI."
    },
    {
        question: "Lớp học diễn ra online như thế nào?",
        answer: "Chúng ta sẽ học trực tiếp qua Zoom. Bạn sẽ được tương tác trực tiếp và hỏi đáp thoải mái."
    },
    {
        question: "Nếu bận không tham gia được buổi học thì sao?",
        answer: "Tất cả các buổi học đều được ghi hình lại. Bạn sẽ nhận được video để xem lại bất cứ lúc nào."
    }
];

const FaqItem: React.FC<{
    item: { question: string; answer: string };
    isOpen: boolean;
    onClick: () => void;
}> = ({ item, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-700">
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center text-left py-6"
            >
                <h3 className="text-lg font-semibold">{item.question}</h3>
                <ChevronDown
                    className={`w-6 h-6 transition-transform duration-300 text-[#00FFFF] ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>
            <div
                className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
                <div className="overflow-hidden">
                    <p className="pb-6 text-gray-400">{item.answer}</p>
                </div>
            </div>
        </div>
    );
};

const FaqSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 px-4 bg-[#1e293b]">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Câu hỏi thường gặp</h2>
                <div>
                    {faqData.map((item, index) => (
                        <FaqItem
                            key={index}
                            item={item}
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FaqSection;