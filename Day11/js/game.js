// ----------------------------Task1------------------------------------
// var PlayerOneChoice="Rock"
// var PlayerTwoChoice="Rock"
// var PlayerOneChoice="Rock"
// var PlayerTwoChoice="Paper"
var PlayerOneChoice="Rock"
var PlayerTwoChoice="Scissors"
if(PlayerOneChoice===PlayerTwoChoice){
    console.log("It is a tie");
}else if(
        (PlayerOneChoice=="Rock" && PlayerTwoChoice=="Scissors")||
        (PlayerOneChoice=="Paper" && PlayerTwoChoice=="Rock")||
        (PlayerOneChoice=="Scissors" && PlayerTwoChoice=="Paper")
){
    console.log("Player One Win");
}else{
    console.log("Player Two Win");
    
}

// ----------------------------Task2------------------------------------


var grade=window.prompt('enter your grade');
if(grade>=90){
    console.log("Excellent");
}else if(grade<90 && grade>=80){
    console.log("Good");
}else if(grade<80 && grade>=70){
    console.log("Average");
}else if(grade<70 && grade>=60){
    console.log("Pass");
}else{
    console.log("Fail");
    
}