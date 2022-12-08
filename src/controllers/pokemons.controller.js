import { connectionDB } from "../database/db.js";

export async function create(req, res) {
  const { nome, poder } = req.body;

  try {
    await connectionDB.query(
      "INSERT INTO pokemons (nome, poder) VALUES ($1, $2);",
      [nome, poder]
    );
    res.sendStatus(201);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function findAll(req, res) {
  try {
    const { rows } = await connectionDB.query("SELECT * FROM pokemons;");
    res.send(rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function findById(req, res) {
  const { id } = req.params;

  try {
    const { rows } = await connectionDB.query(
      "SELECT * FROM pokemons WHERE id=$1;",
      [id]
    );

    if (rows.length === 0) {
      res.status(404).send("Não existe nenhum pokemon com esse id");
    }

    res.send(rows[0]);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function upadate(req, res) {}

export async function remove(req, res) {}
