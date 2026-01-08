<script setup>
const skillCategories = [
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
</script>

<template>
  <section id="skills" class="skills-section">
    <div class="container">
      <h2 class="section-title">專業技能</h2>
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
              <div class="skill-name">{{ skill.name }}</div>
              <div class="skill-experience">{{ skill.experience }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style src="../../styles/skills.css"></style>
