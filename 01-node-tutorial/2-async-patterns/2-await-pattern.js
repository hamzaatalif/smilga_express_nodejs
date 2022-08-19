const {readFile,writeFile} = require("fs").promises;

async function runTheCode(){
    try {
        let first = await readFile("./first.txt");
        let second = await readFile("./second.txt");
        writeFile(
            "./new-file.txt",
            `This is awesome text: ${first} ${second}`,
            {flag: "a"}
        )
    } catch (error) {
        console.log(error)
    }
}

runTheCode()