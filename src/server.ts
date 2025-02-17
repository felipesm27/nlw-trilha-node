import fastify from "fastify";
import { fastifyCors } from "@fastify/cors";

const app = fastify();

app.register(fastifyCors, {
  origin: "*",
});

app.get("/hello", () => {
  return "hello";
});

app.listen({ port: 3333 }).then(() => {
  console.log("Server is running on port 3333");
});
