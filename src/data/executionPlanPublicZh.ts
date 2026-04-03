/**
 * SC-public-v2: strip personal / professor names from execution-plan and similar English text.
 */
export function anonymizeExecutionPlanTextForPublic(text: string): string {
  let s = text;
  // English names (longest first)
  s = s.replace(/Prof\.\s*A\.L\.\s*Roy\s+Vellaisamy/gi, '学术合作方');
  s = s.replace(/Prof\.\s*A\.L\.\s*Roy/gi, '学术合作方');
  s = s.replace(/A\.L\.\s*Roy\s+Vellaisamy/gi, '学术合作方');
  s = s.replace(/\bVellaisamy\b/gi, '学术合作方');
  s = s.replace(/\bGe\s+Lei\b/g, '深圳临床合作方');
  // Chinese: 教授 + 姓名
  s = s.replace(/葛磊教授/g, '深圳临床合作方');
  s = s.replace(/蔡錦輝教授/g, '数据科学合作方');
  s = s.replace(/蔡錦輝/g, '数据科学合作方');
  s = s.replace(/葛磊/g, '深圳私立医院团队');
  // Revenue-share shorthand (after full names)
  s = s.replace(/Roy 5%/g, '学术合作方 5%');
  s = s.replace(/蔡 5%/g, '数据合作方 5%');
  s = s.replace(/葛磊 3%/g, '深圳临床合作方 3%');
  s = s.replace(/\bRoy\b/g, '学术合作方');
  // Possessive leftovers
  s = s.replace(/蔡's/g, '数据科学合作方的');
  s = s.replace(/蔡’/g, '数据科学合作方’');
  s = s.replace(/学术合作方's/g, '学术合作方的');
  s = s.replace(/数据科学合作方's/g, '数据科学合作方的');
  s = s.replace(/Kiang Wu Hospital/g, '澳门合作医院');
  s = s.replace(/Shenzhen University Hospital/g, '深圳私立医院合作方');
  s = s.replace(/CUHK/g, '香港合作大学');
  s = s.replace(/Pinpoint Medical/g, '境外授权合作方');
  s = s.replace(/HKMU/g, '香港合作院校');
  return s;
}
