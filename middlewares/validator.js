const boom = require('@hapi/boom');

function validateHandler (schema, property) {
  return (req, res, next) => {
    const data = req[property]
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) return next(boom.badRequest(error));
    next();
  }
};

module.exports = validateHandler;
