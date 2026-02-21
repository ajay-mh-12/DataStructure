// // // const body = document.getElementsByTagName("body")[0]
// // // const input = document.getElementById("input")
// // // const quoteElement = document.getElementById("quote")
// // // const quotes = [
// // //   "The only way to do greate work is to love what you do",
// // //   "life is what happens when you're busy making other plans"
// // // ]


// // // const usedIndexes = new Set()

// // // function setColor(name){
// // //   body.style.backgroundColor = name
// // // }
// // // setColor()

// // // function randomColor(){
// // //   const red = Math.round(Math.random() * 255)
// // //   const green = Math.round(Math.random() * 255)
// // //   const blue = Math.round(Math.random() * 255)

// // //   const color = `rgb(${red}, ${green}, ${blue})`
// // //   body.style.backgroundColor = color
// // // }
// // // randomColor()

// // // function reverseString(str) {
// // //   return str.split(" ").reverse().join("")

// // // }

// // // function check(){
// // //   const value = input.value
// // //   const reverse = reverseString(value)

// // //   if(value === reverse){
// // //     alert("P A L I N D R O M E")
// // //   } else{
// // //     alert("Not today !")
// // //   }

// // //   input.value = ""

// // // }

// // // function generateQuote(){
// // //   if(usedIndexes.size >= quotes.length){
// // //     usedIndexes.clear()
// // //   }
// // //   while (true){

// // //     const randomIdx = Math.floor(Math.random()* quotes.length)

// // //     if (usedIndexes.has(randomIdx)) continue
// // //     const quote =  quotes[randomIdx]
// // //     quoteElement.innerHTML =quote
// // //     usedIndexes.add(randomIdx)
// // //     break
// // //   }

// // // }

// // // What we'll cover //

// // // 1. Basic data structures //
// // // 2. Big 0 notation //
// // // 3. Searching algorithams //
// // // 4. Sorting algorithams //
// // // 5. Graphs //
// // // 6. Trees //

// // // Data Structure : a named location that can be used to store  and organize data  //
// // // eg: Family tree A heritarchy of family relationships //
// // // Array[] array a coolection of elements stored at contiguous memory location //
// // // TODO: Algorithm //
// // // Algorithm: a collection of steps to solve a problem //
// // // eg: Linear search one by one, examine the elements of an array to find a value //
// // // FIXME:
// // // TODO:
// // // Stack : LIFO data sturcture. Last-In-First-Out
// // // stores objects into a sort of "vertical tower" push() to add to the top pop() to remove from the top
// // // Stack //
// // // // TODO:
// // // Queue //
// // // FIFO DATA STURCTURE , First in first-out eg: A line of people A COLLECTION designed for holding elements prior to processing Linear data structure

// // // add = enqueue, offer()
// // // remove = dequeue,poll()
// // // queue<string> queue
// // // queue.offer("Karen");
// // // queue.offer("stev");
// // // queue.offer("Harold");
// // // queue.offer("Chad");
// // // system .out.println(queue)
// // // Where are queues useful?
// // // 1. Keyboard Buffer (letters should appear on the screen in the order they're pressed)
// // // 2. Printer Queue (Print jobs should be completed in order)
// // // 3. Used in LinkedLists, priorityQueues , Breath-first search

// // //TODO: Priority Queue = A fifo data structure that serve elements with the highest priorities first before elemenets with lower priority //
// // //  queue.offer("B");
// // // queue.offer("A");
// // // queue.offer("D");
// // // queue.offer("c");
// // // queue.offer("E");
// // //FIXME:

// // // TODO: //
// // // LinkedList //
// // // ["A"]["B"]["c"]["D"]["E"]["F"]["G"]["H"]
// // // "A"
// // // LinkedList<String> linkedList = new LinkedList<String>()
// // // linkedList.push("A");
// // // linkedList.push("B")

// // // linkedList.add(4,"E");
// // // linkedList.rremove("E")
// // // system.outprintln(linkedList)
// // // string first = linkedList.remove

// // // FIXME:
// // // TODO:
// // // LinkedList = stores Nodes in 2 parts (data + address)
// // // NOdes are in non-consecutive memory locations Elements are linked using pointers

// // // Singly Linked LIst //
// // // [data | address] -> [data | address ] -> [data | address]

// // // Doubly LinkedList //
// // // [address | data | address] <-> [address | data | address]
// // // advantages //
// // // 1. Dynamic Data structure (allocates needed memory while running)
// // // 2. Insertion and Deletion of Nodes is easy
// // // 3. No/Low memory waste

// // // uses //
// // //1. implement Stacks/Queues
// // // 2. GPS navigation
// // // 3. music playlist
// // //FIXME:
// // // Dynamic Array //

// // // new string [capacity];
// // // ["A"]["B"]["c"]["D"]["E"][null] size = 5
// // // capacity = 6
// // // new String [capacity];

// // // Static Array //
// // // ["A"]["B"]["c"]["D"][picture of cats] size = 5
// // // capacity = 5
// // // is fixed
// // // ["null"]["null"]["null"]["null"]["null"]["null"] size = 0
// // // capacity = 10
// // // public class DynamicArray {
// // // int size;
// // // public void add(Object data){
// // //
// // //}
// // // public void insert(i)
// // //}
// // // LinkedList   and ArrayList //
// // // long startTime
// // // long endTime
// // // long elapsedTime
// // // for(int i = 0;i < 10000; i++)
// // // linkedList.add(i)
// // // arrayList.add(i)
// // //}
// // // System.out
// // //
// // // Big 0 notation //
// // //1 . DESCRIBES the performance of an algorithm as the amount of data increases
// // // 2 . Machine independent (# of steps to completion)
// // // 3. Ignore smaller operations 0 (n +1) -> 0(n)
// // // 0(n) linear time
// // //
// // // TODO:
// // // Linear search //
// // // Iterate through a collection one elemenet at a time
// // // int [] array = {9,1,8,2,7,3,6,4,5};
// // // int index = linearSearch(array,1)
// // // FIXME:
// // // TODO:
// // // Binary Search /
// // // search algorithm that finds the position of a target value within a sorted array .
// // // haif of the array is eliminated during each "step"
// // //example //
// // function binarySearch(arr, target) {
// //   let left = 0;
// //   let right = arr.length - 1;

