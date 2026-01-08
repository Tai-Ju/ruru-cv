/**
 * Google Analytics 工具函數
 * 用於追蹤自定義事件和用戶互動
 */

/**
 * 追蹤自定義事件
 * @param {string} eventName - 事件名稱
 * @param {object} eventParams - 事件參數（可選）
 */
export function trackEvent(eventName, eventParams = {}) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams)
  }
}

/**
 * 追蹤頁面瀏覽
 * @param {string} pagePath - 頁面路徑
 * @param {string} pageTitle - 頁面標題（可選）
 */
export function trackPageView(pagePath, pageTitle = '') {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-3ZCLM9N3S2', {
      page_path: pagePath,
      page_title: pageTitle
    })
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

