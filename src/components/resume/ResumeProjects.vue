<script setup>
import { computed, ref } from 'vue'
import { trackProjectClick, trackOutboundLink } from '../../utils/analytics'
import { useLanguage } from '../../composables/useLanguage'

const { currentLang } = useLanguage()

const projects = [
  {
    id: 1,
    title: 'LineBot OCR 醫療應用',
    titleEn: 'LineBot OCR for Healthcare',
    tags: ['JAVASCRIPT', 'LINE API', 'OCR'],
    description: '整合 Line Messaging API 與 OCR 影像辨識技術(linebot-ocr)，實現藥品位置查詢功能，提升工作效率',
    descriptionEn:
      'Integrated Line Messaging API with OCR to build a medication-location query assistant for pharmacy workflows.',
    link: 'https://github.com/Tai-Ju/linebot-ocr'
  },
  {
    id: 2,
    title: '學術文獻智能搜索系統',
    titleEn: 'Academic Literature Smart Search',
    tags: ['N8N', 'API INTEGRATION', 'JAVASCRIPT'],
    description: '整合 ScienceDirect 和 Web of Science API，自動化文獻檢索、去重與相關性評分 (literature-search-automation)',
    descriptionEn:
      'Integrated ScienceDirect and Web of Science APIs to automate paper retrieval, deduplication, and relevance scoring.',
    link: '',
    privateNote: '此專案目前為私人版本，面試可提供展示或說明',
    privateNoteEn: 'Private project. Demo and details are available during interviews.'
  },
  {
    id: 3,
    title: '藥劑部排班管理系統',
    titleEn: 'Pharmacy Shift Management System',
    tags: ['GOOGLE APPS SCRIPT', 'HTML', 'JAVASCRIPT'],
    description: '開發藥劑部員工排班管理系統 (gas-pharmacy-schedule-system)，整合 Google Sheets 實現打卡與加班費計算功能',
    descriptionEn:
      'Built a pharmacy scheduling system with Google Apps Script and Google Sheets integration for attendance and overtime calculation.',
    link: 'https://github.com/Tai-Ju/gas-pharmacy-schedule-system'
  },
  {
    id: 4,
    title: '行政流程自動化工具集',
    titleEn: 'Administrative Workflow Automation Toolkit',
    tags: ['PYTHON', 'JUPYTER', 'AUTOHOTKEY', 'BATCH'],
    description: '開發多套自動化腳本集合 (autohotkey-scripts)，包含Python 數據處理、AutoHotkey 操作自動化及批次處理程序，全面優化重複性行政操作流程',
    descriptionEn:
      'Developed a toolkit of Python, AutoHotkey, and batch scripts to automate repetitive administrative operations.',
    link: 'https://github.com/Tai-Ju/autohotkey-scripts'
  },
  {
    id: 5,
    title: '資訊科學與資料分析實作',
    titleEn: 'Information Science & Data Analysis Practice',
    tags: ['PYTHON', 'DATA ANALYSIS', 'ACADEMIC PROJECT'],
    description: '彙整資訊科學課程實作專案 (Introduction-to-Information-Science_cw)，涵蓋資料處理、基礎分析流程與程式實作能力',
    descriptionEn:
      'A collection of information science coursework projects covering data processing, analysis workflow, and programming practice.',
    link: 'https://github.com/Tai-Ju/Introduction-to-Information-Science_cw'
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

const sectionTitle = computed(() => (currentLang.value === 'en' ? 'Projects' : '技術專案作品'))
const projectLinkText = computed(() => (currentLang.value === 'en' ? 'View Project →' : '查看專案 →'))
const allLabel = computed(() => (currentLang.value === 'en' ? 'ALL' : '全部'))

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
          <p v-else class="project-note">{{ currentLang === 'en' ? project.privateNoteEn : project.privateNote }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style src="../../styles/projects.css"></style>
