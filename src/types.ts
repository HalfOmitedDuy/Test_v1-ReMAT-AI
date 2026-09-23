export type PageView = 
  | 'home' 
  | 'sellers' 
  | 'buyers' 
  | 'how-it-works' 
  | 'marketplace' 
  | 'recognition'
  | 'logistics'
  | 'about';

export type MaterialCategory = 
  | 'all'
  | 'plastic' 
  | 'textile' 
  | 'metal' 
  | 'wood' 
  | 'mineral';

export type ListingType = 'supply' | 'demand';

export type TrustTier = 'Platinum' | 'Gold' | 'Silver' | 'Standard';

export interface TrustScoreBreakdown {
  legalVerification: number; // Max 25: ĐKKD, Giấy phép môi trường, kiểm toán nhà máy
  sampleQuality: number;     // Max 30: Kiểm định lab độc lập, tính đồng nhất mẫu
  fulfillmentHistory: number;// Max 25: Tỷ lệ giao đúng hẹn, đúng thông số đã công bố
  partnerRating: number;     // Max 20: Phản hồi đối tác, giải quyết khiếu nại
}

export interface TrustScoreData {
  overall: number; // 0 - 100
  tier: TrustTier;
  breakdown: TrustScoreBreakdown;
  badges: string[];
  auditedDate: string;
  verifiedTransactions: number;
}

export interface EnterpriseUser {
  id: string;
  companyName: string;
  taxCode: string;
  email: string;
  role: 'seller' | 'buyer' | 'both';
  province: string;
  industrialPark: string;
  avatarUrl?: string;
  phone: string;
  trustScore: number;
  completedTransactions: number;
}

export interface TransactionReview {
  id: string;
  targetCompanyId: string;
  targetCompanyName: string;
  reviewerId: string;
  reviewerCompanyName: string;
  transactionType: 'buy' | 'sell';
  materialName: string;
  volume: string;
  ratingQuality: number;     // 1 - 5 stars
  ratingDelivery: number;    // 1 - 5 stars
  ratingCooperation: number; // 1 - 5 stars
  comment: string;
  date: string;
  scoreImpact: number; // Điểm Trust Score được cộng/trừ (+0.8, +1.2, v.v.)
  verifiedTransaction: boolean;
}

export interface AIRecognitionSample {
  id: string;
  name: string;
  category: MaterialCategory;
  imageUrl: string;
  detectedType: string;
  confidence: number; // 0 - 100%
  purity: string;
  form: string;
  contaminants: string;
  recommendedHsCode: string;
  marketPriceRange: string;
  suggestedBuyers: string[];
  description: string;
}

export interface IndustrialHub {
  id: string;
  name: string;
  province: string;
  lat: number;
  lng: number;
  type: 'supply' | 'demand' | 'both';
  popularMaterials: string[];
}

export interface LogisticsOptimizationResult {
  origin: IndustrialHub;
  destination: IndustrialHub;
  distanceKm: number;
  standardCostVND: number;
  optimizedBackhaulCostVND: number;
  savingsPercentage: number;
  savingsVND: number;
  co2StandardKg: number;
  co2SavedKg: number;
  recommendedTruck: string;
  estimatedTransitTime: string;
  backhaulRouteName: string;
}

export interface Company {
  id: string;
  name: string;
  taxCode: string;
  industry: string;
  province: string;
  industrialPark: string;
  trustScore: TrustScoreData;
  establishedYear: number;
  contactPerson: string;
  contactTitle: string;
  description: string;
  avatarUrl?: string;
  badges: string[];
  reviews?: TransactionReview[];
}

export interface TestParameter {
  name: string;
  value: string;
  standard: string;
}

export interface MaterialListing {
  id: string;
  type: ListingType; // 'supply' (cần bán) or 'demand' (cần mua)
  title: string;
  category: MaterialCategory;
  categoryName: string;
  subCategory: string;
  description: string;
  specifications: {
    form: string;            // Vụn cắt, bavia, bột, hạt ép, phoi xoắn...
    purity: string;          // 98.5% PP nguyên bản, không lẫn tạp kim loại...
    moisture: string;        // < 1.5%
    packaging: string;       // Bao Jumbo 1 tấn, bành ép 500kg, kiện gỗ...
    supplyCadence: string;   // 20-30 tấn / tháng hoặc Theo lô
  };
  quantity: number;
  unit: string;              // tấn, kg, m3
  priceEstimate: string;     // e.g. "6.500.000 - 7.200.000 đ/tấn"
  location: {
    province: string;
    industrialPark: string;
    region: 'Miền Bắc' | 'Miền Trung' | 'Miền Nam';
  };
  company: Company;
  qcStatus: 'lab_certified' | 'site_verified' | 'sample_ready';
  testReport?: {
    labName: string;
    reportNo: string;
    issueDate: string;
    parameters: TestParameter[];
  };
  aiMatchScore: number;      // 0 - 100%
  potentialBuyersCount: number;
  featured?: boolean;
  images: string[];
  createdDate: string;
}

export interface EarlyAccessSubmission {
  email: string;
  companyName: string;
  contactName: string;
  phone: string;
  businessType: 'seller' | 'buyer' | 'both';
  materialCategory: string;
  estimatedVolume: string;
  province: string;
  note?: string;
}
