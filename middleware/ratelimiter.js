const rateLimit = require('express-rate-limit');

const addTodoLimiter = rateLimit({
    windowMs: 60 * 1000, // 1-minute window
    max: 2, // Limit each IP to 2 requests
    message: {
        status: 429,
        message: "You can only add 2 todos per minute. Please try again later.",
    },

});




module.exports = { addTodoLimiter }