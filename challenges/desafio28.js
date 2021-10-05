const name = "LATAM AIRLINES BRASIL";
db.resumoVoos.insertOne({
  empresa: name,
  totalVoosDomesticos: db.voos.count({ "empresa.nome": name, natureza: "Doméstica" }),
});
db.resumoVoos.find({ empresa: name }, { _id: false });