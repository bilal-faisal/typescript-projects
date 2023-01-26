import Person from "./Person.js";
class Instructor extends Person {
    static generateID = 0;
    id;
    salary;
    courses = [];
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
        this.id = ++Instructor.generateID;
    }
    assignCourses(...newCourses) {
        newCourses.forEach((course) => {
            if (this.courses.includes(course)) {
                console.log(`Sir ${this.name} is already assigned to the ${course.name} course`);
            }
            else {
                this.courses.push(course);
                course.addInstructors(this);
            }
        });
    }
}
export default Instructor;
