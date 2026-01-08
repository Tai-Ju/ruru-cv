<script setup>
import { ref } from 'vue'
import { trackEvent } from '../../utils/analytics'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  trackEvent('menu_toggle', {
    is_open: isMenuOpen.value
  })
}

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    isMenuOpen.value = false
    trackEvent('navigation_click', {
      section: sectionId
    })
  }
}
</script>

<template>
  <header class="app-header">
    <div class="container">
      <nav class="navbar">
        <div class="logo">
          <h1>Tai-Ju Liu</h1>
        </div>

        <button class="menu-toggle" @click="toggleMenu" :class="{ active: isMenuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul class="nav-menu" :class="{ active: isMenuOpen }">
          <li><a @click="scrollToSection('hero')">首頁</a></li>
          <li><a @click="scrollToSection('about')">關於我</a></li>
          <li><a @click="scrollToSection('experience')">工作經歷</a></li>
          <li><a @click="scrollToSection('skills')">技能</a></li>
          <li><a @click="scrollToSection('projects')">專案作品</a></li>
          <li><a @click="scrollToSection('education')">學歷</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style src="../../styles/header.css"></style>
