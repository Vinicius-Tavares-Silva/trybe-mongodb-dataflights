db.voos.find(
  { litrosCombustivel: { $exists: true, $lt: 600 }, "empresa.nome": { $ne: "GOL" } },
  { vooId: true, litrosCombustivel: true, "empresa.nome": true, _id: false },
).limit(1);