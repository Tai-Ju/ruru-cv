<script setup>
import { computed } from 'vue'
import { useLanguage } from '../../composables/useLanguage'

const { currentLang } = useLanguage()

const copy = computed(() => {
  if (currentLang.value === 'en') {
    return {
      title: 'About Me',
      paragraphs: [
        'I work as an AI engineer at Tri-Service General Hospital on the Healthy Taiwan Deep Cultivation Program. I turn complex healthcare data into explainable model outputs and visual insights, and ship clinic-side digital services and AI-assisted tools—covering RESTful APIs, database architecture, FHIR/HL7, and integration with NHIA, MOHW platforms, and HIS systems.',
        'Previously I spent six years at Mackay Memorial Hospital in medical education administration and pharmacy technical development, building deep understanding of hospital operations, regulation, and cross-team collaboration.',
        'I am pursuing an M.S. in Information Management at National Taipei University of Nursing and Health Sciences, researching on-premise LLM medication recommendation systems.'
      ]
    }
  }

  return {
    title: '關於我',
    paragraphs: [
      '現任 AI 工程師，於三軍總醫院參與健康台灣深耕計畫。專注將複雜醫療數據轉化為可解釋的模型結果與視覺化洞察，並負責診所端數位應用與 AI 輔助工具之後端落地（RESTful API、資料庫架構、FHIR／HL7，以及健保署、衛福部平台與 HIS 介接）。',
      '此前於馬偕紀念醫院累積六年行政管理與技術開發實務，從醫學教育行政到藥劑部技術開發，對醫院組織運作、法規環境與跨部門協作有深入理解。這份領域知識，是我所有技術工作的根基。',
      '目前於國立臺北護理健康大學資訊管理研究所進修，研究地端 LLM 用藥建議系統，持續把醫療 domain knowledge 轉化為可落地的技術解法。'
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
