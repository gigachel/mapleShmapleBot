import Fastify from "fastify";

export default async function runServer() {
    console.log("Run the server!");

    try {
        const port = process.env.PORT || 3000;
        const server = Fastify(); // { logger: true }

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

        await server.listen({ port });
        console.log("Listening on port", port);

        return server;
    } catch (err) {
        console.log(err, "errrrrrrrrrrrrr");
        // server.log.error(err);
        process.exit(1);
    }
}
