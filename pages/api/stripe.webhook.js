// pages/api/stripe-webhook.js
import { buffer } from 'micro';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Disable the default body parser to access the raw body.
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    let data;
    let eventType;

    // Read the webhook body and signature from the request headers.
    const rawBody = await buffer(req);
    const signature = req.headers['stripe-signature'];

    try {
      // Verify and construct the event using the signature and raw body.
      const event = stripe.webhooks.constructEvent(rawBody, signature, process.env.STRIPE_WEBHOOK_SECRET);

      // Extract the data and eventType from the verified event.
      data = event.data;
      eventType = event.type;
    } catch (err) {
      console.error('⚠️  Webhook signature verification failed.', err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle the checkout.session.completed event.
    if (eventType === 'checkout.session.completed') {
      const session = data.object;
      // Implement logic to handle a successful checkout session.
      // This is where you can fulfill orders or activate subscriptions.

      console.log(`🔔  Payment for session ${session.id} was successful!`);

      // Perform any other actions based on the session data.
    }

    // Confirm the event was handled.
    return res.json({ received: true });
  } else {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }
}
