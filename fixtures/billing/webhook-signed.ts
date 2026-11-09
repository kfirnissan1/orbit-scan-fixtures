// Fixture: must NOT trigger orbit.pay.webhook-unverified
import Stripe from 'stripe'
const stripe = new Stripe(process.env.STRIPE_KEY ?? '')

export async function POST(req: Request) {
  const sig = req.headers.get('stripe-signature')
  const body = await req.text()
  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(body, sig!, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch {
    return new Response('invalid signature', { status: 400 })
  }
  return new Response(event.type)
}
