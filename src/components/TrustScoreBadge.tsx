import React, { useState } from 'react';
import { ShieldCheck, Award, Info, ChevronDown, CheckCircle2 } from 'lucide-react';
import { TrustScoreData } from '../types';

interface TrustScoreBadgeProps {
  trustScore: TrustScoreData;
  size?: 'sm' | 'md' | 'lg';
  showDetailsToggle?: boolean;
  onOpenDetails?: () => void;
  className?: string;
}

export const TrustScoreBadge: React.FC<TrustScoreBadgeProps> = ({
  trustScore,
  size = 'md',
  showDetailsToggle = false,
  onOpenDetails,
  className = ''
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const getTierColors = (tier: string) => {
    switch (tier) {
      case 'Platinum':
        return {
          bg: 'bg-emerald-50',
          border: 'border-emerald-200',
          badgeText: 'text-[#1F6F50]',
          ring: 'text-[#1F6F50]',
          pill: 'bg-[#1F6F50] text-white',
          label: 'Bạch Kim (Platinum)'
        };
      case 'Gold':
        return {
          bg: 'bg-amber-50',
          border: 'border-amber-200',
          badgeText: 'text-amber-800',
          ring: 'text-amber-600',
          pill: 'bg-amber-600 text-white',
          label: 'Vàng (Gold Verified)'
        };
      case 'Silver':
        return {
          bg: 'bg-slate-50',
          border: 'border-slate-200',
          badgeText: 'text-slate-700',
          ring: 'text-slate-500',
          pill: 'bg-slate-600 text-white',
          label: 'Bạc (Silver Verified)'
        };
      default:
        return {
          bg: 'bg-gray-50',
          border: 'border-gray-200',
          badgeText: 'text-gray-700',
          ring: 'text-gray-500',
          pill: 'bg-gray-500 text-white',
          label: 'Tiêu chuẩn (Standard)'
        };
    }
  };

  const style = getTierColors(trustScore.tier);
  const scorePercent = trustScore.overall;

  if (size === 'sm') {
    return (
      <div 
        id="trust-score-badge-sm"
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-semibold ${style.bg} ${style.border} ${style.badgeText} ${className}`}
        title={`Trust Score: ${trustScore.overall}/100 - Hạng ${style.label}`}
      >
        <ShieldCheck className="w-3.5 h-3.5 text-[#2196C9]" />
        <span>Trust Score</span>
        <span className="font-bold font-mono px-1 rounded bg-white/80 border border-current/20">
          {trustScore.overall}
        </span>
      </div>
    );
  }

  return (
    <div 
      id="trust-score-container"
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div 
        onClick={onOpenDetails}
        className={`inline-flex items-center gap-2.5 px-3 py-1.5 rounded-lg border shadow-xs transition-all ${
          onOpenDetails ? 'cursor-pointer hover:shadow-sm' : ''
        } ${style.bg} ${style.border}`}
      >
        {/* Circular Progress Gauge */}
        <div className="relative w-8 h-8 flex items-center justify-center shrink-0">
          <svg className="w-8 h-8 transform -rotate-90" viewBox="0 0 36 36">
            <path
              className="text-gray-200"
              strokeWidth="3.2"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="transition-all duration-700 ease-out"
              stroke={trustScore.overall >= 90 ? '#1F6F50' : trustScore.overall >= 80 ? '#D97706' : '#2196C9'}
              strokeDasharray={`${scorePercent}, 100`}
              strokeWidth="3.2"
              strokeLinecap="round"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <span className="absolute text-[11px] font-bold font-mono text-gray-800">
            {trustScore.overall}
          </span>
        </div>

        {/* Text & Badges */}
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] uppercase tracking-wider font-bold text-gray-500">Trust Score</span>
            <span className={`text-[10px] px-1.5 py-0.2 rounded font-semibold ${style.pill}`}>
              {trustScore.tier}
            </span>
          </div>
          <span className="text-xs font-semibold text-gray-800 flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-[#2196C9]" />
            {trustScore.verifiedTransactions} giao dịch xác thực
          </span>
        </div>

        {showDetailsToggle && (
          <ChevronDown className="w-3.5 h-3.5 text-gray-400 ml-0.5" />
        )}
      </div>

      {/* Floating Explanatory Preview Card */}
      {showTooltip && (
        <div 
          id="trust-score-tooltip"
          className="absolute z-40 left-0 top-full mt-2 w-72 p-3.5 bg-white rounded-xl shadow-xl border border-gray-100 text-left pointer-events-none animate-in fade-in slide-in-from-top-1 duration-150"
        >
          <div className="flex items-center justify-between pb-2 border-b border-gray-100">
            <div className="flex items-center gap-1.5 font-bold text-xs text-gray-900">
              <Award className="w-4 h-4 text-[#2196C9]" />
              Chi tiết Đánh giá Tín nhiệm Re:Mat
            </div>
            <span className="text-[11px] font-mono text-gray-400">Kỳ {trustScore.auditedDate}</span>
          </div>

          <div className="mt-2.5 space-y-2 text-xs">
            <div>
              <div className="flex justify-between text-gray-600 mb-0.5">
                <span>Pháp lý & Giấy phép môi trường:</span>
                <span className="font-semibold text-gray-900 font-mono">{trustScore.breakdown.legalVerification}/25</span>
              </div>
              <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#1F6F50] rounded-full" 
                  style={{ width: `${(trustScore.breakdown.legalVerification / 25) * 100}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-gray-600 mb-0.5">
                <span>Chất lượng & Kiểm định Lab QC:</span>
                <span className="font-semibold text-gray-900 font-mono">{trustScore.breakdown.sampleQuality}/30</span>
              </div>
              <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#2F9E6E] rounded-full" 
                  style={{ width: `${(trustScore.breakdown.sampleQuality / 30) * 100}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-gray-600 mb-0.5">
                <span>Lịch sử hoàn tất & Đúng hạn:</span>
                <span className="font-semibold text-gray-900 font-mono">{trustScore.breakdown.fulfillmentHistory}/25</span>
              </div>
              <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#2196C9] rounded-full" 
                  style={{ width: `${(trustScore.breakdown.fulfillmentHistory / 25) * 100}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-gray-600 mb-0.5">
                <span>Đánh giá từ đối tác & Đối soát:</span>
                <span className="font-semibold text-gray-900 font-mono">{trustScore.breakdown.partnerRating}/20</span>
              </div>
              <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-indigo-500 rounded-full" 
                  style={{ width: `${(trustScore.breakdown.partnerRating / 20) * 100}%` }}
                />
              </div>
            </div>
          </div>

          <div className="mt-3 pt-2 border-t border-gray-100 flex items-center gap-1 text-[11px] text-[#1F6F50] font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#2F9E6E] shrink-0" />
            Đã thẩm định hồ sơ thực địa bởi chuyên gia Re:Mat
          </div>
        </div>
      )}
    </div>
  );
};
