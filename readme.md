# 🚀 Deploy a Static Portfolio Website Using Azure Storage

A cloud-based portfolio website hosted using **Microsoft Azure Storage Account Static Website Hosting**. This project demonstrates how to deploy a fully responsive static website built with HTML, CSS, and JavaScript using Azure Blob Storage with zero server management.

## 📌 Project Overview

This project showcases the deployment of a personal portfolio website using Azure's Static Website Hosting feature. The website is hosted directly from Azure Blob Storage and is publicly accessible through an Azure-generated endpoint.

### Objectives

* Host a static website without managing servers
* Learn Azure Storage Account and Blob Storage services
* Configure Azure Static Website Hosting
* Deploy a portfolio website on Microsoft Azure
* Gain practical cloud deployment experience

---

## 🏗️ Architecture

```text
Portfolio Website Files (HTML, CSS, JS)
            │
            ▼
Azure Storage Account
            │
            ▼
Static Website Hosting Enabled
            │
            ▼
$web Container
            │
            ▼
Public Website Endpoint
```

---

## 🛠️ Technologies Used

| Technology                   | Purpose                     |
| ---------------------------- | --------------------------- |
| HTML5                        | Website Structure           |
| CSS3                         | Styling & Responsive Design |
| JavaScript                   | Interactive Features        |
| Azure Storage Account        | Cloud Storage               |
| Azure Blob Storage           | Static Content Hosting      |
| Azure Static Website Hosting | Website Deployment          |

---

## 🌐 Live Website

**URL:**
https://myawesomeportfolio2025.z21.web.core.windows.net/

---

## 📂 Website Features

### 🏠 Hero Section

* Professional introduction
* DevOps Engineer profile
* Cloud and DevOps statistics
* Terminal-style live output simulation

### 💻 Technical Skills

* Cloud Platforms (Azure, AWS)
* Infrastructure as Code
* Containers & Kubernetes
* CI/CD Tools
* Security Practices
* Monitoring & Logging
* Version Control

### 💼 Experience

* Cloud Computing Internship
* AWS Infrastructure Management
* Security & Monitoring
* Azure Exposure

### 🎓 Certifications & Education

* AWS Cloud Practitioner Essentials
* Cloud Computing Certification
* Multi Cloud DevSecOps (In Progress)
* B.Tech Engineering

### 📞 Contact Section

* Email
* Phone
* LinkedIn
* Resume Download
* Availability Status

---

## ⚙️ Azure Services Used

| Azure Service          | Purpose                 |
| ---------------------- | ----------------------- |
| Azure Storage Account  | Stores website files    |
| Azure Blob Storage     | Hosts static assets     |
| Static Website Hosting | Serves website publicly |
| $web Container         | Stores website content  |

---

## 🚀 Deployment Steps

### Step 1: Create a Storage Account

1. Sign in to Azure Portal
2. Create a new Storage Account
3. Configure:

   * Subscription
   * Resource Group
   * Storage Account Name
   * Region
   * Performance: Standard
   * Redundancy: LRS
4. Click **Review + Create**
5. Deploy the resource

### Step 2: Configure Storage Account

Recommended settings:

```text
Performance: Standard
Redundancy: LRS
TLS Version: 1.2
Public Network Access: Enabled
Blob Anonymous Access: Disabled
```

### Step 3: Enable Static Website Hosting

1. Open Storage Account
2. Navigate to:

```text
Data Management → Static Website
```

3. Enable Static Website
4. Set:

```text
Index Document: index.html
Error Document: error.html
```

5. Save changes

Azure automatically creates a `$web` container.

### Step 4: Upload Website Files

Upload the following files to the `$web` container:

```text
index.html
css/
js/
images/
```

### Step 5: Access the Website

Open the generated endpoint:

```text
https://myawesomeportfolio2025.z21.web.core.windows.net/
```

---

## 📁 Project Structure

```text
portfolio-website/
│
├── index.html
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── images/
│   └── assets
│
└── README.md
```

---

## ✅ Benefits of Azure Static Website Hosting

* Low-cost hosting
* High availability
* Automatic scalability
* HTTPS-enabled endpoints
* No server management
* Fast and simple deployment

---

## 📚 Learning Outcomes

Through this project, I learned:

* Azure Storage Account configuration
* Azure Blob Storage management
* Static Website Hosting setup
* Cloud-based website deployment
* Storage container management
* Public endpoint verification
* Cloud hosting fundamentals

---

## 🔮 Future Enhancements

* Custom domain integration
* Azure CDN implementation
* GitHub Actions CI/CD pipeline
* Azure Front Door setup
* Application Insights monitoring
* Terraform Infrastructure as Code deployment

---

## 👨‍💻 Author

**Dasari Ram Prasad**

Aspiring DevOps & Cloud Engineer

### Skills

* Microsoft Azure
* Amazon Web Services (AWS)
* Kubernetes
* Terraform
* CI/CD
* Docker
* Linux

---

## 📄 License

This project is intended for educational and portfolio purposes.
