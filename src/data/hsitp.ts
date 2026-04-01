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
    title: 'IGNITE@HSITP Grant',
    detail: 'Up to HK$6 million non-dilutive R&D grant for deep-tech startups',
    value: 'HK$6M cash',
    icon: '🔥',
    colorClass: 'gold',
  },
  {
    id: 'gas',
    title: 'GAS (General Support)',
    detail: 'HK$400K operating grant',
    value: 'HK$400K cash',
    icon: '⛽',
    colorClass: 'gold',
  },
  {
    id: 'spin',
    title: 'SPIN Programme',
    detail: "Access to HKSTP's corporate partner network (700+ MNCs)",
    value: 'BD pipeline access',
    icon: '🤝',
    colorClass: 'blue',
  },
  {
    id: 'ha-data',
    title: 'HA Data Collaboration Lab',
    detail:
      "HKSTP is the ONLY entity with a formal agreement giving startups access to Hospital Authority's anonymised clinical data (200,000+ patient records)",
    value: 'Core data asset',
    icon: '🏥',
    colorClass: 'green',
  },
  {
    id: 'innohk',
    title: 'InnoHK Research Cluster Access',
    detail: 'Connect to 28 R&D centres in HKSTP campus',
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
    title: 'IGNITE@HSITP 拨款',
    detail: '深科技初创企业最高 HK$600 万非稀释性研发拨款',
    value: 'HK$600 万现金',
    icon: '🔥',
    colorClass: 'gold',
  },
  {
    id: 'gas',
    title: 'GAS（一般支持）',
    detail: 'HK$40 万运营拨款',
    value: 'HK$40 万现金',
    icon: '⛽',
    colorClass: 'gold',
  },
  {
    id: 'spin',
    title: 'SPIN 计划',
    detail: '接入 HKSTP 企业合作伙伴网络（700+ 跨国公司）',
    value: '商务拓展渠道',
    icon: '🤝',
    colorClass: 'blue',
  },
  {
    id: 'ha-data',
    title: '医管局数据合作实验室',
    detail: 'HKSTP 是唯一与医管局签订正式协议的机构，可让初创企业访问匿名化临床数据（200,000+ 患者记录）',
    value: '核心数据资产',
    icon: '🏥',
    colorClass: 'green',
  },
  {
    id: 'innohk',
    title: 'InnoHK 研究集群',
    detail: '连接 HKSTP 园区 28 个研发中心',
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
