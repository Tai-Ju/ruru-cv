<script setup>
import { ref } from 'vue'
import photoUrl from '../../assets/photo.jpg'
import { trackDownload } from '../../utils/analytics'

const isZoomed = ref(false)
const isGeneratingPdf = ref(false)

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
    const resumeElement = document.querySelector('.main-content')
    if (!resumeElement) {
      throw new Error('找不到履歷內容區塊')
    }

    const fileName = 'Tai-Ju-Liu-CV.pdf'
    const html2pdf = (await import('html2pdf.js')).default

    document.body.classList.add('pdf-exporting')

    await html2pdf()
      .set({
        margin: [8, 8, 8, 8],
        filename: fileName,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
          scale: 1.6,
          useCORS: true,
          backgroundColor: '#ffffff',
          scrollY: 0
        },
        jsPDF: {
          unit: 'mm',
          format: 'a4',
          orientation: 'portrait',
          compress: true
        },
        pagebreak: {
          mode: ['css', 'legacy'],
          avoid: ['.resume-topic', '.timeline-item', '.project-card', '.education-item', '.info-block']
        }
      })
      .from(resumeElement)
      .save()

    trackDownload(fileName, 'pdf')
  } catch (error) {
    console.error('[PDF] 產生 PDF 失敗:', error)
    alert('下載 PDF 失敗，請稍後再試。')
  } finally {
    document.body.classList.remove('pdf-exporting')
    isGeneratingPdf.value = false
  }
}
</script>

<template>
  <section id="hero" class="hero-section">
    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">你好，我是 <span class="highlight">劉玳如</span></h1>
          <p class="hero-subtitle">醫務管理 × 軟體開發</p>
          <p class="hero-description">
            擁有 5 年以上醫學中心行政管理經驗，正積極轉型為軟體開發人才。
            以醫療領域專業為基礎，結合程式開發實務能力，致力於將臨床痛點轉化為創新技術解決方案。
          </p>
          <div class="hero-buttons">
            <button type="button" class="btn btn-primary" :disabled="isGeneratingPdf" @click="downloadResumeAsPdf">
              {{ isGeneratingPdf ? 'PDF 產生中...' : '下載 PDF' }}
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
