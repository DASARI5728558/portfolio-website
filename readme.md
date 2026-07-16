<div align="center">
☁️ Static Portfolio Website on Azure Storage
Deploy a fully responsive personal portfolio using Microsoft Azure Blob Storage Static Website Hosting
<br/>

Azure
Storage
HTML5
CSS3
JavaScript
Status
<br/>

Zero servers · Low cost · HTTPS endpoint · Production-ready portfolio
<br/>

🌐 Live Demo ·
📌 Overview ·
🏗️ Architecture ·
🚀 Deploy ·
📂 Structure ·
👨‍💻 Author
</div>
🌐 Live Demo
<div align="center">
👉 https://myawesomeportfolio2025.z21.web.core.windows.net/
Item	Value
Platform	Azure Storage Static Website
Container	$web
Stack	HTML5 · CSS3 · Vanilla JavaScript
Cost model	Storage + bandwidth only
</div>
📌 Project Overview

This project demonstrates cloud deployment of a static portfolio website using Microsoft Azure Storage Account Static Website Hosting.

The site is served directly from Azure Blob Storage — no virtual machines, no App Service, and no backend server to manage.
🎯 Objectives

    Host a static website without server management
    Configure Azure Storage Account & Blob Storage
    Enable Static Website Hosting
    Deploy a personal DevOps portfolio publicly on Azure
    Build real cloud deployment experience for interviews & portfolio

🏗️ Architecture

text

┌──────────────────────────────────────────────┐
│     Portfolio Files (HTML · CSS · JS · PDF)  │
└──────────────────────┬───────────────────────┘
                       │  upload
                       ▼
┌──────────────────────────────────────────────┐
│           Azure Storage Account              │
│                                              │
│   Static Website Hosting  ──►  ENABLED       │
│   Index document          ──►  index.html    │
│   Error document          ──►  index.html    │
└──────────────────────┬───────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────┐
│              $web  Container                 │
│   index.html · styles.css · script.js · ...  │
└──────────────────────┬───────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────┐
│     Public HTTPS Endpoint (Azure-managed)    │
│  https://<account>.zXX.web.core.windows.net  │
└──────────────────────────────────────────────┘

🛠️ Tech Stack
Layer	Technology	Role
Markup	HTML5	Structure & content
Style	CSS3	Responsive UI, glassmorphism, dark/light theme
Logic	JavaScript	Theme, typing effect, counters, scroll animations
Cloud	Azure Storage Account	Resource container
Hosting	Azure Blob Static Website	Public static hosting
Assets	$web container	Serves site files
✨ Website Features
<table> <tr> <td width="50%">
🏠 Hero

    Professional intro
    DevOps-focused branding
    Live terminal simulation
    Typing role animation
    Cloud impact stats

💻 Skills

    Azure & AWS
    Kubernetes (AKS / EKS)
    Terraform & ARM
    Docker & Helm
    CI/CD pipelines
    Security & Linux

</td> <td width="50%">
💼 Projects (2026)

    AWS EKS Agritech DevOps
    Azure 2-tier marketplace
    Azure DevOps CI/CD (PMS)
    ARM automated server deploy

📞 Contact

    Email · Phone
    LinkedIn · GitHub
    Resume PDF download
    Availability status
    Dark / light theme

</td> </tr> </table>
Portfolio highlights
Metric	Value
Cloud projects	4+
Faster releases	80%
CGPA	8.5 / 10
GitHub repositories	6
📁 Project Structure

text

portfolio/
│
├── index.html                       # Main portfolio page
├── styles.css                       # Premium responsive design system
├── script.js                        # Theme · typing · counters · reveal
│
├── Dasari_Ram_Prasad_Resume.pdf     # Downloadable resume
├── Dasari_Ram_Prasad_Resume.html     # Printable HTML resume (optional)
├── generate_resume_pdf.py           # PDF generator helper (optional)
│
└── README.md                        # Project documentation (this file)

    Keep all site files at the root of $web (do not nest index.html inside another folder).

🚀 Deployment Guide
Step 1 — Create Storage Account

    Open Azure Portal
    Create Storage Account
    Configure:

Setting	Recommended value
Subscription	Your subscription
Resource group	New or existing
Storage account name	Globally unique (lowercase)
Region	Closest to users
Performance	Standard
Redundancy	LRS

    Review + Create → Create

Step 2 — Base configuration

text

Performance:             Standard
Redundancy:              LRS
Minimum TLS version:     1.2
Public network access:   Enabled

Step 3 — Enable Static Website Hosting

    Storage Account → Data management → Static website
    Set Static website = Enabled
    Configure:

text

Index document name:   index.html
Error document path:   index.html

    Save

Azure automatically creates the $web container.
Step 4 — Upload website files

Upload into $web:

text

index.html
styles.css
script.js
Dasari_Ram_Prasad_Resume.pdf

Portal path: Storage Account → Containers → $web → Upload

Azure CLI (optional):

Bash

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

Step 5 — Open live site

Copy Primary endpoint from Static website settings:

text

https://myawesomeportfolio2025.z21.web.core.windows.net/

💻 Local Development

Bash

# Clone / open project folder
cd portfolio

# Start a simple local server
python3 -m http.server 8080

Visit: http://localhost:8080
File	Edit for
index.html	Content, projects, contact
styles.css	Colors, layout, theme tokens
script.js	Typing phrases, interactions
✅ Why Azure Static Website Hosting?
Benefit	Description
💰 Low cost	Pay for storage + egress only
📈 Scalable	Blob storage scales automatically
🔒 HTTPS	Secure endpoint by default
⚙️ No servers	No OS, patching, or runtime
⚡ Fast deploy	Upload files → site is live
🌍 High availability	Azure-managed durability
📚 Learning Outcomes

    Azure Storage Account setup & configuration
    Blob Storage & $web container management
    Static Website Hosting enablement
    Public endpoint verification
    Cloud hosting fundamentals for static sites
    Portfolio-ready cloud deployment experience

🔮 Future Enhancements

    Custom domain binding
    Azure CDN for global edge caching
    GitHub Actions CI/CD → auto-deploy to $web
    Azure Front Door
    Monitoring / analytics
    Terraform or Bicep for infrastructure as code

👨‍💻 Author
<div align="center">
Dasari Ram Prasad

Aspiring DevOps & Cloud Engineer · Hyderabad, India
<br/>

Email
Phone
LinkedIn
GitHub
<br/>

Skills: Azure · AWS · Kubernetes · Terraform · CI/CD · Docker · Linux
</div>
📄 License

This repository is shared for educational and portfolio purposes.
<div align="center">
⭐ If this project helped you, consider starring the repo
<br/>

Built for the cloud · Hosted on Azure Storage

HTML · CSS · JavaScript · Azure Blob Static Website
<br/>

⬆ Back to top
</div>
