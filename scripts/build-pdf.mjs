/**
 * 履歷 PDF 產生腳本
 * 讀取 data/resume.json → 套入 A4 模板 → 輸出 public/resume.pdf
 *
 * 用法：
 *   npm install --save-dev puppeteer   # 第一次使用先安裝
 *   node scripts/build-pdf.mjs         # 產生 public/resume.pdf
 *   node scripts/build-pdf.mjs --html-only   # 只輸出 HTML（預覽排版用）
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const data = JSON.parse(readFileSync(join(ROOT, 'data/resume.json'), 'utf-8'))

const esc = (s) => String(s ?? '')
  .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')

function renderHTML(d) {
  const contactRow = d.contact
    .filter(c => !c.display.includes('請填入'))
    .map(c => `<span class="c-item"><b>${esc(c.label)}</b> <a href="${esc(c.url)}">${esc(c.display)}</a></span>`)
    .join('')

  const experience = d.experience.map(e => `
    <div class="entry">
      <div class="entry-head"><h3>${esc(e.position)}</h3><span class="dates">${esc(e.start)} — ${esc(e.end)}</span></div>
      <div class="org">${esc(e.organization)}</div>
      ${e.summary ? `<p>${esc(e.summary)}</p>` : ''}
      ${e.highlights.length ? `<ul>${e.highlights.map(h => `<li>${esc(h)}</li>`).join('')}</ul>` : ''}
    </div>`).join('')

  const projects = d.projects.map(p => `
    <div class="entry work">
      <div class="entry-head"><h3>${esc(p.name)}</h3><span class="dates">${esc(p.period)}</span></div>
      <p>${esc(p.description)}</p>
      <div class="stack">${p.stack.map(esc).join(' · ')}</div>
    </div>`).join('')

  const skills = d.skills.map(g => `
    <div class="skill-group">
      <h4>${esc(g.category)}</h4>
      ${g.items.map(i => `<div class="skill-row"><b>${esc(i.name)}</b><span>${esc(i.detail)}</span></div>`).join('')}
    </div>`).join('')

  const education = d.education.map(e => `
    <div class="edu">
      <b>${esc(e.degree)}</b>
      <div class="meta">${[e.school, e.meta].filter(Boolean).map(esc).join(' · ')}</div>
      ${e.note ? `<div class="note">${esc(e.note)}</div>` : ''}
    </div>`).join('')

  const certs = d.certifications.map(c => `<li>${esc(c)}</li>`).join('')

  return `<!doctype html>
<html lang="zh-TW">
<head>
<meta charset="UTF-8" />
<title>${esc(d.basics.name)} — 履歷</title>
<style>
  @page {
    size: A4;
    /* 底部保留 14mm 給頁尾頁碼，其餘 0 讓深藍頁首滿版出血 */
    margin: 0 0 14mm 0;
    @bottom-center {
      content: "${esc(d.basics.name)} ${esc(d.basics.nameLatin)} — " counter(page) " / " counter(pages);
      font-family: 'Noto Sans TC', 'Noto Sans CJK TC', sans-serif;
      font-size: 8pt; color: #A89AA0;
    }
  }
  :root {
    --band: #F5E9EC; --ivory: #FDFBFA;
    --ink: #332B2F; --muted: #6E6066; --hairline: #ECDFE2; --rose: #A24E60;
  }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: 'Noto Sans TC', 'Noto Sans CJK TC', sans-serif;
    color: var(--ink); font-size: 9.5pt; line-height: 1.65; background: #fff;
  }
  a { color: inherit; text-decoration: none; }

  /* 頁首：深藍名片帶（僅第一頁） */
  .head { background: var(--band); color: #2E2529; padding: 12mm 16mm 9mm; }
  .head .kicker { font-size: 7.5pt; letter-spacing: 0.28em; text-transform: uppercase; color: var(--rose); margin-bottom: 4mm; }
  .head h1 { font-family: 'Noto Serif TC', 'Noto Serif CJK TC', serif; font-size: 24pt; font-weight: 700; letter-spacing: 0.06em; line-height: 1.2; }
  .head .latin { font-size: 10.5pt; font-style: italic; color: #96868C; letter-spacing: 0.1em; margin: 1mm 0 4mm; font-family: 'Noto Serif TC', 'Noto Serif CJK TC', serif; }
  .head .title { font-size: 10pt; color: #4A3F44; margin-bottom: 5mm; }
  .head .contact { border-top: 0.4pt solid rgba(162,78,96,0.3); padding-top: 3.5mm; font-size: 8.5pt; color: #55494E; display: flex; flex-wrap: wrap; gap: 1.5mm 7mm; }
  .c-item { white-space: nowrap; }
  .c-item b { font-weight: 500; color: var(--rose); margin-right: 1.5mm; }
  .c-sep { margin: 0 3mm; color: rgba(251,250,247,0.3); }

  /* 頁面規劃：明確指定分頁點，每個章節整體不可跨頁 */
  .body { padding: 9mm 16mm 0; }
  .page-2 { break-before: page; padding-top: 12mm; }
  section { margin-bottom: 7mm; break-inside: avoid; }

  /* 單頁內雙欄（不需跨頁，flex 安全） */
  .duo { display: flex; gap: 9mm; }
  .duo .main { flex: 1.5; }
  .duo .side { flex: 1; }

  h2 {
    font-family: 'Noto Serif TC', 'Noto Serif CJK TC', serif;
    font-size: 12pt; font-weight: 700; letter-spacing: 0.08em;
    padding-bottom: 1.5mm; margin-bottom: 3.5mm; border-bottom: 0.6pt solid var(--hairline);
  }
  h2 .en { font-family: 'Noto Sans TC', 'Noto Sans CJK TC', sans-serif; font-size: 6.5pt; letter-spacing: 0.24em; text-transform: uppercase; color: var(--rose); font-weight: 500; margin-left: 2.5mm; }

  .summary p { font-size: 9.5pt; text-align: justify; margin-bottom: 2.5mm; }

  .entry { margin-bottom: 4.5mm; break-inside: avoid; }
  .entry-head { display: flex; justify-content: space-between; align-items: baseline; }
  .entry h3 { font-family: 'Noto Serif TC', 'Noto Serif CJK TC', serif; font-size: 10.5pt; font-weight: 700; }
  .dates { font-size: 8pt; color: var(--muted); letter-spacing: 0.06em; white-space: nowrap; }
  .org { font-size: 8.5pt; color: var(--rose); letter-spacing: 0.04em; margin: 0.5mm 0 1.5mm; }
  .entry p { font-size: 9pt; color: var(--muted); margin-bottom: 1.5mm; text-align: justify; }
  .entry ul { list-style: none; }
  .entry li { position: relative; padding-left: 5mm; margin-bottom: 1.2mm; font-size: 9pt; text-align: justify; }
  .entry li::before { content: ''; position: absolute; left: 0; top: 2.6mm; width: 2.8mm; height: 0.4pt; background: var(--rose); }
  .work .stack { font-size: 7.5pt; letter-spacing: 0.08em; color: var(--rose); text-transform: uppercase; }

  .skills-3col { display: flex; gap: 7mm; }
  .skills-3col .skill-group { flex: 1; }
  .skill-group { margin-bottom: 3.5mm; }
  .skill-group h4 { font-size: 7.5pt; letter-spacing: 0.2em; text-transform: uppercase; color: var(--rose); font-weight: 600; margin-bottom: 1.5mm; }
  .skill-row { font-size: 8.5pt; margin-bottom: 1mm; }
  .skill-row b { font-weight: 600; display: block; }
  .skill-row span { color: var(--muted); font-size: 8pt; }

  .edu { margin-bottom: 3mm; }
  .edu b { font-family: 'Noto Serif TC', 'Noto Serif CJK TC', serif; font-size: 9.5pt; }
  .edu .meta { font-size: 8pt; color: var(--muted); }
  .edu .note { font-size: 8pt; color: var(--muted); margin-top: 0.5mm; }

  .certs { list-style: none; }
  .certs li { position: relative; padding-left: 5mm; margin-bottom: 1.2mm; font-size: 8.5pt; }
  .certs li::before { content: ''; position: absolute; left: 0; top: 2.4mm; width: 2.8mm; height: 0.4pt; background: var(--rose); }
</style>
</head>
<body>
  <div class="head">
    <div class="kicker">${esc(d.basics.kicker)}</div>
    <h1>${esc(d.basics.name)}</h1>
    <div class="latin">${esc(d.basics.nameLatin)}</div>
    <div class="title">${esc(d.basics.title)}　·　${esc(d.basics.location)}</div>
    <div class="contact">${contactRow}</div>
  </div>

  <!-- 第 1 頁：簡介 ＋ 經歷 -->
  <div class="body">
    <section class="summary">
      <h2>簡介<span class="en">Profile</span></h2>
      ${d.about.map(p => `<p>${esc(p)}</p>`).join('')}
    </section>
    <section>
      <h2>經歷<span class="en">Experience</span></h2>
      ${experience}
    </section>

    <!-- 第 2 頁：專長 ＋ 專案實績 ＋ 學歷｜認證 -->
    <div class="page-2">
      <section>
        <h2>專長<span class="en">Expertise</span></h2>
        <div class="skills-3col">${skills}</div>
      </section>
      <section>
        <h2>專案實績<span class="en">Selected Work</span></h2>
        ${projects}
      </section>
      <div class="duo">
        <section class="main">
          <h2>學歷<span class="en">Education</span></h2>
          ${education}
        </section>
        <section class="side">
          <h2>專業認證<span class="en">Certifications</span></h2>
          <ul class="certs">${certs}</ul>
        </section>
      </div>
    </div>
  </div>
</body>
</html>`
}

/* ── 主流程 ── */
const html = renderHTML(data)
mkdirSync(join(ROOT, 'public'), { recursive: true })
const htmlPath = join(ROOT, 'public/resume-print.html')
writeFileSync(htmlPath, html)
console.log('✓ HTML 已產生：', htmlPath)

if (process.argv.includes('--html-only')) process.exit(0)

/* Puppeteer 輸出 PDF（在你的 Mac 上執行） */
const puppeteer = await import('puppeteer').then(m => m.default)
const browser = await puppeteer.launch()
const page = await browser.newPage()
await page.goto('file://' + htmlPath, { waitUntil: 'networkidle0' })
await page.pdf({
  path: join(ROOT, 'public/resume.pdf'),
  format: 'A4',
  printBackground: true,
  preferCSSPageSize: true
})
await browser.close()
console.log('✓ PDF 已產生：public/resume.pdf')
