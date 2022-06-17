import { Router } from 'express'
import { validate } from '../../helpers/common.js'
import validations from './validations.js'
import { getAllCompanies, getCompanyById, createCompany } from './services.js'

const { getCompanyByIdSchema, createCompanySchema } = validations

const router = Router()

router.get('/', getAllCompanies)
router.get('/:companyId', validate(getCompanyByIdSchema), getCompanyById)
router.post('/', validate(createCompanySchema), createCompany)

export { router as companiesRoutes }
