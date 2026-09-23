import React from 'react';
import { Company } from '../types';
import { MOCK_COMPANIES, MOCK_LISTINGS } from '../data/mockData';
import { 
  X, Building2, MapPin, ShieldCheck, Award, CheckCircle2, 
  Clock, FileCheck, Phone, Mail, ExternalLink, ArrowRight 
} from 'lucide-react';

interface CompanyProfileModalProps {
  companyId: string | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectListing: (listingId: string) => void;
}

export const CompanyProfileModal: React.FC<CompanyProfileModalProps> = ({
  companyId,
  isOpen,
  onClose,
  onSelectListing
}) => {
  if (!isOpen || !companyId) return null;

  const company: Company = MOCK_COMPANIES[companyId] || {
    id: companyId,
    name: 'Doanh nghiệp Thành viên Re:Mat',
    taxCode: '0319827361',
    industry: 'Chế biến & Sản xuất Công nghiệp',
    province: 'Bình Dương',
    industrialPark: 'KCN VSIP 1',
    establishedYear: 2016,
    contactPerson: 'Đại diện Ban Giám đốc',
    contactTitle: 'Trưởng ban QL Vật tư',
    description: 'Doanh nghiệp đã hoàn thành quy trình xác minh thực địa pháp lý và cam kết tiêu chuẩn kinh tế tuần hoàn của Re:Mat AI.',
    badges: ['Đã xác minh thực địa', 'Hồ sơ pháp lý đầy đủ'],
    trustScore: {
      overall: 89,
      tier: 'Gold',
      auditedDate: '15/02/2026',
      verifiedTransactions: 12,
      breakdown: {
        legalVerification: 23,
        sampleQuality: 27,
        fulfillmentHistory: 22,
        partnerRating: 17
      },
      badges: ['Thành viên Vàng Re:Mat', '100% Hoàn thành giao dịch']
    }
  };

  const companyListings = MOCK_LISTINGS.filter(l => l.company.id === company.id);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        id="company-profile-modal-card"
        className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden"
      >
        {/* Top Header */}
        <div className="bg-gradient-to-r from-[#17382B] to-[#1F6F50] px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white font-bold">
              <Building2 className="w-6 h-6 text-emerald-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl font-bold font-['Space_Grotesk'] text-white">
                  {company.name}
                </h3>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-400 text-emerald-950 font-bold uppercase">
                  Đã thẩm định
                </span>
              </div>
              <p className="text-xs text-emerald-100/90 mt-0.5">
                Mã số thuế: {company.taxCode} • Năm thành lập: {company.establishedYear}
              </p>
            </div>
          </div>

          <button
            id="close-company-modal-btn"
            onClick={onClose}
            className="p-1.5 text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Quick Overview Meta */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 text-xs">
              <span className="text-gray-400 block mb-0.5 font-medium">Ngành nghề chính</span>
              <span className="font-semibold text-gray-800">{company.industry}</span>
            </div>
            <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 text-xs">
              <span className="text-gray-400 block mb-0.5 font-medium">Vị trí nhà máy</span>
              <span className="font-semibold text-gray-800 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                {company.industrialPark}, {company.province}
              </span>
            </div>
            <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 text-xs">
              <span className="text-gray-400 block mb-0.5 font-medium">Người liên hệ xác thực</span>
              <span className="font-semibold text-gray-800">{company.contactPerson} ({company.contactTitle})</span>
            </div>
          </div>

          {/* Description */}
          <div className="text-xs sm:text-sm text-gray-700 leading-relaxed bg-emerald-50/30 p-4 rounded-xl border border-emerald-100/60">
            {company.description}
          </div>

          {/* Visual Trust Score Breakdown Section */}
          <div className="p-5 rounded-2xl border border-emerald-200/90 bg-gradient-to-br from-emerald-50/40 to-sky-50/30 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-gray-200/60">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#2196C9]" />
                <h4 className="text-sm font-bold text-gray-900 font-['Space_Grotesk']">
                  Hồ sơ Tín nhiệm Re:Mat (Trust Score {company.trustScore.overall}/100)
                </h4>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#1F6F50] text-white">
                  Hạng {company.trustScore.tier}
                </span>
                <span className="text-xs text-gray-500 font-mono">
                  Kiểm định: {company.trustScore.auditedDate}
                </span>
              </div>
            </div>

            {/* 4 Pillars Gauge */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              
              <div className="bg-white p-3.5 rounded-xl border border-gray-100 space-y-1.5 shadow-2xs">
                <div className="flex justify-between items-center text-gray-700">
                  <span className="font-semibold flex items-center gap-1.5">
                    <FileCheck className="w-3.5 h-3.5 text-[#1F6F50]" />
                    Pháp lý & Giấy phép môi trường
                  </span>
                  <span className="font-bold font-mono text-[#1F6F50]">{company.trustScore.breakdown.legalVerification}/25</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#1F6F50] rounded-full" 
                    style={{ width: `${(company.trustScore.breakdown.legalVerification / 25) * 100}%` }}
                  />
                </div>
                <p className="text-[10px] text-gray-400">
                  Đã đối chiếu GP kinh doanh, hồ sơ xả thải & cam kết bảo vệ môi trường
                </p>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-gray-100 space-y-1.5 shadow-2xs">
                <div className="flex justify-between items-center text-gray-700">
                  <span className="font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2F9E6E]" />
                    Độ đồng nhất & Kiểm định Lab QC
                  </span>
                  <span className="font-bold font-mono text-[#2F9E6E]">{company.trustScore.breakdown.sampleQuality}/30</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#2F9E6E] rounded-full" 
                    style={{ width: `${(company.trustScore.breakdown.sampleQuality / 30) * 100}%` }}
                  />
                </div>
                <p className="text-[10px] text-gray-400">
                  Mẫu thử thực tế khớp 97.4% so với thông số công bố trên hệ thống
                </p>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-gray-100 space-y-1.5 shadow-2xs">
                <div className="flex justify-between items-center text-gray-700">
                  <span className="font-semibold flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#2196C9]" />
                    Lịch sử Giao kết & Đúng hạn
                  </span>
                  <span className="font-bold font-mono text-[#2196C9]">{company.trustScore.breakdown.fulfillmentHistory}/25</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#2196C9] rounded-full" 
                    style={{ width: `${(company.trustScore.breakdown.fulfillmentHistory / 25) * 100}%` }}
                  />
                </div>
                <p className="text-[10px] text-gray-400">
                  {company.trustScore.verifiedTransactions} lô hàng giao thành công, 0% chậm trễ giao nhận
                </p>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-gray-100 space-y-1.5 shadow-2xs">
                <div className="flex justify-between items-center text-gray-700">
                  <span className="font-semibold flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
                    Đánh giá Đối tác & Khiếu nại
                  </span>
                  <span className="font-bold font-mono text-indigo-600">{company.trustScore.breakdown.partnerRating}/20</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-indigo-600 rounded-full" 
                    style={{ width: `${(company.trustScore.breakdown.partnerRating / 20) * 100}%` }}
                  />
                </div>
                <p className="text-[10px] text-gray-400">
                  100% đối tác thu mua đánh giá 5 sao về tính trung thực của mẫu
                </p>
              </div>

            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {company.trustScore.badges.map((b, i) => (
                <span key={i} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white border border-emerald-200 text-xs font-semibold text-[#1F6F50]">
                  ✓ {b}
                </span>
              ))}
            </div>
          </div>

          {/* Active Listings from this Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-600 mb-3">
              Danh mục phế phẩm / nguyên liệu đang niêm yết ({companyListings.length})
            </h4>

            {companyListings.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {companyListings.map((l) => (
                  <div
                    key={l.id}
                    onClick={() => {
                      onClose();
                      onSelectListing(l.id);
                    }}
                    className="p-3.5 rounded-xl border border-gray-200 hover:border-[#1F6F50] bg-white transition-all cursor-pointer shadow-2xs hover:shadow-xs group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-emerald-50 text-[#1F6F50]">
                        {l.categoryName}
                      </span>
                      <span className="text-xs font-bold font-mono text-[#1F6F50]">
                        {l.quantity} {l.unit}
                      </span>
                    </div>
                    <h5 className="text-xs font-bold text-gray-900 line-clamp-1 group-hover:text-[#1F6F50] transition-colors">
                      {l.title}
                    </h5>
                    <p className="text-[11px] text-gray-500 mt-1 line-clamp-1">
                      {l.specifications.purity}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-gray-500 italic">
                Doanh nghiệp hiện chưa có thêm lô hàng công khai nào khác.
              </p>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
