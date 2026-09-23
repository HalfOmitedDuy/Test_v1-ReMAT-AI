import React, { useState } from 'react';
import { X, CheckCircle2, Sparkles, Building2, Mail, Phone, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import { EarlyAccessSubmission } from '../types';

interface EarlyAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultType?: 'seller' | 'buyer' | 'both';
}

export const EarlyAccessModal: React.FC<EarlyAccessModalProps> = ({
  isOpen,
  onClose,
  defaultType = 'both'
}) => {
  const [formData, setFormData] = useState<EarlyAccessSubmission>({
    email: '',
    companyName: '',
    contactName: '',
    phone: '',
    businessType: defaultType,
    materialCategory: 'plastic',
    estimatedVolume: '10 - 30 tấn/tháng',
    province: 'Bình Dương',
    note: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.companyName) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        id="early-access-modal-card"
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#17382B] via-[#1F6F50] to-[#2196C9] p-6 text-white relative">
          <button
            id="close-early-access-btn"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-emerald-200 text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4 text-[#2196C9]" />
            <span>Chương trình Early Access B2B</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-['Space_Grotesk']">
            Đăng Ký Tham Gia Re:Mat AI
          </h3>
          <p className="text-xs sm:text-sm text-emerald-100/90 mt-1">
            Dành cho nhà máy có phế phẩm cần thanh lý hoặc doanh nghiệp tìm nguồn nguyên liệu thứ cấp giá tốt.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div id="submission-success-view" className="text-center py-6 space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 flex items-center justify-center text-[#1F6F50]">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 font-['Space_Grotesk']">
                Đăng ký thành công!
              </h4>
              <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                Cảm ơn <strong>{formData.companyName}</strong>. Chuyên viên kết nối vật liệu của Re:Mat AI sẽ gửi tài liệu thẩm định và thông tin các đối tác tương thích tới email <span className="text-[#1F6F50] font-semibold">{formData.email}</span> trong vòng 24 giờ làm việc.
              </p>

              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100 text-xs text-left space-y-2 text-[#1F6F50]">
                <div className="flex items-center gap-2 font-bold">
                  <ShieldCheck className="w-4 h-4 text-[#2196C9]" />
                  Quyền lợi của thành viên đợt 1:
                </div>
                <ul className="list-disc list-inside space-y-1 text-gray-700 pl-1">
                  <li>Miễn phí xác minh hồ sơ & tính điểm Trust Score sơ bộ.</li>
                  <li>Ưu tiên chạy thuật toán ReMat Engine tìm đối tác trong bán kính 50km.</li>
                  <li>Hỗ trợ lấy mẫu test tại phòng lab đối tác tiêu chuẩn (Vinatest / Quatest).</li>
                </ul>
              </div>

              <div className="pt-4">
                <button
                  id="close-success-btn"
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-lg bg-[#1F6F50] hover:bg-[#18583f] text-white font-bold text-sm shadow-sm transition-all"
                >
                  Xong, quay lại khám phá
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Business Type Selector (Seller / Buyer / Both) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                  Doanh nghiệp của bạn tham gia với tư cách gì?
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, businessType: 'seller' })}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all text-center ${
                      formData.businessType === 'seller'
                        ? 'border-[#1F6F50] bg-emerald-50 text-[#1F6F50] shadow-xs ring-1 ring-[#1F6F50]'
                        : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    Bên Cung (Bán phế phẩm)
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, businessType: 'buyer' })}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all text-center ${
                      formData.businessType === 'buyer'
                        ? 'border-[#0284C7] bg-sky-50 text-[#0284C7] shadow-xs ring-1 ring-[#0284C7]'
                        : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    Bên Cầu (Cần nguyên liệu)
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, businessType: 'both' })}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all text-center ${
                      formData.businessType === 'both'
                        ? 'border-indigo-600 bg-indigo-50 text-indigo-700 shadow-xs ring-1 ring-indigo-600'
                        : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    Cả hai chiều
                  </button>
                </div>
              </div>

              {/* Company & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Tên Doanh nghiệp / Nhà máy *
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      required
                      placeholder="VD: Công ty TNHH Nhựa Tân Á"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F6F50]/20 focus:border-[#1F6F50]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Email Công việc *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
                    <input
                      type="email"
                      required
                      placeholder="nguyenvana@congty.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F6F50]/20 focus:border-[#1F6F50]"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Person & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Họ & tên người phụ trách
                  </label>
                  <input
                    type="text"
                    placeholder="VD: Kỹ sư Nguyễn Văn A"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F6F50]/20 focus:border-[#1F6F50]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Số điện thoại / Zalo
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
                    <input
                      type="tel"
                      placeholder="0912 345 678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F6F50]/20 focus:border-[#1F6F50]"
                    />
                  </div>
                </div>
              </div>

              {/* Material Category & Estimated Volume */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Nhóm phế phẩm / nguyên liệu
                  </label>
                  <select
                    value={formData.materialCategory}
                    onChange={(e) => setFormData({ ...formData, materialCategory: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F6F50]/20 focus:border-[#1F6F50] bg-white"
                  >
                    <option value="plastic">Nhựa công nghiệp & bavia (PP, PE, ABS, PET)</option>
                    <option value="textile">Dệt may & sợi vụn cắt bàn may</option>
                    <option value="metal">Kim loại & phoi tiện CNC</option>
                    <option value="wood">Gỗ vụn, dăm bào & mùn cưa</option>
                    <option value="mineral">Khoáng phụ phẩm (Tro bay, xỉ lò cao)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Sản lượng phát sinh / nhu cầu
                  </label>
                  <select
                    value={formData.estimatedVolume}
                    onChange={(e) => setFormData({ ...formData, estimatedVolume: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F6F50]/20 focus:border-[#1F6F50] bg-white"
                  >
                    <option value="Dưới 5 tấn/tháng">Dưới 5 tấn / tháng</option>
                    <option value="5 - 20 tấn/tháng">5 - 20 tấn / tháng</option>
                    <option value="20 - 50 tấn/tháng">20 - 50 tấn / tháng</option>
                    <option value="Trên 50 tấn/tháng">Trên 50 tấn / tháng (Bao tiêu lớn)</option>
                  </select>
                </div>
              </div>

              {/* Province / Location */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Khu vực nhà máy / KCN
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    placeholder="VD: KCN VSIP 1, Bình Dương hoặc KCN Quế Võ, Bắc Ninh"
                    value={formData.province}
                    onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F6F50]/20 focus:border-[#1F6F50]"
                  />
                </div>
              </div>

              {/* Specific note */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Mô tả chi tiết đặc tính phế phẩm hoặc yêu cầu kỹ thuật
                </label>
                <textarea
                  rows={2}
                  placeholder="VD: Bavia nhựa PP đen đồng chất, có lẫn 1% tem giấy, cần tìm đơn vị có máy băm thu gom cố định..."
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F6F50]/20 focus:border-[#1F6F50]"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#1F6F50] to-[#2196C9] hover:from-[#18583f] hover:to-[#0284C7] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-99 disabled:opacity-50"
                >
                  {loading ? (
                    <span>Đang mã hóa & gửi thông tin...</span>
                  ) : (
                    <>
                      <span>Gửi thông tin tham gia Early Access</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-gray-400 text-center">
                Cam kết bảo mật thông tin kinh doanh B2B theo thỏa thuận NDA. Không spam.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
