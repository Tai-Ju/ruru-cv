<script setup>
import { computed, ref } from 'vue'
import photoUrl from '../../assets/profile-20260409.jpg'
import { trackDownload } from '../../utils/analytics'
import { useLanguage } from '../../composables/useLanguage'

const isZoomed = ref(false)
const isGeneratingPdf = ref(false)
const { currentLang } = useLanguage()

const copy = computed(() => {
  if (currentLang.value === 'en') {
    return {
      title: "Hi, I'm",
      subtitle: 'Healthcare Administration × Software Development',
      description:
        'With over 6 years of experience in medical center administration, I am actively transitioning into software development and building practical solutions for real healthcare workflows.',
      download: 'Download PDF',
      downloading: 'Preparing Print...'
    }
  }

  return {
    title: '你好，我是',
    subtitle: '醫務管理 × 軟體開發',
    description:
      '擁有 6 年以上醫學中心行政管理經驗，正積極轉型為軟體開發人才。以醫療領域專業為基礎，結合程式開發實務能力，致力於將臨床痛點轉化為創新技術解決方案。',
    download: '下載 PDF',
    downloading: '準備列印中...'
  }
})

const openZoom = () => {
  isZoomed.value = true
}

const closeZoom = () => {
  isZoomed.value = false
}

const downloadResumeAsPdf = async () => {
  if (isGeneratingPdf.value) return

  isGeneratingPdf.value = true
  try {
    const fileName = 'Tai-Ju-Liu-CV.pdf'
    const pdfPageUrl = '/cv-pdf.html'
    const newWindow = window.open(pdfPageUrl, '_blank', 'noopener,noreferrer')
    if (!newWindow) {
      window.location.href = pdfPageUrl
    }
    trackDownload(fileName, 'print-layout-pdf')
  } catch (error) {
    console.error('[PDF] 產生 PDF 失敗:', error)
    alert('下載 PDF 失敗，請稍後再試。')
  } finally {
    isGeneratingPdf.value = false
  }
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
            <button type="button" class="btn btn-primary" :disabled="isGeneratingPdf" @click="downloadResumeAsPdf">
              {{ isGeneratingPdf ? copy.downloading : copy.download }}
            </button>
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

    <!-- 照片放大模態框 -->
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
