<script setup>
import { computed, ref } from 'vue'
import { trackProjectClick, trackOutboundLink } from '../../utils/analytics'
import { useLanguage } from '../../composables/useLanguage'

const { currentLang } = useLanguage()

const projects = [
  {
    id: 1,
    title: '地端 LLM 用藥建議系統',
    titleEn: 'Local LLM Medication Recommendation System',
    tags: ['PYTHON', 'RAG', 'OLLAMA', 'CHROMADB', 'FLASK'],
    description:
      '基於本地 LLM 與 RAG 的用藥建議系統（drug-rag-pipeline），整合 FDA、PubMed、RxNorm 等 68,674 筆醫學資料，全程離線運行，支援四模型並行推論與 RAG 對照',
    descriptionEn:
      'Offline medication recommendation system using local LLMs and RAG (drug-rag-pipeline), built on 68,674 medical records from FDA, PubMed, and RxNorm with four-model parallel inference and RAG comparison.',
    link: 'https://github.com/Tai-Ju/drug-rag-pipeline'
  },
  {
    id: 2,
    title: 'FHIR 電子處方箋系統',
    titleEn: 'FHIR Electronic Prescription System',
    tags: ['ELECTRON', 'REACT', 'TYPESCRIPT', 'FHIR'],
    description:
      '基於 TW Core 電子處方箋 Profile 的桌面應用（rx-fhir），支援 11 步驟處方建立、FHIR Bundle 查詢驗證與跨平台發布',
    descriptionEn:
      'Cross-platform desktop app (rx-fhir) for TW Core electronic prescriptions, with an 11-step creation wizard, FHIR Bundle query/validation, and multi-platform releases.',
    link: 'https://github.com/swiftruru/rx-fhir'
  },
  {
    id: 3,
    title: '胸部 X 光 AI 偵測與分類',
    titleEn: 'Chest X-ray AI Detection & Classification',
    tags: ['PYTHON', 'YOLOV8', 'PYTORCH', 'COMPUTER VISION'],
    description:
      '胸部 X 光肺炎偵測與分類（chest-xray-ai），YOLOv8 mAP50 達 97.3%，並比較 LeNet-5 / AlexNet / VGG16 CNN 分類表現',
    descriptionEn:
      'Chest X-ray pneumonia detection and classification (chest-xray-ai) with YOLOv8 (mAP50 97.3%) and comparative CNN models (LeNet-5, AlexNet, VGG16).',
    link: 'https://github.com/Tai-Ju/chest-xray-ai'
  },
  {
    id: 4,
    title: 'LineBot OCR 醫療應用',
    titleEn: 'LineBot OCR for Healthcare',
    tags: ['JAVASCRIPT', 'LINE API', 'OCR'],
    description: '整合 Line Messaging API 與 OCR 影像辨識技術(linebot-ocr)，實現藥品位置查詢功能，提升工作效率',
    descriptionEn:
      'Integrated Line Messaging API with OCR to build a medication-location query assistant for pharmacy workflows.',
    link: 'https://github.com/Tai-Ju/linebot-ocr'
  },
  {
    id: 5,
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
    id: 6,
    title: '藥劑部排班管理系統',
    titleEn: 'Pharmacy Shift Management System',
    tags: ['GOOGLE APPS SCRIPT', 'HTML', 'JAVASCRIPT'],
    description: '開發藥劑部員工排班管理系統 (gas-pharmacy-schedule-system)，整合 Google Sheets 實現打卡與加班費計算功能',
    descriptionEn:
      'Built a pharmacy scheduling system with Google Apps Script and Google Sheets integration for attendance and overtime calculation.',
    link: 'https://github.com/Tai-Ju/gas-pharmacy-schedule-system'
  },
  {
    id: 7,
    title: '行政流程自動化工具集',
    titleEn: 'Administrative Workflow Automation Toolkit',
    tags: ['PYTHON', 'JUPYTER', 'AUTOHOTKEY', 'BATCH'],
    description: '開發多套自動化腳本集合 (autohotkey-scripts)，包含Python 數據處理、AutoHotkey 操作自動化及批次處理程序，全面優化重複性行政操作流程',
    descriptionEn:
      'Developed a toolkit of Python, AutoHotkey, and batch scripts to automate repetitive administrative operations.',
    link: 'https://github.com/Tai-Ju/autohotkey-scripts'
  },
  {
    id: 8,
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
