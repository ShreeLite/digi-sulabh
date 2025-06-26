# 🚽 DigiSulabh – Revolutionising Public Sanitation

> A smart, scalable, full-stack public sanitation solution designed to **digitise and automate Sulabh Shauchalayas** across India, empowering citizens, improving hygiene, and bringing accountability to public infrastructure.

![DigiSulabh Banner](docs/assets/banner.png) <!-- Replace with your banner -->

---

## ✨ Key Features

| 🔍 **Find Toilets**          | Locate nearest Sulabh Shauchalayas using GPS & OpenStreetMap                  |
|-----------------------------|--------------------------------------------------------------------------------|
| 📷 **QR Access**             | Scan QR codes to access toilets (Stripe integration for paid ones)             |
| 🧼 **Cleanliness AI**        | Daily photo uploads by cleaners auto-analyzed by AI model                      |
| 📣 **Feedback + Complaints** | Ratings and issues with priority tagging + tracking                            |
| 📲 **Acknowledgement Alerts**| n8n + Twilio integration for SMS/email confirmation                            |
| 🧑‍🔧 **Cleaner Dashboard**    | View assigned toilets, submit photos, manage complaints (OAuth-secured)         |
| ☁️ **Cloud Storage**         | Cloudinary + Multer used to store photos and QR images                         |
| 🔄 **ETL Pipeline (WIP)**    | Automated scraping from official Sulabh websites to populate toilets           |
| 🔎 **Search & Filter**       | (Coming Soon) Filter toilets based on amenities, cleanliness, and distance     |

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
```

---

## 🧰 Tech Stack

| Layer      | Tools Used                                                            |
| ---------- | --------------------------------------------------------------------- |
| Frontend   | React.js, Tailwind CSS, OpenStreetMap API                             |
| Backend    | Node.js, Express.js                                                   |
| Database   | MongoDB Atlas                                                         |
| Storage    | Cloudinary + Multer                                                   |
| Auth       | OAuth (Google planned for cleaner login)                              |
| Automation | n8n (for workflows), Twilio (SMS alerts)                              |
| Payments   | Stripe (for paid toilets via QR)                                      |
| AI         | Python-based cleanliness classifier for uploaded images               |
| ETL        | Scraping Sulabh Shauchalaya government site to auto-populate database |

---

## 🚀 Quickstart (For Developers)

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account
- Stripe account
- Cloudinary account
- Twilio account

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/digi-sulabh.git
cd digi-sulabh
```

### 2. Install dependencies in both frontend and backend

```bash
cd frontend
npm install

cd ../backend
npm install
```

### 3. Setup environment variables

Create a `.env` file in both the frontend and backend directories. Refer to `docs/env.example` for required variables:

```env
MONGO_URI=your_mongodb_atlas_connection_string
CLOUDINARY_NAME=your_cloudinary_cloud_name
CLOUDINARY_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET=your_cloudinary_api_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
N8N_WEBHOOK_URL=your_n8n_webhook_url
OAUTH_CLIENT_ID=your_oauth_client_id
OAUTH_CLIENT_SECRET=your_oauth_client_secret
```

