import express from "express";

import {
  createManager,
  getManager,
  updateManager,
  getManagerProperties,
} from "../controllers/managerControllers";

const router = express.Router();

router.get("/:cognitoId", getManager);
router.put("/:cognitoId", updateManager);
router.get("/:cognitoId/properties", getManagerProperties);
router.post("/", createManager);

export default router;
