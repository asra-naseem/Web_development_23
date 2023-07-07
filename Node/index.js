const nfs = require("fs");
nfs.writeFile("message.txt","Hello from Asra",(err)=>{
 if(err) throw err;
 console.log("File has been saved!");
}
)
nfs.readFile("message.txt","utf8",(err,data)=>{
    if(err)
    throw err;
    console.log(data);
})