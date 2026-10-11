<script setup>
import { computed } from 'vue'
import { useLanguage } from '../../composables/useLanguage'

const { currentLang } = useLanguage()

const skillCategoriesZh = [
  {
    title: '後端與系統開發',
    skills: [
      { name: 'Python / Django', experience: '醫療應用系統、資料庫設計、API 串接' },
      { name: 'RESTful API', experience: '系統架構規劃、規格文件與跨平台介接' },
      { name: 'Web 技術', experience: 'React、TypeScript、Electron、Docker、Git' }
    ]
  },
  {
    title: 'AI 與資料工程',
    skills: [
      { name: 'RAG / Local LLM', experience: 'Ollama、ChromaDB、地端用藥建議系統' },
      { name: 'Power BI', experience: '醫療數據儀表板、ADC Log 分析' },
      { name: '資料科學', experience: 'pandas、scikit-learn、機器學習應用' }
    ]
  },
  {
    title: '醫療資訊',
    skills: [
      { name: 'FHIR / HL7', experience: 'TW Core EMR-IG、電子處方箋、HIS 介接' },
      { name: '自動化流程', experience: 'Google Apps Script、n8n、OCR 應用' },
      { name: '領域知識', experience: '醫務管理、藥事作業、評鑑與法規' }
    ]
  }
]

const skillCategoriesEn = [
  {
    title: 'Backend & Systems',
    skills: [
      { name: 'Python / Django', experience: 'Healthcare apps, database design, API integration' },
      { name: 'RESTful API', experience: 'Architecture planning, specs, and cross-platform integration' },
      { name: 'Web Technologies', experience: 'React, TypeScript, Electron, Docker, Git' }
    ]
  },
  {
    title: 'AI & Data Engineering',
    skills: [
      { name: 'RAG / Local LLM', experience: 'Ollama, ChromaDB, on-premise medication systems' },
      { name: 'Power BI', experience: 'Healthcare dashboards and ADC log analytics' },
      { name: 'Data Science', experience: 'pandas, scikit-learn, applied machine learning' }
    ]
  },
  {
    title: 'Health Informatics',
    skills: [
      { name: 'FHIR / HL7', experience: 'TW Core EMR-IG, e-prescriptions, HIS integration' },
      { name: 'Automation', experience: 'Google Apps Script, n8n, OCR applications' },
      { name: 'Domain Knowledge', experience: 'Healthcare admin, pharmacy operations, accreditation' }
    ]
  }
]

const sectionTitle = computed(() => (currentLang.value === 'en' ? 'Skills' : '專業技能'))
const skillCategories = computed(() => (currentLang.value === 'en' ? skillCategoriesEn : skillCategoriesZh))
</script>

<template>
  <section id="skills" class="skills-section">
    <div class="container">
      <h2 class="section-title">{{ sectionTitle }}</h2>
      <div class="skills-grid">
        <div
          v-for="category in skillCategories"
          :key="category.title"
          class="skill-category"
        >
          <h3 class="category-title">{{ category.title }}</h3>
          <div class="skills-list">
            <div
              v-for="skill in category.skills"
              :key="skill.name"
              class="skill-item"
            >
              <span class="skill-name">{{ skill.name }}</span>
              <span class="skill-experience">{{ skill.experience }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style src="../../styles/skills.css"></style>
