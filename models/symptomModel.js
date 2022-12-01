import { Sequelize } from "sequelize";
import db from "../config/database.js";
const { DataTypes } = Sequelize;

const Sympton = db.define(
  "symptons",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    diseasesId: {
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

export default Sympton;
