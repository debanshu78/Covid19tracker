# DSA for Capgemini Interview - Complete Beginner Guide

> **Reality Check:** Capgemini doesn't expect competitive programming. They check **logic, basics, and clean thinking.**

---

## 📚 Table of Contents
1. [Arrays & Basic Problems (Most Important)](#1-arrays-most-important)
2. [Strings](#2-strings)
3. [Searching](#3-searching)
4. [Sorting](#4-sorting)
5. [Stack & Queue](#5-stack--queue)
6. [Recursion](#6-recursion)
7. [7-Day Study Plan](#7-day-study-plan)
8. [Interview Tips](#interview-tips)

**Quick Jump to Common Interview Questions:**
- [Swap Two Numbers](#q16-swap-two-numbers)
- [Fibonacci Series](#q17-fibonacci-series)
- [Prime Numbers](#q5-check-if-a-number-is-prime)
- [Palindrome](#q21-check-palindrome-number)
- [Armstrong Number](#q19-check-armstrong-number)
- [Factorial](#q18-find-factorial-of-a-number)
- [GCD & LCM](#q22-gcd-greatest-common-divisor)

---

## 1. ARRAYS (Most Important)

### What is an Array?
An array is a collection of elements stored in **consecutive memory locations**, all of the **same data type**.

```cpp
int arr[5] = {10, 20, 30, 40, 50};
// Index:    0   1   2   3   4
```

### 📝 Quick Links to Array Problems:
- [Q1: Find Largest Element](#q1-find-the-largest-element-in-an-array)
- [Q2: Reverse an Array](#q2-reverse-an-array)
- [Q3: Find Duplicate Element](#q3-find-duplicate-element)
- [Q4: Count Frequency](#q4-count-frequency-of-an-element)
- [Q5: Check Prime Number](#q5-check-if-a-number-is-prime)
- [Q6: Print All Primes](#q6-print-all-prime-numbers-up-to-n)
- [Q7: Sum of Array](#q7-find-sum-of-array-elements)
- [Q8: Average of Array](#q8-find-average-of-array-elements)
- [Q9: Check if Sorted](#q9-check-if-array-is-sorted)
- [Q10: Missing Number](#q10-find-missing-number-in-array-1-to-n)
- [Q11: Count Even/Odd](#q11-count-even-and-odd-numbers)
- [Q12: Rotate Array](#q12-rotate-array-by-k-positions)
- [Q13: Find Smallest](#q13-find-smallest-element-in-array)
- [Q14: Remove Duplicates](#q14-remove-duplicates-from-sorted-array)
- [Q15: Second Largest](#q15-find-second-largest-element)
- [Q16: Swap Numbers](#q16-swap-two-numbers)
- [Q17: Fibonacci Series](#q17-fibonacci-series)
- [Q18: Factorial](#q18-find-factorial-of-a-number)
- [Q19: Armstrong Number](#q19-check-armstrong-number)
- [Q20: Reverse Number](#q20-reverse-a-number)
- [Q21: Palindrome Number](#q21-check-palindrome-number)
- [Q22: GCD](#q22-gcd-greatest-common-divisor)
- [Q23: LCM](#q23-lcm-least-common-multiple)
- [Q24: Sum of Digits](#q24-sum-of-digits)
- [Q25: Power](#q25-power-of-a-number)

---

### Q1: Find the Largest Element in an Array

**Problem:** Given an array, find the largest element.

**Input:** `arr[] = {10, 5, 20, 8}`  
**Output:** `20`

**Logic:**
1. Assume first element is the largest
2. Compare it with every other element
3. If any element is larger, update the largest

**Code:**
```cpp
#include<iostream>
using namespace std;

int findLargest(int arr[], int n) {
    int largest = arr[0];  // Assume first element is largest
    
    for(int i = 1; i < n; i++) {
        if(arr[i] > largest) {
            largest = arr[i];  // Update largest
        }
    }
    return largest;
}

int main() {
    int arr[] = {10, 5, 20, 8};
    int n = 4;
    
    cout << "Largest element: " << findLargest(arr, n);
    return 0;
}
```

**Dry Run:**
```
arr[] = {10, 5, 20, 8}
largest = 10

i=1: arr[1]=5  → 5 > 10? No  → largest = 10
i=2: arr[2]=20 → 20 > 10? Yes → largest = 20
i=3: arr[3]=8  → 8 > 20? No  → largest = 20

Output: 20
```

**Interview Answer:**
> "I initialize the first element as the largest, then loop through the array comparing each element. If I find a larger element, I update my variable. Time complexity is O(n)."

---

### Q2: Reverse an Array

**Problem:** Reverse the given array.

**Input:** `arr[] = {1, 2, 3, 4, 5}`  
**Output:** `arr[] = {5, 4, 3, 2, 1}`

**Logic:**
1. Use two pointers: start and end
2. Swap elements at these positions
3. Move start forward, end backward
4. Stop when they meet

**Code:**
```cpp
#include<iostream>
using namespace std;

void reverseArray(int arr[], int n) {
    int start = 0;
    int end = n - 1;
    
    while(start < end) {
        // Swap
        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        
        start++;
        end--;
    }
}

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int n = 5;
    
    cout << "Original: ";
    for(int i = 0; i < n; i++) cout << arr[i] << " ";
    
    reverseArray(arr, n);
    
    cout << "\nReversed: ";
    for(int i = 0; i < n; i++) cout << arr[i] << " ";
    
    return 0;
}
```

**Dry Run:**
```
arr[] = {1, 2, 3, 4, 5}
start=0, end=4

Step 1: Swap arr[0] and arr[4] → {5, 2, 3, 4, 1}
        start=1, end=3

Step 2: Swap arr[1] and arr[3] → {5, 4, 3, 2, 1}
        start=2, end=2

Step 3: start >= end, STOP

Output: {5, 4, 3, 2, 1}
```

**Interview Answer:**
> "I use two pointers approach - one at the start and one at the end. I swap elements and move pointers towards the center until they meet. This is an in-place algorithm with O(n) time and O(1) space."

---

### Q3: Find Duplicate Element

**Problem:** Find if any element appears more than once.

**Input:** `arr[] = {1, 2, 3, 2, 4}`  
**Output:** `2`

**Logic (Simple Method):**
1. Take each element
2. Compare with all elements after it
3. If match found, it's a duplicate

**Code:**
```cpp
#include<iostream>
using namespace std;

int findDuplicate(int arr[], int n) {
    for(int i = 0; i < n-1; i++) {
        for(int j = i+1; j < n; j++) {
            if(arr[i] == arr[j]) {
                return arr[i];  // Found duplicate
            }
        }
    }
    return -1;  // No duplicate
}

int main() {
    int arr[] = {1, 2, 3, 2, 4};
    int n = 5;
    
    int duplicate = findDuplicate(arr, n);
    
    if(duplicate != -1)
        cout << "Duplicate found: " << duplicate;
    else
        cout << "No duplicate";
    
    return 0;
}
```

**Dry Run:**
```
arr[] = {1, 2, 3, 2, 4}

i=0: arr[0]=1
  j=1: arr[1]=2 → 1==2? No
  j=2: arr[2]=3 → 1==3? No
  j=3: arr[3]=2 → 1==2? No
  j=4: arr[4]=4 → 1==4? No

i=1: arr[1]=2
  j=2: arr[2]=3 → 2==3? No
  j=3: arr[3]=2 → 2==2? YES! Return 2

Output: 2
```

**Interview Answer:**
> "I use nested loops to compare each element with all elements after it. When I find a match, I return that element. For beginners, this O(n²) approach is clear and easy to understand."

---

### Q4: Count Frequency of an Element

**Problem:** Count how many times a given element appears.

**Input:** `arr[] = {1, 2, 1, 3, 1}`, element = `1`  
**Output:** `3`

**Code:**
```cpp
#include<iostream>
using namespace std;

int countFrequency(int arr[], int n, int element) {
    int count = 0;
    
    for(int i = 0; i < n; i++) {
        if(arr[i] == element) {
            count++;
        }
    }
    return count;
}

int main() {
    int arr[] = {1, 2, 1, 3, 1};
    int n = 5;
    int element = 1;
    
    cout << "Frequency of " << element << ": " << countFrequency(arr, n, element);
    return 0;
}
```

**Interview Answer:**
> "I traverse the array and increment a counter whenever I find the target element. Simple linear search approach with O(n) time complexity."

---

### Q5: Check if a Number is Prime

**Problem:** Check if a given number is prime (divisible only by 1 and itself).

**Input:** `n = 7`  
**Output:** `Prime`

**Logic:**
1. Numbers less than 2 are not prime
2. Check if n is divisible by any number from 2 to n-1
3. If divisible, it's not prime
4. If no divisors found, it's prime

**Optimized:** Check only up to √n (square root)

**Code:**
```cpp
#include<iostream>
#include<cmath>
using namespace std;

bool isPrime(int n) {
    // Numbers less than 2 are not prime
    if(n < 2) {
        return false;
    }
    
    // Check from 2 to sqrt(n)
    for(int i = 2; i <= sqrt(n); i++) {
        if(n % i == 0) {
            return false;  // Found a divisor, not prime
        }
    }
    return true;  // No divisors found, prime
}

int main() {
    int n = 7;
    
    if(isPrime(n))
        cout << n << " is Prime";
    else
        cout << n << " is Not Prime";
    
    return 0;
}
```

**Dry Run:**
```
n = 7
sqrt(7) ≈ 2.6

i=2: 7 % 2 = 1 → Not divisible
     i > sqrt(7), STOP

Output: Prime

---
n = 10
sqrt(10) ≈ 3.16

i=2: 10 % 2 = 0 → Divisible! Return false

Output: Not Prime
```

**Interview Answer:**
> "To check if a number is prime, I check if it's divisible by any number from 2 to its square root. If I find any divisor, it's not prime. This optimization reduces time complexity from O(n) to O(√n)."

---

### Q6: Print All Prime Numbers up to N

**Problem:** Print all prime numbers from 2 to n.

**Input:** `n = 20`  
**Output:** `2 3 5 7 11 13 17 19`

**Code:**
```cpp
#include<iostream>
#include<cmath>
using namespace std;

bool isPrime(int n) {
    if(n < 2) return false;
    
    for(int i = 2; i <= sqrt(n); i++) {
        if(n % i == 0) return false;
    }
    return true;
}

void printPrimes(int n) {
    cout << "Prime numbers up to " << n << ": ";
    
    for(int i = 2; i <= n; i++) {
        if(isPrime(i)) {
            cout << i << " ";
        }
    }
}

int main() {
    int n = 20;
    printPrimes(n);
    return 0;
}
```

**Interview Answer:**
> "I use the isPrime function to check each number from 2 to n. If the number is prime, I print it. This uses our previous prime checking logic for each number."

---

### Q7: Find Sum of Array Elements

**Problem:** Calculate the sum of all elements in an array.

**Input:** `arr[] = {1, 2, 3, 4, 5}`  
**Output:** `15`

**Code:**
```cpp
#include<iostream>
using namespace std;

int sumArray(int arr[], int n) {
    int sum = 0;
    
    for(int i = 0; i < n; i++) {
        sum += arr[i];
    }
    return sum;
}

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int n = 5;
    
    cout << "Sum of array elements: " << sumArray(arr, n);
    return 0;
}
```

**Interview Answer:**
> "I initialize sum to 0 and traverse the array, adding each element to the sum. Time complexity is O(n)."

---

### Q8: Find Average of Array Elements

**Problem:** Calculate the average of all elements.

**Input:** `arr[] = {10, 20, 30, 40, 50}`  
**Output:** `30.0`

**Code:**
```cpp
#include<iostream>
using namespace std;

float averageArray(int arr[], int n) {
    int sum = 0;
    
    for(int i = 0; i < n; i++) {
        sum += arr[i];
    }
    
    return (float)sum / n;  // Cast to float for decimal result
}

int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int n = 5;
    
    cout << "Average: " << averageArray(arr, n);
    return 0;
}
```

**Interview Answer:**
> "I calculate the sum of all elements and divide by the count. I cast the result to float to get decimal precision."

---

### Q9: Check if Array is Sorted

**Problem:** Check if an array is sorted in ascending order.

**Input:** `arr[] = {1, 2, 3, 4, 5}`  
**Output:** `Yes, sorted`

**Logic:**
- Compare each element with the next one
- If any element is greater than the next, array is not sorted

**Code:**
```cpp
#include<iostream>
using namespace std;

bool isSorted(int arr[], int n) {
    for(int i = 0; i < n-1; i++) {
        if(arr[i] > arr[i+1]) {
            return false;  // Found unsorted pair
        }
    }
    return true;  // All pairs in order
}

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int n = 5;
    
    if(isSorted(arr, n))
        cout << "Array is sorted";
    else
        cout << "Array is not sorted";
    
    return 0;
}
```

**Dry Run:**
```
arr[] = {1, 2, 3, 4, 5}

i=0: arr[0]=1, arr[1]=2 → 1 > 2? No
i=1: arr[1]=2, arr[2]=3 → 2 > 3? No
i=2: arr[2]=3, arr[3]=4 → 3 > 4? No
i=3: arr[3]=4, arr[4]=5 → 4 > 5? No

Output: Sorted
```

**Interview Answer:**
> "I compare each element with its next element. If I find any pair where the current element is greater than the next, the array is not sorted. Otherwise, it's sorted."

---

### Q10: Find Missing Number in Array (1 to N)

**Problem:** An array contains numbers from 1 to n with one missing. Find it.

**Input:** `arr[] = {1, 2, 4, 5}` (n=5)  
**Output:** `3`

**Logic:**
- Sum of 1 to n = n*(n+1)/2
- Subtract sum of array elements
- Result is the missing number

**Code:**
```cpp
#include<iostream>
using namespace std;

int findMissing(int arr[], int n) {
    // Sum of 1 to (n+1)
    int totalSum = (n + 1) * (n + 2) / 2;
    
    // Sum of array elements
    int arraySum = 0;
    for(int i = 0; i < n; i++) {
        arraySum += arr[i];
    }
    
    // Missing number
    return totalSum - arraySum;
}

int main() {
    int arr[] = {1, 2, 4, 5};  // Missing 3
    int n = 4;  // Array has 4 elements (1 to 5 with one missing)
    
    cout << "Missing number: " << findMissing(arr, n);
    return 0;
}
```

**Dry Run:**
```
arr[] = {1, 2, 4, 5}, n=4
Range is 1 to 5 (5 numbers)

totalSum = 5 * 6 / 2 = 15
arraySum = 1 + 2 + 4 + 5 = 12
missing = 15 - 12 = 3

Output: 3
```

**Interview Answer:**
> "I use the mathematical formula for sum of first n natural numbers. I calculate the expected sum, then subtract the actual sum of array elements. The difference is the missing number. This is O(n) time and O(1) space."

---

### Q11: Count Even and Odd Numbers

**Problem:** Count how many even and odd numbers are in an array.

**Input:** `arr[] = {1, 2, 3, 4, 5, 6}`  
**Output:** `Even: 3, Odd: 3`

**Code:**
```cpp
#include<iostream>
using namespace std;

void countEvenOdd(int arr[], int n) {
    int evenCount = 0;
    int oddCount = 0;
    
    for(int i = 0; i < n; i++) {
        if(arr[i] % 2 == 0) {
            evenCount++;
        }
        else {
            oddCount++;
        }
    }
    
    cout << "Even: " << evenCount << ", Odd: " << oddCount;
}

int main() {
    int arr[] = {1, 2, 3, 4, 5, 6};
    int n = 6;
    
    countEvenOdd(arr, n);
    return 0;
}
```

**Interview Answer:**
> "I traverse the array and check if each number is divisible by 2. If yes, it's even; otherwise, it's odd. I maintain separate counters for each."

---

### Q12: Rotate Array by K Positions

**Problem:** Rotate array elements to the left by k positions.

**Input:** `arr[] = {1, 2, 3, 4, 5}`, k = 2  
**Output:** `arr[] = {3, 4, 5, 1, 2}`

**Logic:**
- Store first k elements temporarily
- Shift remaining elements to the left
- Place stored elements at the end

**Code:**
```cpp
#include<iostream>
using namespace std;

void rotateLeft(int arr[], int n, int k) {
    k = k % n;  // Handle k > n
    
    int temp[k];
    
    // Store first k elements
    for(int i = 0; i < k; i++) {
        temp[i] = arr[i];
    }
    
    // Shift remaining elements to left
    for(int i = 0; i < n - k; i++) {
        arr[i] = arr[i + k];
    }
    
    // Place stored elements at end
    for(int i = 0; i < k; i++) {
        arr[n - k + i] = temp[i];
    }
}

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int n = 5;
    int k = 2;
    
    cout << "Original: ";
    for(int i = 0; i < n; i++) cout << arr[i] << " ";
    
    rotateLeft(arr, n, k);
    
    cout << "\nRotated by " << k << ": ";
    for(int i = 0; i < n; i++) cout << arr[i] << " ";
    
    return 0;
}
```

**Dry Run:**
```
arr[] = {1, 2, 3, 4, 5}, k = 2

Step 1: Store first 2 elements
        temp[] = {1, 2}

Step 2: Shift remaining left
        arr[] = {3, 4, 5, 4, 5}

Step 3: Place stored at end
        arr[] = {3, 4, 5, 1, 2}

Output: {3, 4, 5, 1, 2}
```

**Interview Answer:**
> "I use a temporary array to store the first k elements, shift the remaining elements to the left, then place the stored elements at the end. Time complexity is O(n)."

---

### Q13: Find Smallest Element in Array

**Problem:** Find the smallest element in an array.

**Input:** `arr[] = {10, 5, 20, 8}`  
**Output:** `5`

**Code:**
```cpp
#include<iostream>
using namespace std;

int findSmallest(int arr[], int n) {
    int smallest = arr[0];
    
    for(int i = 1; i < n; i++) {
        if(arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}

int main() {
    int arr[] = {10, 5, 20, 8};
    int n = 4;
    
    cout << "Smallest element: " << findSmallest(arr, n);
    return 0;
}
```

**Interview Answer:**
> "Similar to finding the largest element, but I compare for smaller values. Time complexity is O(n)."

---

### Q14: Remove Duplicates from Sorted Array

**Problem:** Remove duplicates from a sorted array and return the new length.

**Input:** `arr[] = {1, 1, 2, 2, 3, 4, 4}`  
**Output:** `arr[] = {1, 2, 3, 4}`, length = 4

**Logic:**
- Use two pointers
- One tracks unique elements position
- Other scans the array

**Code:**
```cpp
#include<iostream>
using namespace std;

int removeDuplicates(int arr[], int n) {
    if(n == 0) return 0;
    
    int j = 0;  // Position for next unique element
    
    for(int i = 1; i < n; i++) {
        if(arr[i] != arr[j]) {
            j++;
            arr[j] = arr[i];
        }
    }
    
    return j + 1;  // Length of unique array
}

int main() {
    int arr[] = {1, 1, 2, 2, 3, 4, 4};
    int n = 7;
    
    cout << "Original: ";
    for(int i = 0; i < n; i++) cout << arr[i] << " ";
    
    int newLength = removeDuplicates(arr, n);
    
    cout << "\nAfter removing duplicates: ";
    for(int i = 0; i < newLength; i++) cout << arr[i] << " ";
    cout << "\nNew length: " << newLength;
    
    return 0;
}
```

**Dry Run:**
```
arr[] = {1, 1, 2, 2, 3, 4, 4}
j = 0

i=1: arr[1]=1, arr[0]=1 → Same, skip
i=2: arr[2]=2, arr[0]=1 → Different
     j=1, arr[1]=2 → {1, 2, 2, 2, 3, 4, 4}
i=3: arr[3]=2, arr[1]=2 → Same, skip
i=4: arr[4]=3, arr[1]=2 → Different
     j=2, arr[2]=3 → {1, 2, 3, 2, 3, 4, 4}
i=5: arr[5]=4, arr[2]=3 → Different
     j=3, arr[3]=4 → {1, 2, 3, 4, 3, 4, 4}
i=6: arr[6]=4, arr[3]=4 → Same, skip

Result: {1, 2, 3, 4}, length = 4
```

**Interview Answer:**
> "For a sorted array, I use two pointers. One tracks the position for unique elements, the other scans the array. When I find a different element, I copy it to the unique position. This is O(n) time and O(1) space."

---

### Q15: Find Second Largest Element

**Problem:** Find the second largest element in an array.

**Input:** `arr[] = {10, 5, 20, 8, 15}`  
**Output:** `15`

**Logic:**
1. Find the largest element
2. Find the largest element that is less than the first largest

**Code:**
```cpp
#include<iostream>
#include<climits>
using namespace std;

int findSecondLargest(int arr[], int n) {
    int largest = INT_MIN;
    int secondLargest = INT_MIN;
    
    // Find largest
    for(int i = 0; i < n; i++) {
        if(arr[i] > largest) {
            secondLargest = largest;  // Old largest becomes second
            largest = arr[i];
        }
        else if(arr[i] > secondLargest && arr[i] != largest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

int main() {
    int arr[] = {10, 5, 20, 8, 15};
    int n = 5;
    
    cout << "Second largest: " << findSecondLargest(arr, n);
    return 0;
}
```

**Dry Run:**
```
arr[] = {10, 5, 20, 8, 15}
largest = -∞, secondLargest = -∞

i=0: arr[0]=10 → largest=10, secondLargest=-∞
i=1: arr[1]=5  → No change
i=2: arr[2]=20 → secondLargest=10, largest=20
i=3: arr[3]=8  → No change
i=4: arr[4]=15 → 15>10 and 15≠20 → secondLargest=15

Output: 15
```

---

### Q16: Swap Two Numbers

**Problem:** Swap two numbers without using a third variable.

**Input:** `a = 5, b = 10`  
**Output:** `a = 10, b = 5`

**Method 1: Using Third Variable (Simple)**
```cpp
#include<iostream>
using namespace std;

void swapWithTemp(int &a, int &b) {
    int temp = a;
    a = b;
    b = temp;
}

int main() {
    int a = 5, b = 10;
    
    cout << "Before swap: a = " << a << ", b = " << b << endl;
    swapWithTemp(a, b);
    cout << "After swap: a = " << a << ", b = " << b << endl;
    
    return 0;
}
```

**Method 2: Without Third Variable (Addition/Subtraction)**
```cpp
#include<iostream>
using namespace std;

void swapWithoutTemp(int &a, int &b) {
    a = a + b;  // a = 5 + 10 = 15
    b = a - b;  // b = 15 - 10 = 5
    a = a - b;  // a = 15 - 5 = 10
}

int main() {
    int a = 5, b = 10;
    
    cout << "Before swap: a = " << a << ", b = " << b << endl;
    swapWithoutTemp(a, b);
    cout << "After swap: a = " << a << ", b = " << b << endl;
    
    return 0;
}
```

**Method 3: Using XOR (Bitwise)**
```cpp
#include<iostream>
using namespace std;

void swapXOR(int &a, int &b) {
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
}

int main() {
    int a = 5, b = 10;
    
    cout << "Before swap: a = " << a << ", b = " << b << endl;
    swapXOR(a, b);
    cout << "After swap: a = " << a << ", b = " << b << endl;
    
    return 0;
}
```

**Interview Answer:**
> "I can swap two numbers in three ways: using a temporary variable (simplest), using arithmetic operations (a=a+b, b=a-b, a=a-b), or using XOR bitwise operation. The temp variable method is most readable and recommended."

---

### Q17: Fibonacci Series

**Problem:** Print first n numbers of Fibonacci series (0, 1, 1, 2, 3, 5, 8, 13...)

**Input:** `n = 7`  
**Output:** `0 1 1 2 3 5 8`

**Logic:**
- First two numbers are 0 and 1
- Each next number = sum of previous two numbers

**Method 1: Iterative (Recommended)**
```cpp
#include<iostream>
using namespace std;

void printFibonacci(int n) {
    int first = 0, second = 1;
    
    cout << "Fibonacci series: ";
    
    for(int i = 0; i < n; i++) {
        if(i == 0) {
            cout << first << " ";
        }
        else if(i == 1) {
            cout << second << " ";
        }
        else {
            int next = first + second;
            cout << next << " ";
            first = second;
            second = next;
        }
    }
}

int main() {
    int n = 7;
    printFibonacci(n);
    return 0;
}
```

**Dry Run:**
```
n = 7
first = 0, second = 1

i=0: Print 0
i=1: Print 1
i=2: next = 0+1=1, Print 1, first=1, second=1
i=3: next = 1+1=2, Print 2, first=1, second=2
i=4: next = 1+2=3, Print 3, first=2, second=3
i=5: next = 2+3=5, Print 5, first=3, second=5
i=6: next = 3+5=8, Print 8, first=5, second=8

Output: 0 1 1 2 3 5 8
```

**Method 2: Using Recursion**
```cpp
#include<iostream>
using namespace std;

int fibonacci(int n) {
    // Base cases
    if(n == 0) return 0;
    if(n == 1) return 1;
    
    // Recursive case
    return fibonacci(n-1) + fibonacci(n-2);
}

int main() {
    int n = 7;
    
    cout << "Fibonacci series: ";
    for(int i = 0; i < n; i++) {
        cout << fibonacci(i) << " ";
    }
    
    return 0;
}
```

**Interview Answer:**
> "Fibonacci series starts with 0 and 1, and each subsequent number is the sum of the previous two. I prefer the iterative approach using two variables to track the last two numbers. This is O(n) time and O(1) space. The recursive approach is elegant but less efficient at O(2^n)."

---

### Q18: Find Factorial of a Number

**Problem:** Find factorial (n! = n × (n-1) × (n-2) × ... × 1)

**Input:** `n = 5`  
**Output:** `120`

**Method 1: Iterative**
```cpp
#include<iostream>
using namespace std;

int factorial(int n) {
    int result = 1;
    
    for(int i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

int main() {
    int n = 5;
    cout << "Factorial of " << n << " = " << factorial(n);
    return 0;
}
```

**Dry Run:**
```
n = 5
result = 1

i=1: result = 1 * 1 = 1
i=2: result = 1 * 2 = 2
i=3: result = 2 * 3 = 6
i=4: result = 6 * 4 = 24
i=5: result = 24 * 5 = 120

Output: 120
```

**Interview Answer:**
> "I multiply numbers from 1 to n iteratively. Initialize result to 1, then multiply by each number. Time complexity is O(n)."

---

### Q19: Check Armstrong Number

**Problem:** Check if a number equals the sum of cubes of its digits.

**Input:** `153`  
**Output:** `Armstrong` (1³ + 5³ + 3³ = 1 + 125 + 27 = 153)

**Logic:**
- Extract each digit
- Cube it and add to sum
- Compare sum with original number

**Code:**
```cpp
#include<iostream>
#include<cmath>
using namespace std;

bool isArmstrong(int n) {
    int original = n;
    int sum = 0;
    
    while(n > 0) {
        int digit = n % 10;      // Extract last digit
        sum += pow(digit, 3);    // Add cube of digit
        n = n / 10;              // Remove last digit
    }
    
    return (sum == original);
}

int main() {
    int n = 153;
    
    if(isArmstrong(n))
        cout << n << " is an Armstrong number";
    else
        cout << n << " is not an Armstrong number";
    
    return 0;
}
```

**Dry Run:**
```
n = 153
original = 153, sum = 0

Iteration 1: digit = 153 % 10 = 3
             sum = 0 + 3³ = 27
             n = 153 / 10 = 15

Iteration 2: digit = 15 % 10 = 5
             sum = 27 + 5³ = 152
             n = 15 / 10 = 1

Iteration 3: digit = 1 % 10 = 1
             sum = 152 + 1³ = 153
             n = 1 / 10 = 0

sum (153) == original (153)? YES

Output: Armstrong number
```

**Interview Answer:**
> "An Armstrong number equals the sum of cubes of its digits. I extract each digit using modulo 10, cube it, add to sum, and remove the digit by dividing by 10. Finally, I compare the sum with the original number."

---

### Q20: Reverse a Number

**Problem:** Reverse the digits of a number.

**Input:** `1234`  
**Output:** `4321`

**Logic:**
- Extract last digit using modulo
- Build reversed number by multiplying by 10 and adding digit
- Remove last digit by dividing by 10

**Code:**
```cpp
#include<iostream>
using namespace std;

int reverseNumber(int n) {
    int reversed = 0;
    
    while(n > 0) {
        int digit = n % 10;           // Extract last digit
        reversed = reversed * 10 + digit;  // Add to reversed
        n = n / 10;                   // Remove last digit
    }
    
    return reversed;
}

int main() {
    int n = 1234;
    cout << "Original: " << n << endl;
    cout << "Reversed: " << reverseNumber(n);
    return 0;
}
```

**Dry Run:**
```
n = 1234
reversed = 0

Iteration 1: digit = 1234 % 10 = 4
             reversed = 0 * 10 + 4 = 4
             n = 1234 / 10 = 123

Iteration 2: digit = 123 % 10 = 3
             reversed = 4 * 10 + 3 = 43
             n = 123 / 10 = 12

Iteration 3: digit = 12 % 10 = 2
             reversed = 43 * 10 + 2 = 432
             n = 12 / 10 = 1

Iteration 4: digit = 1 % 10 = 1
             reversed = 432 * 10 + 1 = 4321
             n = 1 / 10 = 0

Output: 4321
```

**Interview Answer:**
> "I extract the last digit using modulo 10, build the reversed number by multiplying the current reversed value by 10 and adding the digit, then remove the last digit by integer division. This is O(log n) where n is the number."

---

### Q21: Check Palindrome Number

**Problem:** Check if a number reads the same forwards and backwards.

**Input:** `121`  
**Output:** `Palindrome`

**Code:**
```cpp
#include<iostream>
using namespace std;

bool isPalindromeNumber(int n) {
    int original = n;
    int reversed = 0;
    
    while(n > 0) {
        int digit = n % 10;
        reversed = reversed * 10 + digit;
        n = n / 10;
    }
    
    return (reversed == original);
}

int main() {
    int n = 121;
    
    if(isPalindromeNumber(n))
        cout << n << " is a palindrome";
    else
        cout << n << " is not a palindrome";
    
    return 0;
}
```

**Interview Answer:**
> "I reverse the number using the same logic as reverse number problem, then compare the reversed number with the original. If they're equal, it's a palindrome."

---

### Q22: GCD (Greatest Common Divisor)

**Problem:** Find the GCD of two numbers.

**Input:** `a = 48, b = 18`  
**Output:** `6`

**Method 1: Euclidean Algorithm**
```cpp
#include<iostream>
using namespace std;

int gcd(int a, int b) {
    while(b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

int main() {
    int a = 48, b = 18;
    cout << "GCD of " << a << " and " << b << " = " << gcd(a, b);
    return 0;
}
```

**Dry Run:**
```
a = 48, b = 18

Iteration 1: temp = 18
             b = 48 % 18 = 12
             a = 18

Iteration 2: temp = 12
             b = 18 % 12 = 6
             a = 12

Iteration 3: temp = 6
             b = 12 % 6 = 0
             a = 6

b == 0, STOP

Output: 6
```

**Method 2: Recursive**
```cpp
int gcd(int a, int b) {
    if(b == 0) return a;
    return gcd(b, a % b);
}
```

**Interview Answer:**
> "I use the Euclidean algorithm which repeatedly divides the larger number by the smaller and takes the remainder, until the remainder is 0. The last non-zero remainder is the GCD. This is very efficient with O(log min(a,b)) complexity."

---

### Q23: LCM (Least Common Multiple)

**Problem:** Find the LCM of two numbers.

**Input:** `a = 12, b = 18`  
**Output:** `36`

**Formula:** `LCM(a, b) = (a × b) / GCD(a, b)`

**Code:**
```cpp
#include<iostream>
using namespace std;

int gcd(int a, int b) {
    while(b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

int lcm(int a, int b) {
    return (a * b) / gcd(a, b);
}

int main() {
    int a = 12, b = 18;
    cout << "LCM of " << a << " and " << b << " = " << lcm(a, b);
    return 0;
}
```

**Interview Answer:**
> "I use the relationship between GCD and LCM: LCM(a,b) = (a × b) / GCD(a,b). First, I calculate GCD using the Euclidean algorithm, then apply the formula."

---

### Q24: Sum of Digits

**Problem:** Find the sum of all digits in a number.

**Input:** `1234`  
**Output:** `10` (1 + 2 + 3 + 4)

**Code:**
```cpp
#include<iostream>
using namespace std;

int sumOfDigits(int n) {
    int sum = 0;
    
    while(n > 0) {
        sum += n % 10;  // Add last digit
        n = n / 10;     // Remove last digit
    }
    
    return sum;
}

int main() {
    int n = 1234;
    cout << "Sum of digits of " << n << " = " << sumOfDigits(n);
    return 0;
}
```

**Interview Answer:**
> "I extract each digit using modulo 10, add it to the sum, and remove it by dividing by 10. This continues until all digits are processed."

---

### Q25: Power of a Number

**Problem:** Calculate a^b (a raised to power b).

**Input:** `a = 2, b = 5`  
**Output:** `32` (2^5 = 2×2×2×2×2)

**Method 1: Iterative**
```cpp
#include<iostream>
using namespace std;

int power(int a, int b) {
    int result = 1;
    
    for(int i = 0; i < b; i++) {
        result *= a;
    }
    
    return result;
}

int main() {
    int a = 2, b = 5;
    cout << a << "^" << b << " = " << power(a, b);
    return 0;
}
```

**Method 2: Using Built-in Function**
```cpp
#include<iostream>
#include<cmath>
using namespace std;

int main() {
    int a = 2, b = 5;
    cout << a << "^" << b << " = " << pow(a, b);
    return 0;
}
```

**Interview Answer:**
> "I can calculate power iteratively by multiplying the base 'a' by itself 'b' times. Alternatively, I can use the built-in pow() function from cmath library. For better efficiency with large powers, I could implement binary exponentiation."

---

## 2. STRINGS

### 📝 Quick Links to String Problems:
- [Q1: Reverse a String](#q1-reverse-a-string)
- [Q2: Check Palindrome](#q2-check-if-string-is-palindrome)
- [Q3: Count Vowels](#q3-count-vowels-in-a-string)
- [Q4: Count Words](#q4-count-words-in-a-string)

---

### Q1: Reverse a String

**Problem:** Reverse the given string.

**Input:** `"hello"`  
**Output:** `"olleh"`

**Code:**
```cpp
#include<iostream>
#include<cstring>
using namespace std;

void reverseString(char str[]) {
    int start = 0;
    int end = strlen(str) - 1;
    
    while(start < end) {
        // Swap
        char temp = str[start];
        str[start] = str[end];
        str[end] = temp;
        
        start++;
        end--;
    }
}

int main() {
    char str[] = "hello";
    
    cout << "Original: " << str << endl;
    reverseString(str);
    cout << "Reversed: " << str << endl;
    
    return 0;
}
```

**Interview Answer:**
> "Same logic as array reversal - I use two pointers to swap characters from both ends moving towards the center."

---

### Q2: Check if String is Palindrome

**Problem:** Check if a string reads the same forwards and backwards.

**Input:** `"madam"`  
**Output:** `Yes`

**Logic:**
1. Compare first character with last
2. Compare second with second-last
3. Continue until middle
4. If all match, it's a palindrome

**Code:**
```cpp
#include<iostream>
#include<cstring>
using namespace std;

bool isPalindrome(char str[]) {
    int start = 0;
    int end = strlen(str) - 1;
    
    while(start < end) {
        if(str[start] != str[end]) {
            return false;  // Not a palindrome
        }
        start++;
        end--;
    }
    return true;  // Is palindrome
}

int main() {
    char str[] = "madam";
    
    if(isPalindrome(str))
        cout << str << " is a palindrome";
    else
        cout << str << " is not a palindrome";
    
    return 0;
}
```

**Dry Run:**
```
str = "madam"
start=0, end=4

Step 1: str[0]='m', str[4]='m' → Match ✓
        start=1, end=3

Step 2: str[1]='a', str[3]='a' → Match ✓
        start=2, end=2

Step 3: start >= end, STOP

Output: Palindrome
```

**Interview Answer:**
> "I compare characters from both ends moving towards the center. If any pair doesn't match, it's not a palindrome. If all pairs match, it is a palindrome."

---

### Q3: Count Vowels in a String

**Problem:** Count the number of vowels (a, e, i, o, u).

**Input:** `"hello"`  
**Output:** `2` (e, o)

**Code:**
```cpp
#include<iostream>
#include<cstring>
using namespace std;

int countVowels(char str[]) {
    int count = 0;
    
    for(int i = 0; i < strlen(str); i++) {
        char ch = tolower(str[i]);  // Convert to lowercase
        
        if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
            count++;
        }
    }
    return count;
}

int main() {
    char str[] = "Hello World";
    
    cout << "Number of vowels: " << countVowels(str);
    return 0;
}
```

**Interview Answer:**
> "I traverse the string character by character, convert each to lowercase, and check if it's a vowel using OR conditions. I increment the counter for each vowel found."

---

### Q4: Count Words in a String

**Problem:** Count the number of words (separated by spaces).

**Input:** `"Hello World"`  
**Output:** `2`

**Code:**
```cpp
#include<iostream>
#include<cstring>
using namespace std;

int countWords(char str[]) {
    int count = 0;
    bool inWord = false;
    
    for(int i = 0; i < strlen(str); i++) {
        if(str[i] != ' ' && !inWord) {
            count++;
            inWord = true;
        }
        else if(str[i] == ' ') {
            inWord = false;
        }
    }
    return count;
}

int main() {
    char str[] = "Hello World Programming";
    
    cout << "Number of words: " << countWords(str);
    return 0;
}
```

**Interview Answer:**
> "I use a flag to track whether I'm inside a word. When I encounter a non-space character after a space, I increment the word count."

---

## 3. SEARCHING

### 📝 Quick Links to Searching Problems:
- [Q1: Linear Search](#q1-linear-search)
- [Q2: Binary Search](#q2-binary-search)

---

### Q1: Linear Search

**Problem:** Find if an element exists in an array and return its position.

**Input:** `arr[] = {10, 20, 30, 40}`, search = `30`  
**Output:** `Position 2` (0-indexed)

**Logic:**
- Check each element one by one from start to end

**Code:**
```cpp
#include<iostream>
using namespace std;

int linearSearch(int arr[], int n, int key) {
    for(int i = 0; i < n; i++) {
        if(arr[i] == key) {
            return i;  // Found at position i
        }
    }
    return -1;  // Not found
}

int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int n = 5;
    int key = 30;
    
    int result = linearSearch(arr, n, key);
    
    if(result != -1)
        cout << "Element found at position: " << result;
    else
        cout << "Element not found";
    
    return 0;
}
```

**Interview Answer:**
> "Linear search checks each element sequentially until the target is found or the array ends. Time complexity is O(n). It works on both sorted and unsorted arrays."

---

### Q2: Binary Search

**Problem:** Find element in a **sorted** array efficiently.

**Input:** `arr[] = {10, 20, 30, 40, 50}`, search = `30`  
**Output:** `Position 2`

**Logic:**
1. Find middle element
2. If middle == key, found!
3. If key < middle, search in left half
4. If key > middle, search in right half
5. Repeat until found or no elements left

**Code:**
```cpp
#include<iostream>
using namespace std;

int binarySearch(int arr[], int n, int key) {
    int start = 0;
    int end = n - 1;
    
    while(start <= end) {
        int mid = start + (end - start) / 2;
        
        if(arr[mid] == key) {
            return mid;  // Found
        }
        else if(key < arr[mid]) {
            end = mid - 1;  // Search left half
        }
        else {
            start = mid + 1;  // Search right half
        }
    }
    return -1;  // Not found
}

int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int n = 5;
    int key = 30;
    
    int result = binarySearch(arr, n, key);
    
    if(result != -1)
        cout << "Element found at position: " << result;
    else
        cout << "Element not found";
    
    return 0;
}
```

**Dry Run:**
```
arr[] = {10, 20, 30, 40, 50}, key = 30
start=0, end=4

Iteration 1:
  mid = 0 + (4-0)/2 = 2
  arr[2] = 30
  30 == 30? YES! Return 2

Output: Position 2
```

**Interview Answer:**
> "Binary search works only on sorted arrays. I repeatedly divide the search space in half by comparing the middle element with the target. Time complexity is O(log n), much faster than linear search for large arrays."

---

## 4. SORTING

### 📝 Quick Links to Sorting Problems:
- [Q1: Bubble Sort](#q1-bubble-sort)
- [Q2: Selection Sort](#q2-selection-sort)

---

### Q1: Bubble Sort

**Problem:** Sort an array in ascending order.

**Input:** `arr[] = {64, 34, 25, 12, 22}`  
**Output:** `arr[] = {12, 22, 25, 34, 64}`

**Logic:**
1. Compare adjacent elements
2. Swap if they're in wrong order
3. After each pass, largest element reaches its correct position
4. Repeat for remaining elements

**Code:**
```cpp
#include<iostream>
using namespace std;

void bubbleSort(int arr[], int n) {
    for(int i = 0; i < n-1; i++) {
        for(int j = 0; j < n-i-1; j++) {
            if(arr[j] > arr[j+1]) {
                // Swap
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}

int main() {
    int arr[] = {64, 34, 25, 12, 22};
    int n = 5;
    
    cout << "Before sorting: ";
    for(int i = 0; i < n; i++) cout << arr[i] << " ";
    
    bubbleSort(arr, n);
    
    cout << "\nAfter sorting: ";
    for(int i = 0; i < n; i++) cout << arr[i] << " ";
    
    return 0;
}
```

**Dry Run:**
```
arr[] = {64, 34, 25, 12, 22}

Pass 1: Compare adjacent elements
  64 > 34? Yes → Swap → {34, 64, 25, 12, 22}
  64 > 25? Yes → Swap → {34, 25, 64, 12, 22}
  64 > 12? Yes → Swap → {34, 25, 12, 64, 22}
  64 > 22? Yes → Swap → {34, 25, 12, 22, 64} ← 64 in place

Pass 2:
  34 > 25? Yes → Swap → {25, 34, 12, 22, 64}
  34 > 12? Yes → Swap → {25, 12, 34, 22, 64}
  34 > 22? Yes → Swap → {25, 12, 22, 34, 64} ← 34 in place

... continues until sorted

Final: {12, 22, 25, 34, 64}
```

**Interview Answer:**
> "Bubble sort repeatedly compares adjacent elements and swaps them if they're in the wrong order. After each pass, the largest element 'bubbles up' to its correct position. Time complexity is O(n²), suitable for small arrays or learning purposes."

---

### Q2: Selection Sort

**Problem:** Sort an array by repeatedly selecting the minimum element.

**Input:** `arr[] = {64, 25, 12, 22, 11}`  
**Output:** `arr[] = {11, 12, 22, 25, 64}`

**Logic:**
1. Find the minimum element in unsorted portion
2. Swap it with the first unsorted element
3. Move boundary of sorted/unsorted portions
4. Repeat

**Code:**
```cpp
#include<iostream>
using namespace std;

void selectionSort(int arr[], int n) {
    for(int i = 0; i < n-1; i++) {
        int minIndex = i;
        
        // Find minimum in remaining array
        for(int j = i+1; j < n; j++) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        
        // Swap minimum with first unsorted element
        int temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}

int main() {
    int arr[] = {64, 25, 12, 22, 11};
    int n = 5;
    
    cout << "Before sorting: ";
    for(int i = 0; i < n; i++) cout << arr[i] << " ";
    
    selectionSort(arr, n);
    
    cout << "\nAfter sorting: ";
    for(int i = 0; i < n; i++) cout << arr[i] << " ";
    
    return 0;
}
```

**Dry Run:**
```
arr[] = {64, 25, 12, 22, 11}

i=0: Find minimum in {64, 25, 12, 22, 11}
     minIndex=4 (11)
     Swap arr[0] and arr[4] → {11, 25, 12, 22, 64}

i=1: Find minimum in {25, 12, 22, 64}
     minIndex=2 (12)
     Swap arr[1] and arr[2] → {11, 12, 25, 22, 64}

i=2: Find minimum in {25, 22, 64}
     minIndex=3 (22)
     Swap arr[2] and arr[3] → {11, 12, 22, 25, 64}

i=3: Find minimum in {25, 64}
     minIndex=3 (25) - already in place

Final: {11, 12, 22, 25, 64}
```

**Interview Answer:**
> "Selection sort divides the array into sorted and unsorted portions. In each iteration, it finds the minimum element from the unsorted portion and places it at the beginning. Time complexity is O(n²), but it makes fewer swaps than bubble sort."

---

## 5. STACK & QUEUE

### 📝 Quick Links:
- [Stack (LIFO)](#stack-lifo---last-in-first-out)
- [Queue (FIFO)](#queue-fifo---first-in-first-out)

---

### Stack (LIFO - Last In First Out)

**Real-life Example:** Stack of plates - you add on top and remove from top.

**Basic Operations:**
- **Push:** Add element to top
- **Pop:** Remove element from top
- **Peek/Top:** View top element without removing
- **isEmpty:** Check if stack is empty

**Code (Array Implementation):**
```cpp
#include<iostream>
using namespace std;

class Stack {
    int arr[100];
    int top;
    
public:
    Stack() {
        top = -1;  // Empty stack
    }
    
    void push(int value) {
        if(top >= 99) {
            cout << "Stack Overflow\n";
            return;
        }
        arr[++top] = value;
    }
    
    int pop() {
        if(top < 0) {
            cout << "Stack Underflow\n";
            return -1;
        }
        return arr[top--];
    }
    
    int peek() {
        if(top < 0) {
            cout << "Stack is empty\n";
            return -1;
        }
        return arr[top];
    }
    
    bool isEmpty() {
        return (top < 0);
    }
};

int main() {
    Stack s;
    
    s.push(10);
    s.push(20);
    s.push(30);
    
    cout << "Top element: " << s.peek() << endl;  // 30
    cout << "Popped: " << s.pop() << endl;        // 30
    cout << "Top element: " << s.peek() << endl;  // 20
    
    return 0;
}
```

**Visual:**
```
Push 10: |10|
Push 20: |20|
         |10|
Push 30: |30| ← top
         |20|
         |10|

Pop:     |20| ← top (30 removed)
         |10|
```

**Interview Answer:**
> "Stack follows LIFO principle. I can implement it using an array with a top pointer. Push adds to top, pop removes from top. Real applications include function call stack, undo operations, and expression evaluation."

---

### Queue (FIFO - First In First Out)

**Real-life Example:** Line at a ticket counter - first person in line is served first.

**Basic Operations:**
- **Enqueue:** Add element at rear
- **Dequeue:** Remove element from front
- **Front:** View front element
- **isEmpty:** Check if queue is empty

**Code (Array Implementation):**
```cpp
#include<iostream>
using namespace std;

class Queue {
    int arr[100];
    int front, rear;
    
public:
    Queue() {
        front = -1;
        rear = -1;
    }
    
    void enqueue(int value) {
        if(rear >= 99) {
            cout << "Queue is full\n";
            return;
        }
        if(front == -1) front = 0;
        arr[++rear] = value;
    }
    
    int dequeue() {
        if(front == -1 || front > rear) {
            cout << "Queue is empty\n";
            return -1;
        }
        return arr[front++];
    }
    
    int getFront() {
        if(front == -1) {
            cout << "Queue is empty\n";
            return -1;
        }
        return arr[front];
    }
    
    bool isEmpty() {
        return (front == -1 || front > rear);
    }
};

int main() {
    Queue q;
    
    q.enqueue(10);
    q.enqueue(20);
    q.enqueue(30);
    
    cout << "Front element: " << q.getFront() << endl;  // 10
    cout << "Dequeued: " << q.dequeue() << endl;        // 10
    cout << "Front element: " << q.getFront() << endl;  // 20
    
    return 0;
}
```

**Visual:**
```
Enqueue 10: |10|
            front/rear

Enqueue 20: |10|20|
            front rear

Enqueue 30: |10|20|30|
            front    rear

Dequeue:    |20|30|
            front rear (10 removed)
```

**Interview Answer:**
> "Queue follows FIFO principle. Elements are added at the rear and removed from the front. I implement it using an array with front and rear pointers. Real applications include task scheduling, printer queue, and BFS in graphs."

---

## 6. RECURSION

### 📝 Quick Links to Recursion Problems:
- [Q1: Factorial Using Recursion](#q1-factorial-using-recursion)
- [Q2: Print Numbers 1 to N](#q2-print-numbers-1-to-n)
- [Q3: Sum of N Natural Numbers](#q3-sum-of-n-natural-numbers)

---

### What is Recursion?
A function that calls itself to solve a problem by breaking it into smaller subproblems.

**Structure:**
```cpp
returnType functionName(parameters) {
    // Base case - stopping condition
    if(condition) {
        return value;
    }
    
    // Recursive case - function calls itself
    return functionName(smaller_problem);
}
```

---

### Q1: Factorial Using Recursion

**Problem:** Find factorial of n (n! = n × (n-1) × (n-2) × ... × 1)

**Input:** `n = 5`  
**Output:** `120` (5 × 4 × 3 × 2 × 1)

**Logic:**
- Base case: If n == 0 or n == 1, return 1
- Recursive case: n! = n × (n-1)!

**Code:**
```cpp
#include<iostream>
using namespace std;

int factorial(int n) {
    // Base case
    if(n == 0 || n == 1) {
        return 1;
    }
    
    // Recursive case
    return n * factorial(n - 1);
}

int main() {
    int n = 5;
    cout << "Factorial of " << n << " = " << factorial(n);
    return 0;
}
```

**Recursion Tree:**
```
factorial(5)
  = 5 * factorial(4)
      = 4 * factorial(3)
          = 3 * factorial(2)
              = 2 * factorial(1)
                  = 1 (base case)
              = 2 * 1 = 2
          = 3 * 2 = 6
      = 4 * 6 = 24
  = 5 * 24 = 120
```

**Interview Answer:**
> "Recursion solves a problem by breaking it into smaller instances of the same problem. For factorial, I define the base case (n=1 returns 1) and recursive case (n! = n × (n-1)!). The function calls itself with n-1 until it reaches the base case, then returns back up."

---

### Q2: Print Numbers 1 to N

**Problem:** Print numbers from 1 to n using recursion.

**Input:** `n = 5`  
**Output:** `1 2 3 4 5`

**Code:**
```cpp
#include<iostream>
using namespace std;

void printNumbers(int n) {
    // Base case
    if(n == 0) {
        return;
    }
    
    // Recursive call first
    printNumbers(n - 1);
    
    // Then print
    cout << n << " ";
}

int main() {
    int n = 5;
    printNumbers(n);
    return 0;
}
```

**How it works:**
```
printNumbers(5)
  printNumbers(4)
    printNumbers(3)
      printNumbers(2)
        printNumbers(1)
          printNumbers(0) → return (base case)
          print 1
        print 2
      print 3
    print 4
  print 5

Output: 1 2 3 4 5
```

---

### Q3: Sum of N Natural Numbers

**Problem:** Find sum of first n natural numbers.

**Input:** `n = 5`  
**Output:** `15` (1+2+3+4+5)

**Code:**
```cpp
#include<iostream>
using namespace std;

int sum(int n) {
    // Base case
    if(n == 0) {
        return 0;
    }
    
    // Recursive case
    return n + sum(n - 1);
}

int main() {
    int n = 5;
    cout << "Sum = " << sum(n);
    return 0;
}
```

**Interview Answer:**
> "This is a classic recursion example. Base case: sum(0) = 0. Recursive case: sum(n) = n + sum(n-1). The function adds current number to the sum of previous numbers."

---

## 7-DAY STUDY PLAN

### Day 1-2: Arrays & Basic Math Problems
- ✅ Understand array basics
- ✅ Practice: Largest element, Reverse array, Second largest
- ✅ Practice: Find duplicate, Count frequency
- ✅ Basic problems: Swap numbers, Factorial, Prime check
- ✅ Number problems: Palindrome, Armstrong, Reverse number
- 📝 Write code by hand, do dry runs

### Day 3: Strings + Searching
- ✅ String operations: Reverse, Palindrome, Count vowels
- ✅ Linear search
- ✅ Binary search (concept + code)
- 📝 Explain logic in your own words

### Day 4: Sorting
- ✅ Bubble sort - understand the logic
- ✅ Selection sort - understand the logic
- 📝 Do dry run on paper with sample array

### Day 5: Stack & Queue
- ✅ Understand LIFO and FIFO
- ✅ Learn push/pop and enqueue/dequeue
- ✅ Implement using arrays
- 📝 Draw diagrams showing operations

### Day 6: Recursion & Fibonacci
- ✅ Understand how recursion works
- ✅ Practice: Factorial, Print numbers, Sum
- ✅ Fibonacci: Both iterative and recursive
- ✅ GCD and LCM problems
- 📝 Draw recursion trees

### Day 7: Revision + Mock Interview
- ✅ Revise all topics
- ✅ Practice explaining solutions
- ✅ Solve mixed problems
- 📝 Prepare answers for "Why this approach?"

---

## INTERVIEW TIPS

### 🎯 How to Answer DSA Questions in Interview

#### Step 1: Understand the Problem
> "Let me make sure I understand... [repeat problem in your words]"

#### Step 2: Think Aloud
> "I can solve this by... [explain your approach]"

#### Step 3: Discuss Time/Space Complexity (Optional)
> "This solution takes O(n) time because we traverse the array once"

#### Step 4: Write Clean Code
- Use meaningful variable names
- Add comments for clarity
- Write step by step

#### Step 5: Test with Example
> "Let me verify with an example: if input is [1,2,3]..."

---

### ✅ If You Don't Know the Answer

**DON'T SAY:**
❌ "I don't know"
❌ "I never learned this"

**DO SAY:**
✅ "I haven't encountered this specific problem, but I can try solving it using [arrays/loops/etc]"
✅ "I have strong basics in arrays and strings. Let me think about this problem..."
✅ "Can I start with a simple approach first?"

---

### 💪 Confidence Boosters

**Remember:**
1. Capgemini doesn't expect competitive programming
2. They want to see your **thinking process**
3. **Clear explanation > Perfect code**
4. It's okay to ask clarifying questions
5. Simple working solution > Complex incomplete solution

---

### 🎤 Sample Interview Responses

**Q: What data structures do you know?**
> "I'm comfortable with arrays, strings, and basic concepts of stack and queue. I understand how to implement linear search, binary search, and sorting algorithms like bubble sort. I'm currently learning more advanced structures."

**Q: Can you optimize this solution?**
> "My current solution is O(n²). For optimization, I would consider using a hash map to reduce time complexity, or if the array is sorted, I could use binary search instead of linear search."

**Q: Why did you choose this approach?**
> "I chose this approach because it's straightforward and easy to understand. The logic is clear: [explain your logic]. For a production system, I might consider [mention optimization], but this solution correctly solves the problem."

---

## BONUS: Common Mistakes to Avoid

### ❌ Don't Do This:
1. **Don't memorize code** - understand logic
2. **Don't skip dry runs** - always trace your logic
3. **Don't ignore edge cases** - empty array, single element, etc.
4. **Don't rush** - take time to think
5. **Don't give up** - try simpler approach if stuck

### ✅ Do This:
1. **Explain your thought process** out loud
2. **Start with brute force** then optimize
3. **Use examples** to verify your solution
4. **Ask questions** if problem is unclear
5. **Stay calm** - interviewers want you to succeed

---

## QUICK REFERENCE CHEAT SHEET

### Array Operations
```cpp
// Traversal
for(int i = 0; i < n; i++) { /* access arr[i] */ }

// Find max
int max = arr[0];
for(int i = 1; i < n; i++) {
    if(arr[i] > max) max = arr[i];
}

// Reverse (two pointers)
int start = 0, end = n-1;
while(start < end) {
    swap(arr[start++], arr[end--]);
}
```

### String Operations
```cpp
// Length
int len = strlen(str);

// Reverse
// Same as array reversal

// Palindrome check
// Compare str[i] with str[n-1-i]
```

### Searching
```cpp
// Linear Search - O(n)
for(int i = 0; i < n; i++) {
    if(arr[i] == key) return i;
}

// Binary Search - O(log n) - SORTED ARRAY ONLY
int start = 0, end = n-1;
while(start <= end) {
    int mid = start + (end-start)/2;
    if(arr[mid] == key) return mid;
    else if(key < arr[mid]) end = mid-1;
    else start = mid+1;
}
```

### Sorting
```cpp
// Bubble Sort - O(n²)
for(int i = 0; i < n-1; i++) {
    for(int j = 0; j < n-i-1; j++) {
        if(arr[j] > arr[j+1]) swap(arr[j], arr[j+1]);
    }
}

// Selection Sort - O(n²)
for(int i = 0; i < n-1; i++) {
    int minIdx = i;
    for(int j = i+1; j < n; j++) {
        if(arr[j] < arr[minIdx]) minIdx = j;
    }
    swap(arr[i], arr[minIdx]);
}
```

### Recursion Template
```cpp
returnType function(parameters) {
    // Base case
    if(stopping_condition) return base_value;
    
    // Recursive case
    return operation(function(smaller_problem));
}
```

---

## FINAL WORDS OF ENCOURAGEMENT

🌟 **You've got this!**

- You already know C++, OOP, and SQL ✅
- DSA basics are not difficult - just practice ✅
- Capgemini interviews are beginner-friendly ✅
- Clear thinking matters more than complex algorithms ✅

**Remember:** Everyone starts as a beginner. The fact that you're preparing shows you're serious. With this guide and consistent practice, you'll be interview-ready! 💪

---

## Practice Schedule (Next 7 Days)

| Day | Morning (1 hour) | Evening (1 hour) |
|-----|------------------|------------------|
| Day 1 | Arrays + Basic math (swap, factorial) | Practice 3 array problems |
| Day 2 | Number problems (prime, palindrome, Armstrong) | More array + dry runs |
| Day 3 | Strings + Fibonacci | Practice string + searching |
| Day 4 | Sorting + GCD/LCM | Practice bubble & selection sort |
| Day 5 | Stack & queue | Implement stack and queue |
| Day 6 | Recursion | Practice recursion + Fibonacci recursive |
| Day 7 | Revise all topics | Mock interview practice |

---

**Good luck with your Capgemini interview! You're well-prepared now! 🚀**

*Remember: It's not about knowing everything, it's about showing how you think and solve problems.*
