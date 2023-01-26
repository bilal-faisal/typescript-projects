import Person from "./Person.js";
import Course from "./Course.js";

class Instructor extends Person {
  private static generateID: number = 0;
  public readonly id: number;
  public salary: number;
  public courses: Course[] = [];

  constructor(name: string, age: number, salary: number) {
    super(name, age);
    this.salary = salary;
    this.id = ++Instructor.generateID;
  }

  public assignCourses(...newCourses: Course[]) {
    newCourses.forEach((course) => {
      if (this.courses.includes(course)) {
        console.log(
          `Sir ${this.name} is already assigned to the ${course.name} course`
        );
      } else {
        this.courses.push(course);
        course.addInstructors(this);
      }
    });
  }
}

export default Instructor;
