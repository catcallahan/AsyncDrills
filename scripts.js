
///--------- Timing Out ---------- ///
// function consoleString(message){
//     console.log(message);
// }

// consoleString("this message");
// setTimeout(function (){
//     consoleString("another message")
// }, 2000)

// function getWords(a, b, c, d){
//     console.log(a);
//     setTimeout(function(){
//         console.log(b);
//     }, 3000);
//     setTimeout(function(){
//         console.log(c);
//     }, 2000);
//     setTimeout(function(){
//         console.log(d);
//     }, 1000);
// };

// getWords("one", "two", "three", "four")


///// ----- Callbacks and Recursion ---- ////

// function done(){
//     console.log("Job's Done!");
// };



// function countdown(num, callback) {
//    setTimeout(function (){
//         if(num > 0){
//             console.log(num);
//             countdown(num - 1, callback)
//         } else {
//         callback();
//         }
//     }, 1000)
// }

// countdown(10, done)


//// ---- Promises, Promises -----///

let lunchTime = true

function orderMeSomeFood() {
    return new Promise ((resolve, reject) => {
        if (lunchTime == true){
            let favLunch = {
                lunch: "pizza",
                drink: "Dr.Pepper",
            };
            resolve(favLunch);
        } else {
            let err = new Error("It Is Not Lunch Time, Please Come Back Later")
            reject(err);
        }
    })
};

orderMeSomeFood()
.then((a) => {
    console.log(`We have ${a.lunch} and ${a.drink} for lunch today!`);

}).catch((b)=> {
    console.log(b);
});