import Movie from '../models/Movie'
import * as boom from 'boom';
import { FastifyRequest, FastifyReply } from 'fastify';



export const getMovies = async (req: FastifyRequest, reply: FastifyReply): Promise<Document[]> => {
	try {
		const movies = await Movie.find();
		return movies;
	} catch (error) {
		throw boom.boomify(error);
	}
};