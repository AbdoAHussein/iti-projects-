for(i=2;i<=10;i+=2){
    console.log(`even num:${i}`);
}
i2=1
while(i2<=10){
    console.log(`odd num:${i2}`);
    i2+=2
}
i3=0
do{
    console.log(`hello world!`);
    i3++
}while(i3>10);
function num(num){
    if (num<=0){
        console.log(`${num} positive number`);
        if (num%2==0){
            console.log(`${num} even number`);
        }else if (num%2!=0){
            console.log(`${num} odd number`);
        }
    }else if(num>=0){
        console.log(`${num} negative number`);
        if (num%2==0){
            console.log(`${num} even number`);
        }else if (num%2!=0){
            console.log(`${num} odd number`);
        }
    }else if(num==0){
        console.log(`zero number`);
    }else{
        console.log(`invalid number`);
        
    }
}
num(-10);

(function(){
    console.log(`hello from java script`)
})();

var sum=(number1,number2)=>console.log(number1+number2);
sum(15,20);

var getAvg=function(num1,num2,num3){
    console.log(`Average : ${(num1+num2+num3)/3}`);
}
getAvg(20,30,50);


var person ={
    fullName:`Abdelrahman Ali`,
    age:22,
    gender:`male`,
    salary:2500,
    city:`Hurghada`,
    isStudent:true,
    language:{
        Native:`Arabic`,
        secondLanguage:`English`,
    }
}
console.table(person);
console.log(person.language.secondLanguage);
