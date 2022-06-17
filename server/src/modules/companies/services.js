import { getAllCompaniesDB, createCompanyDB, getCompanyByIdDB } from './db.js'

export const getAllCompanies = async (req, res, next) => {
  try {
    const companies = await getAllCompaniesDB()
    res.json(companies)
  } catch (error) {
    next(error)
  }
}

export const createCompany = async (req, res, next) => {
  console.log(req.body)
  try {
    const createdCompany = await createCompanyDB(req.body)
    res.json(createdCompany)
  } catch (error) {
    console.log(error.message)
    next(error)
  }
}

export const getCompanyById = async (req, res, next) => {
  try {
    const foundCompany = await getCompanyByIdDB(req.params.id)
    res.json(foundCompany)
  } catch (error) {
    next(error)
  }
}
