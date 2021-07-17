function insertionSort(arr) { // [-1, 2, 4, 3, 7, 3]
    for (let i = 1; i < arr.length; i++) { // i = 3
        let currMin = arr[i]; // 3
        let j = i - 1; // j = 2
        while (j >= 0 && currMin < arr[j]) { // 3 < 4
            arr[j + 1] = arr[j]; // arr[3] = 4
            j-- // 1
        }
        
        arr[j + 1] = currMin; // arr[2] = 3
    }

    return arr
}

module.exports = {
    insertionSort
};