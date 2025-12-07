import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '+8801304190950';
  const message = 'Hire blockchain developer';

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        {isOpen && (
          <div className="absolute bottom-16 sm:bottom-20 right-0 mb-2 bg-white rounded-2xl shadow-2xl p-3 sm:p-4 min-w-[180px] sm:min-w-[200px] max-w-[220px] sm:max-w-[250px] animate-fade-in-up">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-bold text-gray-800 text-sm mb-1">Hire Blockchain Developer</h3>
                <p className="text-xs text-gray-600">{phoneNumber}</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </button>
          </div>
        )}
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
        </button>
      </div>
    </>
  );
};

