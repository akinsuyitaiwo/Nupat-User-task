import Joi from "joi";

const options = {
  stripUnknown: true,
  abortEarly: false,
  errors: {
    wrap: {
      label: ""
    }
  }

};

// eslint-disable-next-line arrow-parens
const validateSignUp = (signup) => {
  const userSignUp = Joi.object({
    name: Joi.string().min(5).max(100).required(),
    gender: Joi.string().valid("male", "female").required()
  });
  return userSignUp.validate(signup, options);
};

// eslint-disable-next-line arrow-parens
const validateUpdate = (update) => {
  const userUpdate = Joi.object({
    name: Joi.string().min(5).max(100).required(),
  });
  return userUpdate.validate(update, options);
};

export {
  validateSignUp,
  validateUpdate
};