// //   while (left <= right) {
// //     let mid = Math.floor((left + right) / 2);

// //     if (arr[mid] === target) {
// //       return mid;
// //     } else if (arr[mid] < target) {
// //       left = mid + 1;
// //     } else {
// //       right = mid - 1;
// //     }
// //   }
// //   return -1;
// // }
// // console.log(binarySearch([10, 20, 30, 40, 50], 40));
// // // FIXME:

// // // TODO:
// // // Interpolation search = improvement over binary seach best used for "uniformly" distributed data "guesses" where a value might be based on calculated probe results if probe is incorrect, search area is narrowed , and a new probe is calculated
// // // average case : 0(log(log(n)))
// // // worst case : 0(n) [values increase exponentially]
// // //
// // function InterpolationSearch(arr, target) {
// //   let low = 0;
// //   let high = arr.length - 1;

// //   while (low <= high && target >= arr[low] && target <= arr[high]) {
// //     let pos =
// //       low +
// //       Math.floor(((target - arr[low]) * (high - low)) / (arr[high] - arr[low]));
// //     if (arr[pos] === target) {
// //       return pos;
// //     }
// //     if (arr[pos] < target) {
// //       low = pos + 1;
// //     } else {
// //       high = pos - 1;
// //     }
// //   }
// //   return -1;
// // }
// // console.log(InterpolationSearch([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 70));
// // // FIXME:

// // // TODO: Bubble Sort  //
// // function bubbleSort(arr) {
// //   let n = arr.length;

// //   for (let i = 0; i < n; i++) {
// //     for (let j = 0; j < n; j++) {
// //       if (arr[j] > arr[j + 1]) {
// //         //swap
// //         let temp = arr[j];
// //         arr[j] = arr[j + 1];
// //         arr[j + 1] = temp;
// //       }
// //     }
// //   }

// //   return arr;
// // }

// // console.log(bubbleSort([5, 3, 8, 4]));
// // // FIXME:
// // //
// // // Section Sort
// // function selectionSort(arr) {
// //   let n = arr.length;
// //   for(let i = 0;i<n - 1; i++) {
// //     let minIndex = i;
// //     for(let j = i + 1; j < n; j ++) {
// //       if(arr[i] < arr[minIndex] ) {
// //         minIndex = j
// //       }
// //     }
// //     let temp = arr[i];
// //     arr[i] = arr[minIndex];
// //     arr[minIndex] = temp
// //   }
// //   return arr;
// // }

// // console.log(selectionSort([5,3.8,4]));

// // // what is the algorithm TODO:
// // // An algorithm is a set of welldefined instruction to solve a particular problem
// // // eg: make noodles
// // //  Well defined inputs and output
// // // Language independent
// // // Each step should be clear and unabigous
// // // Algorithm  analysis
// // // // Time complexity - Amount of time taken by an algorithm to run ,as a function input size
// // // space complexity = Amount of memory taken by an algorithm to run , as a function of input size
// // // Asymptotic notation //
// // // Mathematical  tools to represent time and space complexity //
// //  // Big -O Notation (0-notation) -Worst case complexity
// //  // Omega Notaion ( notation) - Best case complexity
// //  // Theta Notation ( notaion) - Average case complexity FIXME:

// //  // TODO: Big O-Notation //
// //  // The worst case complexity of an algorithm is represented using  the Big-O notation
// //  // Big- O describe the complexity of an algorithm using algorithm using  algebraic terms
// //  // it has two important charcteristics
// //  // it is expressed in terms of the input
// //  // it focus on the bigger picture without getting caught up in the minute details

// //  // it focusess on the bigger picture without getting caught up in the minutes
// //  // n + 2
// //  // The  size of input increases the time is always increases //
// //   // Time Complexity is 0(n)= Linear
// //   // const n = 4
// //   // const sum = [1,2,3,4]
// //   // function summaton(n) {
// //   //   let sum = 0;
// //   //   for(let i= 1; i<= n; i++)
// //   //     sum += i;
// //   // }
// //   // console.log(sum)

// //   // return sum;
// //   // Time Complexity
// //    //Big-O Calculation
// //   //  for(let i= 1; i<= n; i++){ \\  0(n2)-Quadratic
// //   //\\ 3n2+ 5n + 1 //\\
// //   //   for(let j=1;j<=i; j++)
// //   //  }

// //   // TODO:
// //   // Object -Big 0
// //   // An object is a collection of key value pairs
// //   // An array is an ordered collection of  values
// //   // insert / remove at end - 0(1)
// //   // insert / remove at begginning
// //   // Math Algorithm TODO:
// //   // FIBONACCI SEQUENCE
// //   // Factorial of a number
// //   // Prime number
// //   // Recursion
// //   // FIXME:
// //   //  TODO: //
// //  function fibonacci(n){
// //   const fib = [0,1]
// //   for(let i = 2; i< n; i++){
// //     fib[i] = fib[i-1] + fib[i - 2]
// //   }
// //   return fib
// //  }
// //   console.log(fibonacci(12));
// //   // Big 0 = 0(n) \\ FIXME:

// //   // TODO: FACTORIAL of a number //
// //   // In mathematics, the factorical of a non-negative integer 'n', denoted n!, is the product of all positive integers less than or equal to 'n'
// //    // Factorial of Zero is 1 //
// //   // factorial(4) = 4 * 3 *2 * 1 = 24
// //   // factorial(5) = 5*4*3*2*1 = 120
// //   //
// //   function factorial(n){
// //     let result = 1
// //     for(let i = 2;i<= n; i++ ){
// //       result = result * i
// //     }
// //     return result

// //   }
// //   console.log(factorial(0)); // 1
// //   console.log(factorial(1)); // 1
// //   console.log(factorial(5)); // 120
// //   console.log(factorial(10)); //
// //   // Big-o = 0(n)
// //   // FIXME:

// //   //  TODO: PRIME Number//
// //   // A prime number is a natural number greater than 1 that is not a  product  of two smaller natural numbers. //
// //   // isPrime(5) = true(1*5 or 5*1)
// // // isPrime(4) = false (1*4 or 4*1 or 2*2)

