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
