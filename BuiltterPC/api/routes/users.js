import express from 'express'
import { addUser, getUsers, deleteUser, updateUser, loginUser} from '../controllers/user.js'

const routerUsers = express.Router()

routerUsers.get("/user", getUsers);
routerUsers.post("/user/log", loginUser);
routerUsers.post("/user", addUser);
routerUsers.put("/user", updateUser);
routerUsers.post("/user/delete", deleteUser);

export default routerUsers