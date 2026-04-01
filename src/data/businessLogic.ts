export interface BusinessLayer {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  color: string;
  steps: string[];
}

export const businessLayers: BusinessLayer[] = [
  {
    id: 'academic',
    number: 1,
    title: 'Academic Anchor',
    subtitle: 'Public Good / Credibility',
    color: 'var(--color-primary)',
    steps: [
      'Roy Sensor (HKMU)',
      'Academic Paper + IRB Ethics Approval',
      'Prostate Cancer Screening Trial (Macau, ~500 patients)',
      'Published Clinical Validation',
    ],
  },
  {
    id: 'data-asset',
    number: 2,
    title: 'Data Asset Creation',
    subtitle: 'Operational Core',
    color: 'var(--color-gold)',
    steps: [
      'Macau Pilot Data → 蔡錦輝 AI Curation → FHIR-Structured Dataset',
      'Ge Lei (Shenzhen) historical cohort → 3,000+ patient dataset',
      'Macau FDCT Funding + HK HSITP Grant → Operational runway',
    ],
  },
  {
    id: 'commercial',
    number: 3,
    title: 'Commercial Monetisation',
    subtitle: 'Revenue Engine',
    color: 'var(--color-accent)',
    steps: [
      'HSITP White-List Export → MetaBee Data Marketplace',
      'Pharma RWE Studies (AstraZeneca, Roche Asia, GSK)',
      'CRO Platforms (IQVIA, Parexel Asia)',
      'AI Drug Discovery (Insilico Medicine, BioMap)',
      'Academic Licensing (NUS, NCIS Singapore, MSKCC)',
    ],
  },
];

export const businessLayers_zh: BusinessLayer[] = [
  {
    id: 'academic',
    number: 1,
    title: '学术锚点',
    subtitle: '公共利益 / 可信度',
    color: 'var(--color-primary)',
    steps: [
      'Roy 传感器 (HKMU)',
      '学术论文 + IRB 伦理审批',
      '前列腺癌筛查试验（澳门，约 500 名患者）',
      '已发表的临床验证',
    ],
  },
  {
    id: 'data-asset',
    number: 2,
    title: '数据资产创建',
    subtitle: '运营核心',
    color: 'var(--color-gold)',
    steps: [
      '澳门试点数据 → 蔡錦輝 AI 整理 → FHIR 结构化数据集',
      '葛磊（深圳）历史队列 → 3,000+ 患者数据集',
      '澳门 FDCT 资助 + 香港港深创科园拨款 → 运营资金',
    ],
  },
  {
    id: 'commercial',
    number: 3,
    title: '商业变现',
    subtitle: '收入引擎',
    color: 'var(--color-accent)',
    steps: [
      '港深创科园白名单出口 → MetaBee 数据市场',
      '制药 RWE 研究（AstraZeneca、Roche Asia、GSK）',
      'CRO 平台（IQVIA、Parexel Asia）',
      'AI 药物发现（Insilico Medicine、BioMap）',
      '学术授权（NUS、NCIS Singapore、MSKCC）',
    ],
  },
];
