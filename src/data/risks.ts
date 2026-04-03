export interface Risk {
  id: string;
  name: string;
  description: string;
  probability: 'Low' | 'Medium' | 'High';
  impact: 'Medium' | 'High' | 'Critical';
  mitigation: string;
}

export const risks: Risk[] = [
  {
    id: 'R1',
    name: 'HSITP white-list policy reversal',
    description: 'White-list policy reversal or scope limitation',
    probability: 'Low',
    impact: 'Critical',
    mitigation:
      'Engage HSITP policy team early; get written confirmation of scope',
  },
  {
    id: 'R2',
    name: 'Macau Health Bureau rejects pilot',
    description: 'Screening pilot rejected by Macau Health Bureau',
    probability: 'Medium',
    impact: 'High',
    mitigation:
      'Use Macau Foundation endorsement + FDCT co-funding as leverage; prepare alternative site (CHCSJ)',
  },
  {
    id: 'R3',
    name: 'Sensor not cleared for clinical use',
    description: 'Roy sensor not cleared for use in Macau/China',
    probability: 'Medium',
    impact: 'High',
    mitigation:
      'Obtain CE Mark (in process via Pinpoint Medical); seek NMPA registration in parallel',
  },
  {
    id: 'R4',
    name: 'Hospital ethics rejection',
    description: '葛磊 hospital ethics committee rejection',
    probability: 'Medium',
    impact: 'High',
    mitigation:
      'Prepare two alternative Shenzhen hospitals; engage provincial ethics via SIAT connection',
  },
  {
    id: 'R5',
    name: 'PIPL security assessment triggered',
    description: 'CAC security assessment triggered (>1M records)',
    probability: 'Low',
    impact: 'Medium',
    mitigation:
      'Cap initial dataset at 500K records; use GBA-SCC for sub-threshold transfers',
  },
  {
    id: 'R6',
    name: 'GDPR adequacy demand',
    description: 'Pharma buyers demand GDPR adequacy (HK not adequate)',
    probability: 'Medium',
    impact: 'Medium',
    mitigation:
      'Use GDPR-compliant DPA template; consider Singapore subsidiary for EU-facing sales',
  },
  {
    id: 'R7',
    name: 'Academic paper fails review',
    description: 'Sensor validation questioned after peer review failure',
    probability: 'Low',
    impact: 'High',
    mitigation:
      'Engage clinical statistician early; pre-register trial on ClinicalTrials.gov',
  },
  {
    id: 'R8',
    name: 'Cash runway exhaustion',
    description: 'MetaBee cash runs low before next milestone disbursement',
    probability: 'Low',
    impact: 'Medium',
    mitigation:
      'IGNITE@HSITP already awarded (HK$6M). Disbursed in milestones every 6 months. Angel round HK$2M provides additional bridge. Maintain 12 months runway.',
  },
  {
    id: 'R9',
    name: '蔡錦輝 withdraws',
    description: 'Key data scientist withdraws due to competing priorities',
    probability: 'Low',
    impact: 'High',
    mitigation:
      'Execute equity-bearing MOU early; identify backup data scientist (HKUST Prof.)',
  },
  {
    id: 'R10',
    name: 'Pharma RWE budget cuts',
    description: 'Global pharma RWE budget cuts due to market downturn',
    probability: 'Low',
    impact: 'Medium',
    mitigation:
      'Diversify to CRO and AI drug discovery buyers; lower-priced entry datasets',
  },
];

