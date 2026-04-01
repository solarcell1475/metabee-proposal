export interface BuyerSegment {
  segment: string;
  examples: string;
  useCase: string;
  pricePoint: string;
  priority: 'high' | 'medium' | 'low';
}

export const marketStats = {
  marketSize: 'USD 5.4B',
  cagr: '14.8%',
  cagrPeriod: 'through 2030',
  asianDataGap: '95% of prostate cancer RWD originates from Caucasian populations',
  cohortValue: 'USD 800K–2M per licensing deal',
} as const;

export const buyerSegments: BuyerSegment[] = [
  {
    segment: 'Global Pharma RWE',
    examples: 'AstraZeneca, Roche, GSK, Pfizer',
    useCase: 'Drug efficacy in Asian populations',
    pricePoint: 'USD 200K–2M/dataset',
    priority: 'high',
  },
  {
    segment: 'CRO Platforms',
    examples: 'IQVIA, Parexel, Syneos',
    useCase: 'Site selection, patient matching',
    pricePoint: 'USD 50K–200K/engagement',
    priority: 'high',
  },
  {
    segment: 'AI Drug Discovery',
    examples: 'Insilico Medicine, BioMap, XtalPi',
    useCase: 'Training datasets for AI models',
    pricePoint: 'USD 100K–500K/license',
    priority: 'medium',
  },
  {
    segment: 'Medical Device',
    examples: 'Olympus, Siemens Healthineers',
    useCase: 'Diagnostic validation',
    pricePoint: 'USD 50K–300K',
    priority: 'medium',
  },
  {
    segment: 'Academic / Research',
    examples: 'NUS, MSKCC, Oxford',
    useCase: 'Grant-funded studies',
    pricePoint: 'USD 20K–80K',
    priority: 'low',
  },
];

export const competitiveEdge = [
  'No direct competitor holds HSITP white-list status + Asian RWD + clinical validation',
  'Flatiron Health (US): US-only, no Asian population data',
  'Medidata (Dassault): clinical trial data only, not screening/community data',
  'MetaBee unique position: HSITP-privileged + GBA-SCC-compliant + academic-validated + community-screened',
];

export const buyerSegments_zh: BuyerSegment[] = [
  {
    segment: '全球制药 RWE',
    examples: 'AstraZeneca、Roche、GSK、Pfizer',
    useCase: '亚洲人群药效研究',
    pricePoint: 'USD 200K–2M/数据集',
    priority: 'high',
  },
  {
    segment: 'CRO 平台',
    examples: 'IQVIA、Parexel、Syneos',
    useCase: '场地选择、患者匹配',
    pricePoint: 'USD 50K–200K/项目',
    priority: 'high',
  },
  {
    segment: 'AI 药物发现',
    examples: 'Insilico Medicine、BioMap、XtalPi',
    useCase: 'AI 模型训练数据集',
    pricePoint: 'USD 100K–500K/授权',
    priority: 'medium',
  },
  {
    segment: '医疗器械',
    examples: 'Olympus、Siemens Healthineers',
    useCase: '诊断验证',
    pricePoint: 'USD 50K–300K',
    priority: 'medium',
  },
  {
    segment: '学术/研究',
    examples: 'NUS、MSKCC、Oxford',
    useCase: '拨款资助研究',
    pricePoint: 'USD 20K–80K',
    priority: 'low',
  },
];

export const competitiveEdge_zh = [
  '没有直接竞争对手同时拥有港深创科园白名单地位 + 亚洲 RWD + 临床验证',
  'Flatiron Health（美国）：仅限美国，无亚洲人群数据',
  'Medidata（Dassault）：仅临床试验数据，非筛查/社区数据',
  'MetaBee 独特定位：港深创科园特许 + GBA-SCC 合规 + 学术验证 + 社区筛查',
];
