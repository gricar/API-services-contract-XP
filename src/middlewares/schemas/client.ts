import Joi from 'joi';

const clientDeposit = Joi.object({
  clientCode: Joi.number().integer().positive().required(),
  amount: Joi.number().precision(2).positive().required(),
});

export default clientDeposit;
