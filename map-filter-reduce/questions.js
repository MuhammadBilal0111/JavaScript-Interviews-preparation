// interview Question 1
let students = [
  { name: "Piyush", rollNumber: 31, marks: 40 },
  { name: "Hashir", rollNumber: 36, marks: 10 },
  { name: "Bilal", rollNumber: 37, marks: 80 },
  { name: "Arham", rollNumber: 39, marks: 99 },
];
// interview Question 2
console.log(
  students.map((student) => {
    return student.name.toUpperCase();
  })
);
// interview Question 3
console.log(
  students.filter((student) => {
    return student.marks > 60;
  })
);
// interview Question 4
// marks of students greater than 60 and roll number greater than 15
students.filter((student) => student.marks > 60 && student.rollNumber > 15);

// interview Question 5
// calculate the total marks of students
console.log(
  "total",
  students.reduce((acc, curr, i, arr) => acc + curr.marks, 0)
);
// interview Question 6
// return name of student who scored more than 60
console.log(students.filter((std) => std.marks > 80).map((std) => std.name));

// interview Question 7
// return total marks of students with marks greater than 60 after 20 marks have been added to those who scored less than 60
const updatedMarks = students.map((student) => {
  if (student.marks < 60) {
    return { ...student, marks: student.marks + 20 };
  }
  return student;
});
