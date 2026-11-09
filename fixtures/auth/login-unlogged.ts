// Fixture: must trigger orbit.log.auth-route-unlogged
export async function POST(req: Request) {
  const { email, password } = await req.json()
  const ok = await checkPassword(email, password)
  if (!ok) return new Response('denied', { status: 401 })
  return new Response('ok')
}
async function checkPassword(_e: string, _p: string) { return true }