// // function isPrime(n){
// //   if(n < 2){
// //     return false
// //   }
// //   for(let i = 2;i<n;i++){
// //     if(n % i === 0){
// //       return false
// //     }
// //   }
// //   return true
// // }
// // console.log(isPrime(1));
// // console.log(isPrime(2));
// // console.log(isPrime(9));
// // console.log(isPrime(15));
// // // Big -O = o(n)

// // // Another Way //
// // function prime(n){
// //   if(n < 2){
// //     return false
// //   }
// //   for(let i=2;i<=Math.sqrt(n);i++){
// //     if(n % i === 0){
// //       return false
// //     }
// //   }
// //   return true
// // }
// // console.log(prime(8));
// // console.log(prime(4));
// // console.log(prime(12));
// // console.log(prime(17));
// // // FIXME:
// // // TODO: Power of Two //
// // // AN integer is a power  of two if there exists an integer 'x' such that 'n' === 2x
// // // isPowerofTwo(1)= true (2)
// // // isPowerofTwo(2) = true(2)
// // function powerofTwo(n){
// //   if(n<1){
// //     return false
// //   }
// //   while( n > 1){
// //     if(n % 2 !== 0) {
// //       return false
// //     }
// //     n = n / 2
// //   }
// //   return true

// // }
// // console.log(powerofTwo(1)); // true
// // console.log(powerofTwo(2)); // true
// // console.log(powerofTwo(5)); // false
// // console.log(powerofTwo(8)); //true
// // // Big O notation \\

// // // BitWise Operaator \\ // TODO:
// // function powerOfTwoBitWise(n){
// //   if(n<1) {
// //     return false
// //   }
// //   return (n & (n - 1)) === 0
// // }
// // // FIXME:
// // // RECURSION //TODO:
// // // every recurion solution needs to  have a base case- a condition to terminate the recursion
// // // Recursion might simplify solving a problem but it does not always translate to a transfer solution , A recursive solution may be far worse compared to an itertive solution
// // // REcursive Fibonacci sequence \\
// // // in febonnacisequence the base case is f0 = 0 and f1 = 1 \\
// // function recursiveFibonacci(n){
// //   if(n < 2){
// //     return n
// //   }
// //   return recursiveFibonacci(n-1) + recursiveFibonacci(n -2)
// // }
// // console.log(recursiveFibonacci(0));
// // console.log(recursiveFibonacci(1));
// // console.log(recursiveFibonacci(6));
// // console.log(recursiveFibonacci(7));
// // //

// // // TODO: Recursive Factorial of a number //
// // function recursiveFactorial(n) {
// //   if(n === 0) {
// //     return 1
// //   }
// //   return n * recursiveFactorial(n - 1)
// // }
// // console.log(recursiveFactorial(0));
// // console.log(recursiveFactorial(1));
// // console.log(recursiveFactorial(8));
// // console.log(recursiveFactorial(4));
// // // Big-0 = O(n)
// // // FIXME:
// // // LINEAR SEARCH TODO:
// // // arr =[-5,2,10,4,6] t= 10 -> should return 2
// // // Linear search pseudocode //
// //  //1. start at the first element in the array and move towards the last
// //  //2. At each element though, check if the element is equal to the target element
// //  //3. if element found,return the index of the element
// //  //4. if element not found, return -1

// //  function linearSearch(arr,target) {
// //   for(let i = 0; i< arr.length;i++) {
// //     if(arr[i]=== target) {
// //       return i
// //     }
// //   }
// //   return -1

// //  }
// //  console.log(linearSearch([-5,2,10,4,6],10),); // 2
// //  console.log(linearSearch([-5,2,10,4,6],6),); // 4
// //  console.log(linearSearch([-5,2,10,4,6],20),); // -1
// //  // BIG -O Guide
// //  // Calculate not dependent on input size -O(1)
// //  // 1 loop - O(n)
// //  // 2 nested loops - O(n^2)
// //  //input size reduced by half- O(logn)
// // // There for this is Big-O =O(n) //
// //  // FIXME:
// //  // Binary Search // TODO:
// //  // in problem we write pseudocode
// //  // if the array is empty,return -1 as the elemenet cannot be found
// //  // if the array has elements,find the middle element in the array. if target is equal to the middle element, return the middle element index
// //  // if target is less than the middle element, binary search left haif of the array
// //  // if target is greater than middle element, binary search right haif off the array

// //  function binarySearch(arr,target){
// //   let leftIndex = 0
// //   let rightIndex = arr.length - 1

// //   while(leftIndex <= rightIndex) {
// //     let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
// //     if(target === arr[middleIndex]){
// //       return middleIndex
// //     }
// //     if(target < arr[middleIndex]){
// //       rightIndex = middleIndex - 1
// //     } else{
// //       leftIndex = middleIndex + 1
// //     }
// //   }
// //   return -1
// // }
// // console.log(binarySearch([-5,2,4,6,10],10));
// // console.log(binarySearch([-5,2,4,6,10],6));
// // console.log(binarySearch([-5,2,4,6,10],20));
// // // Big O-notaion = O(logn)
// // // FIXME: \\
// // // TODO: RECURSIVE SOLUTION
// // // arr = [-5,2.4,6,10], t = 10 -> should return 4
// // function recursiveBinarySearch(arr,target){
// //   return search(arr,target,0,arr.length - 1)
// // }
// // function search(arr,target,leftIndex,rightIndex){
// //   if(leftIndex > rightIndex) {
// //     return -1
// //   }
// //   let middleIndex = Math.floor((leftIndex + rightIndex ) / 2)
// //   if(target  === arr[middleIndex]) {
// //     return middleIndex
// //   }

// //   if(target < arr[middleIndex]){
// //     search(arr,target,leftIndex, middleIndex - 1)
// //   }else {
// //     search(arr,target,middleIndex + 1 ,rightIndex)
// //   }
// // }

// // console.log(recursiveBinarySearch([-5,2,4,6,10],10))
// // console.log(recursiveBinarySearch([-5,2,4,6,10],6))
// // console.log(recursiveBinarySearch([-5,2,4,6,10],20))
// // // FIXME:

