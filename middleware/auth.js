import Admin from "../models/adminModel.js";

export const adminOnly = async (req, res, next) => {
  try {
    if (!req.session.adminId)
      return res.status(401).json({ msg: "Please Your Login Admin" });
    const admin = await Admin.findOne({
      where: { id: req.session.adminId },
    });
    if (!admin) return res.status(404).json({ msg: "User not found" });
    req.adminId = admin.adminId;
    next();
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
