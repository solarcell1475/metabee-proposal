export interface BuyerSegment {
  segment: string;
  examples: string;
  useCase: string;
  pricePoint: string;
  priority: 'high' | 'medium' | 'low';
}

export const marketStats = {
  marketSize: 'USD 5.4B',
  cagr: '14.8%',
  cagrPeriod: 'through 2030',
  asianDataGap: '95% of prostate cancer RWD originates from Caucasian populations',
  cohortValue: 'USD 800K–2M per licensing deal',
} as const;

export const buyerSegments: BuyerSegment[] = [
  {
    segment: 'Global Pharma RWE',
    examples: 'AstraZeneca, Roche, GSK, Pfizer',
    useCase: 'Drug efficacy in Asian populations',
    pricePoint: 'USD 200K–2M/dataset',
    priority: 'high',
  },
  {
    segment: 'CRO Platforms',
    examples: 'IQVIA, Parexel, Syneos',
    useCase: 'Site selection, patient matching',
    pricePoint: 'USD 50K–200K/engagement',
    priority: 'high',
  },
  {
    segment: 'AI Drug Discovery',
    examples: 'Insilico Medicine, BioMap, XtalPi',
    useCase: 'Training datasets for AI models',
    pricePoint: 'USD 100K–500K/license',
    priority: 'medium',
  },
  {
    segment: 'Medical Device',
    examples: 'Olympus, Siemens Healthineers',
    useCase: 'Diagnostic validation',
    pricePoint: 'USD 50K–300K',
    priority: 'medium',
  },
  {
    segment: 'Academic / Research',
    examples: 'NUS, MSKCC, Oxford',
    useCase: 'Grant-funded studies',
    pricePoint: 'USD 20K–80K',
    priority: 'low',
  },
];

export const competitiveEdge = [
  'No direct competitor holds HSITP white-list status + Asian RWD + clinical validation',
  'Flatiron Health (US): US-only, no Asian population data',
  'Medidata (Dassault): clinical trial data only, not screening/community data',
  'MetaBee unique position: HSITP-privileged + GBA-SCC-compliant + academic-validated + community-screened',
];
