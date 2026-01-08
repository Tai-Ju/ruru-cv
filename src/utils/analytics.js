/**
 * Google Analytics 工具函數
 * 用於追蹤自定義事件和用戶互動
 */

// 檢查 GA 是否已加載
function checkGA() {
  if (typeof window === 'undefined') {
    console.warn('[GA] window is not defined')
    return false
  }
  
  if (!window.gtag) {
    console.warn('[GA] gtag is not loaded yet')
    return false
  }
  
  if (!window.dataLayer) {
    console.warn('[GA] dataLayer is not initialized')
    return false
  }
  
  return true
}

/**
 * 追蹤自定義事件
 * @param {string} eventName - 事件名稱
 * @param {object} eventParams - 事件參數（可選）
 */
export function trackEvent(eventName, eventParams = {}) {
  if (checkGA()) {
    window.gtag('event', eventName, eventParams)
    console.log('[GA] Event tracked:', eventName, eventParams)
  } else {
    console.warn('[GA] Failed to track event:', eventName)
  }
}

/**
 * 追蹤頁面瀏覽
 * @param {string} pagePath - 頁面路徑
 * @param {string} pageTitle - 頁面標題（可選）
 */
export function trackPageView(pagePath, pageTitle = '') {
  if (checkGA()) {
    window.gtag('config', 'G-3ZCLM9N3S2', {
      page_path: pagePath,
      page_title: pageTitle
    })
    console.log('[GA] Page view tracked:', pagePath, pageTitle)
  } else {
    console.warn('[GA] Failed to track page view:', pagePath)
  }
}

/**
 * 初始化 GA 並檢查狀態
 */
export function initGA() {
  if (typeof window === 'undefined') {
    console.warn('[GA] Cannot initialize: window is not defined')
    return false
  }
  
  // 檢查 gtag 是否已定義
  if (window.gtag) {
    console.log('[GA] ✅ Google Analytics is loaded and ready')
    console.log('[GA] Measurement ID: G-3ZCLM9N3S2')
    console.log('[GA] DataLayer:', window.dataLayer)
    return true
  } else {
    console.warn('[GA] ⚠️ gtag is not available yet')
    console.log('[GA] Waiting for GA script to load...')
    
    // 等待 GA 加載
    let attempts = 0
    const maxAttempts = 50 // 最多等待 5 秒
    
    const checkInterval = setInterval(() => {
      attempts++
      if (window.gtag) {
        console.log('[GA] ✅ Google Analytics loaded after', attempts * 100, 'ms')
        console.log('[GA] Measurement ID: G-3ZCLM9N3S2')
        console.log('[GA] DataLayer:', window.dataLayer)
        clearInterval(checkInterval)
      } else if (attempts >= maxAttempts) {
        console.error('[GA] ❌ Google Analytics failed to load after', maxAttempts * 100, 'ms')
        console.error('[GA] Please check if the GA script is correctly added to index.html')
        clearInterval(checkInterval)
      }
    }, 100)
    
    return false
  }
}

/**
 * 追蹤下載事件
 * @param {string} fileName - 檔案名稱
 * @param {string} fileType - 檔案類型
 */
export function trackDownload(fileName, fileType = '') {
  trackEvent('file_download', {
    file_name: fileName,
    file_type: fileType
  })
}

/**
 * 追蹤外部連結點擊
 * @param {string} url - 連結網址
 * @param {string} linkText - 連結文字
 */
export function trackOutboundLink(url, linkText = '') {
  trackEvent('click', {
    event_category: 'outbound',
    event_label: linkText || url,
    transport_type: 'beacon'
  })
}

/**
 * 追蹤聯絡方式點擊
 * @param {string} contactType - 聯絡類型（email, phone, linkedin等）
 */
export function trackContactClick(contactType) {
  trackEvent('contact_click', {
    contact_type: contactType
  })
}

/**
 * 追蹤技能區塊互動
 * @param {string} skillName - 技能名稱
 * @param {string} action - 動作（view, hover等）
 */
export function trackSkillInteraction(skillName, action = 'view') {
  trackEvent('skill_interaction', {
    skill_name: skillName,
    action: action
  })
}

/**
 * 追蹤專案點擊
 * @param {string} projectName - 專案名稱
 */
export function trackProjectClick(projectName) {
  trackEvent('project_click', {
    project_name: projectName
  })
}

