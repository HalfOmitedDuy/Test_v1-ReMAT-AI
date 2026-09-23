import React, { useState } from 'react';
import { PageView } from '../types';
import { 
  Factory, ArrowUpRight, TrendingUp, CheckCircle2, ShieldCheck, 
  Sparkles, DollarSign, Calculator, Layers, HelpCircle, ArrowRight 
} from 'lucide-react';

interface SellersPageProps {
  onOpenEarlyAccess: (type: 'seller' | 'buyer' | 'both') => void;
  onOpenAIMatcher: () => void;
  onNavigate: (page: PageView) => void;
}

export const SellersPage: React.FC<SellersPageProps> = ({
  onOpenEarlyAccess,
  onOpenAIMatcher,
  onNavigate
}) => {
  // Interactive Waste Revenue Calculator
  const [calcCategory, setCalcCategory] = useState<'plastic' | 'textile' | 'metal' | 'wood'>('plastic');
  const [calcVolume, setCalcVolume] = useState<number>(25); // tấn/tháng

  const priceMap = {
    plastic: { avgPrice: 12000000, name: 'Nhựa kỹ thuật & bavia sạch', co2Factor: 1.6 },
    textile: { avgPrice: 5000000, name: 'Vải vụn & xơ dệt may', co2Factor: 2.8 },
    metal: { avgPrice: 43000000, name: 'Phoi tiện nhôm CNC tách dầu', co2Factor: 8.5 },
    wood: { avgPrice: 1550000, name: 'Mùn cưa & gỗ dăm sấy khô', co2Factor: 0.9 }
  };

  const selectedData = priceMap[calcCategory];
  const monthlyRevenue = calcVolume * selectedData.avgPrice;
  const annualRevenue = monthlyRevenue * 12;
  const annualCO2Saved = calcVolume * 12 * selectedData.co2Factor;

  const formatVND = (num: number) => {
    return new Intl.NumberFormat('vi-VN').format(num) + ' đ';
  };

  return (
    <div className="space-y-16 pb-20 pt-8">
      
      {/* Hero for Sellers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#122E22] via-[#1F6F50] to-[#2F9E6E] text-white rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-xl">
          <div className="max-w-2xl space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-xs text-emerald-200 text-xs font-bold uppercase tracking-wider">
              <Factory className="w-3.5 h-3.5" />
              Giải Pháp Cho Nhà Máy & Bên Cung Ứng
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Space_Grotesk'] leading-tight">
              Biến phế phẩm công nghiệp thành nguồn thu định kỳ
            </h1>

            <p className="text-sm sm:text-base text-emerald-100 leading-relaxed">
              Đừng để phế phẩm kỹ thuật bị bán tháo như ve chai hoặc tốn chi phí chôn lấp. Re:Mat AI kết nối trực tiếp nhà máy của bạn với các đơn vị tái chế và sản xuất có nhu cầu thực tế với mức giá cao hơn 25–40%.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                id="seller-hero-register-btn"
                onClick={() => onOpenEarlyAccess('seller')}
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-emerald-50 text-[#1F6F50] font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-98"
              >
                <span>Đăng ký Thẩm định Phế phẩm</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                id="seller-ai-classify-btn"
                onClick={onOpenAIMatcher}
                className="px-6 py-3.5 rounded-xl bg-emerald-900/50 hover:bg-emerald-900/80 border border-emerald-400/40 text-emerald-100 font-bold text-sm transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#2196C9]" />
                <span>Thử Phân Loại Bằng AI</span>
              </button>
            </div>
          </div>

          <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 opacity-10 pointer-events-none">
            <Factory className="w-[500px] h-[500px]" />
          </div>
        </div>
      </section>

      {/* Interactive Waste Value Calculator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200/90 shadow-xs space-y-8">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1F6F50]">
              <Calculator className="w-4 h-4" />
              Công Cụ Dự Tính Doanh Thu Phế Phẩm
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-['Space_Grotesk']">
              Nhà máy của bạn có thể thu về bao nhiêu?
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">
              Chọn loại vật liệu phát sinh và khối lượng bình quân để tính toán dòng tiền tuần hoàn.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Input Form Controls */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                  1. Chọn nhóm phế phẩm phát sinh:
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    onClick={() => setCalcCategory('plastic')}
                    className={`p-3 rounded-xl border text-xs font-bold text-left transition-all ${
                      calcCategory === 'plastic'
                        ? 'border-[#1F6F50] bg-emerald-50/80 text-[#1F6F50] ring-1 ring-[#1F6F50]'
                        : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    Nhựa PP / PE bavia
                  </button>
                  <button
                    onClick={() => setCalcCategory('textile')}
                    className={`p-3 rounded-xl border text-xs font-bold text-left transition-all ${
                      calcCategory === 'textile'
                        ? 'border-[#1F6F50] bg-emerald-50/80 text-[#1F6F50] ring-1 ring-[#1F6F50]'
                        : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    Vải vụn & Xơ may mặc
                  </button>
                  <button
                    onClick={() => setCalcCategory('metal')}
                    className={`p-3 rounded-xl border text-xs font-bold text-left transition-all ${
                      calcCategory === 'metal'
                        ? 'border-[#1F6F50] bg-emerald-50/80 text-[#1F6F50] ring-1 ring-[#1F6F50]'
                        : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    Phoi nhôm CNC ly tâm
                  </button>
                  <button
                    onClick={() => setCalcCategory('wood')}
                    className={`p-3 rounded-xl border text-xs font-bold text-left transition-all ${
                      calcCategory === 'wood'
                        ? 'border-[#1F6F50] bg-emerald-50/80 text-[#1F6F50] ring-1 ring-[#1F6F50]'
                        : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    Mùn cưa xưởng gỗ
                  </button>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                    2. Khối lượng phát sinh bình quân:
                  </label>
                  <span className="text-sm font-extrabold font-mono text-[#1F6F50] px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200">
                    {calcVolume} tấn / tháng
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="150"
                  step="5"
                  value={calcVolume}
                  onChange={(e) => setCalcVolume(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#1F6F50]"
                />
                <div className="flex justify-between text-[10px] text-gray-400 mt-1 font-mono">
                  <span>5 tấn</span>
                  <span>50 tấn</span>
                  <span>100 tấn</span>
                  <span>150 tấn</span>
                </div>
              </div>

              <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded-xl border border-gray-100 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-gray-400 shrink-0" />
                <span>Đơn giá tham chiếu bình quân thị trường Q1/2026: <strong>{formatVND(selectedData.avgPrice)} / tấn</strong>.</span>
              </div>
            </div>

            {/* Calculated Output Display Card */}
            <div className="lg:col-span-6 bg-gradient-to-br from-[#17382B] to-[#1F6F50] text-white rounded-2xl p-6 sm:p-8 space-y-6 shadow-md">
              <div className="border-b border-white/10 pb-4">
                <span className="text-xs uppercase font-bold text-emerald-300">
                  Dòng tiền tiềm năng tạo ra:
                </span>
                <div className="text-3xl sm:text-4xl font-black font-['Space_Grotesk'] text-white mt-1">
                  {formatVND(annualRevenue)}
                  <span className="text-xs font-normal text-emerald-200 block sm:inline sm:ml-2">/ năm</span>
                </div>
                <div className="text-xs text-emerald-100 mt-1">
                  Tương đương ~<strong className="text-white">{formatVND(monthlyRevenue)}</strong> mỗi tháng thay vì tốn phí tiêu hủy.
                </div>
              </div>

              {/* CO2 Impact */}
              <div className="bg-white/10 rounded-xl p-4 border border-white/10 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 uppercase">
                  <TrendingUp className="w-4 h-4 text-[#2196C9]" />
                  Đóng góp giảm phát thải Scope 3:
                </div>
                <div className="text-2xl font-bold font-mono text-white">
                  ~{annualCO2Saved.toFixed(1)} tấn CO₂e / năm
                </div>
                <p className="text-[11px] text-gray-300">
                  Cung cấp chứng từ số hóa cho báo cáo ESG & đáp ứng yêu cầu khách hàng xuất khẩu.
                </p>
              </div>

              <button
                onClick={() => onOpenEarlyAccess('seller')}
                className="w-full py-3 rounded-xl bg-white hover:bg-emerald-50 text-[#1F6F50] font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-1.5"
              >
                <span>Nhận tư vấn bao tiêu cho lượng {calcVolume} tấn này</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 4-Step Listing Process for Sellers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-wider text-[#1F6F50]">
            Quy trình 4 bước đơn giản
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-['Space_Grotesk']">
            Cách đăng tải và thanh lý phế phẩm
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-200/90 shadow-2xs space-y-3">
            <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-emerald-100 text-[#1F6F50] font-mono">
              Bước 1
            </span>
            <h4 className="text-base font-bold text-gray-900 font-['Space_Grotesk']">
              Chụp ảnh & Cung cấp thông số
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Tải ảnh lô hàng, đính kèm kết quả test lab sẵn có (hoặc yêu cầu Re:Mat lấy mẫu thử nghiệm).
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200/90 shadow-2xs space-y-3">
            <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-sky-100 text-[#0284C7] font-mono">
              Bước 2
            </span>
            <h4 className="text-base font-bold text-gray-900 font-['Space_Grotesk']">
              AI Tự động Chuẩn hóa & Gán thẻ
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              ReMat Engine trích xuất độ tinh khiết, mã HS và đối chiếu với danh mục doanh nghiệp đang tìm mua.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200/90 shadow-2xs space-y-3">
            <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-amber-100 text-amber-800 font-mono">
              Bước 3
            </span>
            <h4 className="text-base font-bold text-gray-900 font-['Space_Grotesk']">
              Xác thực Mẫu & Nhận báo giá
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Chuyên gia Re:Mat hỗ trợ gửi mẫu 2kg đến bên mua đã được xác thực Trust Score cao.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200/90 shadow-2xs space-y-3">
            <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-emerald-100 text-[#1F6F50] font-mono">
              Bước 4
            </span>
            <h4 className="text-base font-bold text-gray-900 font-['Space_Grotesk']">
              Ký Hợp Đồng & Nhận tiền
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Chốt hợp đồng bao tiêu định kỳ theo tháng hoặc theo lô, hỗ trợ tài khoản bảo chứng thanh toán T+3.
            </p>
          </div>
        </div>

        <div className="text-center pt-4">
          <button
            onClick={() => onOpenEarlyAccess('seller')}
            className="px-8 py-3.5 rounded-xl bg-[#1F6F50] hover:bg-[#18583f] text-white font-bold text-sm shadow-md transition-all inline-flex items-center gap-2"
          >
            <span>Bắt đầu Đăng phế phẩm ngay</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
};
