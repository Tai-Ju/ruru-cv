<script setup>
import { computed, ref } from 'vue'
import { trackProjectClick, trackOutboundLink } from '../../utils/analytics'

const projects = [
  {
    id: 1,
    title: 'LineBot OCR 醫療應用',
    tags: ['JAVASCRIPT', 'LINE API', 'OCR'],
    description: '整合 Line Messaging API 與 OCR 影像辨識技術(linebot-ocr)，實現藥品位置查詢功能，提升工作效率',
    link: 'https://github.com/Tai-Ju/linebot-ocr'
  },
  {
    id: 2,
    title: '學術文獻智能搜索系統',
    tags: ['N8N', 'API INTEGRATION', 'JAVASCRIPT'],
    description: '整合 ScienceDirect 和 Web of Science API，自動化文獻檢索、去重與相關性評分 (literature-search-automation)',
    link: '',
    privateNote: '此專案目前為私人版本，面試可提供展示或說明'
  },
  {
    id: 3,
    title: '藥劑部排班管理系統',
    tags: ['GOOGLE APPS SCRIPT', 'HTML', 'JAVASCRIPT'],
    description: '開發藥劑部員工排班管理系統 (gas-pharmacy-schedule-system)，整合 Google Sheets 實現打卡與加班費計算功能',
    link: 'https://github.com/Tai-Ju/gas-pharmacy-schedule-system'
  },
  {
    id: 4,
    title: '行政流程自動化工具集',
    tags: ['PYTHON', 'JUPYTER', 'AUTOHOTKEY', 'BATCH'],
    description: '開發多套自動化腳本集合 (autohotkey-scripts)，包含Python 數據處理、AutoHotkey 操作自動化及批次處理程序，全面優化重複性行政操作流程',
    link: 'https://github.com/Tai-Ju/autohotkey-scripts'
  },
  {
    id: 5,
    title: '資訊科學與資料分析實作',
    tags: ['PYTHON', 'DATA ANALYSIS', 'ACADEMIC PROJECT'],
    description: '彙整資訊科學課程實作專案 (Introduction-to-Information-Science_cw)，涵蓋資料處理、基礎分析流程與程式實作能力',
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

const handleProjectClick = (project) => {
  if (!project.link) return
  trackProjectClick(project.title)
  trackOutboundLink(project.link, project.title)
}
</script>

<template>
  <section id="projects" class="projects-section">
    <div class="container">
      <h2 class="section-title">技術專案作品</h2>
      <div class="project-filters">
        <button
          v-for="tag in filterTags"
          :key="tag"
          type="button"
          class="project-filter-btn"
          :class="{ active: selectedTag === tag }"
          @click="selectedTag = tag"
        >
          {{ tag }}
        </button>
      </div>
      <div class="projects-grid">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="project-card"
        >
          <div class="project-header">
            <h3 class="project-title">{{ project.title }}</h3>
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
          <p class="project-description">{{ project.description }}</p>
          <a
            v-if="project.link"
            :href="project.link"
            class="project-link"
            target="_blank"
            rel="noopener noreferrer"
            @click="handleProjectClick(project)"
          >
            查看專案 →
          </a>
          <p v-else class="project-note">{{ project.privateNote }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style src="../../styles/projects.css"></style>
