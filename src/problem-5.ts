
/**
 * Function name must be: getStudentResult
Scenario
A school stores the marks of each student in an array. Teachers want a quick summary containing the student's name, average mark, and whether the student passed or failed. A student is considered passed if their average mark is at least 40.
Student Structure
{
    name: string;
    marks: number[];
}
Task
Create a function named getStudentResult. The function should receive a student object, calculate the average of all marks, determine whether the student passed, and return a new object containing name, average, and result.
Edge Case
Think about what your function should do if the marks array is empty.

 */ 

interface Student {
    name: string
    marks: number[]
}

interface Result {
    name: string
    average: number
    result: string
}


function getStudentResult(student: Student): Result {

    const marks = student.marks;
    const totalMarks: number = marks.reduce((acc, mark) => acc + mark, 0);
    const averageMarks: number = (totalMarks/marks.length);
    const passStatus: string = (averageMarks >= 40) ? "Passed" : "Failed";

    return {
        name: student.name,
        average: averageMarks,
        result: passStatus
    }
 
}


console.log(getStudentResult({
    name: "Rafi",
    marks: [80, 75, 90, 85]
}

));
