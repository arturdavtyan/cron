import { prisma } from '../../services/Prisma.js'

const { company } = prisma

export const getAllCompaniesDB = async () => {
  try {
    const companies = await company.findMany()
    return {
      data: companies,
      error: null,
    }
  } catch (error) {
    return {
      data: null,
      error: error,
    }
  }
}

export const getCompanyByIdDB = async (id) => {
  try {
    const foundCompany = await company.findUnique({
      where: {
        id: +id,
      },
    })
    return {
      data: foundCompany,
      error: null,
    }
  } catch (error) {
    return {
      data: null,
      error: error,
    }
  }
}

export const createCompanyDB = async (data) => {
  try {
    const createdCompany = await company.create({
      data,
    })
    return {
      data: createdCompany,
      error: null,
    }
  } catch (error) {
    return {
      data: null,
      error,
    }
  }
}
