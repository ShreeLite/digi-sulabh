# 🚽 DigiSulabh – Revolutionising Public Sanitation

> A smart, scalable, full-stack public sanitation solution designed to **digitise and automate Sulabh Shauchalayas** across India, empowering citizens, improving hygiene, and bringing accountability to public infrastructure.

![DigiSulabh Banner](docs/assets/banner.png) <!-- Replace with actual banner -->

---

## ✨ Key Features

| 🔍 **Find Toilets** | Locate nearest Sulabh Shauchalayas using GPS & OpenStreetMap |
|---------------------|---------------------------------------------------------------|
| 📷 **QR Access**     | Scan QR codes to access toilets (Stripe integration for paid ones) |
| 🧼 **Cleanliness AI**| Daily photo uploads by cleaners auto-analyzed by AI model |
| 📣 **Feedback + Complaints** | Ratings and issues with priority tagging + tracking |
| 📲 **Acknowledgement Alerts** | n8n + Twilio integration for SMS/email confirmation |
| 🧑‍🔧 **Cleaner Dashboard** | View assigned toilets, submit photos, manage complaints (OAuth-secured) |
| ☁️ **Cloud Storage** | Cloudinary + Multer used to store photos and QR images |
| 🔄 **ETL Pipeline (WIP)** | Automated scraping from official Sulabh websites to populate toilets |
| 🔎 **Search & Filter** | (Coming Soon) Filter toilets based on amenities, cleanliness, and distance |

---

## 🧠 Architecture Overview

```mermaid
flowchart TD
    A[User: Mobile/Browser] -->|GPS Location| B[Find Toilets UI]
    B --> C[Express.js Backend]
    C --> D[MongoDB Atlas]
    C --> E[Stripe / QR Code Scan]
    C --> F[n8n + Twilio Alerts]
    G[Cleaner: OAuth Dashboard] --> C
    G --> H[Photo Upload\nMulter + Cloudinary]
    H --> I[AI Model\nCleanliness Analysis]
