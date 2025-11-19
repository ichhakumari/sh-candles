import React from "react";
import "./WhatsAppOrderIllustration.css";

const WhatsAppOrderIllustration = () => {
  return (
    <div className="flex justify-center items-center w-full h-full p-2 bg-gradient-to-br from-[#dcf8c6] to-[#25D366] rounded-[20px]">
      <div className="relative w-full h-full flex justify-center items-center">
        {/* Phone mockup */}
        <div className="relative w-[50%] h-[95%] bg-gray-800 rounded-[20px] sm:rounded-[30px] shadow-2xl p-[4px] sm:p-[8px]">
          <div className="w-full h-full bg-white rounded-[16px] sm:rounded-[24px] overflow-hidden relative flex flex-col">
            {/* Header */}
            <div className="bg-[#075E54] flex items-center gap-2 p-2 shrink-0">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-[#f59e42] to-[#e67e22] flex items-center justify-center text-white font-bold text-xs sm:text-base">
                S
              </div>
              <div className="text-white font-semibold text-xs sm:text-sm">
                Sharoma Candle
              </div>
            </div>
            {/* Chat area */}
            <div className="bg-[#ece5dd] p-2 flex-grow overflow-y-auto">
              <div className="message mb-2">
                <div className="message-text text-[11px] sm:text-sm bg-white p-1.5 sm:p-2 rounded-lg shadow-sm inline-block max-w-[90%]">Hi! I'd like to order candles 🕯️</div>
                <div className="message-time text-[9px] sm:text-[10px] text-gray-500 mt-0.5 ml-1">10:30 AM</div>
              </div>
              <div className="message sent mb-2 flex flex-col items-end">
                <div className="message-text text-[11px] sm:text-sm bg-[#dcf8c6] p-1.5 sm:p-2 rounded-lg shadow-sm inline-block max-w-[90%] text-left">
                  Hello! We'd love to help! 😊<br />
                  Which fragrance interests you?
                </div>
                <div className="message-time text-[9px] sm:text-[10px] text-gray-500 mt-0.5 mr-1">10:31 AM</div>
              </div>
              <div className="message mb-2">
                <div className="message-text text-[11px] sm:text-sm bg-white p-1.5 sm:p-2 rounded-lg shadow-sm inline-block max-w-[90%]">
                  The Vanilla Bean looks amazing!
                </div>
                <div className="message-time text-[9px] sm:text-[10px] text-gray-500 mt-0.5 ml-1">10:32 AM</div>
              </div>
              <div className="message sent flex flex-col items-end">
                <div className="message-text text-[11px] sm:text-sm bg-[#dcf8c6] p-1.5 sm:p-2 rounded-lg shadow-sm inline-block max-w-[90%] text-left">
                  Great choice! 🎉<br />
                  Special offer: 25% off today!
                </div>
                <div className="message-time text-[9px] sm:text-[10px] text-gray-500 mt-0.5 mr-1">10:32 AM</div>
              </div>
            </div>
          </div>
        </div>
        {/* WhatsApp Icon */}
        <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 drop-shadow-lg">
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 sm:w-12 sm:h-12 fill-white"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppOrderIllustration;
