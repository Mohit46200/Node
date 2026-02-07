const fs = require("fs")

// **************creating a file (this method will overwrite in the file)***************

//sync
fs.writeFileSync("./test.txt","Hello there")


//async
fs.writeFile("./test.txt","Hello world",(err) => {})


// *************************reading from a already created file************************

//sync
const result = fs.readFileSync("./test2.txt","utf-8")
console.log(result)



//async
fs.readFile("./test2.txt","utf-8",(err,result) => {
    if(err){
        console.log("Error")
    }else{
        console.log(result)
    }
})


// ****************************appending nto a file*********************************


//sync
// fs.appendFileSync("./test2.txt",`Hello buddy\n`)

//async



// **************************making a copy of a file **********************************


// sync
fs.cpSync('./test2.txt','./copied_of_test2.txt')

//async

// **************************deleting a file**********************************

//sync
fs.unlinkSync("./copied_of_test2.txt")
//async



//there are many function like making a folder also using mkdir......etc ask to chat gpt





//code to check cpus
// const os=require("os")
// console.log(os.cpus().length)