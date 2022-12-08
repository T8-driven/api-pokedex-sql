import { Router } from "express";

import {create, findAll, findById, upadate, remove} from '../controllers/pokemons.controller.js'

const router = Router();

router.post("/pokemons", create);
router.get("/pokemons", findAll);
router.get("/pokemons/:id", findById);
router.patch("/pokemons/:id", upadate);
router.delete("/pokemons/:id", remove);

export default router;
