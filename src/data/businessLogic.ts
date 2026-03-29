export interface BusinessLayer {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  color: string;
  steps: string[];
}

export const businessLayers: BusinessLayer[] = [
  {
    id: 'academic',
    number: 1,
    title: 'Academic Anchor',
    subtitle: 'Public Good / Credibility',
    color: 'var(--color-primary)',
    steps: [
      'Roy Sensor (HKMU)',
      'Academic Paper + IRB Ethics Approval',
      'Prostate Cancer Screening Trial (Macau, ~500 patients)',
      'Published Clinical Validation',
    ],
  },
  {
    id: 'data-asset',
    number: 2,
    title: 'Data Asset Creation',
    subtitle: 'Operational Core',
    color: 'var(--color-gold)',
    steps: [
      'Macau Pilot Data → 蔡錦輝 AI Curation → FHIR-Structured Dataset',
      'Ge Lei (Shenzhen) historical cohort → 3,000+ patient dataset',
      'Macau FDCT Funding + HK HSITP Grant → Operational runway',
    ],
  },
  {
    id: 'commercial',
    number: 3,
    title: 'Commercial Monetisation',
    subtitle: 'Revenue Engine',
    color: 'var(--color-accent)',
    steps: [
      'HSITP White-List Export → MetaBee Data Marketplace',
      'Pharma RWE Studies (AstraZeneca, Roche Asia, GSK)',
      'CRO Platforms (IQVIA, Parexel Asia)',
      'AI Drug Discovery (Insilico Medicine, BioMap)',
      'Academic Licensing (NUS, NCIS Singapore, MSKCC)',
    ],
  },
];
