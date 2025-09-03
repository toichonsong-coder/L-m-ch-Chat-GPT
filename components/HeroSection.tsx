import React from 'react';

const HeroSection: React.FC = () => {
  const handleScrollToPricing = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative text-center px-4 py-32 md:py-40 overflow-hidden">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30 blur-sm"
        style={{ backgroundImage: `url('/hero-background.png')` }}
      />
      
      {/* Gradient Blob Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#00FFFF]/10 to-[#9D00FF]/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
          <span className="gradient-text">Làm chủ ChatGPT</span> chỉ trong vài giờ
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Biến AI thành trợ lý số 1, giúp bạn tăng 10X hiệu suất, đột phá sáng tạo và đi trước đối thủ trong mọi lĩnh vực.
        </p>
        <a 
          href="#pricing"
          onClick={handleScrollToPricing}
          className="inline-block text-lg font-bold text-white bg-gradient-to-r from-[#00FFFF] to-[#9D00FF] px-10 py-4 rounded-lg shadow-lg shadow-cyan-500/30 transform hover:scale-105 transition-transform duration-300"
        >
          Đăng ký ngay để nhận ưu đãi
        </a>
      </div>
    </section>
  );
};

export default HeroSection;