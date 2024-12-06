//HTTP istekleri için express kütüphanesi eklendi.
const express = require("express");

//Farklı portlarda çalıştığımız için tarayıcının istek trafiklerini engelememesi için cors kütüphanesi eklendi.
const cors = require("cors");

//express ayağa kaldırıldı. Server tarafı için 4000 Portu tanımlandı.
const app = express();
const PORT = 4000;

//Farklı portlardan gelen istekler karşılansın diye cors politikası etkinleştirildi.
app.use(cors());

//Bina verileri manuel olarak şeklinde eklendi. İstenen attributeler mevcuttur.
const buildings = [
  {
    id: 1,
    name: "Efem",
    location: "Göztepe",
    totalConsumption: 1500,
    dailyUsage: [20, 21, 40, 37, 26, 25, 48],
  },
  {
    id: 2,
    name: "Karadeniz",
    location: "Alaybey",
    totalConsumption: 1200,
    dailyUsage: [15, 16, 37, 28, 44, 20, 32],
  },
  {
    id: 3,
    name: "Yılmaz",
    location: "Alsancak",
    totalConsumption: 900,
    dailyUsage: [12, 23, 41, 28, 36, 17, 17],
  },
  {
    id: 4,
    name: "Akman",
    location: "Güzelyalı",
    totalConsumption: 1800,
    dailyUsage: [55, 66, 57, 40, 29, 60, 55],
  },
  {
    id: 5,
    name: "Eroğlu",
    location: "Hatay",
    totalConsumption: 2100,
    dailyUsage: [68, 31, 77, 85, 85, 91, 74],
  },
  {
    id: 6,
    name: "Fatih Sitesi",
    location: "Bornova",
    totalConsumption: 1300,
    dailyUsage: [38, 39, 20, 41, 42, 43, 40],
  },
  {
    id: 7,
    name: "Göztepeliler",
    location: "Güzelyalı",
    totalConsumption: 1000,
    dailyUsage: [20, 23, 34, 35, 26, 44, 30],
  },
  {
    id: 8,
    name: "Han",
    location: "Şirinyer",
    totalConsumption: 900,
    dailyUsage: [20, 31, 32, 23, 24, 26, 28],
  },
  {
    id: 9,
    name: "Gökay Residence",
    location: "Bornova",
    totalConsumption: 2500,
    dailyUsage: [82, 55, 96, 87, 85, 87, 79],
  },
  {
    id: 10,
    name: "Jale",
    location: "Karşıyaka",
    totalConsumption: 800,
    dailyUsage: [23, 29, 23, 28, 32, 36, 28],
  },
  {
    id: 11,
    name: "Koray Sitesi",
    location: "Karşıyaka",
    totalConsumption: 1700,
    dailyUsage: [57, 56, 56, 49, 59, 61, 56],
  },
  {
    id: 12,
    name: "Lalezar",
    location: "Buca",
    totalConsumption: 1400,
    dailyUsage: [47, 38, 49, 40, 51, 52, 43],
  },
  {
    id: 13,
    name: "Mert",
    location: "Balçova",
    totalConsumption: 1100,
    dailyUsage: [34, 25, 36, 37, 36, 49, 41],
  },
  {
    id: 14,
    name: "Yamaç",
    location: "Göztepe",
    totalConsumption: 950,
    dailyUsage: [32, 33, 24, 25, 26, 28, 30],
  },
  {
    id: 15,
    name: "Onat",
    location: "Bostanlı",
    totalConsumption: 1600,
    dailyUsage: [59, 51, 52, 43, 54, 64, 64],
  },
  {
    id: 16,
    name: "Pınar Sitesi",
    location: "Manavkuyu",
    totalConsumption: 1950,
    dailyUsage: [54, 55, 63, 67, 58, 58, 66],
  },
  {
    id: 17,
    name: "Eda",
    location: "Buca",
    totalConsumption: 1750,
    dailyUsage: [29, 67, 65, 44, 58, 62, 54],
  },
  {
    id: 18,
    name: "Hoşgör",
    location: "Karşıyaka",
    totalConsumption: 1250,
    dailyUsage: [42, 42, 42, 40, 37, 46, 43],
  },
  {
    id: 19,
    name: "Senem Residence",
    location: "Alsancak",
    totalConsumption: 2200,
    dailyUsage: [68, 69, 60, 71, 77, 73, 66],
  },
  {
    id: 20,
    name: "Yalçınkaya",
    location: "Karabağlar",
    totalConsumption: 900,
    dailyUsage: [22, 36, 35, 25, 30, 31, 30],
  },
  {
    id: 21,
    name: "Güneş",
    location: "Hatay",
    totalConsumption: 1600,
    dailyUsage: [50, 41, 49, 59, 56, 60, 55],
  },
  {
    id: 22,
    name: "Barış",
    location: "Bornova",
    totalConsumption: 1200,
    dailyUsage: [35, 46, 42, 38, 46, 44, 47],
  },
  {
    id: 23,
    name: "Özge Sitesi",
    location: "Bornova",
    totalConsumption: 2900,
    dailyUsage: [102, 97, 78, 114, 95, 89, 96],
  },
  {
    id: 24,
    name: "Diren Plaza",
    location: "Çamdibi",
    totalConsumption: 2800,
    dailyUsage: [78, 78, 77, 72, 86, 85, 95],
  },
  {
    id: 25,
    name: "Güçlü İş Merkezi",
    location: "Halkapınar",
    totalConsumption: 3100,
    dailyUsage: [126, 124, 120, 129, 105, 97, 117],
  },
  {
    id: 26,
    name: "Renkli",
    location: "Hatay",
    totalConsumption: 1650,
    dailyUsage: [54, 54, 54, 52, 57, 61, 60],
  },
  {
    id: 27,
    name: "Palmiye",
    location: "Alsancak",
    totalConsumption: 1000,
    dailyUsage: [28, 32, 36, 34, 34, 33, 29],
  },
  {
    id: 28,
    name: "Haliloğlu",
    location: "Gaziemir",
    totalConsumption: 700,
    dailyUsage: [23, 20, 27, 22, 22, 21, 24],
  },
  {
    id: 29,
    name: "Ilgın Sitesi",
    location: "Bostanlı",
    totalConsumption: 2500,
    dailyUsage: [85, 87, 87, 85, 82, 83, 84],
  },
  {
    id: 30,
    name: "Yılmaz",
    location: "Şirinyer",
    totalConsumption: 800,
    dailyUsage: [35, 30, 26, 20, 26, 32, 31],
  },
  {
    id: 31,
    name: "Yonca",
    location: "Güzelyalı",
    totalConsumption: 1600,
    dailyUsage: [55, 54, 49, 64, 61, 55, 56],
  },
  {
    id: 32,
    name: "Manolya Sitesi",
    location: "Çamdibi",
    totalConsumption: 1400,
    dailyUsage: [45, 45, 46, 46, 44, 46, 44],
  },
  {
    id: 33,
    name: "Özer",
    location: "Gaziemir",
    totalConsumption: 1400,
    dailyUsage: [48, 46, 45, 50, 47, 48, 47],
  },
  {
    id: 34,
    name: "Niğdeliler Sitesi",
    location: "Buca",
    totalConsumption: 2650,
    dailyUsage: [85, 87, 92, 96, 87, 88, 84],
  },
  {
    id: 35,
    name: "Oylum",
    location: "Karşıyaka",
    totalConsumption: 1450,
    dailyUsage: [50, 43, 43, 51, 44, 45, 48],
  },
  {
    id: 36,
    name: "Çakıl",
    location: "Karabağlar",
    totalConsumption: 2000,
    dailyUsage: [74, 71, 65, 65, 70, 62, 70],
  },
  {
    id: 37,
    name: "Çallı",
    location: "Balçova",
    totalConsumption: 1850,
    dailyUsage: [61, 68, 71, 74, 60, 62, 61],
  },
  {
    id: 38,
    name: "Ergüney",
    location: "Alsancak",
    totalConsumption: 2250,
    dailyUsage: [67, 81, 75, 81, 69, 80, 71],
  },
  {
    id: 39,
    name: "Serdivan",
    location: "Karataş",
    totalConsumption: 2200,
    dailyUsage: [68, 66, 68, 65, 74, 71, 65],
  },
  {
    id: 40,
    name: "Tosun Sitesi",
    location: "Bostanlı",
    totalConsumption: 2900,
    dailyUsage: [120, 130, 112, 97, 97, 91, 103],
  },
];

//GET HTTP /buildings endpontine yapılan istekleri işleyen metot yazıldı.
app.get("/buildings", (req, res) => {
  res.json(buildings); //İstemciye yanıt gönderir. Kullanıcı tüm bina listesini ekranında görüntüler.
});

// Yine GET HTTP /buildings/:id endpointine belirlenmiş bir id ile ilişkili binayı döndürecek metot yazıldı.
app.get("/buildings/:id", (req, res) => {
  const building = buildings.find((b) => b.id === parseInt(req.params.id)); //String olarak gelen id değeri integer'a dönüştürülür ve find metoduyla ilgil id ile eşleşen bina bulunur.
  if (building) {
    res.json(building); // Binayı direkt olarak döndürüyoruz. Kullanıcı ilgili binanın 7 günlük su tüketimlerini görüntüleyecek.
  } else {
    res.status(404).send("Building not found"); // İlgili id'ye haiz bina bulunamazsa 4000 portunda yani server arayüzünde bu mesajı görüyoruz.
  }
});

// Sunucu atanan Portta başlatıldı.
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
