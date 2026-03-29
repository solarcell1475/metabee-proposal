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
    location: 'MetaBee HK Server (HKSTP)',
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
