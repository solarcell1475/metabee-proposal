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
      'Since September 2024, enterprises in the GBA can execute personal information cross-border transfers using the standardised SCC framework, without a government security assessment, for datasets under 1 million individuals.',
    impact:
      'Removes the single biggest legal blocker that previously made HK-Mainland health data deals impractical.',
    icon: '📜',
  },
  {
    id: 'rwsac',
    title: 'HK RWSAC Real-World Data Centre',
    period: 'Dec 2025',
    description:
      'The Hong Kong government established the Real-World Studies Advisory Committee (RWSAC) in December 2025, with GSK as the first pharmaceutical company to sign an MOU.',
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
    description: '自 2024 年 9 月起，大湾区企业可使用标准化 SCC 框架进行个人信息跨境传输，无需政府安全评估，适用于 100 万人以下的数据集。',
    impact: '消除了此前使香港与内地健康数据交易不切实际的最大法律障碍。',
    icon: '📜',
  },
  {
    id: 'rwsac',
    title: '香港 RWSAC 真实世界数据中心',
    period: '2025年12月',
    description: '香港政府于 2025 年 12 月成立真实世界研究咨询委员会 (RWSAC)，GSK 成为首家签署谅解备忘录的制药公司。',
    impact: '全球制药公司正在积极寻找香港 RWD 合作伙伴——市场正在实时创建中。',
    icon: '🏛️',
  },
];
