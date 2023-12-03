const colors = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
};

// remove color and return new object without color
// this function will not change the original object
function removeColor(colorsObj, colorName) {
  // if colorName is not a property of colorsObj
  if(!colorsObj.hasOwnProperty(colorName)) {
    // return original colorsObj
    return colorsObj;
  }
  // create shallow newCopy of colorsObj
  const newCopy = {...colorsObj };
  delete newCopy[colorName];
  return newCopy;
}

const objRes = removeColor(colors, "red");
console.log(objRes === colors);

function parseDate(parseFn, suffix = '!!') {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  if(parseFn) {
    return parseFn(year, month, day) + suffix;
  }

  return `${day}.${month}.${year}${suffix}`;
}

// use parseDate function without argument
const date = parseDate();
console.log(date);

const date3 = parseDate(null, '???');
console.log(date3);


// create custom parse function
// and use it as argument for parseDate function
function parseRevereDate(year,month,day) {
  return `${year}.${month}.${day}`;
}


const date2 = parseDate(parseRevereDate);
console.log(date2);

// this function will return new function
function getFullNameWithCounter() {
  let counter = 0;

  return function (firstName, lastName) {
    counter++;
    return `${firstName} ${lastName} ${counter}`;
  };
}

const getFullName = getFullNameWithCounter();

console.log(getFullName("Nir", "Kaufman"));
console.log(getFullName("John", "Doe"));
console.log(getFullName("John", "Doe"));
console.log(getFullName("John", "Doe"));
const getFullName2 = getFullNameWithCounter();
console.log(getFullName2("John", "Doe"));
console.log(getFullName2("John", "Doe"));
console.log(getFullName2("John", "Doe"));
