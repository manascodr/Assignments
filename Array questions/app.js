// Program for Sorting first half in Ascending order and second half in Descending order
let arr = [3, 2, 4, 1, 10, 30, 40, 20]
let n = arr.length

for (let i = 0; i < n-1; i++) {
    for (let j = 0; j < n/2; j++) {

        if (arr[j]> arr[j+1]) {
            let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
        }
        
    }
         
    for (let j = n/2; j < n-1; j++) {
            if (arr[j]< arr[j+1]) {
            let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
        }
        
    }
}
console.log(arr);


