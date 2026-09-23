import { MaterialListing, Company } from '../types';

export const MOCK_COMPANIES: Record<string, Company> = {
  comp_vinaplast: {
    id: 'comp_vinaplast',
    name: 'Công ty CP Nhựa Kỹ Thuật Tân Á Châu',
    taxCode: '0314892011',
    industry: 'Gia công linh kiện nhựa ép phun & khuôn mẫu',
    province: 'Bình Dương',
    industrialPark: 'KCN VSIP 1, TP. Thuận An',
    establishedYear: 2014,
    contactPerson: 'Kỹ sư Trần Anh Dũng',
    contactTitle: 'Trưởng ban QL Môi trường & Vật tư',
    description: 'Doanh nghiệp FDI cấp 2 chuyên sản xuất linh kiện nhựa gia dụng và vỏ thiết bị điện tử. Phát sinh định kỳ 30-45 tấn phế phẩm nhựa bavia PP và ABS nguyên sinh mỗi tháng.',
    badges: ['Đã xác minh thực địa 2026', 'Chứng nhận ISO 14001', 'Hồ sơ pháp lý sạch'],
    trustScore: {
      overall: 94,
      tier: 'Platinum',
      auditedDate: '15/02/2026',
      verifiedTransactions: 18,
      breakdown: {
        legalVerification: 24, // max 25
        sampleQuality: 29,     // max 30
        fulfillmentHistory: 23,// max 25
        partnerRating: 18      // max 20
      },
      badges: ['Top 5% Uy tín Ngành Nhựa', '100% Đúng phẩm cấp công bố', 'Đối tác tin cậy Re:Mat']
    }
  },
  comp_textile_namviet: {
    id: 'comp_textile_namviet',
    name: 'Tập đoàn Dệt may Nam Việt Tex',
    taxCode: '3602189441',
    industry: 'May mặc xuất khẩu & Dệt thoi',
    province: 'Đồng Nai',
    industrialPark: 'KCN Nhơn Trạch 3',
    establishedYear: 2011,
    contactPerson: 'Bà Nguyễn Mai Phương',
    contactTitle: 'Giám đốc Chuỗi Cung Ứng Xanh',
    description: 'Tổ hợp may mặc công suất 2.5 triệu sản phẩm/tháng. Lượng vải vụn cắt đầu bàn may (chủ yếu Cotton 80/20 và Single Jersey) đồng nhất, được phân loại màu sắc tự động.',
    badges: ['OEKO-TEX Standard 100', 'Báo cáo ESG 2025', 'Xác minh Lab SGS'],
    trustScore: {
      overall: 91,
      tier: 'Gold',
      auditedDate: '02/03/2026',
      verifiedTransactions: 14,
      breakdown: {
        legalVerification: 23,
        sampleQuality: 28,
        fulfillmentHistory: 22,
        partnerRating: 18
      },
      badges: ['Nguồn cung đạt chuẩn tái chế OEKO', 'Tách phân loại theo mã màu']
    }
  },
  comp_mecatech: {
    id: 'comp_mecatech',
    name: 'Công ty TNHH Cơ Khí Chính Xác Precision Tech',
    taxCode: '0107883921',
    industry: 'Cơ khí chính xác & Phụ tùng ô tô xe máy',
    province: 'Bắc Ninh',
    industrialPark: 'KCN Quế Võ',
    establishedYear: 2016,
    contactPerson: 'Kỹ sư Lê Quốc Hùng',
    contactTitle: 'Phó Phòng Kỹ Thuật Chế Tạo',
    description: 'Chuyên phay, tiện CNC linh kiện hợp kim nhôm định hình. Phoi tiện nhôm mác 6061 và 7075 không lẫn sắt, được ép li tâm tách 98% dầu cắt gọt.',
    badges: ['Kiểm định Quatest 1', 'Chứng nhận nguồn gốc nguyên liệu', 'Tách dầu ly tâm'],
    trustScore: {
      overall: 88,
      tier: 'Gold',
      auditedDate: '20/01/2026',
      verifiedTransactions: 9,
      breakdown: {
        legalVerification: 23,
        sampleQuality: 27,
        fulfillmentHistory: 21,
        partnerRating: 17
      },
      badges: ['Hàm lượng nhôm tinh khiết 97.8%', 'Đã tách khô dầu máy']
    }
  },
  comp_wood_eco: {
    id: 'comp_wood_eco',
    name: 'Công ty CP Lâm Sản & Nội Thất Gỗ Xanh Đại Phát',
    taxCode: '3700921448',
    industry: 'Sản xuất đồ gỗ nội thất xuất khẩu Bắc Mỹ',
    province: 'Bình Dương',
    industrialPark: 'KCN Nam Tân Uyên',
    establishedYear: 2015,
    contactPerson: 'Ông Vũ Hoàng Long',
    contactTitle: 'Trưởng ban Thu mua & Tái sinh Phế phẩm',
    description: 'Gia công gỗ keo và cao su tự nhiên sấy khô. Mùn cưa và đầu mẩu gỗ sạch không sơn phủ hóa chất độc hại, độ ẩm kiểm soát ổn định dưới 12%.',
    badges: ['Chứng chỉ FSC CoC', 'Không pha trộn keo dán công nghiệp'],
    trustScore: {
      overall: 85,
      tier: 'Silver',
      auditedDate: '10/02/2026',
      verifiedTransactions: 7,
      breakdown: {
        legalVerification: 22,
        sampleQuality: 26,
        fulfillmentHistory: 20,
        partnerRating: 17
      },
      badges: ['Chứng chỉ FSC', 'Độ ẩm chuẩn đóng bánh']
    }
  },
  comp_repoly_buyer: {
    id: 'comp_repoly_buyer',
    name: 'Công ty TNHH Nhựa Tái Sinh ECO-Polymer',
    taxCode: '0315998231',
    industry: 'Sản xuất hạt nhựa tái sinh kỹ thuật PP/PE/ABS',
    province: 'Long An',
    industrialPark: 'KCN Hải Sơn, Đức Hòa',
    establishedYear: 2018,
    contactPerson: 'Bà Hoàng Cẩm Tú',
    contactTitle: 'Trưởng phòng Mua hàng Nguyên liệu thứ cấp',
    description: 'Sở hữu 4 dây chuyền tạo hạt nhựa công nghệ Đức, nhu cầu thu mua ổn định 80-120 tấn phế phẩm nhựa bavia sạch/tháng với hợp đồng bao tiêu dài hạn.',
    badges: ['Nhà máy tái chế đạt chuẩn GRS', 'Năng lực bao tiêu 100+ tấn/tháng', 'Thanh toán bảo chứng'],
    trustScore: {
      overall: 95,
      tier: 'Platinum',
      auditedDate: '28/02/2026',
      verifiedTransactions: 32,
      breakdown: {
        legalVerification: 25,
        sampleQuality: 28,
        fulfillmentHistory: 24,
        partnerRating: 18
      },
      badges: ['Người mua bảo chứng Re:Mat', 'Thanh toán T+3 qua tài khoản ký quỹ']
    }
  }
};

