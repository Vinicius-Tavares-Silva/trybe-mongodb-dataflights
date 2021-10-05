db.voos.find(
  { litrosCombustivel: { $exists: true, $lt: 1000 } },
  { vooId: true, litrosCombustivel: true, _id: false },
).limit(1);