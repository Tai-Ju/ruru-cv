<script setup>
import { computed, ref } from 'vue'
import { trackProjectClick, trackOutboundLink } from '../../utils/analytics'
import { useLanguage } from '../../composables/useLanguage'

const { currentLang } = useLanguage()

const projects = [
  {
    id: 1,
    title: '藥事知識決策支援系統',
    titleEn: 'Pharmacy Knowledge Decision Support System',
    period: '2025 — 2026',
    tags: ['LLAMAINDEX', 'CHROMADB', 'OLLAMA', 'LANGSMITH'],
    description:
      '本地端部署之 RAG 問答系統，以國際臨床指引為知識庫，完成多個開源模型之系統性評估，兼顧醫療資料隱私與回覆品質。碩士論文研究主題。',
    descriptionEn:
      'On-premise RAG Q&A system grounded in international clinical guidelines, with systematic evaluation of open-source models while protecting healthcare data privacy. Master thesis research topic.',
    link: 'https://github.com/Tai-Ju/drug-rag-pipeline'
  },
  {
    id: 2,
    title: '抗生素使用管理儀表板',
    titleEn: 'Antimicrobial Stewardship Dashboard',
    period: '2025 — 2026',
    tags: ['POWER BI', 'DAX', 'ORACLE', 'SQL SERVER'],
    description:
      '整合雙資料庫之自動化監測平台，實作國際標準之用藥密度指標，供感染管制與藥事委員會決策使用，並建立完整資料字典以利長期維運。',
    descriptionEn:
      'Automated dual-database monitoring platform implementing international antimicrobial density metrics for infection control and pharmacy committee decisions, with a full data dictionary for long-term operations.',
    link: ''
  },
  {
    id: 3,
    title: 'FHIR 醫療資料交換工具',
    titleEn: 'FHIR Healthcare Data Exchange Tool',
    period: '2026',
    tags: ['FHIR', 'ELECTRON', 'OAUTH 2.0'],
    description:
      '桌面應用程式，實作 FHIR Bundle 之封裝與上傳，於 TWCAT 2026 台灣醫療資訊聯測完成 TW EMR Profile 合規驗證。',
    descriptionEn:
      'Desktop application for FHIR Bundle packaging and upload, validated against TW EMR Profile at TWCAT 2026 Taiwan Healthcare Connectathon.',
    link: 'https://github.com/swiftruru/rx-fhir'
  },
  {
    id: 4,
    title: 'ICU 藥事照護管理工具',
    titleEn: 'ICU Pharmacy Care Management Tool',
    period: '2025',
    tags: ['PYTHON', 'TESSERACT OCR', 'PYINSTALLER'],
    description:
      '自動化資料擷取管線，從掃描文件中辨識並結構化 ICU 照護與申報數據，打包為單機應用程式供部門同仁日常使用。',
    descriptionEn:
      'Automated extraction pipeline that recognizes and structures ICU care and claim data from scanned documents, packaged as a standalone app for daily departmental use.',
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
