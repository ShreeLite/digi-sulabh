# 🚽 DigiSulabh – Revolutionising Public Sanitation

> A smart, scalable, full-stack public sanitation solution designed to **digitise and automate Sulabh Shauchalayas** across India, empowering citizens, improving hygiene, and bringing accountability to public infrastructure.

![DigiSulabh Banner](docs/assets/banner.png) <!-- Replace with actual banner -->

---

## ✨ Key Features

| 🧭 | **Find Nearest Toilet** – Locate Sulabh Shauchalayas using real-time GPS and OpenStreetMap |
|----|---------------------------------------------------------------------------------------------|
| 📷 | **QR Scan to Access** – Scan onsite QR codes to access toilets (Stripe for paid access)      |
| 🧼 | **AI-based Cleanliness** – Cleaners upload photos analyzed by an AI model for hygiene check  |
| 📣 | **Feedback + Complaint System** – Smart form with feedback, ratings, complaints tagging      |
| 🔔 | **n8n + Twilio Alerts** – Complaint acknowledgment system with SMS/email alerts               |
| 👨‍🔧 | **Cleaner Dashboard** – OAuth-protected dashboard to manage daily tasks and view complaints |
| 🌐 | **Cloud-First Storage** – Cloudinary + Multer integration for photos, QR, and assets         |
| 🔍 | **Search + Filter** – (Coming soon) Filter toilets by facilities, hygiene rating, and distance|
| 🛠️ | **ETL Pipeline (WIP)** – Auto-populate DB by scraping official Sulabh Shauchalaya database   |

---

## 🧠 Architecture Overview

```mermaid
flowchart TD
    A[User: Mobile/Browser] -->|GPS Location| B[Find Toilets UI]
    B --> C[Express.js Backend]
    C --> D[(MongoDB Atlas)]
    C --> E[Stripe / QR Code Scan]
    C --> F[n8n + Twilio Alerts]
    G[Cleaner: OAuth Dashboard] --> C
    G --> H[Photo Upload (Multer + Cloudinary)]
    H --> I[AI Model Cleanliness Analysis]
