<script setup>
import { trackContactClick, trackOutboundLink } from '../../utils/analytics'
import { computed, ref } from 'vue'
import { useLanguage } from '../../composables/useLanguage'

const currentYear = new Date().getFullYear()
const gmailComposeUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=lk117868@gmail.com'
const mailtoFallback = 'mailto:lk117868@gmail.com'
const phoneNumber = '0909-213-395'
const isPhoneCopied = ref(false)
const { currentLang } = useLanguage()

const copy = computed(() => {
  if (currentLang.value === 'en') {
    return {
      rights: 'All rights reserved.',
      email: 'Email',
      phone: 'Phone',
      copied: 'Phone copied',
      copyHint: 'Click to copy phone number'
    }
  }

  return {
    rights: 'All rights reserved.',
    email: 'Email',
    phone: 'Phone',
    copied: '已複製電話',
    copyHint: '點擊複製電話'
  }
})

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
        <p>&copy; {{ currentYear }} Tai-Ju Liu. {{ copy.rights }}</p>
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
            {{ copy.email }}
          </a>
          <a
            href="#"
            class="copy-phone-link"
            :title="isPhoneCopied ? copy.copied : copy.copyHint"
            @click.prevent="copyPhoneNumber"
          >
            {{ isPhoneCopied ? copy.copied : copy.phone }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style src="../../styles/footer.css"></style>
