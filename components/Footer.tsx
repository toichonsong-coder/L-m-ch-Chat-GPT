
import React from 'react';

const ZaloIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    className={className}
    fill="currentColor"
  >
    <path d="M22.5,17.5h-4.5v3h4.5c1.4,0,2.5-1.1,2.5-2.5v-1.5C25,18.1,23.9,17.5,22.5,17.5z" />
    <path d="M44,24c0,11-9,20-20,20S4,35,4,24S13,4,24,4S44,13,44,24z M29.5,21.5c-2.2,0-4,1.8-4,4v1h-1.5 c-1.4,0-2.5,1.1-2.5,2.5v1.5c0,0.6,0.4,1,1,1h3.5v-3.5c0-1.4,1.1-2.5,2.5-2.5h1.5C30.1,25.9,29.5,25.4,29.5,21.5z M34.5,21.5 c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4S36.7,21.5,34.5,21.5z M18,16c-1.1,0-2,0.9-2,2v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V18 c0-1.1-0.9-2-2-2H18z" />
  </svg>
);


const Footer: React.FC = () => {
    return (
        <footer className="bg-[#0f172a] border-t border-gray-700/50 py-12 px-4">
            <div className="max-w-6xl mx-auto text-center text-gray-400">
                <h3 className="text-xl font-bold text-white mb-2">Chuyên gia Phạm Anh Thơ</h3>
                <p className="mb-4">Email: toichonsong@gmail.com</p>
                <div className="flex justify-center items-center space-x-4 mb-8">
                    <a href="https://zalo.me/g/pfzlfr181" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <ZaloIcon className="w-8 h-8" />
                    </a>
                </div>
                <p>&copy; 2025 | Phát triển bởi Phạm Anh Thơ</p>
            </div>
        </footer>
    );
};

export default Footer;