// // // Sorting algorithm // TODO:
// // // FOUR DIFFERENT ALGORITHAM /
// // // bUBBLE SORT
// // // INSERTION SORT
// // // QUICK SORT
// // // MERGE SORT
// // // BUBBLE SORT //
// // //eg: given an array integers,sort the array
// // // const arr = [-6,20,8,-2,4]
// // // bubbleSort(arr) => should retuns [-6,-2,4,8,20]
// // // const araa = [-6,10,8,1,3]
// // // const bubblesort = bubbleSort(araa)
// // // console.log(bubblesort);
// // // function bubbleeSort(arr){
// // //   let swapped
// // //   do {
// // //     swapped = false
// // //   for(let i = 0;i< arr.length - 1; i++){
// // //     if(arr[i] > arr[i + 1]){
// // //       let temp = arr[i]
// // //       arr[i] = arr[i + 1]
// // //       arr[i + 1] = temp
// // //       swapped = true
// // //     }
// // //   }
// // //   }while(swapped)
// // // }

// // // const arr = [8,20,-2,4,-6]
// // // bubbleeSort(arr);
// // // console.log(arr);
// // // FIXME:
// // // INSERTION SORT // TODO:
// // // Virtully split the array into  sorted and an unsorted part
// // // Assume that the first element is already sorted and remaining elements are unsorted
// // // select an unsorted element and compare with all element in sorted part
// // // if the elemenents in the sorted part is smaller than the selected elemeents proceed to the next elemenet in the unsorted part, else ,shift larger elements in the sorted part towards the roght
// // // insert the selected element at the right index
// // // Repeat till all the unsorted elemeents are placed in the right order
// // //  function insertionSort(arry){
// // //   for(let i =0;i<arry.length - 1; i++){
// // //     let numberToinsert = arry[i];
// // //     let j = i - 1
// // //     while(j >= 0 && arr[j] > numberToinsert){
// // //       arry[j + 1] = arry[j]
// // //       j = j - 1
// // //     }
// // //     arry[j + 1] = numberToinsert
// // //   }

// // //  }
// // // const arry = [8,20,-2,4,-6]
// // // insertionSort(arry)
// // // console.log(arry);

// // // function insertionSort(arry){
// // //   for(let i = 1;i<arry.length;i++){
// // //     let numberTosort = arry[i]
// // //     let j = i - 1
// // //     while(j >= 0 && arry[j] > numberTosort){
// // //       arry[j + 1] = arry[j]
// // //       j = j - 1
// // //     }
// // //     arry[j + 1] = numberTosort
// // //   }
// // // }
// // // const arry = [8,20,-6,1,10]
// // // insertionSort(arry)
// // // console.log(arry);
// // // big O -NOTATION  = O(n^2)

// // // FIXME:
// // // QUICK SORT TODO: //
// // // const arr = [-6 , 20, 8, -2 , 4]
// // // quickSort(arr) => should return [-6,-2,4,8,20]
// // //  eg : -6,20,8,-2,4 adgsdfgsfdg sdfgsdfgsdfgsdfgsdfgsdfgsdfg sdfgsdfgsfdgsdfgsdfgsdfgsdfg sdfgsdfgsdfgsdfggsdfg sdfgsdfgsdfg kjjkjhkjhkjhjhbj
// // // Quick sort
// // //  function quickSort(arr){
// // //   if(arr.length < 2) {
// // //     return arr
// // //   }
// // //   let piviot = arr[arr.length - 1]
// // //   let left = []
// // //   let right = []
// // //   for(let i = 0; i< arr.length - 1;i++){
// // //     if (arr[i] < piviot){
// // //       left.push(arr[i])
// // //     } else {
// // //       right.push(arr[i])
// // //     }

// // //   }
// // //    return [...quickSort(left), piviot, ...quickSort(right)]
// // //  }
// // // function quickSort(arr){
// // //   if(arr.length < 2){
// // //     return arr
// // //   }
// // //   let piviot = arr[arr.length - 1]
// // //   let left = []
// // //   let right = []
// // //   for(let i = 0;i< arr.length -1; i++){
// // //     if(arr[i] < piviot){
// // //       left.push(arr[i])
// // //     }else {
// // //       right.push(arr[i])
// // //     }
// // //   }
// // //   return [...quickSort(left),piviot,...quickSort(right)]
// // // }

// // // const arr = [8,20,-2,4,6]
// // // console.log(quickSort(arr));
// // // Worst case - O(n^2)
// // // Avg case - O(nlogn)
// // // FIXME:
// // // Merge Sort // TODO:
// // // Divided the array into sub array, each contain only one element(An array with one element is considered sorted)
// // // Repeatedly merge the sub arrays to produce new sorted sub array until there is only one sub array remaining. That will be the sorted array.
// // // function mergeSort(arr){
// // //   if(arr.length < 2){
// // //     return arr
// // //   }
// // //   const mid = Math.floor(arr.length / 2)
// // //   const leftArr = arr.slice(0,mid)
// // //   const rightArr = arr.slice(mid)
// // //   return merge(mergeSort(leftArr),mergeSort(rightArr))
// // // }
// // // function merge(leftArr,rightArr) {
// // //   const sortedArr = []
// // //   while(leftArr.length && rightArr.length) {
// // //     if(leftArr[0] <= rightArr[0]) {
// // //       sortedArr.push(leftArr.shift())
// // //     }else {
// // //       sortedArr.push(rightArr.shift())
// // //     }
// // //   }
// // //    return [...sortedArr,...leftArr,...rightArr]
// // // }
// // // const arr = [8,20,-2,4,-6]
// // // console.log(mergeSort(arr));
// // // FIXME:

// // // Misc. Problems // TODO:
// // // CARTESIAN PRODUCT
// // // CLIMBING STAIRCASE
// // // TOWER OF HANOI
// // // Cartesian products of Two sets //
// // function cartesianProduct(arr1,arr2)  {
// //   const result = []
// //   for(let i=0;i<arr1.length;i++){
// //     for(let j =0;j<arr2.length; j++){
// //       result.push([arr1[i],arr2[j]])
// //     }
// //   }

