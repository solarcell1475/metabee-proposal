export interface Stakeholder {
  id: string;
  name: string;
  title: string;
  emoji: string;
  colorClass: 'teal' | 'blue' | 'gold' | 'orange' | 'purple' | 'green';
  role: string;
  category: 'academic' | 'clinical' | 'commercial' | 'government' | 'community';
  background: string[];
  responsibilities: string[];
  budgetIn: string[];
  budgetOut: string[];
}

export const stakeholders: Stakeholder[] = [
  {
    id: 'roy',
    name: 'Prof. A.L. Roy Vellaisamy',
    title: 'HKMU — Chair Professor of Smart Systems',
    emoji: '🔬',
    colorClass: 'teal',
    role: 'Technology Provider & Academic Anchor',
    category: 'academic',
    background: [
      'Invented non-invasive urine-based prostate cancer early-detection sensor',
      'Technology licensed to Pinpoint Medical Ltd (UK) in 2025',
      'Sensor delivers results in 15 minutes, R²=0.97 clinical validation',
    ],
    responsibilities: [
      'Provide IRB-approvable clinical protocol for Macau pilot',
      'Co-author academic paper on Asian cohort screening',
      'Deliver 500 sensor units for Macau trial',
      'Technical due-diligence support for pharma buyer negotiations',
    ],
    budgetIn: ['Consulting fee HK$20,000/month', 'FDCT Co-PI salary ~MOP 30,000/month'],
    budgetOut: ['Sensor manufacturing ~HK$250,000 (500 units)'],
  },
  {
    id: 'ge',
    name: '葛磊教授',
    title: 'Shenzhen University General Hospital',
    emoji: '🏥',
    colorClass: 'blue',
    role: 'Mainland Clinical Gatekeeper & Patient Cohort Builder',
    category: 'clinical',
    background: [
      'Professor at 深圳大學附屬醫院',
      'Highest-trust relationship in the network (師兄)',
      'Key to unlocking Guangdong provincial hospital data access',
    ],
    responsibilities: [
      'Introduce project to Shenzhen University Hospital ethics committee',
      'Recruit 1,000–3,000 patient historical cohort',
      'Facilitate data anonymisation under PIPL compliance at source',
      'Bridge to Baptist Hospital (HK) for cross-border validation',
    ],
    budgetIn: ['MetaBee grant RMB 300,000/year', 'Shenzhen Science Bureau grant'],
    budgetOut: ['Data extraction & anonymisation RMB 150,000', 'Research assistant RMB 80,000/year'],
  },
  {
    id: 'tsoi',
    name: '蔡錦輝教授',
    title: 'CUHK — Big Data & AI Expert',
    emoji: '📊',
    colorClass: 'gold',
    role: 'Data Science Engine & Macau Bridge',
    category: 'academic',
    background: [
      'Expert in big data analytics, AI for colorectal cancer screening',
      'Relationships with Macau Foundation (澳門近身室基金)',
      'Visiting Professor at SIAT — dual Guangdong legitimacy',
    ],
    responsibilities: [
      'Design FHIR-compliant data schema for datasets',
      'Build AI curation pipeline: raw → structured → market-ready',
      'Apply for CUHK-FDCT joint research grant',
      'Lead data quality certification before commercial sale',
    ],
    budgetIn: ['CUHK collaboration HK$30,000/month', 'FDCT Co-PI salary MOP 40,000/month'],
    budgetOut: ['Research assistants HK$50,000/month', 'Cloud compute HK$15,000/month'],
  },
  {
    id: 'metabee',
    name: 'MetaBee Technology (HK) Ltd',
    title: 'HSITP Startup — Commercial Entity',
    emoji: '🐝',
    colorClass: 'teal',
    role: 'Project Integrator, IP Holder & Data Broker',
    category: 'commercial',
    background: [
      'HSITP-resident startup with HKSTP tenancy',
      'Holds commercial rights to aggregate, package, and sell GBA health datasets',
      'Unique HSITP white-list status for data-across-border',
    ],
    responsibilities: [
      'Maintain HSITP tenancy and all grant applications',
      'Build MetaBee Data Marketplace platform',
      'Manage PIPL-SCC contracts for cross-border transactions',
      'Lead pharma buyer outreach and data licensing negotiations',
    ],
    budgetIn: ['IGNITE grant HK$6M', 'GAS grant HK$400K', 'Data sales revenue HK$3–8M'],
    budgetOut: ['Platform development HK$500K', 'Legal & compliance HK$200K', 'Operations ~HK$1.5M/yr'],
  },
  {
    id: 'gov',
    name: 'Government & Funding Bodies',
    title: 'HK ITIB · HSITP · FDCT · Shenzhen Sci-Tech',
    emoji: '🏛️',
    colorClass: 'orange',
    role: 'Policy Authorisers & Funding Providers',
    category: 'government',
    background: [
      'HKSTP / HSITP — tenancy + IGNITE + HA data access',
      'FDCT — primary Macau research funder (MOP 2–5M)',
      'Shenzhen Sci-Tech Commission — co-fund research (RMB 300–500K)',
    ],
    responsibilities: [
      'Provide grant funding and policy support',
      'Enable regulatory pathway for cross-border data',
      'Hospital Authority Data Lab access for HSITP startups',
    ],
    budgetIn: ['Government public finance'],
    budgetOut: ['IGNITE HK$6M', 'FDCT MOP 2–5M', 'Shenzhen grant RMB 300–500K'],
  },
  {
    id: 'macau',
    name: 'Macau Ecosystem',
    title: '近身室基金 · 衛生局 · 鏡湖醫院',
    emoji: '🎰',
    colorClass: 'purple',
    role: 'Lowest-Resistance Pilot Site & Data Origin',
    category: 'community',
    background: [
      'Macau population ~700,000: lower screening competition, faster IRB',
      '近身室基金 has health promotion track record',
      'Genuine public health need for prostate cancer screening',
    ],
    responsibilities: [
      'Co-sponsor community prostate cancer awareness campaign',
      'Facilitate screening trial recruitment (500 men aged 50–75)',
      'Provide endorsement for FDCT grant application',
      'Introduce project to Kiang Wu Hospital administration',
    ],
    budgetIn: ['FDCT Macau funding'],
    budgetOut: ['Screening admin cost MOP 500K'],
  },
];

export type StakeholderCategory = Stakeholder['category'];

export const categoryLabels: Record<StakeholderCategory, string> = {
  academic: 'Academic',
  clinical: 'Clinical',
  commercial: 'Commercial',
  government: 'Government',
  community: 'Community',
};
