// Difficulty: Easy
// Problem: Reverse the elements of an array.
// Input: [1, 2, 3, 4]
// Output: [4, 3, 2, 1]
// Explanation: The array is reversed.
   
// var num=[1,2,3,4];
// let reversed=[];
// for(let i=num.length-1;i>=0;i--){
//     reversed.push(num[i])
// }
// console.log(reversed)

// 4. String: Count Vowels
// Difficulty: Easy
// Problem: Count the number of vowels in a string.
// Input: "hello"
// Output: 2
// Explanation: There are 2 vowels (e and o) in "hello."

// const input="chandana";
// function countVowels(str){
//     str=str.toLowerCase();
//     let count=0;
//     for(let i=0;i<=str.length-1;i++){
//         if(str[i]==='a' || str[i]==='e' || str[i]==='i' || str[i]==='o' || str[i]==='u' ){
//             count++
//         }
//     }
//     return count;
// }
// console.log(countVowels(input))

// // Difficulty: Easy  
// //    Problem: Move all zeroes in an array to the end while maintaining the relative order of other elements.  
// //    Input: [0, 1, 0, 3, 12]  
// //    Output: [1, 3, 12, 0, 0]  
// //    Explanation: The zeroes are moved to the end.


// function moveZerosEnd(arr){
//    let count=0;
//    result=[];
//    for(let i of arr){
//     if(i!==0){
//         result.push(i);
//     }else{
//         count++;
//     }
//    }
//    for(let i=0;i<count;i++){
//         result.push(0);
//    }
//    return result
// }
// console.log(moveZerosEnd([0, 1, 0, 3, 12] ));
// console.log(moveZerosEnd([3,8,0,2,6,0,0,4,12,3,0,45] ));

// //palindrome

// const str="cat";
// const isPalindromeOrNot=(str)=>{
//     let l=0;
//     let r=str.length-1;
//     while(l<=r){
//         if(str[l]===str[r]){
//         l++;
//         r--;
//     }else{
//         return false;
//     }
// }
//     return true
// }
// console.log(isPalindromeOrNot(str))


// 5 Test Cases for "Find Missing Number"
// Test Case 1:
// Input: [1, 2, 4, 5, 6]
// Expected Output: 3
// Explanation: The sum of numbers from 1 to 6 is 21. The sum of the array is 18, so the missing number is 3.
// 

