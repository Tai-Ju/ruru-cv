# 個人履歷網站

這是一個使用 Vite + Vue 3 建立的現代化履歷網站專案。

## 專案特色

- ✨ 使用 Vue 3 Composition API
- 🎨 響應式設計，支援各種裝置
- 📦 模組化的組件架構
- 🎯 清晰的檔案結構
- 💅 分離的 CSS 樣式檔案
- 🚀 使用 Vite 進行快速開發

## 專案結構

```
ruru-cv/
├── public/                 # 靜態資源
├── src/
│   ├── assets/            # 資源檔案
│   │   ├── images/        # 圖片檔案
│   │   └── icons/         # 圖示檔案
│   ├── components/        # Vue 組件
│   │   ├── layout/        # 布局組件
│   │   │   ├── AppLayout.vue
│   │   │   ├── AppHeader.vue
│   │   │   └── AppFooter.vue
│   │   └── resume/        # 履歷區塊組件
│   │       ├── ResumeHero.vue
│   │       ├── ResumeAbout.vue
│   │       ├── ResumeExperience.vue
│   │       ├── ResumeSkills.vue
│   │       ├── ResumeEducation.vue
│   │       └── ResumeContact.vue
│   ├── styles/            # CSS 樣式檔案
│   │   ├── global.css     # 全局樣式
│   │   ├── layout.css     # 布局樣式
│   │   ├── header.css     # 導航列樣式
│   │   ├── footer.css     # 頁尾樣式
│   │   ├── hero.css       # 首頁區塊樣式
│   │   ├── about.css      # 關於我樣式
│   │   ├── experience.css # 工作經歷樣式
│   │   ├── skills.css     # 技能樣式
│   │   ├── education.css  # 學歷樣式
│   │   └── contact.css    # 聯絡表單樣式
│   ├── App.vue            # 根組件
│   └── main.js            # 入口檔案
├── index.html             # HTML 模板
├── package.json           # 專案設定
└── vite.config.js         # Vite 設定
```

## 安裝與執行

### 安裝依賴

```bash
npm install
```

### 開發模式

```bash
npm run dev
```

開發伺服器會在 `http://localhost:5173` 啟動

### 建置生產版本

```bash
npm run build
```

建置完成的檔案會在 `dist` 目錄中

### 預覽生產版本

```bash
npm run preview
```

## 自訂內容

### 修改個人資訊

1. **Hero 區塊** - 編輯 `src/components/resume/ResumeHero.vue`
2. **關於我** - 編輯 `src/components/resume/ResumeAbout.vue`
3. **工作經歷** - 編輯 `src/components/resume/ResumeExperience.vue`
4. **技能** - 編輯 `src/components/resume/ResumeSkills.vue`
5. **學歷** - 編輯 `src/components/resume/ResumeEducation.vue`
6. **聯絡資訊** - 編輯 `src/components/resume/ResumeContact.vue`

### 修改樣式

- **顏色主題** - 編輯 `src/styles/global.css` 中的 CSS 變數
- **個別組件樣式** - 編輯對應的 CSS 檔案

### 添加圖片

1. 將圖片放在 `src/assets/images/` 目錄
2. 在組件中引入使用

## 技術棧

- **框架**: Vue 3
- **建置工具**: Vite
- **語言**: JavaScript
- **樣式**: CSS3
- **開發工具**: VSCode

## 授權

MIT License
