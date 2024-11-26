const { default: Redis } = require("ioredis")


const redis = new Redis(process.env.REDIS_HOST)
redis.on('error', (err) => {
    console.error("Redis connection error:", err);
})
module.exports = { redis }


// const { default: Redis } = require("ioredis")


// const redis = new Redis({
//     host: process.env.REDIS_HOST || 'localhost',
//     port: process.env.REDIS_PORT || 6379,
// })
// redis.on('error', (err) => {
//     console.error("Redis connection error:", err);
// })
// module.exports = { redis }





// const Redis = require("ioredis");

// const redis = new Redis({
//     host: process.env.REDIS_HOST || 'localhost',
//     port: process.env.REDIS_PORT || 6379,
//     password: process.env.REDIS_PASSWORD || undefined,
//     tls: process.env.REDIS_TLS ? {} : undefined, // Enable TLS for secure connections
// });

// redis.on('connect', () => {
//     console.log("Connected to Redis successfully.");
// });

// redis.on('error', (err) => {
//     console.error("Redis connection error:", err);
// });

module.exports = { redis };
