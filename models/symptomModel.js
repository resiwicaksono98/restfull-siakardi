import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Diseases from "./diseasesModel.js";
const { DataTypes } = Sequelize;

const Symptom = db.define(
  "symptoms",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    diseaseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stem: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    leaf: { type: DataTypes.STRING },
    fruit: { type: DataTypes.STRING },
    root: { type: DataTypes.STRING },
  },
  {
    freezeTableName: true,
  }
);
// Relation Desease To Symptom
Diseases.hasMany(Symptom, { foreignKey: { name: "diseaseId" }, as: "symptom" });
Symptom.belongsTo(Diseases, {
  foreignKey: { name: "diseaseId" },
  as: "disease",
});

export default Symptom;
