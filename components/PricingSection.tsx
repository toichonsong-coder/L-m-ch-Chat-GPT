import React from 'react';

const PricingSection: React.FC = () => {
    return (
        <section id="pricing" className="relative py-20 px-4 bg-[#0f172a]">
             <div className="absolute inset-0 z-0 opacity-30">
                <div className="absolute top-1/2 left-1/2 w-[1000px] h-[1000px] bg-gradient-to-tr from-[#9D00FF]/20 to-[#00FFFF]/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            <div className="relative z-10 max-w-3xl mx-auto text-center border-2 border-[#9D00FF] rounded-2xl p-8 md:p-12 bg-[#1e293b]/80 backdrop-blur-sm shadow-2xl shadow-purple-500/20">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Một khoản đầu tư thông minh nhất năm 2025</h2>
                <p className="text-gray-400 line-through mb-2">Giá trị thực: 1.000.000đ</p>
                <p className="text-lg text-gray-300 max-w-xl mx-auto mb-8">
                    Tuy nhiên, tôi muốn chia sẻ giá trị này đến nhiều người nhất. Mức phí ưu đãi hôm nay không phải là giá khóa học, mà là phí cam kết bạn sẽ tham gia nghiêm túc.
                </p>
                <div className="my-8">
                    <p className="text-7xl md:text-8xl font-extrabold gradient-text">100.000đ</p>
                </div>
                <p className="text-yellow-400 font-semibold mb-8">(Chỉ áp dụng cho 50 học viên đăng ký đầu tiên)</p>
                <a 
                    href="https://forms.gle/8E72UefbNkP9gz9B8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full max-w-md inline-block text-xl font-bold text-white bg-gradient-to-r from-[#00FFFF] to-[#9D00FF] px-10 py-5 rounded-lg shadow-lg shadow-cyan-500/30 transform hover:scale-105 transition-transform duration-300"
                >
                    ĐĂNG KÝ KHÓA HỌC NGAY
                </a>
            </div>
        </section>
    );
};

export default PricingSection;