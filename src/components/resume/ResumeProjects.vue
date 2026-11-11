<script setup>
import { computed, ref } from 'vue'
import { trackProjectClick, trackOutboundLink } from '../../utils/analytics'
import { useLanguage } from '../../composables/useLanguage'

const { currentLang } = useLanguage()

const projects = [
  {
    id: 1,
    title: '地端 LLM 用藥建議系統',
    titleEn: 'On-premise LLM Medication Recommendation',
    tags: ['PYTHON', 'OLLAMA', 'CHROMADB', 'RAG'],
    description:
      '碩士論文題目。以 RAG 架構串接 LLaMA3、Qwen3、Gemma3 與 ChromaDB，資料來源包括 FDA 藥品仿單、PubMed 與 RxNorm，可中英混合查詢。全程離線運行，資料不必送出院外。',
    descriptionEn:
      'Master thesis project. A RAG system connecting LLaMA3, Qwen3, and Gemma3 with ChromaDB, drawing on FDA labels, PubMed, and RxNorm. Supports mixed Chinese/English queries and runs fully offline, so data never leaves the hospital.',
    link: 'https://github.com/Tai-Ju/drug-rag-pipeline'
  },
  {
    id: 2,
    title: 'FHIR 電子處方箋系統',
    titleEn: 'FHIR Electronic Prescription System',
    tags: ['ELECTRON', 'REACT', 'TYPESCRIPT', 'FHIR'],
    description:
      '依衛福部 TW Core EMR-IG 2.5 開發的桌面應用程式，實作 FHIR R4 電子處方箋的 Bundle-EP、Composition-EP、MedicationRequest-EP 等 Profile。',
    descriptionEn:
      'Desktop app built to TW Core EMR-IG 2.5, implementing FHIR R4 e-prescription profiles such as Bundle-EP, Composition-EP, and MedicationRequest-EP.',
    link: 'https://github.com/swiftruru/rx-fhir'
  },
  {
    id: 3,
    title: '調閱單電子化自動處理系統',
    titleEn: 'Automated Chart Request Digitization System',
    tags: ['AUTOHOTKEY', 'PYTHON', 'AUTOMATION', 'BATCH'],
    description:
      '藥劑部每天要把醫令系統的調閱單印成 PDF、合併、備份，原本全靠人工。我用 AutoHotkey 和 Python 把整段流程串起來：自動攔截列印視窗並命名存檔、一鍵合併當日檔案、定時清理，並做本機與網路雙重備份。現在約 95% 的步驟不需人工介入，也沒有額外採購軟體。',
    descriptionEn:
      'The pharmacy had to print chart requests to PDF, merge, and back them up by hand every day. I chained the whole flow with AutoHotkey and Python: auto-capturing print dialogs, one-key daily merging, scheduled cleanup, and dual local/network backup. About 95% of the steps now need no manual work, with no extra software purchased.',
    link: 'https://github.com/Tai-Ju/autohotkey-scripts'
  },
  {
    id: 4,
    title: '住院藥局排班系統',
    titleEn: 'Inpatient Pharmacy Scheduling System',
    tags: ['GOOGLE APPS SCRIPT', 'GOOGLE SHEETS'],
    description:
      '住院藥局原本靠人工排班、手算加班費。這套工具處理班別規則、出勤查詢與加班費試算，減少核算錯誤。',
    descriptionEn:
      'Inpatient pharmacy scheduling used to be manual, with overtime pay calculated by hand. This tool handles shift rules, attendance lookup, and overtime calculation, cutting down on payroll errors.',
    link: 'https://github.com/Tai-Ju/gas-pharmacy-schedule-system'
  },
  {
    id: 5,
    title: 'ADC 智慧藥櫃數據分析',
    titleEn: 'ADC Smart Cabinet Analytics',
    tags: ['POWER BI', 'DAX'],
    description:
      '整理逾 30 萬筆智慧藥櫃（ADC）使用紀錄，在 Power BI 建立庫存儀表板，作為補藥決策的參考。',
    descriptionEn:
      'Organized 300k+ automated dispensing cabinet (ADC) log records into a Power BI inventory dashboard used to guide restocking.',
    link: ''
  }
]

const selectedTag = ref('ALL')

const filterTags = computed(() => {
  const tags = new Set(['ALL'])
  projects.forEach((project) => {
    project.tags.forEach((tag) => tags.add(tag))
  })
  return Array.from(tags)
})

const filteredProjects = computed(() => {
  if (selectedTag.value === 'ALL') return projects
  return projects.filter((project) => project.tags.includes(selectedTag.value))
})

const sectionTitle = computed(() => (currentLang.value === 'en' ? 'Projects' : '技術專案'))
const projectLinkText = computed(() => (currentLang.value === 'en' ? 'View Project →' : '查看專案 →'))
const allLabel = computed(() => (currentLang.value === 'en' ? 'ALL' : '全部'))
const privateNote = computed(() =>
  currentLang.value === 'en'
    ? 'Internal project. Demo available upon request.'
    : '內部專案，面試可提供展示或說明。'
)

const displayTags = computed(() => filterTags.value.map((tag) => (tag === 'ALL' ? allLabel.value : tag)))

const handleProjectClick = (project) => {
  if (!project.link) return
  trackProjectClick(project.title)
  trackOutboundLink(project.link, project.title)
}
</script>

<template>
  <section id="projects" class="projects-section">
    <div class="container">
      <h2 class="section-title">{{ sectionTitle }}</h2>
      <div class="project-filters">
        <button
          v-for="(tag, index) in filterTags"
          :key="tag"
          type="button"
          class="project-filter-btn"
          :class="{ active: selectedTag === tag }"
          @click="selectedTag = tag"
        >
          {{ displayTags[index] }}
        </button>
      </div>
      <div class="projects-grid">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="project-card"
        >
          <div class="project-header">
            <h3 class="project-title">{{ currentLang === 'en' ? project.titleEn : project.title }}</h3>
            <div class="project-tags">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="project-tag"
              >
                {{ tag }}
              </span>
            </div>
          </div>
          <p class="project-description">{{ currentLang === 'en' ? project.descriptionEn : project.description }}</p>
          <a
            v-if="project.link"
            :href="project.link"
            class="project-link"
            target="_blank"
            rel="noopener noreferrer"
            @click="handleProjectClick(project)"
          >
            {{ projectLinkText }}
          </a>
          <p v-else class="project-note">{{ privateNote }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style src="../../styles/projects.css"></style>
