import { Op } from "sequelize";
import Diseases from "../../models/diseasesModel.js";
import Symptom from "../../models/symptomModel.js";

export const createSympton = async (req, res, next) => {
  try {
    let payload = req.body;
    const symptom = await Symptom.create(payload);
    return res.status(200).json({ message: "Create Symptom", data: symptom });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getAllsymptom = async (req, res, next) => {
  try {
    const symptom = await Symptom.findAll({
      include: [
        {
          model: Diseases,
          as: "disease",
          attributes: ["name", "solution", "image_url"],
        },
      ],
    });
    return res.status(200).json({ message: "Get All Symptom", data: symptom });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getOneSymptom = async (req, res, next) => {
  try {
    const { id } = req.params;
    const idToArray = Array.from(id);
    const symptom = await Symptom.findAll({
      where: { id: idToArray },
      include: [
        {
          model: Diseases,
          as: "disease",
          attributes: ["name", "solution", "image_url"],
        },
      ],
    });
    if (!symptom) return res.status(404).json({ message: "Symptom not found" });
    return res.status(200).json({ message: "Get One Symptom", data: symptom });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateSymptom = async (req, res) => {
  try {
    const { id } = req.params;
    let payload = req.body;
    const symptom = await Symptom.update(payload, { where: { id } });
    if (symptom == 0)
      return res.status(401).json({ message: "Symptom failed update" });
    return res.status(200).json({ message: "Update Symptom", data: symptom });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const destroySymptom = async (req, res) => {
  const { id } = req.params;
  let symptopm = await Symptom.findByPk(id);
  if (!symptopm) return res.status(404).json({ message: "Symptom not found" });
  symptopm = await Symptom.destroy({ where: { id } });
  return res.status(200).json({ message: "Delete Symptom Success" });
};
