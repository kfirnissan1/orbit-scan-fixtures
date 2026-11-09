// Fixture: must trigger orbit.pay.webhook-unverified
export async function POST(req: Request) {
  const event = await req.json()
  switch (event.type) {
    case 'invoice.paid':
      await activatePlan(event.data)
  }
  return new Response('ok')
}

async function activatePlan(_data: unknown) {}
