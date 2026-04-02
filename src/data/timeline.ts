export interface Milestone {
  period: string;
  title: string;
  status: 'current' | 'upcoming' | 'future';
  chips: string[];
  details: string[];
  budget?: string;
}

export const milestones: Milestone[] = [
  {
    period: '2026 Q2–Q3',
    title: 'Foundation — Structure & Funding',
    status: 'current',
    chips: ['HSITP Tenancy', 'IGNITE Awarded', 'MOU Signing'],
    details: [
      'HSITP tenancy confirmed; 港深創科園公司 as operating entity',
      'IGNITE@HSITP programme awarded (HK$6M over 4 years)',
      'Roy + 蔡錦輝 MOUs executed; IP clearance from HKMU',
      'Sensor deployment planning for HK, Shenzhen, and Macau',
    ],
    budget: 'IGNITE HK$6M (awarded) + Angel round HK$2M',
  },
  {
    period: '2026 Q4',
    title: 'Macau Entry — IRB & Grant Application',
    status: 'upcoming',
    chips: ['FDCT Grant Filed', 'Ethics Consultation', 'FHIR Schema v1.0'],
    details: [
      'FDCT grant application filed (蔡錦輝 as Co-PI)',
      '葛磊 hospital leadership meeting; ethics pre-consultation',
      'FHIR data schema v1.0 completed',
    ],
  },
  {
    period: '2027 Q1–Q2',
    title: 'Pilot Launch — Macau 500-Patient Screening',
    status: 'upcoming',
    chips: ['Macau Health Bureau Approval', 'Platform v1 Live', 'First Patient Enrolled'],
    details: [
      'Macau Health Bureau pilot approval received',
      'Macau screening pilot LAUNCHED (target 500 patients)',
      'MetaBee Data Platform v1 LIVE',
      'Shenzhen ethics approval received',
    ],
  },
  {
    period: '2027 Q3–Q4',
    title: 'Scale — Shenzhen Data & Certification',
    status: 'future',
    chips: ['300 Patients Screened', 'PIPL-SCC Executed', 'Dataset Certified'],
    details: [
      '500 Macau patients complete; data certified by 蔡錦輝',
      'First PIPL-SCC contract executed (Shenzhen → HK)',
      'Interim clinical paper submitted to journal',
    ],
  },
  {
    period: '2028 Q1–Q2',
    title: 'First Revenue — Dataset Sales',
    status: 'future',
    chips: ['First Dataset Sold', 'Paper Published', '3,000 Patients Delivered'],
    details: [
      'FIRST DATASET SOLD to pharma buyer — revenue recognised',
      'Clinical validation paper published',
      'Shenzhen cohort 3,000 patients dataset delivered',
    ],
    budget: 'HK$6M spend; HK$3–8M revenue target',
  },
  {
    period: '2028 Q3–Q4',
    title: 'Series A & Exchange Membership',
    status: 'future',
    chips: ['Series A HK$20M', 'Shenzhen Data Exchange', '3 DUAs Active'],
    details: [
      'SERIES A FUNDRAISE launched (target HK$20M)',
      'Shenzhen Data Exchange membership activated',
      '3 pharma licensing agreements active',
    ],
  },
  {
    period: '2029–2030',
    title: 'GBA RWE Platform at Scale',
    status: 'future',
    chips: ['5,000+ Patients', 'Multi-Cancer', 'Series B HK$80M'],
    details: [
      'HKSTP–HA Data Lab pathway (if eligible); HK prostate cancer cohort added',
      'Expand to colorectal cancer data (蔡\'s existing track record)',
      'Series B HK$80M target; expand to cardiovascular, diabetes, oncology',
    ],
  },
];

export const milestones_zh: Milestone[] = [
  {
    period: '2026 Q2–Q3',
    title: '奠基——架构与融资',
    status: 'current',
    chips: ['港深创科园租赁', 'IGNITE 已获批', 'MOU 签署'],
    details: [
      '港深创科园租赁确认；港深创科园公司作为运营实体',
      'IGNITE@HSITP 计划已获批（HK$6M，为期 4 年）',
      'Roy + 蔡錦輝 MOU 已签署；HKMU IP 清理完成',
      '传感器部署规划覆盖香港、深圳和澳门',
    ],
    budget: 'IGNITE HK$6M（已获批）+ 天使轮 HK$2M',
  },
  {
    period: '2026 Q4',
    title: '进入澳门——IRB 与拨款申请',
    status: 'upcoming',
    chips: ['FDCT 拨款已提交', '伦理咨询', 'FHIR Schema v1.0'],
    details: [
      'FDCT 拨款申请已提交（蔡錦輝任联合 PI）',
      '葛磊医院领导层会议；伦理预咨询',
      'FHIR 数据模式 v1.0 完成',
    ],
  },
  {
    period: '2027 Q1–Q2',
    title: '试点启动——澳门 500 名患者筛查',
    status: 'upcoming',
    chips: ['澳门卫生局批准', '平台 v1 上线', '首位患者入组'],
    details: [
      '澳门卫生局试点审批通过',
      '澳门筛查试点启动（目标 500 名患者）',
      'MetaBee 数据平台 v1 上线',
      '深圳伦理审批通过',
    ],
  },
  {
    period: '2027 Q3–Q4',
    title: '扩展——深圳数据与认证',
    status: 'future',
    chips: ['300 名患者已筛查', 'PIPL-SCC 已执行', '数据集已认证'],
    details: [
      '500 名澳门患者完成；数据由蔡錦輝认证',
      '首份 PIPL-SCC 合同已执行（深圳 → 香港）',
      '中期临床论文已投稿',
    ],
  },
  {
    period: '2028 Q1–Q2',
    title: '首次营收——数据集销售',
    status: 'future',
    chips: ['首个数据集售出', '论文已发表', '3,000 名患者已交付'],
    details: [
      '首个数据集售予制药买家——确认收入',
      '临床验证论文已发表',
      '深圳队列 3,000 名患者数据集已交付',
    ],
    budget: 'HK$6M 支出；HK$3–8M 收入目标',
  },
  {
    period: '2028 Q3–Q4',
    title: 'A 轮融资与交易所会员',
    status: 'future',
    chips: ['A 轮 HK$20M', '深圳数据交易所', '3 份 DUA 生效'],
    details: [
      'A 轮融资启动（目标 HK$20M）',
      '深圳数据交易所会员已激活',
      '3 份制药授权协议已生效',
    ],
  },
  {
    period: '2029–2030',
    title: '大湾区 RWE 平台规模化',
    status: 'future',
    chips: ['5,000+ 患者', '多癌种', 'B 轮 HK$80M'],
    details: [
      '科技园–医管局数据实验室路径（若具备资格）；香港前列腺癌队列数据纳入',
      '扩展至结直肠癌数据（蔡錦輝既有研究记录）',
      'B 轮 HK$80M 目标；扩展至心血管、糖尿病、肿瘤',
    ],
  },
];
