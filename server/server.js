import express from "express"

const app = express()
const port = 3000

app.use(express.json())

app.get("/", (req,res)=>{
    res.json({message: "pong"})
})

// app.get('/api', (req, res)=>{
//     res.send("hello api endpoint")
// })

app.get("/resume", (req,res)=>{
    res.json({
        message: "test message"
    })
})

app.get("/api/jokes", (req,res)=>{
    const jokes = [
        {
            "id": 1,
            "title": "First joke",
            "content": "This is a joke"
        },
        {
            "id": 2,
            "title": "Second joke",
            "content": "This is second joke"
        },
        {
            "id": 1,
            "title": "Third joke",
            "content": "This is Third joke"
        },
    ]
    res.json(jokes)
})

app.listen(port, ()=>{
    console.log("server running")
})