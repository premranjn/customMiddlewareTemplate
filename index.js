import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path"
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));    

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/index.html");
});


function authenticate(req,res,next){
    console.log(req.body);
    if(req.body["password"]=="ILoveProgramming")
        next();
    else{
        res.send(`<h1>Oops Wronge Password!</h1>`)
        console.log("wrong password");
    }
}

app.use(authenticate);

app.post("/check", (req,res)=>{
    res.sendFile(__dirname + "/public/secret.html");
})

app.listen(port,()=>{
    console.log(`Server Running on Port ${port}`);
});