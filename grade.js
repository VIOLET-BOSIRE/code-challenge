// a program that grades ones marks
function gradingSystem(grade){

    if (grade >= 80 && grade <= 100){// if marks is btn 80 and 100 thats an A
        console.log("A")

    }else if (grade >= 60 && grade<=79){
        console.log("B")//if marks is between 60 and 79 thats a B

    }else if (grade >= 49 && grade <=59){
        console.log("C")// if marks is between 49 and 59 thats a C

    }else if (grade < 40&& grade>=0){
        console.log("you have failed")// if markks is between 0 and 40 you have failed
    }
    else

    {
        console.log("invalid grade")// anything else is invalid
    }
}
console.log(gradingSystem(100))