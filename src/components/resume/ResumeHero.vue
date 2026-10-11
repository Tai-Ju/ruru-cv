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
      subtitle: 'Healthcare Administration · Software Development',
      description:
        'Administrative Specialist at Mackay Memorial Hospital Pharmacy Department. With eight years in healthcare institutions, I combine data engineering and software development to turn complex clinical needs into reliable digital solutions.',
      download: 'Download PDF'
    }
  }

  return {
    title: '你好，我是',
    subtitle: '行政管理師｜醫療 × 資料工程',
    description:
      '馬偕紀念醫院藥劑部行政管理師。八年醫療機構歷練，結合資料工程與軟體開發能力，將醫療現場的複雜需求，轉化為嚴謹可靠的數位解決方案。',
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
