<script setup>
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="app-footer">
    <div class="container">
      <div class="footer-content">
        <p>&copy; {{ currentYear }} Tai-Ju Liu. All rights reserved.</p>
        <div class="social-links">
          <a href="https://github.com/Tai-Ju" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:lk117868@gmail.com">Email</a>
          <a href="tel:+886909213395">Phone</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style src="../../styles/footer.css"></style>
