export interface HSITPPrivilege {
  id: string;
  title: string;
  detail: string;
  value: string;
  icon: string;
  colorClass: 'green' | 'gold' | 'blue' | 'orange';
}

export const hsitpPrivileges: HSITPPrivilege[] = [
  {
    id: 'whitelist',
    title: 'Data-Across-Border White List',
    detail:
      'Green channel for GBA health data flow; filing model, not security assessment',
    value: 'Priceless — removes 12-month legal delay',
    icon: '🔓',
    colorClass: 'green',
  },
  {
    id: 'ignite',
    title: 'IGNITE@HSITP Grant (Awarded)',
    detail: 'HK$6 million non-dilutive R&D grant over 4 years — already awarded to MetaBee. Milestone-based disbursement every 6 months. Free office space included.',
    value: 'HK$6M cash — CONFIRMED',
    icon: '🔥',
    colorClass: 'gold',
  },
  {
    id: 'hk-healthcare-ai',
    title: 'HK Healthcare AI Programme',
    detail: 'Third-party summaries cite up to ~HK$10M for healthcare/clinical AI R&D via government innovation funding routes (e.g. ITF/HMRF-related schemes). Caps, co-funding ratios, and HA deployment requirements must be verified against current official guidance before budgeting.',
    value: 'Up to HK$10M',
    icon: '🧠',
    colorClass: 'gold',
  },
  {
    id: 'sensor-deploy',
    title: 'Multi-Region Sensor Deployment',
    detail: 'Roy sensor technology can be deployed across Hong Kong, Shenzhen, and Macau — expanding screening reach and data generation across the entire GBA corridor.',
    value: 'GBA-wide deployment',
    icon: '🔬',
    colorClass: 'blue',
  },
  {
    id: 'ha-data',
    title: 'HA Data Collaboration Lab (HKSTP)',
    detail:
      'The Hospital Authority and Hong Kong Science and Technology Parks Corporation (HKSTP) jointly operate the HA Data Collaboration Lab (~200,000 anonymised patient records). Eligibility is for HKSTP incubatees/tenants and InnoHK centre companies — not automatic for HSITP tenants; a separate HKSTP pathway may be required.',
    value: 'Verify eligibility separately',
    icon: '🏥',
    colorClass: 'green',
  },
  {
    id: 'innohk',
    title: 'InnoHK Research Ecosystem',
    detail:
      'InnoHK (Health@InnoHK, AIR@InnoHK, etc.) is an ITC initiative; R&D centres are located at Hong Kong Science Park — not on the HSITP campus in the Loop. Useful for partnerships, not a built-in HSITP on-site perk.',
    value: 'Partner / collaborator access',
    icon: '🔬',
    colorClass: 'blue',
  },
  {
    id: 'gba-fast',
    title: 'GBA Fast Track',
    detail:
      'Subsidised entry to Shenzhen, Guangzhou, Foshan innovation parks',
    value: 'Expansion pathway',
    icon: '🚀',
    colorClass: 'orange',
  },
  {
    id: 'budget-100b',
    title: 'HK$100B Innovation Budget',
    detail:
      '2026 Budget committed HK$100B for innovation; HSITP startups in priority queue',
    value: 'Funding access',
    icon: '💰',
    colorClass: 'orange',
  },
];

export const hsitpPrivileges_zh: HSITPPrivilege[] = [
  {
    id: 'whitelist',
    title: '跨境数据白名单',
    detail: '大湾区健康数据流绿色通道；备案模式，非安全评估',
    value: '无价——消除 12 个月法律延迟',
    icon: '🔓',
    colorClass: 'green',
  },
  {
    id: 'ignite',
    title: 'IGNITE@HSITP 拨款（已获批）',
    detail: 'HK$600 万非稀释性研发拨款，为期 4 年——已授予 MetaBee。每 6 个月按里程碑评估拨付。免费办公空间含在内。',
    value: 'HK$600 万现金——已确认',
    icon: '🔥',
    colorClass: 'gold',
  },
  {
    id: 'hk-healthcare-ai',
    title: '香港医疗 AI 创新计划',
    detail: '业界摘要常引用约 HK$1,000 万级别的医疗/临床 AI 研发资助（如与创新及科技基金、医疗卫生研究基金等相关计划）。具体上限、配套比例及医管局路径须以当局最新正式指引为准。',
    value: '最高 HK$1,000 万',
    icon: '🧠',
    colorClass: 'gold',
  },
  {
    id: 'sensor-deploy',
    title: '多区域传感器部署',
    detail: 'Roy 传感器技术可部署至香港、深圳和澳门——在整个大湾区走廊扩大筛查范围和数据生成。',
    value: '大湾区全域部署',
    icon: '🔬',
    colorClass: 'blue',
  },
  {
    id: 'ha-data',
    title: '医管局数据合作实验室（HKSTP）',
    detail: '医管局与香港科技园公司（HKSTP）联合运营数据合作实验室（约 20 万匿名患者记录）。资格面向科技园孵化/租户及 InnoHK 中心公司——港深创科园租户不自动具备；或需另走科技园路径。',
    value: '须单独核实资格',
    icon: '🏥',
    colorClass: 'green',
  },
  {
    id: 'innohk',
    title: 'InnoHK 研发生态',
    detail: 'InnoHK（Health@InnoHK、AIR@InnoHK 等）为创新科技署倡议，研发中心位于香港科学园——不在河套港深创科园园区。可作为合作资源，非港深创科园园内标配权益。',
    value: '合作方/协作渠道',
    icon: '🔬',
    colorClass: 'blue',
  },
  {
    id: 'gba-fast',
    title: '大湾区快速通道',
    detail: '补贴入驻深圳、广州、佛山创新园区',
    value: '扩展路径',
    icon: '🚀',
    colorClass: 'orange',
  },
  {
    id: 'budget-100b',
    title: 'HK$1,000 亿创新预算',
    detail: '2026 年预算拨出 HK$1,000 亿用于创新；港深创科园初创企业优先',
    value: '资金渠道',
    icon: '💰',
    colorClass: 'orange',
  },
];
