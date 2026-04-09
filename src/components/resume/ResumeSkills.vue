<script setup>
import { computed } from 'vue'
import { useLanguage } from '../../composables/useLanguage'

const { currentLang } = useLanguage()

const skillCategoriesZh = [
  {
    title: '程式開發',
    skills: [
      { name: 'Python', experience: 'TQC+ 認證 / 自動化腳本開發' },
      { name: 'VBA', experience: 'Excel 自動化系統開發' },
      { name: 'JavaScript', experience: 'Vue.js / Node.js 開發' },
      { name: 'Google Apps Script', experience: 'Google Sheets 整合應用' },
      { name: 'Node.js', experience: '後端 API 開發' }
    ]
  },
  {
    title: '數據分析與工具',
    skills: [
      { name: 'Power BI', experience: '儀表板設計 / 數據分析' },
      { name: 'Excel', experience: '進階函數 / VBA 開發' },
      { name: 'Git/GitHub', experience: '版本控制 / 協作開發' },
      { name: 'MongoDB', experience: 'NoSQL 資料庫操作' }
    ]
  }
]

const skillCategoriesEn = [
  {
    title: 'Programming',
    skills: [
      { name: 'Python', experience: 'TQC+ certified / Automation scripting' },
      { name: 'VBA', experience: 'Excel automation system development' },
      { name: 'JavaScript', experience: 'Vue.js / Node.js development' },
      { name: 'Google Apps Script', experience: 'Google Sheets integration' },
      { name: 'Node.js', experience: 'Backend API development' }
    ]
  },
  {
    title: 'Data & Tools',
    skills: [
      { name: 'Power BI', experience: 'Dashboard design / Data analytics' },
      { name: 'Excel', experience: 'Advanced formulas / VBA development' },
      { name: 'Git/GitHub', experience: 'Version control / Collaboration' },
      { name: 'MongoDB', experience: 'NoSQL database operations' }
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
