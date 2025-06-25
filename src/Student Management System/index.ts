type StudentID={
id: number;
}

interface Student{
  id : StudentID;
  fullName: string;
  age : number;
  email?:string;
  gender:Gender;
}
enum Gender {
  Male,
  Female,
  Other, 
}
type subjectGrade= [subject: string, score: number];

class StudentRecord implements Student{
  id :StudentID;
  fullName: string;
  age : number;
  gender: Gender;
  private _email?: string;
  private grades : subjectGrade[]=[];
  
  constructor(id : StudentID, fullName: string, age: number, gender : Gender, email?: string){
    this.id =id;
    this.fullName =fullName;
    this.age =age;
    this.gender= gender;
    if(email) this._email =email;
  }
  addGrade(grade: subjectGrade): void{
    this.grades.push(grade);
  }
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
const students: StudentRecord[] = [
  new StudentRecord({ id: 1 }, "Prisca", 20, Gender.Female, "prisca@example.com"),
  new StudentRecord({ id: 2 }, "John", 22, Gender.Male, "john@example.com"),
  new StudentRecord({ id: 3 }, "Alex", 21, Gender.Other),
];

students[0].addGrade(["Math", 90]);
students[0].addGrade(["Science", 95]);

students[1].addGrade(["Math", 70]);
students[1].addGrade(["Science", 75]);

students[2].addGrade(["Math", 85]);
students[2].addGrade(["Science", 80]);

function filterByGender(students: StudentRecord[], gender: Gender): StudentRecord[] {
  return students.filter(student => student.gender === gender);
}


const femaleStudents = filterByGender(students, Gender.Female);
console.log(femaleStudents.map(s => s.fullName)); 

const maleStudents = filterByGender(students, Gender.Male);
console.log(maleStudents.map(s=>s.fullName));
 
const otherStudents = filterByGender(students, Gender.Other);
console.log(otherStudents.map(s => s.fullName));


  
