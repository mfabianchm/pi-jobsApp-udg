const { BadRequestError } = require("../errors");

const testUser = (req, res, next) => {
  if (req.user.testUser) {
    throw new BadRequestError(
      "Has ingresado como usuario de prueba, solo lectura"
    );
  }
  next();
};

module.exports = testUser;
