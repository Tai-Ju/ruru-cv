<script setup>
import { computed } from 'vue'
import { useLanguage } from '../../composables/useLanguage'

const { currentLang } = useLanguage()

const copy = computed(() => {
  if (currentLang.value === 'en') {
    return {
      title: 'About Me',
      paragraphs: [
        'I am Tai-Ju Liu with over 6 years of administration experience in medical centers. I am currently pursuing a Master degree in Information Management at National Taipei University of Nursing and Health Sciences.',
        'I focus on solving real workflow pain points with technology and have built practical projects such as a Power BI ADC dashboard, a VBA scheduling automation system, and a LineBot OCR application.',
        'With TQC+ Python certification and cross-domain experience, I bring both healthcare domain understanding and software execution capability.'
      ]
    }
  }

  return {
    title: '關於我',
    paragraphs: [
      '我是劉玳如 (Tai-Ju Liu)，擁有 6 年以上醫學中心行政管理經驗，目前就讀國立臺北護理健康大學資訊管理碩士班，正積極將醫務管理專業與軟體開發能力結合。',
      '我深信技術的價值在於解決實際問題。擅長將臨床作業痛點轉化為技術解決方案，成功建構 Power BI 智慧藥櫃監控儀表板、VBA 自動化排班系統、LineBot OCR 應用等創新專案。',
      '已取得 TQC+ Python 3 程式語言認證，熟練多種開發工具與技術。我相信跨領域的背景是我的優勢，讓我能以使用者的角度思考，開發出更貼近需求的解決方案。'
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
