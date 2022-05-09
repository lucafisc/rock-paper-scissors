console.log("Hello");

function computerPlay () {
    let computerRandomNumber = Math.floor(Math.random()*3);

    switch (computerRandomNumber){
    case 0 :
        console.log("Computer chooses Rock!");
        break;
    case 1 :
        console.log("Computer chooses Paper!");
         break;
     case 2 :
        console.log("Computer chooses Scissors!");
        break;
    }
}
computerPlay();

