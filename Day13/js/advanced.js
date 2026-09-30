let students = [
    {
        id: 1,
        name: "Mostafa Mohamed",
        age: 28,
        city: "Cairo",
        grade: 95,
        isGraduated: true,
        skills: ["HTML", "CSS", "JS"]
    },
    {
        id: 2,
        name: "Ali Hassan",
        age: 17,
        city: "Alex",
        grade: 60,
        isGraduated: false,
        skills: ["HTML"]
    },
    {
        id: 3,
        name: "Sara Ali",
        age: 24,
        city: "Mansoura",
        grade: 88,
        isGraduated: true,
        skills: ["HTML", "CSS", "JS", "React"]
    }
];
// part1
console.log(students.length);
// part2
console.log(students[0].name);
// part3
console.log(students[2].name);
// part4
for(let i=0;i<students.length;i++){
    console.log(`name ${i} :${students[i].name}`);
}
// part5
for(let i=0;i<students.length;i++){
    console.log(students[i]);
}
// part6
for(let i=0;i<students.length;i++){
    if(students[i].age>18){
        console.log(students[i].name);
        
    }
}
// part7
for(let i=0;i<students.length;i++){
    if(students[i].grade>90){
        console.log(students[i].name);
        
    }
}
// part8
for(let i=0;i<students.length;i++){
    if(students[i].isGraduated==true){
        console.log(students[i].name);
        
    }
}
// part9
for(let i=0;i<students.length;i++){
    if(students[i].isGraduated==false){
        console.log(students[i].name);
        
    }
}
// part10
let x=0;
for(let i=0;i<students.length;i++){
    x+=students[i].grade;

}
console.log(`total=${x}`);
// part11
function getAvg(num){
    let avg=num/students.length
    console.log(avg)
}
getAvg(x)
// part12
if(students[0].grade>students[1].grade&&students[0].grade>students[2].grade){
    console.log(`student ${students[0].name} have highest grade `);
}else if(students[1].grade>students[0].grade&&students[1].grade>students[2].grade){
    console.log(`student ${students[1].name} have highest grade `);
}else{
    console.log(`student ${students[2].name} have highest grade `);
}
// part13
if(students[0].grade<students[1].grade&&students[0].grade<students[2].grade){
    console.log(`student ${students[0].name} have lowest grade `);
}else if(students[1].grade<students[0].grade&&students[1].grade<students[2].grade){
    console.log(`student ${students[1].name} have lowest grade `);
}else{
    console.log(`student ${students[2].name} have lowest grade `);
}
// part14
let sortStudents=[]
for(let i=0;i<students.length;i++){
    sortStudents.push(students[i].name)
}
sortStudents.sort()
console.log(sortStudents)
// part15
let reverse=sortStudents.reverse()
console.log(reverse);
// part16
for(let i=0;i<students.length;i++){
    console.log(students[i].name.length ,students[i].name[0], students[i].name.at(-1));
}
// part17
for(let i=0;i<students.length;i++){
    console.log(students[i].name.toUpperCase());
}
// part18
for(let i=0;i<students.length;i++){
    console.log(students[i].name.toLowerCase());
}
// part19
for(let i=0;i<students.length;i++){
    console.log(`${students[i].name}is contain ali ?${students[i].name.includes('Ali')}`);
}
// part20
for(let i=0;i<students.length;i++){
    console.log(students[i].name.split(" "));
}
    



