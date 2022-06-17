import { prisma } from '../../services/Prisma.js'
import { CronJob } from 'cron'
import { getAllCompaniesDB } from './modules/companies/db.js'

const { company } = prisma

export const job = new CronJob('*/10 * * * * *', async () => {
  const date = new Date()
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const time = `${hours}:${minutes}`
  const { data: companies } = await getAllCompaniesDB()
  console.log(companies)

  const companiesAfterUpdate = companies.map((company) => {
    return {
      id: company.id,
      isOpen: time < company.closeAt && time >= company.openAt,
    }
  })

  // company.updateMany()
})
