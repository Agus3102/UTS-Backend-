const req = require("express/lib/request");
const jam = require("../controller/jam");

let Jam = [
  {
    tipe: "A-1",
    nama: "Unix",
    harga: "Rp. 400.000",
    Create: new Date(),
  },
  {
    tipe: "A-3",
    nama: "Ring",
    harga: "Rp. 350.000",
    Create: new Date(),
  },
  {
    tipe: "B-2",
    nama: "Bagus",
    harga: "Rp.200.000",
    Create: new Date(),
  },
  {
    tipe: "C-1",
    nama: "Rollex",
    harga: "Rp.500.000",
    Create: new Date(),
  },
];

const cari = (arrData, tipe) => {
  ketemu = -1;
  indeks = 0;
  while (ketemu == -1 && indeks < arrData.length - 1) {
    if (arrData[indeks].tipe == tipe) {
      ketemu = indeks;
      return indeks;
    }
    indeks++;
  }
  return -1;
};

module.exports = {
  getJam: Jam,
  insert: (req) => {
    const newItem = {
      tipe: req.body.tipe,
      nama: req.body.nama,
      harga: req.body.harga,
    };
    jam.push(newItem);
    return newItem;
  },
  getJamByTipe: (req) => {
    tipe = req.params.tipe;
    indeks = cari(Jam, tipe);
    if (indeks != -1) {
      const dataJam = {
        tipe: req.body.tipe,
        nama: req.body.nama,
        harga: req.body.harga,
      };
      return dataJam;
    }
    return indeks;
  },
  update: (req) => {
    tipe = req.params.tipe;
    indeks = cari(Jam, tipe);
    if (indeks != -1) {
      (Jam[indeks].tipe = tipe), (Jam[indeks].nama = req.body.nama);
      Jam[indeks].harga = req.body.harga;

      return Jam[indeks];
    }
    return -1;
  },
  delete: (req) => {
    tipe = req.params.tipe;
    indeks = cari(Jam, tipe);
    ket = "data tidak ditemukan";
    if (indeks != -1) {
      Jam.splice(indeks, 1);
      ket = "Data jam dengan tipe " + tipe + " berhasil dihapus";
    }
    return ket;
  },
};
