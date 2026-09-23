import React, { useState } from 'react';
import { INDUSTRIAL_HUBS, calculateLogisticsCost } from '../data/mockData';
import { 
  Truck, MapPin, ArrowRight, TrendingDown, Leaf, ShieldCheck, 
  Sparkles, CheckCircle2, X, Navigation, Fuel, Clock, DollarSign 
} from 'lucide-react';

interface LogisticsOptimizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultOriginId?: string;
  defaultDestId?: string;
  defaultVolume?: number;
}

export const LogisticsOptimizerModal: React.FC<LogisticsOptimizerModalProps> = ({
  isOpen,
  onClose,
  defaultOriginId = 'vsip1_bd',
  defaultDestId = 'nhontrach3_dn',
  defaultVolume = 25
}) => {
  const [originId, setOriginId] = useState<string>(defaultOriginId);
  const [destId, setDestId] = useState<string>(defaultDestId);
  const [volumeTons, setVolumeTons] = useState<number>(defaultVolume);
  const [booked, setBooked] = useState<boolean>(false);

  if (!isOpen) return null;

  const result = calculateLogisticsCost(originId, destId, volumeTons);

  const formatVND = (num: number) => {
    return new Intl.NumberFormat('vi-VN').format(num) + ' đ';
  };

  const handleBooking = () => {
    setBooked(true);
    setTimeout(() => {
      setBooked(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden shadow-2xl flex flex-col border border-sky-100"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-sky-50 via-white to-emerald-50 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#0284C7] text-white flex items-center justify-center shadow-xs">
              <Truck className="w-5 h-5 text-sky-100" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#0284C7] uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
                Re:Mat Smart Logistics Engine
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-gray-900 font-['Space_Grotesk'] leading-tight">
                Tối Ưu Tuyến Đường & Chi Phí Vận Chuyển Phế Phẩm
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
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* Origin / Destination & Volume Selection Form */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 bg-gray-50/80 p-4 rounded-2xl border border-gray-200/80">
            
            {/* Origin (Bên bán) */}
            <div className="sm:col-span-4 space-y-1">
              <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#1F6F50]" />
                Điểm xuất phát (Bên Bán)
              </label>
              <select
                value={originId}
                onChange={(e) => setOriginId(e.target.value)}
                className="w-full px-3 py-2 text-xs font-semibold bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20 focus:border-[#0284C7]"
              >
                {INDUSTRIAL_HUBS.map((hub) => (
                  <option key={hub.id} value={hub.id}>
                    {hub.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Destination (Bên mua) */}
            <div className="sm:col-span-4 space-y-1">
              <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1">
                <Navigation className="w-3.5 h-3.5 text-[#0284C7]" />
                Điểm đến giao nhận (Bên Mua)
              </label>
              <select
                value={destId}
                onChange={(e) => setDestId(e.target.value)}
                className="w-full px-3 py-2 text-xs font-semibold bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20 focus:border-[#0284C7]"
              >
                {INDUSTRIAL_HUBS.map((hub) => (
                  <option key={hub.id} value={hub.id}>
                    {hub.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Volume */}
            <div className="sm:col-span-4 space-y-1">
              <div className="flex justify-between items-center">
                <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
                  Khối lượng lô hàng
                </label>
                <span className="text-xs font-mono font-bold text-[#0284C7]">
                  {volumeTons} tấn
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="100"
                step="5"
                value={volumeTons}
                onChange={(e) => setVolumeTons(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#0284C7] mt-3"
              />
            </div>

          </div>

          {/* Interactive Route Visualizer with Animated Truck */}
          <div className="bg-gradient-to-r from-[#0F281E] via-[#0B253A] to-[#0A324A] text-white p-5 rounded-2xl relative overflow-hidden shadow-md space-y-4">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#2196C9]" />
                <span className="text-xs font-bold text-sky-200">
                  {result.backhaulRouteName}
                </span>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono">
                <span className="text-gray-300">Khoảng cách: <strong className="text-white">{result.distanceKm} km</strong></span>
                <span className="text-gray-300">Thời gian: <strong className="text-white">{result.estimatedTransitTime}</strong></span>
              </div>
            </div>

            {/* Visual Route Path with Moving Truck */}
            <div className="relative py-4 px-2">
              {/* Progress Line */}
              <div className="h-2 bg-white/20 rounded-full w-full relative">
                <div 
                  className="h-full bg-gradient-to-r from-emerald-400 via-sky-400 to-[#2196C9] rounded-full"
                  style={{ width: '100%' }}
                />
              </div>

              {/* Waypoints */}
              <div className="flex justify-between items-center -mt-4">
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-[10px] font-bold">
                    A
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-200 mt-1 max-w-[130px] text-center">
                    {result.origin.name.split('(')[0]}
                  </span>
                </div>

                {/* Animated Truck Icon in the Middle */}
                <div className="flex flex-col items-center animate-bounce">
                  <div className="px-2.5 py-1 rounded-full bg-sky-500/90 text-white text-[10px] font-bold flex items-center gap-1 shadow-xs">
                    <Truck className="w-3.5 h-3.5" />
                    <span>Ghép chuyến AI</span>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-sky-500 border-2 border-white flex items-center justify-center text-[10px] font-bold">
                    B
                  </div>
                  <span className="text-[11px] font-semibold text-sky-200 mt-1 max-w-[130px] text-center">
                    {result.destination.name.split('(')[0]}
                  </span>
                </div>
              </div>
            </div>

            <div className="text-[11px] text-sky-200/90 bg-white/10 p-2.5 rounded-xl flex items-center justify-between">
              <span>Đội xe khuyến nghị: <strong>{result.recommendedTruck}</strong></span>
              <span className="text-emerald-300">Tải trọng tối ưu 100% hai chiều</span>
            </div>

          </div>

          {/* Cost Comparison Cards: Traditional vs Re:Mat AI Backhaul */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Traditional Logistics (Empty return) */}
            <div className="bg-white p-5 rounded-2xl border border-gray-200/90 shadow-2xs space-y-3 opacity-80">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-gray-500 uppercase">
                  Vận tải truyền thống (Chạy rỗng chiều về)
                </span>
                <Fuel className="w-4 h-4 text-gray-400" />
              </div>

              <div>
                <div className="text-2xl font-bold font-mono text-gray-800">
                  {formatVND(result.standardCostVND)}
                </div>
                <span className="text-[11px] text-gray-400">
                  Đơn giá ~{formatVND(Math.round(result.standardCostVND / volumeTons))} / tấn
                </span>
              </div>

              <div className="text-xs text-gray-500 space-y-1 pt-1 border-t border-gray-100">
                <div className="flex justify-between">
                  <span>Phát thải CO₂:</span>
                  <span className="font-mono">{result.co2StandardKg} kg CO₂e</span>
                </div>
                <div className="flex justify-between text-red-500">
                  <span>Hao phí xe chạy rỗng:</span>
                  <span>+40% phụ phí chuyến</span>
                </div>
              </div>
            </div>

            {/* Re:Mat AI Backhaul Optimization */}
            <div className="bg-gradient-to-br from-emerald-50/80 via-white to-sky-50/50 p-5 rounded-2xl border-2 border-[#1F6F50] shadow-sm space-y-3 relative">
              <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                <TrendingDown className="w-3 h-3" />
                Tiết kiệm {result.savingsPercentage}%
              </div>

              <div>
                <span className="text-xs font-bold text-[#1F6F50] uppercase">
                  Tối ưu Re:Mat Eco-Fleet (Ghép 2 chiều)
                </span>
                <div className="text-3xl font-extrabold font-mono text-[#1F6F50] mt-1">
                  {formatVND(result.optimizedBackhaulCostVND)}
                </div>
                <span className="text-[11px] text-emerald-700 font-semibold">
                  Chỉ còn ~{formatVND(Math.round(result.optimizedBackhaulCostVND / volumeTons))} / tấn
                </span>
              </div>

              <div className="text-xs text-gray-700 space-y-1 pt-2 border-t border-emerald-100">
                <div className="flex justify-between font-bold text-emerald-800">
                  <span>Số tiền tiết kiệm được:</span>
                  <span className="font-mono text-sm">{formatVND(result.savingsVND)}</span>
                </div>
                <div className="flex justify-between text-sky-800">
                  <span className="flex items-center gap-1">
                    <Leaf className="w-3.5 h-3.5 text-emerald-600" />
                    Cắt giảm khí thải:
                  </span>
                  <span className="font-mono font-bold">-{result.co2SavedKg} kg CO₂e (Scope 3)</span>
                </div>
              </div>
            </div>

          </div>

          {booked && (
            <div className="p-4 bg-emerald-100 border border-emerald-300 rounded-2xl text-center text-xs font-bold text-[#1F6F50] flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#2F9E6E]" />
              <span>Đã tiếp nhận yêu cầu điều xe ghép tuyến! Ban điều phối Logistics Re:Mat sẽ liên hệ trong 15 phút.</span>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-gray-500">
            Hợp tác cùng 12 đối tác vận tải chuyên dụng đạt chuẩn xử lý môi trường tại các KCN.
          </span>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl border border-gray-200 hover:bg-gray-100 text-gray-700 font-bold text-xs transition-colors flex-1 sm:flex-initial"
            >
              Đóng
            </button>
            <button
              onClick={handleBooking}
              className="px-5 py-2 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-1.5 flex-1 sm:flex-initial"
            >
              <Truck className="w-3.5 h-3.5" />
              <span>Đặt Điều Xe Tuyến Tối Ưu Này</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
