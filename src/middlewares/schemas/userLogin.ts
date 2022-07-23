import Joi from 'joi';

const loginInfo = Joi.object({
  username: Joi.string().min(3).required(),
});

export default loginInfo;
