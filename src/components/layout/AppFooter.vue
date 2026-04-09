<script setup>
import { trackContactClick, trackOutboundLink } from '../../utils/analytics'
import { ref } from 'vue'

const currentYear = new Date().getFullYear()
const gmailComposeUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=lk117868@gmail.com'
const mailtoFallback = 'mailto:lk117868@gmail.com'
const phoneNumber = '0909-213-395'
const isPhoneCopied = ref(false)

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

const copyPhoneNumber = async () => {
  handleContactClick('phone')
  try {
    await navigator.clipboard.writeText(phoneNumber)
  } catch {
    const input = document.createElement('input')
    input.value = phoneNumber
    document.body.appendChild(input)
    input.select()
    document.execCommand('copy')
    document.body.removeChild(input)
  }

  isPhoneCopied.value = true
  setTimeout(() => {
    isPhoneCopied.value = false
  }, 1600)
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
            href="#"
            class="copy-phone-link"
            :title="isPhoneCopied ? '已複製' : `點擊複製 ${phoneNumber}`"
            @click.prevent="copyPhoneNumber"
          >
            {{ isPhoneCopied ? '已複製電話' : `Phone ${phoneNumber}` }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style src="../../styles/footer.css"></style>
