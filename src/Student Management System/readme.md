## "TypeScript Student Management System"
You are building a TypeScript-powered system that helps manage a university’s student database. 
The system should:

- Store and display students
- Handle subjects and grades
- Use classes, interfaces, generics, enums, tuples, and union types
- Perform type-safe operations
- And allow querying/filtering functionality

## Main Concepts Covered
- Variables and functions
- Interfaces and types
- Enums and Tuples
- Classes and OOP
- Generics
- Union & literal types
- Arrays, loops, conditionals
- Error handling and type guards

## Step-by-Step Breakdown (Mini Challenges)
### 🔹 STEP 1: Define Basic Types and Interfaces
Goal: Practice type, interface, and primitive types.

- Q1: Create a type for StudentID that can be either a number or a string.
- Q2: Create an interface for a Student with:

🔹 STEP 2: Use Enums and Tuples
Goal: Use enum and tuple for clarity and structure.

- Q3: Create an enum called Gender with values "Male", "Female", "Other".
- Q4: Use a tuple to represent a subject grade like:

🔹 STEP 3: Use Classes and OOP
Goal: Create a class with properties and methods.

- Q5: Create a class StudentRecord that implements the Student interface. Add:

    - A constructor
    - A method addGrade(grade: SubjectGrade)
    - A method getAverageGrade()

- Q6: Make email a private field with a getter/setter.

🔹 STEP 4: Work with Arrays and Functional Methods
Goal: Handle arrays of students and subjects.

- Q7: Create an array of StudentRecord instances.
- Q8: Write a function to filter students by gender.
- Q9: Write a function to sort students by average grade.

🔹 STEP 5: Use Union Types, Type Guards, and Literal Types
Goal: Handle flexible inputs.

- Q10: Write a function formatStudentID(id: StudentID): string
    - Use a type guard to handle both number and string differently.

- Q11: Create a type PerformanceLevel = "Excellent" | "Average" | "Poor"
    - Write a function getPerformance(score: number): PerformanceLevel

🔹 STEP 6: Add a Generic Utility Function
Goal: Use generics for reusability.

- Q12: Create a generic function findMax<T>(items: T[], keySelector: (item: T) => number): T
    - Use it to find the student with the highest average score.

🔹 STEP 7: Error Handling
Goal: Safely manage bad input.

- Q13: In addGrade(), throw an error if score > 100 or < 0.
    - Use try/catch to handle errors when adding invalid grades.

🔹 STEP 8: Bring It All Together
Goal: Simulate the system in action.

- Q14: Initialize 3–5 students, assign them grades, print:

- Name, ID, Gender
- Grades
- Average score
- Performance level

- Q15: Use your functions to:

- Print all “Excellent” students
- Print sorted student list by grade
- Show student with best score

### Bonus Challenge
Build a CLI or simple browser interface using Node.js or HTML to display the results interactively (optional but rewarding!).

### Final Result
You’ll have a fully type-safe, functional student management system in TypeScript — and along the way, you'll have practiced every major feature you need for interviews or gate exams.