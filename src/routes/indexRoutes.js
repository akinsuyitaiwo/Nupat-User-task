import {Router} from "express";
import userRoutes from "./userRoutes.js";

// eslint-disable-next-line new-cap
const router = Router();

router.use("/users", userRoutes);


export default router;
