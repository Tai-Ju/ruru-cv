<script setup>
import { computed, ref } from 'vue'
import photoUrl from '../../assets/profile-20260409.jpg'
import { trackDownload } from '../../utils/analytics'
import { useLanguage } from '../../composables/useLanguage'

const isZoomed = ref(false)
const { currentLang } = useLanguage()

const copy = computed(() => {
  if (currentLang.value === 'en') {
    return {
      title: "Hi, I'm",
      subtitle: 'Backend Engineer · Health Informatics · FHIR',
      description:
        'Backend engineer at Tri-Service General Hospital, working on e-prescription and virtual NHI card services. Six years inside hospitals before that, so I know where real users get stuck once a system goes live.',
      download: 'Download PDF'
    }
  }

  return {
    title: '你好，我是',
    subtitle: '後端工程師｜醫療資訊 · FHIR · 地端 LLM',
    description:
      '在三軍總醫院做電子處方箋與虛擬健保卡的後端開發。之前在醫院做了六年行政與系統開發，很清楚系統上線後，現場的人會卡在哪裡。',
    download: '下載 PDF'
  }
})

const openZoom = () => {
  isZoomed.value = true
}

const closeZoom = () => {
  isZoomed.value = false
}

const resumePdfUrl = `${import.meta.env.BASE_URL}resume.pdf`

const downloadResumeAsPdf = () => {
  trackDownload('Tai-Ju-Liu-CV.pdf', 'resume-pdf')
}
</script>

<template>
  <section id="hero" class="hero-section">
    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">{{ copy.title }} <span class="highlight">劉玳如</span></h1>
          <p class="hero-subtitle">{{ copy.subtitle }}</p>
          <p class="hero-description">{{ copy.description }}</p>
          <div class="hero-buttons">
            <a
              class="btn btn-primary"
              :href="resumePdfUrl"
              download="Tai-Ju-Liu-CV.pdf"
              @click="downloadResumeAsPdf"
            >
              {{ copy.download }}
            </a>
            <a href="https://github.com/Tai-Ju" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
        <div class="hero-image">
          <img
            :src="photoUrl"
            alt="劉玳如"
            class="avatar"
            @click="openZoom"
            title="點擊查看大圖"
          />
        </div>
      </div>
    </div>

    <Transition name="zoom-fade">
      <div v-if="isZoomed" class="photo-modal" @click="closeZoom">
        <div class="modal-content">
          <button class="close-button" @click="closeZoom" aria-label="關閉">×</button>
          <img :src="photoUrl" alt="劉玳如" class="zoomed-photo" @click.stop />
        </div>
      </div>
    </Transition>
  </section>
</template>

<style src="../../styles/hero.css"></style>
