const { celebrate, Segments, Joi } = require('celebrate')

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object({
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            whatsapp: Joi.string().required().min(10).max(11),
            city: Joi.string().required(),
            uf: Joi.string().length(2)
        })
    })
}