// part1 choose
// 1 Array جديدة بنفس الطول
// 2 find()
// 3 Array جديدة بالعناصر اللي حققت الشرط
// 4 undefined
// 5  Arrays

// part2
// 1 false
// 2 true
// 3 true
// 4 true
// 5 false

// part3
// Q1 map
// Q2 filter
// Q3 find
// Q4 map

//part4
const fruits = ["Apple","Banana","Orange"];
//1
for(let fruit of fruits){
    console.log(fruit);
};
// 2
for(let fruit in fruits ){
    console.log(fruit);  
} 
// 3
fruits.forEach((fruit,index)=>{console.log(`${index} -> ${fruit}`)});

// part5
// Q1
let sum=(a,b)=>{console.log(a+b)};
sum(5,10);
// Q2
const user = {
    name:"Mostafa",
    age:25
};
let {name:userName,userAge} = user;
console.log(`Name: ${userName} , Age: ${userAge}`);
// Q3
console.log(`Hello ${userName}`);
// Q4
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = [...arr1,...arr2];
console.log(arr3);

// part6
const students = [
    {name:"Ali", degree:70},
    {name:"Sara", degree:95},
    {name:"Ahmed", degree:40},
    {name:"Mona", degree:85},
    {name:"Omar", degree:55}
];
// 1
let studentNames =students.map((student)=>student.name);
console.log(studentNames);
// 2
let degreeAbove60 =students.filter((student)=>student.degree>60);
console.log(degreeAbove60);
// 3
let studentDegree90=students.find((student)=>student.degree>90);
console.log(studentDegree90);
// 4
let SName=students.forEach((studentName)=>{console.log(studentName.name)});


// bonus
const numbers = [5,10,15,20];
console.log(numbers.reduce((num,current)=>{return num +current}));

