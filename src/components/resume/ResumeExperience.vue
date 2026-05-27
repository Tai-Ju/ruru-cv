<script setup>
import { computed } from 'vue'
import { useLanguage } from '../../composables/useLanguage'

const { currentLang } = useLanguage()

const experiencesZh = [
  {
    id: 1,
    company: '馬偕紀念醫院',
    position: '臨床藥學科技術員',
    period: '2025 - 至今',
    description:
      '負責藥劑部臨床數據視覺化、感染管制指標與院內知識系統建置，運用 Power BI 與本地部署 LLM 支援藥事臨床決策。',
    achievements: [
      '開發 ADC 智慧藥櫃監控 Power BI 儀表板，深度分析設備 Log 數據，協助優化藥品庫存管理效率',
      '開發 ICU 重症照護 / TDM 治療藥物監測 Power BI 儀表板，支援藥師臨床決策',
      '開發 抗生素管理 Power BI 儀表板，計算 DDD/千住院人日指標，支援感染管制委員會定期回報',
      '建置院內本地 LLM RAG 系統，提供藥物適應症、劑量建議與交互作用查詢，採本地部署確保病人資料不外流',
      '使用 Google Apps Script 整合 Google Sheets，開發員工打卡介面與加班費自動計算系統',
      '推動調閱單無紙化，運用 Python 與 AutoHotkey 建立電子化調閱單流程，減少紙本作業'
    ]
  },
  {
    id: 2,
    company: '馬偕紀念醫院',
    position: '醫教部管理師',
    period: '2019 - 2025',
    description:
      '負責住院醫師工時、教學示範病房排程與教師培育相關系統開發維護，以數位化工具優化醫教行政流程。',
    achievements: [
      '自主開發住院醫師工時管理系統（Excel VBA），自動化排班與工時統計，確保工時合規率達 100%',
      '建置教學示範病房課表排程系統，整合多科室教學需求與場地資源調度',
      '負責教師培育系統日常維護與資料管理，支援教師評核與進修紀錄追蹤',
      '整合 KM 知識管理系統與人資數據庫，建立自動化 ETL 流程，作業效率提升超過 90%'
    ]
  }
]

const experiencesEn = [
  {
    id: 1,
    company: 'Mackay Memorial Hospital',
    position: 'Clinical Pharmacy Technology Specialist',
    period: '2025 - Present',
    description:
      'Lead clinical data visualization, infection-control metrics, and on-prem knowledge systems using Power BI and locally deployed LLMs to support pharmacy clinical decisions.',
    achievements: [
      'Built an ADC smart-cabinet Power BI dashboard with deep device log analysis to improve inventory management efficiency.',
      'Built ICU critical care and TDM monitoring Power BI dashboards to support pharmacist clinical decisions.',
      'Built an antimicrobial stewardship Power BI dashboard (DDD per 1,000 patient-days) for IPC committee reporting.',
      'Deployed an on-premise LLM RAG system for indications, dosing, and interaction queries while keeping patient data local.',
      'Used Google Apps Script with Google Sheets to build staff check-in UI and automated overtime calculation.',
      'Led a paperless retrieval initiative using Python and AutoHotkey to digitize the workflow and reduce paper use.'
    ]
  },
  {
    id: 2,
    company: 'Mackay Memorial Hospital',
    position: 'Medical Education Administrator',
    period: '2019 - 2025',
    description:
      'Developed and maintained systems for resident duty hours, teaching ward scheduling, and faculty development, optimizing medical education workflows with digital tools.',
    achievements: [
      'Independently built a resident duty-hour system (Excel VBA) with automated scheduling and statistics, supporting 100% compliance.',
      'Built a demonstration teaching ward timetable system coordinating multi-department needs and room resources.',
      'Maintained the faculty development system and data to support evaluation and continuing education tracking.',
      'Integrated KM and HR databases with an automated ETL workflow, improving operational efficiency by over 90%.'
    ]
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
