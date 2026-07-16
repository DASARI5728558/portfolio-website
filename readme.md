<div align="center">

# ☁️ Static Portfolio Website on Azure Storage

**Deploy a fully responsive personal portfolio using Microsoft Azure Blob Storage Static Website Hosting**

![Azure Storage](https://img.shields.io/badge/Azure-Storage-0078D4?style=for-the-badge&logo=microsoftazure&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-Live-brightgreen?style=for-the-badge)

**Zero servers · Low cost · HTTPS endpoint · Production-ready portfolio**

[🌐 Live Demo](https://myawesomeportfolio2025.z21.web.core.windows.net/) · [📌 Overview](#-project-overview) · [🏗️ Architecture](#️-architecture) · [🚀 Deploy](#-deployment-guide) · [📂 Structure](#-project-structure) · [👨‍💻 Author](#-author)

</div>

---

## 🌐 Live Demo

👉 **[myawesomeportfolio2025.z21.web.core.windows.net](https://myawesomeportfolio2025.z21.web.core.windows.net/)**

<div align="center">
  <img src="./screenshots/hero-light.png" alt="Portfolio hero section — light theme" width="80%">
  <br><br>
  <img src="./screenshots/hero-dark.png" alt="Portfolio hero section — dark theme" width="80%">
</div>

| Item | Value |
|---|---|
| Platform | Azure Storage Static Website Hosting |
| Container | `$web` |
| Stack | HTML5 · CSS3 · Vanilla JavaScript |
| Cost model | Storage + bandwidth only |

---

## 📌 Project Overview

This project demonstrates cloud deployment of a static portfolio website using **Microsoft Azure Storage Account Static Website Hosting**.

The site is served directly from Azure Blob Storage — no virtual machines, no App Service, and no backend server to manage.

### 🎯 Objectives

- Host a static website without server management
- Configure an Azure Storage Account & Blob Storage
- Enable Static Website Hosting
- Deploy a personal DevOps portfolio publicly on Azure
- Build real cloud deployment experience for interviews & portfolio

---

## 🏗️ Architecture

```
┌──────────────────────────────────────────────┐
│      Portfolio Files (HTML · CSS · JS · PDF)  │
└──────────────────────┬───────────────────────┘
                        │ upload
                        ▼
┌──────────────────────────────────────────────┐
│              Azure Storage Account            │
│                                                │
│   Static Website Hosting ──► ENABLED          │
│   Index document          ──► index.html      │
│   Error document          ──► index.html      │
└──────────────────────┬───────────────────────┘
                        │
                        ▼
┌──────────────────────────────────────────────┐
│                $web Container                 │
│   index.html · styles.css · script.js · ...   │
└──────────────────────┬───────────────────────┘
                        │
                        ▼
┌──────────────────────────────────────────────┐
│         Public HTTPS Endpoint (Azure-managed) │
│      https://<account>.zXX.web.core.windows.net│
└──────────────────────────────────────────────┘
```

---

## 🛠️ Tech Stack

| Layer | Technology | Role |
|---|---|---|
| Markup | HTML5 | Structure & content |
| Style | CSS3 | Responsive UI, glassmorphism, dark/light theme |
| Logic | JavaScript | Theme, typing effect, counters, scroll animations |
| Cloud | Azure Storage Account | Resource container |
| Hosting | Azure Blob Static Website | Public static hosting |
| Assets | `$web` container | Serves site files |

---

## ✨ Website Features

<table>
<tr>
<td valign="top" width="50%">

### 🏠 Hero
- Professional intro
- DevOps-focused branding
- Live terminal simulation
- Typing role animation
- Cloud impact stats

### 💻 Skills
- Azure & AWS
- Kubernetes (AKS / EKS)
- Terraform & ARM
- Docker & Helm
- CI/CD pipelines
- Security & Linux

</td>
<td valign="top" width="50%">

### 💼 Projects (2026)
- AWS EKS Agritech DevOps
- Azure 2-tier marketplace
- Azure DevOps CI/CD (PMS)
- ARM automated server deploy

### 📞 Contact
- Email · Phone
- LinkedIn · GitHub
- Resume PDF download
- Availability status
- Dark / light theme

</td>
</tr>
</table>

### Portfolio Highlights

| Metric | Value |
|---|---|
| Cloud projects | 4+ |
| Faster releases | 80% |
| CGPA | 8.5 / 10 |
| GitHub repositories | 6 |

---

## 📸 Screenshots

<table>
<tr>
<td width="50%" align="center">
<img src="./screenshots/skills-section.png" alt="Skills section" width="100%"><br>
<sub>Skills & tech stack</sub>
</td>
<td width="50%" align="center">
<img src="./screenshots/projects-section.png" alt="Projects section" width="100%"><br>
<sub>Featured projects</sub>
</td>
</tr>
<tr>
<td width="50%" align="center">
<img src="./screenshots/contact-section.png" alt="Contact section" width="100%"><br>
<sub>Contact & resume download</sub>
</td>
<td width="50%" align="center">
<img src="./screenshots/mobile-view.png" alt="Mobile responsive view" width="100%"><br>
<sub>Mobile responsive layout</sub>
</td>
</tr>
</table>

> 💡 Add your own screenshots to a `screenshots/` folder at the project root (e.g. `hero-light.png`, `hero-dark.png`, `skills-section.png`, `projects-section.png`, `contact-section.png`, `mobile-view.png`) — GitHub will render them automatically once pushed.

---

## 📁 Project Structure

```
portfolio/
│
├── index.html                          # Main portfolio page
├── styles.css                          # Premium responsive design system
├── script.js                           # Theme · typing · counters · reveal
│
├── Dasari_Ram_Prasad_Resume.pdf         # Downloadable resume
├── Dasari_Ram_Prasad_Resume.html        # Printable HTML resume (optional)
├── generate_resume_pdf.py               # PDF generator helper (optional)
│
└── README.md                           # Project documentation (this file)
```

> ⚠️ Keep all site files at the **root** of `$web` (do not nest `index.html` inside another folder).

---

## 🚀 Deployment Guide

### Step 1 — Create Storage Account

1. Open the **Azure Portal**
2. Create a **Storage Account**
3. Configure:

| Setting | Recommended value |
|---|---|
| Subscription | Your subscription |
| Resource group | New or existing |
| Storage account name | Globally unique (lowercase) |
| Region | Closest to users |
| Performance | Standard |
| Redundancy | LRS |

4. **Review + Create** → **Create**

### Step 2 — Base Configuration

```
Performance: Standard
Redundancy: LRS
Minimum TLS version: 1.2
Public network access: Enabled
```

### Step 3 — Enable Static Website Hosting

1. **Storage Account → Data management → Static website**
2. Set **Static website = Enabled**
3. Configure:

```
Index document name: index.html
Error document path: index.html
```

4. **Save**

> Azure automatically creates the `$web` container.

### Step 4 — Upload Website Files

Upload into `$web`:

```
index.html
styles.css
script.js
Dasari_Ram_Prasad_Resume.pdf
```

**Portal path:** Storage Account → Containers → `$web` → Upload

**Azure CLI (optional):**

```bash
az storage blob upload-batch \
  --account-name <STORAGE_ACCOUNT_NAME> \
  --auth-mode login \
  --destination '$web' \
  --source . \
  --pattern "*.html" \
  --overwrite

az storage blob upload-batch \
  --account-name <STORAGE_ACCOUNT_NAME> \
  --auth-mode login \
  --destination '$web' \
  --source . \
  --pattern "*.{css,js,pdf}" \
  --overwrite
```

### Step 5 — Open Live Site

Copy the **Primary endpoint** from Static website settings:

```
https://myawesomeportfolio2025.z21.web.core.windows.net/
```

---

## 💻 Local Development

```bash
# Clone / open project folder
cd portfolio

# Start a simple local server
python3 -m http.server 8080
```

Visit: **http://localhost:8080**

| File | Edit for |
|---|---|
| `index.html` | Content, projects, contact |
| `styles.css` | Colors, layout, theme tokens |
| `script.js` | Typing phrases, interactions |

---

## ✅ Why Azure Static Website Hosting?

| Benefit | Description |
|---|---|
| 💰 Low cost | Pay for storage + egress only |
| 📈 Scalable | Blob storage scales automatically |
| 🔒 HTTPS | Secure endpoint by default |
| ⚙️ No servers | No OS, patching, or runtime |
| ⚡ Fast deploy | Upload files → site is live |
| 🌍 High availability | Azure-managed durability |

---

## 📚 Learning Outcomes

- Azure Storage Account setup & configuration
- Blob Storage & `$web` container management
- Static Website Hosting enablement
- Public endpoint verification
- Cloud hosting fundamentals for static sites
- Portfolio-ready cloud deployment experience

---

## 🔮 Future Enhancements

- [ ] Custom domain binding
- [ ] Azure CDN for global edge caching
- [ ] GitHub Actions CI/CD → auto-deploy to `$web`
- [ ] Azure Front Door
- [ ] Monitoring / analytics
- [ ] Terraform or Bicep for infrastructure as code

---

## 👨‍💻 Author

**Dasari Ram Prasad**

*Aspiring DevOps & Cloud Engineer · Hyderabad, India*

📧 Email · 📱 Phone · 💼 [LinkedIn](#) · 🐙 [GitHub](#)

**Skills:** Azure · AWS · Kubernetes · Terraform · CI/CD · Docker · Linux

---

## 📄 License

This repository is shared for **educational and portfolio purposes**.

---

<div align="center">

⭐ **If this project helped you, consider starring the repo**

*Built for the cloud · Hosted on Azure Storage*

`HTML` · `CSS` · `JavaScript` · `Azure Blob Static Website`

[⬆ Back to top](#️-static-portfolio-website-on-azure-storage)

</div>
