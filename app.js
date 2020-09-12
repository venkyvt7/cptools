const { readFileSync, readFile } = require("fs");

const home= readFileSync("main.html");
const prime=readFileSync("prime.html");
const  string11 =readFileSync("slegth.html");
const factors=readFileSync("factors.html");
const binary= readFileSync("binary.html");
const port=80;

const fs= require("fs");
const http=require("http");
console.log(123);

const express= require("express");

const app=express();


app.get(  "/", (req,res)=>{



res.end(home);



} );

app.get("/factors" , (req,res)=>{

    res.end(factors);
});

app.get("/prime",(req,res)=>{ res.end(prime) });

app.get("/string", (req,res)=>{res.end(string11)});

app.get("/binary", (req,res)=> {res.end(binary) });


app.listen(port,  ()=>{

console.log(port);



})
