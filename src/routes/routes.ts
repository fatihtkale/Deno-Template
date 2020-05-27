import { Router } from "https://deno.land/x/oak/mod.ts";
import {
  GetUser,
  GetUsers,
  AddUser,
} from "../controllers/UserController.ts";

const router = new Router();

router.get("/api/v1/Users", GetUsers)
  .get("/api/v1/User/:id", GetUser)
  .post("/api/v1/User", AddUser);

export default router;
