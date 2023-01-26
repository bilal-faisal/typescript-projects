import Person from "./Person.js";
import Course from "./Course.js";

class Student extends Person {
  private static generateID: number = 0;
  public readonly id: number;
  public rollNumber: string;
  public courses: Course[] = [];

  constructor(name: string, age: number, rollNo: string) {
    super(name, age);
    this.rollNumber = rollNo;
    this.id = ++Student.generateID;
  }

  public registerForCourses(...newCourses: Course[]) {
    newCourses.forEach((course) => {
      if (this.courses.includes(course)) {
        console.log(
          `${this.name} is already registered in the ${course.name} course`
        );
      } else {
        this.courses.push(course);
        course.addStudents(this);
      }
    });
  }
}

export default Student;
