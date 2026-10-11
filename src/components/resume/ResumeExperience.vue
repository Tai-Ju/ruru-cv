<script setup>
import { computed } from 'vue'
import { useLanguage } from '../../composables/useLanguage'

const { currentLang } = useLanguage()

const experiencesZh = [
  {
    id: 1,
    company: '三軍總醫院',
    position: '後端工程師',
    period: '2026/8 — 迄今',
    description: '參與健康台灣深耕計畫，負責診所端數位應用服務之後端系統設計、開發與維護。',
    achievements: [
      '配合健康台灣深耕計畫，負責診所端數位應用服務（電子處方箋、虛擬健保卡、AI 輔助工具等）之後端系統設計、開發與維護',
      '依據技術規格與使用者需求，規劃並實作系統架構、RESTful API 及資料庫結構，確保服務穩定性、擴充性與效能',
      '負責與健保署、衛福部相關平台及醫院／診所 HIS 系統之介接，處理 FHIR、HL7 等醫療資料交換',
      '撰寫及維護技術文件（API 規格書、系統架構圖、資料流程說明），配合技術文件審查並依意見修訂',
      '執行單元測試、整合測試與技術驗證，依結果與使用者回饋進行問題排除、功能調整與效能優化',
      '落實資訊安全及個人資料保護規範，建置權限控管、資料加密、存取稽核日誌等安全機制',
      '配合專案經理回報開發進度，參與需求訪談與技術會議，協助跨單位（醫院、診所、系統廠商）技術溝通協調'
    ]
  },
  {
    id: 2,
    company: '馬偕紀念醫院 · 藥劑部',
    position: '技術員｜藥劑部技術開發',
    period: '2025/1 — 2026/8',
    description: '於醫療場域主導多項技術開發與數據分析專案，涵蓋 AI/LLM、資料工程、系統開發與醫療資訊標準整合。',
    achievements: [
      '地端 LLM 用藥建議系統｜Python · Ollama · ChromaDB · RAG：整合 LLaMA3／Qwen3／Gemma3 與向量資料庫，支援中英混合查詢，全程離線運行',
      'FHIR 電子處方箋系統｜Electron · React · TypeScript：依 TW Core EMR-IG 2.5 實作 FHIR R4 電子處方箋完整 Profile',
      'ADC 智慧藥櫃數據分析｜Power BI：分析逾 30 萬筆 ADC Log，建立庫存成效視覺化儀表板，支援藥品補給決策',
      '住院藥局排班系統｜Google Apps Script · Google Sheets：自動化排班、出勤查詢與加班費試算，降低薪資核算錯誤率',
      '學術文獻自動化系統｜n8n · ScienceDirect／Web of Science API：建立自動化文獻蒐集與去重流程',
      '調閱單電子化自動處理系統｜AutoHotkey · Python：端到端自動化 Print-to-PDF、合併、清理與雙重備份，自動化率約 95%'
    ]
  },
  {
    id: 3,
    company: '馬偕紀念醫院',
    position: '管理師｜醫學教育行政',
    period: '2019/8 — 2025/1',
    description:
      '歷任醫學教育部、內科部、婦產部、神經外科管理師，負責住院醫師教學排程、師資培育行政協調、醫院評鑑數據整合（TMAC／ACGME-I）及跨部門教學量能分析。',
    achievements: []
  }
]

const experiencesEn = [
  {
    id: 1,
    company: 'Tri-Service General Hospital',
    position: 'Backend Engineer',
    period: '2026/8 — Present',
    description:
      'Contribute to the Healthy Taiwan Deep Cultivation Program, designing and maintaining backend systems for clinic-side digital services.',
    achievements: [
      'Design, develop, and maintain backend services for clinic digital applications such as e-prescriptions, virtual NHI cards, and AI-assisted tools.',
      'Plan and implement system architecture, RESTful APIs, and database structures for stability, scalability, and performance.',
      'Integrate with NHIA, MOHW platforms, and hospital/clinic HIS systems using FHIR and HL7 standards.',
      'Write and maintain technical documentation including API specs, architecture diagrams, and data-flow descriptions.',
      'Perform unit/integration testing and technical validation; fix issues and optimize based on feedback.',
      'Implement information security and personal-data protection controls such as access control, encryption, and audit logs.',
      'Report progress to the project manager and support cross-organization technical coordination.'
    ]
  },
  {
    id: 2,
    company: 'Mackay Memorial Hospital · Pharmacy Department',
    position: 'Technical Specialist · Pharmacy Tech Development',
    period: '2025/1 — 2026/8',
    description:
      'Led technical development and analytics projects across AI/LLM, data engineering, systems, and health-informatics standards.',
    achievements: [
      'On-premise LLM medication recommendation system with Python, Ollama, ChromaDB, and RAG; offline bilingual query support.',
      'FHIR e-prescription desktop app with Electron, React, and TypeScript aligned to TW Core EMR-IG 2.5.',
      'ADC smart-cabinet analytics in Power BI over 300k+ log records to support replenishment decisions.',
      'Pharmacy scheduling automation with Google Apps Script and Sheets for shifts, attendance, and overtime calculation.',
      'Literature automation pipeline with n8n and ScienceDirect / Web of Science APIs.',
      'Chart-request digitization automation with AutoHotkey and Python: Print-to-PDF capture, merge, cleanup, and dual backup (~95% automation).'
    ]
  },
  {
    id: 3,
    company: 'Mackay Memorial Hospital',
    position: 'Administrator · Medical Education',
    period: '2019/8 — 2025/1',
    description:
      'Served Medical Education, Internal Medicine, OB/GYN, and Neurosurgery units; managed resident teaching schedules, faculty development, accreditation data (TMAC/ACGME-I), and cross-department teaching capacity analysis.',
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
