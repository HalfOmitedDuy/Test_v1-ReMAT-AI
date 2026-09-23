import React, { useState } from 'react';
import { PageView, EnterpriseUser } from '../types';
import { ReMatLogo } from './ReMatLogo';
import { 
  Menu, X, ArrowUpRight, Search, Sparkles, Truck, 
  Camera, Star, User, Building2, LogOut 
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
  onOpenEarlyAccess: (type: 'seller' | 'buyer' | 'both') => void;
  onOpenAIMatcher: () => void;
  onOpenAIRecognition: () => void;
  onOpenLogistics: () => void;
  onOpenReview: () => void;
  onOpenAuth: () => void;
  currentUser: EnterpriseUser | null;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenEarlyAccess,
  onOpenAIMatcher,
  onOpenAIRecognition,
  onOpenLogistics,
  onOpenReview,
  onOpenAuth,
  currentUser
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageView; label: string; badge?: string }[] = [
    { id: 'home', label: 'Trang chủ' },
    { id: 'sellers', label: 'Bên Cung (Bán)' },
    { id: 'buyers', label: 'Bên Cầu (Mua)' },
    { id: 'marketplace', label: 'Sàn Vật Liệu MVP', badge: 'Live' },
    { id: 'how-it-works', label: 'Cách hoạt động' },
    { id: 'about', label: 'Về chúng tôi' }
  ];

  const handleNavClick = (page: PageView) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#EDF6F2]/90 backdrop-blur-md border-b border-[#1F6F50]/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-3">
          
          {/* Brand Logo */}
          <div 
            id="nav-logo-btn"
            onClick={() => handleNavClick('home')}
            className="cursor-pointer py-2 select-none group shrink-0"
          >
            <ReMatLogo size="md" showSlogan={false} />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3 py-2 rounded-lg text-xs font-semibold transition-colors duration-150 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-[#1F6F50] bg-[#1F6F50]/8 font-bold'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/70'
                  }`}
                >
                  {item.label}
                  {item.badge && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-emerald-100 text-[#1F6F50] font-bold animate-pulse">
                      {item.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#2F9E6E] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Feature Quick-Launchers: AI Scanner, Logistics, Review */}
          <div className="hidden md:flex items-center gap-1.5 shrink-0">
            {/* AI Waste Recognition Button */}
            <button
              id="nav-ai-recognition-btn"
              onClick={onOpenAIRecognition}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-emerald-300/80 bg-white hover:bg-emerald-50 text-[#1F6F50] text-xs font-bold transition-all shadow-2xs"
              title="Nhận diện và phân tích phế phẩm tự động bằng AI"
            >
              <Camera className="w-3.5 h-3.5 text-[#1F6F50]" />
              <span>Nhận Diện AI</span>
            </button>

            {/* Smart Logistics Optimizer Button */}
            <button
              id="nav-logistics-optimizer-btn"
              onClick={onOpenLogistics}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-sky-300/80 bg-white hover:bg-sky-50 text-[#0284C7] text-xs font-bold transition-all shadow-2xs"
              title="Tính toán và tối ưu chi phí vận tải 2 chiều giữa bên mua và bán"
            >
              <Truck className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>Tối Ưu Logistics</span>
            </button>

            {/* Review Completed Transaction Button */}
            <button
              id="nav-review-transaction-btn"
              onClick={onOpenReview}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-amber-300/80 bg-white hover:bg-amber-50 text-amber-700 text-xs font-bold transition-all shadow-2xs"
              title="Đánh giá lượt mua/bán để đóng góp vào Trust Score"
            >
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
              <span>Đánh Giá</span>
            </button>
          </div>

          {/* Enterprise User Auth / Account Area */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            {currentUser ? (
              <button
                id="nav-enterprise-account-btn"
                onClick={onOpenAuth}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-emerald-300 hover:border-[#1F6F50] shadow-2xs transition-all text-left"
              >
                <div className="w-7 h-7 rounded-lg bg-emerald-100 text-[#1F6F50] flex items-center justify-center font-bold text-xs">
                  <Building2 className="w-4 h-4" />
                </div>
                <div className="max-w-[130px] leading-tight">
                  <span className="block text-xs font-bold text-gray-900 truncate">
                    {currentUser.companyName}
                  </span>
                  <span className="text-[10px] text-[#1F6F50] font-mono font-bold">
                    Trust {currentUser.trustScore}/100
                  </span>
                </div>
              </button>
            ) : (
              <button
                id="nav-auth-login-btn"
                onClick={onOpenAuth}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 text-xs font-bold shadow-2xs transition-all"
              >
                <User className="w-3.5 h-3.5 text-gray-500" />
                <span>Đăng Nhập</span>
              </button>
            )}

            {/* Quick Action: Post Material */}
            <button
              id="nav-seller-cta"
              onClick={() => onOpenEarlyAccess('seller')}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#1F6F50] text-white hover:bg-[#18583f] text-xs font-bold shadow-xs transition-all active:scale-98"
            >
              <span>Đăng bán</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-1.5 xl:hidden">
            <button
              onClick={onOpenAIRecognition}
              className="p-2 rounded-lg text-[#1F6F50] bg-white border border-emerald-200"
              title="Nhận diện AI"
            >
              <Camera className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenLogistics}
              className="p-2 rounded-lg text-[#0284C7] bg-white border border-sky-200"
              title="Logistics"
            >
              <Truck className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenAuth}
              className="p-2 rounded-lg text-gray-700 bg-white border border-gray-200"
              title="Tài khoản"
            >
              <User className="w-4 h-4" />
            </button>
            <button
              id="nav-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-menu-drawer" className="xl:hidden border-b border-gray-200 bg-white/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3">
          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-3.5 py-2.5 rounded-lg text-xs font-semibold flex items-center justify-between ${
                  currentPage === item.id
                    ? 'bg-emerald-50 text-[#1F6F50] font-bold'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-100 text-[#1F6F50] font-bold">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-gray-100 grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAIRecognition();
              }}
              className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-emerald-300 bg-emerald-50 text-[#1F6F50] font-bold text-xs"
            >
              <Camera className="w-3.5 h-3.5" />
              <span>Nhận diện AI</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLogistics();
              }}
              className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-sky-300 bg-sky-50 text-[#0284C7] font-bold text-xs"
            >
              <Truck className="w-3.5 h-3.5" />
              <span>Tối ưu Logistics</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReview();
              }}
              className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-amber-300 bg-amber-50 text-amber-800 font-bold text-xs"
            >
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
              <span>Đánh giá Trust</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth();
              }}
              className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-gray-300 bg-gray-50 text-gray-800 font-bold text-xs"
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>{currentUser ? 'Hồ sơ DN' : 'Đăng nhập'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

