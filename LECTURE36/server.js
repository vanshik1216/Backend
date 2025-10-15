const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const { Queue, Worker } = require('bullmq');
let codeQueue = new Queue("code-queue", {
    connection: {
        host: "localhost",
        port: 6379,
    }
});
app.post("/api/submission", async (req, res) => {
    const { qId, code, language } = req.body;

    // offload job  to message queueso that a worker can do task
    let result = await codeQueue.add("code-queue", {
        qId, code, language
    })
    //     console.log(result.id)
    //     console.log(result.data)
    res.json({
        submissionId: result.id
    })
})

let worker = new Worker("code-queue", (result) => {
    let { qId, code, language } = result.data;
    setTimeout(() => {
        return {
            qId: qId,
            status: success,
            time: "4ms",
            beat: "top 10%"
        }
    }, 5000)

}, {
    connection: {
        host: "localhost",
        port: 6379,
    },
})
worker.on("error", (err) => {
    console.log(err)
})
app.listen(3000, () => {
    console.log("server connected")
})