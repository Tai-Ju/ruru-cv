<script setup>
import { computed } from 'vue'
import { useLanguage } from '../../composables/useLanguage'

const { currentLang } = useLanguage()

const copy = computed(() => {
  if (currentLang.value === 'en') {
    return {
      title: 'About Me',
      paragraphs: [
        'I have worked in healthcare for over eight years, first in Medical Education and now in the Pharmacy Department at Mackay Memorial Hospital. This domain knowledge of hospital operations, regulation, and cross-team collaboration underpins all of my technical work.',
        'In recent years I have built systematic capability in data analysis and software development—from SQL pipelines and Power BI to Python applications and applied large language models. I focus on tools that enter daily workflows and stay in use by clinical and administrative teams.',
        'I am currently pursuing a Master of Information Management at National Taipei University of Nursing and Health Sciences, researching on-premise LLMs for pharmacy decision support.'
      ]
    }
  }

  return {
    title: '關於我',
    paragraphs: [
      '我在醫療體系工作逾八年，先後任職於馬偕紀念醫院醫學教育部與藥劑部，對醫院的組織運作、法規環境與跨部門協作有深入的實務理解。這份領域知識，是我所有技術工作的根基。',
      '過去數年，我系統性地建立了資料分析與軟體開發能力——從 SQL 資料管線、Power BI 商業智慧，到 Python 應用開發與大型語言模型的落地研究。我不做概念驗證式的展示，而是交付真正進入日常作業流程、被臨床與行政團隊持續使用的工具。',
      '目前於國立臺北護理健康大學資訊管理研究所進修，研究本地端大型語言模型於藥事決策支援之應用，持續深化醫療資訊領域的專業縱深。'
    ]
  }
})
</script>

<template>
  <section id="about" class="about-section">
    <div class="container">
      <h2 class="section-title">{{ copy.title }}</h2>
      <div class="about-content">
        <div class="about-text">
          <p v-for="(paragraph, index) in copy.paragraphs" :key="index">{{ paragraph }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style src="../../styles/about.css"></style>
