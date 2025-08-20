# Mellow Café - Full-Stack Web Application

[![React](https://img.shields.io/badge/React-19.0.0-blue.svg)](https://react.dev/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.110.1-green.svg)](https://fastapi.tiangolo.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC.svg)](https://tailwindcss.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4.5.0-47A248.svg)](https://www.mongodb.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A modern, full-stack web application for Mellow Café featuring a beautiful frontend website and robust backend API. This project demonstrates a complete restaurant management system with modern web technologies.

## 🚀 Features

### Frontend Features
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Interactive Menu System** - Tabbed navigation with dietary filters
- **Photo Gallery** - Masonry layout with lightbox functionality
- **Google Maps Integration** - Location services and contact information
- **Newsletter Signup** - Email collection with validation
- **Social Media Integration** - Instagram feed preview
- **Modern UI Components** - Built with Shadcn/ui component library
- **Smooth Animations** - CSS transitions and hover effects
- **SEO Optimized** - Semantic HTML and structured data

### Backend Features
- **FastAPI Framework** - High-performance Python web framework
- **MongoDB Integration** - NoSQL database with Motor async driver
- **RESTful API** - Clean API endpoints with Pydantic models
- **CORS Support** - Cross-origin resource sharing enabled
- **Environment Configuration** - Secure configuration management
- **Logging System** - Comprehensive logging and monitoring
- **Status Tracking** - Client status monitoring system
- **Async Operations** - Non-blocking database operations

## 🛠️ Tech Stack

### Frontend
- **React 19** - Latest React with modern hooks and features
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Beautiful, accessible component library
- **Radix UI** - Unstyled, accessible UI primitives
- **Lucide React** - Beautiful, customizable icons
- **React Hook Form** - Performant forms with validation
- **Zod** - TypeScript-first schema validation
- **Axios** - HTTP client for API requests

### Backend
- **FastAPI** - Modern, fast web framework for building APIs
- **MongoDB** - NoSQL document database
- **Motor** - Async MongoDB driver for Python
- **Pydantic** - Data validation using Python type annotations
- **Uvicorn** - Lightning-fast ASGI server
- **Python-dotenv** - Environment variable management
- **Pytest** - Testing framework
- **Black/Isort** - Code formatting and import sorting

### Development Tools
- **Craco** - Create React App Configuration Override
- **ESLint** - JavaScript linting utility
- **PostCSS** - CSS post-processor
- **Autoprefixer** - CSS vendor prefixing

## 📁 Project Structure

```
mellowcafe/
├── frontend/                 # React frontend application
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── ui/         # Reusable UI components
│   │   │   ├── Header.jsx  # Navigation component
│   │   │   ├── HeroSection.jsx # Hero section
│   │   │   ├── MenuSection.jsx # Menu system
│   │   │   ├── GallerySection.jsx # Photo gallery
│   │   │   ├── LocationSection.jsx # Maps integration
│   │   │   ├── ContactSection.jsx # Contact forms
│   │   │   └── Footer.jsx  # Footer component
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility functions
│   │   ├── App.js          # Main application
│   │   └── index.js        # Entry point
│   ├── package.json        # Dependencies and scripts
│   ├── tailwind.config.js  # Tailwind configuration
│   └── craco.config.js     # Build configuration
├── backend/                 # FastAPI backend application
│   ├── server.py           # Main server file
│   ├── requirements.txt    # Python dependencies
│   └── .env               # Environment variables
├── tests/                  # Test files
├── README.md              # This file
└── MELLOW_CAFE_README.md  # Detailed frontend documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and Yarn/NPM
- Python 3.8+
- MongoDB instance
- Git

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   yarn install
   # or
   npm install
   ```

3. **Start development server**
   ```bash
   yarn start
   # or
   npm start
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Create virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up environment variables**
   Create a `.env` file with:
   ```env
   MONGO_URL=mongodb://localhost:27017
   DB_NAME=mellowcafe
   CORS_ORIGINS=http://localhost:3000
   ```

5. **Start the server**
   ```bash
   uvicorn server:app --reload
   ```

## 🔧 Configuration

### Frontend Configuration
- **Tailwind CSS**: Custom color palette and design system
- **Component Library**: Shadcn/ui components with Radix UI primitives
- **Build System**: Craco for Create React App customization
- **Styling**: CSS variables for theming and customization

### Backend Configuration
- **Database**: MongoDB connection with async operations
- **API**: RESTful endpoints with automatic documentation
- **Security**: CORS configuration and environment variable management
- **Logging**: Structured logging with configurable levels

## 📱 Responsive Design

The frontend is fully responsive with breakpoints:
- **Mobile**: < 768px - Optimized for touch interactions
- **Tablet**: 768px - 1279px - Balanced layout for medium screens
- **Desktop**: 1280px+ - Full-featured desktop experience

## 🎨 Design System

### Color Palette
- **Primary Background**: Warm cream (#FFF9F2)
- **Accent Colors**: Espresso (#3C2614), Sage (#87A96B)
- **Text Colors**: Dark brown (#2D1810), Light gray (#6B7280)
- **Interactive Elements**: Hover states and focus indicators

### Typography
- **Headings**: Fraunces serif font for elegant titles
- **Body Text**: Nunito sans-serif for readability
- **Hierarchy**: Consistent font sizes and weights

### Components
- **Navigation**: Sticky header with smooth scrolling
- **Cards**: Glass morphism effects with shadows
- **Buttons**: Interactive states with hover animations
- **Forms**: Accessible input fields with validation

## 🔌 API Endpoints

### Base URL: `/api`

| Method | Endpoint | Description | Request Body | Response |
|--------|----------|-------------|--------------|----------|
| GET | `/` | Health check | - | `{"message": "Hello World"}` |
| POST | `/status` | Create status check | `{"client_name": "string"}` | StatusCheck object |
| GET | `/status` | Get all status checks | - | Array of StatusCheck objects |

### Data Models

```python
class StatusCheck(BaseModel):
    id: str
    client_name: str
    timestamp: datetime

class StatusCheckCreate(BaseModel):
    client_name: str
```

## 🧪 Testing

### Frontend Testing
- **Component Testing**: React Testing Library
- **Unit Testing**: Jest framework
- **E2E Testing**: Cypress (planned)

### Backend Testing
- **API Testing**: Pytest with FastAPI TestClient
- **Unit Testing**: Pytest framework
- **Integration Testing**: MongoDB test database

### Running Tests
```bash
# Frontend
cd frontend
yarn test

# Backend
cd backend
pytest
```

## 🚀 Deployment

### Frontend Deployment
1. **Build production version**
   ```bash
   yarn build
   ```

2. **Deploy to hosting service**
   - Netlify, Vercel, or AWS S3
   - Configure environment variables
   - Set up custom domain

### Backend Deployment
1. **Prepare for production**
   ```bash
   pip install -r requirements.txt
   ```

2. **Deploy to cloud platform**
   - AWS, Google Cloud, or Heroku
   - Set production environment variables
   - Configure MongoDB Atlas connection

## 🔒 Security Features

- **Environment Variables**: Secure configuration management
- **CORS Configuration**: Controlled cross-origin access
- **Input Validation**: Pydantic models for data validation
- **Database Security**: MongoDB connection string protection
- **HTTPS**: SSL/TLS encryption for production

## 📊 Performance Features

- **Lazy Loading**: Images and components load on demand
- **Code Splitting**: Dynamic imports for better performance
- **Optimized Assets**: Compressed images and efficient loading
- **Async Operations**: Non-blocking backend operations
- **Caching**: Browser and CDN caching strategies

## 🌟 Key Features Implemented

### ✅ Completed Features
- [x] Responsive React frontend with Tailwind CSS
- [x] Interactive menu system with dietary filters
- [x] Photo gallery with lightbox functionality
- [x] Google Maps integration
- [x] Newsletter signup form
- [x] Social media integration preview
- [x] FastAPI backend with MongoDB
- [x] RESTful API endpoints
- [x] Environment configuration
- [x] CORS support
- [x] Logging system
- [x] Status tracking system
- [x] Modern UI component library
- [x] Mobile-responsive design
- [x] SEO optimization
- [x] Accessibility features

### 🚧 Planned Features
- [ ] User authentication system
- [ ] Online ordering system
- [ ] Table booking functionality
- [ ] Admin dashboard
- [ ] Content management system
- [ ] Payment integration
- [ ] Real-time notifications
- [ ] Analytics dashboard

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Shadcn/ui** for the beautiful component library
- **Tailwind CSS** for the utility-first CSS framework
- **FastAPI** for the high-performance Python web framework
- **MongoDB** for the flexible NoSQL database
- **React Team** for the amazing frontend framework

## 📞 Support

For questions, issues, or contributions:
- **GitHub Issues**: [Create an issue](https://github.com/mutlukurt/mellowcafe/issues)
- **Email**: [Your email here]
- **Documentation**: Check the [MELLOW_CAFE_README.md](MELLOW_CAFE_README.md) for detailed frontend documentation

---

**Mellow Café** - Built with ❤️ for coffee lovers everywhere.

*Last updated: January 2025*
