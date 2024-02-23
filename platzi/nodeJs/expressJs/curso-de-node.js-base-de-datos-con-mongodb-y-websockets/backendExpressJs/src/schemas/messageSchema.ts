import Joi from 'joi';

const messageInformationSchema = Joi.object({
	user: Joi.string().min(1).required(),
	message: Joi.string().min(1).required(),
});

const messageUpdateInformationSchema = Joi.object({
	user: Joi.string().min(1).optional(),
	message: Joi.string().min(1).optional(),
});

export { messageInformationSchema, messageUpdateInformationSchema };
