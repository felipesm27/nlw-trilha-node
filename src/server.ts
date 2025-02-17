import fastify from "fastify";
import { fastifyCors } from "@fastify/cors";
import {
  validatorCompiler,
  serializerCompiler,
} from "fastify-type-provider-zod";
import { z } from "zod";

const app = fastify();

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.register(fastifyCors, {
  origin: "*",
});

app.post(
  "/subscriptions",
  {
    schema: {
      body: z.object({
        name: z.string(),
        email: z.string().email(),
      }),
    },
  },
  () => {
    return "Hello World";
  }
);

app.listen({ port: 3333 }).then(() => {
  console.log("Server is running on port 3333");
});
