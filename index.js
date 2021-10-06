var http=require('http');
var url=require('url');
const PORT=process.env.PORT || 3000;
var querystring=require('querystring');
var server=http.createServer(function(request,response){
    var query=url.parse(request.url).query;
    var name=querystring.parse(query)['username'];
    var password=querystring.parse(query)["password"];
    response.write("<h1>My Info:</h1>");
    response.write("<h4>Author: Keerthi S</h4>");
    response.write("<h4>Roll no: 19ITR041</h4>");
    response.write("<h1>Server Information:</h1>");
    response.write("<h4>URL: "+request.url+"</h4>");
    response.write("<h4>Query: "+query+"</h4>");
    response.write("<h4>User: "+name+"</h4>");
    response.write("<h4>Password: "+password+"</h4>");
    response.write("<p style='color:red'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et possimus nulla voluptas nihil nostrum eaque, error velit exercitationem dolor harum culpa vitae corrupti eligendi ducimus consectetur, assumenda architecto ratione! At facere, sit iure soluta in voluptas consectetur dolore vel ipsum perferendis commodi alias quas maiores corporis dicta repudiandae obcaecati accusamus harum rem. Commodi eligendi corporis animi laboriosam amet quis?</p>")
    response.end();
}).listen(PORT);
console.log(PORT);

