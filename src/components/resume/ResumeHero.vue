<script setup>
import { ref } from 'vue'
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'
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

    const canvas = await html2canvas(resumeElement, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff'
    })

    const pdf = new jsPDF('p', 'mm', 'a4')
    const pageWidth = pdf.internal.pageSize.getWidth()
    const pageHeight = pdf.internal.pageSize.getHeight()
    const imageWidth = pageWidth
    const imageHeight = (canvas.height * imageWidth) / canvas.width
    const imageData = canvas.toDataURL('image/jpeg', 0.95)

    let heightLeft = imageHeight
    let position = 0

    pdf.addImage(imageData, 'JPEG', 0, position, imageWidth, imageHeight)
    heightLeft -= pageHeight

    while (heightLeft > 0) {
      position = heightLeft - imageHeight
      pdf.addPage()
      pdf.addImage(imageData, 'JPEG', 0, position, imageWidth, imageHeight)
      heightLeft -= pageHeight
    }

    const fileName = 'Tai-Ju-Liu-CV.pdf'
    pdf.save(fileName)
    trackDownload(fileName, 'pdf')
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
