<script setup>
import { computed } from 'vue'
import { useLanguage } from '../../composables/useLanguage'

const { currentLang } = useLanguage()

const skillCategoriesZh = [
  {
    title: 'AI 與 LLM',
    skills: [
      { name: 'RAG / 地端 LLM', experience: 'Ollama、ChromaDB、離線部署' },
      { name: '模型整合', experience: 'LLaMA3、Qwen3、Gemma3 多模型串接' },
      { name: 'Python 資料處理', experience: 'pandas、scikit-learn' }
    ]
  },
  {
    title: '後端與系統串接',
    skills: [
      { name: 'Python / Django', experience: 'RESTful API、資料庫設計' },
      { name: 'FHIR / HL7', experience: '電子處方箋、健保署與 HIS 介接' },
      { name: 'Web 與工具', experience: 'React、TypeScript、Docker、Git' }
    ]
  },
  {
    title: '醫療領域',
    skills: [
      { name: '醫院流程', experience: '醫務管理、藥事作業' },
      { name: '評鑑與法規', experience: 'TMAC／ACGME-I 評鑑、個資規範' },
      { name: '流程自動化', experience: 'Python、AutoHotkey' }
    ]
  }
]

const skillCategoriesEn = [
  {
    title: 'AI & LLM',
    skills: [
      { name: 'RAG / Local LLM', experience: 'Ollama, ChromaDB, offline deployment' },
      { name: 'Model Integration', experience: 'LLaMA3, Qwen3, Gemma3 multi-model setup' },
      { name: 'Python Data Work', experience: 'pandas, scikit-learn' }
    ]
  },
  {
    title: 'Backend & Integration',
    skills: [
      { name: 'Python / Django', experience: 'RESTful APIs, database design' },
      { name: 'FHIR / HL7', experience: 'E-prescriptions, NHIA and HIS integration' },
      { name: 'Web & Tooling', experience: 'React, TypeScript, Docker, Git' }
    ]
  },
  {
    title: 'Healthcare Domain',
    skills: [
      { name: 'Hospital Operations', experience: 'Healthcare admin, pharmacy workflows' },
      { name: 'Accreditation & Compliance', experience: 'TMAC / ACGME-I, personal-data rules' },
      { name: 'Workflow Automation', experience: 'Python, AutoHotkey' }
    ]
  }
]

const sectionTitle = computed(() => (currentLang.value === 'en' ? 'Skills' : '專業技能'))
const skillCategories = computed(() => (currentLang.value === 'en' ? skillCategoriesEn : skillCategoriesZh))
</script>

<template>
  <section id="skills" class="skills-section">
    <div class="container">
      <h2 class="section-title">{{ sectionTitle }}</h2>
      <div class="skills-grid">
        <div
          v-for="(category, categoryIndex) in skillCategories"
          :key="category.title"
          class="skill-category"
          :class="{ 'is-primary': categoryIndex === 0 }"
        >
          <h3 class="category-title">{{ category.title }}</h3>
          <div class="skills-list">
            <div
              v-for="skill in category.skills"
              :key="skill.name"
              class="skill-item"
            >
              <span class="skill-name">{{ skill.name }}</span>
              <span class="skill-experience">{{ skill.experience }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style src="../../styles/skills.css"></style>
