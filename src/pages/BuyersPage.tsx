import React, { useState } from 'react';
import { PageView } from '../types';
import { 
  Search, CheckCircle2, ShieldCheck, Sparkles, Filter, 
  Package, ArrowRight, Layers, FileCheck, Award, ArrowUpRight 
} from 'lucide-react';

interface BuyersPageProps {
  onOpenEarlyAccess: (type: 'seller' | 'buyer' | 'both') => void;
  onNavigate: (page: PageView) => void;
}

export const BuyersPage: React.FC<BuyersPageProps> = ({
  onOpenEarlyAccess,
  onNavigate
}) => {
  const [sourcingCategory, setSourcingCategory] = useState('plastic');
  const [sourcingVolume, setSourcingVolume] = useState('30 - 50 tấn/tháng');
  const [sourcingSpec, setSourcingSpec] = useState('');
  const [sourcingSuccess, setSourcingSuccess] = useState(false);

  const handleSourcingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSourcingSuccess(true);
    setTimeout(() => {
      setSourcingSuccess(false);
      setSourcingSpec('');
    }, 4500);
  };

  return (
    <div className="space-y-16 pb-20 pt-8">
      
      {/* Hero for Buyers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#0B253A] via-[#0284C7] to-[#2196C9] text-white rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-xl">
          <div className="max-w-2xl space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-xs text-sky-200 text-xs font-bold uppercase tracking-wider">
              <Search className="w-3.5 h-3.5" />
              Dành Cho Nhà Máy Tái Chế & Bên Thu Mua Nguyên Liệu
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Space_Grotesk'] leading-tight">
              Nguồn nguyên liệu thứ cấp sạch, đồng nhất và giá cạnh tranh
            </h1>

            <p className="text-sm sm:text-base text-sky-100 leading-relaxed">
              Cắt giảm 20% – 45% chi phí nguyên liệu thô đầu vào mà không phải lo lắng về rủi ro phẩm cấp. Mọi nguồn cung trên Re:Mat AI đều được kiểm tra độ ẩm, độ tinh khiết và xác thực điểm Trust Score nghiêm ngặt.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                id="buyer-hero-marketplace-btn"
                onClick={() => onNavigate('marketplace')}
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-sky-50 text-[#0284C7] font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-98"
              >
                <span>Khám phá Sàn Vật Liệu Live</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="buyer-hero-request-btn"
                onClick={() => onOpenEarlyAccess('buyer')}
                className="px-6 py-3.5 rounded-xl bg-sky-950/40 hover:bg-sky-950/70 border border-sky-300/40 text-white font-bold text-sm transition-all flex items-center justify-center gap-2"
              >
                <span>Gửi Nhu Cầu Tìm Nguồn Cung</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 opacity-10 pointer-events-none">
            <Search className="w-[500px] h-[500px]" />
          </div>
        </div>
      </section>

      {/* 4 Pillars of Buyer Safety */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-wider text-[#0284C7]">
            Cam kết chất lượng
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-['Space_Grotesk']">
            4 lớp bảo vệ an tâm cho Bên Thu Mua
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center">
              <FileCheck className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-gray-900 font-['Space_Grotesk']">
              Báo cáo QC Độc Lập
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Mọi lô hàng đều được kiểm định MFI, độ bền kéo, hàm lượng tro, độ ẩm bởi phòng lab SGS, Quatest hoặc Vinatest.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#1F6F50] flex items-center justify-center">
              <Package className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-gray-900 font-['Space_Grotesk']">
              Nhận Mẫu Thử Miễn Phí
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Re:Mat hỗ trợ gửi 2kg – 5kg mẫu thực tế đến phòng R&D hoặc xưởng của bạn để chạy thử trên khuôn máy trước khi ký kết.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-gray-900 font-['Space_Grotesk']">
              Bộ Lọc Trust Score
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Chỉ giao dịch với các nhà máy đạt xếp hạng Trust Score Vàng hoặc Bạch Kim, lịch sử giao hàng đúng phẩm cấp 100%.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-gray-900 font-['Space_Grotesk']">
              Bảo Chứng Thanh Toán T+3
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Tiền đặt cọc được giữ an toàn trong tài khoản bảo chứng; chỉ giải ngân sau khi bạn nhận hàng và xác nhận đúng thông số.
            </p>
          </div>

        </div>
      </section>

      {/* Sourcing Request Box */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-sky-200 shadow-sm space-y-6">
          <div className="space-y-2 text-center max-w-lg mx-auto">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0284C7]">
              <Sparkles className="w-4 h-4 text-[#2196C9]" />
              Dịch vụ Sourcing Chuyên Biệt
            </div>
            <h3 className="text-2xl font-bold text-gray-900 font-['Space_Grotesk']">
              Bạn chưa tìm thấy loại phế phẩm mong muốn?
            </h3>
            <p className="text-xs text-gray-600">
              Hãy để ReMat Intelligence Engine quét hệ thống mạng lưới hơn 140 nhà máy tại các KCN để tìm nguồn cung chính xác theo tiêu chuẩn của bạn.
            </p>
          </div>

          {sourcingSuccess ? (
            <div className="p-6 bg-sky-50 border border-sky-200 rounded-2xl text-center space-y-2">
              <CheckCircle2 className="w-8 h-8 mx-auto text-[#0284C7]" />
              <div className="text-sm font-bold text-sky-950">Đã gửi yêu cầu Sourcing!</div>
              <p className="text-xs text-gray-600 max-w-sm mx-auto">
                Đội ngũ chuyên gia vật liệu Re:Mat sẽ rà soát các mẻ phế phẩm sắp phát sinh và liên hệ lại với bạn trong 24h.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSourcingSubmit} className="space-y-4 max-w-xl mx-auto text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Nhóm nguyên liệu cần tìm
                  </label>
                  <select
                    value={sourcingCategory}
                    onChange={(e) => setSourcingCategory(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20 focus:border-[#0284C7] bg-white"
                  >
                    <option value="plastic">Nhựa PP/PE/ABS tái sinh & bavia</option>
                    <option value="textile">Vụn vải dệt may & xơ sợi tái chế</option>
                    <option value="metal">Phoi nhôm / đồng gia công CNC</option>
                    <option value="wood">Mùn cưa & dăm gỗ khối lượng lớn</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Nhu cầu thu mua định kỳ
                  </label>
                  <select
                    value={sourcingVolume}
                    onChange={(e) => setSourcingVolume(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20 focus:border-[#0284C7] bg-white"
                  >
                    <option value="10 - 30 tấn/tháng">10 - 30 tấn / tháng</option>
                    <option value="30 - 60 tấn/tháng">30 - 60 tấn / tháng</option>
                    <option value="Trên 60 tấn/tháng">Trên 60 tấn / tháng (Bao tiêu lớn)</option>
                    <option value="Mua theo lô thử nghiệm">Mua theo lô thử nghiệm</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Yêu cầu kỹ thuật đặc thù (MFI, độ ẩm, tạp chất, vị trí nhận hàng...)
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="VD: Cần tìm nguồn màng PE sạch dỡ pallet hoặc nhựa PP bavia đen chỉ số MFI từ 10-14 g/10min, nhà máy ở Long An hoặc Bình Dương..."
                  value={sourcingSpec}
                  onChange={(e) => setSourcingSpec(e.target.value)}
                  className="w-full p-3 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20 focus:border-[#0284C7]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Gửi Yêu Cầu Tìm Nguồn Cung Cho Chúng Tôi</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

        </div>
      </section>

    </div>
  );
};
