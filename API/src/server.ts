import { app } from "./app";

const defaultPort = 3333

app.listen({
  host: "0.0.0.0",
  port: process.env.PORT ? Number(process.env.PORT) : defaultPort,
}, () => {
  console.log(`Server running`)
})