function Quick(arr) {
    
    
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const right = [];
    const middle = [];
    
    for (let i =0; i<arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else if (arr[i] > pivot) {
            right.push(arr[i]);
        } else {
            middle.push(arr[i]);
        }
    }
    
    return [...QuickSort(left), ...middle, ...QuickSort(right)];
    }
    
    
    