export const MOCK_LISTINGS: MaterialListing[] = [
  {
    id: 'mat_pp_bavia_01',
    type: 'supply',
    title: 'Phế phẩm bavia nhựa PP đen kỹ thuật (Chưa qua nhiệt lần 2)',
    category: 'plastic',
    categoryName: 'Nhựa công nghiệp',
    subCategory: 'Bavia ép phun linh kiện',
    description: 'Phát sinh từ khuôn ép linh kiện ô tô xe máy. Bavia nhựa PP đen đồng màu, cắt cuống nguội trực tiếp tại máy, không bị cháy biến tính, đã được gom qua máy hút bụi loại bỏ dị vật kim loại.',
    specifications: {
      form: 'Bavia cuống & diềm cắt sạch',
      purity: '98.8% nhựa PP Polymer, không lẫn PE/PVC',
      moisture: '< 0.3%',
      packaging: 'Đóng bao Jumbo 850kg có lót nylon',
      supplyCadence: '25 - 35 tấn / tháng đều đặn'
    },
    quantity: 30,
    unit: 'tấn/tháng',
    priceEstimate: '11.800.000 - 12.500.000 đ/tấn (tại kho)',
    location: {
      province: 'Bình Dương',
      industrialPark: 'KCN VSIP 1',
      region: 'Miền Nam'
    },
    company: MOCK_COMPANIES.comp_vinaplast,
    qcStatus: 'lab_certified',
    testReport: {
      labName: 'Trung tâm Đo lường Chất lượng Vinatest',
      reportNo: 'VT-2026-PP-9821',
      issueDate: '18/02/2026',
      parameters: [
        { name: 'Chỉ số chảy khối MFI (230°C/2.16kg)', value: '11.4 g/10min', standard: 'ASTM D1238' },
        { name: 'Độ bền kéo đứt (Tensile Strength)', value: '28.5 MPa', standard: 'ASTM D638' },
        { name: 'Hàm lượng tro vô cơ (Ash content)', value: '0.42%', standard: 'ISO 3451-1' },
        { name: 'Kim loại nặng (RoHS Pb/Cd/Hg)', value: 'Không phát hiện (ND)', standard: 'IEC 62321' }
      ]
    },
    aiMatchScore: 97,
    potentialBuyersCount: 4,
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1595278069441-2cf29f8005a4?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80'
    ],
    createdDate: '10/03/2026'
  },
  {
    id: 'mat_cotton_scrap_02',
    type: 'supply',
    title: 'Vải vụn cắt đầu bàn may Cotton 100% trắng & ngà đã phân loại',
    category: 'textile',
    categoryName: 'Dệt may & Sợi vụn',
    subCategory: 'Vải vụn cắt bàn may',
    description: 'Vải dệt kim vụn phát sinh từ phòng cắt tự động Gerber. 100% sợi bông tự nhiên đã được phân màu (trắng tinh và ngà sáng), sạch sẽ khô ráo, không lẫn mex dán keo hoặc sợi cước.',
    specifications: {
      form: 'Mảnh vụn vải kích thước 5 - 30cm',
      purity: '100% Cotton tự nhiên, không hồ cứng',
      moisture: 'Khoảng 7.2% (chuẩn bảo quản kho mát)',
      packaging: 'Đóng bành ép nẹp kẽm 250kg/bành',
      supplyCadence: '40 tấn / tháng'
    },
    quantity: 40,
    unit: 'tấn/tháng',
    priceEstimate: '4.800.000 - 5.300.000 đ/tấn',
    location: {
      province: 'Đồng Nai',
      industrialPark: 'KCN Nhơn Trạch 3',
      region: 'Miền Nam'
    },
    company: MOCK_COMPANIES.comp_textile_namviet,
    qcStatus: 'lab_certified',
    testReport: {
      labName: 'SGS Vietnam Fiber Testing Lab',
      reportNo: 'SGS-HCM-TX-44021',
      issueDate: '24/02/2026',
      parameters: [
        { name: 'Thành phần sợi (Fiber identification)', value: '100% Cotton', standard: 'AATCC 20A' },
        { name: 'Độ bền xé xơ kéo chỉ tái chế', value: '3.4 g/denier', standard: 'ASTM D3822' },
        { name: 'Chỉ số Formaldehyde tự do', value: '< 16 ppm (An toàn tuyệt đối)', standard: 'ISO 14184-1' },
        { name: 'Hàm lượng tạp chất vô cơ', value: '< 0.25%', standard: 'SGS-MTH' }
      ]
    },
    aiMatchScore: 94,
    potentialBuyersCount: 6,
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80'
    ],
    createdDate: '12/03/2026'
  },
  {
    id: 'mat_demand_pe_film_03',
    type: 'demand',
    title: '[CẦN MUA] Màng PE bao bọc pallet công nghiệp sạch số lượng lớn',
    category: 'plastic',
    categoryName: 'Nhựa công nghiệp',
    subCategory: 'Màng cuốn LDPE trong suốt',
    description: 'Chúng tôi cần tìm đối tác nhà kho, xưởng logistics hoặc nhà máy xả màng bọc PE pallet sau dỡ hàng. Yêu cầu màng trong suốt hoặc đục nhẹ, không dính dầu mỡ nặng hoặc đất cát dày.',
    specifications: {
      form: 'Màng cuộn kéo dãn đã rạch dỡ',
      purity: 'Nhựa LDPE / LLDPE, tỷ lệ keo dính băng dính < 3%',
      moisture: 'Khô ráo tự nhiên < 2%',
      packaging: 'Ép kiện 300-500kg hoặc buộc bó tải',
      supplyCadence: 'Thu mua dài hạn 50-80 tấn/tháng'
    },
    quantity: 60,
    unit: 'tấn/tháng',
    priceEstimate: '8.500.000 - 9.800.000 đ/tấn (theo độ sạch)',
    location: {
      province: 'Long An',
      industrialPark: 'KCN Hải Sơn',
      region: 'Miền Nam'
    },
    company: MOCK_COMPANIES.comp_repoly_buyer,
    qcStatus: 'site_verified',
    aiMatchScore: 92,
    potentialBuyersCount: 5,
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80'
    ],
    createdDate: '14/03/2026'
  },
  {
    id: 'mat_alu_chips_04',
    type: 'supply',
    title: 'Phoi tiện nhôm hợp kim 6061 ép li tâm tách dầu gọt',
    category: 'metal',
    categoryName: 'Kim loại & Phoi tiện',
    subCategory: 'Phoi nhôm gia công CNC',
    description: 'Phoi tiện xoắn và bavia cắt từ phôi nhôm 6061-T6 nhập khẩu Hàn Quốc. Toàn bộ phoi được dẫn qua hệ thống vắt li tâm tốc độ cao tách 98.5% dầu tưới nguội, khô ráo, không lẫn phoi sắt từ.',
    specifications: {
      form: 'Phoi tiện xoắn ngắn và hạt bavia CNC',
      purity: 'Nhôm Al 97.5%, Mg 0.9%, Si 0.6% (Chuẩn mác 6061)',
      moisture: 'Dầu tồn dư bề mặt < 1.2%',
      packaging: 'Đóng thùng phuy thép hoặc bao Jumbo tráng PE',
      supplyCadence: '15 - 20 tấn / tháng'
    },
    quantity: 18,
    unit: 'tấn/tháng',
    priceEstimate: '42.000.000 - 45.000.000 đ/tấn',
    location: {
      province: 'Bắc Ninh',
      industrialPark: 'KCN Quế Võ',
      region: 'Miền Bắc'
    },
    company: MOCK_COMPANIES.comp_mecatech,
    qcStatus: 'lab_certified',
    testReport: {
      labName: 'Phòng Thí nghiệm Vật liệu Kim loại Quatest 1',
      reportNo: 'QT1-MET-2026-081',
      issueDate: '15/01/2026',
      parameters: [
        { name: 'Quang phổ phát xạ Al (Aluminium)', value: '97.62%', standard: 'ASTM E1251' },
        { name: 'Thành phần Silic (Si)', value: '0.62%', standard: 'ASTM E1251' },
        { name: 'Thành phần Magie (Mg)', value: '0.94%', standard: 'ASTM E1251' },
        { name: 'Tạp chất Fe lẫn trong mẻ mẫu', value: '0.14% (Rất thấp)', standard: 'ASTM E1251' }
      ]
    },
    aiMatchScore: 89,
    potentialBuyersCount: 3,
    featured: false,
    images: [
      'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80'
    ],
    createdDate: '08/03/2026'
  },
  {
    id: 'mat_wood_sawdust_05',
    type: 'supply',
    title: 'Mùn cưa gỗ cao su tự nhiên sấy khô ép bánh nguyên khối',
    category: 'wood',
    categoryName: 'Gỗ & Phụ phẩm sinh khối',
    subCategory: 'Mùn cưa xưởng mộc',
    description: 'Mùn cưa xẻ gỗ tròn cao su tự nhiên đã qua sấy lò nhiệt, độ ẩm siêu thấp, không ẩm mốc, nhiệt trị cao, thích hợp làm viên nén gỗ xuất khẩu hoặc phôi nấm ăn cao cấp.',
    specifications: {
      form: 'Mùn cưa mịn hạt 1-3mm hoặc ép khối bánh',
      purity: '100% gỗ tự nhiên, 0% hóa chất chống mọt',
      moisture: 'Độ ẩm 9.5% ± 1%',
      packaging: 'Đóng bánh nén 20kg hoặc bao xá',
      supplyCadence: '50 tấn / tháng'
    },
    quantity: 50,
    unit: 'tấn/tháng',
    priceEstimate: '1.450.000 - 1.650.000 đ/tấn',
    location: {
      province: 'Bình Dương',
      industrialPark: 'KCN Nam Tân Uyên',
      region: 'Miền Nam'
    },
    company: MOCK_COMPANIES.comp_wood_eco,
    qcStatus: 'site_verified',
    aiMatchScore: 86,
    potentialBuyersCount: 4,
    featured: false,
    images: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80'
    ],
    createdDate: '05/03/2026'
  },
  {
    id: 'mat_demand_textile_poly_06',
    type: 'demand',
    title: '[CẦN MUA] Sợi vụn polyester dệt thoi pha màu làm bông nhồi đệm',
    category: 'textile',
    categoryName: 'Dệt may & Sợi vụn',
    subCategory: 'Xơ sợi tái sinh',
    description: 'Doanh nghiệp sản xuất nệm bông ép và tấm cách âm công trình cần thu mua sợi vụn polyester hoặc vải vụn nhiều màu, chấp nhận lẫn tới 20% cotton. Cần ký hợp đồng nhận đều đặn.',
    specifications: {
      form: 'Sợi vụn đánh tơi hoặc vải vụn cắt',
      purity: 'Tối thiểu 75% thành phần Polyester',
      moisture: '< 10%',
      packaging: 'Đóng bành kẹp đai sắt',
      supplyCadence: 'Nhận 30 - 60 tấn / tháng'
    },
    quantity: 45,
    unit: 'tấn/tháng',
    priceEstimate: '3.600.000 - 4.100.000 đ/tấn',
    location: {
      province: 'Bình Dương',
      industrialPark: 'KCN Sóng Thần 2',
      region: 'Miền Nam'
    },
    company: {
      id: 'comp_eco_cushion',
      name: 'Công ty TNHH Vật Liệu Đệm Xanh Á Châu',
      taxCode: '3702441920',
      industry: 'Sản xuất tấm nệm công nghiệp & cách âm',
      province: 'Bình Dương',
      industrialPark: 'KCN Sóng Thần 2',
      establishedYear: 2017,
      contactPerson: 'Ông Đặng Thái Sơn',
      contactTitle: 'Phó TGĐ Thu mua',
      description: 'Chuyên cung cấp bông cách âm chống cháy và ruột đệm cho ngành nội thất xuất khẩu và công trình tiêu âm.',
      badges: ['Đối tác thu mua thường xuyên', 'Bảo lãnh thanh toán ngân hàng'],
      trustScore: {
        overall: 89,
        tier: 'Gold',
        auditedDate: '12/02/2026',
        verifiedTransactions: 11,
        breakdown: {
          legalVerification: 24,
          sampleQuality: 26,
          fulfillmentHistory: 22,
          partnerRating: 17
        },
        badges: ['Hợp đồng dài hạn', 'Thanh toán đúng kỳ hạn']
      }
    },
    qcStatus: 'site_verified',
    aiMatchScore: 95,
    potentialBuyersCount: 7,
    featured: false,
    images: [
      'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80'
    ],
    createdDate: '15/03/2026'
  }
];

