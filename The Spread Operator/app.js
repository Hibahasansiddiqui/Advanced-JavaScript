window.onload = function() {
    let x = [1, 2, 3];
    let y = [...x, 4, 5, 6];

    // use ... in console when you want to spread the variables out of the array
    console.log (...y);
}