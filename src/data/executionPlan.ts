export interface RegulatoryAction {
  id: string;
  jurisdiction: string;
  law: string;
  action: string;
  owner: string;
  deadline: string;
  dependencies: string[];
  status: 'not-started' | 'in-progress' | 'blocked' | 'completed';
  phase: 1 | 2 | 3;
  category: 'registration' | 'ethics' | 'contract' | 'grant' | 'data' | 'commercial';
  details: string;
  risk: string;
}

export const executionPhases = [
  {
    phase: 1,
    title: 'Phase 1 — Entity & Compliance Foundation',
    period: '2026 Q2–Q4',
    objective: 'Establish legal entities, secure tenancy, file initial registrations, and execute MOUs before any data touches cross a border.',
  },
  {
    phase: 2,
    title: 'Phase 2 — Clinical & Data Operations',
    period: '2027 Q1–Q4',
    objective: 'Obtain all ethics approvals, launch pilot screening, execute PIPL-SCC contracts, and establish the cross-border data pipeline.',
  },
  {
    phase: 3,
    title: 'Phase 3 — Commercialisation & Scaling',
    period: '2028 Q1–Q4',
    objective: 'Sell first datasets, manage buyer compliance (GDPR DPA), activate Shenzhen Data Exchange membership, and prepare Series A.',
  },
] as const;

