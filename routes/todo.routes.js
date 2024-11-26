const { AddTodo, getTodo, Addblog, getblog } = require("../controller/Todo.controller")
const { addTodoLimiter } = require("../middleware/ratelimiter")

const router = require("express").Router()


router
    .post('/add', Addblog)
    .get('/get', getblog)

module.exports = router