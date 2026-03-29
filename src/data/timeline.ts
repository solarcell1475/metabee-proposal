export interface Milestone {
  period: string;
  title: string;
  status: 'current' | 'upcoming' | 'future';
  chips: string[];
  details: string[];
  budget?: string;
}

export const milestones: Milestone[] = [
  {
    period: '2026 Q2–Q3',
    title: 'Foundation — Structure & Funding',
    status: 'current',
    chips: ['HSITP Tenancy', 'IGNITE Application', 'MOU Signing'],
    details: [
      'HSITP tenancy confirmed; 港深創科園公司 as operating entity',
      'IGNITE grant application submitted',
      'Roy + 蔡錦輝 MOUs executed; IP clearance from HKMU',
    ],
    budget: 'Angel round HK$2M + GAS HK$400K',
  },
  {
    period: '2026 Q4',
    title: 'Macau Entry — IRB & Grant Application',
    status: 'upcoming',
    chips: ['FDCT Grant Filed', 'Ethics Consultation', 'FHIR Schema v1.0'],
    details: [
      'FDCT grant application filed (蔡錦輝 as Co-PI)',
      '葛磊 hospital leadership meeting; ethics pre-consultation',
      'FHIR data schema v1.0 completed',
    ],
  },
  {
    period: '2027 Q1–Q2',
    title: 'Pilot Launch — Macau 500-Patient Screening',
    status: 'upcoming',
    chips: ['Macau Health Bureau Approval', 'Platform v1 Live', 'First Patient Enrolled'],
    details: [
      'Macau Health Bureau pilot approval received',
      'Macau screening pilot LAUNCHED (target 500 patients)',
      'MetaBee Data Platform v1 LIVE',
      'Shenzhen ethics approval received',
    ],
  },
  {
    period: '2027 Q3–Q4',
    title: 'Scale — Shenzhen Data & Certification',
    status: 'future',
    chips: ['300 Patients Screened', 'PIPL-SCC Executed', 'Dataset Certified'],
    details: [
      '500 Macau patients complete; data certified by 蔡錦輝',
      'First PIPL-SCC contract executed (Shenzhen → HK)',
      'Interim clinical paper submitted to journal',
    ],
  },
  {
    period: '2028 Q1–Q2',
    title: 'First Revenue — Dataset Sales',
    status: 'future',
    chips: ['First Dataset Sold', 'Paper Published', '3,000 Patients Delivered'],
    details: [
      'FIRST DATASET SOLD to pharma buyer — revenue recognised',
      'Clinical validation paper published',
      'Shenzhen cohort 3,000 patients dataset delivered',
    ],
    budget: 'HK$6M spend; HK$3–8M revenue target',
  },
  {
    period: '2028 Q3–Q4',
    title: 'Series A & Exchange Membership',
    status: 'future',
    chips: ['Series A HK$20M', 'Shenzhen Data Exchange', '3 DUAs Active'],
    details: [
      'SERIES A FUNDRAISE launched (target HK$20M)',
      'Shenzhen Data Exchange membership activated',
      '3 pharma licensing agreements active',
    ],
  },
  {
    period: '2029–2030',
    title: 'GBA RWE Platform at Scale',
    status: 'future',
    chips: ['5,000+ Patients', 'Multi-Cancer', 'Series B HK$80M'],
    details: [
      'HA Data Lab integration; HK prostate cancer cohort added',
      'Expand to colorectal cancer data (蔡\'s existing track record)',
      'Series B HK$80M target; expand to cardiovascular, diabetes, oncology',
    ],
  },
];
