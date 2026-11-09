// Fixture: must NOT trigger orbit.iam.query-without-tenant
export async function getReport(id: string, tenantId: string) {
  return db.report.findUnique({ where: { id, tenantId } })
}
