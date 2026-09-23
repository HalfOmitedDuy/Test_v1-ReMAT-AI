import React, { useState } from 'react';
import { Company, EnterpriseUser, TransactionReview } from '../types';
import { MOCK_COMPANIES } from '../data/mockData';
import { 
  Star, MessageSquare, Award, CheckCircle2, X, 
  ShieldCheck, ArrowRight, UserCheck, Sparkles 
} from 'lucide-react';

interface ReviewTransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: EnterpriseUser | null;
  targetCompanyId?: string | null;
  onOpenAuth: () => void;
  onSubmitReview: (review: TransactionReview) => void;
}

export const ReviewTransactionModal: React.FC<ReviewTransactionModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  targetCompanyId,
  onOpenAuth,
  onSubmitReview
}) => {
  const companiesList = Object.values(MOCK_COMPANIES);

  const [selectedTargetId, setSelectedTargetId] = useState<string>(
    targetCompanyId || companiesList[0].id
  );
  const [transactionType, setTransactionType] = useState<'buy' | 'sell'>('buy');
  const [materialName, setMaterialName] = useState('Nhựa PP bavia kỹ thuật');
  const [volume, setVolume] = useState('25 tấn');
  const [ratingQuality, setRatingQuality] = useState(5);
  const [ratingDelivery, setRatingDelivery] = useState(5);
  const [ratingCooperation, setRatingCooperation] = useState(5);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const targetComp = MOCK_COMPANIES[selectedTargetId] || companiesList[0];

  // Calculate dynamic Trust Score impact
  const avgStars = (ratingQuality + ratingDelivery + ratingCooperation) / 3;
  let scoreImpact = 0;
  if (avgStars >= 4.5) scoreImpact = 1.2;
  else if (avgStars >= 4.0) scoreImpact = 0.8;
  else if (avgStars >= 3.0) scoreImpact = 0.2;
  else scoreImpact = -1.5;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser) {
      onOpenAuth();
      return;
    }

    const newRev: TransactionReview = {
      id: `rev_${Date.now()}`,
      targetCompanyId: targetComp.id,
      targetCompanyName: targetComp.name,
      reviewerId: currentUser.id,
      reviewerCompanyName: currentUser.companyName,
      transactionType,
      materialName,
      volume,
      ratingQuality,
      ratingDelivery,
      ratingCooperation,
      comment: comment || 'Giao dịch hoàn tất thuận lợi, đúng cam kết phẩm cấp.',
      date: new Date().toLocaleDateString('vi-VN'),
      scoreImpact,
      verifiedTransaction: true
    };

    onSubmitReview(newRev);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl flex flex-col border border-emerald-100"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-emerald-50 via-white to-amber-50 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-xs">
              <Star className="w-5 h-5 fill-current" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-700 uppercase tracking-wider">
                Xác Thực Giao Dịch & Đóng Góp Trust Score
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-gray-900 font-['Space_Grotesk'] leading-tight">
                Đánh Giá Lượt Mua / Bán Phế Phẩm
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
        <div className="p-6 space-y-5">
          
          {submitted ? (
            <div className="py-8 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-[#1F6F50] mx-auto animate-bounce" />
              <h4 className="text-lg font-bold text-gray-900 font-['Space_Grotesk']">
                Đã ghi nhận đánh giá thành công!
              </h4>
              <p className="text-xs text-gray-600 max-w-sm mx-auto">
                Đánh giá của bạn đã trực tiếp cập nhật <strong>+{scoreImpact} điểm</strong> vào Trust Score của <strong>{targetComp.name}</strong>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Current Reviewer Status Banner */}
              {currentUser ? (
                <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#1F6F50]" />
                    <span className="text-gray-700">Đang đánh giá với tư cách: <strong className="text-[#1F6F50]">{currentUser.companyName}</strong></span>
                  </div>
                  <span className="font-mono text-[11px] text-emerald-800">MST: {currentUser.taxCode}</span>
                </div>
              ) : (
                <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-between text-xs">
                  <span className="text-amber-800">Bạn cần đăng nhập tài khoản doanh nghiệp để xác thực giao dịch này.</span>
                  <button
                    type="button"
                    onClick={onOpenAuth}
                    className="px-2.5 py-1 rounded-lg bg-amber-700 text-white font-bold text-[11px]"
                  >
                    Đăng Nhập
                  </button>
                </div>
              )}

              {/* Target Company Selector */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Doanh nghiệp đối tác được đánh giá:
                </label>
                <select
                  value={selectedTargetId}
                  onChange={(e) => setSelectedTargetId(e.target.value)}
                  className="w-full px-3 py-2 text-xs font-semibold border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F6F50]/20 focus:border-[#1F6F50] bg-white"
                >
                  {companiesList.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name} (Hiện tại: Trust Score {c.trustScore.overall}/100)
                    </option>
                  ))}
                </select>
              </div>

              {/* Transaction Type & Material */}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Loại hình giao dịch
                  </label>
                  <select
                    value={transactionType}
                    onChange={(e) => setTransactionType(e.target.value as any)}
                    className="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F6F50]/20 focus:border-[#1F6F50] bg-white font-medium"
                  >
                    <option value="buy">Lượt Mua (Tôi mua hàng của họ)</option>
                    <option value="sell">Lượt Bán (Tôi cung cấp cho họ)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Khối lượng giao dịch
                  </label>
                  <input
                    type="text"
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                    placeholder="VD: 25 tấn"
                    className="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F6F50]/20 focus:border-[#1F6F50]"
                  />
                </div>
              </div>

              {/* 3 Core Rating Criteria */}
              <div className="p-3.5 bg-gray-50/80 rounded-2xl border border-gray-200/80 space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block">
                  Chấm điểm 3 tiêu chí cốt lõi (1 - 5 sao):
                </span>

                {/* Criterion 1: Phẩm cấp thực tế */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-700 font-medium">1. Phẩm cấp thực tế vs Phiếu Lab test:</span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <button
                        type="button"
                        key={s}
                        onClick={() => setRatingQuality(s)}
                        className="p-1 hover:scale-115 transition-transform"
                      >
                        <Star className={`w-4 h-4 ${s <= ratingQuality ? 'fill-amber-400 text-amber-500' : 'text-gray-300'}`} />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Criterion 2: Thời gian & Đóng gói */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-700 font-medium">2. Đúng hẹn giao nhận & bao bì:</span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <button
                        type="button"
                        key={s}
                        onClick={() => setRatingDelivery(s)}
                        className="p-1 hover:scale-115 transition-transform"
                      >
                        <Star className={`w-4 h-4 ${s <= ratingDelivery ? 'fill-amber-400 text-amber-500' : 'text-gray-300'}`} />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Criterion 3: Thái độ hợp tác */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-700 font-medium">3. Thái độ hợp tác & thanh toán:</span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <button
                        type="button"
                        key={s}
                        onClick={() => setRatingCooperation(s)}
                        className="p-1 hover:scale-115 transition-transform"
                      >
                        <Star className={`w-4 h-4 ${s <= ratingCooperation ? 'fill-amber-400 text-amber-500' : 'text-gray-300'}`} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Review Comment Area */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Nhận xét chi tiết về lô hàng & cách làm việc:
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Nhận xét cụ thể về độ tinh khiết, tỷ lệ tạp chất, thái độ lái xe bốc hàng hoặc thanh toán đúng hạn..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full p-2.5 text-xs border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F6F50]/20 focus:border-[#1F6F50]"
                />
              </div>

              {/* Trust Score Impact Preview Pill */}
              <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-50 to-amber-50 border border-emerald-200/80 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 font-bold text-gray-800">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>Dự kiến tác động Trust Score:</span>
                </div>
                <span className={`font-mono font-bold px-2 py-0.5 rounded ${
                  scoreImpact >= 0 ? 'bg-emerald-100 text-[#1F6F50]' : 'bg-red-100 text-red-700'
                }`}>
                  {scoreImpact >= 0 ? `+${scoreImpact}` : scoreImpact} điểm
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-[#1F6F50] hover:bg-[#18583f] text-white font-bold text-xs transition-colors shadow-xs flex items-center justify-center gap-1.5"
              >
                <span>Gửi Đánh Giá & Cập Nhật Trust Score</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </form>
          )}

        </div>

      </div>
    </div>
  );
};
