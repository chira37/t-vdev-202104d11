import { RouteOptions } from 'fastify';
import * as movieController from '../controllers/movieController'
import * as informationController from '../controllers/informationController'

const getMoviesRoute: RouteOptions = {
	method: 'GET',
	url: '/api/movies',
	handler: movieController.getMovies,
};

const getInformationRoute: RouteOptions = {
	method: 'GET',
	url: '/api/info',
	handler: informationController.getInformations,
};

const routes = [getMoviesRoute, getInformationRoute];

export default routes;