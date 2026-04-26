// AI Response Templates and Logic
// TODO: Replace with actual AI API integration (OpenAI, ChatGPT, etc.)

interface UserContext {
  name?: string
  completedGoals?: number
  activePlans?: any[]
  upcomingPayments?: any[]
  leader?: boolean
}

export class AIResponseGenerator {
  private static responses = {
    greeting: [
      "Hello {name}! 👋 I'm your AI Digital Leader, here to help you achieve your savings goals.",
      "Hi {name}! Ready to work on your financial goals today?",
      "Welcome back, {name}! Let's check on your savings progress.",
    ],

    goals: [
      "You currently have {activeCount} active plans with a total of ₹{totalSaved} saved so far!",
      "Your savings journey is looking great! Here's your current progress across all goals:",
      "Let me show you how you're doing with your {activeCount} active savings plans:",
    ],

    payments: [
      "Your next payment of ₹{amount} is due on {date}. Would you like me to set a reminder?",
      "You have {count} upcoming payments totaling ₹{total}. Here are the details:",
      "Payment reminder: ₹{amount} due {timeframe} for your {planName} goal.",
    ],

    bidding: [
      "Great question about bidding! The current lowest bid is ₹{amount}. Here's my strategy advice:",
      "For the {planName} bidding round, I recommend considering these factors:",
      "Bidding closes in {timeLeft}. Based on your financial situation, here's what I suggest:",
    ],

    tips: [
      "Here are some personalized savings tips based on your current progress:",
      "I've analyzed your savings pattern and have some suggestions to help you save more effectively:",
      "Let me share some strategies that work well for students in similar situations:",
    ],

    leader: [
      "You've completed {completed} goals! You need {remaining} more to become eligible for leader status.",
      "The leader program offers great benefits! With {completed} completed goals, you're {progress}% there.",
      "Leaders earn 70% commission on group activities. Here's how you can qualify:",
    ],

    help: [
      "I can help you with savings goals, payment schedules, bidding strategies, and financial advice.",
      "Here are the main areas I can assist you with:",
      "I'm designed to be your personal financial assistant for the Uni Chit platform.",
    ],

    fallback: [
      "I understand you're asking about your savings journey. Let me help you with that!",
      "That's a great question! Let me provide you with some relevant information.",
      "I'm here to help with your financial goals. Could you be more specific about what you'd like to know?",
    ],
  }

  static generateResponse(intent: string, context: UserContext = {}): string {
    const templates = this.responses[intent as keyof typeof this.responses] || this.responses.fallback
    const template = templates[Math.floor(Math.random() * templates.length)]

    return this.interpolateTemplate(template, context)
  }

  private static interpolateTemplate(template: string, context: UserContext): string {
    return template.replace(/\{(\w+)\}/g, (match, key) => {
      const value = context[key as keyof UserContext]
      return value !== undefined ? String(value) : match
    })
  }

  static classifyIntent(message: string): string {
    const lowerMessage = message.toLowerCase()

    if (lowerMessage.includes("goal") || lowerMessage.includes("plan")) return "goals"
    if (lowerMessage.includes("payment") || lowerMessage.includes("due")) return "payments"
    if (lowerMessage.includes("bid") || lowerMessage.includes("deadline")) return "bidding"
    if (lowerMessage.includes("save") || lowerMessage.includes("tip")) return "tips"
    if (lowerMessage.includes("leader") || lowerMessage.includes("commission")) return "leader"
    if (lowerMessage.includes("help") || lowerMessage.includes("how")) return "help"

    return "fallback"
  }
}

// Cloud Function Template for AI Integration
export const aiChatFunction = `
// Cloud Function: aiReply
// TODO: Deploy this to Firebase Cloud Functions

const functions = require('firebase-functions');
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: functions.config().openai.key, // Set via: firebase functions:config:set openai.key="your-key"
});
const openai = new OpenAIApi(configuration);

exports.aiReply = functions.https.onCall(async (data, context) => {
  // Verify user is authenticated
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'User must be authenticated');
  }

  const { message, userContext } = data;

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: \`You are a helpful AI assistant for Uni Chit, a student chit fund platform. 
                   Help users with savings goals, payment reminders, bidding strategies, and financial advice.
                   Be friendly, encouraging, and focus on student financial wellness.
                   User context: \${JSON.stringify(userContext)}\`
        },
        {
          role: "user",
          content: message
        }
      ],
      max_tokens: 200,
      temperature: 0.7,
    });

    return {
      reply: completion.data.choices[0].message.content,
      timestamp: new Date().toISOString()
    };
  } catch (error) {
    console.error('OpenAI API error:', error);
    throw new functions.https.HttpsError('internal', 'Failed to generate AI response');
  }
});
`
