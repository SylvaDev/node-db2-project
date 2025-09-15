const Car = require('./cars-model')

const checkCarId = async (req, res, next) => {
  try {
    const car =  await Car.getById(req.params.id)
    if (!car) {
      next({ status: 404, message: 'no car with that id' })
    } else {
      req.car = car
      next()
    }
} catch(err) {
    next(err)
}
}

const checkCarPayload = (req, res, next) => {
  next({ status: 404, message: 'payload incorrect'})
}

const checkVinNumberValid = (req, res, next) => {
  next({ status: 404, message: 'vin number not valid'})
}

const checkVinNumberUnique = (req, res, next) => {
  next({ status: 404, message: 'vin not unique'})
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
}
