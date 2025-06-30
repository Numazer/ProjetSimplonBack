const express = require("express");
const { sequelize, Blague } = require("./models"); // Import correct
const blagueRoutes = require("./routes/blagueRoutes");
const cors = require("cors");

const app = express();

app.use(cors()); // Pour autoriser les requêtes cross-origin (front sur autre domaine)
app.use(express.json()); // Pour parser le JSON dans les requêtes

app.use("/blagues", blagueRoutes); // Préfixe routes API blagues

// Synchronisation base + insertion initiale
sequelize.sync().then(async () => {
  console.log("Base de données synchronisée");

  const count = await Blague.count();
  if (count === 0) {
    await Blague.bulkCreate([
      { question: "Quelle est la femelle du hamster ?", reponse: "L’Amsterdam" },
      { question: "Que dit un oignon quand il se cogne ?", reponse: "Aïe" },
      { question: "Quel est l'animal le plus heureux ?", reponse: "Le hibou, parce que sa femme est chouette." },
      { question: "Pourquoi le football c'est rigolo ?", reponse: "Parce que Thierry en rit" },
      { question: "Quel est le sport le plus fruité ?", reponse: "La boxe, parce que tu te prends des pêches dans la poire et tu tombes dans les pommes." },
      { question: "Que se fait un Schtroumpf quand il tombe ?", reponse: "Un Bleu" },
      { question: "Quel est le comble pour un marin ?", reponse: "Avoir le nez qui coule" },
      { question: "Qu'est-ce que les enfants usent le plus à l'école ?", reponse: "Le professeur" },
      { question: "Quel est le sport le plus silencieux ?", reponse: "Le para-chuuuut" },
      { question: "Quel est le comble pour un joueur de bowling ?", reponse: "C’est de perdre la boule" },
    ]);
    console.log("Blagues insérées en BDD !");
  }

  app.listen(3000, () => console.log("Serveur démarré sur le port 3000"));
});
