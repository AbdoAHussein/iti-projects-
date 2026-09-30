let inputName=document.querySelector(`#name`)
let inputAge=document.querySelector(`#age`)
let inputJop=document.querySelector(`#jop`)
let submit=document.querySelector(`.submit`);
submit.addEventListener(`click`,function() {
    if(
        inputName.value==""||
        inputAge.value==""||
        inputJop.value==""
    ){
        alert("Please fill all fields");
    }else{
        console.log(`name : ${inputName.value}`);
        console.log(`age : ${inputAge.value}`);
        console.log(`jop :${inputJop.value}`);
        if(inputAge.value<18){
            alert("You are under age");
        }else{
            alert("Registration Completed")
        }
    }
    
})