export const CATEGORIES_LIST = [
  { id: 'all', name: 'Tất cả danh mục', count: 6 },
  { id: 'plastic', name: 'Nhựa công nghiệp & bavia', count: 2 },
  { id: 'textile', name: 'Dệt may & sợi vụn', count: 2 },
  { id: 'metal', name: 'Kim loại & phoi tiện', count: 1 },
  { id: 'wood', name: 'Gỗ & sinh khối', count: 1 }
];

export const TEAM_MEMBERS = [
  {
    name: 'TS. Nguyễn Văn Hưng',
    role: 'Co-founder & Chief Scientist',
    experience: '14+ năm nghiên cứu Vật liệu Polyme & Kinh tế tuần hoàn tại Viện Hàn lâm KH&CN VN',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    focus: 'Phân loại quang phổ vật liệu & Thẩm định tiêu chuẩn thứ cấp'
  },
  {
    name: 'Kỹ sư Lê Minh Quân',
    role: 'Co-founder & AI Lead',
    experience: 'Cựu Kỹ sư AI tại Singapore, chuyên gia xử lý ngôn ngữ tự nhiên (NLP) & Vector Search công nghiệp',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    focus: 'ReMat Intelligence Engine & Hệ thống Matching đa chiều'
  },
  {
    name: 'Bà Đỗ Thị Bích Ngân',
    role: 'Head of Operations & QC Network',
    experience: '10 năm quản lý chuỗi cung ứng vật liệu phụ trợ cho các tập đoàn sản xuất tại KCN Bình Dương & Bắc Ninh',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    focus: 'Mạng lưới Human-in-the-loop & Xác minh thực địa nhà máy'
  }
];

