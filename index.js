//object literal
let bob = {
  fname: "bob",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1603',
      grades: [ 89, 34, 67 ]
    },
    {
      course: 'INFO 1601',
      grades: [ 89, 34, 67 ]
    }
  ]
};

let sally = {
  fname: "sally",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1601',
      grades: [ 100, 89, 79 ]
    }
  ]
};

let paul = {
  fname: "paul",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1600',
      grades: [ 89, 34, 67 ]
    }
  ]
};


const students = [bob, sally, paul];

function getAverageGrade(student, course) {

   let courseFound = false; 

   for (let i = 0; i < student.transcript.length; i++) {
      if (student.transcript[i].course === course) {
         courseFound = true;
         for (let j =0; j < student.transcript[i].grades.length; j++){
            total += student.transcript[i].grades[j];
            count++;
         }
      }
   }

   if (courseFound) {
      return total / count;
   } else {
      return -1;
   }
}

function getAssignmentMark(student, course, num) {
   for (let i = 0; i < student.transcript.length; i++){
      if(student.transcript[i].course === course) {
       return student.transcript[i].grades[num];
      } else {
         return -1;
      }
   }
   return -1;
}

function averageAssessment(students, courseName, assignment){

   let total = 0;
   let count = 0;

   for (let i = 0; i < students.length; i++){
      let mark = getAssignmentMark(students[i], courseName, assignment);
      if (mark != -1){
         total += mark;
         count++;
      }
   }

   if (count > 0){
      return total / count;
   } else {
      return -1;
   }
}

console.log(averageAssessment(students, 'INFO 1603', 0));