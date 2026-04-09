<script setup>
import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'
import ResumeHero from '../resume/ResumeHero.vue'
import ResumeAbout from '../resume/ResumeAbout.vue'
import ResumeExperience from '../resume/ResumeExperience.vue'
import ResumeSkills from '../resume/ResumeSkills.vue'
import ResumeProjects from '../resume/ResumeProjects.vue'
import ResumeEducation from '../resume/ResumeEducation.vue'
import ResumeContact from '../resume/ResumeContact.vue'
</script>

<template>
  <div class="app-layout">
    <AppHeader />
    <main class="main-content">
      <ResumeHero class="resume-topic" />
      <ResumeAbout class="resume-topic" />
      <ResumeExperience class="resume-topic" />
      <ResumeSkills class="resume-topic" />
      <ResumeProjects class="resume-topic" />
      <ResumeEducation class="resume-topic" />
      <ResumeContact class="resume-topic" />
    </main>
    <AppFooter />
  </div>
</template>

<style src="../../styles/layout.css"></style>
