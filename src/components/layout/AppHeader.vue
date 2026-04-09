<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { trackEvent } from '../../utils/analytics'

const isMenuOpen = ref(false)
const activeSection = ref('hero')
const currentTheme = ref(localStorage.getItem('theme') || 'light')
const currentLang = ref(localStorage.getItem('lang') || 'zh')

const navItems = computed(() => {
  if (currentLang.value === 'en') {
    return [
      { id: 'hero', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'experience', label: 'Experience' },
      { id: 'skills', label: 'Skills' },
      { id: 'projects', label: 'Projects' },
      { id: 'education', label: 'Education' },
      { id: 'contact', label: 'Contact' }
    ]
  }

  return [
    { id: 'hero', label: '首頁' },
    { id: 'about', label: '關於我' },
    { id: 'experience', label: '工作經歷' },
    { id: 'skills', label: '技能' },
    { id: 'projects', label: '專案作品' },
    { id: 'education', label: '學歷' },
    { id: 'contact', label: '聯絡方式' }
  ]
})

const setTheme = (theme) => {
  currentTheme.value = theme
  localStorage.setItem('theme', theme)
  document.body.classList.toggle('dark-theme', theme === 'dark')
}

const toggleTheme = () => {
  setTheme(currentTheme.value === 'dark' ? 'light' : 'dark')
  trackEvent('theme_toggle', {
    theme: currentTheme.value
  })
}

const toggleLanguage = () => {
  currentLang.value = currentLang.value === 'zh' ? 'en' : 'zh'
  localStorage.setItem('lang', currentLang.value)
  trackEvent('language_toggle', {
    language: currentLang.value
  })
}

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
    activeSection.value = sectionId
    isMenuOpen.value = false
    trackEvent('navigation_click', {
      section: sectionId
    })
  }
}

const updateActiveSection = () => {
  const sections = navItems.value.map((item) => document.getElementById(item.id)).filter(Boolean)
  const triggerPoint = window.scrollY + 160

  for (const section of sections) {
    if (section.offsetTop <= triggerPoint && section.offsetTop + section.offsetHeight > triggerPoint) {
      activeSection.value = section.id
      break
    }
  }
}

onMounted(() => {
  setTheme(currentTheme.value)
  updateActiveSection()
  window.addEventListener('scroll', updateActiveSection, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection)
})
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
          <li v-for="item in navItems" :key="item.id">
            <a :class="{ active: activeSection === item.id }" @click="scrollToSection(item.id)">{{ item.label }}</a>
          </li>
          <li class="toolbar-item">
            <button class="toolbar-btn" @click="toggleLanguage">{{ currentLang === 'zh' ? 'EN' : '中' }}</button>
          </li>
          <li class="toolbar-item">
            <button class="toolbar-btn" @click="toggleTheme">{{ currentTheme === 'dark' ? '☀' : '🌙' }}</button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style src="../../styles/header.css"></style>
