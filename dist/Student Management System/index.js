"use strict";
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
    Gender[Gender["Other"] = 2] = "Other";
})(Gender || (Gender = {}));
class StudentRecord {
    constructor(id, fullName, age, gender, email) {
        this.grades = [];
        this.id = id;
        this.fullName = fullName;
        this.age = age;
        this.gender = gender;
        if (email)
            this._email = email;
    }
    addGrade(grade) {
        this.grades.push(grade);
    }
    getAverageGrade() {
        const total = this.grades.reduce((sum, [, score]) => sum + score, 0);
        return this.grades.length === 0 ? 0 : total / this.grades.length;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        if (value && !value.includes("@")) {
            throw new Error("Invalid email format.");
        }
        this._email = value;
    }
}
const students = [
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
function filterByGender(students, gender) {
    return students.filter(student => student.gender === gender);
}
const femaleStudents = filterByGender(students, Gender.Female);
console.log(femaleStudents.map(s => s.fullName));
const maleStudents = filterByGender(students, Gender.Male);
console.log(maleStudents.map(s => s.fullName));
const otherStudents = filterByGender(students, Gender.Other);
console.log(otherStudents.map(s => s.fullName));
function formatStudentID(id) {
    if (typeof id.id === "number") {
        return `ID-${id.id.toString().padStart(4, "0")}`;
    }
    else if (typeof id.id === "string") {
        return `ID-${id.id.toLocaleUpperCase()}`;
    }
    else {
        throw new Error("Invalid ID type");
    }
}
console.log(formatStudentID({ id: 25 }));
console.log(formatStudentID({ id: "ab12" }));
function getPerformanceLevel(score) {
    if (score >= 85) {
        return "Excellent";
    }
    else if (score >= 60) {
        return "Average";
    }
    else {
        return "Poor";
    }
}
console.log(getPerformanceLevel(92));
console.log(getPerformanceLevel(75));
console.log(getPerformanceLevel(50));
students.forEach(student => {
    const avg = student.getAverageGrade();
    const level = getPerformanceLevel(avg);
    console.log(`${student.fullName} -Avg: ${avg} -Perfomance: ${level}`);
});
//# sourceMappingURL=index.js.map