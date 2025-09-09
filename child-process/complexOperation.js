export function complexOperation(req){
    let result = 0
       for (let i = 0; i < 5e9; i++) {
        if (i % 1000000000 === 0) console.log(`REQ ${req}, at ${i}`)
        result+= i
    }
    return result
}

