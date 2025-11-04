import React from "react";
import "./WhatsAppOrderIllustration.css"; // we'll move animations here

const WhatsAppOrderIllustration = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-5 bg-gradient-to-br from-[#dcf8c6] to-[#25D366]">
      <div className="relative w-[600px] h-[600px]">
        {/* Candle decorations */}
        <div className="candle-decoration candle-1">🕯️</div>
        <div className="candle-decoration candle-2">🕯️</div>
        <div className="candle-decoration candle-3">🕯️</div>

        {/* Phone mockup */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[550px] bg-gray-800 rounded-[40px] shadow-2xl p-[15px]">
          <div className="w-full h-full bg-white rounded-[30px] overflow-hidden relative">
            {/* Header */}
            <div className="bg-[#075E54] p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f59e42] to-[#e67e22] flex items-center justify-center text-white font-bold text-lg">
                S
              </div>
              {/* <div className="w-30 h-10 rounded-full bg-gradient-to-br from-[#f59e42] to-[#e67e22] flex items-center justify-center overflow-hidden">
                <img
                    src="/asserts/img/logo2.png"
                    alt="Sharoma Candle"
                    className="w-full h-full object-cover"
                />
              </div> */}
              <div className="text-white font-semibold text-base">
                Sharoma Candle
              </div>
            </div>

            {/* Chat area */}
            <div className="bg-[#ece5dd] p-5 h-[calc(100%-130px)] overflow-hidden">
              <div className="message">
                <div className="message-text">Hi! I'd like to order candles 🕯️</div>
                <div className="message-time">10:30 AM</div>
              </div>

              <div className="message sent">
                <div className="message-text">
                  Hello! We'd love to help! 😊<br />
                  Which fragrance interests you?
                </div>
                <div className="message-time">10:31 AM</div>
              </div>

              <div className="message">
                <div className="message-text">
                  The Vanilla Bean looks amazing!
                </div>
                <div className="message-time">10:32 AM</div>
              </div>

              <div className="message sent">
                <div className="message-text">
                  Great choice! 🎉<br />
                  Special offer: 25% off today!
                </div>
                <div className="message-time">10:32 AM</div>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp Icon */}
        <div className="whatsapp-icon">
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[50px] h-[50px] fill-white"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppOrderIllustration;
