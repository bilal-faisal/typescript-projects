import Student from "./Student.js";
import Instructor from "./Instructor.js";

class Course {
  private static generateID: number = 0;
  public readonly id: number;
  public name: string;

  public students: Student[] = [];
  public instructors: Instructor[] = [];

  constructor(name: string) {
    this.name = name;
    this.id = ++Course.generateID;
  }

  public addStudents(...newStudents: Student[]) {
    newStudents.forEach((student) => {
      if (this.students.includes(student)) {
        console.log(`${student.name} is already in this course.`);
      } else {
        this.students.push(student);
      }
    });
  }

  public addInstructors(...newInstructors: Instructor[]) {
    newInstructors.forEach((instructor) => {
      if (this.instructors.includes(instructor)) {
        console.log(
          `Sir ${instructor.name} is already assigned to this course`
        );
      } else {
        this.instructors.push(instructor);
      }
    });
  }
}

export default Course;
