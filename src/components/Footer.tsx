import React from 'react';
import { PageView } from '../types';
import { ReMatLogo } from './ReMatLogo';
import { ShieldCheck, Sparkles, Factory, RefreshCw, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageView) => void;
  onOpenEarlyAccess: (type: 'seller' | 'buyer' | 'both') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenEarlyAccess }) => {
  return (
    <footer className="bg-[#EDF6F2]/85 backdrop-blur-xs text-[#264235] border-t border-emerald-200/70 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-emerald-200/60">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <ReMatLogo inverted={false} size="lg" showSlogan />
            <p className="text-sm text-[#4A6358] leading-relaxed max-w-sm">
              Nền tảng B2B ứng dụng trí tuệ nhân tạo (ReMat Intelligence Engine) kết nối cung - cầu phế phẩm và nguyên liệu thứ cấp công nghiệp. Giải phóng kho bãi, tạo dòng tiền mới và cắt giảm phát thải carbon thực chất.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 border border-emerald-200 shadow-xs text-[#1F6F50] text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2F9E6E]" />
                Human-in-the-loop QC
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 border border-sky-200 shadow-xs text-[#0284C7] text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
                ReMat AI Engine
              </span>
            </div>
          </div>

          {/* Solution Links */}
          <div className="space-y-3">
            <h4 className="text-[#172B23] text-sm font-bold uppercase tracking-wider font-['Space_Grotesk']">
              Giải Pháp
            </h4>
            <ul className="space-y-2 text-sm text-[#4A6358]">
              <li>
                <button 
                  onClick={() => onNavigate('sellers')}
                  className="hover:text-[#1F6F50] transition-colors text-left font-medium"
                >
                  Dành cho Bên Cung (Sellers)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('buyers')}
                  className="hover:text-[#0284C7] transition-colors text-left font-medium"
                >
                  Dành cho Bên Cầu (Buyers)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('marketplace')}
                  className="hover:text-[#1F6F50] transition-colors text-left flex items-center gap-1.5 font-medium"
                >
                  <span>Sàn Vật Liệu MVP</span>
                  <span className="text-[10px] px-1.5 py-0.5 bg-emerald-600 text-white font-bold rounded-sm">Hot</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('how-it-works')}
                  className="hover:text-[#1F6F50] transition-colors text-left font-medium"
                >
                  Cách thức Matching & QC
                </button>
              </li>
            </ul>
          </div>

          {/* Framework & Standards */}
          <div className="space-y-3">
            <h4 className="text-[#172B23] text-sm font-bold uppercase tracking-wider font-['Space_Grotesk']">
              Chuẩn Tin Cậy
            </h4>
            <ul className="space-y-2 text-sm text-[#4A6358]">
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1F6F50]" />
                <span>Hệ thống Trust Score</span>
              </li>
              <li className="flex items-center gap-2">
                <Factory className="w-4 h-4 text-[#0284C7]" />
                <span>Thẩm định hiện trường nhà máy</span>
              </li>
              <li className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-[#1F6F50]" />
                <span>Kinh tế tuần hoàn (Circular ESG)</span>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#1F6F50] transition-colors text-left font-medium"
                >
                  Về chúng tôi & Đội ngũ
                </button>
              </li>
            </ul>
          </div>

          {/* Contact / Early Access */}
          <div className="space-y-3">
            <h4 className="text-[#172B23] text-sm font-bold uppercase tracking-wider font-['Space_Grotesk']">
              Địa chỉ liên hệ
            </h4>
            <div className="space-y-2.5 text-xs text-[#4A6358]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#1F6F50] shrink-0 mt-0.5" />
                <span>Đại học Bách Khoa Hà Nội</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#1F6F50] shrink-0" />
                <span className="font-medium text-[#172B23]">helo@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#1F6F50] shrink-0" />
                <span className="font-medium text-[#172B23]">(+84) 923394023</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenEarlyAccess('both')}
                className="w-full text-center py-2.5 px-4 rounded-xl bg-[#1F6F50] hover:bg-[#18583f] text-white text-xs font-bold transition-all shadow-xs hover:shadow-md"
              >
                Đăng ký Thử nghiệm MVP
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimers & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#526E61] gap-4">
          <p>© 2026 Re:Mat AI Inc. Mọi quyền được bảo lưu. Nền tảng B2B kết nối kinh tế tuần hoàn công nghiệp.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#172B23] transition-colors">Không trực tiếp thu gom vận chuyển</span>
            <span className="hover:text-[#172B23] transition-colors">Bảo mật hợp đồng B2B</span>
            <span className="text-[#1F6F50] font-bold font-mono bg-emerald-100/70 px-2 py-0.5 rounded">MVP v1.2</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
