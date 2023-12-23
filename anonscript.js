//Print odd numbers in an array using anonymous function
const numbers = [8, 19, 5, 6, 14, 9, 13];
let oddAnanFunc = function(numbers){
    const oddNum = [];
    for(let i=0; i< numbers.length;i++){
        if(numbers[i]%2 ==1){
            oddNum.push(numbers[i]);
        }
    }
    return oddNum;
};
console.log("Odd Number - anonymous -- "+oddAnanFunc(numbers));
//Arrow Function
let arrowOddNum=[];
let oddNumArrFunc = () => {
    for(let i=0; i< numbers.length;i++){
        if(numbers[i]%2 ==1){
            arrowOddNum.push(numbers[i]);
        }
    }
    console.log("Odd Number - Arrow -- "+arrowOddNum);
}
oddNumArrFunc();
//IIFE Function
(function(){
    let iifeOddNum = [];
    for(let i=0; i< numbers.length;i++){
        if(numbers[i]%2 ==1){
            iifeOddNum.push(numbers[i]);
        }
    }
    console.log("Odd Number - IIFE -- "+iifeOddNum);
}
)();
//********************************************************************************************************//
//Convert all the strings to title caps in a string array
let stringArr = ["new","magic","word book"];
let titleUpper = function(){
    for(let i=0; i< stringArr.length;i++){
        let newArr = stringArr[i].split('');
        newArr[0] = newArr[0].toUpperCase();
        stringArr[i] = newArr.join('');
    }
    return stringArr;
};
console.log("Title caps - Anonymous -- "+titleUpper());
//Arrow Function
let titleUpperArrow = () =>{
    for(let i=0; i< stringArr.length;i++){
        let newArr = stringArr[i].split('');
        newArr[0] = newArr[0].toUpperCase();
        stringArr[i] = newArr.join('');
    }
    console.log("Title caps - Arrow -- "+stringArr);
}
titleUpperArrow();
//IIFE Function
(function(){
    for(let i=0; i< stringArr.length;i++){
        let newArr = stringArr[i].split('');
        newArr[0] = newArr[0].toUpperCase();
        stringArr[i] = newArr.join('');
    }
    console.log("Title caps - IIFE -- "+stringArr);
}
)();
//********************************************************************************************************//
//Sum of all numbers in an array
let numtoAdd = [23,45,65,53,67,89];
let sumResult = 0;
let sumofAll = function(){
    for(let i=0; i< numtoAdd.length;i++){
        sumResult = sumResult+numtoAdd[i];
    }
    return sumResult;
};
console.log("Sum of all numbers - Anonymous -- "+sumofAll());
//Arrow Function
let sumofAllArrow = () =>{
    sumResult=0;
    for(let i=0; i< numtoAdd.length;i++){
        sumResult = sumResult+numtoAdd[i];
    }
    console.log("Sum of all numbers - Arrow -- "+sumResult);
}
sumofAllArrow();
//IIFE Function
(function(){
    sumResult=0;
    for(let i=0; i< numtoAdd.length;i++){
        sumResult = sumResult+numtoAdd[i];
    }
    console.log("Sum of all numbers - IIFE -- "+sumResult);
}
)();
//********************************************************************************************************//
// Return all the prime numbers in an array
//let getNum = [8, 19, 5, 6, 14, 9, 13];
let getPrimeNum = function(getNum){
    let primeNum = [];
    for(let i=0; i< getNum.length;i++){
        let checkPrime = getNum[i];
        let count = 0;
        if(checkPrime >1){
            for(let j=2; j<=checkPrime;j++){
                if(checkPrime%j === 0){
                    count = count+1;
                }
            }

            if(count == 1){
                primeNum.push(checkPrime);
            }
        }
    }
    return primeNum;
};
console.log("Prime number in array - Anonymous -- "+getPrimeNum([8, 19, 5, 6, 14, 9, 13]));
//Arrow Function
//let getPrimeNumArrow = () =>{console.log("odd numbers IIFE "+getPrimeNum(oddAnanFunc([3,44,65,8,7])))}
let getPrimeNumArrow = (getNum) =>{
    let primeNumArrow = [];
    for(let i=0; i< getNum.length;i++){
        let checkPrime = getNum[i];
        let count = 0;
        if(checkPrime >1){
            for(let j=2; j<=checkPrime;j++){
                if(checkPrime%j === 0){
                    count = count+1;
                }
            }
            if(count == 1){
                primeNumArrow.push(checkPrime);
            }
        }
    }
    console.log("Prime number in array - Arrow -- "+primeNumArrow);
}
getPrimeNumArrow([8, 73, 5, 6, 14, 9, 13]);