// Mock Enterprise Accounts
export const MOCK_ENTERPRISE_USERS = [
  {
    id: 'user_ecopolymer',
    companyName: 'Công ty TNHH Nhựa Tái Sinh ECO-Polymer',
    taxCode: '0316772891',
    email: 'contact@ecopolymer.vn',
    role: 'buyer' as const,
    province: 'Bình Dương',
    industrialPark: 'KCN VSIP 1, Thuận An',
    phone: '0903 882 119',
    trustScore: 92,
    completedTransactions: 24,
    avatarUrl: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'user_vinaplast',
    companyName: 'Công ty CP Nhựa Kỹ Thuật Tân Á Châu',
    taxCode: '0314892011',
    email: 'supply@tanachau-plastic.com.vn',
    role: 'seller' as const,
    province: 'Bình Dương',
    industrialPark: 'KCN VSIP 1, Thuận An',
    phone: '0918 334 556',
    trustScore: 94,
    completedTransactions: 18,
    avatarUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'user_namviet',
    companyName: 'Tập đoàn Dệt may Nam Việt Tex',
    taxCode: '3602189441',
    email: 'esg@namviettex.vn',
    role: 'both' as const,
    province: 'Đồng Nai',
    industrialPark: 'KCN Nhơn Trạch 3',
    phone: '0938 122 770',
    trustScore: 91,
    completedTransactions: 14,
    avatarUrl: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=200&q=80'
  }
];

