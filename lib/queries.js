const frontpageData = (lang) => `https://api.aidanetwork.org/api/v1/${lang}/pages/front-page`
const menuData = (lang) => `https://api.aidanetwork.org/api/v1/${lang}/pages/menu`
const magazineData = (lang) => `https://api.aidanetwork.org/api/v1/${lang}/posts?page=0&limit=16`
const singoloPost = (lang, slug) => `https://api.aidanetwork.org/api/v1/${lang}/stream/${slug}`
export {frontpageData, menuData, magazineData, singoloPost}