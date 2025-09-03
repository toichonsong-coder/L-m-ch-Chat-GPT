
import React from 'react';
import { BookOpen, BarChart3, Users } from 'lucide-react';

const benefits = [
    {
        icon: <BookOpen className="w-10 h-10 text-[#9D00FF]" />,
        title: "Sáng tạo nội dung đỉnh cao",
        description: "Soạn giáo án cho cả tuần trong 30 phút, viết content chuẩn SEO, phác thảo sách, sáng tác một bài hát hoàn chỉnh."
    },
    {
        icon: <BarChart3 className="w-10 h-10 text-[#9D00FF]" />,
        title: "Xây dựng chiến lược chuyên nghiệp",
        description: "Lên kế hoạch kinh doanh, phân tích thị trường, hay chuẩn bị nội dung tư vấn, coaching chỉ bằng vài câu lệnh."
    },
    {
        icon: <Users className="w-10 h-10 text-[#9D00FF]" />,
        title: "Tư vấn cá nhân",
        description: "Tư vấn, giải quyết các vấn đề bạn gặp phải trong cuộc sống một cách nhanh chóng và hiệu quả"
    }
];

const SolutionSection: React.FC = () => {
    return (
        <section className="py-20 px-4 bg-[#1e293b]">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Khóa học này sẽ là "vũ khí" dành cho bạn</h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-16">
                    Ngừng sử dụng AI như một công cụ tìm kiếm thông thường. Tôi sẽ chỉ cho bạn cách "ra lệnh" như một chuyên gia để biến ChatGPT thành một đội ngũ trợ lý đắc lực, phục vụ riêng cho mục tiêu của bạn.
                </p>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-12">Sau khóa học, bạn sẽ dễ dàng:</h3>

                <div className="grid md:grid-cols-3 gap-8 text-left">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start space-x-4 p-6 rounded-lg bg-[#0f172a] border border-gray-700/50">
                            <div className="flex-shrink-0">{benefit.icon}</div>
                            <div>
                                <h4 className="text-xl font-bold mb-2">{benefit.title}</h4>
                                <p className="text-gray-400">{benefit.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SolutionSection;