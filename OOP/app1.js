//factory function

let car = {
    model:"1995", 
    name: "toyota indus",
    color: "grey",
    drive: function () {
        console.log("start driving")
    }
}
let car1 = {
    model:"2021", 
    name: "Audi",
    color: "Black",
    drive: function () {
            console.log("start driving a new car")
        }    
}

function createCarObjects() {
    let cars = {
        car: ["1995", "toyota indus", "grey"],
        car1: ["2021", "toyota", "black"] 
    }
}

console.log (car.model);
car.drive();


//Another Example for Factory function

function myDetails(name,age) {
    return {
        name, 
        age,
        data: function() {
            console.log("true")
        }
    };
}

let details = 
myDetails("Hiba");
console.log(details.name)
details.data();