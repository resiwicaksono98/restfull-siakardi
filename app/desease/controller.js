import Diseases from "../../models/diseasesModel.js";
import fs from "fs";

export const createDisease = async (req, res, next) => {
  try {
    let payload = req.body;
    const addImage = {
      ...payload,
      image_url: req.file ? "images/" + req.file.filename : null,
    };
    const diseases = await Diseases.create(addImage);
    return res.status(200).json({ message: "Create Diseases", data: diseases });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getAllDisease = async (req, res, next) => {
  try {
    const diseases = await Diseases.findAll();
    return res
      .status(200)
      .json({ message: "Get All Diseases", data: diseases });
  } catch (error) {
    return res.status(500).json({ eror: error.message });
  }
};

export const getOneDiseases = async (req, res, next) => {
  try {
    const diseases = await Diseases.findOne({
      where: { name: req.params.name },
    });
    return res
      .status(200)
      .json({ message: "Get One Diseases", data: diseases });
  } catch (error) {
    return res.status(500).json({ eror: error.message });
  }
};

export const updateDiseases = async (req, res, next) => {
  try {
    let payload = req.body;
    let diseases = await Diseases.findOne({ where: { id: req.params.id } });
    if (!diseases)
      return res.status(400).json({ message: "Diseases not found" });
    const imagePath = `public/${diseases.image_url}`;
    if (req.file) {
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
      payload = {
        ...payload,
        image_url: req.file ? "images/" + req.file.filename : null,
      };
    }

    diseases = await Diseases.update(payload, {
      where: { id: diseases.id },
    });
    return res.status(200).json({ message: "Update Diseases", data: diseases });
  } catch (error) {
    return res.status(500).json({ eror: error.message });
  }
};

export const destroyDisease = async (req, res, next) => {
  const { id } = req.params;
  let diseases = await Diseases.findByPk(id);
  if (!diseases) return res.status(404).json({ message: "Diseases Not Found" });
  if (diseases.image_url) {
    fs.unlinkSync(`public/${diseases.image_url}`);
  }
  diseases = await Diseases.destroy({ where: { id } });
  return res.status(200).json({ message: "Delete Successfully" });
};
