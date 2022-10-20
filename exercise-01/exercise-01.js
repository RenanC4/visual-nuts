/**
 * Recursive function that prints the numbers given a range of integers
 * When the number is divisible by 3 and 5, the number is changed for "Visual Nuts"
 * When the number is divisible by 3, the number is changed for "Visual"
 * When the number is divisible by 5, the number is changed for the word "Nuts"
 * @param {int} initial //value that indicates which number we should start to validade
 * @param {int} final //value that indicates which number we should stop to validade
 * @returns 
 */
function visualNuts(initial, final){
    if(initial <= 0 || final <= 0 ) return "Invalid Input, initial and final value must be greather than zero"
    if(final < initial) return "Invalid Input, final value must be greather than initial value"

    if (initial <= final) {
        if(initial % 3 === 0 && initial % 5 === 0){
            console.log("Visual Nuts")  
            visualNuts(initial + 1, final);
            return           
        } 
        if(initial % 3 === 0){
            console.log("Visual")  

            visualNuts(initial + 1, final);
            return
        }
        if(initial % 5 === 0 ){
            console.log("Nuts")  

            visualNuts(initial + 1, final);
            return
        }
        console.log(initial)  
        visualNuts(initial + 1, final);
    }
}

export default visualNuts;
