import Joi from 'joi'


const registerSchema = Joi.object({
    firstName: Joi.string().required().trim().messages({
        'string.empty': 'firstname is required'
    }),
    lastName: Joi.string().required().trim().messages({
        'string.empty': 'lastname is required'
    }),
    userName: Joi.string().required().trim().messages({
        'string.empty': 'username is required'
    }),
    email: Joi.alternatives()
    .try(
      Joi.string().email({ tlds: false })
    )
    .messages({
      'string.empty': 'must be a valid email address'
    }),
    password: Joi.string().alphanum().min(6).required().trim().messages({
        'string.empty': 'password is required',
        'string.alphanum': 'password must be a number or alphabet',
        'string.min': 'password must have 6 characters'
    }),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required().trim().messages({
      'any.only': 'password and confirm password did not match',
      'string.empty': 'confirm password is required'
    })
})

const validateRegister = input => {
    const {error} = registerSchema.validate(input, {
        abortEarly: false
    })

    if (error) {
        const result = error.details.reduce((acc, el) => {
          acc[el.path[0]] = el.message;
          return acc;
        }, {});
        
        return result;
      }
      
}

export default validateRegister