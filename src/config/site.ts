/**
 * GitHub Pages / `npm run build` 为对外公开分发：不提供含具体人名的完整中文版。
 * 本地 `npm run dev` 仍为三语循环（含内幕 zh），便于内部预览。
 */
export const isPublicGithubSite = import.meta.env.PROD;
