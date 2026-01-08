<script setup>
const experiences = [
  {
    id: 1,
    company: '馬偕紀念醫院',
    position: '臨床藥學科技術員',
    period: '2025 - 至今',
    description: '負責藥劑部智慧化系統開發與數位轉型專案，運用數據分析與自動化技術提升藥事作業效率。',
    achievements: [
      '智慧藥櫃(ADC)成效分析系統開發：運用 Power BI 建構智慧監控儀表板，深度分析設備 Log 數據，成功協助優化藥品庫存管理效率',
      '藥劑部數位化轉型專案：使用 Google Apps Script 整合 Google Sheets，開發直觀的員工打卡介面與加班費自動計算邏輯',
      '調閱單無紙化專案：運用 Python 數據處理與 AutoHotkey 操作自動化，推動醫療文件數位化流程，建立電子化調閱單系統，提升作業效率並減少紙本作業'
    ]
  },
  {
    id: 2,
    company: '馬偕紀念醫院',
    position: '醫教部管理師',
    period: '2019 - 2025',
    description: '負責住院醫師教育訓練管理系統開發與維護，透過數位化工具優化教學行政流程。',
    achievements: [
      '住院醫師工時管理系統自主開發：運用 Excel VBA 開發自動化排班與工時檢核系統，確保工時合規率達 100%',
      '教學點數整合平台建置：整合 KM 知識管理系統與人資數據庫，建立自動化 ETL 數據流程，效率提升超過 90%'
    ]
  }
]
</script>

<template>
  <section id="experience" class="experience-section">
    <div class="container">
      <h2 class="section-title">工作經歷</h2>
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
            <ul class="achievements">
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
