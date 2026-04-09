<script setup>
import { trackContactClick, trackOutboundLink } from '../../utils/analytics'

const currentYear = new Date().getFullYear()

const handleContactClick = (type, url) => {
  trackContactClick(type)
  if (url) {
    trackOutboundLink(url, type)
  }
}
</script>

<template>
  <footer class="app-footer">
    <div class="container">
      <div class="footer-content">
        <p>&copy; {{ currentYear }} Tai-Ju Liu. All rights reserved.</p>
        <div class="social-links">
          <a 
            href="https://github.com/Tai-Ju" 
            target="_blank" 
            rel="noopener noreferrer"
            @click="handleContactClick('github', 'https://github.com/Tai-Ju')"
          >
            GitHub
          </a>
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=lk117868@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            @click="handleContactClick('email', 'https://mail.google.com/mail/?view=cm&fs=1&to=lk117868@gmail.com')"
          >
            Email
          </a>
          <a 
            href="tel:+886909213395"
            @click="handleContactClick('phone')"
          >
            Phone
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style src="../../styles/footer.css"></style>
