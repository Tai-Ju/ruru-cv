<script setup>
import { trackContactClick, trackOutboundLink } from '../../utils/analytics'

const currentYear = new Date().getFullYear()
const gmailComposeUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=lk117868@gmail.com'
const mailtoFallback = 'mailto:lk117868@gmail.com'

const handleContactClick = (type, url) => {
  trackContactClick(type)
  if (url) {
    trackOutboundLink(url, type)
  }
}

const openGmailCompose = () => {
  handleContactClick('email', gmailComposeUrl)
  const newWindow = window.open(gmailComposeUrl, '_blank', 'noopener,noreferrer')
  if (!newWindow) {
    window.location.href = mailtoFallback
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
            @click.prevent="openGmailCompose"
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