// //   return result
// // }
// // const arr1 = [1,2]
// // const arr2 = [3,4,5]
// // console.log(cartesianProduct(arr1,arr2)); // [1,3],[1,4],[1,5] [2,3][2,4][2,5]
// // // Big O = O(mn)
// // // Prime Number TODO:
// // const arri = [1,2,8,6,4,9,13]
// // function primeNumber(n){
// //   if(n < 2){
// //     return false
// //   }
// //   for(let i =2;i<n;i++){
// //     if(n % i=== 0){
// //       return false
// //     }
// //   }
// //   return true
// // }
// // for (let i = 0;i < arri.length;i++){
// //   if(primeNumber(arri[i]) ){
// //     console.log(arri[i], "is prime");

// //   }
// // }
// // console.log(primeNumber(1));
// // //
// // function mergeSort(none){
// //   if(none.length < 2 ){
// //     return none
// //   }
// //   const mid = Math.floor(none.length / 2)
// //     const noneLeft = none.slice(0,mid)
// //     const noeRight = none.slice(mid)
// //   return merge(mergeSort(noneLeft),mergeSort(noeRight))
// // }
// //   function merge(noneLeft,noneRight){
// //     const sortedArr = []

// //       while(noneLeft.length && noneRight.length){
// //         if(noneLeft[0] <= noneRight[0]){
// //           sortedArr.push(noneLeft.shift())
// //         }else{
// //       sortedArr.push(noneRight.shift())
// //     }
// //     return [...sortedArr,...noneLeft,...noneRight]
// //   }
// // }
// // const none = [1,7,4,5,10,2]
// // console.log(mergeSort(none));

// // // Climbing staircase idea // TODO:
// // function climbingStaircase(n) {
// //   const noOfWays = [1,2]
// //   for(let i = 2; i<n;i++){
// //     noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2]
// //   }

// //   return noOfWays[n - 1]
// // }
// // console.log(climbingStaircase(1));
// // console.log(climbingStaircase(2));
// // console.log(climbingStaircase(3));
// // console.log(climbingStaircase(4));
// // console.log(climbingStaircase(5));
// // // the one loop is there for the time complisity
// // // Big-O = 0(n) FIXME:
// // // Tower of Hanoi \\ TODO:
// // function towerOfHanoi(n,fromRod,toRod,usingRod){
// //   if(n === 1) {
// //     console.log(`Move disk 1 from ${fromRod} to ${toRod} `);
// //     return
// //   }
// //   towerOfHanoi(n-1, fromRod,usingRod,toRod)
// //   console.log(`Move  disk ${n} from ${fromRod} to ${toRod}`);
// //   towerOfHanoi(n - 1, usingRod, toRod ,fromRod)
// // }
// // towerOfHanoi(3,'A','C','B');
// // //FIXME: \\
// // // TODO:
// // // WHAT IS DATASTRUCTURE
// // // data structure is a store data and keep in correctily strucerly
// // // Bulit in data structure
// // // 1.arrays
// // // 2. object
// // // 3. Sets
// // // 4. Maps
// // // Customs data strucure
// // // 1. Stucks
// // // 2. Queues
// // // 3. Circular queues
// // // 4. Linked LIst
// // // 5. Hash tables
// // // 6. Trees
// // // 7. Graphs
// // // Javasript algorithms
// // //TODO:ARRAY
// // //AN array is a datastructur that can hold a coollection of values
// // // Arrays can contains a mix of different data types .you can store strings ,booleans, numbers , or even objects all in the same array
// // // Array are resizable , you don't have to declare the size of an array before creating it .
// // // javasript arrays are zero-indexed and the insertion order is maintained
// // // Arrays are iterables  they can be used with a loop

// // const arr = [1,2,3,"Ajay"]
// // arr.push(4)
// // arr.unshift(0)
// // arr.pop()
// // arr.shift()
// // for(const item of arr){
// //   console.log(item);

// // }
// // // map ,filter ,reduce ,concat, slice and splice //
// // //  Array Big-o TIME complexity
// // // Insert / remove from end - 0(1)
// // // Insert / remove from beginning - 0(n)
// // // Access -O(1)
// // // Search - O(n)
// // // Push / pop - O(1)
// // // Shift / unshift / concat / slice / splice - O(n)
// // // forEach / map / filter / reduce - O(n)
// // // FIXME:

// // // OBJECT TODO:
// // // An object is an unordered collection of key-value pairs, The key must either be a string or sybols data type where as the value can be any data type
// // const obj = {
// //   name: 'Brain',
// //   age: 18,
// //   sayMyName: function(){
// //    console.log(this.name);

// // }

// // }
// // obj.hobby = "football"
// // console.log(obj.name);
// // console.log(obj['age']);
// // console.log(obj);
// // obj.sayMyName();
// // // oBJECT - Big-O time complexity
// // // insert - O(1)
// // // Remove - O(1)
// // // Access - O(1)
// // // Search - O(n)
// // // Object.keys()

// // //TODO: Set \\
// // // A set is a data structure that can  hold a collection of values .The values however must be unique
// // // Set can contain a  mix of different data types you can store strings,booleas numbers or even object all in the same set
// // // Sets are dynamically sized you don't have to declare the size of a set before creating it
// // // Sets do not maintain an sonset=rtion order
// // // sets are iterbles They can be used with a for of loop

// // const set = new Set([1,2,3])
// // set.add(4)
// // console.log(set.has(4));
// // set.delete(3)
// // console.log(set.size);
// // set.clear()

// // for(const item of set){
// //   console.log(item);

// // }
// // //FIXME:

// // //MAP TODO:
// // //A map is an unordered collection of key-value pairs Both keys and values can be of any data type
// // // To retrieve a value , you can use the corresponding key
// // // Maps are iterables they can be used for loop

// // // Objects vs Map
// // // Object  are  unorderd  whwers maps are ordered
// // // Keys in object can only be string or sybmol type whereas in maps they can be of any type
// // // An object has a prototype and may contain a few default keys which may collid with your owwn keys if youre  not careful

// // const map = new Map([['a',1],['b',2]])
// // map.set('c',3)
// // map.delete('c')
// // console.log(map.has("a"));

// // for(const [key,value] of map) {
// //   console.log(`${key}:${value}`);
// // }
// // // FIXME:

