import express from "express";
import pokemonsRoutes from "./routes/pokemons.routes.js";

const app = express();
app.use(express.json());
app.use(pokemonsRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running in port: ${port}`));
