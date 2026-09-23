import React, { useState, useMemo } from 'react';
import { MaterialCategory, ListingType, MaterialListing } from '../types';
import { MOCK_LISTINGS, CATEGORIES_LIST } from '../data/mockData';
import { TrustScoreBadge } from '../components/TrustScoreBadge';
import { 
  Search, Filter, MapPin, Sparkles, ArrowUpDown, ChevronRight, 
  Layers, Package, CheckCircle2, Factory, Calendar, Plus, RefreshCw 
} from 'lucide-react';

interface MarketplacePageProps {
  onSelectListing: (listingId: string) => void;
  onViewCompany: (companyId: string) => void;
  onOpenEarlyAccess: (type: 'seller' | 'buyer' | 'both') => void;
  onOpenAIMatcher: () => void;
}

export const MarketplacePage: React.FC<MarketplacePageProps> = ({
  onSelectListing,
  onViewCompany,
  onOpenEarlyAccess,
  onOpenAIMatcher
}) => {
  const [selectedType, setSelectedType] = useState<'all' | ListingType>('all');
  const [selectedCategory, setSelectedCategory] = useState<MaterialCategory>('all');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [selectedVolume, setSelectedVolume] = useState<string>('all');
  const [selectedMinTrust, setSelectedMinTrust] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter logic
  const filteredListings = useMemo(() => {
    return MOCK_LISTINGS.filter((item) => {
      // Type filter
      if (selectedType !== 'all' && item.type !== selectedType) return false;

      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;

      // Region filter
      if (selectedRegion !== 'all' && item.location.province !== selectedRegion) return false;

      // Trust score filter
      if (selectedMinTrust > 0 && item.company.trustScore.overall < selectedMinTrust) return false;

      // Volume filter
      if (selectedVolume === 'low' && item.quantity >= 20) return false;
      if (selectedVolume === 'mid' && (item.quantity < 20 || item.quantity > 50)) return false;
      if (selectedVolume === 'high' && item.quantity <= 50) return false;

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesComp = item.company.name.toLowerCase().includes(query);
        const matchesPurity = item.specifications.purity.toLowerCase().includes(query);
        if (!matchesTitle && !matchesDesc && !matchesComp && !matchesPurity) return false;
      }

      return true;
    });
  }, [selectedType, selectedCategory, selectedRegion, selectedVolume, selectedMinTrust, searchQuery]);

  const handleResetFilters = () => {
    setSelectedType('all');
    setSelectedCategory('all');
    setSelectedRegion('all');
    setSelectedVolume('all');
    setSelectedMinTrust(0);
    setSearchQuery('');
  };

  return (
    <div className="space-y-8 pb-20 pt-6">
      
      {/* Top Banner / Marketplace Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-100 text-[#1F6F50] text-[11px] font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1F6F50] animate-pulse" />
              Sàn Giao Dịch Vật Liệu Thứ Cấp MVP (Live Demo)
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-['Space_Grotesk']">
              Khám phá Nguồn cung & Nhu cầu phế phẩm
            </h1>
            <p className="text-xs sm:text-sm text-gray-500">
              Dữ liệu mô phỏng theo mẫu hình thực tế tại các Khu Công Nghiệp Bình Dương, Đồng Nai, Bắc Ninh.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <button
              onClick={onOpenAIMatcher}
              className="px-4 py-2.5 rounded-xl border border-[#2196C9]/40 bg-sky-50 text-[#0284C7] hover:bg-sky-100 text-xs font-bold transition-all flex items-center gap-1.5 shadow-2xs"
            >
              <Sparkles className="w-4 h-4 text-[#2196C9]" />
              <span>Gợi ý Ghép cặp bằng AI</span>
            </button>

            <button
              onClick={() => onOpenEarlyAccess('seller')}
              className="px-4 py-2.5 rounded-xl bg-[#1F6F50] hover:bg-[#18583f] text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-xs"
            >
              <Plus className="w-4 h-4" />
              <span>Đăng bán Lô phế phẩm</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Search & Filters Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        
        {/* Type Switcher Tabs (All / Supply / Demand) */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex p-1 bg-gray-100/80 rounded-xl border border-gray-200">
            <button
              id="filter-type-all"
              onClick={() => setSelectedType('all')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedType === 'all'
                  ? 'bg-white text-gray-900 shadow-xs'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Tất cả ({MOCK_LISTINGS.length})
            </button>
            <button
              id="filter-type-supply"
              onClick={() => setSelectedType('supply')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                selectedType === 'supply'
                  ? 'bg-[#1F6F50] text-white shadow-xs'
                  : 'text-gray-600 hover:text-[#1F6F50]'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Nguồn Cung (Cần bán)
            </button>
            <button
              id="filter-type-demand"
              onClick={() => setSelectedType('demand')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                selectedType === 'demand'
                  ? 'bg-[#0284C7] text-white shadow-xs'
                  : 'text-gray-600 hover:text-[#0284C7]'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-sky-300" />
              Nhu Cầu (Cần mua)
            </button>
          </div>

          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Tìm theo tên vật liệu (VD: PP, cotton, phoi nhôm, mùn cưa...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F6F50]/20 focus:border-[#1F6F50]"
            />
          </div>
        </div>

        {/* Multi-dropdown Filter Bar */}
        <div className="bg-white p-4 rounded-2xl border border-gray-200/90 shadow-2xs flex flex-wrap items-center gap-3">
          
          {/* Category Dropdown */}
          <div className="flex-1 min-w-[170px]">
            <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1">
              Nhóm vật liệu
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value as MaterialCategory)}
              className="w-full py-1.5 px-2.5 text-xs border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1F6F50] bg-white font-medium text-gray-800"
            >
              <option value="all">Tất cả nhóm</option>
              <option value="plastic">Nhựa công nghiệp & bavia</option>
              <option value="textile">Dệt may & sợi vụn</option>
              <option value="metal">Kim loại & phoi CNC</option>
              <option value="wood">Gỗ & mùn cưa</option>
            </select>
          </div>

          {/* Region Dropdown */}
          <div className="flex-1 min-w-[140px]">
            <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1">
              Khu vực KCN
            </label>
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="w-full py-1.5 px-2.5 text-xs border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1F6F50] bg-white font-medium text-gray-800"
            >
              <option value="all">Tất cả KCN</option>
              <option value="Bình Dương">Bình Dương (VSIP / Nam Tân Uyên)</option>
              <option value="Đồng Nai">Đồng Nai (Nhơn Trạch)</option>
              <option value="Bắc Ninh">Bắc Ninh (Quế Võ)</option>
              <option value="Long An">Long An (Hải Sơn, Đức Hòa)</option>
            </select>
          </div>

          {/* Volume Dropdown */}
          <div className="flex-1 min-w-[150px]">
            <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1">
              Khối lượng định kỳ
            </label>
            <select
              value={selectedVolume}
              onChange={(e) => setSelectedVolume(e.target.value)}
              className="w-full py-1.5 px-2.5 text-xs border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1F6F50] bg-white font-medium text-gray-800"
            >
              <option value="all">Tất cả khối lượng</option>
              <option value="low">Dưới 20 tấn / tháng</option>
              <option value="mid">20 - 50 tấn / tháng</option>
              <option value="high">Trên 50 tấn / tháng</option>
            </select>
          </div>

          {/* Trust Score Filter */}
          <div className="flex-1 min-w-[160px]">
            <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1">
              Mức Trust Score tối thiểu
            </label>
            <select
              value={selectedMinTrust}
              onChange={(e) => setSelectedMinTrust(Number(e.target.value))}
              className="w-full py-1.5 px-2.5 text-xs border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1F6F50] bg-white font-medium text-gray-800"
            >
              <option value="0">Tất cả xếp hạng</option>
              <option value="90">Bạch Kim (Trust Score 90+)</option>
              <option value="80">Vàng trở lên (Trust Score 80+)</option>
            </select>
          </div>

          {/* Reset Filters button */}
          <div className="self-end pt-1">
            <button
              onClick={handleResetFilters}
              className="py-1.5 px-3 rounded-lg border border-gray-200 hover:bg-gray-100 text-gray-600 text-xs font-semibold transition-colors flex items-center gap-1"
              title="Đặt lại bộ lọc"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Đặt lại</span>
            </button>
          </div>

        </div>

      </section>

      {/* Results Count & Listing Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between text-xs text-gray-500 font-medium">
          <span>
            Tìm thấy <strong className="text-gray-900 font-mono">{filteredListings.length}</strong> lô vật liệu phù hợp tiêu chuẩn
          </span>
          <span className="text-[11px] text-[#1F6F50]">
            Mọi bài đăng đều có xác nhận Human-in-the-loop
          </span>
        </div>

        {filteredListings.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-gray-200 space-y-3">
            <Package className="w-12 h-12 mx-auto text-gray-300" />
            <h3 className="text-base font-bold text-gray-800 font-['Space_Grotesk']">
              Không tìm thấy lô vật liệu nào khớp với bộ lọc
            </h3>
            <p className="text-xs text-gray-500 max-w-sm mx-auto">
              Thử đặt lại bộ lọc hoặc sử dụng công cụ AI Sourcing để chúng tôi quét mạng lưới các nhà máy thành viên.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-xs font-bold text-gray-800"
            >
              Xóa bộ lọc tìm kiếm
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredListings.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-gray-200/90 hover:border-[#1F6F50] shadow-2xs hover:shadow-md transition-all flex flex-col overflow-hidden group"
              >
                {/* Image Banner */}
                <div 
                  onClick={() => onSelectListing(item.id)}
                  className="relative aspect-video overflow-hidden bg-gray-100 cursor-pointer"
                >
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                      item.type === 'supply'
                        ? 'bg-[#1F6F50] text-white shadow-xs'
                        : 'bg-[#0284C7] text-white shadow-xs'
                    }`}>
                      {item.type === 'supply' ? 'Cần Bán' : 'Cần Mua'}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-xs text-[11px] font-bold text-[#1F6F50] shadow-xs">
                      <Sparkles className="w-3 h-3 text-[#2196C9]" />
                      AI Match {item.aiMatchScore}%
                    </span>
                  </div>

                  {item.testReport && (
                    <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/60 backdrop-blur-xs text-white text-[10px] flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      Lab {item.testReport.labName.split(' ')[0]}
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  
                  {/* Category & Title */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-[#1F6F50]">
                        {item.categoryName}
                      </span>
                      <span className="text-gray-500 flex items-center gap-1 text-[11px]">
                        <MapPin className="w-3 h-3 text-gray-400" />
                        {item.location.province}
                      </span>
                    </div>

                    <h3 
                      onClick={() => onSelectListing(item.id)}
                      className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-[#1F6F50] transition-colors leading-snug cursor-pointer line-clamp-2"
                    >
                      {item.title}
                    </h3>

                    <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                      {item.specifications.purity}
                    </p>
                  </div>

                  {/* Quantity & Reference Price */}
                  <div className="p-3 bg-gray-50/70 rounded-xl border border-gray-100 flex items-center justify-between text-xs">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-gray-400 block">Khối lượng</span>
                      <span className="font-extrabold text-gray-900 font-mono text-sm">
                        {item.quantity} {item.unit}
                      </span>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] uppercase font-bold text-gray-400 block">Đơn giá tham chiếu</span>
                      <span className="font-bold text-[#1F6F50] font-mono">
                        {item.priceEstimate.split('(')[0]}
                      </span>
                    </div>
                  </div>

                  {/* Company & Trust Score Footer */}
                  <div className="pt-2 border-t border-gray-100 flex items-center justify-between gap-2">
                    <button
                      onClick={() => onViewCompany(item.company.id)}
                      className="text-left group/comp max-w-[180px]"
                      title="Xem hồ sơ & Trust Score doanh nghiệp"
                    >
                      <span className="text-[11px] font-bold text-gray-800 line-clamp-1 group-hover/comp:text-[#1F6F50] transition-colors">
                        {item.company.name}
                      </span>
                      <div className="mt-0.5">
                        <TrustScoreBadge trustScore={item.company.trustScore} size="sm" />
                      </div>
                    </button>

                    <button
                      onClick={() => onSelectListing(item.id)}
                      className="px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-[#1F6F50] text-[#1F6F50] hover:text-white font-bold text-xs transition-colors flex items-center gap-1 shrink-0"
                    >
                      <span>Kết nối</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

      </section>

      {/* Floating Bottom AI Assistant Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#17382B] to-[#2196C9] rounded-2xl p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold font-['Space_Grotesk'] flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-emerald-300" />
              Bạn muốn đăng tải một mẻ phế phẩm mới?
            </h4>
            <p className="text-xs text-emerald-100">
              Chỉ mất 2 phút để AI trích xuất thông số kỹ thuật và đưa vào thuật toán ghép cặp KCN.
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => onOpenEarlyAccess('seller')}
              className="px-5 py-2.5 rounded-xl bg-white text-[#1F6F50] hover:bg-emerald-50 font-bold text-xs transition-all shadow-xs"
            >
              Đăng tin phế phẩm
            </button>
            <button
              onClick={() => onOpenEarlyAccess('buyer')}
              className="px-5 py-2.5 rounded-xl bg-black/20 hover:bg-black/30 border border-white/20 text-white font-bold text-xs transition-all"
            >
              Đăng nhu cầu mua
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
