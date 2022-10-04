const massMark = 78 ;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// const massMark = 95;
// const heightMArk = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const markBMI = massMark / heightMark ** 2;
const johnBMI = massJohn / heightJohn * heightJohn;

if (markBMI > johnBMI) {
  console.log(`Mark's BMI ${markBMI} is higher than John's BMI ${johnBMI}`)
}
else {
  console.log(`John's BMI ${johnBMI} is higher than Mark's BMI ${markBMI}`)
}
