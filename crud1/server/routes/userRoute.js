const express = require("express")
const { create, getAll, updateUser, deleteUser } = require("../controllers/userController")
const Router = express.Router()

Router.post("/create", create)
Router.get("/getall", getAll)
Router.get("/getuser/:id", getAll)
Router.put("/updateuser/:id", updateUser)
Router.delete("/deleteuser/:id", deleteUser)


module.exports = Router