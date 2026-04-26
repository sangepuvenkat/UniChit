# Uni Chit - Student Chit Fund Platform

A comprehensive Progressive Web App (PWA) for students to save toward their goals through a secure chit fund system.

## 🎯 Overview

Uni Chit enables students to:
- Save toward specific goals (laptops, phones, books, etc.)
- Participate in transparent bidding rounds
- Join verified student groups
- Get AI-powered financial guidance
- Become leaders and earn commissions

## 🚀 Features

### Core Functionality
- **Goal-Based Savings**: Create or join plans for specific items
- **Bidding System**: Fair, transparent bidding with one bid per round
- **College Verification**: Secure student verification system
- **Payment Integration**: Ready for Razorpay/Stripe integration
- **AI Digital Leader**: Intelligent chatbot for financial guidance

### User Roles
- **Students**: Basic savings and bidding functionality
- **Leaders**: Manage groups, earn 70% commission (unlocked after 2 completed goals)

### Technical Features
- **PWA Ready**: Offline support, installable
- **Responsive Design**: Mobile-first, works on all devices
- **Dark/Light Theme**: User preference support
- **Real-time Updates**: Firebase integration ready

## 🛠 Tech Stack

- **Frontend**: React, Next.js, TypeScript
- **Styling**: Tailwind CSS v4, shadcn/ui components
- **Backend**: Firebase (Auth, Firestore, Storage, Cloud Functions)
- **Payments**: Razorpay/Stripe integration ready
- **AI**: OpenAI/ChatGPT integration template provided

## 📱 Pages & Routes

### Public Routes
- `/` - Landing page
- `/about` - About us
- `/contact` - Contact form
- `/login` - User login
- `/signup` - User registration

### Protected Routes (requires auth)
- `/app/dashboard` - Main dashboard
- `/app/plans` - Browse savings plans
- `/app/bid/[planId]` - Place bids
- `/app/history` - Transaction history
- `/app/profile` - Profile & settings
- `/app/leader` - Leader management (leaders only)
- `/app/chat` - AI chatbot

## 🔧 Setup Instructions

### 1. Environment Variables
Copy `.env.example` to `.env.local` and fill in your Firebase config:

\`\`\`bash
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your-firebase-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=your-firebase-app-id

# Server-side only
PAYMENT_SECRET_KEY=your-payment-gateway-secret
AI_API_KEY=your-openai-api-key
\`\`\`

### 2. Firebase Setup

1. Create a Firebase project
2. Enable Authentication (Email/Password)
3. Create Firestore database
4. Set up Storage bucket
5. Deploy Cloud Functions (see `/lib/ai-responses.ts` for template)

### 3. Firestore Security Rules

\`\`\`javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can read/write their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Plans are readable by all authenticated users
    match /plans/{planId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && 
        (resource == null || resource.data.ownerUid == request.auth.uid);
    }
    
    // Payments are private to user
    match /payments/{paymentId} {
      allow read, write: if request.auth != null && 
        resource.data.userId == request.auth.uid;
    }
    
    // Rounds are readable, writable by cloud functions only
    match /rounds/{roundId} {
      allow read: if request.auth != null;
    }
    
    // Groups are readable by members
    match /groups/{groupId} {
      allow read: if request.auth != null && 
        request.auth.uid in resource.data.members;
      allow write: if request.auth != null && 
        resource.data.ownerUid == request.auth.uid;
    }
    
    // Chat messages are private to user
    match /chat/{userId}/messages/{messageId} {
      allow read, write: if request.auth != null && 
        request.auth.uid == userId;
    }
  }
}
\`\`\`

### 4. Cloud Functions

Deploy the AI chat function and other server-side logic:

\`\`\`bash
firebase deploy --only functions
\`\`\`

Key functions to implement:
- `aiReply` - AI chatbot responses
- `verifyDocument` - College ID verification
- `completeRound` - Process bidding rounds
- `promoteToLeader` - Handle leader applications
- `webhook/payment` - Payment gateway webhooks

## 💳 Payment Integration

### Razorpay Setup
1. Get API keys from Razorpay dashboard
2. Implement `createPaymentIntent` function
3. Handle webhooks for payment status updates

### Stripe Setup
1. Get API keys from Stripe dashboard
2. Implement payment intents
3. Set up webhook endpoints

## 🤖 AI Integration

The AI chatbot is ready for integration with OpenAI/ChatGPT:

1. Get OpenAI API key
2. Deploy the `aiReply` Cloud Function
3. Update the chat interface to call the function

Current implementation uses rule-based responses for demo purposes.

## 📊 Database Schema

### Collections

#### users/{uid}
\`\`\`javascript
{
  name: string,
  email: string,
  phone: string,
  college: string,
  createdAt: timestamp,
  completedGoals: number,
  leader: boolean,
  leaderGroups: array,
  collegeVerified: boolean,
  docUrl: string,
  profilePic: string
}
\`\`\`

#### plans/{planId}
\`\`\`javascript
{
  title: string,
  goalType: string, // laptop/phone/books/other
  amount: number,
  durationMonths: number,
  monthlyContribution: number,
  totalMembers: number,
  description: string,
  imageUrl: string,
  activeRounds: array
}
\`\`\`

#### rounds/{roundId}
\`\`\`javascript
{
  planId: string,
  roundNumber: number,
  startDate: timestamp,
  endDate: timestamp,
  members: array,
  bids: array,
  winnerUid: string,
  paid: boolean
}
\`\`\`

## 🔒 Security Features

- College email verification required
- Document verification for high-value transactions
- One bid per user per round (enforced client + server)
- Secure payment processing
- Firebase security rules
- Server-side validation for critical operations

## 📱 PWA Features

- Installable on mobile devices
- Offline support for basic functionality
- Push notifications for payment reminders
- Background sync for data updates

## 🎨 Design System

- **Colors**: Student-friendly orange primary (#ea580c)
- **Typography**: Geist Sans for headings, DM Sans for body
- **Components**: shadcn/ui component library
- **Responsive**: Mobile-first design
- **Accessibility**: WCAG compliant

## 🚀 Deployment

### Vercel (Recommended)
1. Connect GitHub repository
2. Set environment variables
3. Deploy automatically

### Firebase Hosting
\`\`\`bash
npm run build
firebase deploy --only hosting
\`\`\`

## 📈 Analytics & Monitoring

Recommended integrations:
- Firebase
