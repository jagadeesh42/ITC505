// Bubble Sort Function
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Ensure DOM is ready
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("sortButton").addEventListener("click", function () {
        let input = document.getElementById("numbersInput").value;
        let numbers = input.split(",").map(num => parseFloat(num.trim())).filter(n => !isNaN(n));

        if (numbers.length === 0) {
            document.getElementById("result").textContent = "Please enter valid numbers!";
            return;
        }

        let sorted = bubbleSort(numbers);
        document.getElementById("result").textContent = "Sorted Numbers: " + sorted.join(", ");
    });
});
