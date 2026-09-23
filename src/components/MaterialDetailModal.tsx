import React, { useState } from 'react';
import { MaterialListing } from '../types';
import { TrustScoreBadge } from './TrustScoreBadge';
import { 
  X, MapPin, Calendar, FileText, CheckCircle2, ShieldAlert, 
  Sparkles, ArrowRight, Building2, Package, Layers, Droplets, 
  Send, AlertCircle, Truck, Star 
} from 'lucide-react';

interface MaterialDetailModalProps {
  listing: MaterialListing | null;
  isOpen: boolean;
  onClose: () => void;
  onViewCompany: (companyId: string) => void;
  onRequestConnect: (listing: MaterialListing) => void;
  onOpenLogistics?: (originHub?: string, volume?: number) => void;
  onOpenReview?: (companyId: string) => void;
}

export const MaterialDetailModal: React.FC<MaterialDetailModalProps> = ({
  listing,
  isOpen,
  onClose,
  onViewCompany,
  onRequestConnect,
  onOpenLogistics,
  onOpenReview
}) => {
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [connectSuccess, setConnectSuccess] = useState<boolean>(false);
  const [sampleRequested, setSampleRequested] = useState<boolean>(false);

  if (!isOpen || !listing) return null;

  const handleConnect = () => {
    onRequestConnect(listing);
    setConnectSuccess(true);
    setTimeout(() => {
      setConnectSuccess(false);
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        id="material-detail-modal-card"
        className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50/80">
          <div className="flex items-center gap-2">
            <span className={`px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
              listing.type === 'supply'
                ? 'bg-emerald-100 text-[#1F6F50] border border-emerald-200'
                : 'bg-sky-100 text-[#0284C7] border border-sky-200'
            }`}>
              {listing.type === 'supply' ? 'Nguồn Cung Phế Phẩm' : 'Nhu Cầu Thu Mua'}
            </span>
            <span className="text-xs text-gray-500 font-mono">
              Mã #{listing.id}
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded bg-emerald-50 text-[#1F6F50]">
              <Sparkles className="w-3 h-3 text-[#2196C9]" />
              AI Match {listing.aiMatchScore}%
            </span>
          </div>

          <button
            id="close-material-modal-btn"
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Main Title & Price Header */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="space-y-1.5 max-w-2xl">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug font-['Space_Grotesk']">
                {listing.title}
              </h2>
              <div className="flex flex-wrap items-center gap-3 text-xs text-gray-600">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-gray-400" />
                  {listing.location.industrialPark}, {listing.location.province} ({listing.location.region})
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-gray-400" />
                  Cập nhật: {listing.createdDate}
                </span>
              </div>
            </div>

            <div className="bg-emerald-50/70 border border-emerald-200/80 p-3.5 rounded-xl shrink-0 text-left md:text-right">
              <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                Mức giá tham chiếu Re:Mat
              </div>
              <div className="text-lg font-extrabold text-[#1F6F50] font-mono mt-0.5">
                {listing.priceEstimate}
              </div>
              <div className="text-[11px] text-gray-500 mt-0.5">
                Khối lượng: <span className="font-bold text-gray-800">{listing.quantity} {listing.unit}</span>
              </div>
            </div>
          </div>

          {/* Grid Layout: Visuals on Left, Key Specs & Trust Score on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left: Image & Specs */}
            <div className="lg:col-span-7 space-y-4">
              {/* Main Image */}
              <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-100 border border-gray-200 shadow-2xs">
                <img
                  src={listing.images[selectedImage] || listing.images[0]}
                  alt={listing.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 px-2 py-1 rounded bg-black/60 backdrop-blur-xs text-white text-[11px]">
                  Ảnh thực tế lô hàng tại nhà máy
                </div>
              </div>

              {/* Thumbnails */}
              {listing.images.length > 1 && (
                <div className="flex gap-2">
                  {listing.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === idx ? 'border-[#1F6F50] scale-98' : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="thumb" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Detailed Description */}
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700">
                  Mô tả tình trạng & Nguồn gốc phát sinh
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {listing.description}
                </p>
              </div>

              {/* Technical Specifications Table */}
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                <div className="bg-gray-100/70 px-4 py-2.5 font-bold text-xs uppercase tracking-wider text-gray-700 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#1F6F50]" />
                  Thông số Kỹ thuật & Tiêu chuẩn Phế phẩm
                </div>
                <div className="divide-y divide-gray-100 text-xs">
                  <div className="grid grid-cols-2 p-3 bg-white">
                    <span className="text-gray-500 font-medium">Độ tinh khiết / Thành phần:</span>
                    <span className="font-semibold text-gray-900">{listing.specifications.purity}</span>
                  </div>
                  <div className="grid grid-cols-2 p-3 bg-gray-50/50">
                    <span className="text-gray-500 font-medium">Hình thái vật lý:</span>
                    <span className="font-semibold text-gray-900">{listing.specifications.form}</span>
                  </div>
                  <div className="grid grid-cols-2 p-3 bg-white">
                    <span className="text-gray-500 font-medium">Độ ẩm kiểm nghiệm:</span>
                    <span className="font-semibold text-gray-900">{listing.specifications.moisture}</span>
                  </div>
                  <div className="grid grid-cols-2 p-3 bg-gray-50/50">
                    <span className="text-gray-500 font-medium">Quy cách bao bì lưu kho:</span>
                    <span className="font-semibold text-gray-900">{listing.specifications.packaging}</span>
                  </div>
                  <div className="grid grid-cols-2 p-3 bg-white">
                    <span className="text-gray-500 font-medium">Tần suất cấp hàng:</span>
                    <span className="font-semibold text-gray-900">{listing.specifications.supplyCadence}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right: Company Trust Card & QC Testing */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Enterprise Trust Card */}
              <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-2xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                    Đơn vị đăng tin
                  </span>
                  <button
                    onClick={() => onViewCompany(listing.company.id)}
                    className="text-xs text-[#1F6F50] font-bold hover:underline flex items-center gap-1"
                  >
                    Xem hồ sơ <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 text-[#1F6F50] flex items-center justify-center font-bold text-sm shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 leading-tight">
                      {listing.company.name}
                    </h4>
                    <p className="text-xs text-gray-500 mt-0.5">
                      MST: {listing.company.taxCode} • Ngành: {listing.company.industry}
                    </p>
                  </div>
                </div>

                {/* Trust Score Visualizer */}
                <div className="pt-2 border-t border-gray-100">
                  <TrustScoreBadge 
                    trustScore={listing.company.trustScore} 
                    size="md"
                    onOpenDetails={() => onViewCompany(listing.company.id)}
                  />
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {listing.company.badges.map((b, i) => (
                    <span key={i} className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 font-medium">
                      ✓ {b}
                    </span>
                  ))}
                </div>
              </div>

              {/* Lab QC Verification Report Box */}
              {listing.testReport ? (
                <div className="p-4 rounded-xl border border-emerald-200/90 bg-emerald-50/40 space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-emerald-900">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#2F9E6E]" />
                      <span>Chứng chỉ Kiểm định Độc lập</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">
                      {listing.testReport.labName}
                    </span>
                  </div>

                  <p className="text-[11px] text-gray-600">
                    Mã số phiếu: <strong className="font-mono text-gray-900">{listing.testReport.reportNo}</strong> • Ngày cấp: {listing.testReport.issueDate}
                  </p>

                  <div className="space-y-1.5 text-xs">
                    {listing.testReport.parameters.map((param, i) => (
                      <div key={i} className="flex justify-between items-center py-1 border-b border-emerald-100/80 last:border-0">
                        <span className="text-gray-600 text-[11px]">{param.name}:</span>
                        <div className="text-right">
                          <span className="font-bold text-gray-900 text-[11px] font-mono">{param.value}</span>
                          <span className="text-[9px] text-gray-400 block">{param.standard}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="text-[10px] text-emerald-800 font-medium flex items-center gap-1 pt-1">
                    <Sparkles className="w-3 h-3 text-[#2196C9]" />
                    Đã kiểm chứng bởi mạng lưới Human-in-the-loop của Re:Mat AI
                  </div>
                </div>
              ) : (
                <div className="p-3.5 rounded-xl border border-amber-200 bg-amber-50/50 text-xs text-amber-800 space-y-1">
                  <div className="font-bold flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-amber-600" />
                    Chưa có phiếu Lab độc lập
                  </div>
                  <p className="text-[11px] text-amber-700">
                    Lô hàng đang ở trạng thái thẩm định thực địa. Re:Mat AI hỗ trợ gửi mẫu test lab trước khi giao dịch.
                  </p>
                </div>
              )}

              {/* Action Buttons: Request Connect & Sample */}
              <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/60 space-y-2.5">
                <div className="text-xs font-bold text-gray-800 flex items-center justify-between">
                  <span>Hành động Giao dịch</span>
                  <span className="text-[11px] text-[#0284C7] font-semibold">
                    {listing.potentialBuyersCount} đối tác đang quan tâm
                  </span>
                </div>

                {connectSuccess ? (
                  <div className="p-3 bg-emerald-100 text-[#1F6F50] rounded-lg text-xs font-bold text-center flex items-center justify-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    Đã gửi yêu cầu kết nối! Chuyên viên QC sẽ liên hệ trong 2h.
                  </div>
                ) : (
                  <>
                    <button
                      id="action-request-connect-btn"
                      onClick={handleConnect}
                      className="w-full py-2.5 px-4 rounded-lg bg-[#1F6F50] hover:bg-[#18583f] text-white font-bold text-sm shadow-xs transition-all flex items-center justify-center gap-2 active:scale-98"
                    >
                      <Send className="w-4 h-4" />
                      <span>Yêu cầu Kết nối & Khảo sát lô hàng</span>
                    </button>

                    <button
                      id="action-request-sample-btn"
                      onClick={() => setSampleRequested(!sampleRequested)}
                      className="w-full py-2 px-3 rounded-lg border border-[#2196C9] bg-sky-50/80 hover:bg-sky-100 text-[#0284C7] font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Package className="w-3.5 h-3.5" />
                      <span>{sampleRequested ? '✓ Đã đăng ký nhận 2kg mẫu thử QC' : 'Đăng ký gửi mẫu thử (2kg) về nhà máy'}</span>
                    </button>

                    {/* Integrated Tools: Logistics Cost Calculator & Trust Review */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      {onOpenLogistics && (
                        <button
                          type="button"
                          onClick={() => {
                            onOpenLogistics(
                              listing.location.industrialPark.toLowerCase().includes('bình dương') || listing.location.industrialPark.toLowerCase().includes('vsip') ? 'vsip1_bd' : 'nhontrach3_dn',
                              listing.quantity
                            );
                          }}
                          className="py-2 px-2.5 rounded-lg border border-sky-300 bg-sky-50/60 hover:bg-sky-100 text-[#0284C7] font-bold text-[11px] flex items-center justify-center gap-1"
                        >
                          <Truck className="w-3.5 h-3.5" />
                          <span>Tính cước xe ghép</span>
                        </button>
                      )}

                      {onOpenReview && (
                        <button
                          type="button"
                          onClick={() => onOpenReview(listing.company.id)}
                          className="py-2 px-2.5 rounded-lg border border-amber-300 bg-amber-50/60 hover:bg-amber-100 text-amber-800 font-bold text-[11px] flex items-center justify-center gap-1"
                        >
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                          <span>Đánh giá đối tác</span>
                        </button>
                      )}
                    </div>
                  </>
                )}

                <p className="text-[10px] text-gray-500 text-center">
                  Giao dịch an toàn: Re:Mat bảo chứng hợp đồng, hỗ trợ ký quỹ thanh toán & không trực tiếp can thiệp xe vận chuyển.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