// // // STACK  LIFO TODO:
// // // The stack data structure is a sequencial colletion of elements that follows the principle of LAST IN FIRST OUT (LIFO)
// // // The last element inserted into the stack is first element to be removed
// // // eg: A stack of plates .The last plate placed on top of the stack is also in the plate removed from the stack
// // // Stack is an absract data type it is defined by its behavior rather than that  begin a mathematical model
// // // The Stack data structure supports two main operations
// // //  Push ,which adds an element to the collection
// // // Pop,which removes the most recently added elemeent from the collection
// // // usage
// // // Browser history tracking
// // // Undo operation when typing
// // // Expression conversions
// // // Call stack in javaScript runtime
// // // FIXME:
// // //QUEUE TODO:
// // // The queue data structure is a sequencial collection of elements that follows the principle of First IN First Out (FIFO)
// // // The first element inserted into the queue is first element to be removed
// // // A QUEUE OF PEOPLE , people enter the queue at one end (rear/tail) and leave the queue from the other end (front /head)
// // // The Queue is an abstract data type it is defined by its behavior rather than being a mathematical model
// // // The queue data structure supports two main operation
// // // ENQUEUE ,which adds an elemenets to the rear/tail of the collection
// // // Dequeue ,which removes an elements from the front/head of the collection
// // // usage of Queue  //
// // // printer
// // // CPU task scheduling
// // // Callback queue in javaScript runtime
// // // FIXME:
// // // Queue Implemention \\
// // //  Enqueue - add an element to the queue
// // // dequeue() - remove the oldest element from the queue
// // // peek() - get the value of the element at the front of the queue without removing it
// // // isEmpty() - check if the queue is empty
// // // size() - get the number of elements in the queue
// // // print() - visualize the elements in the queue
// // class Queue {
// //   constructor(){
// //     this.items = []
// //   }

// //   enqueue(element) {
// //     this.items.push(element)
// //   }
// //   dequeue(){
// //    return this.items.shift()
// //   }
// //   isEmpty(){
// //     return this.items.length === 0
// //   }
// //   peek(){
// //     if(!this.isEmpty()){
// //       return this.items[0]
// //     }
// //     return null
// //   }
// //   size() {
// //     return this.items.length
// //   }
// //   print(){
// //     console.log(this.items.toString());
// //   }

// // }
// // const queue = new Queue()
// // console.log(queue.isEmpty());
// // queue.enqueue(10)
// // queue.enqueue(20)
// // queue.enqueue(30)
// // console.log(queue.size());
// // queue.print()

// // // console.log(queue.dequeue());
// // console.log(queue.peek());

// // //
// // class Queues {
// //   constructor(){
// //     this.items = {}
// //     this.rear = 0
// //     this.front = 0
// //   }

// //   enqueue(element) {
// //     this.items[this.rear] = element
// //     this.rear++
// //   }

// //   dequeue(){
// //     const item = this.items[this.front]
// //     delete this.items[this.front]
// //     this.front++
// //     return item
// //   }

// //   isEmpty() {
// //     return this.rear - this.front === 0
// //   }
// //   peek() {
// //     return this.items[this.front]
// //   }

// //   size() {
// //     return this.rear - this.front
// //   }

// //   print() {
// //     console.log(this.items);

// //   }
// // }

// // const queues = new Queue()
// // console.log(queues.isEmpty());

// // queues.enqueue(10)
// // queues.enqueue(20)
// // queues.enqueue(30)
// // console.log(queues.size());
// // queues.print()

// // console.log(queues.dequeue());
// // console.log(queues.peek());
// // // FIXME:
// //  // CIRCULAR QUEUE TODO: \\
// //  // The size of the queue is fixed and a single block of memory is used as if the first element is connected  to the last element
// //  // Also referred to as circular buffer or ring buffer and follows the FIFO principle
// //  // A circular queue will reuse the empty block created during the dequeue operation
// // // when working with queues of fixed maximum size, a circular queue is a great implementaion choice
// // // The circular Queue data structure supports two main operation
// // // ENQUEUE ,WHICH ADDS AN ELEMENTS TO THE REAR/ TAIL OF THE COLLECTION
// // // DEQUEUE, WHICH RERMOVES AN ELEMENETS FROM THE FRONT/HEAD OF THE COLLECTION
// // //EG : CLOCK
// // // STREAMING DATA
// // // TRAFFIC LIGHT
// //  class CircularQueue {
// //    constructor(capacity) {
// //     this.items = new Array(capacity)
// //     this.capacity = capacity
// //     this.currentLength = 0
// //     this.rear = -1;
// //     this.front = -1;
// //    }

// //    isFull(){
// //     return this.currentLength === this.capacity
// //    }

// //    isEmpty(){
// //     return this.currentLength === 0
// //    }

// //    enqueue(element) {
// //     if(!this.isFull()) {
// //       this.rear = this.rear + 1
// //       this.items[this.rear] = element
// //       this.currentLength += 1
// //       if(this.front === -1) {
// //         this.front = this.rear
// //       }

// //     }
// //    }
// //    dequeue(){
// //     if(this.isEmpty()) {
// //       return null
// //     }
// //     const item = this.items[this.front]
// //       this.items[this.front] = null
// //       this.front = this.front + 1
// //       this.currentLength -= 1
// //       if(this.isEmpty()){
// //         this.front = -1
// //         this.rear = -1
// //       }
// //       return item
// //    }

// //    peek() {
// //     if(!this.isEmpty()) {
// //       return this.items[this.front]
// //     }
// //     return null
// //    }
// //    print() {
// //     if(this.isEmpty()) {
// //       console.log('Queue is empty')
// //     } else {
// //       let i
// //       let str = ''
// //       for(i = this.front; i !== this.rear; i = (i+ 1) % this.capacity) {
// //         str += this.items[i] + " "
// //       }
// //       str += this.items[i]
// //       console.log(str);
// //     }
// //    }
// //  }

// //  const queuer= new CircularQueue(5)
// //  console.log(queuer.isEmpty());

// //  queuer.enqueue(10)
// //  queuer.enqueue(20)
// //  queuer.enqueue(30)
// //  queuer.enqueue(40)
// //  queuer.enqueue(50)

