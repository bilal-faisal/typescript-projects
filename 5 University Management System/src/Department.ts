import Course from "./Course.js";

class Department {
  private static generateID: number = 0;
  public readonly id: number;
  public name: string;
  public courses: Course[] = [];

  constructor(name: string) {
    this.name = name;
    this.id = ++Department.generateID;
  }

  public addCourses(...newCourses: Course[]) {
    newCourses.forEach((course) => {
      if (this.courses.includes(course)) {
        console.log(
          `${course.name} course is already in ${this.name} department.`
        );
      } else {
        this.courses.push(course);
      }
    });
  }
}

export default Department;
