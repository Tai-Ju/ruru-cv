import { onMounted, onUnmounted, ref } from 'vue'

const langState = ref(localStorage.getItem('lang') || 'zh')

const updateLang = (lang) => {
  langState.value = lang || 'zh'
}

export function useLanguage() {
  const onStorage = (event) => {
    if (event.key === 'lang') {
      updateLang(event.newValue)
    }
  }

  const onLanguageChanged = (event) => {
    updateLang(event.detail)
  }

  onMounted(() => {
    window.addEventListener('storage', onStorage)
    window.addEventListener('language-changed', onLanguageChanged)
  })

  onUnmounted(() => {
    window.removeEventListener('storage', onStorage)
    window.removeEventListener('language-changed', onLanguageChanged)
  })

  return {
    currentLang: langState,
    setLanguage: (lang) => {
      localStorage.setItem('lang', lang)
      updateLang(lang)
      window.dispatchEvent(new CustomEvent('language-changed', { detail: lang }))
    }
  }
}
