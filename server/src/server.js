import Fastify from "fastify";

let server;
const port = process.env.PORT || 3030;
const host = process.env.HOST || "node2";

export function createServer() {
    try {
        server = Fastify(); // { logger: true }

        server.get("/111", async (request, reply) => {
            return "world";
        });

        server.setErrorHandler(function (error, request, reply) {
            console.log("[LOG] : error-------------", error);
            // if (error instanceof Fastify.errorCodes.FST_ERR_BAD_STATUS_CODE) {
            //     // Log error
            //     this.log.error(error);
            //     // Send error response
            //     reply.status(500).send({ ok: false });
            // }
        });

        // server.register(productRoutes, { prefix: "/api/products" });

        return server;
    } catch (err) {
        console.log(err, "errrrrrrrrrrrrr createServer");
        // server.log.error(err);
        process.exit(1);
    }
}

export async function runServer() {
    console.log("Run the server!");

    try {
        await server.listen({ port, host });
        console.log("Listening on port", port);
    } catch (err) {
        console.log(err, "errrrrrrrrrrrrr runServer");
        // server.log.error(err);
        process.exit(1);
    }
}
