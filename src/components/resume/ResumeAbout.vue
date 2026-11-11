<script setup>
import { computed } from 'vue'
import { useLanguage } from '../../composables/useLanguage'

const { currentLang } = useLanguage()

const copy = computed(() => {
  if (currentLang.value === 'en') {
    return {
      title: 'About Me',
      paragraphs: [
        'I work on the Healthy Taiwan Deep Cultivation Program at Tri-Service General Hospital, building the backend for clinic-side e-prescription and virtual NHI card services: API and database design, FHIR data exchange, and integration with NHIA and MOHW platforms.',
        'Before switching to engineering I spent six years at Mackay Memorial Hospital, first in medical education administration and then in the pharmacy department, where I started writing my own tools: a scheduling system, chart-request automation, and dispensing-cabinet analytics. That background makes me ask who will use a system, and in what situation, before I build it.',
        'I am also pursuing an M.S. in Information Management at National Taipei University of Nursing and Health Sciences. My thesis is an on-premise LLM medication recommendation system built on RAG.'
      ]
    }
  }

  return {
    title: '關於我',
    paragraphs: [
      '目前在三軍總醫院參與健康台灣深耕計畫，負責診所端電子處方箋與虛擬健保卡模組的後端開發，日常工作包括 API 與資料庫設計、FHIR 資料交換，以及和健保署、衛福部平台的介接。',
      '轉職前在馬偕紀念醫院待了六年。前五年多做醫學教育行政，後來到藥劑部，開始自己寫工具解決現場問題，排班系統、調閱單自動化、藥櫃數據分析都是那時候做出來的。也因為這段經歷，我寫系統時會先想清楚：誰在用、在什麼情況下用。',
      '目前在國立臺北護理健康大學資訊管理研究所進修，論文做的是地端部署的 LLM 用藥建議系統（RAG），希望把 AI 用在醫院真的用得上的地方。'
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
