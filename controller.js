const modelJam = require("../model/jam");
module.exports = {
  getJam: (req, res) => {
    Jam = modelJam.getJam;

    res.json(Jam);
  },
  insert: (req, res) => {
    newItem = modelJam.insert(req);
    res.status(201).json(newItem);
  },
  getJamByTipe: (req, res) => {
    dataJam = modelJam.getJamByTipe(req);
    if (dataJam != -1) {
      res.json(dataJam);
    } else {
      res.send("Jam dengan tipe : " + req.params.tipe + " tidak ditemukan");
    }
  },

  update: (req, res) => {
    Jam = modelJam.update(req);
    if (Jam != -1) {
      res.json(Jam);
    }
    res.send("data tidak ditemukan");
  },

  delete: (req, res) => {
    ket = modelJam.delete(req);
    res.send(ket);
  },
};
