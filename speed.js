/*A program that takes as input the speed of a car e.g 80.
 If the speed is less than 70, it should print “Ok”. Otherwise, 
for every 5 km/s above the speed limit (70), it should give the 
driver one demerit point and print the total number of demerit points.*/

function speed_detector(speed){//making a function to determine speed
    if (speed <= 70){//begining of if else statement
        console.log("ok")
    }else{
        let demeritPoints = (speed - 70) / 5
        if (points <12){
            console.log("Demerit points: "+ demeritPoints)
        }else{
            console.log("Driver suspended")
        }
    }

}
console.log(speed_detector(100))