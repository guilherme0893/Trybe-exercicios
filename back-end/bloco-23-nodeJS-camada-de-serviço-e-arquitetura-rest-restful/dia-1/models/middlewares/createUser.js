const Joi = require('joi');
const rescue = require('express-rescue');
const user = require('../User');

const createUserSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
}).messages({
  'any.required': 'O campo label é obrigatório',
  'string.min': 'O campo password deve ter, pelo menos, 6 caracteres',
  'string.email': 'Informe um email válido no campo email',
});

module.exports = [
  (req, res, next) => {
    const { error } = createUserSchema.validate(req.body);
    if (error) return next(error);
    next();
  },
  rescue(async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  if (!user) {
    const error = new Error('Invalid data');
    error.status = 400;
    return next(error);
  }
  // se validou os dados --> cria novo
  const newUser = await user.createUser({ firstName, lastName, email, password });
  res.status(201).json(newUser);
  }),
];
