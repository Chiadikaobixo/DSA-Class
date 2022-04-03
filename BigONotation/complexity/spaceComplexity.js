// O(1) space
function sum(arr){
    let total = 0
    for(let i = 0; i < arr.length; i++){
        total += arr[i]
    }
    return total
}

// O(n) space
function double(arr){
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        newArr.push(2 * arr[i])
    }

    return newArr
}

console.log(double([2, 4]))