// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:

// # 3   
const validateCred = array => {
// create variables. digit and digitArr for using later,they are 0 value or empty.
  let digit = 0
  let digitArr = [];
// itelate target array from farthest index. Every other digit is doubled (the check digit is not doubled). If the number is greater than 9 after doubling, subtract 9 from its value.
  let numCount = 0; 
  for(let i = array.length-1; i > -1; i --){
      digit = array[i];
      numCount += 1;
      if (numCount % 2 === 0){
        digit = array[i] * 2;
        if(digit > 9){
          digit = digit - 9;
        }
      }else if(numCount % 2 !== 0){
        digit = array[i];
  }
  digitArr.unshift(digit);
  }
// add all digit number by iterate digitArr
   const sumNum = arr => {
     let number = 0;
     for(i = 0; i < arr.length; i++){
       number = number + arr[i];
     }
     return number;
   }
// check if sumNum can be 0 if it divides 10 and return true if it can, return false if it cant 
   let sumDigit = sumNum(digitArr);
   if(sumDigit % 10 === 0){
    //  console.log('valid')
     return true;
   } else {
    //  console.log('invalid');
     return false;
   }
};
// # 4
// function to check through the nested array for which numbers are invalid, and return another nested array of invalid cards.
const findInvalidCards = nestedArr =>{
  let invalidCardsArr = [];
  for( let i = 0; i < nestedArr.length; i++){
    // console.log(nestedArr[i]);
    if(validateCred(nestedArr[i]) === false){
      invalidCardsArr.push(nestedArr[i]);
    }
  }
  return invalidCardsArr;
}

// set object that keys are last number of cards and values are the card companys number.
let checkDigit = {
    3: 'Amex (American Express)',
    4: 'Visa',
    5: 'MasterCard',
    6: 'Discover'
  },
// # 5
// function to identify the credit card companies that have possibly issued these faulty numbers. 
invalidCardCompanies = arr => {
  let invalidCardsArr = findInvalidCards(arr);
  companyName = '';
  invalidCardsCompany = [];
  for( let arr of invalidCardsArr){
    if ( arr[arr.length-1] !== 3 && arr[arr.length-1] !== 4 && arr[arr.length-1] !== 5 && arr[arr.length-1] !== 6){
        companyName = 'company not found'}
// return array of companies that have mailed out cards with invalid numbers. This array isn't contain duplicates.      
    for(let key in checkDigit){
      if ( arr[arr.length-1] == key){
         companyName = checkDigit[key];
         if(!invalidCardsCompany.includes(companyName)){
           invalidCardsCompany.push(companyName);
         }
        }
      } 
  }
  console.log(invalidCardsCompany);
  return invalidCardsCompany;
};

invalidCardCompanies(batch);
//return 'MasterCard', 'Amex (American Express)', 'Visa'
