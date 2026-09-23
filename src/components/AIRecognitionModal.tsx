import React, { useState } from 'react';
import { AIRecognitionSample, MaterialCategory } from '../types';
import { AI_RECOGNITION_SAMPLES } from '../data/mockData';
import { 
  Sparkles, Camera, Upload, CheckCircle2, AlertTriangle, 
  ArrowRight, ShieldCheck, DollarSign, X, Layers, Tag, Eye 
} from 'lucide-react';

interface AIRecognitionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSampleForListing?: (sample: AIRecognitionSample) => void;
}

export const AIRecognitionModal: React.FC<AIRecognitionModalProps> = ({
  isOpen,
  onClose,
  onSelectSampleForListing
}) => {
  const [selectedSample, setSelectedSample] = useState<AIRecognitionSample>(AI_RECOGNITION_SAMPLES[0]);
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [customImageUrl, setCustomImageUrl] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSelectSample = (sample: AIRecognitionSample) => {
    setSelectedSample(sample);
    setCustomImageUrl(null);
    triggerScanEffect();
  };

  const triggerScanEffect = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
    }, 1200);
  };

  const handleCustomUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomImageUrl(url);
      triggerScanEffect();
    }
  };

  const currentDisplayImage = customImageUrl || selectedSample.imageUrl;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden shadow-2xl flex flex-col border border-emerald-100"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-emerald-50 via-white to-sky-50 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#1F6F50] text-white flex items-center justify-center shadow-xs">
              <Sparkles className="w-5 h-5 text-[#2196C9]" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#1F6F50] uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                ReMat Computer Vision AI Engine
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-gray-900 font-['Space_Grotesk'] leading-tight">
                Nhận Diện & Phân Loại Phế Phẩm Bằng AI
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

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* Sample Selectors Row */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-700">
                1. Chọn mẫu ảnh phế phẩm thực tế hoặc tải ảnh xưởng:
              </span>
              <label className="text-xs font-semibold text-[#0284C7] hover:text-[#0369A1] cursor-pointer flex items-center gap-1">
                <Upload className="w-3.5 h-3.5" />
                <span>Tải ảnh từ máy</span>
                <input 
                  type="file" 
                  accept="image/*" 
                  className="hidden" 
                  onChange={handleCustomUpload} 
                />
              </label>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {AI_RECOGNITION_SAMPLES.map((sample) => (
                <button
                  key={sample.id}
                  onClick={() => handleSelectSample(sample)}
                  className={`p-2 rounded-xl border text-left flex items-center gap-2 transition-all ${
                    selectedSample.id === sample.id && !customImageUrl
                      ? 'border-[#1F6F50] bg-emerald-50/80 ring-2 ring-[#1F6F50]/20'
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <img
                    src={sample.imageUrl}
                    alt={sample.name}
                    className="w-10 h-10 rounded-lg object-cover shrink-0"
                  />
                  <div className="min-w-0">
                    <span className="block text-[11px] font-bold text-gray-900 truncate">
                      {sample.name.split(' ')[0]} {sample.name.split(' ')[1]}
                    </span>
                    <span className="text-[10px] text-gray-500 truncate block">
                      {sample.category === 'plastic' ? 'Nhựa bavia' : (sample.category === 'metal' ? 'Phoi CNC' : 'Vải dệt may')}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* AI Scanner Visual & Results Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left: Image Scanner Preview with Laser Beam Animation */}
            <div className="lg:col-span-5 space-y-3">
              <div className="relative rounded-2xl overflow-hidden aspect-4/3 bg-gray-900 border border-gray-200 shadow-inner group">
                <img
                  src={currentDisplayImage}
                  alt={selectedSample.name}
                  className="w-full h-full object-cover"
                />

                {/* AI Laser Scan Beam */}
                {isScanning && (
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#2196C9] to-transparent shadow-[0_0_15px_#2196C9] animate-bounce" />
                    <div className="absolute inset-0 bg-[#2196C9]/10 animate-pulse" />
                  </div>
                )}

                {/* Visual Bounding Box Indicator */}
                <div className="absolute inset-6 border-2 border-emerald-400/80 rounded-lg pointer-events-none flex flex-col justify-between p-2 shadow-[0_0_12px_rgba(52,211,153,0.3)]">
                  <div className="flex justify-between items-center">
                    <span className="px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 text-[10px] font-mono font-bold backdrop-blur-xs">
                      SPEC_DETECTED: {selectedSample.detectedType}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-blue-950/80 text-sky-300 text-[10px] font-mono font-bold backdrop-blur-xs">
                      CONFIDENCE: {selectedSample.confidence}%
                    </span>
                  </div>

                  <div className="text-[10px] text-emerald-200 font-mono bg-black/60 px-2 py-0.5 rounded w-fit backdrop-blur-xs">
                    HS: {selectedSample.recommendedHsCode.split(' ')[0]}
                  </div>
                </div>

                <div className="absolute bottom-2 right-2">
                  <button
                    onClick={triggerScanEffect}
                    className="px-2.5 py-1 rounded-lg bg-black/70 hover:bg-black/90 text-white text-[10px] font-bold backdrop-blur-xs flex items-center gap-1 transition-all"
                  >
                    <Eye className="w-3 h-3 text-[#2196C9]" />
                    <span>Quét lại AI</span>
                  </button>
                </div>
              </div>

              <div className="text-[11px] text-gray-500 bg-emerald-50/60 p-3 rounded-xl border border-emerald-100 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1F6F50] shrink-0" />
                <span>Mô hình quang phổ AI nhận dạng cấu trúc polyme & mác kim loại dựa trên 45,000+ mẫu công nghiệp.</span>
              </div>
            </div>

            {/* Right: Detected Technical Breakdown Cards */}
            <div className="lg:col-span-7 space-y-4">
              
              {/* Primary Material Identification Card */}
              <div className="bg-white rounded-2xl border border-emerald-200 p-4 shadow-2xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold text-gray-400">
                    Loại vật liệu xác định (Material Category)
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-[#1F6F50] text-xs font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Độ tin cậy {selectedSample.confidence}%
                  </span>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 font-['Space_Grotesk']">
                    {selectedSample.detectedType}
                  </h4>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                    {selectedSample.description}
                  </p>
                </div>

                {/* Parameter Matrix */}
                <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
                  <div className="p-2.5 rounded-xl bg-gray-50 border border-gray-100">
                    <span className="text-[10px] uppercase font-semibold text-gray-400 block">Độ tinh khiết</span>
                    <span className="font-bold text-gray-900 font-mono text-[11px]">{selectedSample.purity}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-gray-50 border border-gray-100">
                    <span className="text-[10px] uppercase font-semibold text-gray-400 block">Quy cách hình thái</span>
                    <span className="font-bold text-gray-900 text-[11px]">{selectedSample.form}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-gray-50 border border-gray-100">
                    <span className="text-[10px] uppercase font-semibold text-gray-400 block">Kiểm soát tạp chất</span>
                    <span className="font-bold text-emerald-700 text-[11px]">{selectedSample.contaminants}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-gray-50 border border-gray-100">
                    <span className="text-[10px] uppercase font-semibold text-gray-400 block">Mã HS khuyến nghị</span>
                    <span className="font-bold text-[#0284C7] font-mono text-[11px]">{selectedSample.recommendedHsCode.split(' ')[0]}</span>
                  </div>
                </div>

                {/* Benchmark Price Recommendation */}
                <div className="p-3 bg-gradient-to-r from-emerald-50 to-teal-50/50 rounded-xl border border-emerald-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1F6F50]" />
                    <div>
                      <span className="text-[10px] uppercase font-bold text-gray-500 block">Định giá tham chiếu Q1/2026</span>
                      <span className="text-xs font-bold text-[#1F6F50] font-mono">{selectedSample.marketPriceRange}</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-gray-500 hidden sm:inline">Cao hơn 28% so với bán phế liệu hỗn tạp</span>
                </div>

              </div>

              {/* Matched Buyers suggestion */}
              <div className="p-4 bg-sky-50/70 rounded-2xl border border-sky-100 space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0284C7] block">
                  3 Doanh Nghiệp Cần Mua Đang Khớp Với Mẫu Này:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedSample.suggestedBuyers.map((buyer, idx) => (
                    <span 
                      key={idx} 
                      className="px-2.5 py-1 rounded-lg bg-white border border-sky-200 text-sky-900 text-xs font-semibold shadow-2xs"
                    >
                      {buyer}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-gray-500">
            Kết quả nhận diện AI được bảo chứng bằng quy trình lấy mẫu test lab 2kg thực tế.
          </span>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl border border-gray-200 hover:bg-gray-100 text-gray-700 font-bold text-xs transition-colors flex-1 sm:flex-initial"
            >
              Đóng
            </button>
            <button
              onClick={() => {
                if (onSelectSampleForListing) {
                  onSelectSampleForListing(selectedSample);
                }
                onClose();
              }}
              className="px-5 py-2 rounded-xl bg-[#1F6F50] hover:bg-[#18583f] text-white font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-1.5 flex-1 sm:flex-initial"
            >
              <span>Dùng Thông Số Này Đăng Bán</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
