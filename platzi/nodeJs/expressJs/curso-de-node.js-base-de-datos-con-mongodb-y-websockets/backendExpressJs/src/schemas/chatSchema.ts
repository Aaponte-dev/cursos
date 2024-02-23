import Joi from 'joi';

const chatInformationSchema = Joi.object({
	users: Joi.array().items(Joi.string().guid()).min(1).required(),
});

export default chatInformationSchema;
