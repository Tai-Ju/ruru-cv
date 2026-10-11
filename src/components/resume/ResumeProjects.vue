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
      '整合 LLaMA3／Qwen3／Gemma3 與 ChromaDB，建立 RAG 架構用藥查詢系統；資料來源涵蓋 FDA Label、PubMed、RxNorm，支援中英混合查詢，全程離線運行。碩士論文研究主題。',
    descriptionEn:
      'RAG medication query system with LLaMA3/Qwen3/Gemma3 and ChromaDB; sources include FDA Label, PubMed, and RxNorm with offline bilingual queries. Master thesis topic.',
    link: 'https://github.com/Tai-Ju/drug-rag-pipeline'
  },
  {
    id: 2,
    title: 'FHIR 電子處方箋系統',
    titleEn: 'FHIR Electronic Prescription System',
    tags: ['ELECTRON', 'REACT', 'TYPESCRIPT', 'FHIR'],
    description:
      '桌面應用程式，依據台灣衛福部 TW Core EMR-IG 2.5 規範，實作 FHIR R4 電子處方箋完整 Profile（Bundle-EP／Composition-EP／MedicationRequest-EP）。',
    descriptionEn:
      'Desktop app implementing full FHIR R4 e-prescription profiles per TW Core EMR-IG 2.5 (Bundle-EP / Composition-EP / MedicationRequest-EP).',
    link: 'https://github.com/swiftruru/rx-fhir'
  },
  {
    id: 3,
    title: 'ADC 智慧藥櫃數據分析',
    titleEn: 'ADC Smart Cabinet Analytics',
    tags: ['POWER BI', 'DAX'],
    description: '分析逾 30 萬筆 ADC Log 數據，建立庫存成效視覺化儀表板，支援藥品補給決策。',
    descriptionEn:
      'Analyzed 300k+ ADC log records in Power BI to build inventory-effectiveness dashboards supporting replenishment decisions.',
    link: ''
  },
  {
    id: 4,
    title: '住院藥局排班系統',
    titleEn: 'Inpatient Pharmacy Scheduling System',
    tags: ['GOOGLE APPS SCRIPT', 'GOOGLE SHEETS'],
    description: '開發自動化排班工具，實作班別規則設定、出勤記錄查詢與加班費自動試算，取代人工計算流程。',
    descriptionEn:
      'Automated scheduling tool for shift rules, attendance lookup, and overtime calculation, replacing manual payroll workflows.',
    link: 'https://github.com/Tai-Ju/gas-pharmacy-schedule-system'
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
