import React, { useState } from 'react';
import { EnterpriseUser } from '../types';
import { MOCK_ENTERPRISE_USERS } from '../data/mockData';
import { 
  Building2, UserCheck, Lock, Mail, Phone, MapPin, 
  CheckCircle2, X, ArrowRight, ShieldCheck, Sparkles 
} from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: EnterpriseUser | null;
  onLogin: (user: EnterpriseUser) => void;
  onLogout: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  onLogin,
  onLogout
}) => {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  
  // Register state
  const [companyName, setCompanyName] = useState('');
  const [taxCode, setTaxCode] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<'seller' | 'buyer' | 'both'>('seller');
  const [province, setProvince] = useState('Bình Dương');
  const [industrialPark, setIndustrialPark] = useState('KCN VSIP 1');
  const [phone, setPhone] = useState('');

  if (!isOpen) return null;

  const handleQuickLogin = (user: EnterpriseUser) => {
    onLogin(user);
    onClose();
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newUser: EnterpriseUser = {
      id: `user_${Date.now()}`,
      companyName,
      taxCode,
      email,
      role,
      province,
      industrialPark,
      phone,
      trustScore: 80, // Điểm khởi điểm sau khi xác thực MST
      completedTransactions: 0
    };
    onLogin(newUser);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl flex flex-col border border-emerald-100"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-emerald-50 via-white to-sky-50 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#1F6F50] text-white flex items-center justify-center shadow-xs">
              <Building2 className="w-5 h-5 text-emerald-200" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#1F6F50] uppercase tracking-wider">
                Cổng Doanh Nghiệp B2B
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-gray-900 font-['Space_Grotesk'] leading-tight">
                {currentUser ? 'Hồ Sơ Doanh Nghiệp Đang Đăng Nhập' : (mode === 'login' ? 'Đăng Nhập Doanh Nghiệp' : 'Đăng Ký Tài Khoản Mới')}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-700 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          
          {/* If already logged in */}
          {currentUser ? (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <UserCheck className="w-5 h-5 text-[#1F6F50]" />
                    <span className="text-xs font-bold uppercase text-[#1F6F50]">
                      Tài khoản đã xác thực MST
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-[#1F6F50] text-white text-[11px] font-mono font-bold">
                    Trust Score {currentUser.trustScore}/100
                  </span>
                </div>

                <div>
                  <h4 className="text-base font-bold text-gray-900 font-['Space_Grotesk']">
                    {currentUser.companyName}
                  </h4>
                  <p className="text-xs text-gray-600 mt-0.5">
                    MST: <strong className="font-mono text-gray-800">{currentUser.taxCode}</strong> • {currentUser.industrialPark}, {currentUser.province}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Đã hoàn tất <strong className="text-gray-800">{currentUser.completedTransactions}</strong> giao dịch thẩm định trên Re:Mat AI.
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => {
                    onLogout();
                  }}
                  className="flex-1 py-2.5 rounded-xl border border-red-200 hover:bg-red-50 text-red-600 font-bold text-xs transition-colors"
                >
                  Đăng Xuất
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 py-2.5 rounded-xl bg-[#1F6F50] hover:bg-[#18583f] text-white font-bold text-xs transition-colors"
                >
                  Tiếp Tục Phiên Làm Việc
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Mode Switcher Tabs */}
              <div className="flex p-1 bg-gray-100 rounded-xl">
                <button
                  onClick={() => setMode('login')}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                    mode === 'login'
                      ? 'bg-white text-gray-900 shadow-xs'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  Đăng Nhập
                </button>
                <button
                  onClick={() => setMode('register')}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                    mode === 'register'
                      ? 'bg-white text-gray-900 shadow-xs'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  Tạo Tài Khoản Mới
                </button>
              </div>

              {/* Login Mode */}
              {mode === 'login' ? (
                <div className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Email Doanh nghiệp hoặc Mã số thuế (MST)
                      </label>
                      <input
                        type="text"
                        defaultValue="supply@tanachau-plastic.com.vn"
                        className="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F6F50]/20 focus:border-[#1F6F50]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Mật khẩu
                      </label>
                      <input
                        type="password"
                        defaultValue="••••••••••••"
                        className="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F6F50]/20 focus:border-[#1F6F50]"
                      />
                    </div>

                    <button
                      onClick={() => handleQuickLogin(MOCK_ENTERPRISE_USERS[0])}
                      className="w-full py-2.5 rounded-xl bg-[#1F6F50] hover:bg-[#18583f] text-white font-bold text-xs transition-colors shadow-xs"
                    >
                      Đăng Nhập Vào Hệ Thống
                    </button>
                  </div>

                  {/* 1-Click Quick Demo Login Switcher */}
                  <div className="pt-3 border-t border-gray-100 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block text-center">
                      Hoặc chọn nhanh tài khoản doanh nghiệp mẫu:
                    </span>
                    <div className="space-y-2">
                      {MOCK_ENTERPRISE_USERS.map((user) => (
                        <button
                          key={user.id}
                          onClick={() => handleQuickLogin(user)}
                          className="w-full p-2.5 rounded-xl border border-gray-200 hover:border-[#1F6F50] hover:bg-emerald-50/50 text-left flex items-center justify-between text-xs transition-all"
                        >
                          <div>
                            <span className="font-bold text-gray-900 block truncate max-w-[240px]">
                              {user.companyName}
                            </span>
                            <span className="text-[10px] text-gray-500">
                              {user.role === 'seller' ? 'Bên Bán' : (user.role === 'buyer' ? 'Bên Mua' : 'Cung & Cầu')} • MST: {user.taxCode}
                            </span>
                          </div>
                          <span className="text-[11px] font-bold text-[#1F6F50] font-mono px-2 py-0.5 rounded bg-emerald-100">
                            Trust {user.trustScore}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                /* Register Mode */
                <form onSubmit={handleRegisterSubmit} className="space-y-3 text-left">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Tên pháp nhân doanh nghiệp *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="VD: Công ty TNHH Nhựa & Phụ Gia Toàn Cầu"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F6F50]/20 focus:border-[#1F6F50]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Mã số thuế (MST) *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="VD: 0317892110"
                        value={taxCode}
                        onChange={(e) => setTaxCode(e.target.value)}
                        className="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F6F50]/20 focus:border-[#1F6F50]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Loại hình chính
                      </label>
                      <select
                        value={role}
                        onChange={(e) => setRole(e.target.value as any)}
                        className="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F6F50]/20 focus:border-[#1F6F50] bg-white font-medium"
                      >
                        <option value="seller">Nhà máy có phế phẩm (Bên Bán)</option>
                        <option value="buyer">Đơn vị tái chế/sản xuất (Bên Mua)</option>
                        <option value="both">Cả hai nhu cầu</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Tỉnh / Thành phố
                      </label>
                      <input
                        type="text"
                        required
                        value={province}
                        onChange={(e) => setProvince(e.target.value)}
                        className="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F6F50]/20 focus:border-[#1F6F50]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Khu Công Nghiệp (KCN)
                      </label>
                      <input
                        type="text"
                        required
                        value={industrialPark}
                        onChange={(e) => setIndustrialPark(e.target.value)}
                        className="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F6F50]/20 focus:border-[#1F6F50]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Email Doanh nghiệp *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="contact@company.vn"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F6F50]/20 focus:border-[#1F6F50]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Số điện thoại phụ trách
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0912 345 678"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F6F50]/20 focus:border-[#1F6F50]"
                      />
                    </div>
                  </div>

                  <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 text-[11px] text-[#1F6F50] flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 shrink-0" />
                    <span>Sau khi đăng ký, hệ thống sẽ tự động kích hoạt Trust Score khởi điểm 80/100 sau khi đối soát MST.</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-[#1F6F50] hover:bg-[#18583f] text-white font-bold text-xs transition-colors shadow-xs"
                  >
                    Hoàn Tất Đăng Ký Doanh Nghiệp
                  </button>
                </form>
              )}
            </>
          )}

        </div>

      </div>
    </div>
  );
};
