// This is required to get input from the user in the console.
const readline = require('readline-sync');

// This section is needed for testing.
module.exports = {
  studentMarks,
  classAverage,
  grade
}

//Declaring the variables required for executing the first function
let studentAvg = 0;

//This is the first function of the code. This function will calculate the average marks of each student. 
function studentMarks(studentName, noOfSubjects) {
  //If the user inputs the number of subjects as less than or equal to zero, it will show an error
  if (noOfSubjects <= 0) {
    console.log("Error. Subjects can't be equal to or less than zero");
  }

  else {
    let i = 1;
    while (i <= noOfSubjects) {
      let mark = parseInt(readline.question(`Enter marks of subject ${i} (out of 100): `));
      //Taking input from the user in the form of subject marks. Marks inputed should be out of hundred to get the correct output
      
      studentAvg = parseInt(studentAvg + mark);
      i++;
    }
    studentAvg = Math.round(studentAvg / noOfSubjects, 1);
    //Printing the output
    console.log(" ");
    console.log(studentName + " has an average of: " + studentAvg);
    //console.log(" ");
  }
  return studentAvg;
}

//Declaring the variables required for executing the second function
let classAvg = 0;

//This is the second function of the code. This function will calculate the average marks of the whole class
function classAverage(classStrength) {
  //If the user inputs the class strength as less than or equal to zero, it will show an error
  if (classStrength <= 0) {
    console.log("Error. Number of students in a class can't be equal to or less than zero")
  }

  else {
    for (let i = 1; i <= classStrength; i++) {
      let stdAvg = parseInt(readline.question(`Enter the average marks of student ${i} (out of 100): `));//Taking input from the user in the form of average marks of students. Marks inputed should be out of hundred to get the correct output
      classAvg = parseInt(classAvg + stdAvg);
    }
    classAvg = Math.round(classAvg / classStrength, 1);
    //Printing the output
    console.log(" ");
    console.log("Your class has an average of: " + classAvg);
    //console.log(" ");
  }
  return classAvg;
}

//This is the third function of the code. This fucntion will calculate the grade of the student or class based on the input recieved.
function grade(average) {
  //These conditional statements are going to find the grade of the student based on their average marks
  if (average >= 90 && average <= 100) {
    console.log("Grade: E");
  }

  else if (average >= 80 && average < 90) {
    console.log("Grade: C")
  }

  else if (average >= 70 && average < 80) {
    console.log("Grade: P")
  }

  else if (average >= 60 && average < 70) {
    console.log("Grade: D")
  }

  else if (average >= 50 && average < 60) {
    console.log("Grade: B")
  }

  else if (average <= 50 && average >= 0) {
    console.log("Grade: IDQ")
  }

  //If the average is below zero or more than hundred, it will display an error message as the average of the class cannot be less than zero or more than hundred  
  else {
    console.log("Invalid Input entered. Check the marks entered previously");
  }
}

//This is the main part of the code.
console.log("Hello! Welcome to Marks Calculator!");
let input = readline.question("What do you want to find: Student Average, Student Grade, Class Average or Class Grade?");
//String manipulation 
input = input.trim();
input = input.toUpperCase();

if (input == "STUDENT AVERAGE") {
  //calling the first function for the first time
  const studentAverage = studentMarks(readline.question("Enter the student's name: "), parseInt(readline.question("Enter the number of subjects: ")));
}

else if (input == "STUDENT GRADE") {
  //calling the first function for the second time
  const studentAverage = studentMarks(readline.question("Enter the student's name: "), parseInt(readline.question("Enter the number of subjects: ")));

  //calling the third function for the firt time
  grade(studentAverage);
}

else if (input == "CLASS AVERAGE") {
  //calling the second function for the first time
  const clAverage = classAverage(readline.question("Enter the number of students in the class: "));
}

else if (input == "CLASS GRADE") {
  //calling the second function for the second time
  const clAverage = classAverage(readline.question("Enter the number of students in the class: "));

  //Calling the third function for the second time
  grade(clAverage);
}

//If the user inputs anything other than the given options, it will show an error  
else {
  console.log("Error. Invalid input.")
}