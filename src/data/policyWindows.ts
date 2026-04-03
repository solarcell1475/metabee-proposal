export interface PolicyWindow {
  id: string;
  title: string;
  period: string;
  description: string;
  impact: string;
  icon: string;
}

export const policyWindows: PolicyWindow[] = [
  {
    id: 'hsitp-whitelist',
    title: 'HSITP Data-Across-Border White List',
    period: '2025–2026',
    description:
      'Secretary for Innovation & Technology Prof. Sun Dong confirmed HSITP-resident companies will receive "green channel white-list" status for cross-border data flows, operating under a notification/filing model rather than a full security assessment.',
    impact:
      'MetaBee can transfer historical, de-identified patient datasets from Guangdong/Macau to HK, and re-export to overseas buyers, with dramatically lower regulatory friction than any non-HSITP company.',
    icon: '🛡️',
  },
  {
    id: 'gba-scc',
    title: 'GBA Standard Contractual Clauses (SCC)',
    period: 'Sept 2024',
    description:
      'The GBA Standard Contract for cross-boundary personal information flow (CAC + HK ITIB, first published Dec 2023) enables a streamlined route within the nine mainland GBA cities and Hong Kong. Whether a full CAC security assessment can be avoided depends on data type, volume, and current CAC rules — confirm with PRC legal counsel for each dataset.',
    impact:
      'Removes the single biggest legal blocker that previously made HK-Mainland health data deals impractical.',
    icon: '📜',
  },
  {
    id: 'rwsac',
    title: 'HK RWSAC Real-World Data Centre',
    period: '2025–2026',
    description:
      'Hong Kong is developing real-world data/study infrastructure (e.g. RWSAC / related centres, with government reporting targeting end-2025 milestones). In Sept 2025, GBA International Clinical Trial Institute, HKU LKS Faculty of Medicine, and GSK signed an MOU on real-world studies — a concrete early pharma partnership signal.',
    impact:
      'Global pharma is actively looking for RWD partners in Hong Kong RIGHT NOW — the market is being created in real time.',
    icon: '🏛️',
  },
];

export const policyWindows_zh: PolicyWindow[] = [
  {
    id: 'hsitp-whitelist',
    title: '港深创科园跨境数据白名单',
    period: '2025–2026',
    description: '创新科技及工业局局长孙东教授确认，港深创科园驻园企业将获得跨境数据流"绿色通道白名单"地位，采用备案/通知模式而非完整安全评估。',
    impact: 'MetaBee 可以将来自广东/澳门的历史性去标识化患者数据集转移至香港，并再出口至海外买家，其监管阻力远低于任何非港深创科园企业。',
    icon: '🛡️',
  },
  {
    id: 'gba-scc',
    title: '大湾区标准合同条款 (SCC)',
    period: '2024年9月',
    description: '大湾区个人信息跨境流动标准合同（国家网信办与香港创科工业局，2023 年 12 月首发）为九市与香港之间的传输提供简化路径。是否免于网信办安全评估取决于数据类型、规模及当时法规——须就每个数据集由内地法律顾问个案确认。',
    impact: '消除了此前使香港与内地健康数据交易不切实际的最大法律障碍。',
    icon: '📜',
  },
  {
    id: 'rwsac',
    title: '香港 RWSAC 真实世界数据中心',
    period: '2025–2026',
    description: '香港正推进真实世界数据/研究相关基建（如 RWSAC 等，政府曾披露约 2025 年底前目标）。2025 年 9 月，大湾区国际临床试验所、港大医学院与 GSK 已就真实世界研究签署合作备忘录，属早期制药合作信号。',
    impact: '全球制药公司正在积极寻找香港 RWD 合作伙伴——市场正在实时创建中。',
    icon: '🏛️',
  },
];

/** SC-public-v2：政策窗不点名特定高校（避免与具体学者关联） */
export const policyWindows_zh_public: PolicyWindow[] = [
  {
    id: 'hsitp-whitelist',
    title: '港深创科园跨境数据白名单',
    period: '2025–2026',
    description: '创新科技及工业局局长确认，港深创科园驻园企业将获得跨境数据流"绿色通道白名单"地位，采用备案/通知模式而非完整安全评估。',
    impact: 'MetaBee 可以将来自广东/澳门的历史性去标识化患者数据集转移至香港，并再出口至海外买家，其监管阻力远低于任何非港深创科园企业。',
    icon: '🛡️',
  },
  {
    id: 'gba-scc',
    title: '大湾区标准合同条款 (SCC)',
    period: '2024年9月',
    description: '大湾区个人信息跨境流动标准合同（国家网信办与香港创科工业局，2023 年 12 月首发）为九市与香港之间的传输提供简化路径。是否免于网信办安全评估取决于数据类型、规模及当时法规——须就每个数据集由内地法律顾问个案确认。',
    impact: '消除了此前使香港与内地健康数据交易不切实际的最大法律障碍。',
    icon: '📜',
  },
  {
    id: 'rwsac',
    title: '香港 RWSAC 真实世界数据中心',
    period: '2025–2026',
    description: '香港正推进真实世界数据/研究相关基建（如 RWSAC 等，政府曾披露约 2025 年底前目标）。2025 年 9 月，大湾区国际临床试验所、香港高等院校医学院与 GSK 已就真实世界研究签署合作备忘录，属早期制药合作信号。',
    impact: '全球制药公司正在积极寻找香港 RWD 合作伙伴——市场正在实时创建中。',
    icon: '🏛️',
  },
];