export const regulatoryActions: RegulatoryAction[] = [
  // ─── PHASE 1: Entity & Compliance Foundation ───
  {
    id: 'REG-01',
    jurisdiction: 'Hong Kong',
    law: 'Companies Ordinance',
    action: 'Register MetaBee.com (HK) Ltd as HSITP tenant',
    owner: 'MetaBee',
    deadline: '2026 Q2',
    dependencies: [],
    status: 'in-progress',
    phase: 1,
    category: 'registration',
    details: 'Minimum 1 desk tenancy (~HK$3,500/month). This is the prerequisite for ALL HSITP privileges including white-list status, IGNITE grant eligibility, and HA Data Lab access.',
    risk: 'No risk — straightforward commercial lease. But delay here blocks everything downstream.',
  },
  {
    id: 'REG-02',
    jurisdiction: 'Hong Kong',
    law: 'PDPO — Personal Data Privacy Ordinance',
    action: 'Register as Data User with PCPD; appoint Data Protection Officer',
    owner: 'MetaBee + Legal Counsel',
    deadline: '2026 Q3',
    dependencies: ['REG-01'],
    status: 'not-started',
    phase: 1,
    category: 'registration',
    details: 'File Data User Return with the Privacy Commissioner for Personal Data (PCPD). Appoint DPO (can be internal initially). Prepare DPP1-DPP6 compliance documentation. This is required before MetaBee can legally process any personal health data in Hong Kong.',
    risk: 'Low — registration is non-discretionary if you file correctly.',
  },
  {
    id: 'REG-03',
    jurisdiction: 'Hong Kong',
    law: 'HSITP White-List Framework',
    action: 'File for HSITP Data-Across-Border White-List status',
    owner: 'MetaBee',
    deadline: '2026 Q3',
    dependencies: ['REG-01'],
    status: 'not-started',
    phase: 1,
    category: 'registration',
    details: 'Submit notification/filing to HSITP administration per the green-channel framework announced by Prof. Sun Dong. This converts MetaBee from a standard company to a white-listed data broker — the core unfair advantage. Processing time: ~10 working days.',
    risk: 'R1 in risk matrix — policy reversal. Mitigation: get written scope confirmation from HKSTP policy team.',
  },
  {
    id: 'REG-04',
    jurisdiction: 'Hong Kong',
    law: 'HKSTP IGNITE Programme',
    action: 'Submit IGNITE grant application (HK$6M)',
    owner: 'MetaBee',
    deadline: '2026 Q3',
    dependencies: ['REG-01'],
    status: 'not-started',
    phase: 1,
    category: 'grant',
    details: 'Required: IP ownership proof, prototype demo, team credentials, 3-year financial projection. Pre-application meeting with HKSTP BD (bd@hkstp.org) is prerequisite. Timeline: ~3 months from submission to decision.',
    risk: 'MEDIUM probability — competitive. Mitigation: angel round HK$2M as runway bridge.',
  },
  {
    id: 'REG-05',
    jurisdiction: 'Macau',
    law: 'LPDP — Lei de Proteção de Dados Pessoais',
    action: 'Prepare IRB application for Macau pilot screening',
    owner: '蔡錦輝 + MetaBee',
    deadline: '2026 Q4',
    dependencies: [],
    status: 'not-started',
    phase: 1,
    category: 'ethics',
    details: 'Health data = sensitive under LPDP. Requires: explicit consent forms (Portuguese + Chinese), Macau Health Bureau pilot approval, Kiang Wu Hospital site agreement. 蔡錦輝 as Co-PI provides academic credibility for ethics committee.',
    risk: 'R2 — Macau Health Bureau rejection. Mitigation: Macau Foundation endorsement + FDCT co-funding as leverage.',
  },
  {
    id: 'REG-06',
    jurisdiction: 'Macau',
    law: 'FDCT Regulations',
    action: 'Submit FDCT grant application (MOP 2–5M)',
    owner: '蔡錦輝 (Co-PI) + MetaBee',
    deadline: '2026 Q4',
    dependencies: ['REG-05'],
    status: 'not-started',
    phase: 1,
    category: 'grant',
    details: 'FDCT (Fundo para o Desenvolvimento das Ciências e da Tecnologia) is the primary Macau science funder. 蔡錦輝\'s CUHK affiliation + Macau Foundation connection strengthens application. Joint CUHK-FDCT grant is the target vehicle.',
    risk: 'MEDIUM — competitive but strong positioning with community health angle.',
  },
  {
    id: 'REG-07',
    jurisdiction: 'All',
    law: 'Contract Law',
    action: 'Execute 3-way MOUs (MetaBee / Roy / 蔡錦輝 / 葛磊)',
    owner: 'MetaBee + IP Lawyer',
    deadline: '2026 Q3–Q4',
    dependencies: ['REG-01'],
    status: 'not-started',
    phase: 1,
    category: 'contract',
    details: 'MOU must define: IP ownership, revenue sharing (Roy 5%, 蔡 5% equity, 葛磊 3%), data governance responsibilities, publication rights, non-compete scope. Engage IP lawyer to draft template. Critical for IGNITE application (shows team commitment).',
    risk: 'Low — all parties are aligned in principle. Risk is delay, not refusal.',
  },
  {
    id: 'REG-08',
    jurisdiction: 'Mainland China',
    law: 'PIPL — Personal Information Protection Law',
    action: 'Design PIPL-compliant data anonymisation protocol',
    owner: '蔡錦輝 + 葛磊',
    deadline: '2026 Q4',
    dependencies: [],
    status: 'not-started',
    phase: 1,
    category: 'data',
    details: 'PIPL Art. 73 requires de-identification at source. Design protocol: remove name, ID number, phone, address, DOB → replace with pseudonymous ID. Enhanced: k-anonymity k≥5, suppress rare combinations, generalise age to 5-year bands. Protocol must be certified against ISO 29101.',
    risk: 'Low technical risk — 蔡錦輝 has existing colorectal cancer data pipeline as template.',
  },

  // ─── PHASE 2: Clinical & Data Operations ───
  {
    id: 'REG-09',
    jurisdiction: 'Macau',
    law: 'Macau Health Bureau Regulations',
    action: 'Obtain Macau Health Bureau pilot screening approval',
    owner: 'MetaBee + 蔡錦輝',
    deadline: '2027 Q1',
    dependencies: ['REG-05'],
    status: 'not-started',
    phase: 2,
    category: 'ethics',
    details: 'Submit IRB application to Macau Health Bureau. Requires: clinical protocol (from Roy), site agreement (Kiang Wu Hospital), ethics review, LPDP-compliant consent forms. Macau Foundation endorsement letter accelerates review.',
    risk: 'R2 — rejection possible. Fallback: CHCSJ (Centro Hospitalar Conde de São Januário) as alternative site.',
  },
  {
    id: 'REG-10',
    jurisdiction: 'Mainland China',
    law: 'Ethics Committee Regulations',
    action: 'Obtain Shenzhen University Hospital ethics approval',
    owner: '葛磊',
    deadline: '2027 Q2',
    dependencies: ['REG-08'],
    status: 'not-started',
    phase: 2,
    category: 'ethics',
    details: 'Ethics committee application for retrospective data access (1,000–3,000 patient historical cohort). PIPL-compliant anonymisation protocol must be attached. 葛磊 leads internal hospital process.',
    risk: 'R4 — hospital ethics rejection. Mitigation: two alternative Shenzhen hospitals prepared; SIAT connection for provincial ethics.',
  },
  {
    id: 'REG-11',
    jurisdiction: 'Mainland China → Hong Kong',
    law: 'PIPL + GBA-SCC',
    action: 'Execute first PIPL-SCC Standard Contract (Shenzhen → HK)',
    owner: 'MetaBee + Legal Counsel',
    deadline: '2027 Q3',
    dependencies: ['REG-10', 'REG-03'],
    status: 'not-started',
    phase: 2,
    category: 'contract',
    details: 'GBA Standard Contractual Clauses enable cross-border personal information transfer without full government security assessment for datasets under 1M individuals. File executed SCC with CAC (Cyberspace Administration of China). This is the legal instrument that makes the Shenzhen cohort data legally transferable to HK.',
    risk: 'R5 — if dataset exceeds 1M records, full CAC security assessment triggered. Mitigation: cap initial dataset at 500K records.',
  },
  {
    id: 'REG-12',
    jurisdiction: 'Hong Kong',
    law: 'HSITP White-List + PDPO',
    action: 'File HSITP white-list notification for first cross-border dataset',
    owner: 'MetaBee',
    deadline: '2027 Q3',
    dependencies: ['REG-03', 'REG-11'],
    status: 'not-started',
    phase: 2,
    category: 'data',
    details: 'For each cross-border data batch, file a notification under the HSITP white-list framework (10 working days processing). Simultaneously ensure PDPO DPP4 compliance (overseas transfer safeguards). This is the operational step that makes data available in MetaBee\'s HK secure data room.',
    risk: 'Low — filing is procedural once white-list status is confirmed.',
  },
  {
    id: 'REG-13',
    jurisdiction: 'Macau → Hong Kong',
    law: 'LPDP + PDPO',
    action: 'Establish Macau → HK data transfer agreement',
    owner: 'MetaBee + Legal Counsel',
    deadline: '2027 Q4',
    dependencies: ['REG-09'],
    status: 'not-started',
    phase: 2,
    category: 'contract',
    details: 'Macau-HK transfer follows LPDP requirements: data transfer to jurisdiction with comparable protection (HK PDPO qualifies). Prepare bilateral data transfer agreement between Kiang Wu Hospital and MetaBee HK. Consent forms must explicitly mention cross-border transfer.',
    risk: 'Low — HK is recognized as having comparable data protection under LPDP.',
  },

  // ─── PHASE 3: Commercialisation ───
  {
    id: 'REG-14',
    jurisdiction: 'International (EU)',
    law: 'GDPR',
    action: 'Prepare GDPR-compliant Data Processing Agreement for EU pharma buyers',
    owner: 'MetaBee + External DPO Consultant',
    deadline: '2028 Q1',
    dependencies: ['REG-12'],
    status: 'not-started',
    phase: 3,
    category: 'commercial',
    details: 'For EU-based pharma buyers (GSK, AstraZeneca, Roche): prepare standard GDPR DPA template. Include: data processing purposes, retention periods, sub-processor list, breach notification procedures, DPIA. Consider Singapore subsidiary for EU-facing sales if HK adequacy is challenged.',
    risk: 'R6 — HK not GDPR adequate. Mitigation: GDPR-compliant DPA template + Singapore subsidiary option.',
  },
  {
    id: 'REG-15',
    jurisdiction: 'United States',
    law: 'FDA RWE Guidance (2023)',
    action: 'Ensure FHIR R4 format compliance for US buyer datasets',
    owner: '蔡錦輝',
    deadline: '2028 Q1',
    dependencies: ['REG-08'],
    status: 'not-started',
    phase: 3,
    category: 'data',
    details: 'FDA now accepts Real-World Evidence for drug approvals and label extensions. Datasets sold to US pharma must be in FHIR R4 format with full data quality documentation and audit trail. 蔡錦輝\'s FHIR schema v1.0 (Phase 1) is designed for this compliance.',
    risk: 'Low — FHIR schema designed from Day 1 with FDA compliance in mind.',
  },
  {
    id: 'REG-16',
    jurisdiction: 'Mainland China',
    law: 'Shenzhen Data Exchange Regulations',
    action: 'Activate Shenzhen Data Exchange (深圳數據交易所) membership',
    owner: 'MetaBee',
    deadline: '2028 Q3',
    dependencies: ['REG-11'],
    status: 'not-started',
    phase: 3,
    category: 'commercial',
    details: 'Regulated secondary data trading venue. Membership enables MetaBee to sell de-identified datasets through a government-sanctioned exchange, adding legitimacy and access to domestic Chinese buyers. Requires proven cross-border compliance track record.',
    risk: 'Low — membership is merit-based; prior SCC execution demonstrates compliance maturity.',
  },
  {
    id: 'REG-17',
    jurisdiction: 'Hong Kong',
    law: 'PDPO + Commercial Law',
    action: 'Establish Data Use Agreement (DUA) template for all buyer segments',
    owner: 'MetaBee + Legal Counsel',
    deadline: '2028 Q1',
    dependencies: ['REG-14'],
    status: 'not-started',
    phase: 3,
    category: 'commercial',
    details: 'Standard DUA template covering: permitted use cases, data retention limits, re-identification prohibition, audit rights, breach notification, sub-licensing restrictions. Must be adaptable for pharma, CRO, AI, academic, and medical device buyer segments.',
    risk: 'Low — standard commercial legal document. Engage experienced health data lawyer.',
  },
  {
    id: 'REG-18',
    jurisdiction: 'Hong Kong',
    law: 'HKSTP HA Data Lab Agreement',
    action: 'Apply for Hospital Authority Data Collaboration Lab access',
    owner: 'MetaBee',
    deadline: '2028 Q4',
    dependencies: ['REG-01', 'REG-03'],
    status: 'not-started',
    phase: 3,
    category: 'data',
    details: 'HKSTP is the ONLY entity with formal HA collaboration agreement (200,000+ patient records). As HSITP tenant with proven cross-border compliance track record, MetaBee can apply for lab access to add HK prostate cancer cohort data to the dataset portfolio.',
    risk: 'MEDIUM — competitive access, but MetaBee\'s compliance track record by this point is strong.',
  },
];

