<script setup>
import { computed } from 'vue'
import { useLanguage } from '../../composables/useLanguage'

const { currentLang } = useLanguage()

const copy = computed(() => {
  if (currentLang.value === 'en') {
    return {
      title: 'Contact',
      quick: 'Quick Contact',
      note: 'Feel free to reach out for opportunities.'
    }
  }

  return {
    title: '聯絡方式',
    quick: '快速聯繫',
    note: '若有合作機會，歡迎來信聯絡。'
  }
})
</script>

<template>
  <section id="contact" class="contact-section">
    <div class="container">
      <h2 class="section-title">{{ copy.title }}</h2>
      <div class="contact-grid">
        <div class="contact-intro">
          <h3>{{ copy.quick }}</h3>
          <p class="contact-note">{{ copy.note }}</p>
        </div>
        <div class="contact-list">
          <p class="contact-row">
            <span class="contact-label">Email<span class="visually-hidden">：</span></span>
            <a href="mailto:lulu@lufolio.dev">lulu@lufolio.dev</a>
          </p>
          <p class="contact-row">
            <span class="contact-label">GitHub<span class="visually-hidden">：</span></span>
            <a href="https://github.com/Tai-Ju" target="_blank" rel="noopener noreferrer">@Tai-Ju</a>
          </p>
          <p class="contact-row">
            <span class="contact-label">LinkedIn<span class="visually-hidden">：</span></span>
            <a
              href="https://www.linkedin.com/in/tai-ju-liu/"
              target="_blank"
              rel="noopener noreferrer"
            >tai-ju-liu</a>
          </p>
          <p class="contact-row">
            <span class="contact-label">Hugging Face<span class="visually-hidden">：</span></span>
            <a
              href="https://huggingface.co/ruru0116"
              target="_blank"
              rel="noopener noreferrer"
            >@ruru0116</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style src="../../styles/contact.css"></style>
