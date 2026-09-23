import React, { useState } from 'react';
import { PageView, MaterialListing } from '../types';
import { MOCK_LISTINGS } from '../data/mockData';
import { TrustScoreBadge } from '../components/TrustScoreBadge';
import { 
  ArrowUpRight, Search, Sparkles, ShieldCheck, Factory, 
  RefreshCw, TrendingUp, CheckCircle2, Award, ArrowRight, 
  Layers, Package, FileText, ChevronRight, Zap, Users, Building2,
  Camera, Truck, Star, Navigation, MapPin
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageView) => void;
  onOpenEarlyAccess: (type: 'seller' | 'buyer' | 'both') => void;
  onSelectListing: (listingId: string) => void;
  onOpenAIMatcher: () => void;
  onOpenAIRecognition?: () => void;
  onOpenLogistics?: () => void;
  onOpenReview?: () => void;
  onOpenAuth?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenEarlyAccess,
  onSelectListing,
  onOpenAIMatcher,
  onOpenAIRecognition,
  onOpenLogistics,
  onOpenReview,
  onOpenAuth
}) => {
  // Inline early access quick form
  const [inlineEmail, setInlineEmail] = useState('');
  const [inlineType, setInlineType] = useState<'seller' | 'buyer' | 'both'>('seller');
  const [inlineCategory, setInlineCategory] = useState('plastic');
  const [inlineSuccess, setInlineSuccess] = useState(false);

  const handleInlineSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inlineEmail) return;
    setInlineSuccess(true);
    setTimeout(() => {
      setInlineSuccess(false);
      setInlineEmail('');
    }, 4500);
  };

  const featuredListings = MOCK_LISTINGS.slice(0, 3);

  return (
    <div className="space-y-20 pb-20">
      
      {/* 1. HERO SECTION WITH GLOBAL ROTATING 2D EARTH BACKGROUND */}
      <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden min-h-[580px] md:min-h-[660px] flex items-center justify-center">
        
        {/* Foreground Content (sitting cleanly on top of the global bright 2D rotating background) */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          
          {/* Sub-badge: Nền tảng B2B Kinh tế Tuần hoàn Thông minh */}
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#1F6F50]/25 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-[#2F9E6E] animate-ping" />
              <span className="text-xs font-bold text-[#1F6F50] uppercase tracking-wider">
                Nền tảng B2B Kinh tế Tuần hoàn Thông minh
              </span>
              <span className="text-xs text-gray-300">•</span>
              <span className="text-xs font-semibold text-[#0284C7] flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#2196C9]" />
                ReMat Intelligence
              </span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="space-y-4 max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#172B23] tracking-tight font-['Space_Grotesk'] leading-[1.15]">
              Vòng đời mới cho <br className="hidden sm:block" />
              <span className="inline-block text-[#1F6F50] bg-gradient-to-r from-[#1F6F50] via-[#2F9E6E] to-[#0284C7] bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                vật liệu công nghiệp cũ
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#264235] max-w-2xl mx-auto font-medium leading-relaxed bg-white/60 md:bg-transparent backdrop-blur-2xs md:backdrop-blur-none p-2 md:p-0 rounded-xl">
              Kết nối trực tiếp bên phát sinh phế phẩm và bên cần nguyên liệu thứ cấp thông qua AI phân loại quang phổ, tối ưu logistics hai chiều & bảo chứng Trust Score minh bạch.
            </p>
          </div>

          {/* 2 Distinct Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 max-w-md mx-auto sm:max-w-none">
            
            {/* Seller CTA - Emerald Green */}
            <button
              id="hero-seller-btn"
              onClick={() => onOpenEarlyAccess('seller')}
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#1F6F50] hover:bg-[#18583f] text-white font-bold text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 active:scale-98 group"
            >
              <Factory className="w-5 h-5 text-emerald-300 group-hover:scale-110 transition-transform" />
              <span>Tôi có phế phẩm cần bán</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>

            {/* Buyer CTA - Tech Cyan/Blue */}
            <button
              id="hero-buyer-btn"
              onClick={() => onOpenEarlyAccess('buyer')}
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 active:scale-98 group"
            >
              <Search className="w-5 h-5 text-sky-200 group-hover:scale-110 transition-transform" />
              <span>Tôi cần tìm nguyên liệu</span>
              <ArrowRight className="w-5 h-5" />
            </button>

          </div>

          {/* Sub-note on Model Boundary */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-600 pt-2 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#2F9E6E]" />
              Mô hình matching, không đội phí trung gian
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#2196C9]" />
              Xác thực Human-in-the-loop trước khi ký kết
            </span>
            <span className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-600" />
              Đánh giá Trust Score tích lũy thực tế
            </span>
          </div>

        </div>
      </section>

      {/* NEW SECTION: BỘ 3 CÔNG CỤ CÔNG NGHỆ (AI Scanner, Smart Logistics, Trust Score Rating) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-emerald-200/80 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-gray-100 pb-5">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1F6F50] uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5 text-[#2196C9]" />
                Công Nghệ Đột Phá B2B Re:Mat
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-['Space_Grotesk']">
                3 Trụ Cột Tối Ưu Hóa Giao Dịch Vật Liệu Thứ Cấp
              </h2>
            </div>
            <p className="text-xs text-gray-500 max-w-sm sm:text-right">
              Tích hợp thị giác máy tính, tối ưu hóa cung đường KCN và hệ thống xếp hạng tín nhiệm cộng đồng.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Feature 1: AI Waste Recognition */}
            <div 
              onClick={onOpenAIRecognition}
              className="bg-gradient-to-br from-emerald-50/70 to-white p-6 rounded-2xl border border-emerald-200 hover:border-[#1F6F50] shadow-2xs hover:shadow-md transition-all group cursor-pointer flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#1F6F50] text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                  <Camera className="w-6 h-6 text-emerald-200" />
                </div>
                <h3 className="text-base font-bold text-gray-900 font-['Space_Grotesk'] group-hover:text-[#1F6F50] transition-colors">
                  Nhận Diện Phế Phẩm AI
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Chụp hoặc tải ảnh lô vật liệu tại xưởng. AI tự động phân tích độ tinh khiết, cấu trúc hạt/bavia, dự đoán mã HS Code và định giá tham chiếu thị trường trong 3 giây.
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs font-bold text-[#1F6F50]">
                <span>Thử nghiệm Quét Mẫu</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Feature 2: Logistics Cost Optimizer */}
            <div 
              onClick={onOpenLogistics}
              className="bg-gradient-to-br from-sky-50/70 to-white p-6 rounded-2xl border border-sky-200 hover:border-[#0284C7] shadow-2xs hover:shadow-md transition-all group cursor-pointer flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#0284C7] text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                  <Truck className="w-6 h-6 text-sky-100" />
                </div>
                <h3 className="text-base font-bold text-gray-900 font-['Space_Grotesk'] group-hover:text-[#0284C7] transition-colors">
                  Tối Ưu Logistics 2 Chiều
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Tính toán khoảng cách chính xác giữa KCN của bên mua và bên bán. Thuật toán ghép xe khứ hồi (Backhaul Sharing) giúp tiết kiệm từ 25% – 42% cước xe và giảm phát thải CO₂.
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs font-bold text-[#0284C7]">
                <span>Tính Cước & Tuyến Ghép</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Feature 3: Rating & Trust Score System */}
            <div 
              onClick={onOpenReview}
              className="bg-gradient-to-br from-amber-50/70 to-white p-6 rounded-2xl border border-amber-200 hover:border-amber-500 shadow-2xs hover:shadow-md transition-all group cursor-pointer flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                  <Star className="w-6 h-6 fill-current" />
                </div>
                <h3 className="text-base font-bold text-gray-900 font-['Space_Grotesk'] group-hover:text-amber-700 transition-colors">
                  Đánh Giá Lượt Mua / Bán
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Đăng nhập tài khoản doanh nghiệp đã đối soát MST để đánh giá phẩm cấp, tiến độ giao hàng sau mỗi giao dịch. Điểm đánh giá phản ánh trực tiếp vào Trust Score đối tác theo thời gian thực.
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs font-bold text-amber-700">
                <span>Gửi Đánh Giá Giao Dịch</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Quick AI Matcher Banner Prompt */}
      <div className="pt-2 max-w-3xl mx-auto px-4">
            <div 
              onClick={onOpenAIMatcher}
              className="p-3 sm:p-3.5 rounded-2xl bg-white border border-[#2196C9]/30 shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center justify-between gap-3 text-left group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Sparkles className="w-5 h-5 text-[#2196C9]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900 group-hover:text-[#0284C7] transition-colors">
                    Thử nghiệm ReMat Intelligence Engine
                  </div>
                  <div className="text-[11px] text-gray-500">
                    Nhập mô tả lô phế phẩm (nhựa, dệt may, phoi kim loại...) để AI định giá & tìm đối tác
                  </div>
                </div>
              </div>
              <span className="text-xs font-bold text-[#0284C7] shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-lg bg-sky-50 group-hover:bg-sky-100">
                Thử ngay <ChevronRight className="w-4 h-4" />
              </span>
            </div>
      </div>

      {/* 2. LIVE METRICS TICKER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-gray-200/90 shadow-2xs p-6 md:p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
            
            <div className="pt-4 lg:pt-0 lg:px-4 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#1F6F50] font-['Space_Grotesk']">
                18,450+
              </div>
              <div className="text-xs sm:text-sm font-semibold text-gray-800 mt-1">
                Tấn vật liệu đã tuần hoàn
              </div>
              <div className="text-[11px] text-gray-500 mt-0.5">
                Cứu khỏi các bãi rác công nghiệp
              </div>
            </div>

            <div className="pt-4 lg:pt-0 lg:px-4 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#0284C7] font-['Space_Grotesk']">
                94.8%
              </div>
              <div className="text-xs sm:text-sm font-semibold text-gray-800 mt-1">
                Tỷ lệ AI Matching chính xác
              </div>
              <div className="text-[11px] text-gray-500 mt-0.5">
                Độ tương thích thông số kỹ thuật
              </div>
            </div>

            <div className="pt-4 lg:pt-0 lg:px-4 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-700 font-['Space_Grotesk']">
                140+
              </div>
              <div className="text-xs sm:text-sm font-semibold text-gray-800 mt-1">
                Nhà máy kiểm định Trust Score
              </div>
              <div className="text-[11px] text-gray-500 mt-0.5">
                Khu CN Bình Dương, Đồng Nai, Bắc Ninh
              </div>
            </div>

            <div className="pt-4 lg:pt-0 lg:px-4 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 font-['Space_Grotesk']">
                32.5%
              </div>
              <div className="text-xs sm:text-sm font-semibold text-gray-800 mt-1">
                Tiết kiệm chi phí đầu vào
              </div>
              <div className="text-[11px] text-gray-500 mt-0.5">
                So với nhập nguyên sinh 100%
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CÁCH HOẠT ĐỘNG (3 BƯỚC TINH GỌN) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-[#1F6F50]">
            Quy trình vận hành
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 font-['Space_Grotesk']">
            Cách thức Re:Mat AI hoạt động
          </h2>
          <p className="text-sm text-gray-600 max-w-xl mx-auto">
            Chuẩn hóa 3 bước giúp doanh nghiệp biến phế phẩm thành nguồn thu và giúp nhà máy tìm nguyên liệu với sự bảo chứng cao nhất.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Step 1 */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200/90 shadow-2xs space-y-4 hover:border-[#1F6F50] transition-colors group">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#1F6F50] flex items-center justify-center font-bold text-lg group-hover:scale-105 transition-transform">
                <FileText className="w-6 h-6" />
              </div>
              <span className="text-2xl font-black font-mono text-gray-200 group-hover:text-emerald-200 transition-colors">
                01
              </span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 font-['Space_Grotesk']">
              1. Khai báo & Trích xuất thông số
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Bên bán hoặc bên mua chỉ cần cung cấp thông tin lô hàng. Hệ thống tự động phân loại mã phế liệu, độ tinh khiết, độ ẩm và quy chuẩn bao bì đóng gói.
            </p>
            <div className="pt-2 text-xs text-[#1F6F50] font-semibold flex items-center gap-1">
              <span>Hỗ trợ tải phiếu test lab hoặc ảnh chụp</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200/90 shadow-2xs space-y-4 hover:border-[#2196C9] transition-colors group">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center font-bold text-lg group-hover:scale-105 transition-transform">
                <Sparkles className="w-6 h-6 text-[#2196C9]" />
              </div>
              <span className="text-2xl font-black font-mono text-gray-200 group-hover:text-sky-200 transition-colors">
                02
              </span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 font-['Space_Grotesk']">
              2. ReMat Engine AI Gợi ý Ghép Cặp
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Thuật toán Vector Matching đối sánh nhu cầu kỹ thuật, khối lượng phát sinh hàng tháng, bán kính vận chuyển KCN và khung giá thị trường tối ưu cho cả hai bên.
            </p>
            <div className="pt-2 text-xs text-[#0284C7] font-semibold flex items-center gap-1">
              <span>Tự động thông báo khi có lô hàng phù hợp</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200/90 shadow-2xs space-y-4 hover:border-amber-400 transition-colors group">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="text-2xl font-black font-mono text-gray-200 group-hover:text-amber-200 transition-colors">
                03
              </span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 font-['Space_Grotesk']">
              3. Xác minh QC & Chốt giao dịch
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Chuyên gia thẩm định (Human-in-the-loop) kiểm tra mẫu thực địa và hồ sơ pháp lý môi trường trước khi ký hợp đồng nguyên tắc hoặc mở tài khoản ký quỹ.
            </p>
            <div className="pt-2 text-xs text-amber-800 font-semibold flex items-center gap-1">
              <span>An toàn pháp lý 100%, bảo mật B2B</span>
            </div>
          </div>

        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => onNavigate('how-it-works')}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#1F6F50] hover:text-[#18583f] hover:underline"
          >
            <span>Tìm hiểu chi tiết cơ chế ReMat Engine & Mạng lưới QC</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 4. PHẦN GIỚI THIỆU TRUST SCORE (TRỰC QUAN & RÕ RÀNG) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#17382B] to-[#12231C] text-white rounded-3xl p-8 sm:p-12 overflow-hidden relative">
          
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#2196C9]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Theory & Formula */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5 text-[#2196C9]" />
                Hệ Thống Tín Nhiệm B2B
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-['Space_Grotesk'] leading-tight">
                Trust Score: Loại bỏ rủi ro gian lận phẩm cấp phế liệu
              </h2>

              <p className="text-sm text-gray-300 leading-relaxed">
                Nỗi sợ lớn nhất của doanh nghiệp mua phế phẩm là nhận phải hàng bẩn, lẫn tạp chất hoặc doanh nghiệp bán "nói một đằng giao một nẻo". Re:Mat AI xây dựng thang điểm 100 dựa trên 4 trụ cột khách quan được kiểm định liên tục.
              </p>

              {/* 4 Pillars Breakdown Visual */}
              <div className="space-y-3 pt-2">
                
                <div className="bg-white/5 border border-white/10 p-3 rounded-xl flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center font-mono">
                      25%
                    </span>
                    <div>
                      <span className="font-bold text-white block">Pháp lý & Giấy phép môi trường</span>
                      <span className="text-[11px] text-gray-400">ĐKKD hợp lệ, hồ sơ cam kết bảo vệ môi trường, PCCC nhà xưởng</span>
                    </div>
                  </div>
                  <span className="text-emerald-400 font-mono font-bold">25đ</span>
                </div>

                <div className="bg-white/5 border border-white/10 p-3 rounded-xl flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-md bg-[#2F9E6E]/20 text-[#2F9E6E] font-bold flex items-center justify-center font-mono">
                      30%
                    </span>
                    <div>
                      <span className="font-bold text-white block">Kiểm định Mẫu Thử & Lab Test</span>
                      <span className="text-[11px] text-gray-400">Độ tinh khiết, độ ẩm, độ đồng nhất kiểm nghiệm bởi Quatest/Vinatest/SGS</span>
                    </div>
                  </div>
                  <span className="text-emerald-400 font-mono font-bold">30đ</span>
                </div>

                <div className="bg-white/5 border border-white/10 p-3 rounded-xl flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-md bg-sky-500/20 text-sky-400 font-bold flex items-center justify-center font-mono">
                      25%
                    </span>
                    <div>
                      <span className="font-bold text-white block">Lịch sử Giao kết & Tỷ lệ hoàn thành</span>
                      <span className="text-[11px] text-gray-400">Giao đúng hẹn, đúng khối lượng, không hủy kèo vào phút chót</span>
                    </div>
                  </div>
                  <span className="text-sky-400 font-mono font-bold">25đ</span>
                </div>

                <div className="bg-white/5 border border-white/10 p-3 rounded-xl flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-md bg-indigo-500/20 text-indigo-400 font-bold flex items-center justify-center font-mono">
                      20%
                    </span>
                    <div>
                      <span className="font-bold text-white block">Đánh giá từ Đối tác & Tỷ lệ khiếu nại</span>
                      <span className="text-[11px] text-gray-400">Phản hồi 5 sao từ nhà máy đối ứng, đối soát thanh toán minh bạch</span>
                    </div>
                  </div>
                  <span className="text-indigo-400 font-mono font-bold">20đ</span>
                </div>

              </div>

            </div>

            {/* Right Column: Visual Trust Score Showcase Card */}
            <div className="lg:col-span-6 bg-white text-gray-900 rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-bold text-gray-400">
                    Mẫu chứng thư tín nhiệm
                  </span>
                  <h4 className="text-base font-bold text-gray-900 mt-0.5">
                    Công ty CP Nhựa Kỹ Thuật Tân Á Châu
                  </h4>
                  <span className="text-xs text-gray-500">KCN VSIP 1, Bình Dương</span>
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-100 text-[#1F6F50] text-xs font-extrabold uppercase">
                  Hạng Bạch Kim
                </div>
              </div>

              {/* Gauge & High Score */}
              <div className="flex items-center gap-6">
                <div className="relative w-24 h-24 flex items-center justify-center shrink-0">
                  <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-gray-100"
                      strokeWidth="3.5"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      stroke="#1F6F50"
                      strokeDasharray="94, 100"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="absolute text-center">
                    <span className="text-2xl font-extrabold font-mono text-gray-900 leading-none">94</span>
                    <span className="text-[10px] text-gray-400 block font-semibold">/100</span>
                  </div>
                </div>

                <div className="space-y-1 text-xs">
                  <div className="font-bold text-emerald-800 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#2F9E6E]" />
                    Độ tin cậy Tuyệt Đối (Top 5% Nền Tảng)
                  </div>
                  <p className="text-gray-600 text-[11px] leading-relaxed">
                    18 lô phế phẩm nhựa bavia PP đã giao dịch thành công. 0 vụ tranh chấp chất lượng. Được Re:Mat bảo chứng thanh toán T+3.
                  </p>
                </div>
              </div>

              {/* Visual Bars */}
              <div className="space-y-2 pt-2 border-t border-gray-100 text-xs">
                <div>
                  <div className="flex justify-between text-gray-600 mb-0.5 text-[11px]">
                    <span>Hồ sơ Pháp lý & Môi trường:</span>
                    <span className="font-bold text-gray-900 font-mono">24/25</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-100 rounded-full">
                    <div className="w-[96%] h-full bg-[#1F6F50] rounded-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-gray-600 mb-0.5 text-[11px]">
                    <span>Kiểm định QC Lab mẫu thử:</span>
                    <span className="font-bold text-gray-900 font-mono">29/30</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-100 rounded-full">
                    <div className="w-[97%] h-full bg-[#2F9E6E] rounded-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-gray-600 mb-0.5 text-[11px]">
                    <span>Tỷ lệ hoàn thành đúng hẹn:</span>
                    <span className="font-bold text-gray-900 font-mono">23/25</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-100 rounded-full">
                    <div className="w-[92%] h-full bg-[#2196C9] rounded-full" />
                  </div>
                </div>
              </div>

              <div className="pt-2 flex justify-between items-center text-xs">
                <span className="text-gray-500 font-mono text-[11px]">Kỳ kiểm định: 15/02/2026</span>
                <span className="text-[#1F6F50] font-bold flex items-center gap-1">
                  Đã thẩm định hiện trường ✓
                </span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 5. VÌ SAO CHỌN RE:MAT AI (LỢI ÍCH BÊN BÁN VS BÊN MUA) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-[#0284C7]">
            Giá trị đôi bên cùng có lợi
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 font-['Space_Grotesk']">
            Vì sao các nhà máy công nghiệp chọn Re:Mat AI?
          </h2>
          <p className="text-sm text-gray-600 max-w-xl mx-auto">
            Giải quyết điểm nghẽn lớn nhất của kinh tế tuần hoàn: Minh bạch chất lượng và bảo mật thông tin kinh doanh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Sellers Benefit Card */}
          <div className="bg-white rounded-3xl p-8 border border-emerald-200/90 shadow-2xs space-y-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#1F6F50] flex items-center justify-center">
                <Factory className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase text-[#1F6F50]">Dành cho Bên Cung (Sellers)</span>
                <h3 className="text-xl font-bold text-gray-900 font-['Space_Grotesk']">
                  Biến gánh nặng rác thải thành dòng doanh thu mới
                </h3>
              </div>
            </div>

            <ul className="space-y-3.5 text-xs sm:text-sm text-gray-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2F9E6E] shrink-0 mt-0.5" />
                <span><strong>Tối đa hóa giá trị thanh lý:</strong> Không bị ép giá như bán ve chai truyền thống; tiếp cận mạng lưới người mua sản xuất trực tiếp.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2F9E6E] shrink-0 mt-0.5" />
                <span><strong>Giải phóng mặt bằng kho bãi:</strong> Thiết lập chu kỳ gom định kỳ 2-4 tuần/lần, không lo phế phẩm ùn ứ cản trở dây chuyền.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2F9E6E] shrink-0 mt-0.5" />
                <span><strong>Chứng từ ESG & Kiểm toán môi trường:</strong> Cung cấp báo cáo tuần hoàn vật liệu phục vụ kiểm toán CSRD, ISO 14001 và khách hàng FDI.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2F9E6E] shrink-0 mt-0.5" />
                <span><strong>Bảo mật bí mật công nghệ:</strong> Lô hàng được mã hóa nguồn gốc, chỉ chia sẻ danh tính khi hai bên đã ký NDA.</span>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('sellers')}
                className="w-full py-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-[#1F6F50] font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Xem giải pháp chuyên sâu cho Bên Cung</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Buyers Benefit Card */}
          <div className="bg-white rounded-3xl p-8 border border-sky-200/90 shadow-2xs space-y-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 text-[#0284C7] flex items-center justify-center">
                <Search className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase text-[#0284C7]">Dành cho Bên Cầu (Buyers)</span>
                <h3 className="text-xl font-bold text-gray-900 font-['Space_Grotesk']">
                  Nguồn nguyên liệu thứ cấp sạch, ổn định, giá tốt
                </h3>
              </div>
            </div>

            <ul className="space-y-3.5 text-xs sm:text-sm text-gray-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2196C9] shrink-0 mt-0.5" />
                <span><strong>Tiết kiệm 20% – 45% chi phí:</strong> Giảm tỷ lệ mua nguyên sinh đắt đỏ từ nhập khẩu bằng nguyên liệu tái sinh có thông số chuẩn.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2196C9] shrink-0 mt-0.5" />
                <span><strong>Yên tâm về chất lượng mẫu:</strong> Mọi lô hàng đều có báo cáo test lab độc lập hoặc chuyên gia QC kiểm tra trước giao hàng.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2196C9] shrink-0 mt-0.5" />
                <span><strong>Hợp đồng bao tiêu dài hạn:</strong> Đảm bảo nguồn cấp 30 - 100 tấn/tháng ổn định, không bị đứt gãy mùa cao điểm.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2196C9] shrink-0 mt-0.5" />
                <span><strong>Nhận mẫu thử 2kg miễn phí:</strong> Khảo nghiệm kỹ thuật ép thử trên khuôn máy trước khi quyết định ký hợp đồng năm.</span>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('buyers')}
                className="w-full py-3 rounded-xl bg-sky-50 hover:bg-sky-100 text-[#0284C7] font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Xem giải pháp chuyên sâu cho Bên Cầu</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 6. SÀN VẬT LIỆU MVP PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#1F6F50]">
              Thị trường tuần hoàn MVP
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-['Space_Grotesk'] mt-1">
              Phế phẩm & Nhu cầu đang giao dịch
            </h2>
          </div>
          <button
            onClick={() => onNavigate('marketplace')}
            className="text-xs sm:text-sm font-bold text-[#1F6F50] hover:text-[#18583f] flex items-center gap-1 hover:underline"
          >
            <span>Xem toàn bộ danh mục trên Sàn ({MOCK_LISTINGS.length} lô hàng)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredListings.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectListing(item.id)}
              className="bg-white rounded-2xl border border-gray-200 hover:border-[#1F6F50] shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col overflow-hidden group"
            >
              {/* Image banner */}
              <div className="relative aspect-video overflow-hidden bg-gray-100">
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                />
                <div className="absolute top-2.5 left-2.5">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                    item.type === 'supply'
                      ? 'bg-[#1F6F50] text-white'
                      : 'bg-[#0284C7] text-white'
                  }`}>
                    {item.type === 'supply' ? 'Cần bán' : 'Cần mua'}
                  </span>
                </div>
                <div className="absolute top-2.5 right-2.5">
                  <span className="px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-xs text-[10px] font-bold text-[#1F6F50] shadow-xs">
                    AI Match {item.aiMatchScore}%
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] text-gray-500">
                    <span className="font-semibold text-[#1F6F50]">{item.categoryName}</span>
                    <span>{item.location.province}</span>
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 line-clamp-2 leading-snug group-hover:text-[#1F6F50] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-gray-500 line-clamp-1">
                    {item.specifications.purity}
                  </p>
                </div>

                <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] text-gray-400 block">Sản lượng:</span>
                    <span className="font-bold text-gray-900 font-mono">{item.quantity} {item.unit}</span>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] text-gray-400 block">Giá tham chiếu:</span>
                    <span className="font-bold text-[#1F6F50] font-mono">{item.priceEstimate.split('(')[0]}</span>
                  </div>
                </div>

                <div className="pt-1 flex items-center justify-between">
                  <TrustScoreBadge trustScore={item.company.trustScore} size="sm" />
                  <span className="text-xs text-[#0284C7] font-semibold flex items-center gap-0.5">
                    Chi tiết <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FORM ĐĂNG KÝ SỚM (EARLY ACCESS LEAD CAPTURE TRÊN HOME) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-emerald-50 via-white to-sky-50 rounded-3xl border border-emerald-200/80 p-8 sm:p-12 shadow-sm text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-[#1F6F50] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#2196C9]" />
            Chương Trình Đăng Ký Sớm (Early Access)
          </div>

          <div className="space-y-2 max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-['Space_Grotesk']">
              Kết nối nguồn nguyên liệu thứ cấp ngay hôm nay
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Nhận hồ sơ thẩm định miễn phí, tính điểm Trust Score sơ bộ cho nhà máy và nhận danh sách đối tác tiềm năng tại khu vực của bạn.
            </p>
          </div>

          {inlineSuccess ? (
            <div className="p-6 bg-emerald-100/80 border border-emerald-200 rounded-2xl max-w-md mx-auto text-emerald-950 space-y-2">
              <CheckCircle2 className="w-8 h-8 mx-auto text-[#1F6F50]" />
              <div className="font-bold text-sm">Đã ghi nhận thông tin đăng ký!</div>
              <p className="text-xs text-gray-600">
                Chuyên viên Re:Mat AI sẽ chủ động kết nối qua email và hỗ trợ thẩm định lô hàng đầu tiên của bạn.
              </p>
            </div>
          ) : (
            <form onSubmit={handleInlineSubmit} className="max-w-xl mx-auto space-y-3.5 text-left">
              
              {/* Type selector */}
              <div className="flex gap-2 justify-center">
                <button
                  type="button"
                  onClick={() => setInlineType('seller')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    inlineType === 'seller'
                      ? 'bg-[#1F6F50] text-white shadow-xs'
                      : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  Tôi có phế phẩm cần bán
                </button>
                <button
                  type="button"
                  onClick={() => setInlineType('buyer')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    inlineType === 'buyer'
                      ? 'bg-[#0284C7] text-white shadow-xs'
                      : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  Tôi cần tìm nguyên liệu
                </button>
                <button
                  type="button"
                  onClick={() => setInlineType('both')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    inlineType === 'both'
                      ? 'bg-gray-900 text-white shadow-xs'
                      : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  Cả hai
                </button>
              </div>

              {/* Email & Category fields */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5">
                <div className="sm:col-span-7">
                  <input
                    type="email"
                    required
                    value={inlineEmail}
                    onChange={(e) => setInlineEmail(e.target.value)}
                    placeholder="Nhập email công ty (VD: quan@vinaplast.vn)"
                    className="w-full px-4 py-3 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F6F50]/20 focus:border-[#1F6F50]"
                  />
                </div>

                <div className="sm:col-span-5">
                  <select
                    value={inlineCategory}
                    onChange={(e) => setInlineCategory(e.target.value)}
                    className="w-full px-3 py-3 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F6F50]/20 focus:border-[#1F6F50]"
                  >
                    <option value="plastic">Nhựa công nghiệp & bavia</option>
                    <option value="textile">Dệt may & sợi vụn</option>
                    <option value="metal">Kim loại & phoi CNC</option>
                    <option value="wood">Gỗ dăm & mùn cưa</option>
                  </select>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-[#1F6F50] hover:bg-[#18583f] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-99"
              >
                <span>Đăng ký Nhận Bản Tin Ghép Cặp Phế Phẩm</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-[11px] text-gray-500 text-center">
                Hoặc <button type="button" onClick={() => onOpenEarlyAccess(inlineType)} className="text-[#1F6F50] font-bold underline">mở mẫu đăng ký chi tiết</button> để khai báo thông số cụ thể.
              </div>

            </form>
          )}

        </div>
      </section>

    </div>
  );
};
