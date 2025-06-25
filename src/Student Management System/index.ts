// Student Management System
// Type Definitions
// This code defines a TypeScript class for managing student records, including their grades and performance levels
type StudentID = { id: number | string };

interface Student {
  id: StudentID;
  fullName: string;
  age: number;
  email?: string;
  gender: Gender;
}

enum Gender {
  Male,
  Female,
  Other,
}

type subjectGrade = [subject: string, score: number];
type PerformanceLevel = "Excellent" | "Average" | "Poor";

// Class Definition
// This class implements the Student interface and provides methods to manage student records,
//  including adding grades and calculating average grades.
class StudentRecord implements Student {
  id: StudentID;
  fullName: string;
  age: number;
  gender: Gender;
  private _email?: string;
  private grades: subjectGrade[] = [];

  constructor(id: StudentID, fullName: string, age: number, gender: Gender, email?: string) {
    this.id = id;
    this.fullName = fullName;
    this.age = age;
    this.gender = gender;
    if (email) this._email = email;
  }

  addGrade(grade: subjectGrade): void {
    const [subject, score] = grade;
    if (score < 0 || score > 100) {
      throw new Error(`Invalid score for ${subject}: ${score}. Score must be between 0 and 100.`);
    }
    this.grades.push(grade);
  }

  getAverageGrade(): number {
    const total = this.grades.reduce((sum, [, score]) => sum + score, 0);
    return this.grades.length === 0 ? 0 : total / this.grades.length;
  }

  get email(): string | undefined {
    return this._email;
  }

  set email(value: string | undefined) {
    if (value && !value.includes("@")) {
      throw new Error("Invalid email format.");
    }
    this._email = value;
  }

  getGrades(): subjectGrade[] {
    return this.grades;
  }
}

// Utility Functions
// These functions provide additional functionality for formatting student IDs,
//  calculating performance levels,
// and finding the maximum value in an array based on a key selector.
// They are used to enhance the student management system's capabilities.
function formatStudentID(id: StudentID): string {
  if (typeof id.id === "number") {
    return `ID-${id.id.toString().padStart(4, "0")}`;
  } else if (typeof id.id === "string") {
    return `ID-${id.id.toUpperCase()}`;
  } else {
    throw new Error("Invalid ID type");
  }
}

function getPerformanceLevel(score: number): PerformanceLevel {
  if (score >= 85) return "Excellent";
  else if (score >= 60) return "Average";
  else return "Poor";
}

function findMax<T>(items: T[], keySelector: (item: T) => number): T {
  if (items.length === 0) throw new Error("Array is empty");
  return items.reduce((maxItem, currentItem) =>
    keySelector(currentItem) > keySelector(maxItem) ? currentItem : maxItem
  );
}

// Sample Data
// This section creates sample student records and grades to demonstrate 
// the functionality of the system.
const students: StudentRecord[] = [
  new StudentRecord({ id: 101 }, "Prisca", 20, Gender.Female, "prisca@example.com"),
  new StudentRecord({ id: 102 }, "John", 22, Gender.Male, "john@example.com"),
  new StudentRecord({ id: 103 }, "Alex", 21, Gender.Other),
  new StudentRecord({ id: 104 }, "Linda", 23, Gender.Female, "linda@example.com"),
  new StudentRecord({ id: 105 }, "Mike", 24, Gender.Male),
];

// Sample Grades
// This section creates sample grades for each student to demonstrate 
// the functionality of adding grades,
// calculating average grades, and determining performance levels.
// Each student is assigned a set of grades for different subjects. 
const studentGrades: [StudentRecord, subjectGrade[]][] = [
  [students[0], [["Math", 95], ["Science", 90]]],
  [students[1], [["Math", 70], ["Science", 75]]],
  [students[2], [["Math", 88], ["Science", 82]]],
  [students[3], [["Math", 100], ["Science", 100]]],
  [students[4], [["Math", 59], ["Science", 45]]],
];
//error  handling is implemented to catch any issues when adding grades.
for (const [student, grades] of studentGrades) {
  for (const grade of grades) {
    try {
      student.addGrade(grade);
    } catch (error) {
      console.error(`Error adding grade for ${student.fullName}: ${(error as Error).message}`);
    }
  }
}

// Display Student Records
// This section iterates through the student records and displays their details,
for (const student of students) {
  console.log("-------------");
  console.log(`Name   : ${student.fullName}`);
  console.log(`ID     : ${formatStudentID(student.id)}`);
  console.log(`Gender : ${Gender[student.gender]}`);
  console.log("Grades :");
  student.getGrades().forEach(([subject, score]) => {
    console.log(`  ${subject}: ${score}`);
  });
  const avg = student.getAverageGrade();
  const level = getPerformanceLevel(avg);
  console.log(`Average    : ${avg}`);
  console.log(`Performance: ${level}`);
}

// filtering students based on performance levels,
// sorting students by average grades, and finding the top student.
console.log("\n🎓 Excellent Students:");
students
  .filter(s => getPerformanceLevel(s.getAverageGrade()) === "Excellent")
  .forEach(s => console.log(`- ${s.fullName}`));

//also displays the students who are performing at an excellent level.
console.log("\n Students Sorted by Average Grade:");
const sortedByAvg = [...students].sort((a, b) => b.getAverageGrade() - a.getAverageGrade());
sortedByAvg.forEach(s =>
  console.log(`${s.fullName} - Avg: ${s.getAverageGrade()} - ${getPerformanceLevel(s.getAverageGrade())}`)
);

// Finding the top student based on average grade
// This section uses the findMax utility function to determine the student 
// with the highest average grade,
const topStudent = findMax(students, s => s.getAverageGrade());
console.log(`\n🏆 Top Student: ${topStudent.fullName}`);
console.log(`Average: ${topStudent.getAverageGrade()}`);
console.log(`Performance: ${getPerformanceLevel(topStudent.getAverageGrade())}`);
