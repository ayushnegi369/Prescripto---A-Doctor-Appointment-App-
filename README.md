# Prescripto - Doctor Appointment Booking Website

A modern, full-stack web application for booking doctor appointments with integrated payment processing and admin management system.

## 🏥 Project Overview

Prescripto is a comprehensive doctor appointment booking platform that connects patients with healthcare providers. The application features a user-friendly interface for patients to browse doctors, book appointments, and make secure payments, while providing administrators with tools to manage doctors, appointments, and user data.

## ✨ Features

### For Patients (Users)
- **User Authentication**: Secure signup and login system
- **Doctor Browsing**: Browse doctors by specialty with detailed profiles
- **Appointment Booking**: Book appointments with preferred doctors and time slots
- **Payment Integration**: Secure payment processing with Stripe
- **Appointment Management**: View, track, and cancel appointments
- **Profile Management**: Update personal information and view appointment history
- **Responsive Design**: Mobile-friendly interface

### For Administrators
- **Dashboard**: Overview of appointments, users, and system statistics
- **Doctor Management**: Add, edit, and manage doctor profiles
- **Appointment Oversight**: View and manage all appointments
- **User Management**: Monitor user accounts and activities
- **Admin Panel**: Dedicated admin interface with sidebar navigation

## 🛠️ Technology Stack

### Frontend
- **React 19** - Modern UI library
- **React Router DOM** - Client-side routing
- **Vite** - Fast build tool and development server
- **Axios** - HTTP client for API calls
- **React Icons** - Icon library
- **Stripe React** - Payment processing integration

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcrypt** - Password hashing
- **Stripe** - Payment processing
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 📁 Project Structure

```
Prescripto/
├── client/                          # Frontend React application
│   ├── src/
│   │   ├── components/              # Reusable UI components
│   │   │   ├── AdminNavbar/        # Admin navigation
│   │   │   ├── AdminSidebar/       # Admin sidebar
│   │   │   ├── AppointmentList/    # Appointment display
│   │   │   ├── BookingSlot/        # Time slot selection
│   │   │   ├── DetailCard/         # Doctor detail cards
│   │   │   ├── Doctors/            # Doctor listing
│   │   │   ├── Footer/             # Site footer
│   │   │   ├── HeroSection/        # Landing page hero
│   │   │   ├── Navbar/             # User navigation
│   │   │   ├── Speciality/         # Medical specialties
│   │   │   └── UserRecord/         # User statistics
│   │   ├── pages/
│   │   │   ├── admin/              # Admin pages
│   │   │   │   ├── Dashboard/      # Admin dashboard
│   │   │   │   ├── AllAppointmentPage/  # Appointment management
│   │   │   │   └── AddDoctor/      # Doctor management
│   │   │   └── user/               # User pages
│   │   │       ├── Home/           # Landing page
│   │   │       ├── AllDoctors/     # Doctor browsing
│   │   │       ├── Appointment/    # Booking interface
│   │   │       ├── Login/          # User authentication
│   │   │       ├── SignUp/         # User registration
│   │   │       ├── Profile/        # User profile
│   │   │       ├── MyAppointment/  # Appointment history
│   │   │       ├── AboutUs/        # About page
│   │   │       └── ContactUs/      # Contact page
│   │   ├── assets/                 # Images and static files
│   │   ├── api.js                  # API service functions
│   │   ├── App.jsx                 # Main application component
│   │   └── main.jsx                # Application entry point
│   ├── public/                     # Static assets
│   └── package.json                # Frontend dependencies
├── server/                         # Backend Node.js application
│   ├── models/                     # Database models
│   │   ├── User.js                 # User model
│   │   ├── Doctor.js               # Doctor model
│   │   ├── Appointment.js          # Appointment model
│   │   └── ContactMessage.js       # Contact form model
│   ├── routes/                     # API routes
│   │   ├── auth.js                 # Authentication routes
│   │   ├── users.js                # User management routes
│   │   ├── doctors.js              # Doctor management routes
│   │   ├── appointments.js         # Appointment routes
│   │   └── contact.js              # Contact form routes
│   ├── server.js                   # Express server setup
│   ├── seedDoctors.js              # Database seeding script
│   └── package.json                # Backend dependencies
└── README.md                       # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- Stripe account for payment processing

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Prescripto
   ```

