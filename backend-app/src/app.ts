import * as fastify from "fastify";
import { config } from "./config";
import routes from "./routes";
import * as mongoose from "mongoose";


const app = fastify.default({ logger: true });
app.register(require('fastify-cors'));

routes.forEach((route) => {
    app.route(route);
});

const start = async (): Promise<void> => {
    try {
        await app.listen(1225);
    } catch (error) {
        app.log.error(error);
        process.exit(1);
    }
};
start();

export default app;

mongoose
    .connect(config.db.connection, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.log.info("conneted to monogoDB"))
    .catch((error) => app.log.error(error));