// //  console.log(queuer.isFull());
// //  queuer.print()
// //  console.log(queuer.dequeue());
// //  console.log(queuer.peek());
// //  queuer.print()
// //  queuer.enqueue(60)
// // queuer.print()

// //  // "enqueue()" checks. space, moves "rear", insert the element,updates length, and sets "front" for the first item

// //  // FIXME:
// //  // LINKED list \\ TODO:
// // // A linked list is a linear data structure that includes a series of connected nodes
// // // Each node consists of a data value and a pointer that to the next nodes
// // // The list elements can be easly inserted or removed without reallocation or reoraganization of the entrie structure
// // //  Random access of element is not feasible and accesing an element has linear time  complexity

// // // The linked list data structure supports three main operations
// // // insertion - To add an element at the beginning , end or at a given index in the list
// // // Deletion - To remove an item given its index or valuee
// // // Search - To find an element given its value

// // // Linked List Usage //
// // // All application of both stack and queue are application of liked lists
// // // eg:  image viewer
// // // 10 => value => next => null
// // //
// class Node {
//   constructor(value) {
//     this.value = value
//     this.next = null
//   }
// }

// class LinkedList {
//   constructor(){
//     this.head = null
//     this.size = 0
//   }

//   isEmpty() {
//     return this.size === 0
//   }

//   getSize() {
//     return this.size
//   }
//   // 0(1)
//   prepend(value) {
//     const node = new Node(value)
//     if(this.isEmpty()) {
//       this.head = node
//     } else {
//       node.next = this.head
//       this.head = node
//     }
//     this.size++
//   }

//   // 0(n)
//   append(value) {
//     const node = new Node(value)
//     if(this.isEmpty()) {
//       this.head = node
//     } else {
//       let prev = this.head
//       while(prev.next) {
//         prev = prev.next
//       }
//       prev.next = node
//     }
//     this.size++
//   }

//   insert(value, index) {
//     if(index < 0 || index > this.size) {
//       return
//     }
//     if(index === 0) {
//       this.prepend(value)
//     } else {
//       const node = new Node(value)
//       let prev = this.head
//       for(let i = 0; i<index - 1;i++) {
//         prev = prev.next
//       }
//       node.next = prev.next
//       prev.next = node
//       this.size++
//     }
//   }

//   removeFrom(index) {
//     if( index < 0 || index >= this.size ) {
//       return null
//     }
//     let removedNode
//     if(index === 0) {
//       removedNode = this.head
//       this.head = this.head.next
//     } else {
//       let prev = this.head
//       for(let i = 0; i < index - 1; i++) {
//         prev = prev.next
//       }
//       removedNode = prev.next
//       prev.next = removedNode.next
//     }
//     this.size--
//     return removedNode.value

//   }

//   removeValue(value){
//     if(this.isEmpty()) {
//       return null
//     }
//     if(this.head.value === value) {
//       this.head = this.head.next
//       this.size--
//       return value
//     } else {
//       let prev = this.head
//       while(prev.next && prev.next.value !== value) {
//         prev = prev.next
//       }
//       if(prev.next) {
//       let removedNode = prev.next
//         prev.next = removedNode.next
//         this.size--
//         return value
//       }
//       return null
//     }

//   }

//   search(value) {
//     if(this.isEmpty()){
//       return -1
//     }
//     let i=0
//     let curr = this.head
//     while(curr) {
//       if(curr.value === value) {
//         return i
//       }
//       curr = curr.next
//       i++
//     }
//     return -1
//   }

//   reverse() {
//     let prev = null
//     let curr = this.head
//     while(curr) {
//       let next = curr.next
//       curr.next = prev
//       prev = curr
//       curr = next
//     }
//     this.head = prev
//   }

//   print(){
//     if(this.isEmpty()) {
//       console.log('List is Empty');
//     } else {
//       let curr = this.head
//       let listValue = ` `
//       while(curr) {
//         listValue += `${curr.value} `
//         curr = curr.next
//       }
//       console.log(listValue);

//     }
//   }
// }
// const list = new LinkedList()
// console.log('List is empty?', list.isEmpty());
// console.log('List size', list.getSize());
// list.print()

// list.insert(30,0)
// list.print()

// list.insert(20,0)
// list.print()

// list.insert(10,1)
// list.print()

// list.insert(40,2)
// list.print()

// list.reverse()
// list.print()

// // list.append(10)
// // list.print()

// // list.append(20)
// // list.append(30)
// // list.prepend(12)
// // list.print()
//  // Linked List - Prepend (Empty list
//  // FIXME: \\
//  // Two Pointers //  TODO:
// // Move all Zeroes to the start \\
// // input - [1,5,3,0,2,0,6]
// // output - [0,0,1,5,3,2,6]
// const sarra = [1, 0, 5, 6, 0, 3, 0, 0];
// let j = 0;
// for (let i = 0; i < sarra.length; i++) {
//   if (sarra[i] !== 0) {
//     let temp = sarra[i];
//     sarra[i] = sarra[j];
//     sarra[j] = temp;

//     j++;
//   }
// }
// console.log(sarra);

// function palindrome(s) {
//   let left = 0;
//   let right = s.length - 1;
//   while (left < right) {
//     if (s[left] !== s[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }
//   return s;
// }

// console.log(palindrome("malayalams"));

// const arr = [0,2,5,0,4,0];
// let j = 0;
// for(let i = 0; i< arr.length;i++){
//   if(arr[i] !== 0) {
//     let temp = arr[i] 
//     arr[i] = arr[j]
//     arr[j] = temp;

//     j++
//   }
// }
// console.log(arr);

// // Pallindrome // 
// function pallindrome(s) {
//   left = 0;
//   right = s.length - 1
//   while(left < right){
//     if(s[left] !== s[right]){
//       return false
//     }else {
//       return true
//     }

//   }
  
// }

// console.log(pallindrome('MALAYALAM'))

// Two Pointers // TODO:
// Reverse the array without using extra space
// const arr = [1,2,3,4,5];
// let i = 0;
// let j= arr.length - 1
// while(i<j) {
//   let temp = arr[i]
//   arr[i] = arr[j]
//   arr[j] = temp

