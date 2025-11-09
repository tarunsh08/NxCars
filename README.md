# 🚗 NxCars - Premium Used Car Marketplace

A modern, full-stack web application for browsing, listing, and managing premium used car inventory. Built with cutting-edge technologies to deliver a seamless user experience for both buyers and sellers.

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://nx-cars.vercel.app)
[![Backend API](https://img.shields.io/badge/API-Live-blue)](https://nxcars.onrender.com)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## 🌟 Features

### Core Functionality
- **🏠 Homepage Gallery** - Browse all available cars with stunning visuals
- **➕ Add Listings** - Easy-to-use form for adding new car listings
- **🔍 Smart Search** - Filter cars by make, model, or specifications
- **🗑️ Inventory Management** - Delete and manage listings with admin controls
- **📱 Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **🖼️ Image Upload** - Cloudinary integration for high-quality image storage

### Technical Features
- **⚡ Server-Side Rendering** - Fast initial page loads with Next.js
- **🛡️ Error Handling** - Comprehensive error management and user feedback
- **🎨 Modern UI/UX** - Clean, professional interface with smooth animations

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js 16.0.1 (React 19.2.0)
- **Styling:** Tailwind CSS 4.0
- **Language:** TypeScript 5.x
- **HTTP Client:** Axios 1.13.2
- **Icons:** Lucide React 0.553.0

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js 5.1.0
- **Database:** MongoDB with Mongoose 8.19.3
- **File Upload:** Multer 2.0.2
- **Image Storage:** Cloudinary 2.8.0
- **Environment:** ES Modules

### DevOps & Deployment
- **Frontend Hosting:** Vercel
- **Backend Hosting:** Render
- **Database:** MongoDB Atlas
- **Version Control:** Git & GitHub

## 📁 Project Structure

```
NxCars/
├── client/                    # Next.js Frontend
│   ├── app/
│   │   ├── add-car/          # Add car page
│   │   ├── car/[id]/         # Dynamic car detail pages
│   │   ├── globals.css       # Global styles
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Homepage
│   ├── components/
│   │   ├── CarCard.tsx       # Individual car display
│   │   ├── CarList.tsx       # Car grid layout
│   │   ├── HeroSection.tsx   # Homepage hero
│   │   ├── HomePageClient.tsx # Client-side homepage logic
│   │   ├── LoadingSpinner.tsx # Loading states
│   │   └── Navbar.tsx        # Navigation component
│   ├── contexts/             # React contexts
│   ├── lib/
│   │   └── api/              # API integration layer
│   ├── types/                # TypeScript definitions
│   └── public/               # Static assets
│
└── server/                   # Express.js Backend
    ├── src/
    │   ├── controllers/      # Business logic
    │   ├── models/           # Database schemas
    │   ├── routes/           # API endpoints
    │   └── middleware/       # Custom middleware
    └── server.js             # Application entry point
```

## 🔌 API Endpoints

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| `GET` | `/api/cars` | Fetch all car listings | - |
| `GET` | `/api/car/:id` | Get specific car details | - |
| `POST` | `/api/cars` | Create new car listing | Car data + image |
| `DELETE` | `/api/car/:id` | Remove car listing | - |

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- MongoDB Atlas account
- Cloudinary account (for image uploads)

### 1. Clone Repository
```bash
git clone https://github.com/tarunsh08/NxCars.git
cd NxCars
```

### 2. Backend Setup
```bash
cd server
npm install

# Create .env file with your credentials
cp .env.example .env
# Edit .env with your MongoDB URI, Cloudinary keys, etc.

npm run dev #Development server


### 3. Frontend Setup
```bash
cd client
npm install

# Create environment file
echo "NEXT_PUBLIC_API_BASE_URL=http://localhost:8080" > .env.local

npm run dev  # Development server
```

### 4. Access Application
- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:8080

## ⚙️ Environment Configuration

### Backend (.env)
```env
PORT=8080
MONGO_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
CLIENT_URL=http://localhost:3000
```

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:8080
```

## 🌐 Live Deployment

- **🌍 Frontend:** [https://nx-cars.vercel.app](https://nx-cars.vercel.app)
- **🔗 Backend API:** [https://nxcars.onrender.com](https://nxcars.onrender.com)

> **Note:** Backend may take ~50 seconds to wake up on first request due to Render's free tier cold starts.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

**Tarun Sharma**  
Full Stack Developer 

- 📧 Email: tarunsharma08com@gmail.com
- 🔗 GitHub: [@tarunsh08](https://github.com/tarunsh08)
- 💼 LinkedIn: [Connect with me](https://www.linkedin.com/in/tarun-sharma-a0a5552b4)

---

<div align="center">
  <p>Built with ❤️ using Next.js, Express.js, and MongoDB</p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>