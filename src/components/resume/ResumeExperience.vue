<script setup>
import { computed } from 'vue'
import { useLanguage } from '../../composables/useLanguage'

const { currentLang } = useLanguage()

const experiencesZh = [
  {
    id: 1,
    company: '馬偕紀念醫院 · 藥劑部',
    position: '行政管理師',
    period: '2023 — 迄今',
    description: '統籌部門行政管理，並主導資料分析與數位化專案，服務約 37 人之藥事團隊。',
    achievements: [
      '規劃並建置全院抗生素管理儀表板，涵蓋 DOT、DID 用藥密度指標與 WHO AWaRe 分類，整合 Oracle 與 SQL Server 雙資料庫之自動化資料管線',
      '開發 ICU 藥事照護管理工具，以 OCR 技術自動化擷取申報數據，大幅縮減人工作業時間',
      '設計部門出勤管理系統架構（FastAPI、React、PostgreSQL），完成複雜班別規則之系統化'
    ]
  },
  {
    id: 2,
    company: '馬偕紀念醫院 · 醫學教育部',
    position: '行政人員',
    period: '2018 — 2023',
    description: '負責醫學教育行政與教學品質管理，累積醫療機構治理、評鑑作業與跨部門協調之扎實基礎。',
    achievements: []
  }
]

const experiencesEn = [
  {
    id: 1,
    company: 'Mackay Memorial Hospital · Pharmacy Department',
    position: 'Administrative Specialist',
    period: '2023 — Present',
    description:
      'Lead departmental administration and digital projects for a pharmacy team of about 37 people.',
    achievements: [
      'Designed and built a hospital-wide antimicrobial stewardship dashboard covering DOT, DID, and WHO AWaRe, with automated pipelines across Oracle and SQL Server.',
      'Developed an ICU pharmacy care tool using OCR to automate claim data capture and reduce manual work.',
      'Designed a departmental attendance system architecture (FastAPI, React, PostgreSQL) to systematize complex shift rules.'
    ]
  },
  {
    id: 2,
    company: 'Mackay Memorial Hospital · Department of Medical Education',
    position: 'Administrative Staff',
    period: '2018 — 2023',
    description:
      'Managed medical education administration and teaching quality, building a solid foundation in hospital governance, accreditation, and cross-department coordination.',
    achievements: []
  }
]

const sectionTitle = computed(() => (currentLang.value === 'en' ? 'Experience' : '工作經歷'))
const experiences = computed(() => (currentLang.value === 'en' ? experiencesEn : experiencesZh))
</script>

<template>
  <section id="experience" class="experience-section">
    <div class="container">
      <h2 class="section-title">{{ sectionTitle }}</h2>
      <div class="timeline">
        <div
          v-for="exp in experiences"
          :key="exp.id"
          class="timeline-item"
        >
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <div class="experience-header">
              <div>
                <h3 class="position">{{ exp.position }}</h3>
                <h4 class="company">{{ exp.company }}</h4>
              </div>
              <span class="period">{{ exp.period }}</span>
            </div>
            <p class="description">{{ exp.description }}</p>
            <ul v-if="exp.achievements.length" class="achievements">
              <li v-for="(achievement, index) in exp.achievements" :key="index">
                {{ achievement }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style src="../../styles/experience.css"></style>
