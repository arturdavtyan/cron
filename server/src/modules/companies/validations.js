import Joi from 'joi'

export default {
  getCompanyByIdSchema: {
    params: Joi.object({
      companyId: Joi.number().integer().required(),
    }),
  },

  createCompanySchema: {
    body: Joi.object({
      name: Joi.string().required(),
      account: Joi.number().positive(),
      closeAt: Joi.string().required(),
      openAt: Joi.string().required(),
    }),
  },
}
