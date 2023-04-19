import {Router} from "express";
import {createUser, deleteUser, findMaleUsers, findAllUsers, getUserById, updateUsers} from "../controllers/userController.js";
import {verifyUser} from "../middleware/authentication.js";
// eslint-disable-next-line new-cap
const router = Router();


router.post("/signUp", createUser);


router.get("users/:userId", getUserById);
router.get("/users/", findAllUsers);
router.get("users/gender/:genderType", verifyUser, findMaleUsers);

router.patch("users/:userId/", updateUsers );

router.delete("users/:userId", deleteUser);


export default router;
