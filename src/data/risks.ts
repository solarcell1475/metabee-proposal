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
      'Engage HKSTP policy team early; get written confirmation of scope',
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
    description: 'MetaBee cash runs out before IGNITE approval',
    probability: 'High',
    impact: 'High',
    mitigation:
      'HIGHEST PRIORITY — close Angel round HK$2M before Q3 2026; maintain 12 months runway',
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
