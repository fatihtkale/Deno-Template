import { Router } from "https://deno.land/x/oak/mod.ts";
import {
  GetUser,
  GetUsers,
  AddUser,
  UpdateUser,
  DeleteUser
} from "../controllers/UserController.ts";

const router = new Router();

router.get("/api/v1/User", GetUsers)
  .get("/api/v1/User/:id", GetUser)
  .post("/api/v1/User", AddUser)
  .put("/api/v1/User/id", UpdateUser)
  .delete("/api/v1/User:id", DeleteUser);

export default router;
