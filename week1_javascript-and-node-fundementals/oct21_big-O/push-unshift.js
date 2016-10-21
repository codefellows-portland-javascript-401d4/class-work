
function push(arr, item) {
    arr[arr.length] = item;
    return arr.length;
}

function unshift(arr, item) {
    for(var i = arr.length; i > 0; i--) {
        arr[i] = arr[i-1];
    }
    arr[0] = item;
    return arr.length;
}