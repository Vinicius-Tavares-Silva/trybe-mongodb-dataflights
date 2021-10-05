db.voos.find(
  { $and: [
    { "aeroportoOrigem.sigla": "SBGR" },
    { "empresa.nome": { $in: ["DELTA AIRLINES", "AMERICAN AIRLINES"] } },
    { "aeroportoDestino.sigla": "KJFK" },
  ] },
  { vooId: true, _id: false },
).limit(1);