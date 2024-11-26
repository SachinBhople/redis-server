const asyncHandler = require("express-async-handler")
const Todo = require("../models/Todo")
const { redis } = require("../utils/redis")




exports.Addblog = asyncHandler(async (req, res) => {
    await Todo.create(req.body)
    res.json({ message: "Create Successs" })
})



exports.getblog = asyncHandler(async (req, res) => {

    const exists = await redis.exists('blog')
    let value
    if (exists) {
        value = await redis.get('blog')
        await redis.expire('blog', 10)
        console.log("if valuee exists");
    } else {
        console.log("if valuee not exists");
        const result = await Todo.find()
        await redis.set('blog', JSON.stringify(result))
        await redis.expire('blog', 10)
        value = await redis.get('blog')
        console.log(value, "value");

    }
    const parsedata = JSON.parse(value)
    console.log("parsedata", parsedata);
    res.status(200).json({ message: "todo fetch success" })
})

