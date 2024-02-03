const fs = require("fs");

// console.log("file built-in module in node js");

// asynchronus 


// Read file

// fs.readFile("./sample.txt","utf-8",(err,data)=>{

//     if(err)
//     {
//         return err;
//     }
//     console.log(data);
// });



// synchronous

const sync = fs.readFileSync("./sample.txt","utf-8")

// console.log(sync);


// write file 
const d = "dheeraj how are everything is good...";

fs.writeFile("./dheeraj.txt",d, ()=>{
    return true;
});