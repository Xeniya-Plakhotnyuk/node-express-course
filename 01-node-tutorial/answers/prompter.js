const http = require("http");
var StringDecoder = require("string_decoder").StringDecoder;

const getBody = (req, callback) => {
  const decode = new StringDecoder("utf-8");
  let body = "";
  req.on("data", function (data) {
    body += decode.write(data);
  });
  req.on("end", function () {
    body += decode.end();
    const body1 = decodeURI(body);
    const bodyArray = body1.split("&");
    const resultHash = {};
    bodyArray.forEach((part) => {
      const partArray = part.split("=");
      resultHash[partArray[0]] = partArray[1];
    });
    callback(resultHash);
  });
};

// here, you could declare one or more variables to store what comes back from the form.
// let item = "Enter your name below.";
// let course = "Enter what course you take with CTD!"

// here, you can change the form below to modify the input fields and what is displayed.
// This is just ordinary html with string interpolation.
// const form = () => {
//   return `
//   <body>
//   <p>${item}</p>
//   <form method="POST">
//   <input name="item" placeholder="What is your name?"></input>
//   <p>${course}</p>
//   <input name="course" placeholder="Enter your CTD course"></input>
//   <button type="submit">Submit</button>
//   </form>
//   </body>
//   `;
// };

// const server = http.createServer((req, res) => {
//   console.log("req.method is ", req.method);
//   console.log("req.url is ", req.url);
//   if (req.method === "POST") {
//     getBody(req, (body) => {
//       console.log("The body of the post is ", body);
//       // here, you can add your own logic
//       if (body["item"]) {
//         item = body["item"];
//       } else if(body["course"]){
//         course = body["course"];
//       }
//         else {
//         item = "Nothing was entered.";
//       }
//       // Your code changes would end here
//       res.writeHead(303, {
//         Location: "/",
//       });
//       res.end();
//     });
//   } else {
//     res.end(form());
//   }
// });



let color = "Pick your color!";

const form = () => {
  return `
  <body style="background-color: ${color}">
  <p>${color}</p>
  <form method="POST">
  <select name="color">
  <option value="white">White</option>
  <option value="red">Red</option>
  <option value="green">Green</option>
  <option value="blue">Blue</option>
  <option value="yellow">Yellow</option>
  <option value="pink">Pink</option>
  </select>
  <button type="submit">Submit</button>
  </form>
  </body>
  `;
};


const server = http.createServer((req, res) => {
    console.log("req.method is ", req.method);
    console.log("req.url is ", req.url);
    if (req.method === "POST") {
      getBody(req, (body) => {
        console.log("The body of the post is ", body);
        // here, you can add your own logic
        if (body["color"]) {
          color = body["color"];
        }         
          else {
          color = "white";
        }
        // Your code changes would end here
        res.writeHead(303, {
          Location: "/",
        });
        res.end();
      });
    } else {
      res.end(form());
    }
  });
server.listen(3000);
console.log("The server is listening on port 3000.");
