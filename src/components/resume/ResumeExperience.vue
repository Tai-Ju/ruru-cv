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
    description: '參與健康台灣深耕計畫，負責診所端數位服務的後端開發與維護。',
    achievements: [
      '負責電子處方箋、虛擬健保卡等診所端服務的後端開發，包含 RESTful API 與資料庫設計',
      '處理 FHIR／HL7 資料交換，介接健保署、衛福部平台及醫院／診所 HIS',
      '撰寫 API 規格書、系統架構圖與資料流程文件，並依審查意見修訂',
      '負責單元測試與整合測試，依測試結果和使用者回饋除錯、調整功能',
      '依資安與個資規範實作權限控管、資料加密與存取稽核紀錄',
      '參與需求訪談與技術會議，協調醫院、診所與系統廠商之間的技術對接'
    ]
  },
  {
    id: 2,
    company: '馬偕紀念醫院 · 藥劑部',
    position: '技術員｜藥劑部技術開發',
    period: '2025/1 — 2026/8',
    description: '在藥劑部從現場問題出發，自己動手開發工具與系統，範圍從 LLM 應用、流程自動化到排班系統。',
    achievements: [
      '地端 LLM 用藥建議系統｜Python · Ollama · ChromaDB：以 RAG 架構串接多個開源模型，可中英混合查詢，完全離線運行',
      'FHIR 電子處方箋系統｜Electron · React · TypeScript：依 TW Core EMR-IG 2.5 實作 FHIR R4 電子處方箋 Profile',
      '住院藥局排班系統｜Google Apps Script：排班、出勤查詢與加班費試算自動化，減少人工核算錯誤',
      '調閱單電子化｜AutoHotkey · Python：把每天的列印、合併、備份流程自動化，約 95% 不需人工處理',
      'ADC 智慧藥櫃數據分析｜Power BI：整理逾 30 萬筆 ADC Log，做成庫存儀表板供補藥決策參考',
      '文獻自動蒐集流程｜n8n：串接 ScienceDirect／Web of Science API，自動抓取並去除重複文獻'
    ]
  },
  {
    id: 3,
    company: '馬偕紀念醫院',
    position: '管理師｜醫學教育行政',
    period: '2019/8 — 2025/1',
    description:
      '先後支援醫學教育部、內科部、婦產部與神經外科，負責住院醫師教學排程、師資培育行政、評鑑資料整理（TMAC／ACGME-I）與教學量能統計。',
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
      'Built tools and systems in the pharmacy department, starting from problems I saw on the floor: LLM applications, workflow automation, and scheduling.',
    achievements: [
      'On-premise LLM medication recommendation system (Python, Ollama, ChromaDB) using RAG; bilingual queries, fully offline.',
      'FHIR e-prescription desktop app (Electron, React, TypeScript) implementing FHIR R4 profiles per TW Core EMR-IG 2.5.',
      'Inpatient pharmacy scheduling tool (Google Apps Script) for shifts, attendance, and overtime calculation.',
      'Chart-request automation (AutoHotkey, Python) covering daily printing, merging, and backup; about 95% of steps now run without manual work.',
      'ADC dispensing-cabinet analytics in Power BI over 300k+ log records to support restocking decisions.',
      'Literature collection pipeline with n8n and the ScienceDirect / Web of Science APIs, with automatic de-duplication.'
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

// 「名稱｜技術：說明」格式的條列拆成三段，方便掃讀；格式不符者維持原樣
const parseAchievement = (text) => {
  const match = text.match(/^([^｜：]+)(｜)([^：]+)(：)(.+)$/)
  if (!match) return { text }
  return { text, name: match[1], sep1: match[2], stack: match[3], sep2: match[4], detail: match[5] }
}

const experiences = computed(() =>
  (currentLang.value === 'en' ? experiencesEn : experiencesZh).map((exp) => {
    const items = exp.achievements.map(parseAchievement)
    return { ...exp, items, isStructured: items.length > 0 && items.every((item) => item.name) }
  })
)
</script>

<template>
  <section id="experience" class="experience-section">
    <div class="container">
      <h2 class="section-title">{{ sectionTitle }}</h2>
      <div class="ledger">
        <div
          v-for="(exp, expIndex) in experiences"
          :key="exp.id"
          class="ledger-item"
          :class="{ 'is-current': expIndex === 0, 'is-brief': !exp.items.length }"
        >
          <div class="ledger-when">
            <span class="period">{{ exp.period }}</span>
          </div>
          <div class="ledger-body">
            <div class="experience-header">
              <h3 class="position">{{ exp.position }}</h3>
              <h4 class="company">{{ exp.company }}</h4>
            </div>
            <p class="description">{{ exp.description }}</p>
            <ul v-if="exp.items.length" class="achievements" :class="{ 'is-structured': exp.isStructured }">
              <li v-for="(item, index) in exp.items" :key="index">
                <template v-if="exp.isStructured">
                  <strong class="ach-name">{{ item.name }}</strong>
                  <span class="visually-hidden">{{ item.sep1 }}</span>
                  <span class="ach-stack">{{ item.stack }}</span>
                  <span class="visually-hidden">{{ item.sep2 }}</span>
                  <span class="ach-detail">{{ item.detail }}</span>
                </template>
                <template v-else>{{ item.text }}</template>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style src="../../styles/experience.css"></style>
