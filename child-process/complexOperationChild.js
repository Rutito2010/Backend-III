process.on("message", message => {
    if (message === "start") {
        let result = 0
        for (let i = 0; i < 5e9; i++) {
                if (i % 1000000000 === 0) console.log(`Child ${process.pid}, at ${i}`)
                result += i
        }
        process.send(result)
    }
})