<script setup>
import { computed } from 'vue'
import { useLanguage } from '../../composables/useLanguage'

const { currentLang } = useLanguage()

const copy = computed(() => {
  if (currentLang.value === 'en') {
    return {
      title: 'About Me',
      paragraphs: [
        'I am an AI engineer at Tri-Service General Hospital on the Healthy Taiwan Deep Cultivation Program. I focus on building and deploying healthcare AI—on-premise LLM/RAG, computer vision, and AI-assisted services—plus the APIs and FHIR/HL7 integrations needed to put them into production.',
        'Previously I spent six years at Mackay Memorial Hospital, which gives me domain context to turn clinical needs into working models and systems—not just dashboards.',
        'I am pursuing an M.S. in Information Management at National Taipei University of Nursing and Health Sciences, researching on-premise LLM medication recommendation systems.'
      ]
    }
  }

  return {
    title: '關於我',
    paragraphs: [
      '現任 AI 工程師，於三軍總醫院參與健康台灣深耕計畫。專注建置與部署醫療 AI——地端 LLM／RAG、電腦視覺，以及 AI 輔助工具的工程化落地（含 RESTful API、FHIR／HL7、HIS／健保署介接），而不是傳統報表分析。',
      '此前於馬偕紀念醫院累積六年實務，讓我能把臨床與行政需求直接轉成可運行的模型與系統。這份領域知識，是我做 AI 落地的根基。',
      '目前於國立臺北護理健康大學資訊管理研究所進修，研究地端 LLM 用藥建議系統，持續把醫療 domain knowledge 轉化為可部署的 AI 解法。'
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
