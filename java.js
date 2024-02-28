// Prompt the user for a list of flavors
    const userInputString = prompt(
        "Please enter Froyo flavors separated by commas.",
        "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
    );
// Split the string of numbers into an array of strings.
    const newFlavors = userInputString.split(",");
// creating empty object
// create loop to iterate through the array
// make it into a function
    function numberOfFlavors(newOrder){
// creating empty object       
        let flavors = {
        }
        for (const flavor of newOrder) {
            if(flavors[flavor] >= 1){
                flavors[flavor] +=1
            }
        else{
            flavors[flavor] = 1
        }
        }
        return flavors
    }
        console.log(numberOfFlavors(newFlavors))