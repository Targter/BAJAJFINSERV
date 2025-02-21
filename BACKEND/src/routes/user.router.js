import { Router } from "express";
import { getResponse, userIdUpload } from "../controllers/user.controller.js";
const router = Router();

router.route("/process").post(userIdUpload);
router.route("/process").get(getResponse);
router.route("/").get(getResponse);
export default router;
