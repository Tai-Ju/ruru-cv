<script setup>
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
    link: 'https://github.com/Tai-Ju/literature-search-automation'
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
  }
]
</script>

<template>
  <section id="projects" class="projects-section">
    <div class="container">
      <h2 class="section-title">技術專案作品</h2>
      <div class="projects-grid">
        <div
          v-for="project in projects"
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
            :href="project.link"
            class="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            查看專案 →
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style src="../../styles/projects.css"></style>
