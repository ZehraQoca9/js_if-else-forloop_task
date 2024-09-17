//? 1. Bir 'myArray' adli deyisen yaradin ve her hansi bir arrayi menimsedin .
//? Algoritma girilən arrayin içindəki elementlərin hər birindən neçə dənə olduğunu ekrana yazdırmalıdır.
/*
let myArray = [9, 3, 4, 2, 2, 4,4];
let countObj = {};

myArray.forEach(item => {
    if (countObj[item]) {
        countObj[item]++
    } else {
        countObj[item] = 1
    }
});

// console.log(count);

for (const [item, count] of Object.entries(countObj)) {
    console.log(`Element: ${item}, Count: ${count}`);
}
*/

//? 2.'firstArr' ve 'secondArr' adli iki deyisken yaradib, her hansi array menimsedin.
//? Algoritma göndərilən iki arrayi qarşılaşdırıb içindəki elementlərin eyni olub olmadığını yoxlamalı və ona görə boolean dəyər ekrana çap etməlidir.
/*
let firstArr = [1,2,3];
let secondArr = [1,2,3];


function check(firstArr, secondArr) {
    if(firstArr.length !== secondArr.length){
        return false
    }

    for(let i=0; i<firstArr.length; i++){
        if(firstArr[i] !== secondArr[i]){
            return false
        }
    }

    return true
}
console.log(check(firstArr,secondArr))
*/


//? 3.Bir number arrayı yaradın və buna dəyər mənimsədin.
//? Arrayin içində olan ən böyük ikinci və ən kiçik ikinci ədədləri ekrana yazdırın.
/*
const numbers = [4, 7, 10, 8, 3, 1];
function findSecondLargestAndSecondSmallest(arr) {
    arr.sort((a, b) => a - b);

    const uniqueArr = [...new Set(arr)];

    if (uniqueArr.length < 2) {
        console.log('An array does not have two unique elements.');
        return;
    }

    const secondSmallest = uniqueArr[1];
 
    const secondLargest = uniqueArr[uniqueArr.length - 2];

    console.log(`The second smallest number: ${secondSmallest}`);
    console.log(`The second largest number: ${secondLargest}`);
}

findSecondLargestAndSecondSmallest(numbers);
*/


//? 4.Bir number arrayı yaradın və buna dəyər mənimsədin.
//? Arrayin içində olan sadəcə müsbət ədədləri ayrı,
//? mənfi ədədləri ayrı toplayıb ekrana yazdırın.

/*
let newArr =[-4, -6, -1, 9, 4, 7];

let sum1 = 0;
let sum2 = 0;
for(let i=0; i<newArr.length; i++){
    if(newArr[i] > 0 ){
        sum1+=newArr[i] 
    }else{
        sum2+=newArr[i]
    }
};
console.log(sum1);
console.log(sum2);
*/

//? 5.Bir number arrayı, 'limit' adlı bir number dəyişkən yaradın və bunlara dəyər mənimsədin.
//? Arrayin içində olan ədədlərdən limit'dən yüksək olanlarını seçib yeni bir arraya doldurun və yeni arrayi ekrana yazdırın.

let numArr = [5,7,2,4];
let limit = 4;

let filterNumbers = numArr.filter(num => num > limit);

console.log(filterNumbers); 