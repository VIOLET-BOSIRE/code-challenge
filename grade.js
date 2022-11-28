// a program that grades ones marks
function gradingSystem(grade){

    if (grade >= 80 && grade <= 100){
        console.log("A")

    }else if (grade >= 60 && grade<=79){
        console.log("B")

    }else if (grade >= 49 && grade <=59){
        console.log("C")

    }else if (grade < 40&& grade>=0){
        console.log("E")
    }
    else

    {
        console.log("invalid grade")
    }
}
console.log(gradingSystem(100))