export const risks_zh: Risk[] = [
  {
    id: 'R1',
    name: '港深创科园白名单政策逆转',
    description: '白名单政策逆转或适用范围缩小',
    probability: 'Low',
    impact: 'Critical',
    mitigation: '提前与 HSITP 政策团队沟通；获取适用范围书面确认',
  },
  {
    id: 'R2',
    name: '澳门卫生局拒绝试点',
    description: '筛查试点被澳门卫生局拒绝',
    probability: 'Medium',
    impact: 'High',
    mitigation: '以澳门基金会背书 + FDCT 联合资助作为杠杆；准备备选场地 (CHCSJ)',
  },
  {
    id: 'R3',
    name: '传感器未获临床使用许可',
    description: 'Roy 传感器未获澳门/中国临床使用许可',
    probability: 'Medium',
    impact: 'High',
    mitigation: '获取 CE 标志（Pinpoint Medical 正在办理）；同步申请 NMPA 注册',
  },
  {
    id: 'R4',
    name: '医院伦理委员会拒绝',
    description: '葛磊所在医院伦理委员会拒绝',
    probability: 'Medium',
    impact: 'High',
    mitigation: '准备两家备选深圳医院；通过 SIAT 关系走省级伦理审批',
  },
  {
    id: 'R5',
    name: 'PIPL 安全评估触发',
    description: 'CAC 安全评估触发（>100 万条记录）',
    probability: 'Low',
    impact: 'Medium',
    mitigation: '初始数据集上限为 50 万条记录；阈值以下使用 GBA-SCC',
  },
  {
    id: 'R6',
    name: 'GDPR 充分性要求',
    description: '制药买家要求 GDPR 充分性认定（香港不具备）',
    probability: 'Medium',
    impact: 'Medium',
    mitigation: '使用符合 GDPR 的 DPA 模板；考虑设立新加坡子公司面向欧盟销售',
  },
  {
    id: 'R7',
    name: '学术论文未通过审稿',
    description: '同行评审失败后传感器验证受质疑',
    probability: 'Low',
    impact: 'High',
    mitigation: '提前引入临床统计学家；在 ClinicalTrials.gov 预注册试验',
  },
  {
    id: 'R8',
    name: '现金流耗尽',
    description: 'MetaBee 在下一次里程碑拨款前现金不足',
    probability: 'Low',
    impact: 'Medium',
    mitigation: 'IGNITE@HSITP 已获批（HK$6M），每 6 个月按里程碑拨付。天使轮 HK$2M 提供额外桥接。维持 12 个月运营资金。',
  },
  {
    id: 'R9',
    name: '蔡錦輝退出',
    description: '核心数据科学家因竞争性事务优先退出',
    probability: 'Low',
    impact: 'High',
    mitigation: '提前签署含股权的 MOU；确定备选数据科学家（HKUST 教授）',
  },
  {
    id: 'R10',
    name: '制药 RWE 预算削减',
    description: '全球制药 RWE 预算因市场下行而削减',
    probability: 'Low',
    impact: 'Medium',
    mitigation: '分散至 CRO 和 AI 药物发现买家；提供低价入门数据集',
  },
];

/** SC-public-v2：不出现具体人名 */
export const risks_zh_public: Risk[] = [
  {
    id: 'R1',
    name: '港深创科园白名单政策逆转',
    description: '白名单政策逆转或适用范围缩小',
    probability: 'Low',
    impact: 'Critical',
    mitigation: '提前与 HSITP 政策团队沟通；获取适用范围书面确认',
  },
  {
    id: 'R2',
    name: '澳门卫生局拒绝试点',
    description: '筛查试点被澳门卫生局拒绝',
    probability: 'Medium',
    impact: 'High',
    mitigation: '以澳门基金会背书 + FDCT 联合资助作为杠杆；准备备选场地 (CHCSJ)',
  },
  {
    id: 'R3',
    name: '传感器未获临床使用许可',
    description: '合作传感器未获澳门/中国临床使用许可',
    probability: 'Medium',
    impact: 'High',
    mitigation: '完成 CE / 境外合规路径；同步规划 NMPA 注册',
  },
  {
    id: 'R4',
    name: '医院伦理委员会拒绝',
    description: '深圳合作医院伦理委员会拒绝',
    probability: 'Medium',
    impact: 'High',
    mitigation: '准备两家备选深圳医院；通过大湾区科研机构走省级伦理审批',
  },
  {
    id: 'R5',
    name: 'PIPL 安全评估触发',
    description: 'CAC 安全评估触发（>100 万条记录）',
    probability: 'Low',
    impact: 'Medium',
    mitigation: '初始数据集上限为 50 万条记录；阈值以下使用 GBA-SCC',
  },
  {
    id: 'R6',
    name: 'GDPR 充分性要求',
    description: '制药买家要求 GDPR 充分性认定（香港不具备）',
    probability: 'Medium',
    impact: 'Medium',
    mitigation: '使用符合 GDPR 的 DPA 模板；考虑设立新加坡子公司面向欧盟销售',
  },
  {
    id: 'R7',
    name: '学术论文未通过审稿',
    description: '同行评审失败后传感器验证受质疑',
    probability: 'Low',
    impact: 'High',
    mitigation: '提前引入临床统计学家；在 ClinicalTrials.gov 预注册试验',
  },
  {
    id: 'R8',
    name: '现金流耗尽',
    description: 'MetaBee 在下一次里程碑拨款前现金不足',
    probability: 'Low',
    impact: 'Medium',
    mitigation: 'IGNITE@HSITP 已获批（HK$6M），每 6 个月按里程碑拨付。天使轮 HK$2M 提供额外桥接。维持 12 个月运营资金。',
  },
  {
    id: 'R9',
    name: '核心数据科学家退出',
    description: '核心数据科学家因竞争性事务优先退出',
    probability: 'Low',
    impact: 'High',
    mitigation: '提前签署含股权的 MOU；确定备选数据科学团队',
  },
  {
    id: 'R10',
    name: '制药 RWE 预算削减',
    description: '全球制药 RWE 预算因市场下行而削减',
    probability: 'Low',
    impact: 'Medium',
    mitigation: '分散至 CRO 和 AI 药物发现买家；提供低价入门数据集',
  },
];
