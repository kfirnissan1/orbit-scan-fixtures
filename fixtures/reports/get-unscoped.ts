// Fixture: must trigger orbit.iam.query-without-tenant
export async function getReport(id: string) {
  return db.report.findUnique({ where: { id } })
}
