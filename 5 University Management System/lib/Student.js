import Person from "./Person.js";
class Student extends Person {
    static generateID = 0;
    id;
    rollNumber;
    courses = [];
    constructor(name, age, rollNo) {
        super(name, age);
        this.rollNumber = rollNo;
        this.id = ++Student.generateID;
    }
    registerForCourses(...newCourses) {
        newCourses.forEach((course) => {
            if (this.courses.includes(course)) {
                console.log(`${this.name} is already registered in the ${course.name} course`);
            }
            else {
                this.courses.push(course);
                course.addStudents(this);
            }
        });
    }
}
export default Student;
