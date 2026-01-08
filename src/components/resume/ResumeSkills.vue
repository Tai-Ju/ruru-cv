<script setup>
const skillCategories = [
  {
    title: '程式開發',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'JavaScript', level: 75 },
      { name: 'Node.js', level: 70 },
      { name: 'VBA', level: 85 },
      { name: 'Google Apps Script', level: 75 }
    ]
  },
  {
    title: '數據分析與工具',
    skills: [
      { name: 'Power BI', level: 90 },
      { name: 'MongoDB', level: 70 },
      { name: 'Excel', level: 90 },
      { name: 'Git/GitHub', level: 75 }
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
              <div class="skill-info">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-percentage">{{ skill.level }}%</span>
              </div>
              <div class="skill-bar">
                <div
                  class="skill-progress"
                  :style="{ width: skill.level + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style src="../../styles/skills.css"></style>
