# 🍦 OMEGA ICE CREAM &bull; Cosmic Funk Web Platform

Welcome to **Omega Ice Cream** — an ultra-vibrant, funky ice cream storefront and complete management portal built with a deep-black background, fiery neon rainbow red gradients, and high-energy retro street aesthetics.

---

## 📁 Project Files & Locations

All project files are located in:  
`c:\Users\Apollo Gadget\Downloads\hiweb`

| File | Purpose |
| :--- | :--- |
| [index.html](file:///c:/Users/Apollo%20Gadget/Downloads/hiweb/index.html) | Main single-page application (Storefront, Crafter, Spin Wheel, Tracker, Admin Portal & Mobile Bottom Dock) |
| [styles.css](file:///c:/Users/Apollo%20Gadget/Downloads/hiweb/styles.css) | Custom funky styling, neon glow, rainbow gradients, animations, and mobile touch optimizations |
| [app.js](file:///c:/Users/Apollo%20Gadget/Downloads/hiweb/app.js) | Complete state management (localStorage), Web Audio API sound engine, crafter stack, wheel physics, and admin CRUD |
| [vercel.json](file:///c:/Users/Apollo%20Gadget/Downloads/hiweb/vercel.json) | Vercel production deployment configuration with security headers and caching |
| [manifest.json](file:///c:/Users/Apollo%20Gadget/Downloads/hiweb/manifest.json) | Web App Manifest for mobile installation ("Add to Home Screen" on iOS & Android phones) |
| [favicon.svg](file:///c:/Users/Apollo%20Gadget/Downloads/hiweb/favicon.svg) | High-resolution neon rainbow ice cream icon for browsers & phone home screens |
| [.gitignore](file:///c:/Users/Apollo%20Gadget/Downloads/hiweb/.gitignore) | Git ignore configuration for clean GitHub commits |
| [serve.ps1](file:///c:/Users/Apollo%20Gadget/Downloads/hiweb/serve.ps1) | Local Windows PowerShell static web server script |
| [README.md](file:///c:/Users/Apollo%20Gadget/Downloads/hiweb/README.md) | Documentation & deployment instructions |

---

## 📱 Mobile Phone & PWA Readiness

- **Mobile Viewport**: `viewport-fit=cover` ensures smooth edge-to-edge rendering without letterboxing on modern iPhones and Android screens.
- **Mobile Bottom Navigation Dock**: Quick thumb access on smartphones to switch between **Menu**, **Crafter**, **Spin**, **Track**, and **Cart** with real-time badge count.
- **Touch-Friendly Controls**: Minimum 44px tap targets, disabled double-tap zoom delay (`-webkit-tap-highlight-color: transparent`).
- **PWA (Add to Home Screen)**:
  - On **iPhone (Safari)**: Tap the Share button &rarr; tap **"Add to Home Screen"**.
  - On **Android (Chrome)**: Tap the 3 dots menu &rarr; tap **"Install App"** or **"Add to Home screen"**.

---

## 🚀 How to Deploy to GitHub & GitHub Pages

The local Git repository is already initialized and committed on the `main` branch.

### 1. Push to your GitHub:
```bash
# 1. Create a new repository on https://github.com/new (e.g. "omega-ice-cream")
# 2. Link your remote repository and push:
git remote add origin https://github.com/YOUR_USERNAME/omega-ice-cream.git
git push -u origin main
```

### 2. Enable Free GitHub Pages:
1. Go to your repository on GitHub.
2. Click **Settings** &rarr; **Pages** (under Code and automation).
3. Under **Branch**, select `main` and root `/` &rarr; click **Save**.
4. Your website will be live at `https://YOUR_USERNAME.github.io/omega-ice-cream/` within seconds!

---

## ⚡ How to Deploy to Vercel (Instant 1-Click)

The repository includes a ready-to-use [vercel.json](file:///c:/Users/Apollo%20Gadget/Downloads/hiweb/vercel.json).

### Method A: Via Vercel Web Dashboard (Easiest)
1. Go to [https://vercel.com/new](https://vercel.com/new).
2. Connect your GitHub account and import your `omega-ice-cream` repository.
3. Leave all build settings default (Framework: **Other** / Root: `./`).
4. Click **Deploy** &mdash; it will deploy instantly with a free `.vercel.app` HTTPS domain!

### Method B: Via Vercel CLI
```bash
npm install -g vercel
vercel
```

---

## 💻 Local Testing & Running

- **In Browser Directly**: Double-click [index.html](file:///c:/Users/Apollo%20Gadget/Downloads/hiweb/index.html).
- **Via Local Server**: Run `powershell -ExecutionPolicy Bypass -File serve.ps1` and visit [http://localhost:8080](http://localhost:8080).
- **Admin Panel Access**: Click **Admin Panel** in the top bar or footer &bull; Default PIN: `1234`.