export const criticalPath = [
  'REG-01 → REG-03 → REG-11 → REG-12 → REG-14/REG-17',
  'REG-01 → REG-04 (IGNITE funding — parallel)',
  'REG-05 → REG-09 → REG-13 (Macau clinical pathway)',
  'REG-08 → REG-10 → REG-11 (Shenzhen data pathway)',
];

export const executionPrinciples = [
  {
    title: 'De-identify First, Transfer Second',
    description: 'PIPL Art. 73 mandates anonymisation at source. Every dataset is de-identified at the hospital before any cross-border movement. This is non-negotiable and eliminates 90% of regulatory friction.',
  },
  {
    title: 'Cap Below Thresholds',
    description: 'Keep initial datasets under 1M individuals to avoid triggering full CAC security assessment. Use GBA-SCC (Standard Contractual Clauses) for sub-threshold transfers — dramatically faster than government assessment route.',
  },
  {
    title: 'Layer Compliance by Jurisdiction',
    description: 'Each data hop adds a compliance layer: PIPL/LPDP at source → PIPL-SCC for cross-border → PDPO in HK → GDPR DPA for EU buyers → FDA RWE for US buyers. Build once, reuse for every transaction.',
  },
  {
    title: 'HSITP White-List Is the Moat',
    description: 'The single most valuable regulatory asset. Filing model (10 days) vs. full security assessment (12+ months). This privilege must be secured and maintained above all else.',
  },
  {
    title: 'Parallel Track Everything',
    description: 'Macau IRB, Shenzhen ethics, and HSITP registration can all proceed simultaneously. The critical path only converges when data actually needs to cross borders in Phase 2.',
  },
];

