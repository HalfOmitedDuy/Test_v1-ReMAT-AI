import React, { useState } from 'react';
import { 
  X, Sparkles, Send, CheckCircle2, ArrowRight, ShieldCheck, 
  HelpCircle, RefreshCw, Layers, TrendingUp, Building2, Flame 
} from 'lucide-react';
import { MOCK_LISTINGS } from '../data/mockData';

interface AIMatcherDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onViewListing: (listingId: string) => void;
  onOpenEarlyAccess: (type: 'seller' | 'buyer' | 'both') => void;
}

export const AIMatcherDrawer: React.FC<AIMatcherDrawerProps> = ({
  isOpen,
  onClose,
  onViewListing,
  onOpenEarlyAccess
}) => {
  const [inputText, setInputText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<{
    category: string;
    subCategory: string;
    extractedSpecs: { name: string; value: string }[];
    estimatedPriceRange: string;
    esgReduction: string;
    compatibleMatches: typeof MOCK_LISTINGS;
  } | null>(null);

  if (!isOpen) return null;

  const samplePrompts = [
    'Xưởng ép nhựa tại KCN VSIP 1 có 25 tấn bavia PP đen sạch phát sinh mỗi tháng cần tìm nhà máy bao tiêu.',
    'Nhà máy may mặc KCN Nhơn Trạch phát sinh 30 tấn vải vụn dệt kim Cotton trắng, đã đóng bành ép 250kg.',
    'Cần tìm nguồn phoi tiện nhôm CNC 6061 đã tách dầu, nhận 15-20 tấn/tháng tại khu vực miền Bắc.'
  ];

  const handleAnalyze = (textToAnalyze?: string) => {
    const text = textToAnalyze || inputText;
    if (!text.trim()) return;

    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);

      const isTextile = text.toLowerCase().includes('vải') || text.toLowerCase().includes('dệt') || text.toLowerCase().includes('sợi');
      const isMetal = text.toLowerCase().includes('nhôm') || text.toLowerCase().includes('phoi') || text.toLowerCase().includes('sắt');
      
      if (isTextile) {
        setAnalysisResult({
          category: 'Dệt may & Sợi vụn (Textile Waste)',
          subCategory: 'Vải vụn cắt bàn may & xơ sợi tái sinh',
          extractedSpecs: [
            { name: 'Phân loại sợi', value: 'Cotton tự nhiên 80-100%' },
            { name: 'Độ ẩm ước tính', value: '7.0 - 8.5% (Tiêu chuẩn kho mát)' },
            { name: 'Quy chuẩn đóng gói', value: 'Bành ép kiện nẹp kẽm 250kg' },
            { name: 'Mã phế liệu HS', value: '6310.90.10 (Vải vụn dệt may sạch)' }
          ],
          estimatedPriceRange: '4.500.000 - 5.400.000 đ/tấn',
          esgReduction: 'Giảm ~2.8 tấn CO2e trên mỗi tấn vật liệu được tái tuần hoàn',
          compatibleMatches: MOCK_LISTINGS.filter(l => l.category === 'textile')
        });
      } else if (isMetal) {
        setAnalysisResult({
          category: 'Kim loại & Hợp kim công nghiệp (Metal Scrap)',
          subCategory: 'Phoi tiện nhôm hợp kim cơ khí CNC',
          extractedSpecs: [
            { name: 'Mác hợp kim', value: 'Nhôm Al 6061 / 7075' },
            { name: 'Xử lý tách dầu', value: 'Ly tâm đạt độ khô bề mặt > 98%' },
            { name: 'Tạp sắt từ tính (Fe)', value: '< 0.2% (Đạt chuẩn nấu phôi)' },
            { name: 'Mã phế liệu HS', value: '7602.00.00 (Phế liệu nhôm công nghiệp)' }
          ],
          estimatedPriceRange: '41.000.000 - 45.500.000 đ/tấn',
          esgReduction: 'Tiết kiệm 95% năng lượng so với luyện nhôm bô-xít nguyên sinh',
          compatibleMatches: MOCK_LISTINGS.filter(l => l.category === 'metal')
        });
      } else {
        // Default to Plastic
        setAnalysisResult({
          category: 'Nhựa kỹ thuật công nghiệp (Polymer Waste)',
          subCategory: 'Bavia ép phun & linh kiện khuôn đúc PP/PE',
          extractedSpecs: [
            { name: 'Gốc Polymer', value: 'Polypropylene (PP) đồng tính' },
            { name: 'Màu sắc & phụ gia', value: 'Đen carbon / không tráng phủ kim loại' },
            { name: 'Chỉ số MFI dự kiến', value: '10 - 14 g/10min' },
            { name: 'Mã phế liệu HS', value: '3915.90.00 (Phế liệu hạt & mẩu nhựa)' }
          ],
          estimatedPriceRange: '11.500.000 - 13.000.000 đ/tấn',
          esgReduction: 'Giảm ~1.6 tấn CO2e trên mỗi tấn thay thế nhựa hóa thạch nguyên sinh',
          compatibleMatches: MOCK_LISTINGS.filter(l => l.category === 'plastic')
        });
      }
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div 
        id="ai-matcher-drawer-panel"
        className="w-full max-w-xl bg-white h-full shadow-2xl flex flex-col border-l border-gray-200 overflow-hidden"
      >
        {/* Drawer Header */}
        <div className="bg-gradient-to-r from-[#17382B] via-[#1F6F50] to-[#2196C9] p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-white/10 backdrop-blur-xs flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[#2196C9]" />
            </div>
            <div>
              <h3 className="text-base font-bold font-['Space_Grotesk']">
                ReMat Intelligence Engine
              </h3>
              <p className="text-xs text-emerald-100">
                Thử nghiệm phân tích mô tả phế phẩm & gợi ý ghép cặp tức thì
              </p>
            </div>
          </div>

          <button
            id="close-ai-drawer-btn"
            onClick={onClose}
            className="p-1.5 text-white/80 hover:text-white rounded-lg hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5">
          
          {/* Natural Language Prompt Input */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
              Nhập mô tả phế phẩm hoặc nhu cầu nguyên liệu của bạn:
            </label>
            <div className="relative">
              <textarea
                rows={3}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="VD: Chúng tôi là xưởng gia công ép nhựa tại Bình Dương, phát sinh 20 tấn bavia nhựa PP màu đen mỗi tháng, cần đơn vị thu mua bao tiêu..."
                className="w-full p-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F6F50]/20 focus:border-[#1F6F50]"
              />
              <button
                id="submit-ai-prompt-btn"
                onClick={() => handleAnalyze()}
                disabled={isAnalyzing || !inputText.trim()}
                className="absolute right-2.5 bottom-3 px-3.5 py-1.5 rounded-lg bg-[#1F6F50] hover:bg-[#18583f] text-white text-xs font-bold shadow-xs transition-all flex items-center gap-1.5 disabled:opacity-40"
              >
                {isAnalyzing ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Đang trích xuất...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3.5 h-3.5 text-[#2196C9]" />
                    <span>Phân tích</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Quick Sample Prompts */}
          <div>
            <div className="text-[11px] font-semibold text-gray-500 mb-1.5">
              Hoặc thử mẫu mô tả thực tế tại KCN:
            </div>
            <div className="space-y-1.5">
              {samplePrompts.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setInputText(p);
                    handleAnalyze(p);
                  }}
                  className="w-full text-left p-2 rounded-lg bg-gray-50 hover:bg-emerald-50/70 border border-gray-100 hover:border-emerald-200 text-xs text-gray-600 hover:text-[#1F6F50] transition-colors leading-relaxed"
                >
                  "{p}"
                </button>
              ))}
            </div>
          </div>

          {/* Analysis Results Display */}
          {analysisResult && (
            <div className="p-4 rounded-2xl border border-emerald-200 bg-emerald-50/30 space-y-4 animate-in fade-in duration-300">
              
              <div className="flex items-center justify-between pb-2 border-b border-emerald-100">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2F9E6E]" />
                  <span className="text-xs font-bold text-emerald-950 font-['Space_Grotesk']">
                    Kết Quả Trích Xuất & Khuyến Nghị Re:Mat AI
                  </span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-[#1F6F50] font-bold">
                  Khớp dữ liệu KCN
                </span>
              </div>

              {/* Categorization & Price */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-white rounded-xl border border-emerald-100">
                  <span className="text-gray-400 block text-[10px] uppercase font-bold">Phân nhóm vật liệu</span>
                  <span className="font-bold text-gray-900 block mt-0.5">{analysisResult.category}</span>
                  <span className="text-[11px] text-gray-500">{analysisResult.subCategory}</span>
                </div>

                <div className="p-3 bg-white rounded-xl border border-emerald-100">
                  <span className="text-gray-400 block text-[10px] uppercase font-bold">Khung giá tham chiếu</span>
                  <span className="font-bold text-[#1F6F50] font-mono text-sm block mt-0.5">
                    {analysisResult.estimatedPriceRange}
                  </span>
                  <span className="text-[10px] text-gray-400">Dựa trên dữ liệu giao dịch Q1/2026</span>
                </div>
              </div>

              {/* Extracted Technical Specs */}
              <div className="bg-white p-3.5 rounded-xl border border-emerald-100 space-y-1.5 text-xs">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block mb-1">
                  Thông số chuẩn hóa đề xuất cho QC
                </span>
                {analysisResult.extractedSpecs.map((spec, i) => (
                  <div key={i} className="flex justify-between py-1 border-b border-gray-50 last:border-0">
                    <span className="text-gray-600">{spec.name}:</span>
                    <span className="font-semibold text-gray-900 font-mono text-[11px]">{spec.value}</span>
                  </div>
                ))}
              </div>

              {/* ESG Metric */}
              <div className="p-3 rounded-xl bg-sky-50 border border-sky-200/80 text-xs text-sky-900 flex items-start gap-2">
                <TrendingUp className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">Đóng góp chỉ số ESG / Giảm phát thải: </span>
                  <span>{analysisResult.esgReduction}</span>
                </div>
              </div>

              {/* Matched Listings in MVP Database */}
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-gray-800 mb-2">
                  <span>Đối tác tương thích trên hệ thống ({analysisResult.compatibleMatches.length}):</span>
                  <span className="text-emerald-700 text-[11px]">Tỷ lệ khớp 89 - 97%</span>
                </div>

                <div className="space-y-2">
                  {analysisResult.compatibleMatches.map((m) => (
                    <div
                      key={m.id}
                      onClick={() => {
                        onClose();
                        onViewListing(m.id);
                      }}
                      className="p-3 bg-white rounded-xl border border-gray-200 hover:border-[#1F6F50] transition-all cursor-pointer shadow-2xs hover:shadow-xs group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase text-[#1F6F50] bg-emerald-50 px-1.5 py-0.5 rounded">
                          {m.type === 'supply' ? 'Bên Cung' : 'Bên Cầu'} • Match {m.aiMatchScore}%
                        </span>
                        <span className="text-xs font-mono font-bold text-gray-800">
                          {m.quantity} {m.unit}
                        </span>
                      </div>
                      <h5 className="text-xs font-bold text-gray-900 mt-1 line-clamp-1 group-hover:text-[#1F6F50]">
                        {m.title}
                      </h5>
                      <p className="text-[11px] text-gray-500 mt-0.5 flex items-center justify-between">
                        <span>{m.location.industrialPark}, {m.location.province}</span>
                        <span className="text-[#1F6F50] font-semibold text-[10px] flex items-center gap-0.5">
                          Xem chi tiết <ArrowRight className="w-3 h-3" />
                        </span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Final CTA */}
              <div className="pt-2">
                <button
                  onClick={() => {
                    onClose();
                    onOpenEarlyAccess('both');
                  }}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#1F6F50] hover:bg-[#18583f] text-white text-xs font-bold shadow-xs transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Mở phiên kết nối chính thức cho lô hàng này</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          )}

          {/* System Transparency Notice */}
          <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200/80 text-[11px] text-gray-600 space-y-1.5">
            <div className="font-bold flex items-center gap-1.5 text-gray-800">
              <ShieldCheck className="w-4 h-4 text-[#2196C9]" />
              Cam kết Human-in-the-loop:
            </div>
            <p className="leading-relaxed">
              Mô hình AI chỉ đề xuất gợi ý phân loại và tương thích. Trước khi hợp đồng được ký kết, đội ngũ chuyên viên QC Re:Mat sẽ trực tiếp xác thực mẫu vật lý và kiểm tra hồ sơ pháp lý môi trường của cả hai bên.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
