process.env.MY_VAR = "Hi there!";

console.log(__dirname);
setInterval(() => {
  console.log("hello world");
}, 1000);

console.log("Environment variable MY_VAR:", process.env.MY_VAR);
