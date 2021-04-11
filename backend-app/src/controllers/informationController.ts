import Information from '../models/Information'
import * as boom from 'boom';
import { FastifyRequest, FastifyReply } from 'fastify';



export const getInformations = async (req: FastifyRequest, reply: FastifyReply): Promise<any> => {
	try {
		const information = await Information.findOne();
		return information;
	} catch (error) {
		throw boom.boomify(error);
	}
};