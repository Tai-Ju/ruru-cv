<script setup>
import { computed } from 'vue'
import { useLanguage } from '../../composables/useLanguage'

const { currentLang } = useLanguage()

const educationZh = [
  {
    id: 1,
    school: '國立臺北護理健康大學',
    degree: '資訊管理學系 · 碩士',
    period: '2025/9 — 2027/6（就讀中）',
    description: '研究方向：地端 LLM 用藥建議系統',
    achievements: []
  },
  {
    id: 2,
    school: '慈濟大學',
    degree: '醫務管理系 · 四技',
    period: '2014/9 — 2017/6',
    description: '',
    achievements: []
  }
]

const certificationsZh = [
  '醫學資訊管理師（社團法人台灣醫學資訊學會｜醫資證（管）1052 字第 538 號）',
  'AI 應用規劃師 - 初級能力鑑定（iPAS 經濟部產業人才能力鑑定）',
  'TQC 資訊科技 Python（TQC-DK）'
]

const internationalExperienceZh = [
  { location: '澳洲馬特醫院', type: '臨床見習', period: '2017/08' },
  { location: '中國蘇州慈濟', type: '實習交流', period: '2017/07' },
  { location: '英國坎伯里大學', type: '語言交換', period: '2014/06' }
]

const trainingZh = [
  { title: '臺大資工系統訓練班', items: ['Node.js & MongoDB 後端開發 (2025)', 'Python 程式設計進階 (2021-2025)'] }
]

const educationEn = [
  {
    id: 1,
    school: 'National Taipei University of Nursing and Health Sciences',
    degree: 'M.S. in Information Management',
    period: '2025/9 — 2027/6 (In progress)',
    description: 'Research focus: On-premise LLM medication recommendation system',
    achievements: []
  },
  {
    id: 2,
    school: 'Tzu Chi University',
    degree: 'B.S. in Healthcare Administration',
    period: '2014/9 — 2017/6',
    description: '',
    achievements: []
  }
]

const certificationsEn = [
  'Healthcare Informatics Manager (TAMI · Cert. No. 1052-538)',
  'AI Application Planner — Elementary (iPAS, MOEA)',
  'TQC Information Technology Python (TQC-DK)'
]

const internationalExperienceEn = [
  { location: 'Mater Hospital, Australia', type: 'Clinical Observation', period: '2017/08' },
  { location: 'Tzu Chi, Suzhou (China)', type: 'Internship Exchange', period: '2017/07' },
  { location: 'Canterbury, UK', type: 'Language Exchange', period: '2014/06' }
]

const trainingEn = [
  { title: 'NTU CS Professional Program', items: ['Node.js & MongoDB Backend Development (2025)', 'Advanced Python Programming (2021-2025)'] }
]

const copy = computed(() => {
  if (currentLang.value === 'en') {
    return {
      title: 'Education & Background',
      eduTitle: 'Education',
      certTitle: 'Certifications',
      intlTitle: 'International Experience',
      trainingTitle: 'Professional Training'
    }
  }

  return {
    title: '學歷與背景',
    eduTitle: '學歷',
    certTitle: '專業認證',
    intlTitle: '國際經歷',
    trainingTitle: '專業進修'
  }
})

const education = computed(() => (currentLang.value === 'en' ? educationEn : educationZh))
const certifications = computed(() => (currentLang.value === 'en' ? certificationsEn : certificationsZh))
const internationalExperience = computed(() => (currentLang.value === 'en' ? internationalExperienceEn : internationalExperienceZh))
const training = computed(() => (currentLang.value === 'en' ? trainingEn : trainingZh))
</script>

<template>
  <section id="education" class="education-section">
    <div class="container">
      <h2 class="section-title">{{ copy.title }}</h2>

      <div class="education-main">
        <h3 class="subsection-title">{{ copy.eduTitle }}</h3>
        <div class="education-grid">
          <div
            v-for="edu in education"
            :key="edu.id"
            class="education-item"
          >
            <div class="education-icon">🎓</div>
            <div class="education-details">
              <div class="education-header">
                <div>
                  <h4 class="degree">{{ edu.degree }}</h4>
                  <h5 class="school">{{ edu.school }}</h5>
                </div>
                <span class="period">{{ edu.period }}</span>
              </div>
              <p v-if="edu.description" class="description">{{ edu.description }}</p>
              <ul v-if="edu.achievements.length" class="achievements">
                <li v-for="(achievement, index) in edu.achievements" :key="index">
                  {{ achievement }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="additional-info-grid">
        <div class="info-block">
          <h3 class="subsection-title">{{ copy.certTitle }}</h3>
          <div class="info-list">
            <div v-for="cert in certifications" :key="cert" class="info-item">
              <span class="info-icon">📜</span>
              <span class="info-text">{{ cert }}</span>
            </div>
          </div>
        </div>

        <div class="info-block">
          <h3 class="subsection-title">{{ copy.intlTitle }}</h3>
          <div class="info-list">
            <div v-for="exp in internationalExperience" :key="exp.location" class="info-item">
              <span class="info-icon">🌍</span>
              <div class="info-details">
                <div class="info-text">{{ exp.location }}</div>
                <div class="info-subtitle">{{ exp.type }} ({{ exp.period }})</div>
              </div>
            </div>
          </div>
        </div>

        <div class="info-block">
          <h3 class="subsection-title">{{ copy.trainingTitle }}</h3>
          <div class="info-list">
            <div v-for="train in training" :key="train.title" class="info-item-block">
              <span class="info-icon">📚</span>
              <div class="info-details">
                <div class="info-text">{{ train.title }}</div>
                <ul class="info-sublist">
                  <li v-for="item in train.items" :key="item">{{ item }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style src="../../styles/education.css"></style>
