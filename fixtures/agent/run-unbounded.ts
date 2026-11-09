// Fixture: must trigger orbit.agt.llm-call-without-spend-cap
export async function runAgent(prompt: string) {
  return client.chat.completions.create({ model: 'free-model', messages: [{ role: 'user', content: prompt }] })
}
