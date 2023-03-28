
var mystring:string = "welcome to Typescript";

let mystring1 = "welcome";

// CharAt()
console.log(mystring.charAt(0));
console.log(mystring.charAt(2));

// concat()
var str1:string = "welcome";
var str2:string = "to typescript";
var str3:string = "and React";
console.log(str1.concat(str2).concat(str3));

// replace()
var str = "typescript programming";
console.log(str.replace("type","Java"));

// split()
var fruits: string = "Apple  Banana  Orange";
console.log(fruits.split(" "));
console.log(fruits.split(" " ,2));
console.log(fruits.split(" " ,1));

//substring()
str = "welcome";
console.log(str.substring(0,3));
console.log(str.substring(2,5));


// trim()
str = " welcome ";
console.log(str.trim());
console.log(str.trimRight());
console.log(str.trimLeft());



//touppercase() && tolowercase()
str = "Typescript programming";
console.log(str.tolowercase());
console.log(str.touppercase());

