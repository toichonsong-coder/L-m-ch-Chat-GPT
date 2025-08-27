import React from 'react';
import { Gift } from 'lucide-react';

const ExpertSection: React.FC = () => {
    return (
        <section className="py-20 px-4 bg-[#0f172a]">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div className="flex justify-center">
                    <img 
                        src="/expert-avatar.png" 
                        alt="Chuyên gia Phạm Anh Thơ"
                        className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-[#9D00FF] shadow-2xl shadow-purple-500/30"
                    />
                </div>
                <div className="text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Đồng hành cùng chuyên gia Phạm Anh Thơ</h2>
                    <p className="text-lg text-gray-300 italic leading-relaxed">
                        "Là một người đam mê công nghệ số tôi đã ứng dụng Chat GPT hiệu quả trong nhiều lĩnh vực như: Số hóa dữ liệu, xây dựng khóa học online, viết sách, sáng tác nhạc, thiết kế landing page, viết content, tư vấn cá nhân trong các lĩnh vực. Trong khóa học này, tôi sẽ chia sẻ cho bạn toàn bộ kinh nghiệm thực chiến đó - Những bí quyết mà bạn không thể tìm thấy ở bất kỳ đâu."
                    </p>
                    <div className="mt-8">
                        <a 
                          href="https://ductuenam.notion.site/AI-Landingpage-Mastery-2593dd5c7b3680068039f6733c057028"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-lg font-bold text-white bg-gradient-to-r from-[#00FFFF] to-[#9D00FF] px-8 py-4 rounded-lg shadow-lg shadow-cyan-500/30 transform hover:scale-105 transition-transform duration-300"
                        >
                          <Gift className="mr-3 h-6 w-6" />
                          Nhận Quà Tặng Đặc Biệt
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExpertSection;