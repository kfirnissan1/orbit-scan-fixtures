// Fixture: must NOT trigger orbit.agt.llm-call-without-spend-cap
export async function runAgent(prompt: string, customerId: string) {
  await checkSpend(customerId)
  return client.chat.completions.create({ model: 'free-model', messages: [{ role: 'user', content: prompt }] })
}
async function checkSpend(_id: string) {}
