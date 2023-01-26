class Course {
    static generateID = 0;
    id;
    name;
    students = [];
    instructors = [];
    constructor(name) {
        this.name = name;
        this.id = ++Course.generateID;
    }
    addStudents(...newStudents) {
        newStudents.forEach((student) => {
            if (this.students.includes(student)) {
                console.log(`${student.name} is already in this course.`);
            }
            else {
                this.students.push(student);
            }
        });
    }
    addInstructors(...newInstructors) {
        newInstructors.forEach((instructor) => {
            if (this.instructors.includes(instructor)) {
                console.log(`Sir ${instructor.name} is already assigned to this course`);
            }
            else {
                this.instructors.push(instructor);
            }
        });
    }
}
export default Course;
