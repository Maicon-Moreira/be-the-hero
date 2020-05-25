const { celebrate, Segments, Joi } = require('celebrate')

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object({
            id: Joi.string().length(8)
        })
    })
}