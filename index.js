function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const maxDemeritPoints = 1;
    

    if (speed < speedLimit) {
        console.log("Ok");
        return 0 ;
    }

    const KmoOverLimit = speed - speedLimit;
    const demeritPoints = Math.floor(KmoOverLimit/kmPerDemeritPoint);

    } 
        
        if (demeritPoints > 12) {
            console.log("License suspended");
        }else{
            console.log("Points:",demeritPoints);
        }
    


// Example usage:
const speed = 100
calculateDemeritPoints(speed);
const sped =60;
calculateDemeritPoints(sped);
const time = 80;
calculateDemeritPoints(time)