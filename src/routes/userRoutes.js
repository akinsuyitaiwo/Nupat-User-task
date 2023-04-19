import {Router} from "express";
import {createUser, deleteUser, findMaleUsers, findAllUsers, getUserById, updateUsers} from "../controllers/userController.js";
import {verifyUser} from "../middleware/authentication.js";
// eslint-disable-next-line new-cap
const router = Router();


router.post("/signUp", createUser);
router.post("/:userId", updateUsers );


router.get("/:userId", getUserById);
router.get("/users", findAllUsers);
router.get("/sex/:sexType", verifyUser, findMaleUsers);


router.delete("/:userId", deleteUser);


export default router;
