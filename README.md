# 🎨 Exhibitor

A creative digital platform that allows artists and creators to publish their artwork, share compelling stories behind it, and engage with a vibrant social community. Built with the MERN stack, **Exhibitor** empowers creators to showcase their talent, receive meaningful feedback, and connect with fellow artists worldwide.

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Installation & Setup](#-installation--setup)
- [Running the Application](#-running-the-application)
- [Environment Variables](#-environment-variables)
- [Screenshots](#-screenshots)
- [Usage](#-usage)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

🖼️ **Artwork Publication** - Upload and publish artwork with detailed descriptions and stories  
💬 **Social Feed** - Engage with the community through likes and comments on artwork  
🌐 **Responsive Design** - Seamless experience across desktop, tablet, and mobile devices  
👥 **Community Interaction** - Foster creativity through artist collaboration and constructive feedback  
🔒 **User Authentication** - Secure access with JWT-based authentication  
✉️ **Email Notifications** - Stay updated with notifications powered by Brevo  
👨‍💼 **Admin Panel** - Manage users, artwork, and moderation through an intuitive dashboard  
🎯 **Artwork Discovery** - Browse trending artworks and explore diverse artistic styles  
⭐ **Ratings & Reviews** - Rate and review artworks to help guide the community  

## 🚀 Tech Stack

### Frontend
- **React** - Modern JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework for responsive design
- **Redux** (optional) - State management
- **Axios** - HTTP client for API requests

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - Object Data Modeling (ODM) for MongoDB

### Authentication & Services
- **JWT (JSON Web Tokens)** - Secure token-based authentication
- **Brevo** - Email service for notifications

## 📁 Project Structure

```
exhibitor/
├── client/                 # React frontend application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── styles/        # Tailwind CSS configurations
│   │   └── App.js
│   └── package.json
├── server/                # Node.js/Express backend
│   ├── routes/            # API endpoints
│   ├── models/            # MongoDB schemas
│   ├── controllers/       # Business logic
│   ├── middleware/        # Authentication & validation
│   └── server.js
├── .env.example           # Example environment variables
└── package.json
```

## 📦 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v14.0.0 or higher) - [Download](https://nodejs.org/)
- **npm** (v6.0.0 or higher) - Comes with Node.js
- **MongoDB** (Local or Cloud - MongoDB Atlas) - [Download](https://www.mongodb.com/try/download/community)
- **Git** - [Download](https://git-scm.com/)

### Optional but Recommended
- **Visual Studio Code** - Code editor [Download](https://code.visualstudio.com/)
- **Postman** - API testing tool [Download](https://www.postman.com/downloads/)

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/ShivdasJadhav/exhibitor.git
cd exhibitor
```

### 2. Setup Environment Variables

Create a `.env` file in the root directory and in the `server` folder. Use `.env.example` as a reference:

```bash
# Root .env
REACT_APP_API_URL=http://localhost:5000/api

# Server .env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/exhibitor
JWT_SECRET=your_secret_key_here
BREVO_API_KEY=your_brevo_api_key
BREVO_FROM_EMAIL=your_email@example.com
NODE_ENV=development
```

### Platform-Specific Setup

#### 🪟 **Windows**

**Step 1: Install Prerequisites**
1. Download and install Node.js from [nodejs.org](https://nodejs.org/)
2. During installation, ensure "Add to PATH" is selected
3. Download and install MongoDB Community Edition from [mongodb.com](https://www.mongodb.com/try/download/community)
4. Download Git from [git-scm.com](https://git-scm.com/)

**Step 2: Verify Installation**
```bash
node --version
npm --version
mongod --version
git --version
```

**Step 3: Clone and Setup**
```bash
# Clone repository
git clone https://github.com/ShivdasJadhav/exhibitor.git
cd exhibitor

# Create .env files
copy .env.example .env

# Install dependencies for both client and server
npm install
cd client
npm install
cd ..
```

**Step 4: Start MongoDB**
```bash
# Option 1: Using Windows Command Prompt
mongod

# Option 2: Using MongoDB as a Service (if installed)
# No action needed, it runs automatically
```

**Step 5: Run the Application**
```bash
# Terminal 1: Start Backend Server
cd server
npm start

# Terminal 2: Start Frontend Development Server
cd client
npm start
```

#### 🍎 **macOS**

**Step 1: Install Prerequisites Using Homebrew**
```bash
# Install Homebrew (if not installed)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Node.js and npm
brew install node

# Install MongoDB Community Edition
brew tap mongodb/brew
brew install mongodb-community

# Verify installations
node --version
npm --version
mongod --version
```

**Step 2: Clone and Setup**
```bash
# Clone repository
git clone https://github.com/ShivdasJadhav/exhibitor.git
cd exhibitor

# Create .env file
cp .env.example .env

# Install dependencies
npm install
cd client
npm install
cd ..
```

**Step 3: Start MongoDB**
```bash
# Start MongoDB service
brew services start mongodb-community

# Or run MongoDB directly
mongod --config /usr/local/etc/mongod.conf
```

**Step 4: Run the Application**
```bash
# Terminal 1: Start Backend
cd server
npm start

# Terminal 2: Start Frontend
cd client
npm start
```

#### 🐧 **Linux (Ubuntu/Debian)**

**Step 1: Install Prerequisites**
```bash
# Update package manager
sudo apt-get update
sudo apt-get upgrade

# Install Node.js and npm
sudo apt-get install nodejs npm

# Install MongoDB Community Edition
sudo apt-get install -y mongodb

# Verify installations
node --version
npm --version
mongod --version
```

**Step 2: Clone and Setup**
```bash
# Clone repository
git clone https://github.com/ShivdasJadhav/exhibitor.git
cd exhibitor

# Create .env file
cp .env.example .env

# Install dependencies
npm install
cd client
npm install
cd ..
```

**Step 3: Start MongoDB**
```bash
# Start MongoDB service
sudo systemctl start mongodb

# Enable MongoDB to start on boot (optional)
sudo systemctl enable mongodb

# Verify MongoDB is running
sudo systemctl status mongodb
```

**Step 4: Run the Application**
```bash
# Terminal 1: Start Backend Server
cd server
npm start

# Terminal 2: Start Frontend Development Server
cd client
npm start
```

## 🎯 Running the Application

### Development Mode

```bash
# Root directory setup (if using workspace configuration)
npm install

# Terminal 1: Start Backend
cd server
npm start
# Backend will run on http://localhost:5000

# Terminal 2: Start Frontend
cd client
npm start
# Frontend will run on http://localhost:3000
```

### Production Build

```bash
# Build frontend for production
cd client
npm run build
cd ..

# Start backend in production mode
cd server
NODE_ENV=production npm start
```

## 🔐 Environment Variables

### Backend (.env in server directory)

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/exhibitor
# Or for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/exhibitor

# JWT Authentication
JWT_SECRET=your_super_secret_key_change_this_in_production
JWT_EXPIRE=7d

# Brevo Email Service
BREVO_API_KEY=your_brevo_api_key
BREVO_FROM_EMAIL=noreply@exhibitor.com

# CORS Configuration
CLIENT_URL=http://localhost:3000
```

### Frontend (.env in client directory)

```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_ENV=development
```

## 🖼️ Screenshots

### 1. Landing Page
![Landing Page](./screenshots/landing_1.png)
![Top Arts](./screenshots/top_arts.png)
![Community](./screenshots/community.png)
![Reviews](./screenshots/reviews.png)
![Footer](./screenshots/footer.png)

### 2. Home Page
![Home](./screenshots/home.png)

### 3. Artwork Submission
![Submission Page](./screenshots/request_Art.png)

### 4. Artwork Detail View
![Artwork Detail 1](./screenshots/details_1.png)
![Artwork Detail 2](./screenshots/details_2.png)

### 5. Artwork Control
![Artwork Control](./screenshots/art_control_1.png)

### 6. Admin Panel
![Admin Panel 1](./screenshots/admin_1.png)
![Admin Panel 2](./screenshots/admin_2.png)
![Admin Panel 3](./screenshots/admin_3.png)

## 📖 Usage

### For Artists
1. Create an account on the platform
2. Navigate to "Submit Artwork"
3. Upload your artwork image and provide a compelling story/description
4. Publish and share your creation with the community
5. Engage with feedback through likes and comments

### For Community Members
1. Browse the social feed to discover artworks
2. Like and comment on pieces you appreciate
3. Rate artworks and leave detailed reviews
4. Follow favorite artists to stay updated

### For Administrators
1. Access the admin panel with admin credentials
2. Moderate user submissions and comments
3. Manage user accounts and resolve disputes
4. View platform analytics and statistics

## 🤝 Contributing

We welcome contributions from the community! Please read our [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines on:
- How to report bugs
- Submitting feature requests
- Setting up your development environment
- Code style and standards

Also check out [PR_INSTRUCTIONS.md](./PR_INSTRUCTIONS.md) for pull request guidelines.

## 📝 License

This project is licensed under the MIT License. See the LICENSE file for details.

## 🙋 Support

For questions, issues, or suggestions:
1. Check existing [GitHub Issues](https://github.com/ShivdasJadhav/exhibitor/issues)
2. Create a new issue with detailed information
3. Contact the maintainers

## 🌟 Acknowledgments

- MERN Stack Community
- Tailwind CSS for beautiful styling
- Brevo for email services
- MongoDB for flexible data storage
- All contributors and community members

---

**Happy Creating! 🎨**
