const { Blague } = require("../models");

exports.addBlague = async (req, res) => {
  try {
    const { question, reponse } = req.body;
    const nouvelleBlague = await Blague.create({ question, reponse });
    res.status(201).json(nouvelleBlague);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllBlagues = async (req, res) => {
  try {
    const blagues = await Blague.findAll();
    res.json(blagues);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getBlagueById = async (req, res) => {
  try {
    const blague = await Blague.findByPk(req.params.id);
    if (blague) {
      res.json(blague);
    } else {
      res.status(404).json({ message: "Blague non trouvée" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getRandomBlague = async (req, res) => {
  try {
    const count = await Blague.count();
    const randomIndex = Math.floor(Math.random() * count);
    const blagues = await Blague.findAll({ limit: 1, offset: randomIndex });
    res.json(blagues[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
