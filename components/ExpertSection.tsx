
import React from 'react';

const ExpertSection: React.FC = () => {
    return (
        <section className="py-20 px-4 bg-[#0f172a]">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div className="flex justify-center">
                    <img 
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1887&auto=format&fit=crop" 
                        alt="Chuyên gia Phạm Anh Thơ"
                        className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-[#9D00FF] shadow-2xl shadow-purple-500/30"
                    />
                </div>
                <div className="text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Đồng hành cùng chuyên gia Phạm Anh Thơ</h2>
                    <p className="text-lg text-gray-300 italic leading-relaxed">
                        "Là một người đam mê công nghệ số tôi đã ứng dụng Chat GPT hiệu quả trong nhiều lĩnh vực như: Số hóa dữ liệu, xây dựng khóa học online, viết sách, sáng tác nhạc, thiết kế landing page, viết content, tư vấn cá nhân trong các lĩnh vực. Trong khóa học này, tôi sẽ chia sẻ cho bạn toàn bộ kinh nghiệm thực chiến đó - Những bí quyết mà bạn không thể tìm thấy ở bất kỳ đâu."
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ExpertSection;