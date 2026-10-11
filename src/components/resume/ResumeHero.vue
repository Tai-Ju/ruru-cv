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
      subtitle: 'Backend Engineer · Healthcare × Data Engineering',
      description:
        'Backend engineer at Tri-Service General Hospital, working on the Healthy Taiwan Deep Cultivation Program. With six years of hospital practice and applied RAG experience, I bridge clinical needs and technical delivery.',
      download: 'Download PDF'
    }
  }

  return {
    title: '你好，我是',
    subtitle: '後端工程師｜醫療 × 資料工程',
    description:
      '現任三軍總醫院後端工程師，參與健康台灣深耕計畫。此前具備六年馬偕紀念醫院實務，研究地端 LLM 用藥建議系統，擅於橋接醫療現場需求與技術開發。',
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
