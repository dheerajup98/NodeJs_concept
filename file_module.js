const fs = require("fs");
const path = require('path');
const os = require("os");
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


// path
const b = "/dheeraj";

const c = path.join("C:\Users\dheer\OneDrive\Desktop\Node js>" + b);
console.log(c);

const f = path.basename(":UsersdheerOneDriveDesktopNode js>\dheeraj");
console.log(f);


// os module

console.log(os.hostname());
console.log(os.freemem());
