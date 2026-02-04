let input = "Hello"
function reverse(input) {
    let convert = input.split("")
    let reversed = "";
    for (let i = convert.length - 1; i >= 0; i--) {
        reversed += convert[i];
    }
    console.log("Reversed string is:", reversed);
}

reverse(input);


let input2 = "dad"
let convert2 = input2.split("")
let reversed2 = "";

function palindrome(input2) {

    for (let i = convert2.length - 1; i >= 0; i--) {
        reversed2 += convert2[i];
    }

    if (input2 == reversed2) {
        console.log("Given input is a palindrome")
    } else {
        console.log("Given input is not a palindrome")
    }
}

palindrome(input2)