
const fs= require("fs");
const http= require("http");

const mainn1 = fs.readFileSync("main.html");
const prime= fs.readFileSync("prime.html");
const factors= fs.readFileSync("factors.html");
const string = fs.readFileSync("slegth.html");


const hostname = '127.0.0.1';
const port = 10;
const server = http.createServer(   (req,res) => {
console.log(req.url);
url=req.url;



res.statusCode = 200;
res.setHeader('Content-Type', 'text/html');

if(url=='/')
{
res.end(mainn1);
}

else if(url=='/factors')
{
res.end(factors);

}

else if(url=='/prime')
{
res.end(prime);

}

else if(url=='/string')
{
res.end(string);


}



else
{

res.end(`  <h1>  404 NOT FOUND <h1> `);

}






});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });








