import React, { useState } from 'react';
import { PageView, MaterialListing, EnterpriseUser, TransactionReview, AIRecognitionSample } from './types';
import { MOCK_LISTINGS, MOCK_ENTERPRISE_USERS, MOCK_COMPANIES } from './data/mockData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { SellersPage } from './pages/SellersPage';
import { BuyersPage } from './pages/BuyersPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { MarketplacePage } from './pages/MarketplacePage';
import { AboutPage } from './pages/AboutPage';
import { EarlyAccessModal } from './components/EarlyAccessModal';
import { MaterialDetailModal } from './components/MaterialDetailModal';
import { CompanyProfileModal } from './components/CompanyProfileModal';
import { AIMatcherDrawer } from './components/AIMatcherDrawer';
import { AIRecognitionModal } from './components/AIRecognitionModal';
import { LogisticsOptimizerModal } from './components/LogisticsOptimizerModal';
import { AuthModal } from './components/AuthModal';
import { ReviewTransactionModal } from './components/ReviewTransactionModal';
import { GlobalEarthBackground } from './components/GlobalEarthBackground';
import { CheckCircle2, X } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  
  // Enterprise User Auth state
  const [currentUser, setCurrentUser] = useState<EnterpriseUser | null>(MOCK_ENTERPRISE_USERS[0]);
  const [authModalOpen, setAuthModalOpen] = useState(false);

  // Modals & Drawers state
  const [earlyAccessOpen, setEarlyAccessOpen] = useState(false);
  const [earlyAccessType, setEarlyAccessType] = useState<'seller' | 'buyer' | 'both'>('both');
  const [selectedListingId, setSelectedListingId] = useState<string | null>(null);
  const [selectedCompanyId, setSelectedCompanyId] = useState<string | null>(null);
  const [aiMatcherOpen, setAiMatcherOpen] = useState(false);

  // New Feature Modals state
  const [aiRecognitionOpen, setAiRecognitionOpen] = useState(false);
  const [logisticsOpen, setLogisticsOpen] = useState(false);
  const [logisticsOrigin, setLogisticsOrigin] = useState('vsip1_bd');
  const [logisticsVolume, setLogisticsVolume] = useState(25);
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [reviewTargetCompanyId, setReviewTargetCompanyId] = useState<string | null>(null);

  // Toast notification state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const handleOpenEarlyAccess = (type: 'seller' | 'buyer' | 'both') => {
    setEarlyAccessType(type);
    setEarlyAccessOpen(true);
  };

  const handleSelectListing = (listingId: string) => {
    setSelectedListingId(listingId);
  };

  const handleViewCompany = (companyId: string) => {
    setSelectedCompanyId(companyId);
  };

  const handleRequestConnect = (listing: MaterialListing) => {
    showToast(`Đã gửi yêu cầu kết nối tới ${listing.company.name} cho lô hàng #${listing.id}!`);
  };

  const handleOpenLogistics = (originHub = 'vsip1_bd', volume = 25) => {
    setLogisticsOrigin(originHub);
    setLogisticsVolume(volume);
    setLogisticsOpen(true);
  };

  const handleOpenReview = (companyId?: string) => {
    setReviewTargetCompanyId(companyId || null);
    setReviewModalOpen(true);
  };

  const handleSubmitReview = (review: TransactionReview) => {
    // Dynamic real-time Trust Score update
    const target = MOCK_COMPANIES[review.targetCompanyId];
    if (target) {
      target.trustScore.overall = Math.min(100, Math.max(50, Math.round((target.trustScore.overall + review.scoreImpact) * 10) / 10));
      target.trustScore.breakdown.partnerRating = Math.min(20, Math.max(10, Math.round((target.trustScore.breakdown.partnerRating + review.scoreImpact) * 10) / 10));
    }
    showToast(`Đã ghi nhận đánh giá cho ${review.targetCompanyName}! Trust Score đã được cập nhật (+${review.scoreImpact} điểm).`);
  };

  const handleSelectAISampleForListing = (sample: AIRecognitionSample) => {
    showToast(`Đã nạp thông số ${sample.detectedType} vào mẫu đăng bán phế phẩm!`);
    handleOpenEarlyAccess('seller');
  };

  const currentSelectedListing = MOCK_LISTINGS.find(l => l.id === selectedListingId) || null;

  return (
    <div className="min-h-screen flex flex-col bg-[#EDF6F2] text-[#172B23] relative">
      
      {/* Global Fixed Rotating Earth Background (toàn web, lướt đến đâu cũng có nền quả địa cầu xoay tròn sáng sủa) */}
      <GlobalEarthBackground />

      {/* Toast Notification */}
      {toastMessage && (
        <div 
          id="global-toast-notification"
          className="fixed bottom-6 right-6 z-50 bg-[#12231C] text-white px-4 py-3 rounded-2xl shadow-2xl border border-emerald-500/40 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-200 max-w-md"
        >
          <CheckCircle2 className="w-5 h-5 text-[#2F9E6E] shrink-0" />
          <span className="text-xs font-semibold leading-tight">{toastMessage}</span>
          <button 
            onClick={() => setToastMessage(null)}
            className="p-1 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Persistent Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        onOpenEarlyAccess={handleOpenEarlyAccess}
        onOpenAIMatcher={() => setAiMatcherOpen(true)}
        onOpenAIRecognition={() => setAiRecognitionOpen(true)}
        onOpenLogistics={() => handleOpenLogistics()}
        onOpenReview={() => handleOpenReview()}
        onOpenAuth={() => setAuthModalOpen(true)}
        currentUser={currentUser}
      />

      {/* Main View Router */}
      <main className="flex-1 relative z-10">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={setCurrentPage}
            onOpenEarlyAccess={handleOpenEarlyAccess}
            onSelectListing={handleSelectListing}
            onOpenAIMatcher={() => setAiMatcherOpen(true)}
            onOpenAIRecognition={() => setAiRecognitionOpen(true)}
            onOpenLogistics={() => handleOpenLogistics()}
            onOpenReview={() => handleOpenReview()}
            onOpenAuth={() => setAuthModalOpen(true)}
          />
        )}

        {currentPage === 'sellers' && (
          <SellersPage
            onOpenEarlyAccess={handleOpenEarlyAccess}
            onOpenAIMatcher={() => setAiMatcherOpen(true)}
            onNavigate={setCurrentPage}
          />
        )}

        {currentPage === 'buyers' && (
          <BuyersPage
            onOpenEarlyAccess={handleOpenEarlyAccess}
            onNavigate={setCurrentPage}
          />
        )}

        {currentPage === 'how-it-works' && (
          <HowItWorksPage
            onOpenEarlyAccess={handleOpenEarlyAccess}
            onOpenAIMatcher={() => setAiMatcherOpen(true)}
            onNavigate={setCurrentPage}
          />
        )}

        {currentPage === 'marketplace' && (
          <MarketplacePage
            onSelectListing={handleSelectListing}
            onViewCompany={handleViewCompany}
            onOpenEarlyAccess={handleOpenEarlyAccess}
            onOpenAIMatcher={() => setAiMatcherOpen(true)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onOpenEarlyAccess={handleOpenEarlyAccess}
            onNavigate={setCurrentPage}
          />
        )}
      </main>

      {/* Persistent Footer */}
      <Footer
        onNavigate={setCurrentPage}
        onOpenEarlyAccess={handleOpenEarlyAccess}
      />

      {/* Early Access / Lead Capture Modal */}
      <EarlyAccessModal
        isOpen={earlyAccessOpen}
        onClose={() => setEarlyAccessOpen(false)}
        defaultType={earlyAccessType}
      />

      {/* Material Detail Modal */}
      <MaterialDetailModal
        listing={currentSelectedListing}
        isOpen={Boolean(selectedListingId)}
        onClose={() => setSelectedListingId(null)}
        onViewCompany={(compId) => {
          setSelectedCompanyId(compId);
        }}
        onRequestConnect={handleRequestConnect}
        onOpenLogistics={(originHub, volume) => handleOpenLogistics(originHub, volume)}
        onOpenReview={(compId) => handleOpenReview(compId)}
      />

      {/* Enterprise Company Profile Modal */}
      <CompanyProfileModal
        companyId={selectedCompanyId}
        isOpen={Boolean(selectedCompanyId)}
        onClose={() => setSelectedCompanyId(null)}
        onSelectListing={(listingId) => {
          setSelectedCompanyId(null);
          setSelectedListingId(listingId);
        }}
      />

      {/* ReMat Intelligence Engine Drawer */}
      <AIMatcherDrawer
        isOpen={aiMatcherOpen}
        onClose={() => setAiMatcherOpen(false)}
        onViewListing={(listingId) => {
          setAiMatcherOpen(false);
          setSelectedListingId(listingId);
        }}
        onOpenEarlyAccess={handleOpenEarlyAccess}
      />

      {/* AI Waste Recognition Modal */}
      <AIRecognitionModal
        isOpen={aiRecognitionOpen}
        onClose={() => setAiRecognitionOpen(false)}
        onSelectSampleForListing={handleSelectAISampleForListing}
      />

      {/* Logistics Cost Optimizer Modal */}
      <LogisticsOptimizerModal
        isOpen={logisticsOpen}
        onClose={() => setLogisticsOpen(false)}
        defaultOriginId={logisticsOrigin}
        defaultVolume={logisticsVolume}
      />

      {/* Enterprise Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        currentUser={currentUser}
        onLogin={(user) => {
          setCurrentUser(user);
          showToast(`Chào mừng ${user.companyName}! Đã đồng bộ Trust Score ${user.trustScore}/100.`);
        }}
        onLogout={() => {
          setCurrentUser(null);
          showToast('Đã đăng xuất khỏi tài khoản doanh nghiệp.');
        }}
      />

      {/* Review Transaction Modal */}
      <ReviewTransactionModal
        isOpen={reviewModalOpen}
        onClose={() => setReviewModalOpen(false)}
        currentUser={currentUser}
        targetCompanyId={reviewTargetCompanyId}
        onOpenAuth={() => {
          setReviewModalOpen(false);
          setAuthModalOpen(true);
        }}
        onSubmitReview={handleSubmitReview}
      />

    </div>
  );
}

