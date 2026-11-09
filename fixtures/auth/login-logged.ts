// Fixture: must NOT trigger orbit.log.auth-route-unlogged
import { log } from '@/lib/logger'
export async function POST(req: Request) {
  const { email, password } = await req.json()
  const ok = await checkPassword(email, password)
  log.info({ event: 'auth.login', outcome: ok ? 'success' : 'failed', actor_id: email })
  if (!ok) return new Response('denied', { status: 401 })
  return new Response('ok')
}
async function checkPassword(_e: string, _p: string) { return true }
