# GitHub Pages 部署指南

本文檔說明如何將履歷網站部署到 GitHub Pages。

## 📋 前置準備

1. 確保您有 GitHub 帳號
2. 確保已安裝 Git

## 🚀 部署步驟

### 步驟 1: 初始化 Git 倉庫（如果尚未初始化）

```bash
cd c:\Users\lk117\OneDrive\桌面\ruru-cv
git init
git add .
git commit -m "Initial commit: Add resume website"
```

### 步驟 2: 在 GitHub 上創建新倉庫

1. 前往 https://github.com/new
2. 倉庫名稱填寫：`ruru-cv`
3. 設為 **Public**（GitHub Pages 免費版需要公開倉庫）
4. **不要**勾選 "Add a README file"、".gitignore" 或 "license"
5. 點擊 "Create repository"

### 步驟 3: 連接本地倉庫到 GitHub

```bash
# 添加遠程倉庫（替換 YOUR_USERNAME 為您的 GitHub 用戶名）
git remote add origin https://github.com/YOUR_USERNAME/ruru-cv.git

# 設置主分支名稱為 main
git branch -M main

# 推送到 GitHub
git push -u origin main
```

### 步驟 4: 啟用 GitHub Pages

1. 前往您的 GitHub 倉庫頁面
2. 點擊 **Settings**（設定）
3. 在左側邊欄中找到 **Pages**
4. 在 "Build and deployment" 區域：
   - **Source**: 選擇 `GitHub Actions`
5. 保存設定

### 步驟 5: 觸發部署

GitHub Actions 會在您推送代碼到 `main` 分支時自動觸發。

如果您想手動觸發部署：
1. 前往倉庫的 **Actions** 標籤
2. 選擇 "Deploy to GitHub Pages" 工作流
3. 點擊 "Run workflow"
4. 點擊綠色的 "Run workflow" 按鈕

### 步驟 6: 查看部署狀態

1. 前往倉庫的 **Actions** 標籤
2. 您會看到正在運行的工作流
3. 點擊進入查看詳細日誌
4. 等待部署完成（通常需要 1-3 分鐘）

### 步驟 7: 訪問您的網站

部署成功後，您的網站將在以下地址訪問：

```
https://YOUR_USERNAME.github.io/ruru-cv/
```

將 `YOUR_USERNAME` 替換為您的 GitHub 用戶名。

## 🔄 後續更新

每次您想更新網站時，只需：

```bash
# 修改代碼後
git add .
git commit -m "描述您的更改"
git push
```

GitHub Actions 會自動重新構建和部署網站。

## ⚙️ 配置說明

### vite.config.js

已配置 `base` 路徑為 `/ruru-cv/`，這是為了匹配 GitHub Pages 的 URL 結構。

如果您想使用自定義域名，將 `base` 改為 `'/'`：

```javascript
base: process.env.NODE_ENV === 'production' ? '/' : '/',
```

### GitHub Actions 工作流

工作流配置文件位於 `.github/workflows/deploy.yml`，它會：

1. 在推送到 `main` 分支時自動觸發
2. 安裝 Node.js 和依賴
3. 構建項目
4. 部署到 GitHub Pages

## 🎯 自定義域名（可選）

如果您想使用自定義域名（如 `www.yourname.com`）：

1. 在倉庫根目錄創建 `public/CNAME` 文件
2. 文件內容填寫您的域名
3. 在您的域名提供商處配置 DNS：
   - 添加 CNAME 記錄指向 `YOUR_USERNAME.github.io`
4. 在 GitHub Pages 設定中填寫自定義域名

## 🐛 常見問題

### 問題：頁面顯示 404

- 確認 GitHub Pages 已啟用
- 確認 Source 設為 "GitHub Actions"
- 檢查 Actions 是否成功運行
- 等待幾分鐘讓 DNS 生效

### 問題：CSS/圖片無法加載

- 檢查 `vite.config.js` 中的 `base` 路徑是否正確
- 確保路徑與倉庫名稱匹配

### 問題：Actions 失敗

- 查看 Actions 日誌找出錯誤
- 確認 `package.json` 中的依賴都正確安裝
- 確認構建腳本沒有錯誤

## 📞 需要幫助？

如果遇到問題，可以：
1. 查看 GitHub Actions 的詳細日誌
2. 檢查 GitHub Pages 官方文檔
3. 在 GitHub Issues 中尋求幫助

---

**提示**：首次部署後，建議等待 5-10 分鐘再訪問網站，讓所有配置生效。
