import Result from "../../models/resultModel.js";

export const createResult = async (req, res) => {
  try {
    let payload = req.body;
    const result = await Result.create(payload);
    res.status(200).json({ message: "Create Result", data: result });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getAllResult = async (req, res) => {
  try {
    const result = await Result.findAll();
    return res.status(200).json({ message: "Get All Result", data: result });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getOneResult = async (req, res) => {
  try {
    const { id } = req.params;
    let result = await Result.findOne({ where: { id } });
    if (!result) return res.status(404).json({ message: "Result not found" });
    result = await Result.findOne({ where: { id: result.id } });
    return res.status(200).json({ message: "Get One Result", data: result });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateResult = async (req, res) => {
  try {
    const { id } = req.params;
    let payload = req.body;
    let result = await Result.findOne({ where: { id } });
    if (!result) return res.status(404).json({ message: "Result not found" });
    result = await Result.update(payload, { where: { id: result.id } });
    return res.status(200).json({ message: "Update Result", data: result });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const destroyResult = async (req, res) => {
  const { id } = req.params;
  let result = await Result.findOne({ where: { id } });
  if (!result) return res.status(404).json({ message: "Result not found" });
  result = await Result.destroy({ where: { id: result.id } });
  return res.status(200).json({ message: "Delete Success", data: result });
};
