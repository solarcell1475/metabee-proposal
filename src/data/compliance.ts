export interface ComplianceJurisdiction {
  jurisdiction: string;
  law: string;
  abbreviation: string;
  obligation: string;
}

export const jurisdictions: ComplianceJurisdiction[] = [
  {
    jurisdiction: 'Mainland China',
    law: 'Personal Information Protection Law',
    abbreviation: 'PIPL',
    obligation:
      'De-identify at source; SCC for cross-border transfer; register with CAC if >1M persons',
  },
  {
    jurisdiction: 'Hong Kong',
    law: 'Personal Data Privacy Ordinance',
    abbreviation: 'PDPO',
    obligation:
      'Register data processor; DPP6 compliance; overseas transfer requires comparable protection',
  },
  {
    jurisdiction: 'Macau',
    law: 'Lei de Proteção de Dados Pessoais',
    abbreviation: 'LPDP',
    obligation:
      'IRB approval; health data = sensitive; explicit consent or public interest justification',
  },
  {
    jurisdiction: 'International (EU)',
    law: 'General Data Protection Regulation',
    abbreviation: 'GDPR',
    obligation:
      'Data Processing Agreement; adequacy assessment; pseudonymisation',
  },
  {
    jurisdiction: 'United States',
    law: 'FDA RWE Guidance (2023)',
    abbreviation: 'FDA RWE',
    obligation: 'FHIR R4 format; data quality documentation; audit trail',
  },
];

export const transferStack = [
  {
    step: 1,
    location: 'Macau / Shenzhen Hospital',
    action: 'De-identify at source (PIPL Art. 73)',
  },
  {
    step: 2,
    location: 'Cross-border Transfer',
    action: 'PIPL-SCC Standard Contract — filed with CAC',
  },
  {
    step: 3,
    location: 'MetaBee HK Server (HSITP)',
    action: 'HSITP White-list Filing — 10 working days',
  },
  {
    step: 4,
    location: 'MetaBee Secure Data Room',
    action: 'NDA + KYC + Data Use Agreement',
  },
  {
    step: 5,
    location: 'Overseas Buyer',
    action: 'Licensed Export (GDPR DPA if EU buyer)',
  },
];

export const deidentStandard = [
  'Minimum: remove name, HKID, phone, address, DOB → pseudonymous ID',
  'Enhanced (for export): k-anonymity k≥5; suppress rare combinations; generalise age to 5-year bands',
  '蔡錦輝 team certifies each batch against ISO 29101 Privacy Architecture standard',
];

export const jurisdictions_zh: ComplianceJurisdiction[] = [
  {
    jurisdiction: '中国大陆',
    law: '个人信息保护法',
    abbreviation: 'PIPL',
    obligation: '源头去标识化；跨境传输使用 SCC；处理超过 100 万人数据需向 CAC 注册',
  },
  {
    jurisdiction: '香港',
    law: '个人资料（私隐）条例',
    abbreviation: 'PDPO',
    obligation: '注册数据处理者；DPP6 合规；境外传输需具备同等保护',
  },
  {
    jurisdiction: '澳门',
    law: '个人资料保护法',
    abbreviation: 'LPDP',
    obligation: 'IRB 审批；健康数据 = 敏感数据；需明确同意或公共利益依据',
  },
  {
    jurisdiction: '国际（欧盟）',
    law: '通用数据保护条例',
    abbreviation: 'GDPR',
    obligation: '数据处理协议；充分性评估；假名化处理',
  },
  {
    jurisdiction: '美国',
    law: 'FDA 真实世界证据指南 (2023)',
    abbreviation: 'FDA RWE',
    obligation: 'FHIR R4 格式；数据质量文档；审计追踪',
  },
];

export const transferStack_zh = [
  {
    step: 1,
    location: '澳门/深圳医院',
    action: '源头去标识化（PIPL 第 73 条）',
  },
  {
    step: 2,
    location: '跨境传输',
    action: 'PIPL-SCC 标准合同——向 CAC 备案',
  },
  {
    step: 3,
    location: 'MetaBee 香港服务器（HSITP）',
    action: '港深创科园白名单备案——10 个工作日',
  },
  {
    step: 4,
    location: 'MetaBee 安全数据室',
    action: 'NDA + KYC + 数据使用协议',
  },
  {
    step: 5,
    location: '海外买家',
    action: '授权出口（欧盟买家需 GDPR DPA）',
  },
];

export const deidentStandard_zh = [
  '最低标准：移除姓名、身份证号、电话、地址、出生日期 → 假名化 ID',
  '增强标准（用于出口）：k-匿名性 k≥5；抑制罕见组合；年龄泛化至 5 年区间',
  '蔡錦輝团队根据 ISO 29101 隐私架构标准对每批数据进行认证',
];
