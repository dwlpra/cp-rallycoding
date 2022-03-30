const solve = (intArray, range) => {
    let data = []
    for(let i=0; i < intArray.length; i++) {
        if(intArray[i] > range[0] && intArray[i] < range[1]) {
            data.push(intArray[i]);
            continue
        }
    }
    return data;
}
console.log(solve([1,2,3,5,6,7], [2,6]))
// answer > [3, 5]
console.log(solve([1,2,3,4,5,10,20], [4,7]))
// answer > [5]