//IIFE Function
(function(paramArray){
    primeNum=[];
    for(let i=0; i< paramArray.length;i++){
        let checkPrime = paramArray[i];
        let count = 0;
        if(checkPrime >1){
            for(let j=2; j<=checkPrime;j++){
                if(checkPrime%j === 0){
                    count = count+1;
                }
            }

            if(count == 1){
                primeNum.push(checkPrime);
            }
        }
    }
    console.log("Prime number in array - IIFE -- "+primeNum);
}
)([3,45,67,9,7]);
//********************************************************************************************************//
//Return all the palindromes in an array
function isPalindrome(geivenStr){
    let str = geivenStr.split('');
    let revStr = [];
    for(let j=(str.length)-1; j>=0;j--){
        revStr.push(str[j]);
    }
    if(str.join('')== revStr.join('')){
        return true;
    }
}
let allStr = ['dood', 'car', 'refer', 'level', 'cool'];
let getPalindrome = function(paramToPalindrom){
    let palindromes = [];
    for(let i=0; i< paramToPalindrom.length;i++){
        if(isPalindrome(paramToPalindrom[i]) == true)
        {
            palindromes.push(paramToPalindrom[i]);
        }
    }
    return palindromes;
};
console.log("Anonymous -- "+getPalindrome(allStr));
//Arrow Function
let getPalindromeArrow = (paramstr) =>{
    console.log("Arrow -- "+getPalindrome(paramstr));
}
getPalindromeArrow(['refer', 'level', 'cool']);
//IIFE Function
(function(paramIIFEStr){
    console.log("IIFE -- "+getPalindrome(paramIIFEStr));
})(['ada','noon','devil']);
//*************************************************************************//

//IIFE Function
//Return median of two sorted arrays of the same size.
//merge two array as one
//sort the whole array.
//get middle two number and find median of the array.
//1.two same size array.
let arr1 = [7,14,17,46,38];
let arr2 = [9,13,19,33,45];
//2.merge two array as one
let singleArray=[];
let getMerge = function(toMerge){
    for(let i=0; i < toMerge.length;i++){
        singleArray.push(toMerge[i]);
    }
};
//3.sorting a array, get middle number.
let getMedian = function(){
    if(arr1.length == arr2.length){
        getMerge(arr1);
        getMerge(arr2);
        //sort the whole array.
        for (let i = 0; i < singleArray.length-1; i++){

            let minIndex = i;
            for (let j = i + 1; j < singleArray.length; j++){
                if (singleArray[j] < singleArray[minIndex]) minIndex = j;
            }
            let temp = singleArray[minIndex]
            singleArray[minIndex] = singleArray[i]
            singleArray[i] = temp
        }
        //get middle number.
        let midNum = singleArray[singleArray.length/2]+singleArray[(singleArray.length/2)-1];
        return midNum/2;
    }
}
console.log(getMedian());
//Remove duplicates from an array
let num1 = [7,14,7,46,14];
let elem = num1[0];
let removeDuplicate = function(){
    for(let i=0; i < num1.length;i++){
        elem = num1[i];
        for(let j=i+1; j < num1.length;j++){
            if(elem == num1[j]){
                num1.splice(j,1);
            }
        }
    }
    return num1;
};
console.log(removeDuplicate());
//Rotate an array by k times
let inArray1 = [9,13,19,33,45];
let rotateKTimes = function(param){
    for(let i=0; i < param;i++){
        inArray1.push(inArray1[0]);
        inArray1.splice(0,1);
    }
    return inArray1;
};
console.log(rotateKTimes(2));
//Programs in arrow functions.
// const oddArrow = [8, 19, 5, 6, 14, 9, 13];
// let oddNumArrow = [];
// let oddNumArrFunc = (oddArrow) => {
//     for(let i=0; i< oddArrow.length;i++){
//         if(oddArrow[i]%2 ==1){
//             oddNumArrow.push(oddArrow[i]);
//         }
//     }
//     return oddNumArrow;
// }
// console.log(oddNumArrFunc(oddArrow));