function swap(array, idx1, idx2) { 
    let temp = array[idx2];
    array[idx2] = array[idx1]; // 
    array[idx1] = temp; // a
    return array
}

function bubbleSort(array) {
    let sorted = false;

    while (!sorted) {
        sorted = true
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1)
                sorted = false
            }
        }
    }

    return array
}


module.exports = {
    bubbleSort,
    swap
};