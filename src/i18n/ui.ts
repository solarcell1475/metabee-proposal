import type { Lang } from './LanguageContext';

const translations = {
  // Navbar
  'nav.home': { en: 'Home', zh: '首页' },
  'nav.whyNow': { en: 'Why Now', zh: '为何现在' },
  'nav.businessLogic': { en: 'Business Logic', zh: '商业逻辑' },
  'nav.hsitp': { en: 'HSITP', zh: '港深创科园' },
  'nav.stakeholders': { en: 'Stakeholders', zh: '利益相关方' },
  'nav.timeline': { en: 'Timeline', zh: '时间线' },
  'nav.market': { en: 'Market', zh: '市场' },
  'nav.compliance': { en: 'Compliance', zh: '合规' },
  'nav.risks': { en: 'Risks', zh: '风险' },
  'nav.budget': { en: 'Budget', zh: '预算' },
  'nav.execution': { en: 'Execution', zh: '执行计划' },

  // Hero
  'hero.title.1': { en: 'GBA ', zh: '大湾区' },
  'hero.title.2': { en: 'Health Data', zh: '健康数据' },
  'hero.title.3': { en: ' Commercialisation', zh: '商业化' },
  'hero.stat.patients': { en: 'Patient Records', zh: '患者记录' },
  'hero.stat.grant': { en: 'IGNITE Grant', zh: 'IGNITE 拨款' },
  'hero.stat.sensor': { en: 'Sensor Result', zh: '传感器结果' },
  'hero.stat.validation': { en: 'Clinical Validation', zh: '临床验证' },

  // Policy Section
  'policy.label': { en: 'Why Now', zh: '为何现在' },
  'policy.title.1': { en: 'Three ', zh: '三大' },
  'policy.title.2': { en: 'Policy Windows', zh: '政策窗口' },
  'policy.lead': {
    en: 'A rare convergence of regulatory changes makes this the optimal moment to build a cross-border health data business in the Greater Bay Area.',
    zh: '罕见的监管变革汇聚，使现在成为在大湾区建立跨境健康数据业务的最佳时机。',
  },
  'policy.impact': { en: 'Impact', zh: '影响' },

  // Business Logic
  'biz.label': { en: 'Business Model', zh: '商业模式' },
  'biz.title.1': { en: 'Three-Layer ', zh: '三层' },
  'biz.title.2': { en: 'Business Logic', zh: '商业逻辑' },
  'biz.lead': {
    en: 'From academic credibility to data asset creation to commercial monetisation — a vertically integrated value chain.',
    zh: '从学术可信度到数据资产创建再到商业变现——一条纵向整合的价值链。',
  },
  'biz.layer': { en: 'Layer', zh: '层级' },

  // HSITP
  'hsitp.label': { en: 'Unfair Advantage', zh: '独特优势' },
  'hsitp.title.1': { en: 'HSITP ', zh: '港深创科园' },
  'hsitp.title.2': { en: 'Privileges', zh: '特权' },
  'hsitp.lead': {
    en: 'MetaBee.com (HK), as an HSITP-resident startup, holds privileges unavailable to ordinary companies.',
    zh: 'MetaBee.com (HK) 作为港深创科园驻园初创企业，拥有普通公司无法获得的特权。',
  },

  // Stakeholders
  'stake.label': { en: 'People', zh: '团队' },
  'stake.title.1': { en: 'Six ', zh: '六大' },
  'stake.title.2': { en: 'Stakeholder', zh: '利益相关方' },
  'stake.title.3': { en: ' Roles', zh: '角色' },
  'stake.lead': {
    en: 'Each stakeholder plays a distinct role in the value chain — from technology origin to commercial exit.',
    zh: '每个利益相关方在价值链中发挥独特作用——从技术源头到商业退出。',
  },
  'stake.all': { en: 'All', zh: '全部' },
  'stake.role': { en: 'Role', zh: '角色' },
  'stake.focus': { en: 'Focus', zh: '职责' },
  'stake.budget': { en: 'Budget', zh: '预算' },
  'stake.cat.academic': { en: 'Academic', zh: '学术' },
  'stake.cat.clinical': { en: 'Clinical', zh: '临床' },
  'stake.cat.commercial': { en: 'Commercial', zh: '商业' },
  'stake.cat.government': { en: 'Government', zh: '政府' },
  'stake.cat.community': { en: 'Community', zh: '社区' },

  // Timeline
  'time.label': { en: 'Roadmap', zh: '路线图' },
  'time.title.1': { en: 'Milestone Timeline ', zh: '里程碑时间线 ' },
  'time.title.2': { en: '2026–2030', zh: '2026–2030' },
  'time.lead': {
    en: 'From foundation to first revenue to GBA-scale platform — a phased approach with clear gates and KPIs.',
    zh: '从奠基到首次营收再到大湾区级平台——分阶段推进，设有明确的门控和 KPI。',
  },
  'time.hide': { en: '▾ Hide details', zh: '▾ 收起详情' },
  'time.show': { en: '▸ Show details', zh: '▸ 展开详情' },

  // Market
  'market.label': { en: 'Opportunity', zh: '机遇' },
  'market.title.1': { en: 'Market Analysis & ', zh: '市场分析与' },
  'market.title.2': { en: 'Commercial Targets', zh: '商业目标' },
  'market.lead': {
    en: 'The global RWE market is {size} (2025), growing at {cagr} CAGR {period}. Asian population datasets command the highest premium due to the genetic diversity gap.',
    zh: '全球真实世界证据市场规模为 {size}（2025年），以 {cagr} 的复合年增长率增长（{period}）。由于基因多样性缺口，亚洲人群数据集享有最高溢价。',
  },
  'market.globalRwe': { en: 'Global RWE Market (2025)', zh: '全球 RWE 市场（2025）' },
  'market.cagr': { en: 'CAGR through 2030', zh: '至 2030 年复合年增长率' },
  'market.perDeal': { en: 'Per licensing deal (3,000-patient Asian cohort)', zh: '每笔授权交易（3,000 名亚洲患者队列）' },
  'market.targetBuyers': { en: 'Target Buyer Segments', zh: '目标买方细分' },
  'market.th.segment': { en: 'Segment', zh: '细分市场' },
  'market.th.examples': { en: 'Examples', zh: '示例' },
  'market.th.useCase': { en: 'Use Case', zh: '应用场景' },
  'market.th.price': { en: 'Price Point', zh: '价格区间' },
  'market.th.priority': { en: 'Priority', zh: '优先级' },
  'market.competitive': { en: 'Competitive Positioning', zh: '竞争定位' },

  // Compliance
  'comp.label': { en: 'Regulatory', zh: '法规' },
  'comp.title.1': { en: 'Compliance ', zh: '合规' },
  'comp.title.2': { en: 'Architecture', zh: '架构' },
  'comp.lead': {
    en: 'Multi-jurisdictional regulatory compliance across Mainland China, Hong Kong, Macau, and international buyers.',
    zh: '覆盖中国大陆、香港、澳门及国际买方的多法域监管合规。',
  },
  'comp.laws': { en: 'Applicable Laws', zh: '适用法律' },
  'comp.th.jurisdiction': { en: 'Jurisdiction', zh: '法域' },
  'comp.th.law': { en: 'Law', zh: '法律' },
  'comp.th.obligation': { en: 'Key Obligation', zh: '核心义务' },
  'comp.transfer': { en: 'Cross-Border Transfer Stack', zh: '跨境传输流程' },
  'comp.deident': { en: 'De-identification Standard', zh: '去标识化标准' },

  // Risks
  'risk.label': { en: 'Risk Management', zh: '风险管理' },
  'risk.title.1': { en: 'Risk ', zh: '风险' },
  'risk.title.2': { en: 'Matrix', zh: '矩阵' },
  'risk.lead': {
    en: '10 identified risks with probability, impact, and mitigation strategies.',
    zh: '10 项已识别风险，包含概率、影响和缓解策略。',
  },
  'risk.allLevels': { en: 'All Levels', zh: '全部级别' },
  'risk.mitigation': { en: 'Mitigation', zh: '缓解措施' },

  // Budget
  'budget.label': { en: 'Financials', zh: '财务' },
  'budget.title.1': { en: '3-Year ', zh: '三年' },
  'budget.title.2': { en: 'Budget Overview', zh: '预算概览' },
  'budget.lead': {
    en: 'Total projected funding of {total} against {exp} expenditure, yielding a net position of {net}.',
    zh: '预计总融资 {total}，支出 {exp}，净头寸为 {net}。',
  },
  'budget.funding': { en: 'Funding Sources', zh: '资金来源' },
  'budget.th.source': { en: 'Source', zh: '来源' },
  'budget.th.amount': { en: 'Amount', zh: '金额' },
  'budget.th.timeline': { en: 'Timeline', zh: '时间' },
  'budget.th.probability': { en: 'Probability', zh: '概率' },
  'budget.totalFunding': { en: 'Total 3-Year Funding', zh: '三年总融资' },
  'budget.expenditure': { en: 'Expenditure Breakdown', zh: '支出明细' },
  'budget.th.category': { en: 'Category', zh: '类别' },
  'budget.th.year1': { en: 'Year 1', zh: '第一年' },
  'budget.th.year2': { en: 'Year 2', zh: '第二年' },
  'budget.th.year3': { en: 'Year 3', zh: '第三年' },
  'budget.th.total': { en: 'Total', zh: '合计' },
  'budget.netPosition': { en: '3-Year Net Position', zh: '三年净头寸' },

  // Execution Plan
  'exec.label': { en: 'Project Planner', zh: '项目规划' },
  'exec.title.1': { en: 'Government Rules ', zh: '政府规则' },
  'exec.title.2': { en: 'Execution Roadmap', zh: '执行路线图' },
  'exec.lead': {
    en: '18 regulatory actions across 5 jurisdictions, phased to unlock each gate before data crosses a border. The critical path runs through HSITP registration → white-list filing → PIPL-SCC execution → buyer compliance.',
    zh: '跨 5 个法域的 18 项监管行动，分阶段推进以在数据跨境前打通每个关卡。关键路径：港深创科园注册 → 白名单备案 → PIPL-SCC 执行 → 买方合规。',
  },
  'exec.principles': { en: 'Core Execution Principles', zh: '核心执行原则' },
  'exec.criticalPath': { en: 'Critical Path Dependencies', zh: '关键路径依赖' },
  'exec.phasedPlan': { en: 'Phased Execution Plan', zh: '分阶段执行计划' },
  'exec.allPhases': { en: 'All Phases', zh: '全部阶段' },
  'exec.phase': { en: 'Phase', zh: '阶段' },
  'exec.allTypes': { en: 'All Types', zh: '全部类型' },
  'exec.owner': { en: 'Owner', zh: '负责人' },
  'exec.deadline': { en: 'Deadline', zh: '截止时间' },
  'exec.dependencies': { en: 'Dependencies', zh: '前置依赖' },
  'exec.risk': { en: 'Risk', zh: '风险' },
  'exec.noMatch': { en: 'No actions match the selected filters.', zh: '没有匹配所选筛选条件的行动。' },
  'exec.status.done': { en: 'Done', zh: '已完成' },
  'exec.status.active': { en: 'Active', zh: '进行中' },
  'exec.status.blocked': { en: 'Blocked', zh: '受阻' },
  'exec.status.pending': { en: 'Pending', zh: '待启动' },
  'exec.cat.registration': { en: 'Registration', zh: '注册登记' },
  'exec.cat.ethics': { en: 'Ethics & IRB', zh: '伦理审查' },
  'exec.cat.contract': { en: 'Contracts & MOUs', zh: '合同与备忘录' },
  'exec.cat.grant': { en: 'Grants & Funding', zh: '拨款与资助' },
  'exec.cat.data': { en: 'Data Operations', zh: '数据运营' },
  'exec.cat.commercial': { en: 'Commercial', zh: '商业化' },

  // CTA
  'cta.title': {
    en: 'Ready to Build the Future of GBA Health Data?',
    zh: '准备好构建大湾区健康数据的未来了吗？',
  },
  'cta.sub': {
    en: 'MetaBee is positioned at the intersection of academic credibility, regulatory privilege, and commercial opportunity. The policy windows are open — now is the time to act.',
    zh: 'MetaBee 处于学术可信度、监管特权和商业机遇的交汇点。政策窗口已经打开——现在就是行动的时刻。',
  },
  'cta.contactHkstp': { en: 'Contact HSITP BD', zh: '联系港深创科园商务' },
  'cta.meetTeam': { en: 'Meet the Team', zh: '认识团队' },

  // Footer
  'footer.text': {
    en: 'MetaBee.com (HK) · Project Wasabi-GBA · Confidential · v1.0 · 2026-03-30',
    zh: 'MetaBee.com (HK) · 芥末-GBA 项目 · 机密 · v1.0 · 2026-03-30',
  },

  // Language switcher
  'lang.en': { en: 'EN', zh: 'EN' },
  'lang.zh': { en: '中文', zh: '中文' },
} as const;

type TranslationKey = keyof typeof translations;

export function t(key: TranslationKey, lang: Lang): string {
  return translations[key]?.[lang] ?? translations[key]?.en ?? key;
}
