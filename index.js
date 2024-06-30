// N1
let number = 100;

if(number < 50) {
    console.log("ნაკლებია 50 ზე")
} else if(number > 20) {
    console.log("მეტია 20 ზე")
} else {
    console.log("შეცდომა")
}

// N2
let name = "mariam";
console.log(name == "mariam" ? true : false)

// N3
let girlName = "mariam";

switch(girlName) {
    case "mariam":
        console.log(true);
        break;
    default:
        console.log(false);
}

// N4
for(let i=5; i<100; i++) {
    console.log(i)
}

// N5

let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

for (let i = 0; i < array1.length; i++) {
    const element = array1[i];
    if (element > 0 && element < 10) {
        console.log(element);
    }
}


   

