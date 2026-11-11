<script setup>
import { computed } from 'vue'
import { useLanguage } from '../../composables/useLanguage'

const { currentLang } = useLanguage()

const copy = computed(() => {
  if (currentLang.value === 'en') {
    return {
      title: 'About Me',
      paragraphs: [
        'I want to build AI that hospitals can actually use. My master thesis is an on-premise LLM medication recommendation system that uses RAG over open-source models and drug references, running fully offline so data never leaves the hospital.',
        'At Tri-Service General Hospital I work on the Healthy Taiwan Deep Cultivation Program, building the backend for clinic-side e-prescription and virtual NHI card services: APIs, database design, FHIR data exchange, and NHIA/MOHW integrations. Any AI that goes live in a hospital has to plug into systems like these.',
        'Before that I spent six years at Mackay Memorial Hospital, first in medical education administration and then in the pharmacy department, where I started writing my own tools. That background makes me ask who will use a system, and in what situation, before I build it.'
      ]
    }
  }

  return {
    title: '關於我',
    paragraphs: [
      '我想做的是醫院真的用得上的 AI。碩士論文做的是地端部署的 LLM 用藥建議系統：以 RAG 架構串接開源模型與藥品資料，全程離線運行，資料不必送出院外。',
      '目前在三軍總醫院參與健康台灣深耕計畫，負責診所端電子處方箋與虛擬健保卡模組的後端開發，包括 API 與資料庫設計、FHIR 資料交換，以及和健保署、衛福部平台的介接。AI 要在醫院上線，最後都得接上這些系統。',
      '轉職前在馬偕紀念醫院待了六年，前五年多做醫學教育行政，後來到藥劑部開始自己寫工具解決現場問題。這段經歷讓我做系統前會先想清楚：誰在用、在什麼情況下用。'
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
