<script setup>
import { computed } from 'vue'
import { useLanguage } from '../../composables/useLanguage'

const githubGraphUrl = 'https://ghchart.rshah.org/Tai-Ju'
const { currentLang } = useLanguage()

const copy = computed(() => {
  if (currentLang.value === 'en') {
    return {
      title: 'Contact',
      quick: 'Quick Contact',
      note: 'Feel free to reach out for opportunities.',
      graph: 'GitHub Activity'
    }
  }

  return {
    title: '聯絡方式',
    quick: '快速聯繫',
    note: '若有合作機會，歡迎來信聯絡。',
    graph: 'GitHub 活動圖'
  }
})
</script>

<template>
  <section id="contact" class="contact-section">
    <div class="container">
      <h2 class="section-title">{{ copy.title }}</h2>
      <div class="contact-grid">
        <div class="contact-card">
          <h3>{{ copy.quick }}</h3>
          <p>Email：<a href="mailto:lk117868@gmail.com">lk117868@gmail.com</a></p>
          <p>GitHub：<a href="https://github.com/Tai-Ju" target="_blank" rel="noopener noreferrer">@Tai-Ju</a></p>
          <p>
            Hugging Face：<a
              href="https://huggingface.co/ruru0116"
              target="_blank"
              rel="noopener noreferrer"
            >@ruru0116</a>
          </p>
          <p class="contact-note">{{ copy.note }}</p>
        </div>
        <div class="contact-card">
          <h3>{{ copy.graph }}</h3>
          <img :src="githubGraphUrl" alt="Tai-Ju GitHub contribution graph" class="github-graph" />
        </div>
      </div>
    </div>
  </section>
</template>

<style src="../../styles/contact.css"></style>
