import Joi from 'joi';

const userInformationSchema = Joi.object({
	name: Joi.string().min(1).required(),
});

export default userInformationSchema;