// Initial Transaction Reviews (contribute directly to Trust Score)
export const INITIAL_TRANSACTION_REVIEWS = [
  {
    id: 'rev_001',
    targetCompanyId: 'comp_vinaplast',
    targetCompanyName: 'Công ty CP Nhựa Kỹ Thuật Tân Á Châu',
    reviewerId: 'user_ecopolymer',
    reviewerCompanyName: 'Công ty TNHH Nhựa Tái Sinh ECO-Polymer',
    transactionType: 'buy' as const,
    materialName: 'Nhựa PP bavia kỹ thuật không tạp',
    volume: '25 tấn',
    ratingQuality: 5,
    ratingDelivery: 5,
    ratingCooperation: 5,
    comment: 'Lô hàng đồng nhất tuyệt vời, chỉ số MFI 11.8 đúng y như phiếu Quatest 3. Đóng gói bao Jumbo rất chắc chắn, xe đến bốc dỡ nhanh.',
    date: '18/03/2026',
    scoreImpact: 1.2,
    verifiedTransaction: true
  },
  {
    id: 'rev_002',
    targetCompanyId: 'comp_textile_namviet',
    targetCompanyName: 'Tập đoàn Dệt may Nam Việt Tex',
    reviewerId: 'comp_greenyarn',
    reviewerCompanyName: 'Công ty CP Tái Chế Xơ Sợi Xanh An Phát',
    transactionType: 'buy' as const,
    materialName: 'Vải vụn Cotton 100% đầu bàn may',
    volume: '40 tấn',
    ratingQuality: 5,
    ratingDelivery: 4,
    ratingCooperation: 5,
    comment: 'Đã phân loại riêng màu trắng và pastel như thỏa thuận. Rất thích hợp để kéo sợi tái chế OEKO. Điểm trừ nhỏ là cổng KCN kẹt xe nhẹ lúc 17h.',
    date: '10/03/2026',
    scoreImpact: 0.9,
    verifiedTransaction: true
  },
  {
    id: 'rev_003',
    targetCompanyId: 'comp_mecatech',
    targetCompanyName: 'Công ty TNHH Cơ Khí Chính Xác Precision Tech',
    reviewerId: 'comp_alu_recycle',
    reviewerCompanyName: 'Công ty Đúc & Tái Chế Hợp Kim Nhôm Việt Nhật',
    transactionType: 'buy' as const,
    materialName: 'Phoi tiện nhôm CNC 6061 ly tâm tách dầu',
    volume: '15 tấn',
    ratingQuality: 5,
    ratingDelivery: 5,
    ratingCooperation: 4,
    comment: 'Tách dầu rất khô, hàm lượng tạp sắt dưới 0.3%. Luyện đúc phôi nhôm Billet đạt hiệu suất thu hồi 94.5%. Sẽ ký hợp đồng dài hạn.',
    date: '28/02/2026',
    scoreImpact: 1.1,
    verifiedTransaction: true
  }
];

