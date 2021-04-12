
import { config } from "./config";
import routes from "./routes";
import * as mongoose from "mongoose";
const path = require("path");
const fastifyStatic = require('fastify-static')
const fastifyCore = require('fastify-cors')

const fastify = require('fastify')({logger: true})
const DistPath = path.join(__dirname, "../..", "web-app/dist");

fastify.register(fastifyCore);
fastify.register(fastifyStatic, {
    root: DistPath,
});

fastify.get("/", async (request: any, reply: { sendFile: (arg0: string) => void; }) => {
    try {
        reply.sendFile("index.html");
    } catch (error) {
        fastify.log.error(error);
    }
});


routes.forEach((route) => {
    fastify.route(route);
});

const start = async (): Promise<void> => {
    try {
        console.log()
        await fastify.listen(1225);
    } catch (error) {
        fastify.log.error(error);
        process.exit(1);
    }
};
start();

export default fastify;

mongoose
    .connect(config.db.connection, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => fastify.log.info("conneted to monogoDB"))
    .catch((error) => fastify.log.error(error));


