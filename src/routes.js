const { Router } = require("express");
const db = require("./models/ConnectDatabase");

const rotas = Router();

// Listagem
rotas.get("/produtos", async (request, response) => {
  try {
    const produtos = await db.query("SELECT * FROM produtos");
    response.json(produtos);
  } catch (error) {
    response.status(500).json({ error: "Erro ao buscar produtos" });
  }
});

// Criação
rotas.post("/produtos", async (request, response) => {
  const { nome, descricao, preco, id_categoria } = request.body;
  try {
    const resultado = await db.query(
      "INSERT INTO produtos (nome, descricao, preco, id_categoria) VALUES (?, ?, ?, ?)",
      [nome, descricao, preco, id_categoria]
    );
    response.status(201).json({ message: "Produto criado com sucesso", id: resultado.insertId });
  } catch (error) {
    response.status(500).json({ error: "Erro ao criar produto" });
  }
});

// Atualização/Alteração
rotas.put("/produtos/:id", async (request, response) => {
  const { id } = request.params;
  const { nome, descricao, preco, id_categoria } = request.body;
  try {
    await db.query(
      "UPDATE produtos SET nome = ?, descricao = ?, preco = ?, id_categoria = ? WHERE id = ?",
      [nome, descricao, preco, id_categoria, id]
    );
    response.json({ message: "Produto atualizado com sucesso" });
  } catch (error) {
    response.status(500).json({ error: "Erro ao atualizar produto" });
  }
});

// Delete
rotas.delete("/produtos/:id", async (request, response) => {
  const { id } = request.params;
  try {
    await db.query("DELETE FROM produtos WHERE id = ?", [id]);
    response.json({ message: "Produto deletado com sucesso" });
  } catch (error) {
    response.status(500).json({ error: "Erro ao deletar produto" });
  }
});

module.exports = rotas;



