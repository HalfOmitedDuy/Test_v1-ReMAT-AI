import React, { useState } from 'react';
import { PageView } from '../types';
import { 
  Sparkles, ShieldCheck, Factory, RefreshCw, FileText, 
  Layers, CheckCircle2, ArrowRight, Zap, Database, Search, 
  Truck, Lock, Award, Cpu 
} from 'lucide-react';

interface HowItWorksPageProps {
  onOpenEarlyAccess: (type: 'seller' | 'buyer' | 'both') => void;
  onOpenAIMatcher: () => void;
  onNavigate: (page: PageView) => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({
  onOpenEarlyAccess,
  onOpenAIMatcher,
  onNavigate
}) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const stepsDetail = [
    {
      step: 1,
      title: 'Thu thập & Chuẩn hóa Dữ liệu (AI Ingestion & OCR)',
      subtitle: 'Biến mô tả thủ công thành thông số kỹ thuật chuẩn công nghiệp',
      icon: <Database className="w-6 h-6 text-[#1F6F50]" />,
      desc: 'Bên bán chụp ảnh lô phế phẩm hoặc tải phiếu kiểm nghiệm. ReMat Intelligence Engine sử dụng mô hình thị giác máy tính và OCR để trích xuất: độ ẩm, tỷ lệ tạp chất, chỉ số chảy (MFI), độ bền kéo và tự động đối chiếu với danh mục mã phế liệu quốc tế (HS Code).',
      bullets: [
        'Tự động phân nhóm vật liệu (Polymer, Sợi dệt, Kim loại, Sinh khối)',
        'Nhận diện rủi ro lẫn tạp chất (ví dụ: màng PE lẫn PVC, nhôm lẫn sắt từ)',
        'Định giá thị trường tham chiếu theo dữ liệu thời gian thực'
      ]
    },
    {
      step: 2,
      title: 'Thuật Toán Ghép Cặp ReMat Intelligence Engine',
      subtitle: 'Tìm kiếm không gian vector đa chiều giữa bên Cung và bên Cầu',
      icon: <Cpu className="w-6 h-6 text-[#2196C9]" />,
      desc: 'Hệ thống không chỉ tìm kiếm từ khóa thông thường, mà chạy thuật toán Vector Similarity tính toán 4 yếu tố trọng yếu: Khả năng tương thích kỹ thuật, khối lượng phát sinh theo tháng, bán kính vận chuyển giữa các KCN (giảm chi phí logistics) và mức giá kỳ vọng.',
      bullets: [
        'Tính điểm phần trăm Match Score (VD: 96% khớp với nhà máy cách 28km)',
        'Gợi ý tối ưu hóa quy cách đóng gói (Bao Jumbo vs Bành ép)',
        'Cảnh báo sớm nếu khoảng cách vận chuyển làm đội chi phí'
      ]
    },
    {
      step: 3,
      title: 'Kiểm Định Thực Địa Human-in-the-loop',
      subtitle: 'Loại bỏ rủi ro gian lận — Con người trực tiếp xác thực trước khi chốt',
      icon: <ShieldCheck className="w-6 h-6 text-amber-700" />,
      desc: 'AI chỉ đưa ra khuyến nghị. Trước khi hợp đồng được ký, mạng lưới chuyên gia QC độc lập của Re:Mat sẽ đến hiện trường nhà máy, đối chiếu hồ sơ pháp lý môi trường và lấy mẫu thử (2kg – 5kg) gửi kiểm nghiệm tại Quatest/Vinatest/SGS.',
      bullets: [
        'Xác thực tính xác thực của thông số độ ẩm và độ tinh khiết',
        'Cập nhật điểm Trust Score chính thức cho nhà máy',
        'Hỗ trợ gửi mẫu thử đến phòng R&D bên mua để chạy test khuôn'
      ]
    },
    {
      step: 4,
      title: 'Chốt Giao Dịch & Bảo Chứng Hợp Đồng',
      subtitle: 'Thanh toán an toàn, bảo vệ quyền lợi hai bên và cấp chứng nhận ESG',
      icon: <Award className="w-6 h-6 text-emerald-600" />,
      desc: 'Hai bên ký kết hợp đồng bao tiêu điện tử. Tiền giao dịch được bảo chứng qua tài khoản ký quỹ (Escrow). Sau khi bên mua nhận hàng và xác nhận đúng phẩm cấp, tiền được giải ngân nhanh chóng (T+3). Re:Mat xuất báo cáo giảm phát thải CO2e số hóa cho hai bên.',
      bullets: [
        'Bảo mật thông tin thương mại (NDA bảo vệ công thức sản xuất)',
        'Hỗ trợ kết nối đơn vị vận tải chuyên dụng trong KCN nếu cần',
        'Chứng thư kinh tế tuần hoàn phục vụ báo cáo bền vững ESG'
      ]
    }
  ];

