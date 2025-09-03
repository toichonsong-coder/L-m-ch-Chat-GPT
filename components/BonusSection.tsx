import React, { useState, useEffect } from 'react';
import { Gift, BotMessageSquare } from 'lucide-react';

const bonuses = [
    {
        icon: <Gift className="w-12 h-12 text-[#00FFFF]" />,
        title: "Bộ gần 100 câu lệnh 'Vàng'",
        description: "Các câu lệnh đã được tối ưu cho mọi ngành nghề, chỉ cần sao chép và sử dụng."
    },
    {
        icon: <BotMessageSquare className="w-12 h-12 text-[#00FFFF]" />,
        title: "30 Trợ lý ảo được lập trình sẵn",
        description: "Trợ lý học tập - phát triển bản thân, Trợ lý kinh doanh, trợ lý khác... sẵn sàng phục vụ bạn 24/7."
    }
]

const BonusSection: React.FC = () => {
    const handleScrollToPricing = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const pricingSection = document.getElementById('pricing');
        if (pricingSection) {
          pricingSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 3);
        targetDate.setHours(23, 59, 59, 999);

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate.getTime() - now;

            if (distance < 0) {
                clearInterval(timer);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                setTimeLeft({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000),
                });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);
    
    const format = (num: number) => num.toString().padStart(2, '0');

    return (
        <section className="py-20 px-4 bg-[#1e293b]">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Đăng ký hôm nay - Nhận ngay "kho báu"</h2>
                <p className="text-2xl font-bold gradient-text mb-4">TRỊ GIÁ 500.000Đ</p>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
                    Đây không chỉ là một khóa học, đây là một bộ công cụ hoàn chỉnh để bạn bắt đầu.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {bonuses.map((bonus, index) => (
                        <div key={index} className="bg-[#0f172a] p-8 rounded-lg border border-gray-700/50 shadow-lg text-left flex items-center space-x-6">
                            <div className="flex-shrink-0">{bonus.icon}</div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">{bonus.title}</h3>
                                <p className="text-gray-400">{bonus.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <a 
                    href="#pricing"
                    onClick={handleScrollToPricing}
                    className="inline-block text-lg font-bold text-white bg-gradient-to-r from-[#00FFFF] to-[#9D00FF] px-10 py-4 rounded-lg shadow-lg shadow-cyan-500/30 transform hover:scale-105 transition-transform duration-300"
                >
                    GIỮ SUẤT ƯU ĐÃI VÀ BỘ QUÀ TẶNG
                </a>

                <div className="mt-12">
                    <h4 className="text-xl font-bold text-gray-200 mb-4">Ưu đãi đặc biệt sẽ kết thúc sau</h4>
                    <div className="flex justify-center items-center space-x-2 md:space-x-4 max-w-md mx-auto">
                        <div className="text-center bg-[#0f172a] p-4 rounded-lg w-1/4 border border-cyan-500/20">
                            <div className="text-4xl font-bold gradient-text">{format(timeLeft.days)}</div>
                            <div className="text-sm text-gray-400 mt-1">Ngày</div>
                        </div>
                        <div className="text-center bg-[#0f172a] p-4 rounded-lg w-1/4 border border-cyan-500/20">
                            <div className="text-4xl font-bold gradient-text">{format(timeLeft.hours)}</div>
                            <div className="text-sm text-gray-400 mt-1">Giờ</div>
                        </div>
                        <div className="text-center bg-[#0f172a] p-4 rounded-lg w-1/4 border border-cyan-500/20">
                            <div className="text-4xl font-bold gradient-text">{format(timeLeft.minutes)}</div>
                            <div className="text-sm text-gray-400 mt-1">Phút</div>
                        </div>
                        <div className="text-center bg-[#0f172a] p-4 rounded-lg w-1/4 border border-cyan-500/20">
                            <div className="text-4xl font-bold gradient-text">{format(timeLeft.seconds)}</div>
                            <div className="text-sm text-gray-400 mt-1">Giây</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BonusSection;