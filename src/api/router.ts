import { Router } from "express";
import { usersRouter } from "./users/users.controller"

const router = Router();

router.use("/add-user-account", usersRouter);

module.exports = router;
