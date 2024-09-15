console.log("hello from dom js");
//console.log(document);
console.log(document.body);


/*
function calculateTax(income, expenses) {
  if (
    income < expenses ||
    income <= 0 ||
    expenses <= 0 ||
    typeof income !== "number" ||
    typeof expenses !== "number"
  ) {
    return "Invalid Input";
  }

  let totalIncome = income - expenses;

  let tax = totalIncome * 0.2;

  return tax;
}

function sendNotification(email) {
  let emailSign = email.split("@");

  if (emailSign.length !== 2) {
    return "Invalid Email";
  }

  let result = emailSign[0] + " sent you an email from " + emailSign[1];

  return result;
}

function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  }

  let numbers = "0123456789";

  for (char of numbers) {
    if (name.includes(char)) {
      return true;
    }
  }

  return false;
}

function calculateFinalScore(obj) {
  if (
    typeof obj !== "object" ||
    typeof obj.name !== "string" ||
    typeof obj.testScore !== "number" ||
    typeof obj.schoolGrade !== "number" ||
    typeof obj.isFFamily !== "boolean" ||
    obj.testScore > 50 ||
    obj.schoolGrade > 30
  ) {
    return "Invalid Input";
  }

  let score1 = obj.testScore;
  let score2 = obj.schoolGrade;
  let fFamily = 0;

  if (obj.isFFamily === true) {
    fFamily = 20;
  } else {
    fFamily = 0;
  }

  let result = score1 + score2 + fFamily;

  if (obj.isFFamily === false || result < 80) {
    return false;
  } else {
    return true;
  }
}

console.log(
  calculateFinalScore({
    name: "Rajib",
    testScore: 50,
    schoolGrade: 30,
    isFFamily: false,
  })
);

function waitingTime(waitingTimes, serialNumber) {
  if (
    !Array.isArray(waitingTimes) ||
    typeof serialNumber !== "number" ||
    isNaN(serialNumber) === true ||
    waitingTimes.length > serialNumber
  ) {
    return "Invalid Input";
  }

  let sum = 0;

  let avg = 0;

  for (let times of waitingTimes) {
    sum = sum + times;

    avg = sum / waitingTimes.length;
  }

  let average = Math.round(avg);

  let actualSerialNumber = serialNumber - 1;

  let endViva = actualSerialNumber - waitingTimes.length;

  let result = average * endViva;

  return result;
}
*/