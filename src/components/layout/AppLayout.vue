<script setup>
import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'
import ResumeHero from '../resume/ResumeHero.vue'
import ResumeAbout from '../resume/ResumeAbout.vue'
import ResumeExperience from '../resume/ResumeExperience.vue'
import ResumeSkills from '../resume/ResumeSkills.vue'
import ResumeProjects from '../resume/ResumeProjects.vue'
import ResumeEducation from '../resume/ResumeEducation.vue'
</script>

<template>
  <div class="app-layout">
    <AppHeader />
    <main class="main-content">
      <ResumeHero />
      <ResumeAbout />
      <ResumeExperience />
      <ResumeSkills />
      <ResumeProjects />
      <ResumeEducation />
    </main>
    <AppFooter />
  </div>
</template>

<style src="../../styles/layout.css"></style>
