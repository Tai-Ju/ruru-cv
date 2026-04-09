<script setup>
const githubGraphUrl = 'https://ghchart.rshah.org/Tai-Ju'
</script>

<template>
  <section id="contact" class="contact-section">
    <div class="container">
      <h2 class="section-title">聯絡方式</h2>
      <div class="contact-grid">
        <div class="contact-card">
          <h3>快速聯繫</h3>
          <p>Email：<a href="mailto:lk117868@gmail.com">lk117868@gmail.com</a></p>
          <p>GitHub：<a href="https://github.com/Tai-Ju" target="_blank" rel="noopener noreferrer">@Tai-Ju</a></p>
          <p class="contact-note">若有合作機會，歡迎來信聯絡。</p>
        </div>
        <div class="contact-card">
          <h3>GitHub 活動圖</h3>
          <img :src="githubGraphUrl" alt="Tai-Ju GitHub contribution graph" class="github-graph" />
        </div>
      </div>
    </div>
  </section>
</template>

<style src="../../styles/contact.css"></style>
