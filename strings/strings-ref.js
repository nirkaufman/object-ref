// single line comment/value/string
const greeting = "Hello World!";

// multi line comment/value/string
const content = "" +
    "Hello Iven \n" +
    "Welcome to my website \n" +
    "I hope you enjoy your stay! \n";

function prepareEmail(userName) {
  // template string with JS inside
  return `
         Hello ${userName},
         Welcome to my website.
         I hope you enjoy your stay!      
         The year is: ${new Date().getFullYear()}
    `
}

console.log(prepareEmail("nir"));