export type ActionCategory = RegulatoryAction['category'];

export const categoryLabels: Record<ActionCategory, string> = {
  registration: 'Registration',
  ethics: 'Ethics & IRB',
  contract: 'Contracts & MOUs',
  grant: 'Grants & Funding',
  data: 'Data Operations',
  commercial: 'Commercial',
};

export const executionPhases_zh = [
  {
    phase: 1,
    title: '第一阶段——实体与合规基础',
    period: '2026 Q2–Q4',
    objective: '建立法律实体、确保租赁、提交初始注册、在任何数据跨境前签署 MOU。',
  },
  {
    phase: 2,
    title: '第二阶段——临床与数据运营',
    period: '2027 Q1–Q4',
    objective: '获取所有伦理审批、启动试点筛查、执行 PIPL-SCC 合同、建立跨境数据管道。',
  },
  {
    phase: 3,
    title: '第三阶段——商业化与扩展',
    period: '2028 Q1–Q4',
    objective: '销售首批数据集、管理买方合规 (GDPR DPA)、激活深圳数据交易所会员、准备 A 轮融资。',
  },
] as const;

export const executionPrinciples_zh = [
  {
    title: '先去标识化，再传输',
    description: 'PIPL 第 73 条要求源头匿名化。每个数据集在任何跨境移动之前都在医院进行去标识化。这是不可妥协的，消除了 90% 的监管阻力。',
  },
  {
    title: '控制在阈值以下',
    description: '初始数据集保持在 100 万人以下，避免触发完整的 CAC 安全评估。阈值以下传输使用 GBA-SCC（标准合同条款）——比政府评估路径快得多。',
  },
  {
    title: '按法域分层合规',
    description: '每一跳数据增加一个合规层：源头 PIPL/LPDP → 跨境 PIPL-SCC → 香港 PDPO → 欧盟买家 GDPR DPA → 美国买家 FDA RWE。一次构建，每笔交易复用。',
  },
  {
    title: '港深创科园白名单是护城河',
    description: '最有价值的单一监管资产。备案模式（10 天）vs. 完整安全评估（12+ 个月）。必须优先确保并维持这一特权。',
  },
  {
    title: '一切并行推进',
    description: '澳门 IRB、深圳伦理审批和港深创科园注册可以同时进行。关键路径仅在第二阶段数据实际需要跨境时才汇聚。',
  },
];

export const categoryLabels_zh: Record<ActionCategory, string> = {
  registration: '注册登记',
  ethics: '伦理审查',
  contract: '合同与备忘录',
  grant: '拨款与资助',
  data: '数据运营',
  commercial: '商业化',
};
