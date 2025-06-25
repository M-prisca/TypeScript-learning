// Student Management System
// This code defines a simple student management system with TypeScript.


type StudentID={
id: number;
}// The StudentID type is a custom type that represents a student's ID.
// It is an object with a single property id of type number.

// The Student interface defines the structure of a student object.
// It includes properties such as id, fullName, age, email
interface Student{
  id : StudentID;
  fullName: string;
  age : number;
  email?:string;
  gender:Gender;
}
// enum gender defines the possible values for gender.
enum Gender {
  Male,
  Female,
  Other, 
}

// The subjectGrade type is a tuple that represents a subject and its corresponding score.
// It consists of a string representing the subject name and a number representing the score.
type subjectGrade= [subject: string, score: number];

// The StudentRecord class implements the Student interface and provides methods to manage student records.
class StudentRecord implements Student{
  id :StudentID;
  fullName: string;
  age : number;
  gender: Gender;
  private _email?: string;
  private grades : subjectGrade[]=[];
  
  // The constructor initializes the properties of the StudentRecord class.
  constructor(id : StudentID, fullName: string, age: number, gender : Gender, email?: string){
    this.id =id;
    this.fullName =fullName;
    this.age =age;
    this.gender= gender;
    if(email) this._email =email;
  }
  // Method to add a grade to the student's record.
  // It takes a subjectGrade tuple as an argument and adds it to the grades array.
  addGrade(grade: subjectGrade): void{
    this.grades.push(grade);
  }
    // Method to get the average grade of the student.
  getAverageGrade(): number{
    const total =this.grades.reduce((sum,[, score])=> sum + score, 0);
    return this.grades.length === 0?0 : total/ this.grades.length;
  }
  get email(): string | undefined{
    return this._email;
  }
  set email(value: string | undefined){
    if (value && !value.includes("@")){
      throw new Error("Invalid email format.")
    }
    this._email =value;
}
}
// The Student Management System allows you to create student records, add grades, and filter students
const students: StudentRecord[] = [
  new StudentRecord({ id: 1 }, "Prisca", 20, Gender.Female, "prisca@example.com"),
  new StudentRecord({ id: 2 }, "John", 22, Gender.Male, "john@example.com"),
  new StudentRecord({ id: 3 }, "Alex", 21, Gender.Other),
];
// Adding grades to students
students[0].addGrade(["Math", 90]);
students[0].addGrade(["Science", 95]);

students[1].addGrade(["Math", 70]);
students[1].addGrade(["Science", 75]);

students[2].addGrade(["Math", 85]);
students[2].addGrade(["Science", 80]);

function filterByGender(students: StudentRecord[], gender: Gender): StudentRecord[] {
  return students.filter(student => student.gender === gender);
}
// Example usage of the Student Management System
const femaleStudents = filterByGender(students, Gender.Female);
console.log(femaleStudents.map(s => s.fullName)); 

const maleStudents = filterByGender(students, Gender.Male);
console.log(maleStudents.map(s=>s.fullName));
 
const otherStudents = filterByGender(students, Gender.Other);
console.log(otherStudents.map(s => s.fullName));