// Sample Real-world Industrial Waste Samples for AI Recognition Scanner
export const AI_RECOGNITION_SAMPLES = [
  {
    id: 'ai_sample_pp',
    name: 'Bavia cuống phun nhựa PP nguyên sinh',
    category: 'plastic' as const,
    imageUrl: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80',
    detectedType: 'Polypropylene (PP) Homopolymer',
    confidence: 98.7,
    purity: '99.2% (Không lẫn ABS/PS, không kim loại)',
    form: 'Bavia cuống đúc khuôn ép, mảnh vụn 2-8mm',
    contaminants: 'Dưới 0.05% bụi bề mặt xưởng',
    recommendedHsCode: '3915.90.90 (Phế liệu và mẩu vụn từ plastic)',
    marketPriceRange: '11.500.000 - 13.000.000 đ / tấn',
    suggestedBuyers: ['ECO-Polymer Nam Bộ', 'Nhựa Tái Sinh Tân Phát', 'Nhựa Kỹ Thuật Hòa Long'],
    description: 'Ảnh nhận diện cho thấy hạt nhựa và bavia màu đồng nhất, độ chảy MFI dự kiến ~11-13 g/10min. Đạt chuẩn tái chế cấp 1 cho ngành ép chậu và pallet.'
  },
  {
    id: 'ai_sample_alu',
    name: 'Phoi nhôm phay CNC mác 6061 tách dầu',
    category: 'metal' as const,
    imageUrl: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
    detectedType: 'Hợp kim nhôm 6061 (Al-Mg-Si Series)',
    confidence: 97.4,
    purity: '98.0% Nhôm nguyên chất',
    form: 'Phoi xoắn ly tâm, độ ẩm bề mặt < 1.2%',
    contaminants: 'Tạp chất dầu cắt gọt hữu cơ cực thấp, không lẫn phoi sắt/đồng',
    recommendedHsCode: '7602.00.00 (Phoi vụn tiện, mạt giũa nhôm)',
    marketPriceRange: '42.000.000 - 45.000.000 đ / tấn',
    suggestedBuyers: ['Nhôm Đúc Việt Nhật', 'Cơ Khí Luyện Kim Sài Gòn', 'Hợp Kim Nhôm Á Châu'],
    description: 'Phân tích quang phổ cho thấy mác nhôm kết cấu cao cấp. Hiệu suất nấu luyện thành phôi Billet ước tính trên 93%.'
  },
  {
    id: 'ai_sample_cotton',
    name: 'Vải vụn Cotton 100% cắt đầu bàn may',
    category: 'textile' as const,
    imageUrl: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80',
    detectedType: 'Cotton Single Jersey dệt kim',
    confidence: 96.1,
    purity: '97.5% Sợi bông tự nhiên (Đã kiểm tra đầu đốt)',
    form: 'Đầu mẩu vải may, kích thước 15 - 40cm',
    contaminants: 'Không lẫn chỉ poly đính kèm, sạch bụi bông',
    recommendedHsCode: '6310.10.00 (Vải vụn đã phân loại)',
    marketPriceRange: '5.200.000 - 6.000.000 đ / tấn',
    suggestedBuyers: ['Tái Chế Xơ Sợi Xanh An Phát', 'Dệt May Tân Bình', 'Bông Ép Cách Âm Đồng Nai'],
    description: 'Sợi dệt mềm, độ dài xơ tốt, màu sắc thuần trắng và xám sáng. Thích hợp tái sinh xơ sợi cho may mặc hoặc ép đệm lót.'
  },
  {
    id: 'ai_sample_pe',
    name: 'Màng PE bọc quấn kiện hàng pallet sạch',
    category: 'plastic' as const,
    imageUrl: 'https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&w=800&q=80',
    detectedType: 'LLDPE Film (Màng dẻo bọc pallet)',
    confidence: 99.1,
    purity: '98.8% LLDPE trong suốt',
    form: 'Màng cuộn ép bành 400kg',
    contaminants: 'Đã bóc gỡ tem nhãn giấy barcode',
    recommendedHsCode: '3915.10.10 (Phế phẩm polyme từ etylen)',
    marketPriceRange: '8.800.000 - 9.800.000 đ / tấn',
    suggestedBuyers: ['Bao Bì Nhựa Tân Á', 'Nhựa Tái Sinh ECO-Polymer', 'Màng PE Nam Hải'],
    description: 'Màng trong suốt chất lượng cao, độ dẻo dai cơ học tốt. Giá trị tái chế hạt nhựa tái sinh cao nhất trong nhóm màng mỏng bao bì.'
  }
];

