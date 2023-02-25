const fs = require("fs");
const http = require("http");
fs.writeFile("index.html", `<h1>Hello World</h1>\n<p>This is kamlesh </p>`, (error) => {
    console.log(error);
});
http.createServer((req, resp) => {

    fs.readFile("index.html", (error, data) => {
        resp.end(data);
    })


}).listen(5000);