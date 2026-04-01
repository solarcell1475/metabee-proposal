export interface FundingSource {
  source: string;
  amount: string;
  timeline: string;
  probability: 'HIGH' | 'MEDIUM' | 'MEDIUM-HIGH';
}

export const fundingSources: FundingSource[] = [
  { source: 'IGNITE@HSITP (Awarded)', amount: 'HK$6,000,000', timeline: '2026–2029', probability: 'HIGH' },
  { source: 'Angel Round', amount: 'HK$2,000,000', timeline: '2026 Q3', probability: 'HIGH' },
  { source: 'HK Healthcare AI Programme', amount: 'HK$5,000,000', timeline: '2027 Q1', probability: 'MEDIUM' },
  { source: 'Macau FDCT Grant', amount: 'HK$1,900,000', timeline: '2027 Q2', probability: 'MEDIUM' },
  { source: 'Shenzhen Strategic Emerging Industry Fund', amount: 'HK$1,500,000', timeline: '2027 Q2', probability: 'MEDIUM' },
  { source: 'Shenzhen Medical Research Fund', amount: 'HK$800,000', timeline: '2027 Q3', probability: 'MEDIUM' },
  { source: 'Year 3 Data Sales', amount: 'HK$3–8M', timeline: '2028', probability: 'MEDIUM-HIGH' },
];

export const totalFunding = 'HK$20.2–25.2M';

export interface ExpenditureRow {
  category: string;
  year1: string;
  year2: string;
  year3: string;
  total: string;
}

export const expenditure: ExpenditureRow[] = [
  { category: 'HSITP Rent + Operations', year1: 'HK$200K', year2: 'HK$250K', year3: 'HK$300K', total: 'HK$750K' },
  { category: 'Stakeholder Fees', year1: 'HK$840K', year2: 'HK$840K', year3: 'HK$840K', total: 'HK$2.52M' },
  { category: 'Platform Development', year1: 'HK$500K', year2: 'HK$200K', year3: 'HK$100K', total: 'HK$800K' },
  { category: 'Legal (MOUs + PIPL-SCC)', year1: 'HK$200K', year2: 'HK$150K', year3: 'HK$100K', total: 'HK$450K' },
  { category: 'Clinical Trial (Macau)', year1: 'HK$100K', year2: 'HK$800K', year3: 'HK$200K', total: 'HK$1.1M' },
  { category: 'Data Infrastructure', year1: 'HK$150K', year2: 'HK$200K', year3: 'HK$200K', total: 'HK$550K' },
  { category: 'Marketing / BD', year1: 'HK$100K', year2: 'HK$200K', year3: 'HK$400K', total: 'HK$700K' },
  { category: 'Contingency (10%)', year1: 'HK$210K', year2: 'HK$264K', year3: 'HK$214K', total: 'HK$688K' },
];

export const totalExpenditure = 'HK$7.55M';
export const netPosition = '+HK$12.65M (base case)';

export const fundingSources_zh: FundingSource[] = [
  { source: 'IGNITE@HSITP（已获批）', amount: 'HK$6,000,000', timeline: '2026–2029', probability: 'HIGH' },
  { source: '天使轮', amount: 'HK$2,000,000', timeline: '2026 Q3', probability: 'HIGH' },
  { source: '香港医疗 AI 创新计划', amount: 'HK$5,000,000', timeline: '2027 Q1', probability: 'MEDIUM' },
  { source: '澳门 FDCT 拨款', amount: 'HK$1,900,000', timeline: '2027 Q2', probability: 'MEDIUM' },
  { source: '深圳战略性新兴产业专项资金', amount: 'HK$1,500,000', timeline: '2027 Q2', probability: 'MEDIUM' },
  { source: '深圳医学研究专项资金', amount: 'HK$800,000', timeline: '2027 Q3', probability: 'MEDIUM' },
  { source: '第三年数据销售', amount: 'HK$3–8M', timeline: '2028', probability: 'MEDIUM-HIGH' },
];

export const expenditure_zh: ExpenditureRow[] = [
  { category: 'HSITP 租金 + 运营', year1: 'HK$200K', year2: 'HK$250K', year3: 'HK$300K', total: 'HK$750K' },
  { category: '利益相关方费用', year1: 'HK$840K', year2: 'HK$840K', year3: 'HK$840K', total: 'HK$2.52M' },
  { category: '平台开发', year1: 'HK$500K', year2: 'HK$200K', year3: 'HK$100K', total: 'HK$800K' },
  { category: '法律（MOUs + PIPL-SCC）', year1: 'HK$200K', year2: 'HK$150K', year3: 'HK$100K', total: 'HK$450K' },
  { category: '临床试验（澳门）', year1: 'HK$100K', year2: 'HK$800K', year3: 'HK$200K', total: 'HK$1.1M' },
  { category: '数据基础设施', year1: 'HK$150K', year2: 'HK$200K', year3: 'HK$200K', total: 'HK$550K' },
  { category: '市场推广/商务拓展', year1: 'HK$100K', year2: 'HK$200K', year3: 'HK$400K', total: 'HK$700K' },
  { category: '应急储备 (10%)', year1: 'HK$210K', year2: 'HK$264K', year3: 'HK$214K', total: 'HK$688K' },
];