// Industrial Hubs & KCN in Vietnam for Logistics Optimizer
export const INDUSTRIAL_HUBS = [
  {
    id: 'vsip1_bd',
    name: 'KCN VSIP 1 (Bình Dương)',
    province: 'Bình Dương',
    lat: 10.9328,
    lng: 106.6983,
    type: 'both' as const,
    popularMaterials: ['Nhựa kỹ thuật bavia', 'Linh kiện điện tử', 'Phoi kim loại CNC']
  },
  {
    id: 'nhontrach3_dn',
    name: 'KCN Nhơn Trạch 3 (Đồng Nai)',
    province: 'Đồng Nai',
    lat: 10.7381,
    lng: 106.9452,
    type: 'both' as const,
    popularMaterials: ['Vải vụn dệt may', 'Xơ sợi', 'Nhựa công nghiệp']
  },
  {
    id: 'namtanuyen_bd',
    name: 'KCN Nam Tân Uyên (Bình Dương)',
    province: 'Bình Dương',
    lat: 11.0853,
    lng: 106.7725,
    type: 'both' as const,
    popularMaterials: ['Mùn cưa đồ gỗ', 'Nhựa tái sinh', 'Pallet gỗ']
  },
  {
    id: 'haison_la',
    name: 'KCN Hải Sơn - Đức Hòa (Long An)',
    province: 'Long An',
    lat: 10.8415,
    lng: 106.4682,
    type: 'both' as const,
    popularMaterials: ['Nhựa tái sinh PE/PP', 'Kim loại màu', 'Cao su bavia']
  },
  {
    id: 'tantao_hcm',
    name: 'KCN Tân Tạo (Bình Tân, TP.HCM)',
    province: 'TP. Hồ Chí Minh',
    lat: 10.7601,
    lng: 106.5812,
    type: 'both' as const,
    popularMaterials: ['Bao bì màng mỏng', 'Dệt may gia dụng', 'Giấy carton']
  },
  {
    id: 'quevo_bn',
    name: 'KCN Quế Võ (Bắc Ninh)',
    province: 'Bắc Ninh',
    lat: 21.1685,
    lng: 106.1364,
    type: 'both' as const,
    popularMaterials: ['Phoi nhôm đồng CNC', 'Mạch điện tử thứ cấp', 'Nhựa ABS kỹ thuật']
  },
  {
    id: 'phonoi_hy',
    name: 'KCN Phố Nối A (Hưng Yên)',
    province: 'Hưng Yên',
    lat: 20.9572,
    lng: 106.0125,
    type: 'both' as const,
    popularMaterials: ['Sắt thép thứ cấp', 'Nhựa gia dụng', 'Phế liệu may mặc']
  }
];