  return (
    <div className="space-y-16 pb-20 pt-8">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-[#1F6F50] text-xs font-bold uppercase tracking-wider">
          <Layers className="w-3.5 h-3.5" />
          Kiến Trúc Vận Hành Re:Mat AI
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 font-['Space_Grotesk']">
          Cách thức AI & Con người kết hợp bảo chứng phế phẩm
        </h1>
        <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
          Mô hình lai độc đáo: Trí tuệ nhân tạo tăng tốc độ ghép cặp gấp 20 lần, kết hợp thẩm định hiện trường (Human-in-the-loop) đảm bảo độ tin cậy tuyệt đối.
        </p>
      </section>

      {/* Sơ đồ kiến trúc tương tác (Interactive Architecture Pipeline) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 sm:p-10 space-y-8">
          
          {/* Step Selection Pipeline Pills */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {stepsDetail.map((s) => (
              <button
                key={s.step}
                onClick={() => setActiveStep(s.step)}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  activeStep === s.step
                    ? 'border-[#1F6F50] bg-emerald-50/80 shadow-xs ring-2 ring-[#1F6F50]/20'
                    : 'border-gray-200 bg-white hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-bold font-mono px-2 py-0.5 rounded ${
                    activeStep === s.step ? 'bg-[#1F6F50] text-white' : 'bg-gray-100 text-gray-600'
                  }`}>
                    Giai đoạn 0{s.step}
                  </span>
                  <div className="scale-75">{s.icon}</div>
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-gray-900 line-clamp-2 leading-snug">
                  {s.title.split('(')[0]}
                </h4>
              </button>
            ))}
          </div>

          {/* Active Step Detailed Explanation */}
          {(() => {
            const current = stepsDetail.find(s => s.step === activeStep) || stepsDetail[0];
            return (
              <div className="bg-gradient-to-br from-emerald-50/50 via-white to-sky-50/30 rounded-2xl p-6 sm:p-8 border border-emerald-100 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-200/80">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-xs border border-gray-200 flex items-center justify-center">
                      {current.icon}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#1F6F50] uppercase tracking-wider">
                        Giai đoạn {current.step} / 4
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 font-['Space_Grotesk']">
                        {current.title}
                      </h3>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-gray-500 max-w-xs text-left sm:text-right">
                    {current.subtitle}
                  </span>
                </div>

                <p className="text-sm text-gray-700 leading-relaxed max-w-3xl">
                  {current.desc}
                </p>

                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block">
                    Điểm nổi bật của giai đoạn này:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {current.bullets.map((b, i) => (
                      <div key={i} className="p-3 bg-white rounded-xl border border-gray-100 text-xs text-gray-800 flex items-start gap-2 shadow-2xs">
                        <CheckCircle2 className="w-4 h-4 text-[#2F9E6E] shrink-0 mt-0.5" />
                        <span className="leading-snug">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}

        </div>
      </section>

      {/* Triết lý: Vì sao Re:Mat AI không trực tiếp gom hàng & chở xe tải? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#12231C] text-white rounded-3xl p-8 sm:p-12 border border-[#1F6F50]/30 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <Lock className="w-3.5 h-3.5 text-[#2196C9]" />
            Định Vị Mô Hình Sản Phẩm
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold font-['Space_Grotesk'] max-w-2xl">
            Vì sao Re:Mat AI là nền tảng Matching thuần túy, không sở hữu xe gom rác?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-5 bg-white/5 rounded-2xl border border-white/10 space-y-2 text-xs">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                1
              </div>
              <h4 className="text-sm font-bold text-white">Tập trung 100% vào Chuẩn hóa Dữ liệu</h4>
              <p className="text-gray-400 leading-relaxed">
                Thách thức lớn nhất không phải là thiếu xe tải, mà là hai bên không biết nguyên liệu có đạt phẩm cấp hay không. Re:Mat tập trung giải quyết bài toán cốt lõi: Phân loại chuẩn xác và xác minh tín nhiệm.
              </p>
            </div>

            <div className="p-5 bg-white/5 rounded-2xl border border-white/10 space-y-2 text-xs">
              <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold">
                2
              </div>
              <h4 className="text-sm font-bold text-white">Không Đội Chi Phí Trung Gian</h4>
              <p className="text-gray-400 leading-relaxed">
                Các đơn vị thu gom truyền thống thường ăn chênh lệch 40-60%. Mô hình matching trực tiếp giúp bên bán nhận trọn giá trị cao nhất, bên mua tiết kiệm tối đa ngân sách.
              </p>
            </div>

            <div className="p-5 bg-white/5 rounded-2xl border border-white/10 space-y-2 text-xs">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">
                3
              </div>
              <h4 className="text-sm font-bold text-white">Tận Dụng Hạ Tầng Logistics Sẵn Có</h4>
              <p className="text-gray-400 leading-relaxed">
                Mỗi KCN đã có sẵn các đơn vị vận tải chuyên dụng. Doanh nghiệp có thể tự điều xe của mình hoặc sử dụng danh sách các đối tác vận tải đạt chuẩn môi trường do Re:Mat đề xuất.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="text-center max-w-xl mx-auto px-4 space-y-4">
        <h3 className="text-xl font-bold text-gray-900 font-['Space_Grotesk']">
          Sẵn sàng trải nghiệm thử nghiệm ghép cặp?
        </h3>
        <div className="flex justify-center gap-3">
          <button
            onClick={() => onOpenEarlyAccess('both')}
            className="px-6 py-3 rounded-xl bg-[#1F6F50] hover:bg-[#18583f] text-white font-bold text-xs shadow-sm transition-all"
          >
            Đăng ký Tham Gia Re:Mat
          </button>
          <button
            onClick={onOpenAIMatcher}
            className="px-6 py-3 rounded-xl bg-sky-50 hover:bg-sky-100 border border-[#2196C9] text-[#0284C7] font-bold text-xs transition-all flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Thử ReMat AI Matcher</span>
          </button>
        </div>
      </section>

    </div>
  );
};
