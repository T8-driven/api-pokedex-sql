import express from "express";
import pokemonsRoutes from "./routes/pokemons.routes.js";

const app = express();
app.use(express.json());
app.use(pokemonsRoutes);

app.listen(5000, () => console.log("Server running in port: 5000"));
