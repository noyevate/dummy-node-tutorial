const {readFile, writeFile} = require("fs")
readFile("./content/first.txt", "utf8" , (result, err) =>{
    if(err){
        return console.log(err)
    }
    const first = result
    console.log(first)

    readFile("./content/second.txt", "utf8", (resut, err) =>{
        if(err){
            console.log(err)
        }
        const second = result;
        console.log(second)
    })
})