//   i++;
//   j--
// }
// console.log(arr);
// // FIXME:
// sort 
// const sarr = [1,5,8,9,7,2]
// console.log(sarr.sort((a,b) => b - a));
  // Move zeros to end TODO: \\ 
  // Move all zeros to the end \\ 
//   const arr = [0,5,6,0,3,0,0]
//  let j = 0;
//  for(let i=0; i<arr.length; i++) {
//   if(arr[i] == 0){
//     let temp = arr[i]
//     arr[i]= arr[j]
//     arr[j] = temp

//     j++
//   }
//  }
//  console.log(arr);

 // Second Method \\ 
 // Pointer gives in Two end of the sides \\ 
//  const arr = [0,5,6,0,3,0,0] 
//   let i=0
//   j = arr.length - 1 
// while(i < j) {
//   if(arr[i] == 0) {
//     let temp = arr[i]
//     arr[i] = arr[j] 
//     arr[j] = temp

//     j--
//   } else{
//     i++
//   }

// }
// console.log(arr);
// FIXME:

// Palindrome check  TODO:
// Check if a string is a palindrome // 
// Check if a string is a palindrome 

// const palindrome = 'madam'
// let left = 0;
// let right = palindrome.length - 1
// let isPalindrome = true
// while(left < right) {
//   if(palindrome[left] !== palindrome[right]){
//     isPalindrome = false

//   }
//   left++;
//   right--;

// }
// console.log(isPalindrome);

// Another Way // 
// function palindrom(s) {
//   let i = 0;
//   let j = s.length - 1
//   while(i < j ) {
//     if( s[i] !== s[j]){
//       return false
//     }
//     i++;
//     j--; 
//     return true
//   }
// } 
// console.log(palindrom("madams"));
 
// FIXME:
// Find if any two numbers sum of "target"  TODO:
// const arr = [1,2,3,4,5,6,7,8,9]
// const target = 10
// let i = 0;
// let j = arr.length - 1;
// while(i < j) {
//   let sum = arr[i] + arr[j]
//   if(sum === target) {
//     console.log(arr[i],arr[j]);
//     i++;
//     j++
//   }else if(sum < target) {
//     i++
//   } else{
//     j--
//   }
// }

//FIXME:
// REMOVE DUPLICATES FROM SORTED ARRAY 
// REMOVES duplicates in-place // TODO:
// const arr = [1,1,2,2,3,3,4] 
// let i  = 0;
// for(let j = 1;j<arr.length;j++) {
//   if(arr[i] !== arr[j]) {
//     i++
//     arr[i] = arr[j]
//   }
// }
// console.log(arr.slice(0,i +1));

// Two pointers in only used in increasing order sorted arry //  TODO:
// egt : input : nums = [1,1,2]
// output : 2, nums = [1,2,_]

// const nums = [1,1,2]
// let i = 0;
// for(let j = 1;j<nums.length;j++){
//   if(nums[i] !== nums[j]) {
//     i++;
//     nums[i] = nums[j]
//   }
// }
// console.log(i +1,nums); FIXME:

// PROBLEM 2 Remove dupicate TODO:
// input = nums = [0,0,1,1,1,2,2,3,3,4]
// outPut = 5, nums = [0,1,2,3,4,_,_,_,_,_]

// const nums = [0,0,1,1,2,2,3,3,4] 
// let i = 0;
// for(let j = 1; j < nums.length; j++) {
//   if(nums[i] !== nums[j]){
//     i++
//     nums[i] = nums[j]
//   }
// }
// console.log( nums.slice(0,i + 1));
// console.log(i+1); FIXME:

//  PROBLEMS Remove Element \\  TODO:
// inpUT nums = [3,2,2,3] 
// output : 2, nums = [2,2,_,_]
// const nums = [3,2,2,3] 
// const val = 3;
// let i =0 ;
// for(let j = 0; j < nums.length; j++) {
//   if(nums[j] !== val) {
//     nums[i] = nums[j]
//     i++
//   }
// }
// console.log(i,nums);

// input : nums = [0,1,2,2,3,3,0,4,2] 
 // val = 2 
 // output = 5, nums = [0,1,4,0,3,_,_,_]
//  const  nums = [0,1,2,2,3,0,4,2]
//  const val = 2;
//  let i = 0
//  for(let j = 0; j < nums.length; j++) {
//   if(nums[j] !== val){
//     nums[i] = nums[j] 
//     i++
//   }

//  }
//  console.log(i); // FIXME: 
// TODO: PROBLEM PALLINDROME  Two pointer in two point 
//input : s = "A man, a plan, a canel: panama"
// output : true
// function isPalindrome(s){
// let left = 0;
// let right = s.length - 1;
// while(left < right){
//   // skip non-alphanumeric from left 
//   while(left < right && !isAlphaNumber(s[left])){
//     left++
//   }
// // skip non- alphanumeric from right 
// while(left < right && !isAlphaNumber(s[right])){
//    right--
// }
 
// // compare characters (case-insensitive) 
// if(s[left].toLowerCase() !== s[right].toLowerCase()) {
//   console.log(false);
//   return false;
// }
// left++
// right--
// }
// return(true);

// // helper function ||
// function isAlphaNumber(ch) {
//   return /^[a-z0-9]$/i.test(ch)
// }
// }

// console.log(isPalindrome("A man, a plan, a canal: panama"));

// next palidrome // 
// input s = "race a car"
// output = false  FIXME:

function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1
  while(left < right) {
    while(left < right && !isAlphaNumber(s[left])){
      left++
    }
    while(left < right && !isAlphaNumber(s[right])) {
      right--
    }
    if(s[left].toLowerCase() !== s[right].toLowerCase()){
      return false
    }
    left++
    right--
  }
  return true
}
function isAlphaNumber(ch) {
  return /^[a-z0-9]$/.test(ch)

}
console.log(isPalindrome("race a car"));





// || Normal Palindrome Question ||
//  function palindrom(s) {
//   let i = 0;
//   let j = s.length - 1
//   while(i < j){
//     if(s[i] !== s[j]) {
//       return false
//     }
//     i++; // move forward
//     j--; // move backward
//   }
//   return true
//  }
//  console.log(palindrom("Malayalam"));
  


 
 
 
 
 