// Logistics calculation helper function
export function calculateLogisticsCost(
  originId: string, 
  destinationId: string, 
  volumeTons: number
) {
  const origin = INDUSTRIAL_HUBS.find(h => h.id === originId) || INDUSTRIAL_HUBS[0];
  const dest = INDUSTRIAL_HUBS.find(h => h.id === destinationId) || INDUSTRIAL_HUBS[1];

  // Rough distance calculation using Haversine approximation * 1.35 for road detour
  const R = 6371; // km
  const dLat = ((dest.lat - origin.lat) * Math.PI) / 180;
  const dLng = ((dest.lng - origin.lng) * Math.PI) / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos((origin.lat * Math.PI) / 180) * Math.cos((dest.lat * Math.PI) / 180) * 
    Math.sin(dLng/2) * Math.sin(dLng/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  let directDist = R * c;
  let distanceKm = Math.round(Math.max(12, directDist * 1.38));

  // Determine standard transport rate based on tonnage and distance
  // Trucks: 5T, 10T, 15T, 30T container
  const baseTripCost = 1400000;
  const costPerKm = 24000;
  const tripsNeeded = Math.ceil(volumeTons / 15);
  
  const standardCost = Math.round((baseTripCost + (distanceKm * costPerKm)) * tripsNeeded);

  // Re:Mat Backhaul Sharing Optimization:
  // Instead of running empty back, AI clusters route with a return raw material or scrap delivery
  const savingsPct = distanceKm > 100 ? 42 : (distanceKm > 40 ? 35 : 25);
  const savingsVND = Math.round(standardCost * (savingsPct / 100));
  const optimizedCost = standardCost - savingsVND;

  // Carbon metrics
  const standardFuelLiters = (distanceKm * 0.28) * tripsNeeded;
  const co2StandardKg = Math.round(standardFuelLiters * 2.68);
  const co2SavedKg = Math.round(co2StandardKg * (savingsPct / 100));

  const recommendedTruck = volumeTons > 20 
    ? 'Đoàn xe đầu kéo container thùng kín 30T' 
    : (volumeTons > 8 ? 'Xe tải thùng bạt 15T hạ tải' : 'Xe tải 8T chuyên dụng KCN');

  const hours = (distanceKm / 42).toFixed(1);

  return {
    origin,
    destination: dest,
    distanceKm,
    standardCostVND: standardCost,
    optimizedBackhaulCostVND: optimizedCost,
    savingsPercentage: savingsPct,
    savingsVND,
    co2StandardKg,
    co2SavedKg,
    recommendedTruck,
    estimatedTransitTime: `${hours} giờ (gồm thời gian bốc dỡ)`,
    backhaulRouteName: `Tuyến ghép khứ hồi ${origin.province} ⇆ ${dest.province} (Re:Mat Eco-Fleet)`
  };
}

