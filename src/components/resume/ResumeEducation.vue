<script setup>
const education = [
  {
    id: 1,
    school: '國立臺北護理健康大學',
    degree: '資訊管理系 碩士班',
    period: '2025 - 在學中',
    description: '專注於醫療資訊系統、軟體開發與數據分析領域，結合醫療專業背景進行跨領域研究。',
    achievements: [
      '修習系統分析與設計、資料庫管理、程式設計等課程',
      '完成多項程式開發專案實作',
      '參與醫療資訊系統相關研究',
      '取得 TQC+ Python 3 程式語言認證'
    ]
  },
  {
    id: 2,
    school: '慈濟大學',
    degree: '醫務管理系 學士',
    period: '2013 - 2017',
    description: '學習醫務管理、醫療品質管理、醫療資訊系統等專業課程，建立紮實的醫療領域知識基礎。',
    achievements: [
      '熟悉醫療作業流程與管理制度',
      '學習醫療資訊系統操作與應用',
      '參與醫院實習與專案實作',
      '培養問題分析與解決能力'
    ]
  }
]

const certifications = [
  'TQC+ Python 3 認證',
  '醫資管理師',
  '軟體應用丙級'
]

const internationalExperience = [
  { location: '澳洲馬特醫院', type: '臨床見習', period: '2017/08' },
  { location: '中國蘇州慈濟', type: '實習交流', period: '2017/07' },
  { location: '英國坎伯里大學', type: '語言交換', period: '2014/06' }
]

const training = [
  { title: '臺大資工系統訓練班', items: ['Node.js & MongoDB 後端開發 (2025)', 'Python 程式設計進階 (2021-2025)'] }
]

const competitions = [
  { title: 'AI 創新應用競賽', project: '藥品影像辨識系統', status: '2025 備賽中' },
  { title: 'Power BI 數據分析競賽', project: '智慧藥櫃分析平台', year: '2025' },
  { title: 'Power BI 數據分析競賽', project: 'Penny 教學整合平台', year: '2024' }
]
</script>

<template>
  <section id="education" class="education-section">
    <div class="container">
      <h2 class="section-title">學歷與經歷</h2>

      <!-- 學歷 -->
      <div class="education-main">
        <h3 class="subsection-title">學歷背景</h3>
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
              <p class="description">{{ edu.description }}</p>
              <ul class="achievements">
                <li v-for="(achievement, index) in edu.achievements" :key="index">
                  {{ achievement }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- 四個區塊並排 -->
      <div class="additional-info-grid">
        <!-- 專業認證 -->
        <div class="info-block">
          <h3 class="subsection-title">專業認證</h3>
          <div class="info-list">
            <div v-for="cert in certifications" :key="cert" class="info-item">
              <span class="info-icon">📜</span>
              <span class="info-text">{{ cert }}</span>
            </div>
          </div>
        </div>

        <!-- 國際經歷 -->
        <div class="info-block">
          <h3 class="subsection-title">國際經歷</h3>
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

        <!-- 專業進修 -->
        <div class="info-block">
          <h3 class="subsection-title">專業進修</h3>
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

        <!-- 創新競賽 -->
        <div class="info-block">
          <h3 class="subsection-title">創新競賽</h3>
          <div class="info-list">
            <div v-for="comp in competitions" :key="comp.project" class="info-item">
              <span class="info-icon">🏆</span>
              <div class="info-details">
                <div class="info-text">{{ comp.title }}</div>
                <div class="info-subtitle">{{ comp.project }} ({{ comp.status || comp.year }})</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style src="../../styles/education.css"></style>