2. **Install backend dependencies**
   ```bash
   cd "Prescripto Project/server"
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd "../client"
   npm install
   ```

4. **Environment Setup**

   Create a `.env` file in the server directory:
   ```env
   # Database
   MONGO_URI=your_mongodb_connection_string
   
   # JWT Secret
   JWT_SECRET=your_jwt_secret_key
   
   # Stripe Keys
   STRIPE_SECRET_KEY=your_stripe_secret_key
   STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   
   # Server
   PORT=3000
   ```

   Create a `.env` file in the client directory:
   ```env
   VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   ```

5. **Database Setup**
   ```bash
   cd "../server"
   node seedDoctors.js
   ```

6. **Start the application**

   Start the backend server:
   ```bash
   cd "Prescripto Project/server"
   npm start
   ```

   Start the frontend development server:
   ```bash
   cd "../client"
   npm run dev
   ```

7. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3000

## 📋 API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login

### Users
- `GET /api/users/:id` - Get user profile
- `PUT /api/users/:id` - Update user profile

### Doctors
- `GET /api/doctors` - Get all doctors
- `POST /api/doctors` - Add new doctor (admin only)
- `PUT /api/doctors/:id` - Update doctor (admin only)
- `DELETE /api/doctors/:id` - Delete doctor (admin only)

### Appointments
- `GET /api/appointments` - Get all appointments (admin only)
- `GET /api/appointments/user/:userId` - Get user appointments
- `POST /api/appointments` - Book appointment
- `PUT /api/appointments/:id` - Update appointment
- `DELETE /api/appointments/:id` - Cancel appointment

### Payments
- `POST /api/appointments/payments/create-payment-intent` - Create Stripe payment intent

### Contact
- `POST /api/contact` - Submit contact form

## 🔐 Security Features

- **Password Hashing**: Bcrypt for secure password storage
- **JWT Authentication**: Secure token-based authentication
- **Environment Variables**: Sensitive data stored in environment files
- **CORS Protection**: Cross-origin resource sharing configuration
- **Input Validation**: Server-side validation for all inputs

## 💳 Payment Integration

The application integrates with Stripe for secure payment processing:
- Secure payment intent creation
- Client-side payment confirmation
- Server-side payment verification
- Support for multiple currencies

## 🎨 UI/UX Features

- **Responsive Design**: Mobile-first approach
- **Modern Interface**: Clean and intuitive user experience
- **Loading States**: User feedback during operations
- **Error Handling**: Comprehensive error messages
- **Form Validation**: Client and server-side validation

## 🔧 Development

### Available Scripts

**Frontend (client directory)**
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

**Backend (server directory)**
```bash
npm start            # Start development server with nodemon
```

### Code Structure
- **Component-based Architecture**: Reusable React components
- **Context API**: State management for global data
- **Custom Hooks**: Reusable logic
- **Service Layer**: API communication abstraction

## 🚀 Deployment

### Frontend Deployment
1. Build the application: `npm run build`
2. Deploy the `dist` folder to your hosting service

### Backend Deployment
1. Set up environment variables on your server
2. Install dependencies: `npm install`
3. Start the server: `npm start`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📝 License

This project is licensed under the ISC License.

## 👥 Authors

- **Your Name** - Initial work

## 🙏 Acknowledgments

- React team for the amazing framework
- Stripe for payment processing
- MongoDB for the database solution
- All contributors and users

## 📞 Support

For support and questions, please contact:
- Email: your-email@example.com
- GitHub Issues: [Create an issue](https://github.com/yourusername/prescripto/issues)

---

**Note**: This is a demonstration project. For production use, ensure all security measures are properly implemented and tested. 