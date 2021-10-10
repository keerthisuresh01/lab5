var http=require('http');
const PORT=process.env.PORT ||4000;
http.createServer(function(req,res){
    res.write("<div><p>keerthis.19it@kongu.edu</p></div>");
    res.write("<h1>Hello World</h1>");
    res.end();
}
).listen(PORT);
console.log(PORT);