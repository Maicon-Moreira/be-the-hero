const { celebrate, Segments, Joi } = require('celebrate')

module.exports = {
    index: celebrate({
        [Segments.QUERY]: Joi.object({
            page: Joi.number()
        })
    }),
    create: celebrate({
        [Segments.BODY]: Joi.object({
            title: Joi.string().required(),
            description: Joi.string().required(),
            value: Joi.number().required()
        }),
        [Segments.HEADERS]: Joi.object({
            authorization: Joi.string().length(8)
        }).unknown()
    }),
    delete: celebrate({
        [Segments.PARAMS]: Joi.object({
            id: Joi.number().required().min(0)
        }),
        [Segments.HEADERS]: Joi.object({
            authorization: Joi.string().length(8)
        }).unknown()
    })
}