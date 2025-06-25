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
        const [subject, score] = grade;
        if (score < 0 || score > 100) {
            throw new Error(`Invalid score for ${subject}: ${score}. Score must be between 0 and 100.`);
        }
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
    getGrades() {
        return this.grades;
    }
}
function formatStudentID(id) {
    if (typeof id.id === "number") {
        return `ID-${id.id.toString().padStart(4, "0")}`;
    }
    else if (typeof id.id === "string") {
        return `ID-${id.id.toUpperCase()}`;
    }
    else {
        throw new Error("Invalid ID type");
    }
}
function getPerformanceLevel(score) {
    if (score >= 85)
        return "Excellent";
    else if (score >= 60)
        return "Average";
    else
        return "Poor";
}
function findMax(items, keySelector) {
    if (items.length === 0)
        throw new Error("Array is empty");
    return items.reduce((maxItem, currentItem) => keySelector(currentItem) > keySelector(maxItem) ? currentItem : maxItem);
}
const students = [
    new StudentRecord({ id: 101 }, "Prisca", 20, Gender.Female, "prisca@example.com"),
    new StudentRecord({ id: 102 }, "John", 22, Gender.Male, "john@example.com"),
    new StudentRecord({ id: 103 }, "Alex", 21, Gender.Other),
    new StudentRecord({ id: 104 }, "Linda", 23, Gender.Female, "linda@example.com"),
    new StudentRecord({ id: 105 }, "Mike", 24, Gender.Male),
];
const studentGrades = [
    [students[0], [["Math", 95], ["Science", 90]]],
    [students[1], [["Math", 70], ["Science", 75]]],
    [students[2], [["Math", 88], ["Science", 82]]],
    [students[3], [["Math", 100], ["Science", 100]]],
    [students[4], [["Math", 59], ["Science", 45]]],
];
for (const [student, grades] of studentGrades) {
    for (const grade of grades) {
        try {
            student.addGrade(grade);
        }
        catch (error) {
            console.error(`Error adding grade for ${student.fullName}: ${error.message}`);
        }
    }
}
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
console.log("\n🎓 Excellent Students:");
students
    .filter(s => getPerformanceLevel(s.getAverageGrade()) === "Excellent")
    .forEach(s => console.log(`- ${s.fullName}`));
console.log("\n Students Sorted by Average Grade:");
const sortedByAvg = [...students].sort((a, b) => b.getAverageGrade() - a.getAverageGrade());
sortedByAvg.forEach(s => console.log(`${s.fullName} - Avg: ${s.getAverageGrade()} - ${getPerformanceLevel(s.getAverageGrade())}`));
const topStudent = findMax(students, s => s.getAverageGrade());
console.log(`\n🏆 Top Student: ${topStudent.fullName}`);
console.log(`Average: ${topStudent.getAverageGrade()}`);
console.log(`Performance: ${getPerformanceLevel(topStudent.getAverageGrade())}`);
//# sourceMappingURL=index.js.map