> 🛠 **Tip**: Use [ngrok](https://ngrok.com/) for local webhook testing (Twilio, n8n).

### 4. Run the project

**Frontend** (from frontend directory):
```bash
cd frontend
npm run dev
```

**Backend** (from backend directory):
```bash
cd backend
# Using nodemon:
npm run start
# Or standard node:
npm run server
```

---

## 📌 Project Status

| Module                   | Status         |
| ------------------------ | -------------- |
| 🏠 Home Page             | ✅ Complete     |
| 📝 Feedback & Complaints | ✅ Complete     |
| 📍 Find Toilet Page      | 🕗 In Progress |
| 🧑‍🔧 Cleaner Dashboard  | 🕗 Partial     |
| 🧾 Stripe QR Integration | ✅ Working      |
| 🧼 Cleanliness AI        | ✅ Integrated   |
| 🔄 ETL Scraper           | ⏳ Not Started  |
| 🔒 OAuth Login           | 🕗 In Progress |

---

## 📊 API Endpoints

### User Routes
- `GET /api/toilets/nearby` - Find nearby toilets based on GPS location
- `POST /api/payment/process` - Process payments via Stripe
- `GET /api/toilets/:id/status` - Get real-time toilet status
- `POST /api/feedback` - Submit feedback and complaints
- `GET /api/toilets/:id/qr` - Generate QR code for toilet access

### Cleaner Routes
- `POST /api/cleaner/login` - OAuth login for cleaners
- `POST /api/cleaner/upload` - Upload cleanliness photos
- `GET /api/cleaner/assignments` - Get assigned toilet cleaning tasks
- `PUT /api/cleaner/status/:toiletId` - Update cleaning status

### Admin Routes
- `GET /api/admin/analytics` - Get system analytics and reports
- `POST /api/admin/toilets` - Add new toilet locations
- `PUT /api/admin/toilets/:id` - Update toilet information

---

## 📈 Roadmap

- 🧠 **Sentiment Analysis** of feedback for better issue detection
- 📊 **Cleaner Performance Scoring** using ML or basic analytics
- 🚿 **IoT Sensor Integration** for real-time cleanliness monitoring
- 🗺️ **Offline Mode** for low-connectivity rural deployment
- 🏛️ **Admin Dashboard** for civic authorities and NGOs
- 🔔 **Push Notifications** for real-time updates
- 📱 **Mobile App** (React Native)

---

## 🌍 Social Impact

> **DigiSulabh** isn't just code — it's a mission. By merging smart tech with civic responsibility, we aim to fix a long-ignored problem of public hygiene and give dignity to everyone. From citizens to cleaners to administrators — everyone benefits from a cleaner, smarter India.

---

## 🧾 Documentation

Explore the deeper documentation:

- [`docs/dev-guide.md`](docs/dev-guide.md) – Project setup + structure
- [`docs/architecture.md`](docs/architecture.md) – Full system architecture
- [`docs/api.md`](docs/api.md) – REST API reference
- [`docs/cleaner-dashboard.md`](docs/cleaner-dashboard.md) – Cleaner interface guide
- [`docs/ai-analysis.md`](docs/ai-analysis.md) – AI model documentation
- [`docs/etl-pipeline.md`](docs/etl-pipeline.md) – Data pipeline details
- [`docs/ui.md`](docs/ui.md) – UI/UX design guidelines

---

## 🖼️ Screenshots

| Home Page     | Feedback      | Dashboard     |
| ------------- | ------------- | ------------- |
| *(Add image)* | *(Add image)* | *(Add image)* |

---

## 🔧 Development Setup

### Local Development

1. **Database Setup**: Ensure MongoDB Atlas is configured and running
2. **Environment Variables**: All required environment variables are set
3. **Dependencies**: All npm packages are installed
4. **Services**: External services (Stripe, Twilio, Cloudinary) are configured

### Testing

```bash
# Run frontend tests
cd frontend
npm test

# Run backend tests
cd backend
npm test
```

### Deployment

- **Frontend**: Deploy on Vercel/Netlify
- **Backend**: Deploy on Railway/Heroku
- **Database**: MongoDB Atlas (already cloud-hosted)

---

## 🤝 Contributing

We welcome new contributors! Here's how to get started:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add some amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

See [`CONTRIBUTING.md`](CONTRIBUTING.md) for detailed guidelines.

---

## 👩‍💻 Authors & Contributors

Crafted with 💙 by first-year engineers from **IIIT Hyderabad**, passionate about real-world impact, civic tech, and full-stack problem-solving.

- **Project Lead**: [Your Name](https://github.com/yourusername)
- **Frontend Developer**: [Contributor Name](https://github.com/contributor)
- **Backend Developer**: [Contributor Name](https://github.com/contributor)
- **AI/ML Engineer**: [Contributor Name](https://github.com/contributor)

---

## 🐛 Issues & Support

- **Bug Reports**: [Open an issue](https://github.com/yourusername/digi-sulabh/issues)
- **Feature Requests**: [Request a feature](https://github.com/yourusername/digi-sulabh/issues)
- **Questions**: [Start a discussion](https://github.com/yourusername/digi-sulabh/discussions)

---

## 📜 License

This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for details.

---

## 🙏 Acknowledgments

- **Sulabh International** for inspiration and mission alignment
- **Open Source Community** for the amazing tools and libraries
- **IIIT Hyderabad** for fostering innovation and social impact
- **Contributors** who believe in making India cleaner and smarter

---

## 📞 Contact

For questions, suggestions, or collaboration opportunities:

- **Email**: [your.email@example.com](mailto:your.email@example.com)
- **LinkedIn**: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- **Twitter**: [@yourusername](https://twitter.com/yourusername)

---

<div align="center">

**Made with ❤️ for a cleaner, smarter India**

[⭐ Star this repo](https://github.com/yourusername/digi-sulabh) | [🍴 Fork it](https://github.com/yourusername/digi-sulabh/fork) | [📝 Contribute](CONTRIBUTING.md)

</div>