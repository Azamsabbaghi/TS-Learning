//Number
var first:number=12.0
console.log(first);

//String
var empName:string = "john";
var empDept:string = "IT";
console.log(empName);
console.log(empDept);
var stmt:string = empName + "work in" + empDept;

//Boolean
var b:boolean = true;
console.log(b);

//void type
function hello():void
{
    console.log("This is welcome message");
}

//Null: Null represents a variable whose value is undefined
var num1:number = null;
num1= 100;
console.log(num1);

//Undefined: undefined primitive type denoteds all uninitialized variables
var num2: number = undefined;
num2=200;
console.log(num2);

//Any type
var val: any = "Hi";
val=100;
console.log(val);
val=false;
console.log(val);

function myfunction(a:any, b:any)
{
    console.log(a+b);
}
myfunction(100,200);
myfunction("Hi","welcome");

