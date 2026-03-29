export interface PolicyWindow {
  id: string;
  title: string;
  period: string;
  description: string;
  impact: string;
  icon: string;
}

export const policyWindows: PolicyWindow[] = [
  {
    id: 'hsitp-whitelist',
    title: 'HSITP Data-Across-Border White List',
    period: '2025–2026',
    description:
      'Secretary for Innovation & Technology Prof. Sun Dong confirmed HSITP-resident companies will receive "green channel white-list" status for cross-border data flows, operating under a notification/filing model rather than a full security assessment.',
    impact:
      'MetaBee can transfer historical, de-identified patient datasets from Guangdong/Macau to HK, and re-export to overseas buyers, with dramatically lower regulatory friction than any non-HSITP company.',
    icon: '🛡️',
  },
  {
    id: 'gba-scc',
    title: 'GBA Standard Contractual Clauses (SCC)',
    period: 'Sept 2024',
    description:
      'Since September 2024, enterprises in the GBA can execute personal information cross-border transfers using the standardised SCC framework, without a government security assessment, for datasets under 1 million individuals.',
    impact:
      'Removes the single biggest legal blocker that previously made HK-Mainland health data deals impractical.',
    icon: '📜',
  },
  {
    id: 'rwsac',
    title: 'HK RWSAC Real-World Data Centre',
    period: 'Dec 2025',
    description:
      'The Hong Kong government established the Real-World Studies Advisory Committee (RWSAC) in December 2025, with GSK as the first pharmaceutical company to sign an MOU.',
    impact:
      'Global pharma is actively looking for RWD partners in Hong Kong RIGHT NOW — the market is being created in real time.',
    icon: '🏛️',
  },
];
