// For Each 
let arr = [1, 2, 3, 4, 5]
arr.forEach((val) => {
    console.log(val + ' number');
})



// Map 
let arr1 = [1, 2, 3, 4, 5]
let newArr = arr1.map((val) => {
    return "waqar"
})
console.log(newArr); //output will be  "['waqar', 'waqar', 'waqar', 'waqar', 'waqar']"



// Filter 
let arr2 = [1, 2, 3, 4, 5]
let ans = arr2.filter((val) => {
    if (val >= 3) {
        return true
    }
})
console.log(ans); //output will be "[3, 4, 5]"



// Find 
let arr3 = [1, 2, 3, 4, 5]
let find = arr3.find((val) => {
    if (val === 4) {
        return true
    }
})
console.log(find); //output will be "4"


// Index of 
let arr4 = [1, true, 'waqar', null]
let index = arr4.indexOf('waqar')
console.log("index of this calue is " + index); //output will be "index of this calue is 2"




