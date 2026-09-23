import React from 'react';
import { PageView } from '../types';
import { TEAM_MEMBERS } from '../data/mockData';
import { 
  Users, Target, Sparkles, ShieldCheck, Factory, 
  RefreshCw, Award, HeartHandshake, ArrowRight 
} from 'lucide-react';

interface AboutPageProps {
  onOpenEarlyAccess: (type: 'seller' | 'buyer' | 'both') => void;
  onNavigate: (page: PageView) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenEarlyAccess,
  onNavigate
}) => {
  return (
    <div className="space-y-16 pb-20 pt-8">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-[#1F6F50] text-xs font-bold uppercase tracking-wider">
          <Target className="w-3.5 h-3.5" />
          Sứ Mệnh Kinh Tế Tuần Hoàn
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 font-['Space_Grotesk'] leading-tight max-w-3xl mx-auto">
          "Không có thứ gì là rác thải, <br className="hidden sm:block" />chỉ có tài nguyên đặt sai chỗ"
        </h1>

        <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Re:Mat AI ra đời nhằm giải bài toán nghịch lý của ngành công nghiệp sản xuất Việt Nam: Hàng trăm nghìn tấn phế phẩm nhựa, dệt may, phoi kim loại bị chôn lấp mỗi tháng trong khi các nhà máy tái chế lại phải nhập khẩu nguyên liệu thứ cấp từ nước ngoài với chi phí đắt đỏ.
        </p>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200/90 shadow-2xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#1F6F50] flex items-center justify-center">
              <RefreshCw className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 font-['Space_Grotesk']">
              Mục Tiêu 2028: 500,000 Tấn
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Mục tiêu đưa nửa triệu tấn phế phẩm công nghiệp sạch quay trở lại chu trình sản xuất, giúp doanh nghiệp cắt giảm trực tiếp 1.2 triệu tấn phát thải carbon tương đương.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200/90 shadow-2xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#0284C7] flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-[#2196C9]" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 font-['Space_Grotesk']">
              Công Nghệ Vì Sự Minh Bạch
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Ứng dụng AI để phân loại quang phổ và trích xuất dữ liệu tự động, biến một thị trường phế liệu vốn phân mảnh, mập mờ thành một sàn giao dịch số hóa chuẩn mực.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200/90 shadow-2xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 font-['Space_Grotesk']">
              Liêm Chính & Trách Nhiệm
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Chỉ hợp tác với các nhà máy tuân thủ pháp luật môi trường. Kiên quyết từ chối các loại chất thải nguy hại hoặc hàng không rõ nguồn gốc xuất xứ.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-wider text-[#1F6F50]">
            Con người đằng sau Re:Mat
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-['Space_Grotesk']">
            Đội ngũ Sáng lập & Cố vấn
          </h2>
          <p className="text-xs sm:text-sm text-gray-500">
            Sự kết hợp giữa các nhà khoa học vật liệu, kỹ sư AI hàng đầu và chuyên gia chuỗi cung ứng sản xuất thực địa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-gray-200/90 overflow-hidden shadow-2xs hover:shadow-md transition-shadow group flex flex-col"
            >
              <div className="aspect-square bg-gray-100 overflow-hidden">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-gray-900 font-['Space_Grotesk']">
                    {member.name}
                  </h4>
                  <div className="text-xs font-bold text-[#1F6F50] uppercase tracking-wider">
                    {member.role}
                  </div>
                  <p className="text-xs text-gray-600 pt-1 leading-relaxed">
                    {member.experience}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 text-[11px] text-gray-500 font-medium">
                  Trọng tâm: <span className="text-gray-800 font-semibold">{member.focus}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lab & Industry Partners */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-100/70 rounded-3xl p-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
            Mạng lưới Đối tác Kiểm định & Phân tích Độc lập
          </span>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-14 pt-2 text-gray-500 font-extrabold text-sm sm:text-base font-['Space_Grotesk']">
            <span>QUATEST 1 & 3</span>
            <span>SGS VIETNAM</span>
            <span>VINATEST LAB</span>
            <span>HIỆP HỘI NHỰA VIỆT NAM (VPA)</span>
            <span>BAN QL KCN VSIP BÌNH DƯƠNG</span>
          </div>
        </div>
      </section>

      {/* Final Action */}
      <section className="text-center max-w-xl mx-auto px-4 space-y-4">
        <h3 className="text-xl font-bold text-gray-900 font-['Space_Grotesk']">
          Đồng hành cùng làn sóng Kinh tế tuần hoàn B2B
        </h3>
        <p className="text-xs text-gray-600">
          Hãy gia nhập mạng lưới các nhà sản xuất tiên phong tái sinh vật liệu thứ cấp ngay từ hôm nay.
        </p>
        <button
          onClick={() => onOpenEarlyAccess('both')}
          className="px-8 py-3.5 rounded-xl bg-[#1F6F50] hover:bg-[#18583f] text-white font-bold text-sm shadow-md transition-all inline-flex items-center gap-2"
        >
          <span>Đăng ký Hợp tác Doanh nghiệp</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>

    </div>
  );
};
