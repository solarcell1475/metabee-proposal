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
    detail: 'Up to HK$10M per project (90% funding) for clinical AI R&D via joint ITF/HMRF portal. Requires Hospital Authority deployment pathway.',
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
    title: 'HA Data Collaboration Lab',
    detail:
      "HSITP has a formal agreement giving park companies access to Hospital Authority's anonymised clinical data (200,000+ patient records)",
    value: 'Core data asset',
    icon: '🏥',
    colorClass: 'green',
  },
  {
    id: 'innohk',
    title: 'InnoHK Research Cluster Access',
    detail: 'Connect to 28 R&D centres in HSITP campus',
    value: 'Research credibility',
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
    detail: '每个项目最高 HK$1,000 万（90% 资助），通过 ITF/HMRF 联合平台申请。需有医管局部署路径。',
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
    title: '医管局数据合作实验室',
    detail: 'HSITP 与医管局签有正式协议，让园区企业访问匿名化临床数据（200,000+ 患者记录）',
    value: '核心数据资产',
    icon: '🏥',
    colorClass: 'green',
  },
  {
    id: 'innohk',
    title: 'InnoHK 研究集群',
    detail: '连接 HSITP 园区 28 个研发中心',
    value: '科研公信力',
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
