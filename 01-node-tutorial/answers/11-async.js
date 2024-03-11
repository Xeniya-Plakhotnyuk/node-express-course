const { writeFile } = require("fs");
console.log("at start");

writeFile("./temporary/fileB.txt", "This is line 1\n", (err, result) => {
  console.log("First line written to file");

  if (err) {
    console.log("This error happened: ", err);
  } else {
       writeFile("./temporary/fileB.txt", "This is line 2\n", { flag: 'a' }, (err, result) => {
      console.log("Second line written to file");

      if (err) {
        console.log("This error happened: ", err);
      } else {
               writeFile("./temporary/fileB.txt", "This is line 3\n", { flag: 'a' }, (err, result) => {
          console.log("Third line written to file");

          if (err) {
            console.log("This error happened: ", err);
          } else {
            console.log("All lines written successfully!");
          }
        });
      }
    });
  }
});

// if (err) throw err;

console.log("at end");

