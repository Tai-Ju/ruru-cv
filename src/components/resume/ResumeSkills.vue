<script setup>
import { computed } from 'vue'
import { useLanguage } from '../../composables/useLanguage'

const { currentLang } = useLanguage()

const skillCategoriesZh = [
  {
    title: '資料工程與分析',
    skills: [
      { name: 'Power BI', experience: 'DAX 進階量值、Power Query M、多來源資料管線' },
      { name: 'SQL', experience: 'Oracle、SQL Server 查詢設計與跨庫整合' },
      { name: '機器學習', experience: '迴歸、分群模型於醫療資料之應用' }
    ]
  },
  {
    title: '軟體開發',
    skills: [
      { name: 'Python', experience: '應用開發、OCR 自動化、TQC+ 認證' },
      { name: 'AI 應用', experience: 'RAG 系統、LlamaIndex、本地端 LLM 部署評估' },
      { name: 'Web 技術', experience: 'FastAPI、Vue、React、Docker' }
    ]
  },
  {
    title: '醫療資訊',
    skills: [
      { name: 'FHIR 標準', experience: 'TW Core Profile 實作、全國聯測驗證經驗' },
      { name: '流程優化', experience: 'BPMN 建模、流程探勘' },
      { name: '領域知識', experience: '醫務管理、藥事作業、評鑑與法規' }
    ]
  }
]

const skillCategoriesEn = [
  {
    title: 'Data Engineering & Analytics',
    skills: [
      { name: 'Power BI', experience: 'Advanced DAX, Power Query M, multi-source pipelines' },
      { name: 'SQL', experience: 'Oracle & SQL Server query design and cross-database integration' },
      { name: 'Machine Learning', experience: 'Regression and clustering on healthcare data' }
    ]
  },
  {
    title: 'Software Development',
    skills: [
      { name: 'Python', experience: 'Application development, OCR automation, TQC+ certified' },
      { name: 'AI Applications', experience: 'RAG systems, LlamaIndex, on-premise LLM evaluation' },
      { name: 'Web Technologies', experience: 'FastAPI, Vue, React, Docker' }
    ]
  },
  {
    title: 'Health Informatics',
    skills: [
      { name: 'FHIR', experience: 'TW Core Profile implementation and national connectathon validation' },
      { name: 'Process Optimization', experience: 'BPMN modeling and process mining' },
      { name: 'Domain Knowledge', experience: 'Healthcare admin, pharmacy operations, accreditation & regulation' }
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
