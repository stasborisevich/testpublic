// Bubble sort implementation in JavaScript

/**
 * Sorts an array of numbers in ascending order using the bubble sort algorithm.
 * @param {number[]} arr - The array to sort.
 * @returns {number[]} The sorted array.
 */
function bubbleSort(arr) {
    // Outer loop iterates over each element in the array
    for (let i = 0; i < arr.length; i++) {
        // Inner loop performs pairwise comparisons up to the unsorted portion
        for (let j = 0; j < arr.length - i - 1; j++) {
            // If the current element is greater than the next, swap them
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    // Return the sorted array for convenience
    return arr;
}

// Example usage:
const numbers = [5, 2, 9, 1, 5, 6];
console.log('Sorted numbers:', bubbleSort(numbers));
