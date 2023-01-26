class Department {
    static generateID = 0;
    id;
    name;
    courses = [];
    constructor(name) {
        this.name = name;
        this.id = ++Department.generateID;
    }
    addCourses(...newCourses) {
        newCourses.forEach((course) => {
            if (this.courses.includes(course)) {
                console.log(`${course.name} course is already in ${this.name} department.`);
            }
            else {
                this.courses.push(course);
            }
        });
    }
}
export default Department;
