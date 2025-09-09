import express from "express"
import { complexOperation } from "./complexOperation.js"
import { fork } from "child_process"
const app = express()
let amount = 0
// endpoint síncrono (bloqueante)
app.get("/", (req, res) => {
    amount++
    const result = complexOperation(amount)
    res.send(`Resultado: ${result}`)
})

// endpoint que usa child process
app.get("/child", (req,res)=>{
    const child = fork("./child-process/complexOperationChild.js")

    child.send("start")
    child.on("message", result=>{
        res.send(`Resultado: ${result}`)
    })
})

app.listen(8080, () => console.log("Server listen on 8080"))