# Development Guide

## Getting Started

### Prerequisites
- Node.js (v16+)
- npm
- Git
- A code editor (VS Code recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kariult-wq/personate-work-and-sell.git
   cd personate-work-and-sell
   ```

2. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd ../backend
   npm install
   ```

### Environment Setup

Create `.env` file in the backend folder:
```
PORT=5000
NODE_ENV=development
FIREBASE_API_KEY=your_key_here
STRIPE_SECRET_KEY=your_stripe_key_here
```

### Running the App

**Terminal 1 - Backend:**
```bash
cd backend
npm start
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
```

Then press:
- `i` for iOS simulator
- `a` for Android emulator
- `w` for web

## Next Steps

### 1. Install Node.js
Download from https://nodejs.org (LTS version)

### 2. Clone and Install
```bash
git clone https://github.com/kariult-wq/personate-work-and-sell.git
cd personate-work-and-sell
cd frontend && npm install
cd ../backend && npm install
```

### 3. Start Development
```bash
# Terminal 1
cd backend
npm start

# Terminal 2
cd frontend
npm start
```

### 4. Test the App
- Visit `http://localhost:5000/api/health` to test backend
- Scan QR code in terminal to test frontend on phone

## Project Structure

```
personate-work-and-sell/
├── frontend/                 # React Native app
│   ├── screens/             # App screens (to create)
│   ├── components/          # Reusable components (to create)
│   ├── App.js              # Main app file
│   └── package.json
├── backend/                 # Node.js API server
│   ├── routes/             # API routes (to create)
│   ├── models/             # Database models (to create)
│   ├── server.js           # Main server file
│   └── package.json
├── docs/                   # Documentation
└── README.md
```

## Learning Resources

- [React Native Docs](https://reactnative.dev)
- [Expo Docs](https://docs.expo.dev)
- [Express.js Docs](https://expressjs.com)
- [Firebase Docs](https://firebase.google.com/docs)
- [Stripe Docs](https://stripe.com/docs)

## Tips for Success

1. **Start small** - Build one feature at a time
2. **Test frequently** - Use the Expo app on your phone
3. **Read the documentation** - Don't skip the docs!
4. **Use git** - Commit often with clear messages
5. **Ask for help** - Stack Overflow, GitHub Discussions

## Common Issues

### App crashes on startup
- Check that the backend server is running
- Verify all dependencies are installed
- Check console for error messages

### Cannot connect to backend
- Make sure backend is running on correct port
- Check network connectivity
- Verify API endpoint URL is correct

### npm install fails
- Try deleting `node_modules` folder
- Run `npm install` again
- Check Node.js version: `node --version`

For more help, check the GitHub issues or ask in discussions!
